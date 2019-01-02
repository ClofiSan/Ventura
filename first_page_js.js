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

// var quote = document.getElementById("quote");
// var quote_box = quote.children[1];
// var quote_list = quote_box.children;
// var boxWidth =quote_box.offsetWidth;//偏移的单位距离
// var textCur = 0;
// // quote_list[0].className = "quote_box_current";
// //让List直接成为一个序列，
//
// function LastQuote() {
//     quote_list[textCur].className = "quote_box_hide";
//     if (textCur === 0){
//         textCur = quote_list.length - 1;
//     }
//     quote_list[++textCur].className = "quote_box_current";
// }
// function NextQuote(){
//     quote_list[textCur].className = "quote_box_hide";
//     if (textCur === quote_list.length - 1){
//         textCur = 0;
//     }
//     quote_list[++textCur].className = "quote_box_current";
//     //首先要在css样式中把它们都重叠在一起
// }
// function animate(element,target) {
//     //这个是轮播特效
//     clearInterval(element.timeId);
//     element.timeId = setInterval(function () {
//
//     },10)
// }



