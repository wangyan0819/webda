/*
* @Author: Lenovo
* @Date:   2019-12-10 18:25:38
* @Last Modified by:   Lenovo
* @Last Modified time: 2019-12-21 20:19:35
*/
var over=function(){
	var s=document.getElementById("img1");
	s.style.width=parseInt(s.style.width)+10+"px";
	s.style.height=parseInt(s.style.height)+10+"px";
}
var out=function(){
	var s=document.getElementById("img1");
	s.style.width=parseInt(s.style.width)-10+"px";
	s.style.height=parseInt(s.style.height)-10+"px";
}

var over1=function(){
	var s=document.getElementById("img2");
	s.style.width=parseInt(s.style.width)+5+"px";
	s.style.height=parseInt(s.style.height)+5+"px";
}
var out1=function(){
	var s=document.getElementById("img2");
	s.style.width=parseInt(s.style.width)-5+"px";
	s.style.height=parseInt(s.style.height)-5+"px";
}
var over2=function(){
	var s=document.getElementById("img3");
	s.style.width=parseInt(s.style.width)+10+"px";
	s.style.height=parseInt(s.style.height)+10+"px";
}
var out2=function(){
	var s=document.getElementById("img3");
	s.style.width=parseInt(s.style.width)-10+"px";
	s.style.height=parseInt(s.style.height)-10+"px";
}
var over3=function(){
	var s=document.getElementById("img4");
	s.style.width=parseInt(s.style.width)+10+"px";
	s.style.height=parseInt(s.style.height)+10+"px";
}
var out3=function(){
	var s=document.getElementById("img4");
	s.style.width=parseInt(s.style.width)-10+"px";
	s.style.height=parseInt(s.style.height)-10+"px";
}
var over4=function(){
	var s=document.getElementById("img5");
	s.style.width=parseInt(s.style.width)+10+"px";
	s.style.height=parseInt(s.style.height)+10+"px";
}
var out4=function(){
	var s=document.getElementById("img5");
	s.style.width=parseInt(s.style.width)-10+"px";
	s.style.height=parseInt(s.style.height)-10+"px";
}
function goTo(s){
		location.hash = s; 
	}





var box=document.getElementById("box");
	var slider=document.getElementById("slider");
	var left=document.getElementById("left");
	var right=document.getElementById("right");
	var index=1;
	var timer;
	var isMoving=false;
	function next(){
			index++;
			animate(slider,{left:-500*index},function(){
				if(index===6){
					slider.style.left="-500px";
					index=1;
				}

			});
	}
	function per(){
			index--;
			animate(slider,{left:-500*index},function(){
				if(index===0){
					slider.style.left="-2500px";
					index=5;
				}

			});
	}


	var timer=setInterval(next,3000);
	box.onmouseover=function(){
		animate(left,{opacity:50});
		animate(right,{opacity:50});
		clearInterval(timer);
	}

	box.onmouseout=function(){
		animate(left,{opacity:0});
		animate(right,{opacity:0});
		timer=setInterval(next,3500);
	}
	right.onclick=next;
	left.onclick=per;


		
	function getStyle(obj,style) {  
		if(obj.currentStyle) 
		{  
		    return obj.currentStyle[style];  
		} 
		else 
		{  
		    return getComputedStyle(obj)[style];  
		}
	}
	var p=document.getElementById("p");
	function zimu(){
		var ids=setInterval(function(){
			var now=parseInt(getStyle(p,"left"));
				p.style.left=now-1+"px";
				if(now==-500){
			p.style.left=1100+"px";
		}

		}, 0.01);

	}
	zimu();

		function getStyle(obj, attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		} else {
			return getComputedStyle(obj, null)[attr];
		}
	}
	function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed=(json[attr]-now)/8;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 10)
}
