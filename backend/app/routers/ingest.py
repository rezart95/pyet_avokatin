from fastapi import APIRouter, UploadFile
from services.loader import load_pdf
from services.chunker import chunk_documents
from services.embeddings import get_embeddings
from services.vectorstore import get_qdrant

router = APIRouter()

@router.post("/ingest")
async def ingest_pdf(file: UploadFile):
    file_path = f"/tmp/{file.filename}"
    with open(file_path, "wb") as f:
        f.write(await file.read())
    
    docs = load_pdf(file_path)
    chunks = chunk_documents(docs)
    embeddings = get_embeddings()
    vectorstore = get_qdrant(embeddings)
    vectorstore.add_documents(chunks)
    
    return {"status": "success", "chunks_ingested": len(chunks)}
