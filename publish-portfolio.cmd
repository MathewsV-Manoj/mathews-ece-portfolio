@echo off
setlocal
cd /d "%~dp0"

echo.
echo Publishing your portfolio to GitHub Pages...
git add -A
git diff --cached --quiet

if errorlevel 1 (
  git commit -m "Update portfolio"
  if errorlevel 1 goto :error
  git push origin main
  if errorlevel 1 goto :error
  echo.
  echo Done. GitHub Pages will update in a minute or two.
) else (
  echo.
  echo No changes found to publish.
)

echo.
pause
exit /b 0

:error
echo.
echo Publishing stopped. Check your internet connection and GitHub sign-in, then try again.
pause
exit /b 1
