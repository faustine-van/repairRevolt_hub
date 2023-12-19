#!/usr/bin/python3
"""Configurations variable for repairRevolt
"""
from datetime import timedelta
from decouple import config
from dotenv import load_dotenv
import os
load_dotenv()

"""configuration variables
"""
DEBUG = os.environ.get("DEBUG", False)
SECRET_KEY = os.getenv('SECRET_KEY')
JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY')
# where Flask JWT Extended should look for the JWT token
# when trying to extract it
JWT_TOKEN_LOCATION = ["headers"]
JWT_IDENTITY_CLAIM = "user_id"
JWT_ACCESS_TOKEN_EXPIRES = timedelta(days=1)
# email configurations
"""
MAIL_SERVER = 'smtp.gmail.com'
MAIL_PORT = 465
MAIL_USE_TLS = False
MAIL_USE_SSL = True
MAIL_USERNAME = 'your_username'
MAIL_PASSWORD = 'your_password'
MAIL_DEFAULT_SENDER = 'your_email@example.com'
"""
MAIL_SERVER = os.environ.get("MAIL_SERVER")
MAIL_PORT = os.environ.get("MAIL_PORT")
MAIL_USE_TLS = os.environ.get("MAIL_USE_TLS")
# MAIL_USE_SSL = os.environ.get("MAIL_USE_SSL")
MAIL_USERNAME = os.environ.get("MAIL_USERNAME")
MAIL_PASSWORD = os.environ.get("MAIL_PASSWORD")
