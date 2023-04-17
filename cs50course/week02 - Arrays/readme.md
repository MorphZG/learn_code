# Week 2: Arrays

[Link to official page](https://cs50.harvard.edu/x/2022/weeks/2/)

## Lecture 02

- Functions
- Variables and scope
- Debugging ("step through")
- Debugging ("step into")
- Arrays
- Command line arguments

## Lab 2: Scrabble

Determine which of two Scrabble words is worth more.

## Problem set 2

[Link to official page](https://cs50.harvard.edu/x/2022/psets/2/)

- Readability
- Caesar (less)
- Substitution (more)

## Read more about

- The Coleman-Liau index. Readability test that outputs the (U.S.) grade level that is needed for a child to understand some text. The formula is:

```text
 index = 0.0588 * L - 0.296 * S - 15.8

 L - average number of letters per 100 words
 S - average number of sentences per 100 words
 ```

- Encryption, caesar cipher. Supposedly, Caesar used to “encrypt” confidential messages by shifting each letter therein by some number of places. For instance, he might write A as B, B as C, C as D, …, and, wrapping around alphabetically, Z as A. And so, to say HELLO to someone, Caesar might write IFMMP instead. Upon receiving such messages from Caesar, recipients would have to “decrypt” them by shifting letters in the opposite direction by the same number of places. The secrecy of this “cryptosystem” relied on only Caesar and the recipients knowing a secret, the number of places by which Caesar had shifted his letters. Not particularly secure by modern standards, but, hey, if you’re perhaps the first in the world to do it, pretty secure! Unencrypted text is generally called plaintext. Encrypted text is generally called ciphertext. And the secret used is called a key.

- Encryption, substitution cipher.

