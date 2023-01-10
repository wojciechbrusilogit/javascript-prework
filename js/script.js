printMessage('Zagrałem ' + 'kamień' + '! Jeśli Twój ruch to papier, to wygrywasz!');

var computerMove;
computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

var computerMove;
computerMove = 'papier';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to nożyce, to wygrywasz!');

var computerMove;
computerMove = 'nożyce';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to kamień, to wygrywasz!');

var playerMove;
computerMove = 'papier';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to kamień, to wygrywasz!');

//ruch komputera

var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} else if (randomNumber == '2') {
    computerMove = 'nożyce';
} else if (randomNumber == '3') {
    computerMove = 'papier';
} else {
  computerMove = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove);

//ruch gracza

var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2')  [
    playerMove = 'nożyce';
] else if (playerInput == '3') {
    playerMove = 'papier';
} else {
  playerMove = 'kamień';
}
printMessage('Twój ruch: ' + playerMove);
