from sqlalchemy import Column, Integer, String, DateTime
from database import Base
from datetime import datetime

class CheckIn(Base):
    __tablename__ = "checkins"

    id = Column(Integer, primary_key=True, index=True)
    mood = Column(String, nullable=False)
    stress_level = Column(Integer, nullable=False)
    note = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
