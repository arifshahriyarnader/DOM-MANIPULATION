var scores, roundScore, activePlayer;
init();





document.querySelector('.btn-roll').addEventListener('click', function(){
	//Random Number
	var dice=Math.floor(Math.random() * 6)+1;

	//Display The Result
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display='block';
	diceDOM.src='dice-' + dice + '.png';

	//Update the roundscore IF the rolled numberwas NOT a 1
	if(dice !== 1){
		roundScore += dice;
		document.querySelector('#current-' + activePlayer).textContent=roundScore;
	}
	else{
		nextPlayer();
		//document.querySelector('.player-1-panel').classList.add('active');
		//document.querySelector('.player-0-panel').classList.remove('active');
		
	}
});

document.querySelector('.btn-hold').addEventListener('click', function(){
	//Add current score to global score
	scores[activePlayer] += roundScore;

	//upate the ui
	document.querySelector('#score-' + activePlayer).textContent=scores[activePlayer];

	//click if player won the game
	if(scores[activePlayer] >= 100){
		document.querySelector('#name-' + activePlayer).textContent='Winner';
		document.querySelector('.dice').style.display='none';
	}
	//next player
	else{
		nextPlayer();
	}
	
});

function nextPlayer(){
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore=0;

		document.getElementById('current-0').textContent='0';
		document.getElementById('current-1').textContent='0';

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.dice').style.display='none';
}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
	scores=[0,0];
	roundScore=0;
	activePlayer=0;

	document.querySelector('.dice').style.display='none';
	document.getElementById('score-0').textContent='0';
	document.getElementById('score-1').textContent='0';
	document.getElementById('current-0').textContent='0';
	document.getElementById('current-1').textContent='0';

	document.getElementById('name-0').textContent='Player 1';
	document.getElementById('name-1').textContent='Player 2';
}