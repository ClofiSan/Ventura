//clock
function getSecond(x){
    if(x<10)
        return "0"+x;
    else
        return x;
}
function showTime(){

    var xdate = new Date();
    var xyear = xdate.getFullYear();
    var xmonth = xdate.getMonth()+1;
    var xday = xdate.getDate();
    var xweek = xdate.getDay();
    var week =["周日","周一","周二","周三","周四","周五","周六"];
    var xhours = xdate.getHours();
    var xminute = xdate.getMinutes();
    var xseconds = getSecond(xdate.getSeconds());
    var str = "";

    str = xyear+"-"+xmonth+"-"+xday+" "+week[xweek]+" "+xhours
        +":"+xminute+":"+xseconds;

    document.getElementById('time').innerHTML=str;
}
window.setInterval(showTime,500);


//quotes
//点击到哪个调整参数即可

//本质上的节点结构的操纵
//找到类名，直接操纵即可
var quote_boxs = box.children;//是不是这个方法有问题？
// alert(quote_boxs.length);
function NextQuote() {
    //最傻的方法是一个一个的去找到类,如果是可见的就变成不可见的
    //alert("run next");
    var i;
    for (i=0;i<quote_boxs.length;i++){
        if (!quote_boxs[i].classList.contains("hidden")){
           // alert("find no hidden");
            quote_boxs[i].classList.add("hidden");
            if (i===quote_boxs.length-1){
                quote_boxs[0].classList.remove("hidden");
                break;
            }
            quote_boxs[i+1].classList.remove("hidden");
            break;
        }
    }
    // if (i>=quote_boxs.length){
    //     quote_boxs[0].classList.remove("hidden");
    // }
}
function LastQuote() {

    var i;
    for (i=0;i<quote_boxs.length;i++){
        if (!quote_boxs[i].classList.contains("hidden")){
            // alert("find no hidden");
            quote_boxs[i].classList.add("hidden");
            if (i===0){
                quote_boxs[quote_boxs.length-1].classList.remove("hidden");
                break;
            }
            quote_boxs[i-1].classList.remove("hidden");
            break;
        }
    }
}


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


