@echo off
path=%path%;C:\Python27
%~d0
cd %~dp0
python %~dp0/makeMapText.py
pause