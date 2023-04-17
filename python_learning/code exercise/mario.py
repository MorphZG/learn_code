"""
Toward the beginning of World 1-1 in Nintendo’s Super Mario Brothers, Mario
must hop over adjacent pyramids of blocks, per the below.

Let’s recreate those pyramids in C, albeit in text, using hashes (#)
for bricks, a la the below. Each hash is a bit taller than it is wide,
so the pyramids themselves will also be taller than they are wide.

   #  #
  ##  ##
 ###  ###
####  ####

The program we’ll write will be called mario. And let’s allow the user
to decide just how tall the pyramids should be by first prompting them
for a positive integer between, say, 1 and 8, inclusive.

Here’s how the program might work

$ ./mario
Height: 8
       #  #
      ##  ##
     ###  ###
    ####  ####
   #####  #####
  ######  ######
 #######  #######
########  ########

$ ./mario
Height: 2
 #  #
##  ##

If the user doesn’t, in fact, input a positive integer between 1 and 8, inclusive,
when prompted, the program should re-prompt the user until they cooperate.
Notice that width of the “gap” between adjacent pyramids is equal to the width
of two hashes, irrespective of the pyramids’ heights.
"""
# prompt user for height
# if height < 1 or > 8; ask again
# iterate from 1 through height
# on iteration i, print i hashes and than newline

height = 0
while height < 1 or height > 8:
    height = int(input('height: '))

for i in range(height+1):
    print(' ' * height, end='');
    print('#' * i, end='');
    print('  ', end='');
    print('#' * i);
    height -= 1

#tags: pattern,
