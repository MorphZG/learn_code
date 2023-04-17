import requests as re
import smtplib
import os
from dotenv import load_dotenv

load_dotenv()

'''
How to make API call
https://openweathermap.org/current
'''


def email_warning():
    """start SMTP connection and email warning for bad weather"""
    # SMTP class manages a connection to an SMTP or ESMTP server
    connection = smtplib.SMTP('smtp.gmail.com')
    connection.starttls()  # encrypts the connection
    connection.login(user='dummy@email.com', password='39lkdehpo233y3f')
    connection.sendmail(
            from_addr='dummy@email.com', to_addrs='dummy2@email.com',
            msg='Subject:Rain\n\nBad weather warning')
    connection.close()


parameters1 = {             # Zagreb, Croatia
        'lat': '45.815010',
        'lon': '15.981919',
        'appid': os.environ.get('APIKEY'),  # api key
        'units': 'metric',
        'exclude': 'current,minutely,daily'
}

parameters2 = {              # Desuri, Rajasthan, India
        'lat': '25.38',
        'lon': '73.28',
        'appid': os.environ.get('APIKEY'),  # api key
        'units': 'metric',
        'exclude': 'current,minutely,daily'
}
# "One call api 1.0" endpoint
url = 'https://api.openweathermap.org/data/2.5/onecall'
response = re.get(url=url, params=parameters1)
response.raise_for_status()
print(response)
data = response.json()
# print available keys in data['hourly']
print(f"\n\ndata, keys()\n {data['hourly'][0].keys()}")
# print data['hourly']
print(f"\n\ndata, hours 0\n {data['hourly'][0]}")
# print data['hourly']
print(f"\n\ndata, hours 1\n {data['hourly'][1]}")
# print data['hourly']
print(f"\n\ndata, hours 2\n {data['hourly'][2]}")

# data['hourly'] is inside a list
# weather for next 12 hours
weather_slice = data['hourly'][:11]
for hour_data in weather_slice:
    condition_code = hour_data['weather'][0]['id']
    if condition_code < 700:
        # email warning if there is a bad weather (id less than 700)
        email_warning()
        print('bad weather warning')
        break

#modules: request, smtplib, dotenv, os
#tags: api, email, get(), environment variable