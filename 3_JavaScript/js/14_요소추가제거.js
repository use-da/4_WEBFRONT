//추가버튼 클릭 시 동작
document.getElementById("add").addEventListener("click", function () {

    // <div class="row">
    //     <input type="number" class="in">
    //     <span class="remove">&times;</span>
    // </div> 

    //div요소 생성
    const div = document.createElement("div");
    //div에 row클래스 추가
    div.classList.add("row");

    //input요소 생성
    const input = document.createElement("input");
    //input에 in클래스 추가
    input.classList.add("in");
    //input에 type속성 추가
    input.setAttribute("type", "number");

    //요소.setAttribute("속성명", "속성값"); : 요소의 속성을 추가
    //요소.removeAttribute("속성명"); : 속성 제거

    //span요소 생성
    const span = document.createElement("span");
    //span에 remove클래스 추가
    span.classList.add("remove");
    //span에 &times; 추가
    span.innerHTML = "&times;";
    //span에 이벤트 추가(동적요소에 이벤트 추가)
    span.addEventListener("click", function () {
        //span의 부모요소(div .row) 제거
        this.parentElement.remove();

        //요소.remove() : 요소 제거
    });

    //div> input, span
    div.append(input, span);

    //.container에 div추가
    document.querySelector(".container").append(div);

    //화면에 추가된 input에 포커스
    input.focus();
});

//input 요소를 얻어와 모두 더하기
//함수는 호출 시점의 HTML화면을 기반으로 해석 진행
document.getElementById("calc").addEventListener("click", function () {
    const inputs = document.querySelectorAll(".in");
    let sum = 0;
    for (let i = 0; i < inputs.length; i++) {
        sum += Number(inputs[i].value); //문자열을 숫자로 변환
    }
    alert("합계 : " + sum);

    //const inputList=document.getElementsByClassName("in");
    //let sum=0;
    //for(let input of inputList){
    // sum+=Number(input.value);
    //}
    //alert(sum);
});











//추가버튼으로 생성된 x버튼의 클래스"remove"
//"remove"클래스 요소를 모두 얻어와 for문으로 접근해 click이벤트 추가
// -> 안됨 : 처음 HTML문서 해석 시 remove클래스를 가진 요소가 없어
//          이벤트 동작 구문이 요소에 적용되지 않음
//처음부터 있던 HTML요소 == 정적 요소
//JS로 추가된 요소 == 동적 요소

//정적 요소 .remove클래스 요소를 얻어와 click이벤트 추가(but button은 동적요소라 적용X)
const remove = document.getElementsByClassName("remove");
for (let item of remove) {
    item.addEventListener("click", function () {
        alert("삭제");
    });
}

