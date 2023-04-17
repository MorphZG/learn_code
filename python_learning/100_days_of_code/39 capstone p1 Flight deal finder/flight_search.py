import requests as re
import dotenv
import os

from flight_data import FlightData

dotenv.load_dotenv()
TEQUILA_SEARCH = os.environ.get("tequila_search")
TEQUILA_LOCATIONS = os.environ.get("tequila_locations")
TEQUILA_HEADER = {"Content-Type": "application/json", "apikey": os.environ.get("tequila_key")}


class FlightSearch:
    #class responsible for talking to the flight search API
    # flights doc: https://tequila.kiwi.com/portal/docs/tequila_api/search_api
    # locations doc.: https://tequila.kiwi.com/portal/docs/tequila_api/locations_api

    def return_iata_code(self, city: str) -> str:
        """ call requests.get() and return IATA code for input city """

        query = {
            "term": city
        }
        response = re.get(url=TEQUILA_LOCATIONS, params=query, headers=TEQUILA_HEADER)
        return response.json()["locations"][0]["code"]
    

    def search_flights(self, fly_from: str, fly_to: str, date_from: str, date_to: str ) -> FlightData:
        """ search for cheap flights between fly_from and fly_to and return instance of FlightData object """

        query = {
            "fly_from": fly_from,
            "fly_to": fly_to,
            "date_from": date_from,
            "date_to": date_to,
            "flight_type": "oneway",  # available: oneway, round
            "curr": "EUR",
            "max_stopovers": 1, # Integer, 0 returns direct flights only
            "one_for_city": 1  # integer, returns only 1 cheapest flight per destination.
        }        

        response = re.get(url=TEQUILA_SEARCH, headers=TEQUILA_HEADER, params=query)
        data = response.json()

        flightdata = FlightData(
            fly_from=data["data"][0]["flyFrom"],
            fly_to=data["data"][0]["flyTo"],
            city_to=data["data"][0]["cityTo"],
            departure=data["data"][0]["local_departure"],
            arrival=data["data"][0]["local_arrival"],
            price=data["data"][0]["price"],
            )        

        return flightdata




