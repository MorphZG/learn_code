import os
import requests

sheety_endpoint = "https://api.sheety.co/1c5f266afe8ec3efa60482e264a5976b/flightDeals/users"

print("""
Welcome to Kizo flight club!
We will email you with the best flight prices.
Enter your details so we can contact you.
""")

firstName = input("Enter your first name: ")
lastName = input("Enter your last name: ")

matchEmails = False
while matchEmails == False:
    email1 = input("Enter your email address: ")
    email2 = input("Type your email again: ")
    if email1 == email2:
        print("Welcome! You are now our club member.")
        matchEmails = True
    else:
        print("Your email address does not match!")

user_details = {
    "user": {
        "firstName": firstName,
        "lastName": lastName,
        "email": email1
    }
}
header = {
    "Content-Type": "application/json",
    "Authorization": os.environ['SheetyAuthorization']
}

response = requests.post(url=sheety_endpoint,
                         json=user_details,
                         headers=header)
data = response.json()
print(data)
