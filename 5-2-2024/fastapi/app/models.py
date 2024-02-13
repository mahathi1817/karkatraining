from sqlalchemy import Column, Integer, String, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

Base = declarative_base()

class Student(Base):
    __tablename__ = 'students'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50), index=True)
    place = Column(String(50))
    mobile_num = Column(Integer)
    course = Column(String(50))

# Example: If you have an SQLite database for development purposes
engine = create_engine('mysql://root:ronnieinsql@localhost/karka')

# Create tables
Base.metadata.create_all(bind=engine)

# Create a session
Session = sessionmaker(bind=engine)
session = Session()
