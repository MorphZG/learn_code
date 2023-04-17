// Implements a phone book with structs

#include <cs50.h>
#include <stdio.h>
#include <string.h>

// defining custom data type
typedef struct  // keywords that will define new data type
{
    string name;  // each instance of person need to have name and number attribute
    string number;
}
person;  // data type named person

int main(void)
{
    person people[2];

    people[0].name = "Carter";
    people[0].number = "+1-617-495-1000";

    people[1].name = "David";
    people[1].number = "+1-949-468-2750";

    // Search for David
    for (int i = 0; i < 2; i++)
    {
        if (strcmp(people[i].name, "David") == 0)
        {
            printf("Found %s\n", people[i].number);
            return 0;
        }
    }
    printf("Not found\n");
    return 1;
}

#