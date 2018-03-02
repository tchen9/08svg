var svg = document.getElementById("s");

var a1 = document.getElementById("animate1");
var a2 = document.getElementById("animate2");
var clear = document.getElementById("clear");
var anim;

var animate1 = function(){
    var rad = 1;
    var growth = 1;

    var go = function(){
	erase();
	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c.setAttribute("cx", svg.width.baseVal.value/2);
	c.setAttribute("cy", svg.height.baseVal.value/2);
	c.setAttribute("r", rad);
	c.setAttribute("fill", "black");
	svg.appendChild(c);
	rad = rad + growth;

	if (rad == 0 || rad == svg.width.baseVal.value/2){
	    growth = growth * -1;
	}
    }
    anim = setInterval(go, 10);
}

a1.addEventListener("click", animate1);

var animate2 = function(){

    var x = 40;
    var xchange = Math.abs(Math.floor(Math.random()*10 - 5));
    var y = 100;
    var ychange = Math.abs(Math.floor(Math.random()*10 - 5));
    var rad = 20;
    
    var go = function(){
	erase();
	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c.setAttribute("cx", x);
	c.setAttribute("cy", y);
	c.setAttribute("r", rad);
	c.setAttribute("fill", "black");
	svg.appendChild(c);

	x = x + xchange;
	y = y + ychange;

	if (x <= rad || x >= svg.width.baseVal.value - rad){
	    xchange = -1 * xchange;
	}
	if (y <= rad || y >= svg.height.baseVal.value - rad){
	    ychange = -1 * ychange;
	}

	console.log(x);
	console.log(y);
    }

    anim = setInterval(go, 10);
}

a2.addEventListener("click", animate2)

var erase = function(){
    svg.innerHTML = "";
}

var stop = function(){
    clearInterval(anim);
    anim = null;
    erase();
}

clear.addEventListener("click", stop);
