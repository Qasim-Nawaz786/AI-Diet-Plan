from pydantic import BaseModel, EmailStr

class IntialUserData(BaseModel):
    user_name: str
    email: EmailStr

class PaymentCreate(BaseModel):
    email: EmailStr
    amount: float
