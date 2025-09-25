from pydantic import BaseSettings

class Settings(BaseSettings):
    OPENAI_API_KEY: str
    QDRANT_URL: str
    QDRANT_API_KEY: str
    COLLECTION_NAME: str = "albanian_constitution"

    class Config:
        env_file = ".env"

settings = Settings()
