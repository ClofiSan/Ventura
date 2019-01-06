
function showPicture(n){
    var slide_box = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('dot');
    var dis_pic = n;
    if (n > slide_box.length - 1 ){
        dis_pic = 0;
    }
    if (n < 0 ){
        dis_pic = slide_box.length - 1;
    }
    //直接把index加入到active即可
    for (var i=0;i<slide_box.length;i++){
        if (slide_box[i].classList.contains('slide_active')){
            //将活跃的图片去除
            slide_box[i].classList.remove('slide_active');
            dots[i].classList.remove('dot_active');
        }
        if (i===dis_pic){
            slide_box[i].classList.add('slide_active');
            dots[i].classList.add('dot_active');
        }
    }
}