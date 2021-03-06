---
layout: post
title: "CheckUp - How to uninstall"
date: 2008-01-03
---

I love installing, previewing, reviewing, alpha-, beta-, gamma- testing applications. This includes applications that might not work, might cause problems for me later on, or just plain suck. I have run into many of these programs/applications before. The last problem I want to deal with is not being able to **fully** remove it.


The latest of these problems has been [CheckUp] by [app4mac]. As of this article, it's in Preview 2. The reason why it's called that is because many programmers are moving away from "beta" in the public eye being that **every** web 2.0 website out there uses that word. This is basically Beta version #2.

That being said, I will not talk about the application itself. I am will show you how to fully remove the application from Mac.

![Terminal | Remove Checkup]

First load up Terminal (in Finder go to `Utlities > Terminal.app`). In terminal type:

```bash
sudo rm /Library/LaunchDaemons/com.app4mac.CheckUpAgent.plist
```

It will ask for your root password and once you type it in, it will remove the Launch Daemon.

Next, remove the Application itself by physically removing it from your Application Folder and put it in your Trash.

[CheckUp]: http://www.app4mac.com/checkup.html
[app4mac]: http://www.app4mac.com/
[Terminal | Remove Checkup]: http://tech.karbassi.com/images/posts/2008-01-03/terminal.png
