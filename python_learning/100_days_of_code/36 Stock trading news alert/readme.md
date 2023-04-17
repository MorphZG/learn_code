**day 36**

# Stock trading news alert

Professional stock traders must stay updated and informed on time if they want to  
stay ahead of the market and build profit. Services like Bloomberg terminal will  
provide all relevant info on time but also cost around 24,000 USD per year. Today  
I am going to build my own alert system.

Instructor have prepared three different start routes. Normal, Hard and Extra Hard.  
Each of them have it's own todo list with more or less guidance. Since i enjoy what  
i do ofcourse i will take the Extra Hard route. Below are required steps.

As alternative to HTTP requests it is possible to install unofficial python libraries  
for both alphavantage.co and newsapi.org. Install them with `pip` commands:

```bash
pip install alpha_vantage
pip install newsapi-python
```

Links to github page:  
[> alpha vantage](https://github.com/RomelTorres/alpha_vantage)  
[> newsapi](https://github.com/mattlisiv/newsapi-python)  

## Extra Hard

```python
STOCK = "TSLA"
COMPANY_NAME = "Tesla Inc"

##TODO Use https://www.alphavantage.co
# When STOCK price increase/decreases by 5% between yesterday and the day before
# yesterday then print("Get News").

##TODO Use https://newsapi.org
# Instead of printing ("Get News"), actually get the first 3 news pieces for the
# COMPANY_NAME. 

##TODO Use https://www.twilio.com
# Send a seperate message with the percentage change and each article's title and
# description to your phone number. 

# Optional: Format the SMS message like this: 
"""
TSLA: 🔺2%
Headline: Were Hedge Funds Right About Piling Into Tesla Inc. (TSLA)?. 
Brief: We at Insider Monkey have gone over 821 13F filings that hedge funds and prominent investors are required to file by the SEC The 13F filings show the funds' and investors' portfolio positions as of March 31st, near the height of the coronavirus market crash.
or
"TSLA: 🔻5%
Headline: Were Hedge Funds Right About Piling Into Tesla Inc. (TSLA)?. 
Brief: We at Insider Monkey have gone over 821 13F filings that hedge funds and prominent investors are required to file by the SEC The 13F filings show the funds' and investors' portfolio positions as of March 31st, near the height of the coronavirus market crash.
"""
```

<h3 style="text-align: center;">-- DO NOT LOOK BELOW --</>

<h3 style="text-align: center;">-- Lower difficulty guide --</>

## Hard

```python
STOCK = "TSLA"
COMPANY_NAME = "Tesla Inc"

STOCK_ENDPOINT = "https://www.alphavantage.co/query"
NEWS_ENDPOINT = "https://newsapi.org/v2/everything"


##TODO Use https://www.alphavantage.co/documentation
# When STOCK price increase/decreases by 5% between yesterday and the day before yesterday then print("Get News").
#HINT 1: Get the closing price for yesterday and the day before yesterday. Find the positive difference between the two prices. e.g. 40 - 20 = -20, but the positive difference is 20.
#HINT 2: Work out the value of 5% of yerstday's closing stock price. 

##TODO Use https://newsapi.org/docs/endpoints/everything
# Instead of printing ("Get News"), actually fetch the first 3 articles for the COMPANY_NAME. 
#HINT 1: Think about using the Python Slice Operator

##TODO Use twilio.com/docs/sms/quickstart/python
# Send a separate message with each article's title and description to your phone number. 
#HINT 1: Consider using a List Comprehension.

# Optional: Format the SMS message like this: 
"""
TSLA: 🔺2%
Headline: Were Hedge Funds Right About Piling Into Tesla Inc. (TSLA)?. 
Brief: We at Insider Monkey have gone over 821 13F filings that hedge funds and prominent investors are required to file by the SEC The 13F filings show the funds' and investors' portfolio positions as of March 31st, near the height of the coronavirus market crash.
or
"TSLA: 🔻5%
Headline: Were Hedge Funds Right About Piling Into Tesla Inc. (TSLA)?. 
Brief: We at Insider Monkey have gone over 821 13F filings that hedge funds and prominent investors are required to file by the SEC The 13F filings show the funds' and investors' portfolio positions as of March 31st, near the height of the coronavirus market crash.
"""
```

<h3 style="text-align: center;">-- DO NOT LOOK BELOW --</>

<h3 style="text-align: center;">-- Lower difficulty guide --</>

## Normal

```python
STOCK_NAME = "TSLA"
COMPANY_NAME = "Tesla Inc"

STOCK_ENDPOINT = "https://www.alphavantage.co/query"
NEWS_ENDPOINT = "https://newsapi.org/v2/everything"

    ## STEP 1: Use https://www.alphavantage.co/documentation/#daily
# When stock price increase/decreases by 5% between yesterday and the day before yesterday then print("Get News").

##TODO - Get yesterday's closing stock price. Hint: You can perform list comprehensions on Python dictionaries. e.g. [new_value for (key, value) in dictionary.items()]

##TODO - Get the day before yesterday's closing stock price

##TODO - Find the positive difference between 1 and 2. e.g. 40 - 20 = -20, but the positive difference is 20. Hint: https://www.w3schools.com/python/ref_func_abs.asp

##TODO - Work out the percentage difference in price between closing price yesterday and closing price the day before yesterday.

##TODO - If TODO4 percentage is greater than 5 then print("Get News").

    ## STEP 2: https://newsapi.org/ 
    # Instead of printing ("Get News"), actually get the first 3 news pieces for the COMPANY_NAME. 

##TODO - Instead of printing ("Get News"), use the News API to get articles related to the COMPANY_NAME.

##TODO - Use Python slice operator to create a list that contains the first 3 articles. Hint: https://stackoverflow.com/questions/509211/understanding-slice-notation

    ## STEP 3: Use twilio.com/docs/sms/quickstart/python
    #to send a separate message with each article's title and description to your phone number. 

##TODO - Create a new list of the first 3 article's headline and description using list comprehension.

##TODO - Send each article as a separate message via Twilio. 

# Optional: Format the message like this: 
"""
TSLA: 🔺2%
Headline: Were Hedge Funds Right About Piling Into Tesla Inc. (TSLA)?. 
Brief: We at Insider Monkey have gone over 821 13F filings that hedge funds and prominent investors are required to file by the SEC The 13F filings show the funds' and investors' portfolio positions as of March 31st, near the height of the coronavirus market crash.
or
"TSLA: 🔻5%
Headline: Were Hedge Funds Right About Piling Into Tesla Inc. (TSLA)?. 
Brief: We at Insider Monkey have gone over 821 13F filings that hedge funds and prominent investors are required to file by the SEC The 13F filings show the funds' and investors' portfolio positions as of March 31st, near the height of the coronavirus market crash.
"""
```


#tags: readme,