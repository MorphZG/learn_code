#!/bin/bash

read NAME         # wait for user input and store $NAME variable
echo Hello $NAME  # print the $NAME
bad_command       # bad_command will error

# When running the script, try this:
# echo Hello | ./script.sh 2> stderr.txt > stdout.txt