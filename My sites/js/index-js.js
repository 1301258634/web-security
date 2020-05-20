//获取元素对象
var a=document.getElementsByClassName("nav_a");
var ul=document.getElementById("ul_img");
var  arrow=document.getElementsByClassName("arrow_a");

//为a的点击事件绑定响应函数
//实现点击右下方按钮跳转的功能
for(var i=0;i<a.length;i++){
    a[i].num=i;
    a[i].onclick=function(){
        for(var j=0;j<a.length;j++){
            a[j].style.backgroundColor="gray";
        } 
        ul.style.left=this.num*-1200+"px";
        this.style.backgroundColor="white";
        // alert(index);
        index=this.num;
       
    };
}
//保存一下当前的位置
var oldLeft=ul.offsetLeft;



arrow[0].onclick=function(){
    for(var j=0;j<a.length;j++){
        a[j].style.backgroundColor="gray";
    } 
    //var num=Math.abs(ul.offsetLeft)/1200;
    if(parseInt(ul.offsetLeft)!=-0){
        switch(ul.offsetLeft){
            case 0:a[2].style.backgroundColor="white";index=2;
            break;
            case -1200:a[0].style.backgroundColor="white";index=0;
            break;
            default:a[1].style.backgroundColor="white";index=1;
        };
        ul.style.left=ul.offsetLeft+1200+"px";
        
    }
    else if(parseInt(ul.offsetLeft)==0){ 
        ul.style.left=-2400+"px";
        a[a.length-1].style.backgroundColor="white";index=a.length-1;
    }
}
arrow[1].onclick=function(){
    for(var j=0;j<a.length;j++){
        a[j].style.backgroundColor="gray";
    }
    if(parseInt(ul.offsetLeft)!=-2400){
        switch(ul.offsetLeft){
            case 0:a[1].style.backgroundColor="white";index=1;
            break;
            case -1200:a[2].style.backgroundColor="white";index=2;
            break;
            default:a[0].style.backgroundColor="white";index=0;
        };
        ul.style.left=ul.offsetLeft-1200+"px";
       
    }
    else if(parseInt(ul.offsetLeft)==-2400){
        ul.style.left=0+"px";
        a[0].style.backgroundColor="white";
        index=0;
    }
};

// //创建一个计时器变量
 var index=0;
 a[0].style.backgroundColor="white";
//创建一个计时器
var timer=setInterval(function(){
    for(var j=0;j<a.length;j++){
        a[j].style.backgroundColor="gray";
    } 
    if(index>a.length-1){
        index=0;
    }
        ul.style.left=index*-1200+"px";
        a[index].style.backgroundColor="white";
   
    index++;
},2400);