from fastapi import APIRouter
from src.api.v1.endpoints import health

api_router = APIRouter()
api_router.include_router(health.router, prefix="/health",
                          tags=["health"], responses={404: {"description": "Not found"}})
# api_router.include_router(users.router, prefix="/users", tags=["users"], responses={404: {"description": "Not found"}})
# api_router.include_router(spells.router, prefix="/spells", tags=["spells"], responses={404: {"description": "Not found"}})
