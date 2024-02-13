from logging.config import fileConfig

from sqlalchemy import engine_from_config
from sqlalchemy import pool

from alembic import context

# Import your models
from app.models import Base

# Load the Alembic configuration and setup the logging
config = context.config
fileConfig(config.config_file_name)

# Interpret the config file for Python logging.
# This line sets up loggers basically.
# Do not modify it unless you want to customize the logging configuration.
# logger = context.get_logger()

# Add your model(s) to the metadata
# This is important so that Alembic knows about your tables
target_metadata = Base.metadata

# Get the SQLAlchemy engine
engine = engine_from_config(
    config.get_section(config.config_ini_section),
    prefix='sqlalchemy.',
    poolclass=pool.NullPool,
)

# Establish a connection to the database
with engine.connect() as connection:
    # Attach the connection to the Alembic context
    context.configure(
        connection=connection,
        target_metadata=target_metadata,
        compare_type=True,
    )

    # Run the Alembic command-line tool with the provided configuration
    with context.begin_transaction():
        context.run_migrations()