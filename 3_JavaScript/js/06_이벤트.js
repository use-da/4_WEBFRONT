// 인라인 이벤트 모델 확인하기
function fnTest1(btn) {
    console.log(btn.style); //요소에 적용할 수 있는 css속성 확인

    //JS로 요소에 CSS 지정 시 inline형식으로 CSS코드가 추가된다
    btn.style.color = "white";
    btn.style.backgroundColor = "black";
    btn.style.cursor = "pointer";
}

//고전 이벤트 모델
//요소가 가지고 있는 이벤트 리스너 속성(변수)에 직접 함수(이벤트 핸들러)를 대입하는 방법 
document.getElementById("btn1").onclick = function () {
    alert("버튼클릭");

    // 고전/표준 이벤트 모델 장점
    // -> 이벤트 제거가 가능함

    // 고전/표준 이벤트 모델 단점
    // -> 한 요소에 동일한 이벤트 리스너에 대한 다수의 이벤트 핸들러를 작성할 수 없다
    //    (마지막으로 대입한 이벤트 핸들러만 적용)
    // -> 해결 방법 : 표준 이벤트 모델


    // 요소의 속성 중 on이벤트 명 속성에 함수 대신 null을 대입하면 이벤트 제거 가능
    // (변수에 값을 새로 대입 해 덮어쓰기)
    document.getElementById("btn1").onmouseout = null;
}

document.getElementById("btn1").onclick = function () {
    alert("새로운 버튼클릭2");
}

document.getElementById("btn1").onmouseover = function () {
    //마우스가 요소 위로 올라갔을 때
    this.style.backgroundColor = "red";
    //이벤트 핸들러 내부에 작성된 this는 이벤트가 발생한 요소를 가리킨다
}

document.getElementById("btn1").onmouseout = function () {
    //마우스가 요소 위에서 벗어났을 때
    this.style.backgroundColor = "yellow";
}

//표준 이벤트 모델
const btn2 = document.getElementById("btn2");

//btn2.addEventListener("이벤트명", function () {});
btn2.addEventListener("click", function () {
    console.log(this);
    this.style.backgroundColor = "coral";
    this.style.border = "5px solid lightgreen";
    this.style.padding = "10px";
    this.style.display = "block";
});

// 고전 이벤트 모델 단점 보완 확인
btn2.addEventListener("click", function () {
    this.style.fontSize = "20px";
    this.style.fontWeight = "bold";
    this.style.fontFamily = "궁서";
});

// 배경색이 입력한 값으로 변하는 박스
document.getElementById("input1").addEventListener("keyup", function () {
    const div1 = document.getElementById("div1");
    div1.style.backgroundColor = this.value; //this = 이벤트가 발생한 요소 = input
});

//html에서 onclick같은거를 html파악을 쉽게하고 JS로 옮겨 유지보수성을 높인다.

//removeEventListener("이벤트명", function () { });