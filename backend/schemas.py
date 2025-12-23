from pydantic import BaseModel
from datetime import datetime

class CheckInBase(BaseModel):
    mood: str
    stress_level: int
    note: str | None = None

class CheckInCreate(CheckInBase):
    pass

class CheckInResponse(CheckInBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True
