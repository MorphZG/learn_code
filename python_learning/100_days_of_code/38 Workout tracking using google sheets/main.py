import requests as re
import dotenv
import os
from datetime import datetime

# load environment variables from .env file
# read the variable with: os.environ.get('variable')
dotenv.load_dotenv()

# variable declaration
APIKEY = os.environ.get("apikey")
APPID = os.environ.get("appid")
basic_token = os.environ.get("basic_token")
date = datetime.now().strftime("%d/%m/%Y")  # date format: 31/12/2022
currenttime = datetime.now().strftime("%H:%M:%S")  # time format: 24:12:60

# endpoints
url = {
    "exercise": os.environ.get("exercise_endpoint"),
    "sheety": os.environ.get("sheety_endpoint")
}

# nutritionix parameter configuration
nutritionix_head = {
    "x-app-id": APPID,
    "x-app-key": APIKEY,
    "x-remote-user-id": "0"
}

user_input = input("Tell me what you did today:\n>>>")

nutritionix_params = {
    "query": user_input,
    "gender": "male",
    "weight_kg": "68",
    "height_cm": "178",
    "age": "36"
}

# post exercise to nutritionix NLP
response = re.post(url=url["exercise"], data=nutritionix_params, headers=nutritionix_head)
response.raise_for_status()
data = response.json()
exercise = data["exercises"][0]["name"]
duration = str(data["exercises"][0]["duration_min"])
calories = data["exercises"][0]["nf_calories"]

print("Your activites have been proccessed by nutritionix NLP.")
print("Will store the data as variables so i can send it to sheety.co")

# sheety parameter configuration
sheety_head = {
    "Authorization": basic_token
}

sheety_params = {
    "workout": {
        "date": date,
        "time": currenttime,
        "exercise": exercise,
        "duration": duration,
        "calories": calories
    }
}

# post data from nutritionix to sheety.co spreadsheet
response = re.post(url=url["sheety"], json=sheety_params, headers=sheety_head)
response.raise_for_status()

print("Your data is now fully parsed and stored in google sheets.")
print("Thank you!")

#modules: requests, dotenv, os, datetime
#tags: env, NLP natural language processing, post(), strftime(), headers, authentication,