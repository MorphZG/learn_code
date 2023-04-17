# Reverse words

'''
https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/python

'''
# Complete the solution so that it reverses all of the words within the string passed in.

# Example(Input --> Output):
# "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"


# other ppl solutions
def reverseWords(str):
    return " ".join(str.split(" ")[::-1])

def reverseWords(str):
    return ' '.join(reversed(str.split(' ')))



#tags: string, reverse,