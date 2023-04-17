# Learn bash scripting by building five programs

Bash scripts combine terminal commands and logic into programs that can execute or automate tasks, and much more. In this 220-lesson course, you will learn more terminal commands and how to use them within Bash scripts by creating five small programs.

## My notes

### questionnaire.sh

I have started by creating a simple shell script `questionnaire.sh`. I was first introduced with `echo` command, adding execute permission to file with `chmod +x <filename>`, locating bash shell with `which bash` and adding shebang to the top of my script following the location of bash interpreter. Than we continued with some basics like variables, reading from input and so on.

### countdown.sh

Next script was `countdown.sh`. I learn how i can access the input arguments with `$<number>`. I can print all arguments with `echo $*`, to print individual arguments add the position number. `echo $1` will print first argument. I learn about `if` statements, conditions and different operators (arithmetic, comparison, file operators...). Commands have exit status. Exit status 0 means the result was true, or with zero errors. I can access the exit status with `$?`. To check the exit status of last executed command type `echo $?`. To complete the exercise i first did the `for loop` to countdown from the number that was input as first argument and than again did a `while loop` to count down as long as variable is equal or above zero.

### bingo.sh

The numbers in bingo go up to 75, each number has a letter from the word bingo associated with it. Randomly generate a number between 1 and 75. View environment variables by entering `printenv` in the terminal. View all variables created in the current shell with `declare -p`. `-p` stands for print, without it `declare` will create new variables. There is a `$RANDOM` variable that will generate a random number between 0 and 32767. With modulus operator `%` i can keep it in a required range for bingo. **Bash sees everything as a string**. To perform calculations use double parentheses `(( ... ))` to perform calculations without return value. If i need to return the calculation to a variable use `VARIABLE=$(( ... ))`. So to get random number in a 75 range and return it to a variable i will use `NUMBER=$(( RANDOM % 75 ))`. The actual range is 0 to 74 so i must add 1 to keep it from 1 to 75. Program was completed by adding if, elif, else block. I will have to learn more about single and double parentheses `(( ... ))` and double brackets `[[ ... ]]` use case.

### fortune.sh

Create the array of strings `$RESPONSES` and generate the random number `$N` that will serve as an index to access one of the items from the array. Define a function that will `echo` two different questions depending on the input arguments and also read user input to store it in a `$QUESTION` variable. Write `until` loop that will continue to execute as long as a tested condition is not false. In other words, `until` loop will stop when tested condition is true. Similar to "while do" loop in C language. Here we test the `$QUESTION` variable using regular expression operator `=~`. Continue the loop that will call defined function with an argument `GET_FORTUNE argument` until user inputs the string where last character is a question mark `until [[ $QUESTION =~ \?$ ]]`. Finally the program will `echo` the random item from the array `echo ${RESPONSES[$N]}`

There is a fifth script, `five.sh`, that will run all previous scripts one after another.

### created scripts

- questionnaire.sh
- countdown.sh
- bingo.sh
- fortune.sh
- five.sh

#tags: readme, bash