# Build a bike rental shop

In this 210-lesson course, you will build an interactive Bash program that stores rental information for your bike rental shop using PostgreSQL.

## My notes

Create database 'bikes' with tables for bike inventory, customers and bikes that are rented out.
To recreate full database use `pg_dump` for backup and `psql` to restore:

```sh
# dump (every option have a short switch also)
pg_dump --clean --create --inserts --username=username database_name > file_name.sql

# restore
psql --username=username database_name < file_name.sql
```

## Table setup

I have created a dump file so you can recreate database with single `psql` command. Here is the basic structure of tables.

```sql
CREATE TABLE bikes(
  bike_id SERIAL PRIMARY KEY,
  type VARCHAR(50) NOT NULL,
  size INT NOT NULL,
  available BOOLEAN DEFAULT TRUE
  );
CREATE TABLE customers(
  customer_id SERIAL PRIMARY KEY,
  phone VARCHAR(15) UNIQUE NOT NULL,
  name VARCHAR(40) NOT NULL
  );
CREATE TABLE rentals(
  rental_id SERIAL PRIMARY KEY,
  customer_id INT NOT NULL,
  bike_id INT NOT NULL,
  date_rented DATE NOT NULL DEFAULT NOW(),
  date_returned DATE,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
  FOREIGN KEY (bike_id) REFERENCES bikes(bike_id)
);
```

## Few details about bash syntax

Bash is not my favorite language, sometimes i need more time decoding a syntax than writing logic. Difference between double brackets `[[ ... ]]` and single brackets `[ ... ]`, double parentheses `(( ... ))`, single quotes `' ... '` or double quotes `" ... "`. I invested some time in researching this just to have that knowledge archived here in a `readme.md` file.

Found out that single quote will not allow variable expansion so when you do `echo '$NAME is my name'` you wont see the value of `$NAME` variable but instead it will print exactly what you typed. Single quotes are considered safer because of that, you wont get unexpected results. Double quote on the other hand allow variable expansion and same expression inside double quotes will print the value of variable `$NAME`.

Single brackets are used to test the value of an expression, often used in conditions for if statements and loops. They are considered obsolete since double brackets offer same more functionality.

```sh
# single brackets
if [ "$var" == "Hello" ]; then
    echo "var is Hello"
fi
```

Double brackets are an improved version of single brackets, allowing for more advanced tests and string comparisons. They also support the use of logical operators (&&, ||) and regular expressions.

```sh
# double brackets
if [[ "$var" =~ ^H.*o$ ]]; then
    echo "var starts with H and ends with o"
fi
```

Double parentheses are used for arithmetic expressions. They allow for arithmetic operations, such as addition, subtraction, multiplication, and division.

```sh
# double parentheses
result=$((2 + 2))
echo "2 + 2 = $result"
```

**It is recommended to use double brackets `[[ ... ]]` over single brackets `[ ... ]` for condition testing, and double parentheses (( )) for arithmetic expressions.**

## Simple and interactive bash program to query the database

After filling up the inventory with few basic bike models i will create the script `bike-shop.sh`. Planning to add python script also but since it is not required for certificate of completion i will do it when i complete the course. Was thinking about how it could look so i written a basic.

Testing expressions can be done before putting them in a script. Try this:

```sh
# [[  ]] evaluates true or false, =~ is testing for regular expressions
# compare string on left side with regular expression on right using regex operator =~
# chain operator ; splits two different commands so you can run them on a same line
# echo $? will print the exit status of previous command: 0 for true and everything else for false
[[ a1 =~ [0-9] ]]; echo $? # if string a1 have a single digit 0 to 9 echo will print 0
! [[ a1 =~ [0-9] ]]; echo $? # adding ! in front, NOT TRUE logic, opposite test
```

Script interacts with 3 tables, bikes, customers and rentals. Logic is split over 3 menus, main menu, rent menu and return menu. Here you can select what to do next. Starting from the main menu user can choose to "rent a bike", script then queries the database and prints bikes that are currently available. If bike is available user will input his name and a phone number, script will then query the database to insert these details into customers table, set bike availability to false and write a record in to a rentals table.

I have learned more about bash scripting than SQL queries but it is for sure the fun little project. With just a little imagination you can apply this knowledge to any store or service available.



#tags: readme, sql, single double brackets, quotes, parentheses, bash syntax, script insert query data,