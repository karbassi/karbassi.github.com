/*	ColorBox v1.3.4c - a full featured, light-weight, customizable lightbox based on jQuery 1.3 */
(function(c){function r(b,d){d=d==="x"?l.width():l.height();return typeof b==="string"?Math.round(b.match(/%/)?d/100*parseInt(b,10):parseInt(b,10)):b}function $(b){b=c.isFunction(b)?b.call(i):b;return a.photo||b.match(/\.(gif|png|jpg|jpeg|bmp)(?:\?([^#]*))?(?:#(\.*))?$/i)}function W(){for(var b in a)if(c.isFunction(a[b])&&b.substring(0,2)!=="on")a[b]=a[b].call(i)}function X(b){i=b;a=c(i).data(q);W();var d=a.rel||i.rel;if(d&&d!=="nofollow"){h=c(".cboxElement").filter(function(){return(c(this).data(q).rel|| this.rel)===d});j=h.index(i);if(j<0){h=h.add(i);j=h.length-1}}else{h=c(i);j=0}if(!C){D=C=m;N=i;N.blur();c().bind("keydown.cbox_close",function(e){if(e.keyCode===27){e.preventDefault();f.close()}}).bind("keydown.cbox_arrows",function(e){if(h.length>1)if(e.keyCode===37){e.preventDefault();E.click()}else if(e.keyCode===39){e.preventDefault();F.click()}});a.overlayClose&&s.css({cursor:"pointer"}).one("click",f.close);c.event.trigger(aa);a.onOpen&&a.onOpen.call(i);H.html(a.close);s.css({opacity:a.opacity}).show(); a.w=r(a.initialWidth,"x");a.h=r(a.initialHeight,"y");f.position(0);O&&l.bind("resize.cboxie6 scroll.cboxie6",function(){s.css({width:l.width(),height:l.height(),top:l.scrollTop(),left:l.scrollLeft()})}).trigger("scroll.cboxie6")}f.slideshow();f.load()}var q="colorbox",x="hover",m=true,f,y=!c.support.opacity,O=y&&!window.XMLHttpRequest,aa="cbox_open",I="cbox_load",P="cbox_complete",Q="resize.cbox_resize",s,k,t,o,R,S,T,U,h,l,n,J,K,L,Y,V,u,F,E,H,z,A,v,w,i,N,j,a,C,D,Z={transition:"elastic",speed:350, width:false,height:false,innerWidth:false,innerHeight:false,initialWidth:"400",initialHeight:"400",maxWidth:false,maxHeight:false,scalePhotos:m,scrolling:m,inline:false,html:false,iframe:false,photo:false,href:false,title:false,rel:false,opacity:0.9,preloading:m,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",open:false,overlayClose:m,slideshow:false,slideshowAuto:m,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:false, onLoad:false,onComplete:false,onCleanup:false,onClosed:false};f=c.fn.colorbox=function(b,d){var e=this;if(!e.length)if(e.selector===""){e=c(e);b.open=m}else return this;e.each(function(){var g=c.extend({},c(this).data(q)?c(this).data(q):Z,b);c(this).data(q,g).addClass("cboxElement");if(d)c(this).data(q).onComplete=d});b&&b.open&&X(e);return this};f.init=function(){function b(d){return c('<div id="cbox'+d+'"/>')}l=c(window);k=c('<div id="colorbox"/>');s=b("Overlay").hide();t=b("Wrapper");o=b("Content").append(n= b("LoadedContent").css({width:0,height:0}),K=b("LoadingOverlay"),L=b("LoadingGraphic"),Y=b("Title"),V=b("Current"),u=b("Slideshow"),F=b("Next"),E=b("Previous"),H=b("Close"));t.append(c("<div/>").append(b("TopLeft"),R=b("TopCenter"),b("TopRight")),c("<div/>").append(S=b("MiddleLeft"),o,T=b("MiddleRight")),c("<div/>").append(b("BottomLeft"),U=b("BottomCenter"),b("BottomRight"))).children().children().css({"float":"left"});J=c("<div style='position:absolute; top:0; left:0; width:0; height:0; overflow:hidden;'/>"); c("body").prepend(s,k.append(t),J);if(y){k.addClass("cboxIE");O&&s.css("position","absolute")}o.children().addClass(x).mouseover(function(){c(this).addClass(x)}).mouseout(function(){c(this).removeClass(x)}).hide();z=R.height()+U.height()+o.outerHeight(m)-o.height();A=S.width()+T.width()+o.outerWidth(m)-o.width();v=n.outerHeight(m);w=n.outerWidth(m);k.css({"padding-bottom":z,"padding-right":A}).hide();F.click(f.next);E.click(f.prev);H.click(f.close);o.children().removeClass(x);c(".cboxElement").live("click", function(d){if(d.button!==0)return m;else{X(this);return false}})};f.position=function(b,d){function e(B){R[0].style.width=U[0].style.width=o[0].style.width=B.style.width;L[0].style.height=K[0].style.height=o[0].style.height=S[0].style.height=T[0].style.height=B.style.height}var g=l.height();g=Math.max(g-a.h-v-z,0)/2+l.scrollTop();var p=Math.max(document.documentElement.clientWidth-a.w-w-A,0)/2+l.scrollLeft();b=k.width()===a.w+w&&k.height()===a.h+v?0:b;t[0].style.width=t[0].style.height="9999px"; k.dequeue().animate({width:a.w+w,height:a.h+v,top:g,left:p},{duration:b,complete:function(){e(this);D=false;t[0].style.width=a.w+w+A+"px";t[0].style.height=a.h+v+z+"px";d&&d()},step:function(){e(this)}})};f.resize=function(b){function d(){a.w=a.w||n.width();a.w=a.mw&&a.mw<a.w?a.mw:a.w;return a.w}function e(){a.h=a.h||n.height();a.h=a.mh&&a.mh<a.h?a.mh:a.h;return a.h}function g(G){f.position(G,function(){if(C){if(y){B&&n.fadeIn(100);k[0].style.removeAttribute("filter")}o.children().show();if(a.iframe)n.append("<iframe id='cboxIframe'"+ (a.scrolling?" ":"scrolling='no'")+" name='iframe_"+(new Date).getTime()+"' frameborder=0 src='"+(a.href||i.href)+"' "+(y?"allowtransparency='true'":"")+" />");K.hide();L.hide();u.hide();if(h.length>1){V.html(a.current.replace(/\{current\}/,j+1).replace(/\{total\}/,h.length));F.html(a.next);E.html(a.previous);a.slideshow&&u.show()}else{V.hide();F.hide();E.hide()}Y.html(a.title||i.title);c.event.trigger(P);a.onComplete&&a.onComplete.call(i);a.transition==="fade"&&k.fadeTo(M,1,function(){y&&k[0].style.removeAttribute("filter")}); l.bind(Q,function(){f.position(0)})}})}if(C){var p,B,M=a.transition==="none"?0:a.speed;l.unbind(Q);if(b){n.remove();n=c('<div id="cboxLoadedContent"/>').html(b);n.hide().appendTo(J).css({width:d(),overflow:a.scrolling?"auto":"hidden"}).css({height:e()}).prependTo(o);c("#cboxPhoto").css({cssFloat:"none"});O&&c("select:not(#colorbox select)").filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one("cbox_cleanup",function(){this.style.visibility="inherit"});a.transition=== "fade"&&k.fadeTo(M,0,function(){g(0)})||g(M);if(a.preloading&&h.length>1){b=j>0?h[j-1]:h[h.length-1];p=j<h.length-1?h[j+1]:h[0];c(p).data(q);c(b).data(q)}}else setTimeout(function(){var G=n.wrapInner("<div style='overflow:auto'></div>").children();a.h=G.height();n.css({height:a.h});G.replaceWith(G.children());f.position(M)},1)}};f.load=function(){var b,d,e,g=f.resize;D=m;i=h[j];a=c(i).data(q);W();c.event.trigger(I);a.onLoad&&a.onLoad.call(i);a.h=a.height?r(a.height,"y")-v-z:a.innerHeight?r(a.innerHeight, "y"):false;a.w=a.width?r(a.width,"x")-w-A:a.innerWidth?r(a.innerWidth,"x"):false;a.mw=a.w;a.mh=a.h;if(a.maxWidth){a.mw=r(a.maxWidth,"x")-w-A;a.mw=a.w&&a.w<a.mw?a.w:a.mw}if(a.maxHeight){a.mh=r(a.maxHeight,"y")-v-z;a.mh=a.h&&a.h<a.mh?a.h:a.mh}b=a.href||c(i).attr("href");K.show();L.show();H.show();if(a.inline){c('<div id="cboxInlineTemp" />').hide().insertBefore(c(b)[0]).bind(I+" cbox_cleanup",function(){c(this).replaceWith(n.children())});g(c(b))}else if(a.iframe)g(" ");else if(a.html)g(a.html);else if($(b)){d= new Image;d.onload=function(){var p;d.onload=null;d.id="cboxPhoto";c(d).css({margin:"auto",border:"none",display:"block",cssFloat:"left"});if(a.scalePhotos){e=function(){d.height-=d.height*p;d.width-=d.width*p};if(a.mw&&d.width>a.mw){p=(d.width-a.mw)/d.width;e()}if(a.mh&&d.height>a.mh){p=(d.height-a.mh)/d.height;e()}}if(a.h)d.style.marginTop=Math.max(a.h-d.height,0)/2+"px";g(d);h.length>1&&c(d).css({cursor:"pointer"}).click(f.next);if(y)d.style.msInterpolationMode="bicubic"};d.src=b}else c("<div />").appendTo(J).load(b, function(p,B){B==="success"?g(this):g(c("<p>Request unsuccessful.</p>"))})};f.next=function(){if(!D){j=j<h.length-1?j+1:0;f.load()}};f.prev=function(){if(!D){j=j>0?j-1:h.length-1;f.load()}};f.slideshow=function(){function b(){u.text(a.slideshowStop).bind(P,function(){e=setTimeout(f.next,a.slideshowSpeed)}).bind(I,function(){clearTimeout(e)}).one("click",function(){d();c(this).removeClass(x)});k.removeClass(g+"off").addClass(g+"on")}var d,e,g="cboxSlideshow_";u.bind("cbox_closed",function(){u.unbind(); clearTimeout(e);k.removeClass(g+"off "+g+"on")});d=function(){clearTimeout(e);u.text(a.slideshowStart).unbind(P+" "+I).one("click",function(){b();e=setTimeout(f.next,a.slideshowSpeed);c(this).removeClass(x)});k.removeClass(g+"on").addClass(g+"off")};if(a.slideshow&&h.length>1)a.slideshowAuto?b():d()};f.close=function(){c.event.trigger("cbox_cleanup");a.onCleanup&&a.onCleanup.call(i);C=false;c().unbind("keydown.cbox_close keydown.cbox_arrows");l.unbind(Q+" resize.cboxie6 scroll.cboxie6");s.css({cursor:"auto"}).fadeOut("fast"); k.stop(m,false).fadeOut("fast",function(){n.remove();k.css({opacity:1});o.children().hide();try{N.focus()}catch(b){}c.event.trigger("cbox_closed");a.onClosed&&a.onClosed.call(i)})};f.element=function(){return c(i)};f.settings=Z;c(f.init)})(jQuery);