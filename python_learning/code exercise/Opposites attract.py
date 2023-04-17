'''
Timmy & Sarah think they are in love, but around where they live, they will only
know once they pick a flower each. If one of the flowers has an even number of
petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return
true if they are in love and false if they aren't.

Sample test:

import codewars_test as test
from solution import lovefunc

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(lovefunc(1,4), True)
        test.assert_equals(lovefunc(2,2), False)
        test.assert_equals(lovefunc(0,1), True)
        test.assert_equals(lovefunc(0,0), False)
'''

def lovefunc( flower1, flower2 ):
    total = flower1 + flower2
    if total % 2 == 0:
        return False
    else:
        return True


def lovefunc( flower1, flower2 ):
    return (flower1+flower2)%2


def lovefunc(flower1, flower2):
    return flower1 % 2 != flower2 % 2


def lovefunc( flower1, flower2 ):
    return (flower1 + flower2) % 2 == 1


def lovefunc(a, b):
    if a % 2 == 0 and b % 2 == 0:
        return False
    elif a % 2 != 0 and b % 2 == 0:
        return True
    elif a % 2 == 0 and b % 2 != 0:
        return True
    else:
        return False


def lovefunc(f1, f2):
    return True if (f1 % 2 == 0 and f2 % 2 != 0) or (f2 % 2 == 0 and f1 % 2 != 0) else False


#lambda functions:
lovefunc = lambda a, b: a % 2 ^ b % 2

lovefunc = lambda x, y: x % 2 != y % 2

lovefunc = lambda f, s: (f + s) % 2

lovefunc = lambda f1, f2: (f1 % 2 == 0) ^ (f2 % 2 == 0)


#tags: lambda function,