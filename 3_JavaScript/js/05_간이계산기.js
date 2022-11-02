const num1 = document.getElementById("inputNum1"); //요소 추적 O, 값,속성 추적 X
const num2 = document.getElementById("inputNum2");
const result = document.getElementById("result");

function fnPlus() { Number(num1.value) + Number(num2.value); }
console.log(fnPlus());
function fnMinus(num1, num2) { return num1 - num2; }
function fnMultiply(num1, num2) { return num1 * num2; }
function fnDivide(num1, num2) { return num1 / num2; }
function fnPercent(num1, num2) { return (num1 / num2) * 100 + "%"; }

if (document.getElementById("1") != null) {
    result.innerText = fnPlus(num1, num2);
}
if (document.getElementById("2") != null) {
    result.innerText = fnMinus(num1, num2);
}
if (document.getElementById("3") != null) {
    result.innerText = fnMultiply(num1, num2);
}
if (document.getElementById("4") != null) {
    result.innerText = fnDivide(num1, num2);
}
if (document.getElementById("5") != null) {
    result.innerText = fnPercent(num1, num2);
}


//const n1=Number(num1.value); // 비어있음->0
//const n2=Number(num2.value);


function plus() { //호출 전까지 수행되지 않아 괜찮다 
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);

    console.log(n1 + n2);
    result.innerText = n1 + n2;
}

function minus() {
    result.innerText = Number(num1.value) - Number(num2.value);
}

function multiply() {
    result.innerText = Number(num1.value) * Number(num2.value);
}
function divide() {
    result.innerText = Number(num1.value) / Number(num2.value);
}
function mod() {
    result.innerText = Number(num1.value) % Number(num2.value);
}



