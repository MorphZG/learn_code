import requests as re

'''
How to make API call
https://openweathermap.org/current
'''

parameters = {
        'lat': '45.815010',
        'lon': '15.981919',
        'appid': '4d58tie582tu9dKL635gg4ed0b93lf',  # api key
        'units': 'metric'
}

# "Current weather" endpoint
url = 'https://api.openweathermap.org/data/2.5/weather'

response = re.get(url=url, params=parameters)  # api response
response.raise_for_status()  # raise error if fail
data = response.json()  # data in json format
weather_description = data['weather'][0]['description']
print(f'current weather description: {weather_description}')

# "One call api 1.0" endpoint
url = 'https://api.openweathermap.org/data/2.5/onecall'
response = re.get(url=url, params=parameters)
response.raise_for_status()
print(response)
data = response.json()
# print all available keys in data
print(f'\n\ndata.keys()\n {data.keys()}')
# print data['current']
print(f"\n\ndata['current']\n {data['current']}")
# print available keys in data['hourly']
print(f"\n\ndata['hourly']\n {data['hourly'][0].keys()}")
# print data['hourly']
print(f"\n\ndata['hourly']\n {data['hourly'][1]}")
# print data['hourly']
print(f"\n\ndata['hourly']\n {data['hourly'][2]}")

"""
More about environment variables in readme.md

Saving environment variables:
```bash
export APPID="4d58tie582lb0dKL6cir35ed0b93lf"
export EMAIL="dummy@email.com"
export PASSWORD="password1234"
```

Read environment variables:

```python
import os

api_key = os.environ.get("APPID")
email = os.environ.get("EMAIL")
password = os.environ.get("PASSWORD")
```
"""

#modules: request, dotenv
#tags: api, email, environment variable, environ.get(), env