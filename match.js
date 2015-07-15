var turn = 0;
var lastTile = 'nope';

 function clickedTile(selected) {
 	//only evaluate when its the second click
 	//figure out a way for it to be calculated.
 		turn+=1;
	 	if(turn%2!=0){
	 		console.log("return");
	 		return;
		 	if(!compare(selected)){
		 		console.log("NOT A MATCH");
		 		turn=0;
		 	} else {
		 		console.log("MATCH");
		 		turn=0;
		 	}
 	}
}

function compare(tile){
console.log("compare");
	if(tile != lastTile){
		console.log("false");
		return false;
	} else {
		console.log("true");
		return true;
	}
}

function setLastClicked(clicked){
	lastTile = clicked;
}