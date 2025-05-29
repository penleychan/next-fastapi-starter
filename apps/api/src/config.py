import os

from dotenv import load_dotenv
from pydantic_settings import BaseSettings, SettingsConfigDict

load_dotenv()

ROOT_PATH = os.getenv("ROOT_PATH", "http://127.0.0.1:8000")


class Settings(BaseSettings):
  PROJECT_NAME: str = "FastAPI App"
  PROJECT_DESCRIPTION: str = "A simple FastAPI app"
  model_config = SettingsConfigDict(env_file=".env")
  API_VERSION: str = "/api/v1"
  ROOT: str = ROOT_PATH


settings = Settings()
