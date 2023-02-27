echo off

call npm install .
call npm install -g pkg
call npm install javascript-obfuscator
call node encryption.js
call npm uninstall javascript-obfuscator
pkg --targets node18-win-x64 --compress GZip --output build.exe .
call build