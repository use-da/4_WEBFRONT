var str = "JS코드를 함수가 아닌"
    + "JS파일 또는 script 태그 내부에 바로작성하면"
    + "HTML 랜더링 시 바로 수행된다.";

console.log(str);

// 변수 선언 위치에 따른 구분
var num1 = 100; // 전역변수
num2 = 200;     // 전역변수

console.log("num1 : " + num1);
console.log("num2 : " + num2);

function test() {
    var num3 = 300; //function 지역변수
    num4 = 400;     // 전역변수

    console.log("함수내부 num3 : " + num3);
    console.log("함수내부 num4 : " + num4);

    if (num3 == 300) {
        var num5 = 500; // if 지역변수
        num6 = 600;     // 전역변수

    }
    console.log("if문 종료 후 num5 : " + num5);  //function 지역변수
    console.log("if문 종료 후 num6 : " + num6);  // 전역변수
}

test(); // 함수호출

//console.log("함수외부 num3 : " + num3); 
//Uncaught ReferenceError: num3 is not defined 함수 종료 후 변수는 사라짐

//script언어는 에러 발생시 해석을 멈춘다.
console.log("함수외부 num4 : " + num4); //함수 종료 후에도 사용 가능

//console.log("함수 종료 후 num5 : " + num5); 
//Uncaught ReferenceError: num5 is not defined
console.log("함수 종료 후 num6 : " + num6);  // 전역변수

// var 변수명 중복 확인
var num1 = 999;
console.log("var num1 중복 확인 : " + num1);



// 자료형 확인(+ 변수 선언 방법)
function typeTest() {
    let temp1 = 100;
    //let temp1= 200; //변수명 중복 불가

    if (temp1 == 100) {
        let temp2 = 200;
        const temp3 = 300;
        //temp3 = 400; //상수형 변수에 값을 할당할 수 없다.
    }

    console.log(temp1);
    //console.log("let 블록범위 확인 : " + temp2);
    //console.log("const 블록범위 확인 : " + temp3);

    //--------------------------------------------
    // 자료형 확인
    const typeBox = document.getElementById("typeBox");
    typeBox.innerHTML = ""; //기존에 있던 내용을 지운다.

    //const name2; // 상수는 선언과 동시에 초기화 해야한다.
    //typeof 변수명 : 해당 변수의 자료형을 반환하는 연산자
    let name;        //undefined 
    typeBox.innerHTML += "name : " + name + " / " + typeof name;

    name = "홍길동"; //undefined -> string
    typeBox.innerHTML += "<br>name : " + name + " / " + typeof name;

    //number
    const age = 20;
    const height = 175.5;
    typeBox.innerHTML += "<br>age : " + age + " / " + typeof age;
    typeBox.innerHTML += "<br>height : " + height + " / " + typeof height;

    //boolean
    const isMan = true;
    typeBox.innerHTML += "<br>isMan : " + isMan + " / " + typeof isMan;

    //object(객체, 배열)
    // 배열 선언과 동시에 초기화
    // Java : int[] arr = {10, 20, 30};
    // JS
    const arr = [10, 20, 30];
    typeBox.innerHTML += "<br>arr : " + arr + " / " + typeof arr;
    for (let i = 0; i < arr.length; i++) {
        typeBox.innerHTML += "<br>arr[" + i + "] : " + arr[i];
    }
    // JS객체
    //- k:v 쌍으로 이루어짐(Map 형식)
    //- key는 무조건 String
    //- 리터럴 표기법 : {}
    const user = { "id": "user01", "name": "홍길동", "age": 20, "a": arr };
    typeBox.innerHTML += "<br>user : " + user + " / " + typeof user;
    console.log(user);

    // 객체에 저장된 값 출력
    typeBox.innerHTML += "<br>user.id : " + user.id;
    typeBox.innerHTML += "<br>user.name : " + user.name;
    typeBox.innerHTML += "<br>user.age : " + user.age;
    typeBox.innerHTML += "<br>user.a : " + user.a;
    typeBox.innerHTML += "<br>user.a[2] : " + user.a[2];

    // function
    // 1) 변수명 == 함수명
    const fnSum = function (n1, n2) { // 익명 함수
        return n1 + n2;
    }
    // 함수명만 작성하는 경우 -> 함수에 작성된 코드 자체가 반환
    typeBox.innerHTML += "<br>fnSum : " + fnSum + " / " + typeof fnSum;

    // 함수명(매개변수) == 함수 호출 (함수 코드가 수행됨)
    typeBox.innerHTML += "<br>fnSum(1,2) : " + fnSum(1, 2);

    // 2) 함수를 매개변수로 전달하는 형태
    function plusFn(num, fn) {
        //num : number
        // fn : function
        return num + fn();
    }
    const result = plusFn(100, function () { return 30 - 10; });
    typeBox.innerHTML += "<br>result : " + result;

}