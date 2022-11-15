const a = 10; //전역변수
function temp() {
    alert(1);
};

temp(); //함수 호출

//위 두개 코드를 합치면 즉시 실행 함수가 된다.

// const a = 20;
// function temp2() {
//     clg(a);
// }
// temp2();

//변수중복으로 인한 개발상의 불편함을 없애기 위해 즉시 실행 함수를 사용한다.
//속도도 더 빠르다
(function () {
    const a = 10; //지역변수
    console.log(a);
}());

//즉시실행함수 확인하기
//페이지 로딩시 바로 수행
(function () {
    const str = '점심메뉴 추천좀';
    console.log(str);
})();

(function () {
    const str = '변수명 중복 안 일어난다.';
    console.log(str);
})();

//---------------------------------------------------
// 화살표 함수(Arrow Function)
//1. 기본형태 : ([매개변수]) => {실행문}
document.getElementById('btn1').addEventListener('click', () => {
    alert('화살표 함수 기본 형태입니다.');
});

//즉시 실행 함수 + 화살표 함수
(() => {
    console.log("즉시 실행 함수 + 화살표 함수");
})();

//2. 매개변수가 1개일 경우 :  매개변수 => {실행문}
document.getElementById('btn2').addEventListener('click', e => {
    //매개변수 e (또는 event) : 이벤트 관련 정보를 모두 갖고 있는 객체
    console.log(e);
    //e.target : 이벤트가 발생한 대상
    console.log(e.target);

    e.target.style.backgroundColor = 'yellow';
    //화살표 함수 주의사항
    //화살표 함수를 이벤트 핸들러로 사용할 경우 this는 window객체를 가리킨다.
    //화살표 함수 내부에서 this는 전역객체를 가리킨다. -> e.target 사용

    console.log(this);
});

//3. {},return문이 없는 경우 : () => 실행문
function print(fn) { //fn : 전달 받은 함수
    console.log(fn(2));
}

document.getElementById('btn3').addEventListener('click', () => {
    // 익명 함수
    print(function (num) { return num * 10 })
    //화살표 함수
    print(num => num * 100)
});