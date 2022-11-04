// main.js
console.log('main.js');

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
