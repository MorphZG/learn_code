# Learn to code

There was first python_learning repository, than CS50 Introduction to computer science, finally after creation of SQL_learning repository i realized i should organize my knowledge base and make it easier to browse. This repository is a collection of everything i do to level up my coding skills and fuel the passion i feel for years.

Most of my python files have have tags at the bottom line so i can grep through them (or ack). That way i can search for important topics without complex regex patterns. All tags are written as singular (class instead of classes or loop instead of loops).

```bash 
grep -rnB1 "#tags.*class"

# -r recursive
# -n show line number
# -B1 show previous 1 line (this line holds the list of modules)
```
As i got more comfortable with programming, my code is less verbose with less comments. Comments serve mostly for my future self to easily explain the logic behind the code. With more experience i realized there is no need to remember everything when you have strong fundamentals and starts writing readable and well structured code. Good code should be easy to read, there is no need for comments at all.

## My favorites

- [App Brewery: Web development bootcamp](https://github.com/MorphZG/learn_code/tree/main/app_brewery%20web_development_bootcamp)
- [100 days of code with Python](https://github.com/MorphZG/learn_code/tree/main/python_learning/100_days_of_code)
- [Webdev projects](https://github.com/MorphZG/learn_code/tree/main/webdev_projects)

#tags: readme