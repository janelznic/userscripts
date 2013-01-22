// ==UserScript==
// @name			ČT24 Flash Fullscreen
// @description		Flash Player without iframe for ČT24 Live
// @include			http://www.ceskatelevize.cz/ct24/zive-vysilani/*
// @include			http://www.ceskatelevize.cz/ivysilani/embed/*
// ==/UserScript==

/**
 * CT24 Flash Player
 * Zvětší flash video embed object na velikost okna prohlížeče
 * 
 * AUTHOR Jan Elznic
 * WEBSITE http://www.janelznic.cz
 * COPYRIGHT Upravujte a šiřte dál jak se Vám zachce :-).
 * VERSION 1.0
 * DATE 22-01-2013 13:40
 */

window.onload = function() {
	if (location.pathname == "/ivysilani/embed/iFramePlayerCT24.php") {
		var player = document.getElementsByTagName("object")[0];
		player.width = window.innerWidth;
		player.height = window.innerHeight;
	} else {
		var holder = document.getElementById("iframeHolder");
		var url = holder.childNodes[0].src;
		var cont = holder.parentNode;

		var p = document.createElement("p");
		p.className = "content currentPrograms";
		cont.appendChild(p);

		var a = document.createElement("a");
		p.appendChild(a);
		a.href = url;
		a.innerHTML = "&raquo; Otevřít fullscreen mode";
	}
}
