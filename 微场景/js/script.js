var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
    },

    on:{
        init: function(){
          swiperAnimateCache(this); //隐藏动画元素 
          swiperAnimate(this); //初始化完成开始动画
        }, 
        slideChangeTransitionEnd: function(){ 
          swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        } 
      }
});
var mp3=document.querySelector("#mp3");
var mp3btn=document.querySelector(("#mp3btn"));

// play pause 俩个属性控制audio 的播放和暂停
// running  paused 俩个属性控制 动画的播放和暂停
// 绑定标签 定义点击事件 如果音乐是暂停的 那么点击播放 不是则点击暂停
// 动画：使用js添加css样式，animationPlayState（=animation-play-state）控制动画的播放和暂停
function playPause() {
    if(mp3.paused){
        mp3.play();
        mp3btn.style.animationPlayState="running";
    }else{
        mp3.pause();
        mp3btn.style.animationPlayState="paused";
    }
}
