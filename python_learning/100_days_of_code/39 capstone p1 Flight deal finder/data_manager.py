import requests as re
import dotenv
import os
import json


# load environment variables
dotenv.load_dotenv()
sheety_endpoint = os.environ.get("sheety")
sheet_authorization = {
    "Authorization": os.environ.get("sheet_authorization")
}


class DataManager:
    #This class is responsible for talking to the Google Sheet.
    def __init__(self):

        self.sheet_data = {}
    
    def download_data(self) -> dict:
        """ request api.sheety.co endpoint to receive data from the spreadsheet and return sheet_data dictionary """
        response = re.get(url=sheety_endpoint, headers=sheet_authorization)
        response.raise_for_status()
        data = response.json()
        self.sheet_data = data["prices"]
        return self.sheet_data
    
    def update_sheet(self):
        """ call requests.put() for each row and update the sheet with IATA codes """
        for row in self.sheet_data:
            updated_sheet_data = {
                "price": {
                    "iataCode": row["iataCode"]
                }
            }
            re.put(url=f"{sheety_endpoint}/{row['id']}",
                json=updated_sheet_data, headers=sheet_authorization)

    def read_file(self, filepointer: str) -> json:
        """ open json file, store it in {self.sheet_data} and return it """
        with open(filepointer, "r") as file:
            content = json.loads(file.read())
            self.sheet_data = content
            return self.sheet_data


    def write_file(self, data:dict, filepointer:str):
        """ write any input data to json file with indentation of 4 """
        with open(filepointer, "w") as file:
            json.dump(obj=data, fp=file, indent=4)


