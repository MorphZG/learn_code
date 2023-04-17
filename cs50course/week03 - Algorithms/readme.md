# Week 3: Algorithms

[Link to official page](https://cs50.harvard.edu/x/2022/weeks/3/)

## Lecture

- Linear search
- Binary search
- Bubble sort
- Selection sort
- Recursion
- Merge sort

## Lab: Sort

[Link to official page](https://cs50.harvard.edu/x/2022/labs/3/)

Analyze three sorting programs to determine which algorithms they use.
To see the running times of each sorting algorithm use "time" command.

```bash
time sort1 reversed50000.txt
```

Recall from lecture that we saw a few algorithms for sorting a sequence of numbers: selection sort, bubble sort and merge sort.

- Selection sort iterates through the unsorted portions of a list, selecting the smallest element each time and moving it to its correct location.
- Bubble sort compares pairs of adjacent values one at a time and swaps them if they are in the incorrect order. This continues until the list is sorted.
- Merge sort recursively divides the list into two repeatedly and then merges the smaller lists back into a larger one in the correct order.

**NOTE TO MYSELF**
<!---not necessary, its for fun and experience--->
I could write the python script automate_testing.py and let it loop through the given files and report the result in form of running times. Only downside is time investment. Would be my first time working with command line arguments, should learn basics of libraries like argparse or sys so it's definitely faster to do it manually.

## Problem set

[Link to official page](https://cs50.harvard.edu/x/2022/psets/3/)

- Plurality
- Runoff (less)
- Tideman (more)

## Read more about

- Algorithm running times.
- Big O notation (worst case / upper bound)
- Big omega (best case / lower bound)
- Custom data structures in C, structs
- General data structures and algorithms
- Website for students: [visualalgo.net](https://visualgo.net/en)
