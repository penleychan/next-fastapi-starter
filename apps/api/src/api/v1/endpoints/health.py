

from fastapi import APIRouter


router = APIRouter()


@router.get("/", status_code=200)
async def health():
  """
  Health check endpoint.
  Returns a 200 OK response to indicate that the service is running.
  """
  return {"status": "ok"}
