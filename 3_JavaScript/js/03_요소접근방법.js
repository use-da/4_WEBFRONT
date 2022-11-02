//  id로 접근하기
function fnTest1() {
    // id가 div1인 요소를 얻어와 상수형 변수 div1에 저장
    const div1 = document.getElementById("div1");
    // 접근한 요소의 배경색을 얻어와 변수에 저장
    const bgColor = div1.style.backgroundColor;
    if (bgColor == "red") { //자바스크립트는 equals()가 아닌 ==로 비교
        div1.style.backgroundColor = "yellow";
    } else {
        div1.style.backgroundColor = "red";
    }
}

// class로 접근하기
function fnTest2() {
    //요소 여러 개를 한번에 접근하는 경우 배열 형태로 반환
    const arr = document.getElementsByClassName("div2");

    arr[0].style.backgroundColor = "green";
    arr[1].style.backgroundColor = "yellow";
    arr[2].style.backgroundColor = "red";

    for (let i = 0; i < arr.length; i++) {
        arr[i].innerText = i + "번째 요소입니다.";
    }
}

function fnTest3() {
    const arr = document.getElementsByTagName("li");
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i].innerText;
        arr[i].style.backgroundColor = "rgb(100," + num + ",130)";
    }
}

// input 태그 값(value) 얻어오기/변경하기
function fnTest4() {
    //input 요소에 접근하기
    const input = document.getElementById("inputTest");
    //input 관련 태그에 작성된 값을 나타내는 속성 == value
    alert(input.value);
    // input 요소에 ""(빈 문자열)대입 == 값을 삭제
    input.value = "";
}

// name 속성으로 접근하기
function fnTest5() {

    // name 속성 값이 hobby인 요소를 모두 얻어와 배열 형식으로 반환
    const hobby = document.getElementsByName("hobby");
    //console.log(hobby);
    let str = ""; // 체크된 체크박스의 값을 저장할 변수
    let count = 0; // 체크된 체크박스의 개수를 저장할 변수
    for (let i = 0; i < hobby.length; i++) {
        //checked속성 : 해당 요소가 체크 되어있으면 true, 아니면 false
        if (hobby[i].checked) {
            //console.log(hobby[i].value);
            str += hobby[i].value + " ";
            count++;
        }
    }
    const result5 = document.getElementById("result5");
    if (str != "") {
        result5.innerText = str;
        result5.innerHTML += "<br><br>선택된 개수 : " + count; ""
        /**누적 */
    } else {
        result5.innerText = "체크된 항목이 없습니다.";
    }
}

//CSS 선택자로 접근하기
function fnTest6() {
    //id속성 값이 "cssTest"인 요소를 1개 선택
    //여러 개의 요소를 선택된 경우 첫번째 요소만 반환
    document.querySelector("#cssTest").style.border = "3px solid green";
    document.querySelector("#cssTest>div").style.backgroundColor = "gold";

    //선택자에 맞는 모든 요소를 선택해 배열 형식으로 반환(let일반변수 const상수)
    const arr = document.querySelectorAll("#cssTest>div");

    for (let i = 0; i < arr.length; i++) {
        arr[i].style.fontSize = "30px";
    }
}

//엔터키가 입력 되었을 때
function inputEnter() {
    // 키보드 입력 과정
    // 키 누름 -> keydown -> input태그에 입력 
    // -> keypress -> (손을 떼면)keyup

    //console.log(window.event.key);  // 눌린 키의 문자를 반환
    // keydown : 모든 키가 눌렸을 때
    // keypress : 영어/숫자/특수문자/띄어쓰기가 눌렸을 때
    //-> 꾸욱 누르고 있을 경우 연속적으로 함수가 호출되는 문제 발생
    //-> keyup이용 (1회만 인식)
    if (window.event.key == "Enter") {
        //다른 함수 호출
        readValue();
    }
}

function readValue() {
    //채팅과 관련된 요소 모두 얻어오기
    const bg = document.getElementById("chatting-bg");
    const input = document.querySelector("#chattingInput");

    // 문자열 .trim() : 앞뒤 공백 제거
    if (input.value.trim().length > 0) {
        //입력된 값으로 채팅 추가
        bg.innerHTML += "<p><span>" + input.value + "</span></p>"

        //스크롤을 제일 밑으로 내리기
        //요소.scrollTop : 요소 내부 현재 스크롤 위치
        //요소.scrollTop = 위치 : 스크롤을 특정 위치로 이동
        //요소.scrollHeight : 스크롤 전체 높이
        bg.scrollTop = bg.scrollHeight;


    } else {
        alert("내용을 입력하세요.");
    }
    // 입력창 초기화
    input.value = "";
}