"""
============ WAITING FOR TWILIO.COM TO REMOVE RESTRICTIONS ON MY FREE ACCOUNT
============ PROJECT IS STILL 'UNDER CONSTRUCTION'
"""
import requests

# constants
ALPHA_API =  'KZ3AND7EF8CHMCH'
NEWS_API = '150930e4805542f082ceca3eb885eaa4'
ALPHA_URL = "https://www.alphavantage.co/query"  # https://www.alphavantage.co/documentation/
NEWS_SOURCES_URL = 'https://newsapi.org/v2/top-headlines/sources'  # https://newsapi.org/docs/endpoints
NEWS_URL = 'https://newsapi.org/v2/everything'
ticker = 'TSLA'
company_name = "Tesla Inc"

# api parameters
alpha_parameters = {
    'function': 'TIME_SERIES_DAILY',
    'symbol': ticker,
    'outputsize': 'compact',
    'datatype': 'json',
    'apikey': ALPHA_API
}
news_parameters = {
        'apiKey': NEWS_API,
        'q': company_name,  # keywords or phrases to search for in article title and body
        'language': 'en'
}

# HTTP requests
# print(response.url) -> print url with paramaters
response_alpha = requests.get(url=ALPHA_URL, params=alpha_parameters)
response_alpha.raise_for_status()
price_data = response_alpha.json()['Time Series (Daily)']  # discard second key - price_data['Meta Data']

response_news = requests.get(url=NEWS_URL, params=news_parameters)
response_news.raise_for_status()
news_data = response_news.json()['articles']


# json price_data have key:value pairs
# all keys are hard coded: yesterday['2022-07-29']
# to get yesterday price i must enter exact key, tomorrow i need different key
# convert to list so i can ask for index position instead
data_list = [key for key,value in price_data.items()]
yesterday = data_list[0]  # date string: data[yesterday]
day_before = data_list[1] # date string: data[day_before]

yesterday_close = float(price_data[yesterday]['4. close'])  # closing price
day_before_close = float(price_data[day_before]['4. close'])  # closing price

difference = abs(yesterday_close - day_before_close)
percentage_change = (difference / day_before_close) * 100

# if yesterday_close > day_before_close: price is rising, change is green
if yesterday_close > day_before_close:
    direction_icon = '🔺'
else:
    direction_icon = '🔻'

# list of articles, every list item is a large string of text
article_list = [f"Header: {article['title']}\nBrief: {article['description']}\nURL: {article['url']}" for article in news_data]

for article in article_list[:3]:
    print(f'{ticker}: {direction_icon} {percentage_change:.2f} %')  # 2 decimal points {number:.2f}
    print(article)
    print()

## STEP 3: Use https://www.twilio.com
# Send a seperate message with the percentage change and each article's title and
# description to your phone number. 


#modules: requests,
#tags: api, trading, news, comprehension, float, decimal
