---
layout: post
title: "Setting terminal tab titles"
date: 2009-08-28
---

I've always hated the fact that I would have 5-10 tabs open in Terminal, and they would all say `bash`.

![1]

After doing some quick research, I stumbled on [decent solution] on setting window and tab names in the Leopard Terminal.

You can add the following code block to either your `.bash_profile` or `.bashrc`.

```bash
function set_window_and_tab_title
{
    local title="$1"
    if [[ -z "$title" ]]; then
        title="root"
    fi

    local tmpdir=~/Library/Caches/${FUNCNAME}_temp
    local cmdfile="$tmpdir/$title"

    # Set window title
    echo -n -e "\e]0;${title}\a"

    # Set tab title
    if [[ -n ${CURRENT_TAB_TITLE_PID:+1} ]]; then
        kill $CURRENT_TAB_TITLE_PID
    fi
    mkdir -p $tmpdir
    ln /bin/sleep "$cmdfile"
    "$cmdfile" 10 &
    CURRENT_TAB_TITLE_PID=$(jobs -x echo %+)
    disown %+
    kill -STOP $CURRENT_TAB_TITLE_PID
    command rm -f "$cmdfile"
}

PROMPT_COMMAND='set_window_and_tab_title "${PWD##*/}"'
```

![2]

Restart bash and everything should be working, hunky-dory. One problem you'll notice is that when you try to close a session, terminal will prompt you about running processes. This is a side-affect of forking the process. A quick fix is to set the `"Prompt before closing"` in `Preferences > Settings > Shell` to "Never".

[1]: http://tech.karbassi.com/images/posts/2009-08-28/screen1.png "Mac Terminal Example"
[decent solution]: http://pseudogreen.org/blog/set_tab_names_in_leopard_terminal.html
[2]: http://tech.karbassi.com/images/posts/2009-08-28/screen2.png "Shell settings"
