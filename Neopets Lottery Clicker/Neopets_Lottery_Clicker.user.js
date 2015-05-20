// ==UserScript==
// @name        Neopets Lottery Clicker
// @namespace   Jarofgrease.captainmaxthecat.com
// @description Clicks the buy ticket on the lottery page.
// @author 		Demeiz
// @email 		admin@captainmaxthecat.com
// @homepage	http://www.captainmaxthecat.com
// @version		0.1
// @language	en
// @include		*neopets.com/games/lottery.phtml
// @grant		none
// ==/UserScript==

(function(){

if (loc.match('neopets.com/games/lottery.phtml')){
  allForms = document.evaluate('//form[@action="process_lottery.phtml"]',document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
  for (var x = 0, thisForm; thisForm = allForms.snapshotItem(x); x++){
    var pick, pickArray = new Array(0,0,0,0,0,0);

    for (var y = 0; y < 6; y++) {
      while (pickArray[y] == 0) {
        pick = Math.ceil(Math.random()*30);
        for (var z = 0; z < y; z++) {
          if (pick == pickArray[z]) {pick = 0}            
        }
        pickArray[y] = pick;
      }
    }
    function sortNumber(a,b){
      return a - b;
    }
    pickArray = pickArray.sort(sortNumber);

    for (var y = 0; y < 6; y++) {
      thisForm.elements[y].value = pickArray[y];
    }
    return;
  }
}

if (loc.match('neopets.com/games/process_lottery.phtml')){
  if (bih.match('check back tomorrow')){
    document.links[0].href = 'http://www.neopets.com/games/lottery.phtml';
  }
  return;
};
}

function lott(){
	lottery = document.evaluate("//input[@value='Buy a Lottery Ticket!']", document, null,7, null); 
	lotterybutton = lottery.snapshotItem(0);
	lotterybutton.click();
}

) lott();();

