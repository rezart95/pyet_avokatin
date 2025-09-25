from fastapi import FastAPI
from routers import ingest, query

app = FastAPI(title="Legal RAG API")

app.include_router(ingest.router, prefix="/api")
app.include_router(query.router, prefix="/api")
