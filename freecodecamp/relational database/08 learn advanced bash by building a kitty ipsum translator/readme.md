# Advanced bash, Kitty Ipsum Translator

There's more to Bash commands than you might think.

In this 140-lesson course, you will learn some more complex commands, and the details of how commands work.

# My Notes

Bash sends the command results to standard output `stdout`, standard error `stderr` and reads the input from standard input `stdin`.
You can redirect each of those with the following operators:

```sh
echo 'Hello World' > filename.txt   # redirection of stdout
echo 'Hello World' >> filename.txt  # redirection of stdout
echo 'Hello World' 1> filename.txt  # redirection of stdout

bad_command 2> filename.txt  # redirection of stderr
read NAME < name.txt   # redirect stdin from keyboard to name.txt and assign it to NAME variable
```

I can use the pipe operator `|` to use the output of one command as input for another.

```sh
echo 'Hello world' | read VARIABLE  # $VARIABLE will point to 'Hello world'
```

I have written the small script to test few things. Script will first wait for user input and store that with $NAME variable, it will then echo $NAME and try to run bad_command. I can redirect stdin, stdout and stderr in the following way:

```sh
echo Hello | ./script.sh 2> stderr.txt > stdout.txt
```

## wc

I was introduced to `wc` command (wc as word count). It will print line, word and byte count for each file. Read manual for the command, if there is no file than read `stdin`. After learning about different `wc` options i created a file `kitty_info.txt` to store information about two other text files `kitty_ipsum_1.txt` and `kitty_ipsum_2.txt`. Data in that info file was entered using only terminal commands like `echo` and `cat`, redirection `<` `>` of input and output or piping `|` the output of one command as input to another.

```sh
echo -e '\nNumber of lines:' >> kitty_info.txt
cat kitty_ipsum_1.txt | wc -l >> kitty_info.txt

echo -e '\nNumber of words:' >> kitty_info.txt
cat kitty_ipsum_1.txt | wc --words >> kitty_info.txt

echo -e '\nNumber of characters:' >> kitty_info.txt
cat kitty_ipsum_1.txt | wc -m >> kitty_info.txt
```

## grep

One of my favorite CLI tools, `grep`. Use it to search for text patterns and regular expressions. Some will argue that regex is obsolete and there is no need to learn them but somehow i find them interesting. We are looking for a "meow" or any words starting with "meow" in a `kitty_ipsum_1.txt`. In a manual page you can find many useful options but for now i will add color with `--color` flag, show line numbers with `-n` flag. It is also able to count matching lines with `-c` that will print only the number of lines where match is found. Since single line can hold more than one match, counting words this way is not reliable. Set `-o` to print only the matching word in its own line than pipe it to `wc` command that will do the count. We often need some meta characters with special meaning like `?, +, {, |, ( )`, to enable them you need to pass `-E` option to command. It will enable extended regular expression (ERE). By default `grep` uses basic regex (BRE). There are options for Perl-compatible regex `-P` (PREs), `-G` for basic (BRE), `-F` for fixed strings or no regex and `-E` for extended (ERE). There are many guides online for grep and regular expressions. Official GNU web have some good help pages.

Practice regular expressions: [regex101.com](https://regex101.com/)

```sh
grep --color -n 'meow[a-z]*' kitty_ipsum_1.txt  # find all words starting with 'meow', enable color and line numbers
grep -c 'meow[a-z]*' kitty_ipsum_1.txt  # print the count of matching lines
grep -o 'meow[a-z]*' kitty_ipsum_1.txt  # print only matching word in its own line

echo -e "\nNumber of times meow or meowzer appears:" >> kitty_info.txt 
grep -o 'meow[a-z]*' kitty_ipsum_1.txt | wc --words  >> kitty_info.txt # count the matching pattern
```

## sed

sed is a stream editor for filtering and replacing text. Basic substitution syntax: 

```sh
sed 's/<regexp_pattern>/<replacement>/[flag]' <filename>
```

Use `grep` to find any word starting with meow, adding -n option will print the line numbers where pattern appears. Than using `sed`, filter the output from grep so it replaces the whole line with just line numbers. `grep` will output something like '13.meow' and `sed` will replace it with '13'. For this to work `sed` needs to enable extended regex with `-E`.

```sh
# add another line to kitty_info.txt
echo -e '\nLines that they appear on:' >> kitty_info.txt
# grep to show line numbers where pattern appears
# pipe to sed
# group the line numbers, match any digit between 0-9 that repeats more than once. ([0-9]+)
# any character zero or more times (till the end of the line) .*
# \1 will replace pattern with first capture group ([0-9]+)
grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed -E 's/([0-9]+).*/\1/' >> kitty_info.txt

echo -e '\nNumber of times cat, cats, or catnip appears:' >> kitty_info.txt
grep -o 'cat[a-z]*' kitty_ipsum_1.txt | wc --words >> kitty_info.txt

echo -e '\nLines that they appear on:' >> kitty_info.txt
grep -n 'cat[a-z]*' kitty_ipsum_1.txt | sed -E 's/([0-9]+).*/\1/' >> kitty_info.txt
```

## Translate from kitty to doggy_ipsum

After completing the `kitty_info.txt` file containing different stats for two kitty_ipsum files i will create a script `translate.sh` that will substitute or "translate" some words and create `doggy_ipsum.txt`

To test the script before writing to a file, run it and pipe the result to `grep`.

```sh
# test the script with grep
./translate.sh kitty_ipsum_1.txt | grep -E --color 'dog[a-z]*|woof[a-z]*'

# output to file
./translate.sh kitty_ipsum_1.txt > doggy_ipsum.txt
```

## diff

To compare the two files line by line and see the lines that are different use `diff` command. You can find some useful options in the manual. By adding color it will be easier to view it --color.

```sh
diff kitty_ipsum_1.txt doggy_ipsum_1.txt
```


#tags: readme, wc, grep, sed