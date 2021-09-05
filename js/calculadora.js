//Declaracion para llamar a los botones numerales
var zerobtn = document.getElementById("calc-zero");
var onebtn = document.getElementById("calc-one");
var twobtn = document.getElementById("calc-two");
var threebtn = document.getElementById("calc-three");
var fourbtn = document.getElementById("calc-four");
var fivebtn = document.getElementById("calc-five");
var sixbtn = document.getElementById("calc-six");
var sevenbtn = document.getElementById("calc-seven");
var eightbtn = document.getElementById("calc-eight");
var ninebtn = document.getElementById("calc-nine");

//Obtener los botones de RESET, DEL y DOT
var decimalbtn = document.getElementById("calc-decimal");
var clearbtn = document.getElementById("calc-clear");
var backspacebtn = document.getElementById("calc-backspace");

//Llamar a la pantalla
var displayValElement = document.getElementById("calculadora__display");
var displayValElement1 = document.getElementById("calculadora__anterior");
//Valor de la pantalla
var displayVal = "0";

var pendingVal;
var evalStringArray = [];
//Llamar a los botones numerico
var calcNumBtns = document.getElementsByClassName("calc-btn-num");
//Llamar a los botones que tienen los operadores aritmetico
var calcOperatorBtns = document.getElementsByClassName("calc-btn-operator");

var updateDisplayVal = (clickObj) => {
  var btnText = clickObj.target.innerHTML;
  if (displayVal === "0") 
  displayVal = "";
  displayValElement1.innerHTML = "";
  displayVal += btnText;
  displayValElement.innerHTML = displayVal;
};

for (let i = 0; i < calcNumBtns.length; i++) {
  calcNumBtns[i].addEventListener("click", updateDisplayVal, false);
}

 var performOperation = (clickObj) =>{
             var operator = clickObj.target.innerHTML;

             switch (operator) {
                 case '+':
                     pendingVal = displayVal;
                     displayVal = "0";
                     displayValElement.innerHTML = displayVal;
                     displayValElement1.innerHTML = pendingVal + operator;
                     evalStringArray.push(pendingVal);
                     evalStringArray.push('+');       
                     break;

                case '-':
                     pendingVal = displayVal;
                     displayVal = '0';
                     displayValElement.innerHTML = displayVal;
                     displayValElement1.innerHTML = pendingVal + operator;
                     evalStringArray.push(pendingVal);
                     evalStringArray.push('-');
                     break;

                case 'x':
                     pendingVal = displayVal;
                     displayVal = '0';
                     displayValElement.innerHTML = displayVal;
                     displayValElement1.innerHTML = pendingVal + operator;
                     evalStringArray.push(pendingVal);
                     evalStringArray.push('*');
                     break;
                case '/':
                     pendingVal = displayVal;
                     displayVal = '0';
                     displayValElement.innerHTML = displayVal;
                     displayValElement1.innerHTML = pendingVal + operator;
                     evalStringArray.push(pendingVal);
                     evalStringArray.push('/');
                     break;
                case '=':
                     evalStringArray.push(displayVal);
                     var evaluation = eval(evalStringArray.join(' '));
                     displayVal = evaluation + '';
                     displayValElement.innerHTML = displayVal;
                     evalStringArray = [];                     
                     break;
                 default:
                     break;
             }
         }
 for (let i = 0; i < calcOperatorBtns.length; i++) {
            calcOperatorBtns[i].addEventListener('click', performOperation, false);
        }  

        clearbtn.onclick = () => {
             displayVal = '0';
             pendingVal = undefined;
             evalStringArray = [];
             displayValElement.innerHTML = displayVal;
             displayValElement1.innerHTML = ""
         }

         backspacebtn.onclick = () => {
             let lengthOfDisplayVal = displayVal.length
             displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);

             if(displayVal === '')
                displayVal = '0';
                displayValElement.innerHTML = displayVal;             
         }

         decimalbtn.onclick = () => {
             if(!displayVal.includes('.'))
             displayVal += '.';
             displayValElement.innerHTML =displayVal;
         }
