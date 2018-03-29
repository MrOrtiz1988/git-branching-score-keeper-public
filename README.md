# Git Branching Score Keeper

This exercise is intended to help practice git branching. Start by **forking** this repository. Create a **new feature branch** for each of the tasks listed below. You will only be making changes to the **index.html** and **styles.css** files. **Don't over think this assignment. These are all simple tasks. The goal is to practice branching.**

## Task List

The client finally got back to us with answers to our questions. We can now make edits required to complete the Score Keeper website.

> **NOTE: COMPLETE THE TASKS IN ORDER**

### Base Mode

- [ ] **feature-team-names** - Team names have been assigned, they should read **Team Tomato** and **Team Plum**

   > NOTE: Did you remember to branch for this feature?

- [ ] **feature-page-title** - The title of the page should read **Battle of the Fruits**
- [ ] **feature-bg-colors** - The team divs (with classes `.team1` & `.team2`) should have background colors that match the team names
- [ ] **feature-footer** - Create a footer at the bottom of the page that reads 'Made by Tomatoes inc.'


### Hard Mode

- [ ] **feature-styling** - Add styling to make the page look better

### Additional Resources

- More Git practice: [https://try.github.io/levels/1/challenges/1](https://try.github.io/levels/1/challenges/1)
- Pull requests: [https://help.github.com/articles/creating-a-pull-request/](https://help.github.com/articles/creating-a-pull-request/)


## Git Branching Cheatsheet

- `git branch BRANCH-NAME` - Create a branch with the name of **BRANCH-NAME**
- `git branch` - Display the branch you're currently on
- `git branch -a` - Show all available branches that have been created
- `git checkout BRANCH-NAME` - Switch to the branch with name **BRANCH-NAME**
- `git merge --no-ff BRANCH-NAME` - Merge **BRANCH-NAME** into the current branch (use `git branch` to determine the current branch)
- `git pull origin BRANCH-NAME` - Pull down changes from the remote

## Git Branching Workflow

Create a branch and switch to that branch. Before you branch, make sure you're on **master** by typing `git branch`.

```
git branch feature-NAME
git checkout feature-NAME
```

Make changes to your code to complete the task. After completing the task, commit your changes.

```
git add .
git commit -m "MESSAGE"
git push origin feature-NAME
```

When you're done with the feature, switch back to **master** and check for changes on the remote.

```
git checkout master
git pull
```

Merge the code from your feature branch into **master**. Push the changes if everything merged without issue.

```
git merge --no-ff feature-NAME
git push origin master
```

In the event of a merge conflict, look at any impacted files. Make the required changes and commit them.

```
git add .
git commit
git push origin master
```

Repeat.


## Git Branching Workflow with Github Pull Requests

### The first time (project setup)

On your github project repo. Click the `settings` tab and then click `colaborators` in the left-side menu. Add your team members.

After adding colaborators, click the `settings` tab and then click `branches` in the left-side menu. Click `Choose Branch` and select `master`. Select the following:

- [ ] Protect this branch
  - [ ] Require pull request reviews before merging
    - [ ] Dismiss stale pull request approvals when new commits are pushed
- [ ] Include administrators

### Every time

Switch to the master branch. Create a branch and switch to that branch.

```
git checkout master
git branch feature-NAME
git checkout feature-NAME
```

These three commands are the same as

```
git checkout -b feature-Name master
```

Git add, commit, and push as usual

```
git add .
git commit -m "MESSAGE"
git push
```

When you're done with the feature, it's time to create a Pull Request. On github, click the `New Pull Request` button. Make sure the `base` is `master` and `compare` is your feature branch.

Click `Create Pull Request` and add a `Reviewer` from your team.

If the reviewer approved the Pull Request, then you may marge the pull request into master.

To keep your code up to date on your computer, switch to master and pull down the changes.

```
git checkout master
git pull
```

Repeat.


