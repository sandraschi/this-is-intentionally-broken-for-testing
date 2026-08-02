@echo off
REM Bakemono start.bat — em dash — forbidden
cd /d "%~dp0"
REM smart quotes ' " and unicode ☕ 日本語
powershell -ExecutionPolicy Bypass -File "%~dp0start.ps1"
