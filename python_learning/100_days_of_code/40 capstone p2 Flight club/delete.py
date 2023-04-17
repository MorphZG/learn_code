from data_manager import DataManager
from rich import print

datamanager = DataManager()




datamanager.read_file(filepointer="flights_updated_IATA.json")
origin = "ZAG"
destination = row["iataCode"]
flightdata = flightsearch.search_flights(fly_from=origin, fly_to=destination, date_from=today, date_to=end_date)
print(flightdata["price"], row["lowestPrice"])

data = datamanager.read_file("flights - spreadsheet.json")
count=1
for price in data:
    print(count)
    print(price)
    count += 1