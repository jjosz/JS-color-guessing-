//getting div id='game' from index.html
const game = document.getElementById('game');

const textBox = document.createElement('div');
game.appendChild(textBox);
//creating new div inside game
const colorSquare = document.createElement('div');
colorSquare.id='colorSquare';
game.appendChild(colorSquare);
//colorSquare.style = '';
//creating inputs for red, green and blue
const inputRed = document.createElement('input');
const inputGreen = document.createElement('input');
const inputBlue = document.createElement('input');

//Creating button for sending chosen numbers
const buttonSend = document.createElement('button');
buttonSend.innerHTML = 'Check!';

//
let points = 0;
textBox.innerHTML = `You got ${points} points!`;
let result = 0;
let randNumberRed = 0;
let randNumberGreen = 0;
let randNumberBlue = 0;
//Adding created objects to game
game.appendChild(inputRed);
game.appendChild(inputGreen);
game.appendChild(inputBlue);
game.appendChild(buttonSend);


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

buttonSend.addEventListener('click',sendRGB);


//colorSquare.style = 'width: 100px; height:100px;';
//colorSquare.style = 'width: 100px; height:100px;';

generateNewColor();

function sendRGB(){
if(inputRed.value&&inputGreen.value&&inputBlue.value){
if(!(isNaN(inputRed.value))&&!(isNaN(inputGreen.value))&&(!isNaN(inputBlue.value))){
if(((inputRed.value>=0)&&(inputRed.value<=255))&&((inputGreen.value>=0)&&(inputGreen.value<=255))&&((inputBlue.value>=0)&&(inputBlue.value<=255))){
    result = ((1-(Math.abs(inputRed.value-randNumberRed)/255))*100+
    (1-(Math.abs(inputGreen.value-randNumberGreen)/255))*100+
    (1-(Math.abs(inputBlue.value-randNumberBlue)/255))*100)/3;
    console.log('Your are '+ result +'% correct.');
    console.log('Your RGB: (' +
        inputRed.value + ', ' +
        inputGreen.value + ', ' +
        inputBlue.value + ')' )
    console.log('-----');
    inputRed.value = '';
    inputGreen.value = '';
    inputBlue.value = '';
    generateNewColor();
    if(result==100){
    points=points+10;
    }
    else if(result>=90){
    points=points+7
    }
    else if(result>=70){
    points=points+5;
    }
    else if(result>=60){
    points=points+3;
    }
    else if(result>50){
    points=points+1;
    }
    if(points!=1)
    textBox.innerHTML = `You got ${points} points!`;
    else
    textBox.innerHTML = `You got ${points} point!`;
    }
else{
console.log("Number doesn't fit between 0 and 255!")
}
}
else console.log("Submitted values aren't numbers!");
}

else{
    textBox.innerHTML = "You need to type three numbers 0-255!"
}
}

function generateNewColor(){

    randNumberRed = Math.floor(Math.random()*255);
    randNumberGreen = Math.floor(Math.random()*255);
    randNumberBlue = Math.floor(Math.random()*255);

    console.log('Generated RGB: (' + randNumberRed + ', '+randNumberGreen + ', '+randNumberBlue+ ')');
    colorSquare.style.backgroundColor = 'rgb('+randNumberRed+', '+randNumberGreen+', '+randNumberBlue+')';
}

function generateFromText(a, b, c){
    if(((a>=0)&&(a<=255))&&((b>=0)&&(b<=255))&&((c>=0)&&(c<=255)))
    {
        randNumberRed = a;
        randNumberGreen = b;
        randNumberBlue = c;
        console.log('Generated RGB: (' + randNumberRed + ', '+ randNumberGreen + ', '+ randNumberBlue + ')');
        colorSquare.style.backgroundColor = 'rgb('+randNumberRed+', '+randNumberGreen+', '+randNumberBlue+')';
    }
}