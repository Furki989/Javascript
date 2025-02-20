let Score = JSON.parse(localStorage.getItem('Tabelle')) || {  
    wins: 0,
    lose: 0,
    Tie: 0
};     

updateScoreElement();








function playGame(playerChoose) {

const computerMove = pickComputermove();

let result = '';

if(playerChoose === 'Papier') {

    if(computerMove === 'Stein') {
        result = 'Sieg';

    } else if (computerMove === 'Schere') {
        result = 'Niederlage';

    } else if (computerMove === 'Papier') {
        result = 'Unentschieden';
    } 
    else{

        result='error';
    }
}

else if(playerChoose === 'Stein') {

    if(computerMove === 'Stein') {
    result = 'Unentschieden';

    } else if (computerMove === 'Schere') {
        result = 'Sieg';

    } else if (computerMove === 'Papier') {
        result = 'Niederlage';

    } else {
        result = 'error';
    }

} else if (playerChoose === 'Schere') {

    if(computerMove === 'Stein') {
    result = 'Niederlage';

    } else if (computerMove === 'Schere') {
        result = 'Unentschieden';

    } else if (computerMove === 'Papier') {
        result = 'Sieg';

    } else {
        result = 'error';
    }

} else{

    console.log(ERROR);
}

ScoreboardAdd(result);

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = 'Du hast ' + playerChoose + ' Der Computer hat ' +  computerMove + ' gewählt.';



//alert('Du hast ' + playerChoose + ' Der Computer hat ' +  computerMove + ' gewählt. Das Spiel ist als ' + result + ' gewertet. ' + '\n'+ '\n'+ 'Losses: ' + Score.lose  + ', Siege: ' + Score.win + ', Unentschieden: '+ Score.Tie);

}







function pickComputermove() {

    const randomNumber = Math.random();     

    let computerMove = '';                  

    if (randomNumber >= 0 && randomNumber < 1/3 ) {
    computerMove = 'Stein';

    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'Papier';

    } else {
     computerMove = 'Schere';    
    }

    return computerMove;         

}







function ScoreboardAdd(parameter1) {

    if(parameter1 === 'Sieg'){

        Score.win += 1;
    } else if (parameter1 === 'Niederlage'){

        Score.lose += 1;

    } else if(parameter1 === 'Unentschieden') {
        Score.Tie  += 1;
    }

    updateScoreElement();

    localStorage.setItem('Tabelle', JSON.stringify(Score));      // wird im localstorage unter dem namen als tabelle abgespeichert mit stringfy wird Score zu einem JSONString da local Stoarge nur Strings speichern kann
    
}







function setZero(){
    Score.win = 0;
    Score.lose = 0;
    Score.Tie = 0;

    localStorage.removeItem('Tabelle');       // löscht die Daten aus dem Storage die unter Tabelle gespeichert sind macht es zum wert null (falsy value is null undefiend '' etc. )
    updateScoreElement();

    document.querySelector('.js-result').innerHTML = '';

    document.querySelector('.js-moves').innerHTML = '';

    
    
}








function updateScoreElement(){

    document.querySelector('.js-score').innerHTML = 'Losses: ' + Score.lose  + ', Siege: ' + Score.win + ', Unentschieden: '+ Score.Tie;

}