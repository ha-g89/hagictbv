@"
`$action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-WindowStyle Hidden -ExecutionPolicy Bypass -File E:\repos\HagICTWeb\frontend\watch-tasks-hagict.ps1"
`$trigger = New-ScheduledTaskTrigger -AtStartup
Register-ScheduledTask -TaskName "HAG-ICT Watcher" -Action `$action -Trigger `$trigger -RunLevel Highest -Force
Start-ScheduledTask -TaskName "HAG-ICT Watcher"
"@ | Set-Content "E:\register-hagict.ps1"

powershell.exe -ExecutionPolicy Bypass -File "E:\register-hagict.ps1"