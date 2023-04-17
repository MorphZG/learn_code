# prompt user for height
# if height < 1 or > 8; ask again
# iterate from 1 through height
# on iteration i, print i hashes and than newline


height = 0
while height < 1:
    try:
        height = int(input('height: '))
    except ValueError:
        print('input integer between 1 and 8')

for i in range(height+1):
    print(' ' * height, end='');
    print('#' * i, end='');
    print('  ', end='');
    print('#' * i);
    height -= 1

print()
