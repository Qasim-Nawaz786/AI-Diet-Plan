from passlib.hash import bcrypt
from passlib.context import CryptContext
from sqlalchemy.orm import Session
from fastapi import HTTPException
from app.models import User, Payment 


def hash_password(password: str) -> str:
    return bcrypt.hash(password)


#
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verify a password against its hash."""
    return pwd_context.verify(plain_password, hashed_password)

def check_existing_user(db: Session, email: str):
    """Check if a user with the given email already exists."""
    return db.query(User).filter(User.email == email).first()

def validate_payment_status(db: Session, email: str):
    """Check if payment status is 'Completed' for the given email."""
    payment_record = db.query(Payment).filter(Payment.email == email, Payment.status == "Completed").first()
    if not payment_record:
        raise HTTPException(status_code=400, detail="Payment not successful. Please try again.")
    return payment_record
