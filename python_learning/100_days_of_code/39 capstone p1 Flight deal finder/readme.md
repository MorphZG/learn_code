**day 39**

# Flight deal finder, capstone project p1

## Introduction

If you like to travel than this project could save you some cash. In a google spreadsheet i will store the list of locations i would like to visit and current lowest price. Using the requests library i will first update the spreadsheet by pulling the IATA codes (three letter code for city airport) from the flight search API. After that i must send a short query with basic information for flights to all destinations in a spreadsheet. If API returns price target, program will send me an SMS notification with more details.

This project could be a hard one. Instructor shared three barebone files with nothing but class name and one sentence comment about what the class is responsible for. There is also a spreadsheet template i can copy, list of required APIs and of course the program requirements.

```python
class DataManager  #class responsible for talking to the google sheet
class FlightData  #class responsible for structuring the flight data
class FlightSearch  #class responsible for talking to the flight search API
class NotificationManager  #class responsible for sending notifications with the deal flight details
```

### APIs required

- Google sheet data management - <https://sheety.com/>
- Kiwi partners flight search API (free signup, requires credit card details) - <https://partners.kiwi.com>
- Tequila flight search API documentation - <https://tequila.kiwi.com/portal/docs/tequila_api>
- Twilio SMS API - <https://www.twilio.com/docs/sms>

### Program requirements

1. Use the Flight search and Sheety API to populate your own copy of the Google sheet with [International Air Transport Association IATA](https://en.wikipedia.org/wiki/IATA_airport_code) codes for each city. Most of the cities in the sheet include multiple airports, you want the city code, not the airport code. see [here](https://en.wikipedia.org/wiki/IATA_airport_code#Cities_with_multiple_commercial_airports)
2. Use the Flight search API to check for the cheapest flight from tomorrow to 6 months later for all the cities in the Google sheet.
3. If the price is lower than the lowest price listed in the Google sheet then send and SMS to your own number with the Twilio API.
4. The SMS should include the departure airport IATA code, destination airport IATA code, departure city, destination city, flight price and flight dates.

## My notes

With free accounts registered at sheety.co and tequila.kiwi.com i got limited number of requests per month. I made a small mistake where i had to loop through each row in google sheet and made tons of requests with a for loop. Now i am pass the limit and cannot request more until next month. I am very eager to complete the project so i had to come up with a temporary solution and improvise something.

I will read destination data from `flight_deals.json`, send requests to tequila.kiwi.com API to search for cheapest flights between my origin city and all destinations stored in a file. After search is done i will store new data inside `flight_deals-updated.json`

Again, instructor uses Twilio trial account to setup SMS notifications. On day 36, where i had to build alert system for stock trading i had problems with Twilio because they put restrictions on some accounts so they cannot create phone number for free. Not sure is it related to geo location or something else but my free trial account is still restricted. Will improvise again and send email notifications instead.

Extended `DataManager` class with two methods. Original was managing online data sheet over Sheety API, download and upload data. Since i ran out of available requests for this month (restriction for trial accounts) i will have `DataManager` read and write .json files.
