---
layout: post
title: "Bash Aliases"
---

Alias is a command that enables a replacement of a word with another string. It's mainly used for abbreviating a system command, or for adding default arguments to a command which one regularly uses.

Under Ubuntu your bash alias is under your directory. To view your current collection of aliases all you need to do is load up a terminal. To do this just go to `Applications > Accessories > Termininal`

Once there, type the following:

```bash
cd ~
```

This changes the directory to the location of your folder. For me when that command is completed I see:

```bash
ali@ali-desktop:~$
```

Now enter the following:

```bash
vim .bashrc
```

This will open up your bash configuration file. There are many options already in there and much more you can add. For what we are trying to do, find this:

```bash
# Alias definitions.
# You may want to put all your additions into a separate file like
# ~/.bash_aliases, instead of adding them here directly.
# See /usr/share/doc/bash-doc/examples in the bash-doc package.

#if [ -f ~/.bash_aliases ]; then
#   . ~/.bash_aliases
#fi
```

As it states, just uncomment (by removing the `#`'s) if statement. After you do so, it should look something like so:

```bash
# Alias definitions.
# You may want to put all your additions into a separate file like
# ~/.bash_aliases, instead of adding them here directly.
# See /usr/share/doc/bash-doc/examples in the bash-doc package.

if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi
```

Save the file and close `vim`. Now back in the terminal type:

```bash
vim .bash_aliases
```

That will open up `vim` again but the file you will probably see will be blank. (However, some of you might not have a blank file, that's okay). Add the following to the file.

```bash
alias ls='ls —color=auto'
alias ll='ls -l'
alias la='ls -A'
alias l='ls -CF'
```

Remember, you can add any other command you might want. I have added a few more to mine.

```bash
alias restartpc='sudo shutdown -r 0 RESTARTING PC'
alias install='sudo aptitude install'
alias uninstall='sudo aptitude remove'
alias upgrade='sudo aptitude -y update && sudo aptitude -y upgrade && sudo aptitude -y dist-upgrade && sudo aptitude -y autoclean'
```

Close the file and reload the terminal. This will reload your bash profile and thus contain your aliases. To check your list of aliases, type `alias` in your terminal.

**Note:** Be careful with the `sudo` command.
