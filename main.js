var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical', // Chuyển đổi slide theo chiều dọc
    loop: true, // Lặp lại các slide
    speed: 600, // Tốc độ chuyển đổi slide
    allowTouchMove: true,
    touchEventsTarget: 'container', // Tên DOM container sẽ lắng nghe sự kiện touch
    touchStartPreventDefault: false, // Không preventDefault cho sự kiện touchstart
    touchMoveStopPropagation: true, // Ngăn chặn sự kiện touchmove lây lan sang các phần tử khác
});

var isTouching = false;

mySwiper.on('touchStart', function () {
    isTouching = true;
});

mySwiper.on('touchEnd', function () {
    isTouching = false;
});