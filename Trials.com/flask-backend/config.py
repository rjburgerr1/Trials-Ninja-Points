"""Remote host configuration."""
from os import environ, path
from dotenv import load_dotenv
from log import LOGGER

# Load environment variables from .env
basedir = path.abspath(path.dirname( __file__ ))
load_dotenv(path.join(basedir, '.env'))



local_file_directory = '~/data'


# Load environment variables from .env
BASE_DIR = path.abspath(path.dirname(__file__))
load_dotenv(path.join(BASE_DIR, ".env"))

# SSH Connection Variables
# Read environment variables
SSH_REMOTE_HOST = environ.get('66.42.118.153')
SSH_USERNAME = environ.get('root')
SSH_KEY_FILEPATH = environ.get('~/.ssh')
SCP_DESTINATION_FOLDER = environ.get('~/scpTest')
SSH_CONFIG_VALUES = [
    {"host": SSH_REMOTE_HOST},
    {"user": SSH_USERNAME},
    {"password": ""},
    {"ssh": SSH_KEY_FILEPATH},
    {"path": SCP_DESTINATION_FOLDER},
]


# Verify all config values are present
for config in SSH_CONFIG_VALUES + SSH_CONFIG_VALUES:
    if None in config.values():
        LOGGER.warning(f"Config value not set: {config.popitem()}")
        raise Exception("Please set your environment variables via a `.env` file.")

# Local file directory (no trailing slashes)
LOCAL_FILE_DIRECTORY = f"~/files"