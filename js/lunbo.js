function my$(id) {
        return document.getElementById(id);
    }
 
    //��ȡ��Ԫ�أ��������
    var box=my$("box");
    var inner=box.children[0];
    var ulObj=inner.children[0];
    var list=ulObj.children;
    var olObj=inner.children[1];
    var arr=my$("arr");
    var imgWidth=inner.offsetWidth;
    var right=my$("right");
    var pic=0;
    //����li����������С��ť
    for(var i=0;i<list.length;i++){
        var liObj=document.createElement("li");
 
        olObj.appendChild(liObj);
//      liObj.innerText=(i+1);
        liObj.setAttribute("index",i);
 
        //Ϊ��ťע��mouseover�¼�
        liObj.onmouseover=function () {
            //��������а�ť����ʽ
 
            for (var j=0;j<olObj.children.length;j++){
                olObj.children[j].removeAttribute("class");
            }
            this.className="current";
            pic=this.getAttribute("index");
            animate(ulObj,-pic*imgWidth);
        }
 
    }
 
 
    //����ol�е�һ��li�б�����ɫ
    olObj.children[0].className = "current";
    //��¡һ��ul�е�һ��li,���뵽ul�е����=====��¡
    ulObj.appendChild(ulObj.children[0].cloneNode(true));
 
    var timeId=setInterval(onmouseclickHandle,3000);
    //���ҽ���ʵ�ֵ���л�ͼƬ����
    box.onmouseover=function () {
        arr.style.display="block";
        clearInterval(timeId);
    };
    box.onmouseout=function () {
        arr.style.display="none";
        timeId=setInterval(onmouseclickHandle,3000);
    };
 
    right.onclick=onmouseclickHandle;
    function onmouseclickHandle() {
        //���pic��ֵ��5,ǡ����ul��li�ĸ���-1��ֵ,��ʱҳ����ʾ������ͼƬ,���û�����Ϊ���ǵ�һ��ͼ,
        //����,����û��ٴε����ť,�û�Ӧ�ÿ����ڶ���ͼƬ
        if (pic == list.length - 1) {
            //��δӵ�6��ͼ,��ת����һ��ͼ
            pic = 0;//������pic=0
            ulObj.style.left = 0 + "px";//��ul��λ�û�ԭ�ɿ�ʼ��Ĭ��λ��
        }
        pic++;//��������pic��1,��ô��ʱ�û��ͻῴ���ڶ���ͼƬ��
        animate(ulObj, -pic * imgWidth);//pic��0��ֵ��1֮��,pic��ֵ��1,Ȼ��ul�ƶ���ȥһ��ͼƬ
        //���pic==5˵��,��ʱ��ʾ��6��ͼ(�����ǵ�һ��ͼƬ),��һ��С��ť����ɫ,
        if (pic == list.length - 1) {
            //�������ť��ɫ�ɵ�
            olObj.children[olObj.children.length - 1].className = "";
            //��һ����ť��ɫ������
            olObj.children[0].className = "current";
        } else {
            //�ɵ����е�С��ť�ı�����ɫ
            for (var i = 0; i < olObj.children.length; i++) {
                olObj.children[i].removeAttribute("class");
            }
            olObj.children[pic].className = "current";
        }
    }
    left.onclick=function () {
        if (pic==0){
            pic=list.length-1;
            ulObj.style.left=-pic*imgWidth+"px";
        }
        pic--;
        animate(ulObj,-pic*imgWidth);
        for (var i = 0; i < olObj.children.length; i++) {
            olObj.children[i].removeAttribute("class");
        }
        //��ǰ��pic������Ӧ�İ�ť������ɫ
        olObj.children[pic].className = "current";
    };
 
    //���������һ��Ԫ��,�ƶ���ָ����Ŀ��λ��
    function animate(element, target) {
        clearInterval(element.timeId);
        //��ʱ����idֵ�洢�������һ��������
        element.timeId = setInterval(function () {
            //��ȡԪ�صĵ�ǰ��λ��,��������
            var current = element.offsetLeft;
            //ÿ���ƶ��ľ���
            var step = 20;
            step = current < target ? step : -step;
            //��ǰ�ƶ���λ��
            current += step;
            if (Math.abs(current - target) > Math.abs(step)) {
                element.style.left = current + "px";
            } else {
                //����ʱ��
                clearInterval(element.timeId);
                //ֱ�ӵ���Ŀ��
                element.style.left = target + "px";
            }
        }, 10);
    }