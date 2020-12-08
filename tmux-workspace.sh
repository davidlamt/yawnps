#!/bin/sh

session="yawnps"

# Check if the session exists, discarding output
# We can check $? for the exit status (zero for success, non-zero for failure)
tmux has-session -t $session 2>/dev/null

if [ $? != 0 ]; then
  # Create new detached session
  tmux new-session -d -n "git" -s $session -x $(tput cols) -y $(tput lines)
  tmux send-keys "git status" C-m

  # vim window
  tmux new-window -n "vim"
  tmux send-keys "vim" C-m
fi

# Attach to created session
tmux attach-session -t $session
