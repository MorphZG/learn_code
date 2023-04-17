#!/bin/bash

# Program that counts down to zero from a given argument

echo -e "\n~~ Countdown Timer ~~\n"  # -e enables escape characters

if [[ $1 -gt 0 ]]  # if first arg > 0
then

# first version with for loop, commented out
# (( i = first arg; until i >= 0; i -1 ))
: '
for (( i = $1; i >= 0; i-- ))
do
  echo $i
  sleep 1
done
'

# second version with while loop
I=$1  # I = first arg
while [[ $I -ge 0 ]]  # while first arg >= 0
do
  echo $I
  (( I-- ))  # I minus 1
  sleep 1
done

else
  echo Include a positive integer as the first argument.
fi

# echo exit status, read readme.md
echo "exit status:" $?

#tags: bash, argument, if else, operator, for, while, loop, exit status