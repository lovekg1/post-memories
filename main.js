var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical', // Chuyển đổi slide theo chiều dọc
    loop: true, // Lặp lại các slide
    speed: 600, // Tốc độ chuyển đổi slide
});

var isTouching = false;

mySwiper.on('touchStart', function () {
    isTouching = true;
});

mySwiper.on('touchEnd', function () {
    isTouching = false;
});

async function getRamdomCat() {
    const res = await fetch('https://api.thecatapi.com/v1/images/search')
    return res.json().then(data => data[0].url).catch(err => console.error(err));
}

var hasApiCalled = false

mySwiper.on('slideChange', async function () {
    if (!hasApiCalled) {

        hasApiCalled = true
        const imageUrl = await getRamdomCat()
        const currentSlideIndex = mySwiper.activeIndex

        console.log(imageUrl)

        if (currentSlideIndex >= 0) {
            // Kiểm tra xem đối tượng có tồn tại hay không trước khi truy cập đến nó
            const prevSlideImg = mySwiper.slides[currentSlideIndex - 1]?.querySelector('.swiper-slide-img');
            if (prevSlideImg) {
                // Xóa hình ảnh cũ của slide trước đó
                prevSlideImg.src = ''
            }

            // Cập nhật hình ảnh mới cho slide hiện tại
            const currentSlideImg = mySwiper.slides[currentSlideIndex]?.querySelector('.swiper-slide-img');
            if (currentSlideImg) {
                currentSlideImg.src = imageUrl
            }
        }

        setTimeout(() => {
            hasApiCalled = false;
        }, 1000)
    }
})