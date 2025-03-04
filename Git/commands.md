//////////////////////////////////////////////////////////////     global     ////////////////////////////////////////////////////////////
# יש להזין פרטי משתמש בתור התחלה
git config --global user.name "itaytzdaka"
git config --global user.email itaytzdaka1@gmail.com

# פותח את ההגדרות של גיט לעריכה
git config --global –e


//////////////////////////////////////////////////////////////     start     ////////////////////////////////////////////////////////////

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
git clone https:# github.com/itaytzdaka/kitten.git


//////////////////////////////////////////////////////////////     restore     ////////////////////////////////////////////////////////////


# Show Branch History and commits
git log --graph --oneline --all

# clean the staging area without deleting files.
git reset

# unCommit. keeping the changes and the files added to the staging area.
git reset --soft [commit-id]

# Moves the branch pointer to the specified commit and discards all changes in both the staging area and working directory.
git reset --hard [commit-id]

# moving changes back to unstaged status.
git restore --staged [fileName]

#
git restore .



//////////////////////////////////////////////////////////////     branch     ////////////////////////////////////////////////////////////

# פעיל branch ואומר איזה branchesמציג רשימה של 
git branch

# חדש והופך אותו לפעיל branch יוצר
git switch -c [new-branch-name]
git checkout -b [new-branch-name]

# לפעיל branch  הופך
git switch [main]
git checkout [main]

# הפעיל branch-לתוך branch ממזג
git merge [branchName]




