// 随机添加图片到
// 添加300的随机数
var imgs = document.getElementsByClassName('thumb_img');
var len = imgs.length;
var path = 'imgs/wallpapers/';
for (var i=0;i<=len;i++){
    var num = RandomNumBoth(0,300);
    var name = num.toString()+'.jpg';
    //如何调用
    imgs[i].src = path+name;

}


function RandomNumBoth(Min,Max){
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range); //四舍五入
    return num;
}