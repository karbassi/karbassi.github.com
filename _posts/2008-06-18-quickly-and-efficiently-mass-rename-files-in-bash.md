---
layout: post
title: "Quickly, and efficiently, mass rename files in bash"
date: 2008-06-18
---

Quick tip for everyone who is using Mac OS X, Unix, or anything with bash. If you want to mass rename a bunch of files, there isn't a simple way of doing it. Either you would have to do it manually (`mv ryan.txt steve.txt`) or you could use this simple line of code.

```bash
ls "ryan.*" | awk '{print("mv "$1" "$1)}' | sed 's/ryan/steve/2' | /bin/sh
```

Let me explain it quickly. Let's say you have a whole folder of files named `"ryan.*"` (such as `ryan.txt`, `ryan.gif`, `ryan.php`, `ryan.asp`, etc.) and you want to rename them to `steve.*`.

The first part displays a list of files that match the wildcard of ryan.* then it is piped to the second part (`awk '{print("mv "$1" "$1)}'`). This part prints a list of commands such as `mv ryan.txt ryan.txt`.

Well, that's close but you want to move ryan.txt to steve.txt, not itself. This is where the third part comes in. What `sed` does in this situation is replace **any** instance of ryan with steve. The last part runs the whole thing as a list of shell commands.
