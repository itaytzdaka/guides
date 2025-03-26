//////////////////////////////////////////////////////////////     global     ////////////////////////////////////////////////////////////

# יש להזין פרטי משתמש בתור התחלה
git config --global user.name "itaytzdaka"
git config --global user.email itaytzdaka1@gmail.com

# פותח את ההגדרות של גיט לעריכה
git config --global –e


//////////////////////////////////////////////////////////////     start new project    ////////////////////////////////////////////////////////////

# יוצר תיקית גיט בפרויקט
git init

# commit-מכין את כל הקבצים להעלאה ל
git add .

# main -ל master -מ branch -משנה את הדיפולט
git branch -M [main]

# מגדיר את תיאור העדכון 
git commit -m "first commit"

# מגדיר את הגיט להעלאה
git remote add origin https://github.com/itaytzdaka/example.git

# git -מעלה שינויים ל
git push -u origin main

# git -מוריד שינויים אחרונים מ
git pull origin main

# git -מוריד פרויקט מ
git clone https://github.com/itaytzdaka/kitten.git


//////////////////////////////////////////////////////////////     status     ////////////////////////////////////////////////////////////


# בודק אלו קבצים נערכו ולא נשמרו
git status

# staging area בודק אלו קבצים נוספו ל
git ls-files

# מציג סטטוס של שינויים בקבצים
git status -s


//////////////////////////////////////////////////////////////     logs     ////////////////////////////////////////////////////////////

# Show old Branch History and commits, author and date
git log

# Show all Branches History and commits, graph view
git log --graph --oneline --all


//////////////////////////////////////////////////////////////     add     ////////////////////////////////////////////////////////////


# commit-מכין את כל הקבצים להעלאה ל
git add .

# commit-מכין קובץ ספציפי להעלאה ל
git add [fileName]


//////////////////////////////////////////////////////////     compare changes     ////////////////////////////////////////////////////////////

# visualize the differences between the working directory and the previous version of the repository
git diff


//////////////////////////////////////////////////////////////     staging     ////////////////////////////////////////////////////////////


# commit-מכין את כל הקבצים להעלאה ל
git add [fileName]
git add [directory]
git add . 



//////////////////////////////////////////////////////////////     commit     ////////////////////////////////////////////////////////////

# commit the changes
git commit -m "first commit"

# add all to staging area + commit
git commit -am "first commit"


//////////////////////////////////////////////////////////////     un-staging     ////////////////////////////////////////////////////////////


# unstage a file from staging area
git restore --staged [fileName]

# unstage all files added to the staging area
git reset

# unstage a file from the staging area
git reset [fileName]

# unstage a file from the staging area
git reset HEAD [fileName]




//////////////////////////////////////////////////////////////     restore files     ////////////////////////////////////////////////////////////

# revert changes in your working directory by restoring the file to the state of HEAD.
git restore [fileName]

# revert all tracked files in the current directory (and its subdirectories) back to the state they were in at HEAD (the latest commit by default). 
git restore .


//////////////////////////////////////////////////////////////     restore commit     ////////////////////////////////////////////////////////////



# keeping the working directory and the staging area.
git reset --soft [commit-id] / [HEAD~1]


# keeping the working directory but not the staging area.
git reset [commit-id] / [HEAD~1]


# discards all changes in both the staging area and working directory.
git reset --hard [commit-id]




//////////////////////////////////////////////////////////////     branch     ////////////////////////////////////////////////////////////

# פעיל branch ואומר איזה branchesמציג רשימה של 
git branch
git branch --list

# list branches from all remotes.
git branch -r

# show which remote branch local branch is tracking
git branch -vv

# creates a new branch 
git branch [new-branch-name]

# rename a branch
git branch -m [old-branch-name] [new-branch-name]

# חדש והופך אותו לפעיל branch יוצר
git switch -c [new-branch-name]
git checkout -b [new-branch-name]

# לפעיל branch  הופך
git switch [branch-name]
git checkout [branch-name]

# checkout one commit before HEAD
git checkout HEAD~1

# give a name to commit
git tag "[tag_name]"

# delete branch
git branch -d [branch-name]




//////////////////////////////////////////////////////////////     merge     ////////////////////////////////////////////////////////////


# הפעיל branch-לתוך branch ממזג
git merge [branch-name]

# Merge changes without creating a commit.
git merge --no-commit [branch-name]

# Merge only if it's a fast-forward, no merged commit created.
git merge --ff-only [branch-name]

# Forces a merge commit, even if Git could do a fast-forward merge.
git merge --no-ff branch-name

# cancel a merge process
git merge --abort




//////////////////////////////////////////////////////////////     merge - rebase     ////////////////////////////////////////////////////////////

git rebase [branch-name]

# continue rebase after fix a conflict in old commit
git rebase --continue

git rebase --abort


//////////////////////////////////////////////////////////////     tracking branch     ////////////////////////////////////////////////////////////

# configures the local branch to track a branch on the remote repository 
git branch -u [remote_repository]/[remote_branch] [local_branch]

  # For example:
  git branch -u origin/main main

# lists all local branches along with information on their upstream (tracking) branches. 
git branch -vv


//////////////////////////////////////////////////////////////     remote     ////////////////////////////////////////////////////////////

git remote

# lists all the remote repositories that your local Git repository is connected to, showing both the fetch and push URLs. 
git remote -v

git remote add [remote_name] [url]


//////////////////////////////////////////////////////////////     fetch (from remote repository)     ////////////////////////////////////////////////////////////

git fetch

git fetch [remote-name]

git fetch [remote-name] [local-branch]



//////////////////////////////////////////////////////////////     pull (from remote repository)    ////////////////////////////////////////////////////////////


git pull [remote_repository] [remote_branch]


//////////////////////////////////////////////////////////////     push (to remote repository)    ////////////////////////////////////////////////////////////

# example
git push origin main
