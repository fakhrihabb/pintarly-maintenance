@echo off
echo Switching to Tailwind CSS v3...
cd /d "%~dp0"
call npm uninstall tailwindcss @tailwindcss/postcss
call npm install -D tailwindcss@^3 postcss autoprefixer
echo.
echo Done! Now restart your dev server.
pause
