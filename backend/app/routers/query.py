from fastapi import APIRouter
from pydantic import BaseModel
from services.rag_pipeline import build_rag_pipeline

router = APIRouter()
qa_pipeline = build_rag_pipeline()

class QueryRequest(BaseModel):
    question: str

@router.post("/query")
async def query_qa(req: QueryRequest):
    result = qa_pipeline.run(req.question)
    return {"answer": result}
