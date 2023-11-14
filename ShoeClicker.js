
shoeClicks = 0;
perClick = 1;
ClickPerSecond = 0;

upgrade1Cost = 10;
upgrade2Cost = 300;

function UpdateShoe(){
    shoeClicks += ClickPerSecond;
    if (shoeClicks > 10) document.getElementById("ShoeClicks").textContent = shoeClicks + " shoes";
}
setInterval(UpdateShoe, 1000);

function ShoeClick()
{
    shoeClicks += perClick;
    document.getElementById("ShoeClicks").textContent = shoeClicks + " shoes";
    if (shoeClicks > 9)
        document.getElementById("hiddenButton").classList.remove("hidden");
    if (shoeClicks > 299)
        document.getElementById("hiddenButton2").classList.remove("hidden");

}
function upgrade(UpgradeType){
    if (UpgradeType == "click"){
        if (shoeClicks >= upgrade1Cost)
        {
            perClick++;
            shoeClicks -= upgrade1Cost;
            upgrade1Cost = Math.round (upgrade1Cost * 2.5);
            document.getElementById("_clickUpgrade").value = "Upgrade click\nCost: " + upgrade1Cost + " shoes";
            document.getElementById("ShoeClicks").textContent = shoeClicks + " shoes";
        }
    }
    if (UpgradeType == "factory1"){
        if (shoeClicks >= upgrade2Cost)
        {
            ClickPerSecond += 5;
            shoeClicks -= upgrade2Cost;
            document.getElementById("_autoUpgrade1").classList.add("hidden");
            document.getElementById("ShoeClicks").textContent = shoeClicks + " shoes";
        }
    }

}
