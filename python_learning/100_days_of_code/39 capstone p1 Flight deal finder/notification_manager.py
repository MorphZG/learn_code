import smtplib
import dotenv
import os


# load environment variables
dotenv.load_dotenv()


class NotificationManager:
    #This class is responsible for sending notifications with the deal flight details.

    def __init__(self, sender, receiver, authorization):
        """ initialize email notification class """
        self.sender = sender
        self.receiver = receiver
        self.authorization = authorization

    def send_email(self, content:str):
        """ send the email, watch for imput parameters """ 

        print(f"Preparing the email for: {self.receiver}")
        connection = smtplib.SMTP(host="smtp.gmail.com")  # initialize SMTP class
        connection.starttls()  # security feature that encrypts the connection
        connection.login(user=self.sender, password=self.authorization)
        connection.sendmail(from_addr=self.sender, to_addrs=self.receiver,  
            msg=f'Subject:Notification!\n\n{content}') # \n\n separates mail title

        print(f"{content}\n:::::message sent!::::")
        connection.close()