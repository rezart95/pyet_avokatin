from langchain.text_splitter import RecursiveCharacterTextSplitter
from utils.text_cleaner import clean_text

def chunk_documents(documents, chunk_size=1000, chunk_overlap=50):
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=chunk_size,
        chunk_overlap=chunk_overlap,
        separators=["\nNeni", "\n", ".", " "]
    )
    for doc in documents:
        doc.page_content = clean_text(doc.page_content)
    return splitter.split_documents(documents)
