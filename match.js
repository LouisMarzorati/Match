var tileColor = '';
var time = 100;
var score = 0;
var tiles = 6;
var interval = '';
var start = false;

//checks if the game has started or returns
 function clickedTile(selected , color)
 {
 	if(start){
 		selectionOrder(selected , color);
 	} else {
 		return;
 	}
 }
//checks to see what turn it is
 function selectionOrder(selected , color)
{	//first click
	if(tileColor == ''){
 		tileColor = selected;
 		document.getElementById(selected).firstChild.style.background = color; 
 		return;
	 	//second click
		} else {
			if(tileColor == selected.concat('1') || tileColor == selected.substring(0,selected.length-1)){
				tileRemoval(selected , color);
		}	else{
				tileCoverUp(selected , color);
		}
	}
}

//checks if its a win, removes tiles
function tileRemoval(selected , color)
{
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
}
//non-matching pieces cover up
function tileCoverUp(selected , color)
{
	document.getElementById(selected).firstChild.style.background = color;
	setTimeout(function(){
		grayout(tileColor,selected);
		tileColor ='';
		},250);
	return;
}

//hides matched tiles
function hideTile (tile)
{
	//check to see if tile has 1 in it
	if(tile.indexOf('1') === -1){
	var tile1 = tile.concat('1');
	document.getElementById(tile).className = 'hide';
	document.getElementById(tile1).className = 'hide';	
	} else {
		var tileNoOne = tile.substring(0,tile.length-1);
		document.getElementById(tile).className = 'hide';
		document.getElementById(tileNoOne).className = 'hide';
	}
	
}

//grays out tiles that aren't a match
function grayout(tileColor,selected)
{
	document.getElementById(tileColor).firstChild.style.background = 'gray';
 	document.getElementById(selected).firstChild.style.background = 'gray';
}

//temporarly sets the color of the second matched tile to display to user 
//that a match has been made 
function matchedout(selected,color)
{
 	document.getElementById(selected).firstChild.style.background = color;
}

//count down timer for score purposes.
function scoreTimer(s)
{
	time = 100;
	interval = setInterval(function(){
		document.getElementById('time').innerHTML = time--;
		},500);
}

//used to add points to the users score.
function points()
{
	score +=time;
	document.getElementById('score').innerHTML = score;
	//resets the timer, corrected error where timer kept getting faster
	clearInterval(interval);
	scoreTimer();
}

//stops the game and displays winning message + score
function wonGame(s)
{
	clearInterval(interval);
	document.getElementById('body').innerHTML = "WINNER! Your score was: ".concat(s);
	document.getElementById('body').style.fontSize = '100px';
	document.getElementById('body').style.borderLeftWidth = '500px';
}

//used to start the game
function hideButton()
{
	document.getElementById('startButton').className = 'hide';
	start = true;
}