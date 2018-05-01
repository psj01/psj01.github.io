/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore,activePlayer,prev;

scores = [0,0]; // scores for player 1 and 2
roundScore = 0; // round score. only need one.. 
activePlayer = 0;
prev = 0;

document.querySelector('.dice').style.display = 'none';
document.querySelector('#score-0').textContent = '0';
document.querySelector('#current-0').textContent = '0';
document.querySelector('#score-1').textContent = '0';
document.querySelector('#current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click',function(){
        
    var dice = Math.floor((Math.random()*6)+1);
    console.log(dice);
    if(dice == 6)
    {
        if(prev == 6)
            {
                document.querySelector('#current-'+activePlayer).textContent = '0';        
                switchActivePlayers();   
                return;                         
            }
    }
    if(dice!==1)
        {            
            document.querySelector('.dice').style.display = 'block';
            document.querySelector('.dice').src = 'dice-'+dice+'.png';
            roundScore += dice;
            prev = dice;            
            document.querySelector('#current-'+activePlayer).textContent = roundScore;            
        }
    else{
        document.querySelector('#current-'+activePlayer).textContent = '0';  
        switchActivePlayers();
    }

});

document.querySelector('.btn-hold').addEventListener('click',function(){
    
    
    var x = parseInt(document.querySelector('#score-'+activePlayer).textContent);
    
    document.querySelector('#score-'+activePlayer).textContent = x+roundScore;
    
    scores[activePlayer] = parseInt(document.querySelector('#score-'+activePlayer).textContent);
    
    document.querySelector('#current-'+activePlayer).textContent = '0';
    roundScore = 0;   
    
    // check if player won!
    if(scores[activePlayer] >= parseInt(document.querySelector('.winningScore').value))
        {
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');     
            document.querySelector('.btn-roll').style.display = 'none';           
            document.querySelector('.btn-hold').style.display = 'none';
            document.querySelector('.dice').style.display = 'none';         
            document.querySelector('#name-'+activePlayer).textContent = 'WINNER!';  
            return;
        }
    
    switchActivePlayers();
    
})


function switchActivePlayers()
{
    prev = 0;      
    roundScore = 0;
    document.querySelector('.dice').style.display = 'none';
    if(activePlayer == 0)
    {
        activePlayer =1;
        document.querySelector('.player-1-panel').className='player-1-panel active';             
        document.querySelector('.player-0-panel').className='player-0-panel';
    }else{
        activePlayer = 0;
        document.querySelector('.player-0-panel').className='player-0-panel active';             
        document.querySelector('.player-1-panel').className='player-1-panel';
    }
}

document.querySelector('.btn-new').addEventListener('click',function(){
    
    
    location.reload();    
    
    
})
