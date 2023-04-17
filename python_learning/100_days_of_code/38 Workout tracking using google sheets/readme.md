**day 38**

# Workout tracking using google sheets

Track the workouts, time for how long we did the workout and number of calories we burned. Main inspiration for the program is [openai.com](https://openai.com/blog/openai-api). It's a smart natural language processing model (NLP) that can understand what user is searching for and meaning of written articles. When googling for something, the normal search engine will try to match the keywords you typed in. But with artificial intelligence smart NLP models can actually understand what you are asking. If you are using the NLP model while browsing through wikipedia, you can ask "Why is bread so fluffy?". AI will understand your question and find the the relevant piece of text and show you the answer, even without the keywords.

The app i am building will take regular English language as an input, filter out the data and store it inside google spreadsheet. This will be a challenging project without instructor's lead. I got the written instructions on how my app should work, specifications and features. The rest is up to me. Project will reflect on some of my recent knowledge:  

- use of python DateTime strftime()
- APIs and making POST requests
- authorization headers
- environment variables

## Setup API Credentials and Google Spreadsheet (step 1)

- Registered the user account at [nutritionix.com](https://www.nutritionix.com) but i also need a developer account to get API access at [developer.nutritionix](https://developer.nutritionix.com)
- Requested the free API key and application ID that will be sent with every request.

## Get exercise stats with NLP queries (step 2)

### Instructions

- Using the Nutritionix ["Natural Language for Exercise" API Documentation](https://docs.google.com/document/d/1_q-K-ObMTZvO0qUEAxROrN3bwMujwAN25sLHwJzliK0/edit#), figure out how to print the exercise stats for a plain text input. You can hard code the API key and the APP id for now. In step 6, we'll store the API key and app id ad environment variables. (My note: I was already googling for how to store sensitive information in environment variables and use them in python code. My prefered solution is to use [dotenv](https://pypi.org/project/python-dotenv/) module and add .env files to .gitignore. That way i store them on local machine and import as variables when needed. Not sure is it safe and encrypted. Would like to know if there is a chance for someone to read them somehow.)
- Use what you have learnt about authentication headers and the relevant part of the [Nutritionix authentication documentation](https://docs.google.com/document/d/1_q-K-ObMTZvO0qUEAxROrN3bwMujwAN25sLHwJzliK0/edit#heading=h.gz6pu9o7f9iz) to authenticate your request.
- Use what you have learnt about making POST requests and the relevant part of the [Nutritionix exercise documentation](https://docs.google.com/document/d/1_q-K-ObMTZvO0qUEAxROrN3bwMujwAN25sLHwJzliK0/edit#heading=h.zhjgcprrgvim) to make your request with the required parameters.

### Notes

I was missing some information about required parameters but found super useful link that expands upon provided document, [click here](https://trackapi.nutritionix.com/docs/). I have found the endpoint url (/v2/natural/exercise) and store it inside a dictionary. Since this app will probably require more endpoints i stored them together with each having it's own key:value pair. After configuring headers and parameters i just had to do a post request and pray for positive response.

If you forgot about different request methods, here they are:
`requests.get()` will fetch the data from server
`requests.post()` will save data on server
`requests.put()` will update posted data
`requests.delete()` will erase the data from server

## Setup your google sheet with Sheety (step 3)

### Instructions

- [Log into Sheety](https://sheety.co/) with your google account (the same account that owns the google sheet you copied in step 1). Make sure the email matches between your google sheet and sheety account.
- In your project page, click on "New project" and create a new project in Sheety with the name "Workout tracking" and paste in the URL of your own "my workouts" google sheet.
- Click on the workouts API endpoint and **enable GET and POST**.

### Notes

Nothing to note here. Just did what instructions told me to do. Create the Sheety account and load the google spreadsheet.

## Saving data into google sheets (step 4)

### Instructions

- Using the [Sheety Documentation](https://sheety.co/docs/requests), write some code to use the Sheety API to generate a new row of data in your Google sheet for each of the exercises that you get back from Nutritionix API. The date and time columns should contain the current date and time from the Python `datetime` module.
- Parameters have to be **lower case**. Also, pay special attention to this part in the documentation:

```txt
Sheety expects your record to be nested in a root property. For example if your endpoint is named "emails", nest your record in a property called "email".

https://v2-api.sheety.co/phill/myWebsite/emails

{
  "email":{
    "name": "Sye K",
    "email": "syed@gmail.com"
  }
}
```

- Remember you can generate text in title case by using the python `.title()` method.
- Remember you can format a datetime object using the `.strftime()` method.
- Debugging tip: if you are having any issues, double-check that you are logged in to Sheety with the same Google account that owns the spreadsheet you are trying to modify.

### Notes

Documentation for Sheety API is short and simple. I read it almost completely. There is a section about adding a row to a spreadsheet. Just follow the naming rules for parameters that you pass with `requests.post()`. Maybe because of a "language barrier", since i am not a native English speaker, i had problems with bad requests caused by wrong naming of parameters for Sheety API. If my spreadsheet is called "workouts" with "date", "time", "exercise"... columns, this is the format you must follow:

```python
# my first thought was dictionary named as a spreadsheet
# but you have to create a key named as a spreadsheet
# and other nested keys named as columns
sheety_params = {
    "workout": {  # notice the singular "workout"
        "date": date,
        "time": time,  # to get the right format, time must be a string
        "exercise": "test1",
        "duration": "test2",
        "calories": "test3"
    }
}

```

## Authenticate your sheety API (step 5)

### Instructions

At the moment there is no authentication that's required to access your Sheety endpoint. That means anyone could write to your "My Workout" google sheet.

- Add either "Basic authentication" or "Bearer Token" to your Sheety endpoint to secure it. You can hardcode the token in your code for now while you test your code. Once you're sure it works, we can add it to the environment variables in the next step

### What is Bearer authentication?

Bearer authentication (also known as token authentication) is an HTTP authentication scheme that involves security tokens. The name basically means "give access to the bearer of this token". The security token or bearer token is just a cryptic string. An example of a bearer token would be a string that could look something lik this:

"AAAAAAAAAAAAAAAAAAAAAMLheAAAAAAA0%2BuSeid%2BULvsea4JtiGRiSDSJSI%3DEUifiRBkKG5E2XzMDjRfl76ZC9Ub0wnz4XsNiRVBChTYbJcE3F"

The idea is that whoever has the secret token, has permission to interact with the spreadsheet. A client - like your browser or mobile app - would then send this security token in the authorization header when making requests to Sheety's server.

- Using the [Sheety documentation on authentication](https://sheety.co/docs/authentication.html) to update your python code to authenticate your request. You'll need to read the relevant section on the request module documentation to do this.

### Notes

Not much to note here. I have already setup the environment variables inside separate .env file that is stored only on my local machine and added to .gitignore. With `dotenv` and `os` modules i can access the variables. Enable basic authentication inside Sheety dashboard and after entering username and password you will get encoded base64 string, pass it as a header with the rest of parameters.

## Environment variables in Repl.it

### Instructions

In order to be able to post our workout data while we're out and about, it would be easier if we can access the console and run the code in Repl.it. However, because Repl.it is open source, we don't want other people to see our API keys and secrets.

- Using what you know about environment variables (see day 35), update your code to use environment variables for all sensitive data.
- You'll need to import the os module
- Use the Repl.it documentation to work out how to create .env file in Repl.it and store your environment variables in there.

### Notes

I am not planning to use Repl.it but i am more than happy for successfully completing the project. I did some things my own way. Project was actually a good experience in reading and applying the information from few different sources. Documentation from two different APIs and instructions i got from the instructor. I can see a lot of value in natural language processing and would like to learn more about it. Seems like python is a great tool to have.


#tags: readme,