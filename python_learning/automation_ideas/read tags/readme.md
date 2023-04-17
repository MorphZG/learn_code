# Read tags

Every python file in python_learning directory have list of tags and list of modules
in the last two lines of code so i can grep through them when looking for something.
Now i want the list of all tags that you can find.

First i will grep through the full python_learning directory with the output to file.
Searching for the line containing the tags

```bash
grep -r '#tags' > grep-tags.txt
```

Program will use regular expressions to filter the output of a grep command and leave
only the tags.

For easier pattern building go to: https://regex101.com/

#tags: readme,