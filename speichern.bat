@echo off

powershell -Command "(Get-Content 'gesamt.html') | Set-Content 'gesamt.html'"
powershell -Command "(Get-Content 'stat.html') | Set-Content 'stat.html'"

powershell -Command "(Get-Content 'team1\spiel1.html') | Set-Content 'team1\spiel1.html'"
powershell -Command "(Get-Content 'team1\stat1.html') | Set-Content 'team1\stat1.html'"

powershell -Command "(Get-Content 'team2\spiel2.html') | Set-Content 'team2\spiel2.html'"
powershell -Command "(Get-Content 'team2\stat2.html') | Set-Content 'team2\stat2.html'"

echo Dateien gespeichert.
pause