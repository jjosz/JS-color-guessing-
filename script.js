const game = document.getElementById('game');
game.style = 'width: 100px; height:100px;';
let randNumberRed = Math.floor(Math.random()*255);
let randNumberGreen = Math.floor(Math.random()*255);
let randNumberBlue = Math.floor(Math.random()*255);
console.log(randNumberRed + ', '+randNumberGreen + ', '+randNumberBlue);
game.style.backgroundColor = 'rgb('+randNumberRed+', '+randNumberGreen+', '+randNumberBlue+')';