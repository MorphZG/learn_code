import requests as re
import dotenv
import os
from datetime import datetime

# load environment variables from .env file
dotenv.load_dotenv()
# read the variable with: os.environ.get('variable')

# variable declaration
TOKEN = os.environ.get('pixelapass')
USERNAME = os.environ.get('username')
GRAPHID = 'graph1'

profile = os.environ.get('profile_link')
today = datetime.now().strftime('%Y%m%d')  # date format: yyyymmdd
custom_day = datetime(year=2022, day=15, month=8).strftime('%Y%m%d')

# ============ USER CREATION ========================
#<!--- user creation, comment post request after first time run
pixela_url = 'https://pixe.la/v1/users'
user_params = {
    'token': TOKEN,
    'username': USERNAME,
    'agreeTermsOfService': 'yes',
    'notMinor': 'yes',
}
#response = re.post(url=pixela_url, json=user_params)
#print(response.url)
#print(response.text)
#<! --- end!

# <!--- create a graph definition
graph_url = f'{pixela_url}/{USERNAME}/graphs'

headers = {
    'X-USER-TOKEN': TOKEN,
}
graph_config = {
    'id': GRAPHID,
    'name': 'coding graph',
    'unit': 'minutes',
    'type': 'int',
    'color': 'kuro',
}
#response = re.post(url=graph_url, json=graph_config, headers=headers)
#print(response.text)
# <!--- end!

# ============== POST A PIXEL ========================
# <!--- comment out all requests when done
post_pixel_url = f"{pixela_url}/{USERNAME}/graphs/{GRAPHID}"

post_info = {
    'date': today,
    'quantity': input('How many minutes did you code today:')
}
#response = re.post(url=post_pixel_url, json=post_info, headers=headers)
#print(response.text)
#<!--- end

# ============ UPDATE PIXEL DATA ====================
#<!--- comment out the request when done
update_pixel_url = f"{pixela_url}/{USERNAME}/graphs/{GRAPHID}/{custom_day}"

update_info = {
    'quantity': '0'
}
#response = re.put(url=update_pixel_url, json=update_info, headers=headers)
#print(response.text)
#<!--- end

#modules: requests, dotenv, os, datetime
#tags: api, post(), put(), delete(), strftime()