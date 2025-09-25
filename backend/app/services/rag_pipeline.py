from langchain.chains import RetrievalQA
from langchain_openai import ChatOpenAI
from .embeddings import get_embeddings
from .vectorstore import get_qdrant

def build_rag_pipeline():
    embeddings = get_embeddings()
    vectorstore = get_qdrant(embeddings)
    retriever = vectorstore.as_retriever(search_kwargs={"k": 3})
    
    llm = ChatOpenAI(
        openai_api_key=None,  # handled by env
        model="gpt-4o-mini",
        temperature=0
    )
    
    return RetrievalQA.from_chain_type(
        llm=llm,
        retriever=retriever,
        chain_type="stuff"
    )
