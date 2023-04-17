from rich import print
import requests
from datetime import datetime, timedelta
import os
import dotenv
import json

from data_manager import DataManager
from flight_data import FlightData
from flight_search import FlightSearch
from notification_manager import NotificationManager


# load environment variables
dotenv.load_dotenv()
load = os.environ.get

# declarations
datamanager = DataManager()
flightsearch = FlightSearch()
notification = NotificationManager(sender=load("sender"), receiver=load("receiver"), authorization=load("appPass"))
today: str = datetime.now().strftime("%d/%m/%Y")  # date format: 31/12/2022
end_date: datetime = timedelta(days=180) + datetime.now()  # 6 months from today
end_date = end_date.strftime("%d/%m/%Y")  # date format: 31/12/2022
origin: str
destination: str

try:
    datamanager.read_file(filepointer="flights - spreadsheet.json")
    print("reading: 'flights - speadsheet.json' ")

except FileNotFoundError:
    print("""execute except block
exception raised: FileNotFoundError!
reading from: 'flights_empty.json'""")
    # Open starting file with destinations (should be a google spreadsheet)
    sheet = datamanager.read_file(filepointer="flights_empty.json")
    data = sheet["prices"]

    # if there is no IATA Code in a first row, call flightsearch.return_iata_code() for every row
    if data[0]["iataCode"] == None:
        for row in data:
            # update the iataCode column with iata codes
            row["iataCode"] = flightsearch.return_iata_code(row["city"])
        # update datamanager.sheet_data and write updated data to a file
        datamanager.sheet_data = data
        datamanager.write_file(data=data, filepointer="flights_updated_IATA.json")

finally:
    print("execute finally block")
    # loop through all destinations
    # create flightdata objects and update the lowestPrice in datamanager.sheet_data
    flight_list = []
    for row in datamanager.sheet_data:
        origin = "ZAG"
        destination = row["iataCode"]
        flightdata = flightsearch.search_flights(fly_from=origin, fly_to=destination, date_from=today, date_to=end_date)
        if flightdata == None:
            row["lowestPrice"] = None
            continue
        else:
            print(flightdata.data["price"], row["lowestPrice"])
            if flightdata.data["price"] < row["lowestPrice"]:
                # send notification email with low price found!
                notification.send_email(
                f"""
                Lower price found!
                You can fly to: {flightdata.data["Fly to (city)"]}
                For price of {flightdata.data["price"]}
                """)
                # build the list with with new flightdata
                flight_list.append(flightdata.data)
                # update the lowestPrice in datamanager.sheet_data
                row["lowestPrice"] = flightdata.data["price"]
            else:
                continue

    

# save final file versions
datamanager.write_file(datamanager.sheet_data, "flights - spreadsheet.json")  # spreadsheet data
datamanager.write_file(flight_list, "flights - flight data.json")  # flightdata.data stored in a flight_list

print("\n\tCompleted!\n")

#modules: datetime, requests, os, json, dotenv, smtplib
#tags: oop, api, put(), post(), get(), strftime(), timedelta(), I/O stream, files