from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from typing import List

import models, schemas, crud
from database import SessionLocal, engine

# Create tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Peace Daily API")

# Dependency: get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Health check
@app.get("/")
def root():
    return {"status": "ok"}

# Create a new check-in
@app.post("/checkin", response_model=schemas.CheckInResponse)
def create_checkin(checkin: schemas.CheckInCreate, db: Session = Depends(get_db)):
    return crud.create_checkin(db=db, checkin=checkin)

# Get all check-ins
@app.get("/checkins", response_model=List[schemas.CheckInResponse])
def get_checkins(db: Session = Depends(get_db)):
    return crud.get_all_checkins(db)
