---
layout: post
title: "'Hello' spam clogging mailboxes"
date: 2010-09-24
---

A new influx of spam is making its way around the internet in the form of a very simple "Hello" email and an attachment. Mainly they consist the subject "Hello" and an attachment. The attachment is just an HTML file with some 'encrypted' code in there. The file itself doesn't contain any viruses.

I decrypted the code and it produced:

```html
<meta http-equiv="refresh" content="0;url=http://BADURL.HERE" />
<table width="100%" border="0"><tr bgcolor="#556688" align="center"><td><a href="http://www.pullsoft.com/htmlpower.htm"><font face="Arial, Helvetica, sans-serif" color="#FFFFFF" size="-1">This Web Page was protected by HTMLPower,  Click here to Register</font></a></td></tr></table>
```

Things that I found funny about this:

- Gmail engineers haven't been able to stop this. This could be because it's not widespread yet.
- Whoever created this spam wasn't smart enough to encrypt their own code. They used a tool provided by [Pullsoft]
- They used a `meta refresh` rather than a Javascript `window.location=http://BADURL.HERE;`. They are already assuming the target has Javascript turned on to decrypt their "code".

[Pullsoft]: http://www.pullsoft.com/htmlpower.htm
