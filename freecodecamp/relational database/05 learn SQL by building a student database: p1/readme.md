# Build a Student Database: Part 1

In this 140-lesson course, you will create a Bash script that uses SQL to enter information about your computer science students into PostgreSQL.

## My notes

After creating the students database and filling in the required columns i inserted the first row of data. Since it would be tedious to enter all the details manually i had to write the bash script instead. `insert_data.sh` will do the hard work. Start with simple `cat courses.csv` and pipe it to `while` loop. There are different tables and different columns it should fill out so it will be helpful to plan and organize the script with todo comments and notes. I will declare the `$PSQL` variable so i can easily query the database from the script. Variable will hold the command together with options (flags) to login in and connect to the database, run the query and disconnect back to bash shell. This is how it looks:

```bash
# -c flag in the end will run the query and disconnect back to default shell
PSQL="psql -X --username=freecodecamp --dbname=students --no-align -tuples-only -c"

# query the database with the variable
$($PSQL "<query_here>")
```

To minimize unnecessary writing i have tried to comment the script on every block i found interesting.
Backup current database with pg_dump. It will write a script that will rebuild your database from scratch. Run `pg_dump --help` for more info.

```sh
# dump (every option have a short switch also)
pg_dump --clean --create --inserts --username=username database_name > file_name.sql

# restore
psql --username=username database_name < file_name.sql
```


#tags: bash script, sql, pg_dump