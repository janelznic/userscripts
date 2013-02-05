// ==UserScript==
// @name			Disable rightclick
// @description		Disable rightclick at all web pages
// @include			http://*
// @include			https://*
// ==/UserScript==

/**
  * Vloží odkaz pro vysílání videa v novém panelu namísto iframu
 * 
 * AUTHOR Jan Elznic
 * WEBSITE http://www.janelznic.cz
 * COPYRIGHT Upravujte a šiřte dál jak se Vám zachce :-).
 * VERSION 1.0
 * DATE 05-02-2013 14:27
 */

window.onload = function() {
	document.body.setAttribute("oncontextmenu", "return false;");
}
