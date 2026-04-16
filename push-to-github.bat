@echo off
echo ================================================
echo  DWCE Help Centre — Push to GitHub
echo ================================================
echo.

cd /d "C:\Users\robie\dwce-help"

echo Initialising git repository...
git init

echo.
echo Adding all files...
git add .

echo.
echo Creating initial commit...
git commit -m "Initial site build — Phase 1 Worker help content"

echo.
echo Setting branch to main...
git branch -M main

echo.
echo Adding GitHub remote...
git remote add origin https://github.com/robert-ovington/dwce-help.git

echo.
echo Pushing to GitHub...
git push -u origin main

echo.
echo ================================================
echo  Done! Your site will be live in ~2 minutes at:
echo  https://robert-ovington.github.io/dwce-help/
echo ================================================
echo.
pause
