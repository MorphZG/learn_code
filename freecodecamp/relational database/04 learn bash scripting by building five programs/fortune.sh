#!/bin/bash
# Program to tell a persons fortune

echo -e "\n~~ Fortune Teller ~~\n"

# create the RESPONSES array
RESPONSES=("Yes" "No" "Maybe" "Outlook good" "Don't count on it" "Ask again later")
# generate a random number between 0 and 5, will use it as index number
N=$(( RANDOM % 6 ))

# define a function GET_FORTUNE()
GET_FORTUNE() {
  if [[ ! $1 ]]  # if function is called without any arguments ($1 is first argument)
  then
    echo Ask a yes or no question:  # in bash everything is a string so no need for quotes
  else
    echo Try again. Make sure it ends with a question mark:  # in bash everything is a string so no need for quotes
  fi
  # read user input and store in $QUESTION
  read QUESTION
}

# function call
GET_FORTUNE  # call the function without any arguments

# until loop, execute until condition is met, similar to C while do loop
until [[ $QUESTION =~ \?$ ]]  # regex operator =~, until question ends with "?"
do
  # function call
  GET_FORTUNE again  # "again" is passed as an argument to function call
done

# echo item with $N index from RESPONSES array
echo ${RESPONSES[$N]}

#tags: environment variable, calculation, ((, [[, =~, until, regex, function, array index,