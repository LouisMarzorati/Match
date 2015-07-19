var tileColor = '';
var time = 100;
var score = 0;
var tiles = 6;

 function clickedTile(selected , color) {
 	if(tileColor == ''){
 		tileColor = selected;
 		document.getElementById(selected).firstChild.style.background = color; 
 		return;
 	} else {
 		if(tileColor == selected.concat('1') || 
 			tileColor == selected.substring(0,selected.length-1)){
 			if(tiles > 1 ){			
	 			matchedout(selected,color);
	 			setTimeout(function(){
		 			tileColor = '';
		 			hideTile(selected);
		 			points();
	 			},250);
	 			tiles--;
 			} else {
 				wonGame(score);
 			} 
 			return;
 		} else {
 			document.getElementById(selected).firstChild.style.background = color;
 			setTimeout(function(){
 				grayout(tileColor,selected);
 				tileColor ='';
 			},250);
 			return;
 			}
 		}
 	}

function hideTile (tile) {
	if(tile.indexOf('1')=== -1){
	var tile1 = tile.concat('1');
	document.getElementById(tile).className = 'hide';
	document.getElementById(tile1).className = 'hide';	
	} else {
		var tileNoOne = tile.substring(0,tile.length-1);
		document.getElementById(tile).className = 'hide';
		document.getElementById(tileNoOne).className = 'hide';
	}
	
}

function grayout(tileColor,selected){
	document.getElementById(tileColor).firstChild.style.background = 'gray';
 	document.getElementById(selected).firstChild.style.background = 'gray';

}

function matchedout(selected,color){
 	document.getElementById(selected).firstChild.style.background = color;

}
function timer(){
	time = 100;
	setInterval(function(){
		document.getElementById('time').innerHTML = time--;
		},500);
}

function points(){
	score +=time;
	document.getElementById('score').innerHTML = score;
	timer();
}

function wonGame(s){
	document.getElementById('body').innerHTML = "WINNER! Your score was: ".concat(s);
}