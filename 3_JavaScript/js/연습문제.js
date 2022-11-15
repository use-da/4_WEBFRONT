// 색 출력 영역
// 요소를 얻어와 변수에 저장

// 클래스명, 태그명, name속성값, querySelectorAll()의 경우 배열로 반환
const container = document.getElementsByClassName('container')[0];

const area = document.getElementsByClassName('area');
const box = document.getElementsByClassName('box');
const boxColor = document.getElementsByClassName('box-color');

// JS로 CSS 추가하기
// container클래스 요소에 flex추가
container.style.display = 'flex';


// area 클래스 요소에 높이 170px, 너비 150px, 테두리 1px solid #000 추가
// display: flex, main-axis방향 : 세로
for (item of area) {
    item.style.height = '170px';
    item.style.width = '150px';
    item.style.border = '1px solid #000';
    item.style.display = 'flex';
    item.style.flexDirection = 'column';
}

// for (let i = 0; i < area.length; i++) {
//     area[i].style.height = '170px';
//     area[i].style.width = '150px';
//     area[i].style.border = '1px solid #000';
//     area[i].style.display = 'flex';
//     area[i].style.flexDirection = 'column';
// }

// box 클래스 요소에 높이 150px, 아래쪽 테두리 1px 실선 검정색
for (let item of box) {
    item.style.height = '150px';
    item.style.borderBottom = '1px solid #000';
}

// box-color 클래스 요소의 테두리와 outline을 없애기
for (let item of boxColor) {
    item.style.border = 'none';
    item.style.outline = 'none';
}

// change : 포커스를 잃고 나서 작성된 값이 이전 값과 다를 경우
// blur   : 포커스를 잃을 때 

// box-color 클래스 요소의 입력값이 변경되면 box클래스 요소의 배경색을 변경
// + 입력된 input요소 글씨색도 변경
for (let i = 0; i < boxColor.length; i++) {
    boxColor[i].addEventListener('change', function () {
        //console.log(this.value);

        // box-color input 태그와 같은 인덱스 번째 box요소의 배경색 변경
        box[i].style.backgroundColor = boxColor[i].value;
        boxColor[i].style.color = boxColor[i].value; // == this.style.color=this.value;
    });
}

// transition-duration 변경 버튼 클릭 시 #input1에 작성된 값 만큼의 transition-duration을
// 모든 box 요소에 추가 + #print1 요소의 내용을 #input1에 작성된 값을 변경
// hint.  transition-duration에 세팅되는 값은 초단위(s) 입니다.
const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function () {
    const duration = document.getElementById('input1').value;
    for (let item of box) {
        item.style.transitionDuration = duration + 's';
    }
    document.getElementById('print1').innerText = duration;
});

// #clearBtn 클릭 시 .box의 모든 배경색을 없애고 .box-color에 작성된 값도 없애기
document.getElementById('clearBtn').addEventListener('click', function () {
    for (let item of box) { //.box의 모든 배경색 제거
        item.style.backgroundColor = '';
    }
    for (let item of boxColor) {  //.box-color의 모든 배경색 제거
        item.value = '';
    }
});