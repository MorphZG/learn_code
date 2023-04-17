# Learn relational databases by building a Mario database

A relational database organizes data into tables that are linked together through relationships.
In this 165-lesson course, you will learn the basics of a relational database by creating a PostgreSQL database filled with video game characters.

## My notes

Course starts with command `psql --username=freecodecamp --dbname=postgres` that starts the postgres shell. Type `\l` to list created databases and create new database with `CREATE DATABASE database_name`. I did not plan to write verbose readme even though i easily could. I will instead list important statements and add few notes i found good to know. All of this is absolute basics but as organized and persistent learner i must take notes.

### Basic datatypes

- One of common data types is `VARCHAR`, it's a short string of characters. You need to declare the maximum length `VARCHAR(30)`
- `TEXT` is a variable-length data type that can store long character strings. `TEXT` can hold up to 2,147,483,647 bytes of data. The actual storage used depends on the length of the character string
- `SERIAL` datatype will make your column an `INTEGER` with a `NOT NULL` constraint and automatically increment the integer when a new row is added. Memory size of 4 bytes (range: 1 to 2,147,483,647); `SMALLSERIAL` with memory size of 2 bytes (range: 1 to 32,767); `BIGSERIAL` with memory size of 8 bytes (range: 1 to 9,223,372,036,854,775,807)
- `DATE` The postgresql supports the complete set of SQL date and times data types. They are used to represent date and time values. There are `TIMESTAMP`, `TIME`, `INTERVAL` and `DATE`
- `NUMERIC(precision, scale)` can store decimal numbers. Can store 131072 digits before decimal point and 16383 after decimal point. Precision defines total number of digits, scale defines a fraction part behind decimal point. 2356.78 have precision of 6 and scale of 2. When declaring `NUMERIC` datatype we can ignore scale or both precision and scale.

### Basic concepts

- **Primary key**. It is a good practice to add a primary key to every table. A primary key is a column or a group of columns used to identify a row uniquely in a table. You define primary keys through primary key constraints. Technically, a primary key constraint is the combination of a not-null constraint and a UNIQUE constraint. A table can have one and only one primary key.
- **Foreign key**. A foreign key is a column or a group of columns in a table that reference the primary key of another table. The table that contains the foreign key is called the referencing table or child table. And the table referenced by the foreign key is called the referenced table or parent table. A table can have multiple foreign keys depending on its relationships with other tables.
- **Composite key**. Primary key composed of two or more columns. A composite key in SQL can be defined as a combination of multiple columns, and these columns are used to identify all the rows that are involved uniquely. Even though a single column can’t identify any row uniquely, a combination of over one column can uniquely identify any record. In other words, the combination key can also be described as a primary key that is being created by using multiple columns. However, the data types of different columns could differ from each other. You can also combine all the foreign keys to create a composite key in SQL.
- **Junction table**. To create "many-to-many" relationship we need a junction table. Many items from one table can have relation with many items from another table. "many-to-many" relationships usually use a junction table to link two tables together, forming two "one-to-many" relationships.
- **Join command**. Join is used to combine columns from one (self-join) or more tables based on the values of the common columns between related tables. The common columns are typically the primary key columns of the first table and foreign key columns of the second table. PostgreSQL supports inner join, left join, right join, full outer join, cross join, natural join, and a special kind of join called self-join.

### Basic statements and commands

```sql

\l                                                          --list available databases
\c database_name;                                           --connect to database
\d                                                          --display all tables
\d table_name;                                              --display table details
\! clear                                                    --(CTRL + L) alternative, clear screen
ALTER DATABASE target_database OWNER TO new_owner;           --change database owner
CREATE DATABASE database_name;                              --create new database
CREATE TABLE table_name();                                  --create new table
CREATE TABLE table_name(column_name DATATYPE CONSTRAINT);   --create new table with new columns (no comma between)
DELETE FROM table_name WHERE condition;                     --delete record from table
TRUNCATE table_name1, table_name2;                          --delete all records from the table
DROP TABLE table_name;                                      --delete table from database
DROP DATABASE database_name;                                --delete database
ALTER DATABASE database_name RENAME TO new_database_name;   --rename database
UPDATE table_name SET column_name=new_value WHERE condition;--change value in a row
UPDATE table_name SET column1=new_value, column2=new_value WHERE condition;--change multiple values
SELECT columns_name FROM table_name;                        --view columns in a table, use * to show all columns
SELECT columns_name FROM table_name WHERE condition;        --view columns in a table that match some condition eg. name='Mario'
SELECT * FROM table_name WHERE condition_1 AND (condition_2 OR condition_2) -- multiple conditions;
SELECT columns_list FROM table_name ORDER BY expression ASC;--sort rows by expression in ASC or DESC order
ALTER TABLE table_name RENAME COLUMN old_name TO new_name;  --rename column
ALTER TABLE table_name DROP COLUMN column_name;             --remove column
ALTER TABLE table_name RENAME COLUMN column_name TO new_name;--rename column
ALTER TABLE table_name ADD PRIMARY KEY(column_name);        --add primary key, column that will serve as unique identifier for each row
ALTER TABLE table_name ADD PRIMARY KEY(column1, column2);   --add a composite, primary key
ALTER TABLE table_name DROP CONSTRAINT constraint_name;     --drop constraint, eg. remove primary key (type '\d table_name' for more details)
ALTER TABLE table_name ADD UNIQUE(column_name);             --add 'UNIQUE' constraint to a column_name
ALTER TABLE table_name ALTER COLUMN column_name SET NOT NULL;--add 'NOT NULL' constraint to a column_name
ALTER TABLE table_name ALTER COLUMN column_name TYPE DATATYPE;   --change datatype of a column
  --add column, constraint is optional
ALTER TABLE table_name ADD COLUMN column_name DATATYPE CONSTRAINT;
  --insert a row into a table
INSERT INTO table_name(column_1, column_2) VALUES(value1, value2);
  --insert multiple rows into a table
INSERT INTO table_name(column_1, column_2) VALUES(value_1, value_2),(value_1, value_2);
  --add 'foreign key' column that will relate with column from another table
ALTER TABLE table_name ADD COLUMN column_name DATATYPE REFERENCES referenced_table_name(referenced_column_name);
  --add 'foreign key' column with another constraint
ALTER TABLE table_name ADD COLUMN column_name DATATYPE CONSTRAINT REFERENCES referenced_table_name(referenced_column_name);
  --create new table with new column as a foreign key,
  --add multiple tables at once by separating them with comma.
CREATE TABLE table_name(column_name DATATYPE REFERENCES referenced_table(referenced_column), column_name DATATYPE CONSTRAINT);
  --set existing column as a foreign key
ALTER TABLE table_name ADD FOREIGN KEY(column_name) REFERENCES referenced_table(referenced_column);
  --join command to show the info from two tables together, ON keyword
SELECT * FROM table_1 FULL JOIN table_2 ON table_1.primary_key_column = table_2.foreign_key_column;
SELECT * FROM table_1 FULL JOIN table_2 ON table_1.foreign_key_column = table_2.foreign_key_column;
  --join command to show the info from three different tables, USING keyword
SELECT column_name FROM table_1 INNER JOIN table_2 USING(foreign_key) INNER JOIN table_3 USING(foreign_key)
  --join command, USING and WHERE with two conditions
SELECT * FROM bikes INNER JOIN rentals USING(bike_id) INNER JOIN customers USING(customer_id)
WHERE phone = '555-5555' AND date_returned IS NULL;
  --join command to show info from tables with "many-to-many" relations
  --when many items from one table have relation with many items from another table we have to use a "junction table"
SELECT columns FROM junction_table_3
FULL JOIN table_1 ON junction_table_3.foreign_key_column = table_1.primary_key_column 
FULL JOIN table_2 ON junction_table_3.foreign_key_column = table_2.primary_key_column;

--reset serial sequence column
ALTER SEQUENCE detailed_column_name_seq RESTART WITH 1;
```

Example on how to create basic table setup, code copied from lesson "09 build bike rental shop"

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


#tags: postgresql, basic commands, create, alter, insert, select, drop, delete from, update, order-sort, constraint, primary key, foreign key, composite key, full join, inner join, junction table, using,