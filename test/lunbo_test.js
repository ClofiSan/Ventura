let slideIndex = 0;
showSlides(slideIndex);

// 这两个函数其实是对于Li中的点击事件的写死实现的
function plusSlides(n) {
    // console.log(slideIndex + n);
    showSlides(slideIndex += n);
}

// 图标控制
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length - 1) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length - 1}
    // console.log(slideIndex);
    //先全部设定成0,也就是说图片叠加起来即可
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    //为什么dots要加入active?
    dots[slideIndex].className += " active";
}