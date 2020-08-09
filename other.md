### Security Conscious Driven Environments...
Very few developers know anything about security, yet they always seem to assume their app is the most secure thing on the planet...
Here are three basic command
1. Listen to all your ports
   - `lsof -nP +c 15 | grep LISTEN`
2. Find out the process ID (PID) which is occupying the port number (e.g., 5955) you would like to free
  - `sudo lsof -i :5955`
3. Kill the process which is currently using the port using its PID
  - `sudo kill -9 PID`
4. Nuke all non-essential programs on your machine (and your live stream)...
   - `kill -9 -1`