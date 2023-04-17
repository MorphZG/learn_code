#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // declare the variables
    int height, x, y, z;

    // prompt the user for input
    do
    {
    height = get_int("input number between 1 and 8: ");
    }
    // if height less than 1 or higher than 8
    while (height < 1 || height > 8);

    //printf("Stored: %d\n", height);

    // vertical increase
    for (y = 0; y < height; y++)
    {
        // for every point of height increase the horizontal lenght
        for (z = 0; z < height - y - 1; z++)
        {
            printf(" ");
        }
        for (x = 0; x <= y; x ++)
        {
            printf("#");
        }
        printf("\n");
    }

}