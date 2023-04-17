#! /bin/bash
# Bingo Number Generator

echo -e "\n~~ Bingo Number Generator ~~\n"

# (( 1 + 1 )) will perform calculation without return value
# adding $ in front will return the result to variable
NUMBER=$(( RANDOM % 75 + 1 ))  # integer arithmetic, call RANDOM var, keep it in range of 1 to 75 
TEXT="The next number is,"

if (( $NUMBER <= 15 ))  # integer arithmetic
then
  echo  $TEXT B:$NUMBER
elif [[ $NUMBER -le 30 ]]  # test expression, return true or false
then
  echo $TEXT I:$NUMBER
elif (( $NUMBER < 46 ))  # integer arithmetic
then
  echo $TEXT N:$NUMBER
elif [[ $NUMBER -lt 61 ]]  # test expression, return true or false
then
  echo $TEXT G:$NUMBER
else
  echo $TEXT O:$NUMBER
fi

#tags: environment variable, calculation, ((, [[,