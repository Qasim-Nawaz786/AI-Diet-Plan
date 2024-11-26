# fastapi_neon/settings.py
from sqlalchemy.orm import sessionmaker
from starlette.config import Config
from starlette.datastructures import Secret


try:

    config = Config(".env")

except FileNotFoundError:

    config = Config()

SessionLocal = sessionmaker(autocommit=False, autoflush=False)


DATABASE_URL = config("DATABASE_URL", cast=Secret)
