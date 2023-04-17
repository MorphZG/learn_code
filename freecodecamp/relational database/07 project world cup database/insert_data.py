import psycopg
import csv

with open("games.csv", "r") as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        print(row["opponent"])


with psycopg.connect("dbname=worldcup user=zoran") as connection:
    with connection.cursor() as cursor:
        cursor.execute(
            """
        SELECT * FROM teams;
        """
        )
        cursor.fetchall()
        for i in cursor:
            print(i)

test = "something"
test.up


