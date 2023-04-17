#include <cs50.h>
#include <stdio.h>

def calculate_checksum(number):
    """calculate checksum of a credit card"""
    total = 0
    digits = []
    pass

card_number = int(input('what is your card number?: '))
calculate_checksum(card_number)


"""
// promt the user for a credit card number
// use luhn's algorithm to check validity of number, calculate the checksum
// report the result
    // check for card lenght and starting digits
    // read definitions of number format for each card provider
    // last line of program:
    // `AMEX\n` `MASTERCARD\n` `VISA\n` `INVALID\n`

// Luhn's algorithm, checksum
    // multiply every other digit by 2
    // start with the second-to-last digit
    // add those products' digits together
    // add the sum to the sum of the digits that weren't multiplied by 2
    // if the total modulo 10 is congruent to 0 the number is valid
"""