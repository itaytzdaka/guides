//////////////////////////////////////////////////////////////     global     ////////////////////////////////////////////////////////////
# יש להזין פרטי משתמש בתור התחלה
git config --global user.name "itaytzdaka"
git config --global user.email itaytzdaka1@gmail.com

# פותח את ההגדרות של גיט לעריכה
git config --global –e


//////////////////////////////////////////////////////////////     start new project    ////////////////////////////////////////////////////////////

# יוצר תיקית גיט בפרויקט
git init

# בודק אלו קבצים נערכו ולא נשמרו
git status

# commit-מכין את כל הקבצים להעלאה ל
git add .

# commit-מכין קובץ ספציפי להעלאה ל
git add [fileName]

# staging area בודק אלו קבצים נוספו ל
git ls-files

# בודק סטטוס של שינויים בקבצים
git status -s

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


//////////////////////////////////////////////////////////////     logs     ////////////////////////////////////////////////////////////

# Show old Branch History and commits, author and date
git log

# Show all Branches History and commits, graph view
git log --graph --oneline --all



//////////////////////////////////////////////////////////////     compare changes     ////////////////////////////////////////////////////////////

# visualize the differences between the working directory and the previous version of the repository
git diff


//////////////////////////////////////////////////////////////     staging     ////////////////////////////////////////////////////////////


# commit-מכין את כל הקבצים להעלאה ל
git add [fileName]
git add [directory]
git add . 


//////////////////////////////////////////////////////////////     un-staging     ////////////////////////////////////////////////////////////


# unstage a file, keeps changes in the working directory but removes the file from the staging
git restore --staged [fileName]


# unstage a file. keeps changes in the working directory but removes the file from the staging
git reset HEAD [fileName]


# unstage all files added to the staging area
git reset


//////////////////////////////////////////////////////////////     restore files     ////////////////////////////////////////////////////////////


# revert all tracked files in the current directory (and its subdirectories) back to the state they were in at HEAD (the latest commit by default). 
git restore .

# revert changes in your working directory by restoring the file to the state of HEAD.
git restore [fileName]




//////////////////////////////////////////////////////////////     commit     ////////////////////////////////////////////////////////////

# commit the changes
git commit -m "first commit"

//////////////////////////////////////////////////////////////     restore commit     ////////////////////////////////////////////////////////////

# unCommit. 
# move the current branch pointer to a another commit.

# keeping the working directory and the staging area.
git reset --soft [commit-id]

# move back one commit while keeping the working directory and the staging area.
git reset --soft HEAD~1

# keeping the working directory but not the staging area.
git reset [commit-id]


# discards all changes in both the staging area and working directory.
git reset --hard [commit-id]




//////////////////////////////////////////////////////////////     branch     ////////////////////////////////////////////////////////////

# פעיל branch ואומר איזה branchesמציג רשימה של 
git branch
git branch --list

# list branches from all remotes.
git branch -r

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

# הפעיל branch-לתוך branch ממזג
git merge [branch-name]

# give a name to commit
git tag "[tag_name]"


//////////////////////////////////////////////////////////////     merge     ////////////////////////////////////////////////////////////


# הפעיל branch-לתוך branch ממזג
git merge [branch-name]

# Merge changes without creating a commit.
git merge --no-commit [branch-name]

# Merge only if it's a fast-forward, no merged commit created.
git merge --ff-only [branch-name]

git merge --abort




//////////////////////////////////////////////////////////////     rebase     ////////////////////////////////////////////////////////////

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
