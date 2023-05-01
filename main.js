var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    allowTouchMove: false,
    touchStartPreventDefault: false
});

var touchStartY = 0;

mySwiper.on('touchStart', function (e) {
    touchStartY = e.touches[0].pageY;
});

mySwiper.on('touchMove', function (e) {
    var touchEndY = e.changedTouches[0].pageY;
    var diffY = touchEndY - touchStartY;
    if (diffY < 0) {
        mySwiper.slideNext();
    } else if (diffY > 0) {
        mySwiper.slidePrev();
    }
});