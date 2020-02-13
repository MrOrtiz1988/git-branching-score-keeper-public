# Git Branching Score Keeper

This exercise is intended to help practice git branching. Start by having one group member **fork** this repository. All group members will **clone** the forked repository. Create a **new feature branch** for each of the tasks listed below. You will only be making changes to the **index.html** and **styles.css** files. **Don't over think this assignment. The focus is not on the tasks. The goal is to practice branching.**

## Task List

The client finally got back to us with answers to our questions. We can now make edits required to complete the Score Keeper website.

> **NOTE: COMPLETE THE TASKS IN ORDER & MERGE EACH BRANCH BACK INTO MASTER**

### Base Mode

Alternate tasks between each programmer's computer so that the PRs come from different GitHub users.

- [ ] **feature-team-names** - Team names have been assigned, they should read **Team Tomato** and **Team Plum**
   - After adding and committing, merge this branch back to `master`
- [ ] **feature-page-title** - The title of the page should read **Battle of the Fruits**
   - After adding and committing, merge this branch back to `master`
- [ ] **feature-bg-colors** - The team divs (with classes `.team1` & `.team2`) should have background colors that match the team names
   - After adding and committing, merge this branch back to `master`
- [ ] **feature-footer** - Create a footer at the bottom of the page that reads 'Made by Tomatoes inc.'
   - After adding and committing, merge this branch back to `master`


### Stretch Goals

- [ ] **feature-styling** - Add styling to make the page look better
   - After adding and committing, merge this branch back to `master`

### Additional Resources

- More Git practice: [https://try.github.io/levels/1/challenges/1](https://try.github.io/levels/1/challenges/1)
- Pull requests: [https://help.github.com/articles/creating-a-pull-request/](https://help.github.com/articles/creating-a-pull-request/)


## Git Branching Cheatsheet

- `git branch BRANCH-NAME` - Create a branch with the name of **BRANCH-NAME**
- `git branch` - Display the branch you're currently on
- `git branch -a` - Show all available branches that have been created
- `git checkout BRANCH-NAME` - Switch to the branch with name **BRANCH-NAME**
- `git merge --no-ff BRANCH-NAME` - Merge **BRANCH-NAME** into the current branch (use `git branch` to determine the current branch)
   - If there are no conflicts, you may be thrown into `ViM`. Type `:wq` to accept the merge. Otherwise you may need to resolve the conflicts (check the section below)
- `git pull origin BRANCH-NAME` - Pull down changes from the remote

## Git Branching Workflow with Github Pull Requests

### The first time (project setup)

On your github project repo. Click the `settings` tab and then click `manage access` in the left-side menu, and then click on the green `Invite Teams or Members`. Add your team members.

After adding collaborators, click the `settings` tab and then click `branches` in the left-side menu. Click `Choose Branch` and select `master`. Select the following:

- [ ] Protect this branch
  - [ ] Require pull request reviews before merging
    - [ ] Dismiss stale pull request approvals when new commits are pushed
- [ ] Include administrators

```
git clone
```

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

When you're done with the feature, it's time to create a Pull Request. On github, click the `New Pull Request` button. Make sure the base is the repository for your group. Not Prime Academy. If you make a PR to Prime Academy's branch, we will reject it (that would give the answer to future cohorts). Make sure the `base` is `master` (YOUR master, and not Prime Academy's master) and `compare` is your feature branch.

Click `Create Pull Request` and add a `Reviewer` from your team.

If the reviewer approved the Pull Request, then you should merge the pull request into master.

### If there are conflicts

```
git checkout master
git pull
git checkout feature-NAME
git merge --no-ff master
```

Resolve the conflicts by making the files look how you want them to look. If there are no conflicts, you may be thrown into `ViM`. Type `:wq` to accept the merge.

```
git add .
git commit -m "resolve conflicts"
git push
```

Dismiss the previous reviews on GitHub. Ask for a re-review of your Pull Request

### After merge is complete

To keep your code up to date on your computer, switch to master and pull down the changes.

```
git checkout master
git pull
```

Repeat.


