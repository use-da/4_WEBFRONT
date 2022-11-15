// 정규표현식 객체 생성 및 확인하기
document.getElementById("check1").addEventListener("click", function () {
    //객체 생성
    const regEx1 = new RegExp("script"); // "script"와 일치하는 문자열이 있는지 검사하는 정규식 객체
    const regEx2 = /java/; // "java"와 일치하는 문자열이 있는지 검사하는 정규식 객체
    const str1 = "저희는 지금 javascript를 공부하고 있습니다.";
    const str2 = "java, db, html, css, js, spring, mybatis 모두 사용 중입니다.";
    const str3 = "aaaaajava, java, java";

    //확인하기
    console.log("regEx1.test(str1) : " + regEx1.test(str1));  // true
    console.log("regEx1.exec(str1) : " + regEx1.exec(str1));  // script
    console.log(regEx1.exec(str1));
    //['script', index: 11, input: '저희는 지금 javascript를 공부하고 있습니다.', groups: undefined]

    console.log("regEx1.test(str2) : " + regEx1.test(str2));  // false
    console.log("regEx1.exec(str2) : " + regEx1.exec(str2));  // null

    console.log("regEx1.test(str3) : " + regEx1.test(str3));  // false
    console.log("regEx1.exec(str3) : " + regEx1.exec(str3));  // null

    console.log("regEx2.test(str1) : " + regEx1.test(str1));
    console.log("regEx2.exec(str1) : " + regEx1.exec(str1));

    console.log("regEx2.test(str2) : " + regEx1.test(str2));
    console.log("regEx2.exec(str2) : " + regEx1.exec(str2));

    console.log("regEx2.test(str3) : " + regEx1.test(str3));
    console.log("regEx2.exec(str3) : " + regEx1.exec(str3));

    console.log(regEx2.exec(str3));
});

// 메타문자 확인하기
document.getElementById("check2").addEventListener("click", function () {

    // 결과 출력용 div
    const div1 = document.getElementById("div1");

    // 이전 내용 삭제
    div1.innerHTML = "";

    // [abcd] : 문자열 내에 a, b, c, d 중 하나와 일치하는 문자열이 있는지 검사
    const regEx1 = /[abcd]/;

    div1.innerHTML += "/[abcd]/ , apple : " + regEx1.test("apple") + "<hr>";
    div1.innerHTML += "/[abcd]/ , qwerty : " + regEx1.test("qwerty") + "<hr>";

    // ^(캐럿) : 문자열의 시작을 의미
    const regEx2 = /^group/;
    div1.innerHTML += "/^group/ , group100 : " + regEx2.test("group100") + "<hr>";
    div1.innerHTML += "/^group/ , 100group : " + regEx2.test("100group") + "<hr>";

    // ^[abcd] : 문자열의 시작이 a, b, c, d 중 하나로 시작하는지 검사
    const regEx3 = /^[abcd]/;
    div1.innerHTML += "/^[abcd]/ , group : " + regEx3.test("group") + "<hr>";
    div1.innerHTML += "/^[abcd]/ , car : " + regEx3.test("car") + "<hr>";
    div1.innerHTML += "/^[abcd]/ , mark : " + regEx3.test("mark") + "<hr>";

    // $(달러) : 문자열의 끝을 의미
    const regEx4 = /team$/;
    div1.innerHTML += "/team$/ , team-A : " + regEx4.test("team-A") + "<hr>";
    div1.innerHTML += "/team$/ , A-team : " + regEx4.test("A-team") + "<hr>";

    // ^[abcd]-team$ : A-team, B-team, C-team, D-team 중 하나와 일치하는지 검사
    // https://regexr.com/   에서 확인
    // https://regex101.com/ 에서 확인

    // [0~9] 숫자
    // [a-z] 소문자
    // [A-Z] 대문자

    // ^[A-Z][0-9]$ : 대문자로 시작하고 숫자로 끝나는 문자열

    // 특수문자를 제외한 문자 하나 -> ^[a-zA-Z0-9]$
});

// 요소.classList : 요소가 가지고있는 클래스를 배열로 반환
// 요소.classList.remove("클래스명") : 요소의 특정 클래스 제거
// 요소.classList.add("클래스명") : 요소의 특정 클래스 추가
// 요소.classList.toggle("클래스명") : 클래스가 있으면 제거 없으면 추가


// 이름 유효성 검사
document.getElementById("inputName").addEventListener("keyup", function () {

    // - 한글 2글자 이상 6글자 이하의 문자열
    // - 단자음 / 모음 경우는 제외
    const regEx = /^[가-힣]{2,6}$/;

    // 유효성 검사
    const result1 = document.getElementById("result1");
    //this==document.getElementById("inputName")
    if (regEx.test(this.value)) {
        result1.innerText = "유효한 이름 형식입니다.";
        //        result1.style.color = "green";
        //confirm클래스 추가 / error클래스 제거
        result1.classList.add("confirm");
        result1.classList.remove("error");

    } else {
        result1.innerText = "유효하지 않은 이름 형식입니다.";
        //        result1.style.color = "red";
        //error클래스 추가 / confirm클래스 제거
        result1.classList.add("error");
        result1.classList.remove("confirm");
    }

});