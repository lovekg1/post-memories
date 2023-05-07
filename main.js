var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical', // Chuyển đổi slide theo chiều dọc
    loop: true, // Lặp lại các slide
    speed: 600, // Tốc độ chuyển đổi slide
    on: {
        slideChange: function () {
            // Tìm phần tử audio cho slide hiện tại
            var audio = this.slides[this.activeIndex].querySelector('.audio');
            if (audio) {
                // Nếu tìm thấy phần tử audio, thì phát nó
                audio.play();
            }

            // Dừng phát các phần tử audio khác
            var allAudios = document.querySelectorAll('.audio');
            for (var i = 0; i < allAudios.length; i++) {
                if (allAudios[i] != audio) {
                    allAudios[i].pause();
                }
            }
        }
    }
});

var isTouching = false;

mySwiper.on('touchStart', function () {
    isTouching = true;
});

mySwiper.on('touchEnd', function () {
    isTouching = false;
});