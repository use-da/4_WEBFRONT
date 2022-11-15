
document.getElementById('btn1').addEventListener('click', function () {
    const arr1 = new Array();                 // 0칸짜리 배열 생성
    const arr2 = new Array(10);               // 10칸짜리 배열 생성
    const arr3 = [];                          // 0칸짜리 배열 생성
    const arr4 = ['사과', '딸기', '바나나'];   // 3칸짜리 초기화된 배열 생성

    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    console.log(arr4);

    // 배열에 존재하지 않는 인덱스에 값 대입
    // -> 자동으로 추가되면서 배열 길이가 늘어남
    // -> 중간 인덱스를 건너뛰면 empty item이 생성됨
    arr1[0] = "김밥";
    arr1[1] = 5000;
    arr1[2] = true;
    arr1[5] = 2000;
    console.log(arr1);

    // for문으로 배열 요소 반복 접근하기
    // 1. 일반 for문 - 배열, 컬렉션
    // for (let i = 0; i < arr4.length; i++) {
    //     console.log(arr4[i]);
    // }

    // 2. 배열.forEach(function(item, index){ 반복 실행 코드 }); - 배열에서만 사용 가능
    // - item : 현재 접근중인 요소
    // - index : 현재 인덱스

    // * 여러요소를 얻어온 경우(HTMLCollection, NodeList)는 forEach를 사용할 수 없음
    arr4.forEach(function (a, i) {
        console.log(i + ":" + a);
    });

    //HTMLCollection 사용 불가
    // const arr = document.getElementsByTagName('li');
    // arr.forEach(function (item, index) { console.log(item); });

    // 3. for(item of 배열(또는 컬렉션)){} - 배열, 컬렉션
    //                                     (symbol.iterator 속성을 가지고 있어야 함)
    // - 배열의 요소를 하나씩 item에 대입하면서 반복 실행 == java 향상 for문
    for (let item of arr4) {
        console.log(item);
    }

    // li 태그에 작성된 값 얻어와서 합 구하기
    //const list = document.getElementsByTagName("li");     // HTMLCollection
    const list = document.querySelectorAll("#test > li");   // NodeList

    let sum = 0;
    for (let item of list) {
        sum += Number(item.innerText);
    }
    console.log("sum:" + sum);

    // 4. for(let key in 객체){} - JS 객체용 for문
});

//****************************************************************************************************** */
//배열 관련 함수 확인 
document.getElementById('btn2').addEventListener('click', function () {
    // 비어있는 배열 생성
    const arr = [];
    // 배열.push(값) : 배열의 맨 뒤에 값 추가
    arr.push("초밥");
    arr.push("우육면");
    arr.push("쌀국수");
    arr.push("삼겹살");

    // 배열.toString() : 배열 요소 사이 "," 추가한 문자열로 반환
    console.log("arr : " + arr.toString());

    // 배열.pop() : 배열의 마지막 요소를 꺼내와 반환
    const temp = arr.pop();
    console.log("arr : " + arr.toString());
    console.log("temp : " + temp);

    // 배열.indexOf(값) : 일치하는 값을 가진 요소의 index를 반환
    console.log("초밥 인덱스 : " + arr.indexOf("초밥"));
    console.log("갈비가 있는가? : " + (arr.indexOf("갈비") != -1));

    // 배열.sort() : 배열 요소를 오름차순으로 정렬(문자열 기준)
    console.log(arr.sort());

    // 숫자 정렬의 문제점과 해결 방법
    const numArr = [5, 3, 2, 10, 1]; // -> 오름차순 정렬 시 1, 2, 3, 5, 10
    console.log(numArr.sort());                                  // -> 1, 10, 2, 3, 5
    console.log(numArr.sort(function (a, b) { return a - b; })); // -> 1, 2, 3, 5, 10 양수가 나오면 자리를 바꿈
    console.log(numArr); //sort() 함수는 원본 배열의 순서를 정렬 -> 원본 훼손 발생(깊은 복사를 이용해 해결 가능)

    // 배열.join("구분자") : 배열 요소 사이에 구분자를 추가한 문자열로 반환
    console.log(numArr.join("//"));
});

//****************************************************************************************************** */
//로또 번호 생성
document.getElementById("btn3").addEventListener("click", function () {
    const lotto = [];
    while (lotto.length < 6) {
        const ran = Math.floor(Math.random() * 45 + 1);
        if (lotto.indexOf(ran) == -1) { // 배열에 난수 값이 없다면(중복 검사 코드)
            lotto.push(ran);
        }
    }
    lotto.sort(function (a, b) { return a - b; });
    console.log("로또번호 : " + lotto);
});

