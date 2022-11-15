// 형변환 확인하기
//const btn1 = document.querySelector(".btn1");
const btn1 = document.getElementsByClassName("btn1")[0];

btn1.addEventListener("click", function () {
    console.log("parseInt('123') : " + parseInt('123'));
    console.log("parseInt('123.456') : " + parseInt('123.456'));
    console.log("parseInt('123.6') : " + parseInt('123.6')); // 소수점 이하 버림
    console.log("parseInt('-123.6') : " + parseInt('-123.6')); // 소수점 이하 버림

    console.log("parseFloat('123') : " + parseFloat('123'));
    console.log("parseFloat('123.456') : " + parseFloat('123.456'));

    console.log("Number('123') : " + Number('123'));
    console.log("Number('123.456') : " + Number('123.456'));
});

//isNaN(값)
const input2 = document.getElementById("input2");
const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function () {
    if (isNaN(input2.value)) {
        alert("숫자가 아닙니다.");
    } else {
        alert("숫자입니다.");
    }
});

const input3 = document.getElementById("input3");
const btn3 = document.getElementById("btn3");

btn3.addEventListener("click", function () {
    console.log("Math.ceil(올림) : " + Math.ceil(input3.value));
    console.log("Math.floor(내림) : " + Math.floor(input3.value));
    console.log("Math.trunc(버림) : " + Math.trunc(input3.value));
    console.log("Math.round(반올림) : " + Math.round(input3.value));
});

document.getElementById("btn4").addEventListener("click", function () {
    // rgb 색상 랜덤 대입(0~255)
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    document.querySelector("body").style.backgroundColor
        //    = "rgb(" + r + "," + g + ", " + b + ")";
        = `rgb(${r}, ${g}, ${b})`;
});