var svg = document.getElementById("s");

var a1 = document.getElementById("animate1");
var a2 = document.getElementById("animate2");
var clear = document.getElementById("clear");

var animate1 = function(){
    var rad = 1;
    var growth = 1;

    var go = function(){
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
    setInterval(go, 10)
}

a1.addEventListener("click", animate1);



var erase = function(){
    svg.innerHTML = "";
}

clear.addEventListener("click", erase);
