class FlightData:
    #This class is responsible for structuring the flight data.
    def __init__(self, fly_from, fly_to, city_to, departure, arrival, price):

        self.data = {
            "Fly from": fly_from,
            "Fly to (airport IATA)": fly_to, 
            "Fly to (city)": city_to,
            "departure date (local)": departure.split("T")[0], # '2022-12-13T08:35:00.000Z'  after split("T"): [ "2022-12-13", "08:35:00.000Z" ]
            "departure time (local)": departure.split("T")[1].split(".")[0], # '2022-12-13T08:35:00.000Z'  after split("T"): [ "2022-12-13", "08:35:00.000Z" ]
            "arrival date (local)": arrival.split("T")[0], # '2022-12-13T21:45:00.000Z'  after split("T"): [ "2022-12-13", "21:45:00.000Z" ]
            "arrival time (local)": arrival.split("T")[1].split(".")[0], # '2022-12-13T21:45:00.000Z'  after split("T"): [ "2022-12-13", "21:45:00.000Z" ]
            "price": price,
            "curr": "EUR"
        }
    

