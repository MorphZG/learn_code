// =============== problem ================
// promt the user for a credit card number
// use luhn's algorithm to check validity of number, calculate the checksum
// check for card lenght and starting digits
// report the result
    // read definitions of number format for each card provider
    // last line of program:
    // `AMEX\n` `MASTERCARD\n` `VISA\n` `INVALID\n`

// Luhn's algorithm, checksum
    // multiply every other digit by 2
    // start with the second-to-last digit
    // add those products' digits together
    // add the sum to the sum of the digits that weren't multiplied by 2
    // if the total modulo 10 is congruent to 0 the number is valid
// ---------------- end --------------------

#include <cs50.h>
#include <stdio.h>

// declaration
bool calculate_checksum(long);
long card_number;
bool checksum;

int main(void)
{
    // promt the user for a credit card number
    card_number = get_long("What is your card number: ");

    // check validity of card number
    checksum = calculate_checksum(card_number);
    printf("%i \n", checksum);

}


// functions
bool calculate_checksum(long number)
{
// mutltiply every other digit, starting from second to last
// add up every digit

// variable declaration
    //last;
    //second_last;
    long current;
    //sum;  // +
    //difference;  // -
    //product;  // *
    //quotient;  // /
    //remainder;  // %
    while (number > 0)
    {
        number = number / 10;
        //for (initialize_statement; test_expresion; update_statement)
        for (current = number % 10; current > 0; current = current / 100)
        {
            // body
        }

    }
    return true;


// add the sum to the sum of the digits that weren't multiplied


// if the total modulo 10 is congruent to 0 return true


}

/* ------------- pseudocode ----------------
card_number = get_long('input number: ');
valid_checksum = calculate_checksum(card_number)
if valid_checksum:
    check_lenght(card_number)
    check_first_digit(card_number)
else:
    printf('INVALID\n')

    ------------------------------------------ */
// www.youtube.com/watch?v=VOC0MWLKfAM


