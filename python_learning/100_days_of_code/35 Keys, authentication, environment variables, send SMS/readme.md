**day 35**

# Authentication, environment variables, send SMS

## Introduction

Will learn more on authentication with API keys and get valuable or hard to collect  
data. API providers can ask for subscription or payments before you get the access.  
There are many services that will collect and prepare data for you to use. Even  
simple weather data requires people to constantly collect, update, generate, filter...  
If we later use it in a comercial or some other beneficial project it is reasonable  
to pay for the service you need. Most of the API providers usually have a free tier  
for people who are just testing the API. To access the service you need the API key  
which is used as some kind of ID for each user.  

## Using API keys, Get weather data

Go to: [openweathermap.org](https://openweathermap.org/api)  
Before using any API you should read the documentation.  

My first challenge is to write a small program that will make a request to  
"One call API" endpoint using the `requests` module. Print out the HTTP status  
code, print the response to the console. Copy-paste the response to online  
JSON viewer and locate the hourly forecast for the next 48 hours.  

Since i already played with some of available endpoints even before instructor  
told me to do so :) this "challenge" was really a piece of cake for me. In  
"exercise.py" i got much more data than instructor wanted.  

## Rain in next 12 hours?

Every weather condition have it's own weather ID, grouped from 200 to 800.  
For full list of weather conditions visit the link:
[Link](https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2)  
Here are some examples:

```weather_code
2xx Thunderstorms (light thunderstorm, heavy thunderstorm...)
3xx Drizzle (light intensity drizzle, shower rain and drizzle...)
5xx Rain (moderate rain, extreme rain, ragged shower rain...)
6xx Snow (Heavy snow, Shower snow, Heavy shower snow...)
7xx Atmosphere (mist, Smoke, Haze, fog, dust, volcanic ash, tornado...)
8xx Clear (clear sky...)
80x Clouds (few clouds: 11-25%, scattered clouds: 25-50%, overcast clouds: 85-100%...)
```

From the list above we can assume that every ID that is 700 or less is a sign of  
a bad weather. My task is to print the warning for bad weather if the weather ID  
for the next 12 hours is 700 or less. I can check for areas with bad weather at:  
Live weather forecast at: [ventusky.com](https://www.ventusky.com)  

As always there is more than one way to solve this so my first step is to parse  
the data returned from the API and look how it is formated. There is a mix of  
dictionaries and lists so it all comes back to basics. I will slice the list to  
get the first 12 hours and then loop through. If weather condition code or weather  
id is less than 700 i will start the sequence. Print the warining and break out  
of the loop.  

## Sending the SMS via the Twilio API

Twilio wont let me to create new telephone number with trial account. I am not  
sure is there maybe some restricion for my area or maybe some server side issues  
but i will have use email as alternative. Import smtplib module and instead of  
SMS notification i will send email. Instructor also mentioned that we don't have  
to create twilio account since this step is actually very trivial.

## Automate the python script

To automate the script and make it run every morning at certain hours instructor  
recommends [pythonanywhere.com](https://www.pythonanywhere.com/). Even though i  
have the free account there it got me thinking how can i make my linux desktop  
do the same job and schedule the script. Instead of googling i should scan through  
my Linux bible. Huge book, "Linux command line and shell scripting bible".  
Solution must be somewhere inside.  

## Environment variables
<!-- print all: $env -->
<!-- print single: $echo $VARIABLE_NAME -->
<!-- set single: $export VARIABLE_NAME="Some value" -->
<!-- remove/unset single: $env -u $VARIABLE_NAME -->
Available at local operating system or some other system (environment) where  
you declare them. Since they are set outside of your code base, these variables  
can be available by any aplication running on the same OS. It is a dynamic, named  
value that can affect the way running processes will behave on a computer. They  
are part of the environment in which a process runs.  

Main reason people use them are convenience and security. They are convenient  
because you don't have to read through code to change some data like default  
editors for certain file types on your operating system or path to your home  
directory. Security is also one of the aspects since such variables allows us  
to store sensitive information like API keys or passwords away from code base.  

On Unix based operating systems commands `export`, `env`, `set`, can be used  
to set environment variables. "Linux command line and shell scripting bible"  
book is waiting for me patiently, calling my name from the dusty shelve. Should  
be a good read.

```bash
export VARIABLE_NAME="some value"
```

My script is uploaded at [pythonanywhere.com](https://www.pythonanywhere.com/) but it holds  
some "sensitive" data. Dummy email account and api key for free service from openweather.com  
I have access to shell and command line and will assign those values to environment  
variables.

```bash
export APPID="4d58tie582lb0dKL6cir35ed0b93lf"
export EMAIL="dummy@email.com"
export PASSWORD="password1234"
```

To gain access to those you must import `os` module and call another `get()` method.  

```python
import os

api_key = os.environ.get("APPID")
email = os.environ.get("EMAIL")
password = os.environ.get("PASSWORD")
```

## Python-dotenv

[pypi.org/python-dotenv](https://pypi.org/project/python-dotenv/)  
Python-dotenv reads key-value pairs from a .env file and can set them as environment  
variables. It helps in the development of applications following the [12-factor](https://12factor.net/) principles.

### Getting Started

```bash
pip install python-dotenv
```

If your application takes its configuration from environment variables, like a  
12-factor application, launching it in development is not very practical because  
you have to set those environment variables yourself.

To help you with that, you can add Python-dotenv to your application to make it  
load the configuration from a `.env` file when it is present (e.g. in development)  
while remaining configurable via the environment:

```python
from dotenv import load_dotenv

load_dotenv()  # take environment variables from .env.

# Code of your application, which uses environment variables (e.g. from `os.environ` or
# `os.getenv`) as if they came from the actual environment.
```

By default, `load_dotenv()` doesn't override existing environment variables.  
To configure the development environment, add a .env in the root directory of your project:  

```tree
.
├── .env
└── foo.py
```

The syntax of .env files supported by python-dotenv is similar to that of Bash:  

```bash
# Development settings
DOMAIN=example.org
ADMIN_EMAIL=admin@${DOMAIN}
ROOT_URL=${DOMAIN}/app
```

If you use variables in values, ensure they are surrounded with `{` and `}`, like  
`${DOMAIN}`, as bare variables such as `$DOMAIN` are not expanded.  

You will probably want to add `.env` to your `.gitignore`, especially if it  
contains secrets like a password.  

See the section "File format" below for more information about what you can write  
in a `.env` file.

### Other use cases

#### Load configuration without altering the environment

[pypi.org/python-dotenv](https://pypi.org/project/python-dotenv/)  

#tags: readme, environment variable