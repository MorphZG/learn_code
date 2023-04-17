import psycopg2
import os
import dotenv

dotenv.load_dotenv()

# ======================= connect to database ======================
connection = psycopg2.connect(
    host="localhost",
    database="bikes",
    user="zoran",
    password=os.environ.get("password")
)
print("Connected to the database")

cursor = connection.cursor()


# ========================= main ===============================
def main_menu(message = None):
    if message:
        print("\n" + message)

    print("How may I help you?")
    print("\n1. Rent a bike\n2. Return a bike\n3. Exit")
    main_menu_selection = input()

    if main_menu_selection == '1':
        rent_menu()
    elif main_menu_selection == '2':
        return_menu()
    elif main_menu_selection == '3':
        exit()
    else:
        main_menu("Please enter a valid option")

def rent_menu():
    cursor.execute("SELECT bike_id, type, size FROM bikes WHERE available=true ORDER BY bike_id")
    available_bikes = cursor.fetchall()
    print("\nHere are the bikes we have available:")
    for bike in available_bikes:
        b_id, b_type, b_size = bike[0], bike[1], bike[2]
        print(f"{b_id}. {b_type}: {b_size}\"")

    print("\nWhich one would you like to rent?")
    bike_id_to_rent = input()
    # Perform database query to rent the bike

def return_menu():
    print("Return Menu")

def exit():
    print("\nThank you for stopping in.\n")

main_menu()
#connection.close()
#cursor.close()