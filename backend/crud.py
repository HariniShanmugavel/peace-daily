from sqlalchemy.orm import Session
import models, schemas
from datetime import datetime

def create_checkin(db: Session, checkin: schemas.CheckInCreate):
    db_checkin = models.CheckIn(
        mood=checkin.mood,
        stress_level=checkin.stress_level,
        note=checkin.note,
        created_at=datetime.utcnow()
    )
    db.add(db_checkin)
    db.commit()
    db.refresh(db_checkin)
    return db_checkin

def get_all_checkins(db: Session):
    return db.query(models.CheckIn).order_by(models.CheckIn.created_at.desc()).all()
