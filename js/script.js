//Wynik gry

var argMoveId 
const argPlayerMove 
const argComputerMove 
const computerMove 
const playerMove 
const playerInput

function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'nożyce';
  } else if (argMoveId == 3) {
    return 'papier'
  } 
}

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis!');
  } else {
    printMessage('Przegrywasz :(');
  } 
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
}
//Guziki



function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

  //Wynik gry


let playerMove = argButtonName;
console.log('ruch gracza to: ' + playerMove);
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
let computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);

}
buttonKamień = document.getElementById('button-rock');
buttonNożyce = document.getElementById('button-scissors');
buttonPapier = document.getElementById('button-paper');
buttonKamień.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonNożyce.addEventListener('click', function(){ buttonClicked('nożyce'); });
buttonPapier.addEventListener('click', function(){ buttonClicked('papier'); });
