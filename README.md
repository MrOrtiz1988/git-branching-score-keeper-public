# Antares Score Keeper

This exercise is intended to help practice git branching. Start by **forking** this repository. Create a **new feature branch** for each of the tasks listed below. You will only be making changes to the **index.html**, **styles.css** and **client.js** files.

> NOTE: The instructors may jump in and make unexpected changes to your **master** branch so keep your eye out for merge conflicts.

## Task List

**COMPLETE THE TASKS IN ORDER**

The client finally got back to us with answers to our questions. We can now make edits required to complete the Score Keeper website.

### Base Mode

- [ ] **feature-team-names** - Team names have been assigned, they should read **Team Tomato** and **Team Plum**

   > NOTE: Did you remember to branch for this feature?

- [ ] **feature-page-title** - The title of the page should read **Battle of the Fruits**
- [ ] **feature-bg-colors** - The team divs (with classes `.team1` & `.team2`) should have background colors that match the team names
- [ ] **feature-count-scores** - Add click handlers so that when the score buttons are clicked, the counts increase & decrease
- [ ] **feature-footer** - Create a footer at the bottom of the page that reads 'Made by Tomatoes inc.'


### Hard Mode

- [ ] **feature-max-score** - When either team reaches a score of 21, alert to the user the 'Team NAME has won!'
- [ ] **feature-styling** - Add styling to make the page look better

### Pro Mode

- [ ] **feature-deploy** - Deploy your app to Heroku (no database for this one)

## Git Branching Cheatsheet

- `git branch BRANCH_NAME` - Create a branch with the name of **BRANCH_NAME**
- `git branch` - Display the branch you're currently on
- `git branch -a` - Show all available branches that have been created
- `git checkout BRANCH_NAME` - Switch to the branch with name **BRANCH_NAME**
- `git merge --no-ff BRANCH_NAME` - Merge **BRANCH_NAME** into the current branch (use `git branch` to determine the current branch)
- `git pull origin BRANCH_NAME` - Pull down changes from the remote
