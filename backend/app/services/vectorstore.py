from qdrant_client import QdrantClient
from langchain_qdrant import Qdrant
from app.config import settings

def get_qdrant(embeddings):
    client = QdrantClient(
        url=settings.QDRANT_URL,
        api_key=settings.QDRANT_API_KEY
    )
    return Qdrant(
        client=client,
        collection_name=settings.COLLECTION_NAME,
        embeddings=embeddings
    )
