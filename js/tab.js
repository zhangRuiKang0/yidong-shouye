window.onload=function(){
	//先获取元素
	var nav_right=$(".nav_right");
	var item=$(".item");
	for(var i=0;i<nav_right.length;i++){
		/*先执行的循环后执行的事件，所以当触发事件时
		i=4，报错。解决方法：要给每个元素添加属性*/
		nav_right[i].index=i;
		nav_right[i].onmouseover=function(){
			//this指移到哪个元素就是谁
			item[this.index].style.display="block";
		}
		nav_right[i].onmouseout=function(){
			item[this.index].style.display="none";
		}
	}
var win=$(".banner_middle")[0];//窗口
var as=$("a",win);//img
var lis=$("li",$(".point")[0]);
var width=parseInt(getStyle(as[0],"width"));
var num=0;
var next=0;
var btnl=$(".btnl")[0];
var btnr=$(".btnr")[0];
//就位
for (var i = 0; i < as.length; i++) {
	if(i==0){
		continue;
	}
	as[i].style.left=width+"px";
};

var t=setInterval(moveL,2000);

win.onmouseover=function(){
	clearInterval(t);
};
win.onmouseout=function(){
	t=setInterval(moveL,2000);
};

//点点点变图

for (var i = 0; i < lis.length; i++) {
	lis[i].index=i;
	lis[i].onclick=function(){
       if (num==this.index) {
			return;
		};
		as[this.index].style.left=width+"px";
	  lis[num].className="";
	  lis[this.index].className="hot";
		animate(as[num],{left:-width});
		animate(as[this.index],{left:0});
		next=this.index;
		num=this.index;
	}
};

//点左右小框换图
var flag=true;
btnl.onclick=function(){
	if (flag) {
		flag=false;
		moveR();};
	
};
btnr.onclick=function(){
	if (flag) {
		flag=false;
		moveL();};
	
};



function moveL(){
	next++;
	if (next==as.length) {next=0};
	//就位
	as[next].style.left=width+"px";
	//按钮
	lis[num].className="";
	lis[next].className="hot";
     //动画
	animate(as[num],{left:-width});
	animate(as[next],{left:0},function(){
    	flag=true});
	//更新下标
	num=next;
}
function moveR(){
	next--;
	if(next<0){next=as.length-1};
	as[next].style.left=-width+"px";
	lis[num].className="";
	lis[next].className="hot";
	animate(as[num],{left:width});
	animate(as[next],{left:0},function(){
    	flag=true});
	num=next;
}
// 二维码
  var china=$(".china")[3];
  var erweima=$(".erweima")[0];
	
  china.onmouseover=function(){
  	
  	erweima.style.display="block";
    china.style.background="#fff";
  }
  china.onmouseout=function(){
  	erweima.style.display="none";
    china.style.background="#F6F6F6";
  }
 // 登录

   var china1=$(".china1")[0];
   var denglu=$(".denglu")[0];
      china1.onmouseover=function(){
      	denglu.style.display="block";
        china1.style.background="#fff";
      china1.onmouseout=function(){
      	denglu.style.display="none";
        china1.style.background="#F6F6F6";
       }
     }

var box=$(".huadong")[0];
nodeLunbo(box,1);
function nodeLunbo(obj,num){
var imgBox=$(".imgBox",obj)[0];
var ass=$("a",imgBox);
var kuan=parseInt(getStyle(ass[0],"width"))+10;
imgBox.style.width=kuan*ass.length+"px";
var t=setInterval(movel,2000);
var flag=true;
var Btnl=$(".Btnl",obj)[0];
var Btnr=$(".Btnr",obj)[0];


function movel(){
	animate(imgBox,{left:-num*kuan},function(){
		for (var i = 0; i < num; i++) {
		var first=firstChild(imgBox);
		imgBox.appendChild(first);
		imgBox.style.left=0;};
		flag=true;
	})
}

function mover(){
	for (var i = 0; i < num; i++) {
	var last=lastChild(imgBox);
	beforeChild(imgBox,last);
	imgBox.style.left=-num*kuan+"px";};
	animate(imgBox,{left:0},function(){
		flag=true;
	});
}


obj.onmouseover=function(){
	clearInterval(t);
}
obj.onmouseout=function(){
	t=setInterval(movel,2000);

}





Btnl.onclick=function(){
	if (flag) {flag=false;
	movel()};
}
Btnr.onclick=function(){
	if (flag) {flag=false;
	mover()};
};
}	
}


/*var list=$(".list");
var item=$(".item");

for (var i = list.length - 1; i >= 0; i--) {
	
list[i].index=i;
list[i].onmouseover=function(){
	item[this.index].style.display="block"
}
list[i].onmouseout=function(){
	item[this.index].style.display="none"
}
};*/
//闭包的方法
/*for (var i = 0; i < list.length; i++) {
	(function(n){
	list[n].onmouseover=function(){
	item[n].style.display="block"
}
list[n].onmouseout=function(){
	item[n].style.display="none"
}	
	})(i)
};*/
