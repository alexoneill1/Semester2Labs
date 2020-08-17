This week's first task is super simple, and shouldn't take long at all.

This repo contains two (main) branches, "master" and "feature".

Consider "master" to be the main project branch, and "feature" to be
a development branch on which some new feature has been implemented.

The two branches have diverged.

Your task is to:

1. rebase the feature branch onto the master branch, and then
2. merge it into master

(such that the merge happens using the fast-forward method).

In particular, no merge record should be created on the git log.

To get an idea of what *not* to do, take a look at the branch
origin/merged.  In particular, in that branch the "feature" branch has
merged into the master branch using a 3-way merge.  Using a tool like
tig or gtk, you should be able to see how the branches diverged and then
were merged.

Your goal is rather to rebase "feature" onto "master" and then merge them,
such that master has a clean, linear history.

----

To see what we don't want, view the history in the file
  - res/merged-history.png
  - also here:
    https://gitlab.computing.dcu.ie/sblott/2020-ca282-week-10/blob/master/res/merged-history.png

And what we do want is in the file
  - res/rebased-history.png
  - also here:
    https://gitlab.computing.dcu.ie/sblott/2020-ca282-week-10/blob/master/res/rebased-history.png

----

It might help to understand what the various files are:

master::
  This is basically the starting point for last week's lab task.  It is
  a node/express server implementing an API for random numbers.

  This works:

    - make run-test-random

feature::
  This is the same thing, but with the API calls for the RPN calculator
  added, and with those for the random API removed.

  This works:

    - make run-test-rpn

There is an artificial conflict in a comment added in both branches in the
file "index.js".  You will have to resolve this.  To do this, delete both
versions of the comment.

When you're done:

  - make run-test-rpn

should work in master, and the commit history should be linear.  It's as if
all of the commits in the "feature" branch are simply appended to the "master"
branch.
