
# Flight deal finder, capstone project p1

## Introduction

Inspired by [Jack's Flight Club](https://jacksflightclub.com) and upgrading on previous project `39 capstone p1 Flight deal finder`, i will create the program that will allow other users to access my customer acquisition program. Code will be hosted at [repl.it](https://replit.com) where users can access the console and enter their contact email. I will then build another spreadsheet to store the emails.

I will have to copy the yesterday's project and build upon it. So let's do it, should be easier than yesterday.

## My notes

[Replit page](https://replit.com/@MorphZG) holds a few `input()` lines and sends a json payload to Sheety.io endpoint. All it asks for is first name, last name and double confirmation of email address.

To minimize the number of requests to Sheety.io i will still use my .json files to store the flight data. `DataManager` class defines methods to handle reading and updating local .json files but also downloading and uploading data to a google spreadsheet. That way i can use both local and online storage of flight data. For now i will work with local .json files.

I have created user acquisition interface at [replit.com](https://replit.com/@MorphZG/Flight-Club). Created another sheet for users. Both users and prices are in the same file (just as a note to myself).

<!-- continue at step 4 -->