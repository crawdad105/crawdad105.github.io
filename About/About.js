
function Contains(rect, x, y){
    return  (y >= rect.top && y <= rect.bottom) && (x >= rect.left && x <= rect.right);
}

function OnLoad(){
    
    Size = 200;
    PosX = 0;
    PosY = 0;
    back1 = "linear-gradient(-45deg,rgba(217, 0, 255, 1), rgba(162, 0, 255, 0.4)), ";
    back2 = "radial-gradient(circle 200px at " +  PosX + "px " + PosY + "px, rgba(99, 99, 99, 0.411) 0px, rgba(0, 0, 0, 0) 1000px)";
    document.getElementById("MouseRad").style.background = back1 + back2;

    document.getElementById("TextSpace").addEventListener("mousemove", function(e)
    {
        MouseX = e.clientX;
        MouseY = e.clientY;
        var rect = document.getElementById("TextSpace").getBoundingClientRect(); 
        CenterY = rect.bottom - (rect.height / 2);
        CenterX = rect.left + (rect.width / 2);
        document.getElementById("TextSpace").style.transform = `perspective(100px) rotateX(${(CenterY - MouseY) / 500}deg) rotateY(${-(CenterX - MouseX) / 2000}deg) `;
    });
    document.getElementById("TextSpace").addEventListener("mouseleave", function(e){
        document.getElementById("TextSpace").style.transform = `perspective(35px) rotateX(0deg) rotateY(0deg)`;
    });
}
window.addEventListener('load',OnLoad);

document.onpointermove = function(event)
{
    Size = 100;
    MouseX = event.clientX;
    MouseY = event.clientY;
    PosX = event.clientX - 20;
    PosY = event.clientY - 20;
    back1 = "linear-gradient(-45deg,rgba(217, 0, 255, 0.6), rgba(162, 0, 255, 0.4)), ";
    back2 = "radial-gradient(circle 200px at " +  PosX + "px " + PosY + "px, rgba(99, 99, 99, 0.6) 0px, rgba(0, 0, 0, 0) 500px)";
    document.getElementById("MouseRad").style.background = back1 + back2;
}