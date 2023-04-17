"""
I will leave this for my private repository and complete it later
"""

import argparse
import sys
import os

"""
script to help me test run times of unkown algorithms
for week 3, lab assignment: sort
There are 9 different .txt files with some data. I must run time command on each
to see how they perform
$ ./script.py <time> <algorithm_file> <data_file>
"""
parser = argparse.ArgumentParser(description = 'runs <time> with different sorting algorithms')
parser.add_argument('time', help='command that count the runtime of the script', type=string
)
parser. add_argument('file_name', help='filename.txt should contain random digits to sort',  )
args = parser.parse_args()


random_files = ["random5000.txt", "random10000.txt", "random50000.txt"]
sorted_files = ["sorted5000.txt", "sorted10000.txt", "sorted50000.txt"]
reversed_files =["sorted5000.txt", "sorted10000.txt", "sorted50000.txt"]

def loopthrough(array):
    """ :param1: array is a list of data file """
    for file in array:
        with open(file) as fo:
            pass

