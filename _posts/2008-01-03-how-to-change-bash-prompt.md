---
layout: post
title: "How to change bash prompt"
date: 2008-01-03
---

Some people have asked me how I changed my bash/terminal prompt from the default prompt to what I have. It's actually a very simple process.

![Change Terminal Prompt | Step 1]

First, load up Terminal and open up your `~/.bash_profile` file. (FYI, be sure to read the [difference between .bash_profile and .bashrc].)

![Change Terminal Prompt | Step 2]

Then type the following:

```bash
export PS1="\w>: "
export PS2=" > "
```

There are a lot of possible things you can enter. Here are some of them that work well:

| Command |                Description                |        Example        |
|:-------:|:-----------------------------------------:|:---------------------:|
| \a      | ASCII bell character                      | --                    |
| \d      | the current date                          | Sun Feb 08            |
| \H      | hostname                                  | Ginger.local          |
| \h      | shortened hostname                        | Ginger                |
| \u      | your username                             | dave                  |
| \w      | current working directory                 | /Applications/Network |
| \W      | basename of the current working directory | Network               |
| \T      | current time (12-hour HH:MM:SS format)    | 01:16:49              |
| \t      | current time (HH:MM:SS format)            | 13:16:49              |
| \@      | current time (12-hour AM/PM format)       | 1:16 PM               |
| \n      | new line                                  | --                    |
| \\      | print a backslash                         | \                     |

Table via [MacDevCenter.com].

[Change Terminal Prompt | Step 1]: http://tech.karbassi.com/images/posts/2008-01-03/terminal2.png
[difference between .bash_profile and .bashrc]: http://www.joshstaiger.org/archives/2005/07/bash_profile_vs.html
[Change Terminal Prompt | Step 2]: http://tech.karbassi.com/images/posts/2008-01-03/terminal3.png
[MacDevCenter.com]: http://www.macdevcenter.com/pub/a/mac/2004/02/24/bash.html?page=2
