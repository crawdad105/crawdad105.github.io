




var arr = [document.getElementsByClassName("TitleCont")[0]]
for (var i = 0; i < document.getElementsByClassName("TimeCont").length; i++) {
    arr.push(document.getElementsByClassName("TimeCont")[i]);
}
for (var i = 0; i < document.getElementsByClassName("TimeCont2").length; i++) {
    arr.push(document.getElementsByClassName("TimeCont2")[i]);
}
for (var i = 0; i < document.getElementsByClassName("TimeCont3").length; i++) {
    arr.push(document.getElementsByClassName("TimeCont3")[i]);
}

document.addEventListener("mousemove", (e) =>{
    for (var i = 0; i < arr.length; i++) {
        var pos = arr[i].getBoundingClientRect();
        var c1 = "rgba(255, 255, 255)";
        var c2 = "rgba(0, 0, 0, 0.4)";
        var size = 100;
        var bg = `radial-gradient(1px at ${e.clientX - pos.x}px ${e.clientY - pos.y}px, ${c1} 0px, ${c2} ${size}px) border-box`;
        arr[i].getElementsByClassName("BoxOutline")[0].style.background = bg;
        arr[i].getElementsByClassName("BoxOutline")[0].style.width = pos.width + "px";
    }
});