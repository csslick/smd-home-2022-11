// main.js
console.log('main.js');

// 메인 이미지 슬라이더
$(function(){
  // 배너 이미지 배열
  let bgArr = [
    'images/main-banner-e1.jpg',
    'images/main-banner-e2.jpg',
    'images/main-banner-e3.jpg',
  ]

  let bg_img_num = 0; // 이미지 번호

  // 배경 재생
  setInterval(function(){
    bg_img_num++; // 이미지 번호 증가
    if(bg_img_num >= bgArr.length) {
      bg_img_num = 0;
    }
    console.log(bg_img_num);
    // 배경이미지 변경
    $('#main-banner .container').css({
      'background-image': `url(${bgArr[bg_img_num ]})`
    })
  }, 5000);

})

// PC 사이트맵(모바일 GNB) 버튼
$(function(){
  $('#btn-toggle').on('click', function(){
    $('#site-map-menu').toggleClass('show');
  });

  $('#site-menu-close').on('click', function(){
    $('#site-map-menu').removeClass('show');
  });
})


$(function(){
  // GNB 1단계 a 기본 이벤트 제거
  $('#site-map-menu .site-menu .depth1 > li > a')
    .on('click', function(event){
      // 여기다 toggle 기능 추가: 클릭한 버튼의 다음형제(depth2)
      $(this).next().toggleClass('show');
      event.preventDefault();
    })
})

