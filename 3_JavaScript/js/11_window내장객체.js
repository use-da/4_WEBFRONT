//window.setTimeout(function() {});
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function () {

    //이벤트 핸들러에서 this는 이벤트가 발생한 html 요소를 가리킨다.

    //0초(클릭하자마자)
    this.style.backgroundColor = "red";

    //3초후 orange로 변경
    window.setTimeout(function () {
        //window.setTimeout()에서 this는 window객체를 가리킨다.
        btn1.style.backgroundColor = "orange";
    }, 3000);
    console.log("중간에 출력");

    //6초후 yellow로 변경
    window.setTimeout(function () {
        btn1.style.backgroundColor = "yellow";
    }, 6000);
});

// 현재 시간을 반환하는 함수
function currentTime() {
    const now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    //얻어온 시간 값이 10미만일 경우 앞에 0 추가
    if (hour < 10) hour = "0" + hour;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    return hour + ":" + min + ":" + sec;
}

const clock = document.getElementById("clock");
//페이지가 로딩되자마자 #clock에 현재 시간을 출력
clock.innerText = currentTime();
// #clock에 1초마다 현재 시간을 출력하는 코드 작성
window.setInterval(function () {
    clock.innerText = currentTime();
}, 1000);

document.getElementById("stop").addEventListener("click", function () {
    window.clearInterval(interval);
});

const openPopup1 = document.getElementById("openPopup1");
const openPopup2 = document.getElementById("openPopup2");
const openPopup3 = document.getElementById("openPopup3");

openPopup1.addEventListener("click", function () {
    //새 탭에서 열기 
    window.open("09_배열.html");
});
openPopup2.addEventListener("click", function () {
    //새 창에서 열기
    window.open("09_배열.html", "_blank", "popup");
});
openPopup3.addEventListener("click", function () {
    //옵션이 지정된 팝업창

    //옵션 작성 방법 : "K=V, K=V, K=V", 크기단위 작성X(px고정) 

    const options = "width=400, height=500, left=400, top=50"; //resizable=no, scrollbars=no, status=no
    window.open("09_배열.html", "popupWindow", options);
});

// 팝업창(자식) 열기
document.getElementById("sendChild").addEventListener("click", function () {
    const options = "width=300, height=300, left=600, top=50";
    window.open("11_팝업.html", "popupWindow", options);

});