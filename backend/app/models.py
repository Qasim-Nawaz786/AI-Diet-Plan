from datetime import datetime
from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, DateTime, Numeric
from typing import Optional
from pydantic import BaseModel, EmailStr

class User(SQLModel, table=True):
    user_id: Optional[int] = Field(default=None, primary_key=True)
    user_name: str = Field(sa_column=Column(String(100), nullable=False))
    email: str = Field(sa_column=Column(String(100), unique=True, index=True, nullable=False))
    password: Optional[str] = Field(sa_column=Column(String(255)))  # Store hashed password after payment
    is_paid: bool = Field(default=False)
    created_at: Optional[datetime] = Field(default_factory=datetime.utcnow, nullable=False)
    updated_at: Optional[datetime] = Field(default_factory=datetime.utcnow)

    # payments: Optional[list["Payment"]] = Relationship(back_populates="user")

# Payment Model with type annotations
class Payment(SQLModel, table=True):
    payment_id: Optional[int] = Field(default=None, primary_key=True)  # Added autoincrement
    # user_id: int = Field(primary_key=True)
    email: str = Field(nullable=False, max_length=100)
    amount: float = Field(sa_column=Column(Numeric(10, 2), nullable=False))
    status: str = Field(default="Pending", max_length=50)
    payment_date: Optional[datetime] = Field(default_factory=datetime.utcnow)

    # user: Optional[User] = Relationship(back_populates="payments")


class IntialUserData(SQLModel, table=True):
    user_id: Optional[int] = Field(default=None, primary_key=True)
    user_name: str = Field(nullable=False, max_length=100)
    email: str = Field(nullable=False, max_length=100)
    phone_number:Optional[str] = Field(default=None, nullable=True)  # Make phone_number optional
    




class UserCreate(SQLModel):
    user_name: str
    email: str
    password: str
    confirm_password: str