#! /bin/bash
# Script to insert data from courses.csv and students.csv into students database

# use variable to shorten the SQL queries
# -c flag to run single command and exit
# read man pages for other psql options
PSQL="psql -X --username=freecodecamp --dbname=students --no-align --tuples-only -c"
# first query is to clean all tables, delete all values from rows
echo $($PSQL "TRUNCATE students, majors, courses, majors_courses")

# cat courses.csv file and pipe it to while loop,
cat courses.csv | while IFS="," read MAJOR COURSE  # IFS=internal field separator, $MAJOR and $COURSE will hold the values
do

  if [[ $MAJOR != major ]]  # if $MAJOR is not "major" (title line in csv file)
  then
    # get major_id
    # select major_id column from majors table where major column is equal to current $MAJOR variable value
    MAJOR_ID=$($PSQL "SELECT major_id FROM majors WHERE major='$MAJOR'")  

    # if not found
    if [[ -z $MAJOR_ID ]]  # true if lenght of a string is zero
    then

      # insert major
      INSERT_MAJOR_RESULT=$($PSQL "INSERT INTO majors(major) VALUES('$MAJOR')")
      if [[ $INSERT_MAJOR_RESULT == "INSERT 0 1" ]]
      then   # print custom message instead of standard exit code
        echo "Inserted into majors: $MAJOR"
      fi

      # get new major_id
      MAJOR_ID=$($PSQL "SELECT major_id FROM majors WHERE major='$MAJOR'")  
    fi

    # get course_id
    COURSE_ID=$($PSQL "SELECT course_id FROM courses WHERE course='$COURSE'")

    # if not found
    if [[ -z $COURSE_ID ]]
    then

      # insert course
      INSERT_COURSE_RESULT=$($PSQL "INSERT INTO courses(course) VALUES('$COURSE')")
      if [[ $INSERT_COURSE_RESULT == "INSERT 0 1" ]]
      then
        echo "Inserted into courses, $COURSE"
      fi

      # get new course_id
      COURSE_ID=$($PSQL "SELECT course_id FROM courses WHERE course='$COURSE'")
    fi

    # insert into majors_courses
    INSERT_MAJORS_COURSES_RESULT=$($PSQL "INSERT INTO majors_courses(major_id, course_id) VALUES($MAJOR_ID, $COURSE_ID)")
  
    if [[ $INSERT_MAJORS_COURSES_RESULT == "INSERT 0 1" ]]
    then
      echo "Inserted into majors_courses, $MAJOR : $COURSE"
    fi 
  fi
done


# read from students.csv and fill up the students table
cat students.csv | while IFS=',' read FIRST LAST MAJOR GPA
do
  if [[ $FIRST != first_name ]]
  then
    # get major_id
    # from majors table take the major_id of the current $MAJOR
    MAJOR_ID=$($PSQL "SELECT major_id FROM majors WHERE major='$MAJOR'")
    # if not found 
    if  [[ -z $MAJOR_ID ]]
    then
      # set to null
      MAJOR_ID=null
    fi 

    # insert student
    INSERT_STUDENT_RESULT=$($PSQL "INSERT INTO students(first_name, last_name, major_id, gpa) VALUES('$FIRST', '$LAST', $MAJOR_ID, $GPA);")
    if [[ $INSERT_STUDENT_RESULT == "INSERT 0 1" ]]
    then
      echo "Inserted into students, $FIRST $LAST"
    fi
  fi
done

#tags: while read, psql