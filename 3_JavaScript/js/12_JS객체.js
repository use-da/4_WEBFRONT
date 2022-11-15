// 객체생성 1
document.getElementById("btn1").addEventListener("click", function () {
    // {} 객체 생성 및 다루기

    // **중요**
    // JS객체의 key는 무조건 string -> key작성 시 "", '', 따옴표X 모두 string으로 인식
    const brand = "스타벅스";
    const product = {
        "pName": "텀블러",
        'brand': "투썸플레이스",
        color: ["red", "black", "silver"],
        price: 30000,

        'information': function () { //객체의 기능
            console.log(brand);
            //객체내부 함수에서 변수명을 작성하면 해당 객체의 변수(key)가 아닌 전역변수가 출력된다
            //같은 객체의 변수(key)를 선택하는 방법이 별도 존재 -> this
            console.log(this.pName);
            console.log(this.brand);
            console.log(this.color);
            console.log(this.price);
        }
    }
    console.log(product);
    //객체 기능 호출하기
    product.information();
    //객체가 가지고 있는 값 출력하기
    const div1 = document.getElementById("div1");
    div1.innerHTML = "";
    //객체의 값을 얻어오거나 대입하는 방법
    //1) 얻어오기 : 객체명.key 또는 객체명['key']
    //2) 대입하기 : 객체명.key = 값; 또는 객체명['key'] = 값;
    div1.innerHTML += "product.pName : " + product.pName + "<br>";
    div1.innerHTML += "product.brand : " + product.brand + "<br>";
    div1.innerHTML += "product.color : " + product.color + "<br>";
    div1.innerHTML += "product.price : " + product.price + "<br>";
    div1.innerHTML += "<hr>";

    //product.price 값 변경
    product.price = 25000;
    div1.innerHTML += "product.price : " + product.price + "<br>";
    div1.innerHTML += "<hr>";

    //JS객체에 없는 key에 값 대입하기 -> 객체에 새로운 key:value 추가
    product.capacity = "550ml";
    console.log(product);
    div1.innerHTML += "product.capacity : " + product.capacity + "<br>";
    div1.innerHTML += "<hr>";

    //객체명['key']방법으로 객체가 가지고 있는 모든 값 출력하기 -> for in 구문(객체 전용 for문)
    div1.innerHTML += "product['capacity'] : " + product['capacity'] + "<br>";
    div1.innerHTML += "<hr>";

    //for(let key in 객체명) { } : 객체명의 key를 하나씩 꺼내서 key변수에 대입
    for (let key in product) {
        //객체의 k는 모두 string == 'pName', 'price', 'capacity'
        div1.innerHTML = product[key] + "<br>";
    }
});

//객체 key제거 방법 -> delete 객체명.key
// const obj = {};
// obj.a = 10;
// obj.b = 20;
// obj.a = "";
// delete obj.a;

//생성자 함수를 이용한 객체 생성
document.getElementById("btn2").addEventListener("click", function () {
    const div2 = document.getElementById("div2");
    const stdList = [];
    //2. 생성자 함수 호출 : new 생성자함수명(매개변수)
    stdList.push(new Student(1, 2, "홍길동"));
    stdList.push(new Student(2, 4, "김길동"));
    stdList.push(new Student(3, 1, "오길동"));
    stdList.push(new Student(2, 7, "가길동"));

    div2.innerHTML = ""; //이전 내용 삭제

    for (let std of stdList) {
        //for in : 객체의 키를 반복 접근용 for문
        for (let key in std) { // key : grade, class, name, introduce
            //std[key]의 자료형이 'function'이면 실행 후 출력
            if (typeof std[key] == "function") {
                div2.innerHTML += key + " : " + std[key]() + "<br>";
            } else {
                div2.innerHTML += key + " : " + std[key] + "<br>";
            }

        }
        div2.innerHTML += "<hr>";
    }


    console.log(stdList);
});

// 1. 생성자 함수 정의 : 시작은 반드시 대문자로 작성
function Student(grade, ban, name) {
    //JS 함수의 매개변수는 let, const, var를 적지 않음
    //-> 안 적어도 해당 함수의 지역변수로 취급

    //생성자 함수에서의 this 
    //== new 연산자를 통해 만들어지는 객체(앞으로 만들어질 객체)

    //속성
    this.grade = grade;
    //매개변수 grade값을 생성되는 객체의 grade에 대입
    this.ban = ban;
    this.name = name;

    //기능
    this.introduce = function () {
        return this.grade + "학년" + this.ban + "반" + this.name;
    }
}

// JSON
document.getElementById("btn3").addEventListener("click", function () {

    //JSON.stringify(JS객체) : JS객체 -> JSON문자열 변환
    const std = new Student(5, 7, "오칠이");

    console.log(std);
    console.log(JSON.stringify(std)); //객체 -> JSON 변환
    //JSON변환 시 객체의 기능은 포함하지 않는다
    //-> JSON은 데이터 전달에 특화된 형태


    //JSON.parse(JSON문자열) : JSON문자열 -> JS 객체 변환
    const member = '{"memberId":"user01","memberPw":"pass01","age":20}';
    console.log(member); //JSON문자열
    console.log(JSON.parse(member)); //JSON문자열 -> JS객체
});

