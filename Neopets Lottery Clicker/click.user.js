// ==UserScript==
// @name        Click a Button
// @namespace   https://userscripts-mirror.org/users/24077
// @description Grab a button value and click it on script load.
// @author	Demeiz
// @include     *neopets.com/games/lottery.phtml
// @version     1.0
// @grant       none
// ==/UserScript==

(function() {
	/*
	Grab any (button) that matches value
	Specify 'text' as the button value below, check code for value='' as button text can be different
Be sure to include the page with the button in include
	*/
	var button = document.evaluate("//input[@value='Buy a Lottery Ticket!']", document, null,7, null); // Find button
	var buttonclick = button.snapshotItem(0); // Grab button
	buttonclick.click(); // Simulate a mouse click on button
})();
