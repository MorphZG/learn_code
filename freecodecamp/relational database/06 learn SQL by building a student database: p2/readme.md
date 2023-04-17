# Build a Student Database: Part 2

SQL join commands are used to combine information from multiple tables in a relational database. In this 140-lesson course, you will complete your student database while diving deeper into SQL commands.

## My notes

Learning about different ways to filter out the data. Will write a script that will query the `students.sql` database and print the students depending on different input parameters. I have learned to combine different conditions to get the data i need. It is possible to match patterns, like view row where name starts with "Fre" or have "ode" somewhere in the middle. Still not sure is it powerful as regular expressions but it looks promising for sure. Characters like `_` will replace any single character while `%` replace any number of characters. It is also possible to sort the results of a query in ascending or descending order by using `ASC` or `DESC` at the end of a `ORDER BY column_name` statement. It is also possible to `LIMIT` the output to certain number. Both `ORDER BY` and `LIMIT` must go behind `WHERE` statement if you have one.

SQL also provides some mathematic functions to be applied on numerical columns, `MIN()` `MAX()` `AVG()` `CEIL()` `FLOOR()` `ROUND()` `COUNT`...
When grouping more than one column, use `GROUP BY`, any columns in a SELECT area must be included in a `GROUP BY` area. Other columns must be used with any of the aggregate functions (MAX, AVG, COUNT, etc) `SELECT column_1, MAX(column_2) FROM table_name GROUP BY column_1;`. Can add additional `HAVING condition` at the end. eg. `HAVING MAX(score) > 3`.

We can use `FULL JOIN`, `RIGHT JOIN`, `LEFT JOIN`, `INNER JOIN` keywords to merge data from two tables and display them in a single table. Tables must have foreign key relation. There's a shortcut keyword, `USING` to join tables if the foreign key column has the same name in both tables. Here's an example: `SELECT * FROM table_1 FULL JOIN table_2 USING(column);`. Joins are used very often as it seems. I should learn more about them, there is huge base of knowledge shared on [postgresqltutorial.com](https://www.postgresqltutorial.com/).

To display descriptive column names that are different than original names add `AS` keyword in in SELECT area. `SELECT column_name AS alt_name`.

```sql
-- condition OR multiple condition
SELECT * FROM table_name WHERE condition_1 AND (condition_2 OR condition_2);

-- regex pattern matching
SELECT * FROM table_name WHERE column_name LIKE 'pattern';  --exact match
SELECT * FROM table_name WHERE column_name NOT LIKE 'pattern';  --opposite of pattern
SELECT * FROM table_name WHERE column_name ILIKE 'pattern';  --ignore case
SELECT * FROM table_name WHERE column_name NOT ILIKE 'pattern';  --opposite, ignore case
SELECT * FROM table_name WHERE column_name LIKE 'pattern' AND column_name ILIKE 'pattern';  --combined

-- sort the result, ASC ascending, DESC descending
SELECT * FROM table_name ORDER BY column_name DESC

-- complex queries with multiple pattern matching, sort order and limited number of outputs
SELECT * FROM table_name WHERE column_name LIKE 'pattern' OR column_name LIKE 'pattern' ORDER BY column_name DESC LIMIT 5;

-- math functions
SELECT ROUND(number_column, decimal_places) FROM table_name;
SELECT AVG(number_column) FROM table_name;
SELECT CEIL(AVG(number_column)) FROM table_name;
-- count number of not null rows
SELECT COUNT(column_name) FROM table_name;

-- grouping
-- eg. count students having same major_id
-- eg. max score in each major_id
SELECT column_name, COUNT(*) FROM table_name GROUP BY column_name;
SELECT major_id, COUNT(*) FROM students GROUP BY major_id;
SELECT major_id, MAX(score), MIN(score) FROM students GROUP BY major_id
-- additional HAVING condition
SELECT major_id, MAX(score), MIN(score) FROM students GROUP BY major_id HAVING MAX(score) > 3;
-- show major_id and count everyone having it. show count as "number_of_students". from students table, group them by major_id, filter major_id with count of everyone less than 8
SELECT major_id, COUNT(*) AS number_of_students FROM students GROUP BY major_id HAVING COUNT(*) < 8
-- join two or more tables into one, having primary or foreign key relation
SELECT * FROM table_1 FULL JOIN table_2 ON table_1.foreign_key_column = table_2.foreign_key_column;
-- if tables have foreign keys with the same name, use shortcut keyword USING(name)
SELECT * FROM table_1 FULL JOIN table_2 USING(column_name);
SELECT * FROM table_1 FULL JOIN table_2 USING(column) FULL JOIN table_3 USING(column)
```

#tags: readme, bash script, sql, where, like pattern, regex, limit, sort order, count, group, math, having, join, using,