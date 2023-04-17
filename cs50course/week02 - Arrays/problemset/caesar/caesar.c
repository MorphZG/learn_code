#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>

// function prototype
bool only_digits(string str);  // return true if digits in string str
char rotate(char plain, int shift_n);  // rotate alphabet char c by int n
int atoi(string str);  // converts string to integer

// type
int input_key;
string plaintext;
char ciphertext;

// argc is argument count, argv[] is array of arguments
int main(int argc, string argv[])
{
    // argument count, program name and single argument
    if (argc > 2 || argc < 2)
    {
        printf("Usage: ./caesar key\n");
        return 1;  // exit the program
    }
    // argv[0] is program name, argv[1] is first argument
    // Make sure every character in argv[1] is a digit
    else if (! only_digits(argv[1]))
    {
        printf("Usage: ./caesar key\n");
        return 1;
    }
    // Convert argv[1] from a `string` to an `int`
    input_key = atoi(argv[1]);
    // Prompt user for plaintext
    plaintext = get_string("input some text: ");

    // For each character in the plaintext:
    printf("ciphertext: ");
    int lenght = strlen(plaintext);
    for (int i = 0; i < lenght; i++)
    {
        // Rotate the character if it's a letter
        ciphertext = rotate(plaintext[i], input_key);
        printf("%c", ciphertext);
    }

    printf("\n");

}

// function definitions

char rotate(char plain, int key)
{
    // Key rotates the alphabet by N places, when it goes beyond Z it must wrap
    // back to A. If key is bigger than 26 you must implement the following formula
    // If using ASCII index numbers:
    // Ci = (Pi + K) % 26   ->  cipher[i] = (plain[i] + key) % 26

    char cipher = 'a';

    if (islower(plain))
    {
        plain = plain - 97; // subtract ASCII 'a' value 97, 'a' is now 0
        cipher = (plain + key) % 26;
        cipher = cipher + 97;  // add ASCII value back
    }
    else if (isupper(plain))
    {
        plain = plain - 65;  // subtract ASCII 'A' value 65, 'A' is now 0
        cipher = (plain + key) % 26;
        cipher = cipher + 65;  // add ASCII value back
    }

    else if (! isalpha(plain))
    {
        // character is not alphabetic (!, ?, 4...) so dont rotate the ASCII
        cipher = plain;
    }

    return cipher;
}


bool only_digits(string str)
{
    // count number of characters and check if isdigit() on each
    int len = strlen(str);
    for (int i = 0; i < len; i++)
    {
        if (! isdigit(str[i]))
        {
            return false;
        }
    }
    return true;
}


/*
- program accept single cli argument, non negative integer k.
- print warning to user if user enters more than one argument or no arguments,
in that case main should return value of 1 which signify an error.
- your program must output plaintext: (with two spaces but without a newline)
and then prompt the user for a string of plaintext (using get_string).
- your program must output ciphertext: (with one space but without a newline)
followed by the plaintext’s corresponding ciphertext, with each alphabetical
character in the plaintext “rotated” by k positions; non-alphabetical characters
should be outputted unchanged.
- preserve capital letters
- main should return 0 on succesful complete

*/