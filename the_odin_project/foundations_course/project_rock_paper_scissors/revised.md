# Assignment

## Warm up

1. Let’s practice a little bit of branching first. This [interactive Git branching visualizer](https://learngitbranching.js.org/) by Peter Cottle is brilliant. Complete only levels 1-3 of the “Introduction Sequence”.

## Adding a UI to Rock Paper Scissors

1. Set up a new branch on your previous Rock Paper Scissors repo
    1. Since we’ll be making a UI for our Rock Paper Scissors game, make a new branch and change to it with the command `git checkout -b rps-ui`.
    2. You are now working in the `rps-ui` branch, locally. However, this branch does not exist in your remote repo yet. If you go to your github repo page, you’ll see that you only have 1 branch, which would be `main`. Let’s push this new branch to your remote repo with the command `git push origin rps-ui`. Now, you’ll see two branches in your GitHub repository!
    3. Make sure you are on the `rps-ui` branch. You can check this, with the `git branch` command. The branch you are currently on will have an (\*)asterisk next to it. If you’re in another branch for some reason, change to `rps-ui` with the command `git checkout rps-ui`. Now you’re all set to work on your new feature! Note: You can add files, commit to this branch, and push changes to your repo, just like you would with the main branch. Everything is the same except when you push the changes, you’d use `git push origin rps-ui` instead of `git push origin main`, since we’re pushing to our new branch.
2. In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.
    1. For now, remove the logic that plays exactly five rounds.
    2. Create three buttons, one for each selection. Add an event listener to the buttons that call your `playRound` function with the correct `playerSelection` every time a button is clicked. (you can keep the `console.log`s for this step)
    3. Add a `div` for displaying results and change all of your `console.log`s into DOM methods.
    4. Display the running score, and announce a winner of the game once one player reaches 5 points.
    5. You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.
3. Once you’re all done with your UI and made sure everything’s satisfactory, ensure all of your changes are committed to the `rps-ui` branch with `git status` before continuing.
4. Now let’s take a look at how we can merge the changes from our `rps-ui` branch back to our `main` branch.
    1. Checkout the branch we want to merge INTO i.e. `main` with the command `git checkout main`.
    2. Now let’s merge our `rps-ui` branch into `main`, our current branch, with `git merge rps-ui`.
    3. If everything goes fine, our `rps-ui` branch is now successfully merged with main! Use `git log` and you’ll see all the commits you’ve made to your feature branch on top of the commits you made to the main branch. Now for our final step!
    4. Let’s push our `main` branch into our remote repo by running `git push origin main` . Go to your GitHub repo and you’ll see that our `main` branch will have all the changes and commits you made to the `rps-ui` branch. Congratulations! You’ve successfully pushed your first feature into your production branch!
    5. Now that we have all our code in the main branch, we don’t really need our `rps-ui` branch anymore. Let’s do some cleanup, both locally and in the remote repo. Delete the branch from our local repo with `git branch -d rps-ui` and also delete it from the remote repo on GitHub with `git push origin --delete rps-ui`. Congrats, we’re all done with our cleanup!
5. Make sure to publish the project on GitHub Pages and add a live preview link in the [project lesson](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors).
