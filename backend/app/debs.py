from sqlmodel import Session
from app.db import DATABASE_URL
from sqlmodel import create_engine
from sqlalchemy.orm import  sessionmaker

# Database engine
connection_string = str(DATABASE_URL).replace("postgresql", "postgresql+psycopg")
engine = create_engine(connection_string, connect_args={"sslmode": "require"}, pool_recycle=300)# Create a session maker


SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
