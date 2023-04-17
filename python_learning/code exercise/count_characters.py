# /usr/bin/python3

"""
The main idea is to count all the occurring characters in a string. If you have
a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal {}
"""


def charcount(string):
    """ counts the individual letters in a string and store the result in dictionary """
    dictionary = {}
    for char in string:
        dictionary[char] = dictionary.get(char, 0) + 1

    return dictionary


"""
clever example i found online. using collections library

from collections import Counter

def count(string):
    return Counter(string)
"""

print(charcount("countcharacters"))

#modules: collections
#tags: count, dictionary, string, character
