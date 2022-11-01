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