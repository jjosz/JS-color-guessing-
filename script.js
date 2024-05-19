//getting div id='game' from index.html
const game = document.getElementById('game');
//creating new div inside game
const colorSquare = document.createElement('div');
game.appendChild(colorSquare);
colorSquare.style = 'width: 100px; height:100px;';
//creating inputs for red, green and blue
const inputRed = document.createElement('input');
const inputGreen = document.createElement('input');
const inputBlue = document.createElement('input');

game.appendChild(inputRed);
game.appendChild(document.createElement('br'));
game.appendChild(inputGreen);
game.appendChild(document.createElement('br'));
game.appendChild(inputBlue);

Object.assign(inputRed, {
    type: 'text',
    placeholder: 'Red'
});

Object.assign(inputGreen, {
    type: 'text',
    placeholder: 'Green'
});

Object.assign(inputBlue, {
    type: 'text',
    placeholder: 'Blue'
});


colorSquare.style = 'width: 100px; height:100px;';
colorSquare.style = 'width: 100px; height:100px;';

generateNewColor();

function generateNewColor(){

let randNumberRed = Math.floor(Math.random()*255);
let randNumberGreen = Math.floor(Math.random()*255);
let randNumberBlue = Math.floor(Math.random()*255);

console.log(randNumberRed + ', '+randNumberGreen + ', '+randNumberBlue);
colorSquare.style.backgroundColor = 'rgb('+randNumberRed+', '+randNumberGreen+', '+randNumberBlue+')';
}