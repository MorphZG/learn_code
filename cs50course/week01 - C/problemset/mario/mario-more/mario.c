#include <cs50.h>
#include <stdio.h>

// mario - hard
// print the pattern with '#'
int main(void)
{

    int height, x, y, z, k;
    // prompt the user to input height
    // height must be number between 1 and 8
    do
    {
        height = get_int("Input the number between 1 and 8: ");
    }
    while (height < 1 || height > 8);

    // outer loop prints vertical line
    // scales with height
    for (y = 0; y < height; y++)
    {
        // inner loop prints horizontal lines
        // for every point of height print one horizontal line
        for (z = 0; z < height - y - 1; z++)
        {
            printf(" ");
        }

        for (x = 0; x <= y; x++)
        {
            printf("#");
        }

        // space between two  objects
        printf("  ");

        // mirrored object
        for (k = 0;  k <= y; k++)
        {
            printf("#");
        }

        // new line
        printf("\n");

    }

}