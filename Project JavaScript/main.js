var body = document.querySelector("body");
body.style.display="grid";
body.style.margin="0";
body.style.padding="0";
body.style.backgroundImage= "url(splash.jpg)";  //"#2F4F4F" | "#2196F3";
body.style.backgroundSize= "cover";
body.style.backgroundPosition= "center";
body.style.backgroundRepeat= "no-repeat";

// body.style.padding = "10px";

var W = window.innerWidth;
var pixW= Math.floor(W/40);
console.log(pixW);

var H = window.innerHeight;
var pixH= Math.floor(H/40);

body.style.marginTop=`${(H%40)/2}px`;
body.style.marginLeft=`${(W%40)/2}px`;

console.log(pixH);
var temp = "";
for (let a = 0; a < pixW; a++) {
    temp+="40px " 
}
body.style.gridTemplateColumns=temp;
var rows = "";
for (let a = 0; a < pixH; a++) {
    rows+="40px " 
}
body.style.gridTemplateRows=rows;
// body.style.gridTemplateRows=temp;
// console.log(temp);
for (var i = 0; i < pixW*pixH; i++) {
    let D = document.createElement("div");
	 
    D.addEventListener("mouseenter",()=>{
        console.log("aa")
        D.style.backgroundColor="#"+((1<<24)*Math.random()|0).toString(16);
    });
	
    D.addEventListener("onmousemove",()=>{
        console.log("aa")
        D.style.backgroundColor="";
    });
	
		D.style.transition = "all 0.1s linear 0s";
    body.appendChild(D);
    // D.innerText=i;
    console.log(i)
}
