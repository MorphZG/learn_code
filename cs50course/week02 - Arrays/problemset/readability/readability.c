#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <math.h>

int grade(int W, float L, float S);
int count_letters(string text);
int count_words(string text);
int count_sentences(string text);

int main(void)
{

    // prompt the user for a string
    string text = get_string("Text: ");

    // count letters in a sentence (ending with . ! ?)
    int letters = count_letters(text);

    // count words (separated with space) in a sentence
    int words = count_words(text);

    // count sentences (separated by punctation )
    int sentences = count_sentences(text);

    // average number of letters and sentences per 100 words
    float avg_letters = (float) letters / (float) words * 100;

    float avg_sentences = (float) sentences / (float) words * 100;

    // calculate grade
    int grade_index = grade(words, avg_letters, avg_sentences);

    // print output as "Grade X" where X is rounded to nearest integer, call round()
    // if number is 16 or higer than print "Grade 16+" or "Before Grade 1" if lower than 1
    if (grade_index < 1)
    {
        printf("Before Grade 1\n");
    }
    else if (grade_index > 16)
    {
        printf("Grade 16+\n");
    }
    else
    {
        printf("Grade %i\n", grade_index);
    }

}

// Function definitions

int grade(int W, float L, float S)
// W: word count, L: letter average, S: sentences average
{
    float index = 0.0588 * L - 0.296 * S - 15.8;

    return (int) round(index);
}

int count_letters(string text)
{
    int count = 0;
    int n = strlen(text);
    for (int i = 0; i < n; i++)
    {
        if (isalpha(text[i]))
        {
            count++;
        }
        else
        {
            continue;
        }
    }
    return count;
}

int count_words(string text)
{
    int count = 0;
    int n = strlen(text);
    for (int i = 0; i < n; i++)
    {
        if (isspace(text[i]))
        {
            count++;
        }
        else
        {
            continue;
        }
    }
    return count + 1;
}

int count_sentences(string text)
{
    int count = 0;
    int n = strlen(text);
    for (int i = 0; i < n; i++)
    {
        if (text[i] == '.' || text[i] == '!' || text[i] == '?')
        {
            count++;
        }
        else
        {
            continue;
        }
    }
    return count;
}
