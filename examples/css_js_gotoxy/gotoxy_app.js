let element = document.getElementById("object");

var w = window.innerWidth;
var h = window.innerHeight;

function tgotoxy(object, x, y)
{
    sx="translateX("+x.toString() + "px" + ")";
    sy="translateY("+y.toString() + "px" + ")";
    str="translate("+x.toString()+"px"+","+y.toString()+"px"+ ") ";
    object.style.transform = str;
}

/*This is pixel movement 
 * 
 * In mac I am seeing more pixels from top to bottom than left to right
 * 
 */

function gotoxy(object, x, y)
{
    sx=x.toString() + "px";
    sy=y.toString() + "px";
    object.style.paddingLeft = sx;
    object.style.paddingTop = sy;
}

/* Inverse gotoxy
 */
function igotoxy(object, x, y)
{
    var w = window.innerWidth;
    var h = window.innerHeight;
    tx = w - x;
    ty = h - y;
    sx=tx.toString() + "px";
    sy=ty.toString() + "px";
    object.style.paddingLeft = sx;
    object.style.paddingTop = sy;
}

gotoxy(element, 200, 200);
//igotoxy(element, 200, 200);
