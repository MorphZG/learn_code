// link: https://cs50.harvard.edu/x/2022/psets/3/plurality/
#include <cs50.h>
#include <stdio.h>
#include <string.h>

// Max number of candidates
#define MAX 9

// Candidates have name and vote count
typedef struct     // custom datatype called candidate
{
    string name;   // string name; candidate.name
    int votes;     // and int votes; candidate.votes
}
candidate;

// Array of candidates
candidate candidates[MAX];

// Number of candidates
int candidate_count;

// Function prototypes
bool vote(string name);
void print_winner(void);

int main(int argc, string argv[])
{
    // Check for invalid usage
    if (argc < 2)  // argc also counts the name of the program
    {
        printf("Usage: plurality [candidate] [candidate] [...]\n");
        return 1;
    }

    // Populate array of candidates
    candidate_count = argc - 1;
    if (candidate_count > MAX)
    {
        printf("Maximum number of candidates is %i\n", MAX);
        return 2;
    }
    for (int i = 0; i < candidate_count; i++)
    {
        candidates[i].name = argv[i + 1];
        candidates[i].votes = 0;
    }

    int voter_count = get_int("Number of voters: ");

    // Loop over all voters
    for (int i = 0; i < voter_count; i++)
    {
        string name = get_string("Vote: ");

        // Check for invalid vote
        if (!vote(name))
        {
            printf("Invalid vote.\n");
        }
    }

    // Display winner of election
    print_winner();
}

// Update vote totals given a new vote
bool vote(string name)
{
    // loop over candidates array
    // if name match the candidates[i].name increase candidate[i].vote and return true
    // else return false
    for (int i = 0; i < candidate_count; i++)
    {
        if (strcmp(name, candidates[i].name) == 0)  // strcmp returns 0 if strings are equal
        {
            candidates[i].votes++;
            return true;
        }
    }
    return false;
}

// Print the winner (or winners) of the election
void print_winner(void)
{
    int winner_votes = candidates[0].votes;

    for (int i = 0; i < candidate_count; i++)
    {
        if (candidates[i].votes > winner_votes)
        {
            // current_winner will store highest number of votes
            // whoever have same number of votes will be printed later
            winner_votes = candidates[i].votes;
        }
    }

    for (int i = 0; i < candidate_count; i++)
    {
        if (candidates[i].votes == winner_votes)
        {
            printf("%s\n", candidates[i].name);
        }
    }
}
