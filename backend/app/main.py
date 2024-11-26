from datetime import timedelta
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session, sessionmaker
from sqlmodel import SQLModel
from sqlalchemy.sql import func
from typing import AsyncGenerator, Optional
from contextlib import asynccontextmanager
from app.debs import engine, SessionLocal
from app.hashing import get_password_hash
from typing import Generator, Annotated
from app.models import User, Payment, IntialUserData, UserCreate
from app.functions.function import hash_password
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from app.auth.auth import create_access_token
import bcrypt 





oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

def create_db_and_tables() -> None:
    SQLModel.metadata.create_all(engine)

@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncGenerator[None, None]:
    # print("Creating tables...")
    create_db_and_tables()
    yield

# FastAPI app instance
app = FastAPI(lifespan=lifespan, title="Hello World API with DB", version="0.0.1")

# Dependency to get the database session
def get_db() -> Generator[Session, None, None]:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def get_dashboard():
    return {"msg": "Welcome to the dashboard"}

# Route for registering a new user
@app.post("/create-account/")
async def register_user(user: UserCreate, db: Session = Depends(get_db)):
    # Check if passwords match
    if user.password != user.confirm_password:
        raise HTTPException(status_code=400, detail="Passwords do not match")
    
    # Check if email is already registered
    existing_user = db.query(User).filter(User.email == user.email).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    email_validate = db.query(Payment).filter(Payment.email == user.email, Payment.status == "Completed").first()
    if not email_validate   :
        raise HTTPException(status_code=400, detail="Payment not successful. Please try again.")
    
    # Create new user with hashed password
    hashed_password = hash_password(user.password)
    new_user = User(user_name=(user.user_name).title(), email=user.email, password=hashed_password, is_paid=True)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    
    return {"msg": "User registered successfully", "user_id": new_user.user_id}

# Route for processing a payment
@app.post("/payment/")
async def process_payment(payment: Payment, db: Session = Depends(get_db)):
    new_payment = Payment( email=payment.email, amount=payment.amount, status="Completed")
    db.add(new_payment)
    db.commit()
    db.refresh(new_payment)
    
    return {"msg": "Payment successful"}



# Route for completing account setup
def verify_password(plain_password: str, hashed_password: str) -> bool:
    # Replace with your password verification function, like bcrypt's check_password_hash
    return bcrypt.checkpw(plain_password.encode('utf-8'), hashed_password.encode('utf-8'))

@app.post("/login")
async def complete_account(
    data_from_user: Annotated[OAuth2PasswordRequestForm, Depends(OAuth2PasswordRequestForm)],
    db: Session = Depends(get_db)
):
    user = db.query(User).filter(User.user_name == (data_from_user.username).title(), User.is_paid == True).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found or payment not completed")

    if not verify_password(data_from_user.password, user.password):
        raise HTTPException(status_code=404, detail="Incorrect password")
    
    access_token_expirey_minute = timedelta(minutes=1)
    generated_token = create_access_token(subject=data_from_user.username, expires_delta=access_token_expirey_minute)
    # db.commit()
    return {"msg": "Account setup complete", "access_token": generated_token}

@app.post("/register/")
async def register_user(user_name: str, email: str, phone_number: Optional[str] = None, db: Session = Depends(get_db)):
    user = db.query(IntialUserData).filter(IntialUserData.email == email).first()
    
    if not user:  # If no user found, create a new one
        new_user = IntialUserData(
            user_name=user_name,
            email=email,
            phone_number=phone_number # Only include if provided
        )
        db.add(new_user)  # Add the new user object to the session
        db.commit()  # Commit the session
        db.refresh(new_user)  # Refresh to get the updated object
        return {"msg": "User initial registration complete", "user_id": new_user.user_id}
    
    print("User already registered")
    return {"msg": "User already registered"}

@app.get("/register-user")
async def get_registered_users(token:Annotated[str, Depends(oauth2_scheme)],db: Session = Depends(get_db)):
    users = db.query(IntialUserData).all()
    return {"users": [user.dict() for user in users]}



@app.get("/account-holder-user")
async def get_create_account_user(token:Annotated[str, Depends(oauth2_scheme)],db: Session = Depends(get_db)):
    users = db.query(User).all()
    return {"Users": [user.dict() for user in users]}
