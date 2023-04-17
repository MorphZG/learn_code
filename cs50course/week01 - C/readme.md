# Week 1: C

[Link to official page](https://cs50.harvard.edu/x/2022/weeks/1/)

## Lecture 01

- Data types
- Operators
- Conditional statements
- Loops
- Command line

## Problem set 1

[Link to official page](https://cs50.harvard.edu/x/2022/psets/1/)

- hello.c
- mario-less
- mario-more
- cash.c
- credit.c

## Read more about

- **computer memory** and 32 bits problem
- **greedy algorithms**, always takes the best immediate, or local, solution while
  finding an answer. always trying to take the shortest route. greedy algorithms
  find the overall, or globally, optimal solution for some otimization problems,
  but may find less than optimal solution for some instances of other problems.
- **Luhn's algorithm**. most credit cards use an algorithm invented by Hans Peter Luhn
  of IBM. according to luhn's algorithm, you can determine if a credit card number
  is syntactically valid as follows:
    - multiply every other digit by 2, starting with the number's second-to-last
      digit, and then add those products' digits together.
    - add the sum to the sum of the digits that weren't multiplied by 2.
    - if the total's last digit is 0 or, put more formally, if the total modulo
      10 is congruent to 0, the number is valid.
- **"checksum"** a mathematical relationship between at least one number and others.
  That checksum enables computers or humans who likes math to detect typos
  (e.g. transpositions), if not fraudulent numbers, without having to query a
  database, which can be slow. of course, a dishonest mathematician could certainly
  craft a fake number that nontheless respects the mathematical constrint, so a
  database lookup is still necessary for more rigorous checks.
