canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var img_imgTag = ["Alpkey.png","Arrkey.png","numkey.png","otherkey.png","spkey.png"]

img_width = 300;
img_height = 100;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); 
	img_imgTag.onload = uploadimg(); 
	img_imgTag.src = uploadimg();
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}
window.addEventListener("keydown" , my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
           aplhabetkey();
		   document.getElementById("d1").innerHTML="You pressed Alphabet key";
		   console.log("alphabet key");    
		}
	    else
		{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
		console.log("other key");
	}
}

function aplhabetkey()
{
	img_imgTag="Alpkey.png";
	add();  

}
function numberkey()
{
	img_imgTag="numkey.png";
	add();
}
function arrowkey()
{
	img_imgTag="Arrkey.png";
	add();
}
function specialkey()
{
	img_imgTag="spkey.png";
	add();
}
function otherkey()
{
	img_imgTag="otherkey.png";
	add();
}
	
