//배너 슬라이드
let $slideLists = $('.main-banner-list');
let $slideImgs = $('.main-banner-img');

let slideWidth = 1000;
let currentIdx = 0;
let slideCnt = $slideImgs.length;
let $currentIdxDisplay = $(".main-banner-currentIdx"); // 현재 인덱스를 출력할 요소 선택
let $slideCntDisplay = $(".main-banner-slideCnt"); // 슬라이드 개수를 출력할 요소 선택

// 초기 값 설정 후 출력



$currentIdxDisplay.text(currentIdx + 1);
$slideCntDisplay.text(slideCnt);

function checkCnt(){
    $currentIdxDisplay.text(currentIdx + 1); // 인덱스는 0부터 시작하지만 표시는 1부터
    $slideCntDisplay.text(slideCnt);
}



function checkEnd(){
    if(currentIdx <= 0){
        $('.arrow-prev').css('display','none');
    }else{
        $('.arrow-prev').css('display','block');
    }

    if(currentIdx >= slideCnt-1){
        $('.arrow-next').css('display','none');
    }else{
        $('.arrow-next').css('display','block');
    }
}

//배너 슬라이드 버튼이동
$('.arrow-next').on('click', function() {
    currentIdx++;
    console.log('currentIdx : ' + currentIdx);
    $slideLists.css('left', -(currentIdx * slideWidth));
    $slideLists.css('transition', '0.5s ease');
    checkCnt();
    checkEnd();
});

$('.arrow-prev').on('click', function() {  
     
    currentIdx--;
    console.log('currentIdx : ' + currentIdx);
    $slideLists.css('left', -(currentIdx * slideWidth));
    $slideLists.css('transition', '0.5s ease');
    checkCnt();
    checkEnd();
});

//배너 슬라이드 자동이동
function slideInterval() {
    currentIdx++;
    currentIdx = currentIdx === slideCnt ? 0 : currentIdx;
    $slideLists.css('left', -(currentIdx * slideWidth));
    checkCnt();
    checkEnd();
}
// 3초마다 슬라이드 이동
setInterval(slideInterval, 3000); // 3000ms = 3초


//로그아웃 confirm
function confirmLogout() {
    if (confirm("로그아웃 하시겠습니까?")) {
        alert("정상적으로 로그아웃 되었습니다");
        return true;
    } else {
        return false;
    }
}

//메인 카테고리
let comminity = document.querySelector('.main-header-category-communitytag');
let subMenu = document.querySelector('.main-sub-menu');
comminity.addEventListener('mouseover', () => {
    subMenu.style.display = 'block';
});
subMenu.addEventListener('mouseover', () => {
    subMenu.style.display = 'block';
});

comminity.addEventListener('mouseout', () => {
    subMenu.style.display = 'none';
});
subMenu.addEventListener('mouseout', () => {
    subMenu.style.display = 'none';
});