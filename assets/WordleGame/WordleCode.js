function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var WordLength = 5;
var Gusses = 6;
var Boardes = 1;

var GameRunning = false;

var CurrentString = "";
var CurrentLine = 0;

var Board_Wins = []; 
var Board_Words = [];

var UsedChars = "";

var _Words = [
    _Words1,    //  0
    _Words2,    //  1
    _Words3,    //  2 
    _Words4,    //  3 
    _Words5,    //  4 
    _Words6,    //  5 
    _Words7,    //  6 
    _Words8,    //  7 
    _Words9,    //  8 
    _Words10,   //  9
    _Words11,   //  10
    _Words12,   //  11 
    _Words13,   //  12 
    _Words14,   //  13 
    _Words15,   //  14 
    _Words16,   //  15 
    _Words17,   //  16 
    _Words18,   //  17 
    _Words19,   //  18 
    _Words20,   //  19
    _Words21,   //  20 
    _Words22,   //  21 
    _Words23,   //  22 
    _Words24,   //  23 
    _Words25,   //  24 
    _Words26,   //  25
                //  26
]

window.onload = () => {
    for(var i = 0; i < 3; i++){
        document.getElementsByClassName("Input")[i].getElementsByTagName("input")[0].addEventListener("keydown", e => e.preventDefault());
    }
};
function StartGameBtn(){
    if (GameRunning == true) return;
    
    WordLength = document.getElementById(1).value;
    Gusses = document.getElementById(2).value;
    Boardes = document.getElementById(3).value;
    
    Board_Wins = []; 
    Board_Words = [];

    CurrentString = ""
    CurrentLine = 0;

    const EndText = document.getElementsByClassName("EndText")[0];
    EndText.style.color = "green";    
    EndText.style.display = "none";
    EndText.innerHTML = "Placeholder Text";
    
    console.clear();

    for(var k = 0; k < Boardes; k++){
        var word = _Words[WordLength - 1][Math.floor(Math.random() * _Words[WordLength - 1].length)];
        Board_Words.push(word.toLowerCase());
        console.log(Board_Words[Board_Words.length - 1]);
        Board_Wins.push(false);
        document.getElementsByClassName("Bordes")[0].innerHTML += "<div class='Lines'></div>"
        for(var j = 0; j < Gusses; j++){
            document.getElementsByClassName("Bordes")[0].getElementsByClassName("Lines")[k].innerHTML += "<div class='Letters'></div>"
            for(var i = 0; i < WordLength; i++){
                document.getElementsByClassName("Bordes")[0].getElementsByClassName("Lines")[k].getElementsByClassName("Letters")[j].innerHTML += "<div class='Letter' id='0'> </div>";
            }
        }
    }
    document.getElementsByClassName("TheWords")[0].innerHTML = "";
    var Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(var i = 0; i < Chars.length; i++){
        document.getElementsByClassName("CharDivs")[0].innerHTML += "<div class='CharDiv'>" + Chars[i] + "</div>";
    }

    SetLine();
    document.getElementById("Before").style.height = "0px";
    document.getElementById("After").style.height = "100%";

    GameRunning = true;

}
function LeaveGameBtn(){
    document.getElementById("Before").style.height = "500px";
    document.getElementById("After").style.height = "0px";

    var CharDivs = document.getElementsByClassName("CharDiv");
    const count = CharDivs.length;
    for(var i = 0; i < count; i++){
        CharDivs[0].remove();
    }

    UsedChars = "";

    sleep(1000).then(() => {
        for(var j = 0; j < Boardes; j++){
            var l = document.getElementsByClassName("Lines").length;
            for(var i = 0; i < l; i++){
                document.getElementsByClassName("Lines")[0].remove();
            }
        }
    });
    GameRunning = false;
}
document.addEventListener("keydown", function(e)
{
    if (!GameRunning) return;
    var ValidChars = "abcdefghijklmnopqrstuvwxyz "
    if (ValidChars.includes(e.key.toLowerCase())) UpdateText(e.key.toUpperCase());
    else if (e.key == "Backspace") RemoveChar();
    else if (e.key == "Enter") CheckLine();
});
function UpdateText(char){
    //console.log("RemoveChar() - add text");
    if (CurrentString.length < WordLength){
        CurrentString += char;
        for(var i = 0; i < Boardes; i++){
            if (!Board_Wins[i]){
                document.getElementsByClassName("Bordes")[0]
                .getElementsByClassName("Lines")[i]
                .getElementsByClassName("Letters")[CurrentLine]
                .getElementsByClassName("Letter")[CurrentString.length - 1].innerHTML = char;
            }
        }
    }
    SetLine();
}
function RemoveChar(){
    //console.log("RemoveChar() - remove Char");
    if (CurrentString.length > 0){
        for(var i = 0; i < Boardes; i++){
            document.getElementsByClassName("Bordes")[0]
            .getElementsByClassName("Lines")[i]
            .getElementsByClassName("Letters")[CurrentLine]
            .getElementsByClassName("Letter")[CurrentString.length - 1].innerHTML = " ";
        }
        CurrentString = CurrentString.substring(0, CurrentString.length - 1);
    }
    SetLine();
}
function CheckLine(){
    //console.log("CheckLine() - enter pressed");
    function ValidWord(word, set) { return _Words[set].includes(word.toLowerCase()); }
    function SetCharState(element, id){
        if (id == 1) {
            element.style.backgroundColor = "#3cd24d";
            element.style.color = "white";
        }
        else if (id == 2) element.style.backgroundColor = "#dabd38";
        else if (id == 3) {
             element.style.backgroundColor = "#a6a6a4";
             element.style.color = "#656565";
        }
    }

    if (CurrentString.includes(" ") || CurrentString.length != WordLength || !ValidWord(CurrentString, WordLength - 1)) return;
    
    for(var i = 0; i < Boardes; i++){
        for(var j = 0; j < WordLength; j++){
            if (!Board_Wins[i]){
                var letter = document.getElementsByClassName("Bordes")[0]
                .getElementsByClassName("Lines")[i]
                .getElementsByClassName("Letters")[CurrentLine]
                .getElementsByClassName("Letter")[j];
                var char = letter.innerHTML.toLowerCase();
                if (Board_Words[i].includes(char))
                    if (Board_Words[i][j] == char)
                        SetCharState(letter, 1);
                    else
                        SetCharState(letter, 2);
                else
                    SetCharState(letter, 3);
            }
        }
    }
    for(var i = 0; i < Boardes; i++){
        if (Board_Words[i] == CurrentString.toLowerCase()){
            Board_Wins[i] = true;
            if (Board_Wins.every(x => x)){
                document.getElementsByClassName("EndText")[0].style.color = "green";    
                document.getElementsByClassName("EndText")[0].style.display = "block";
                document.getElementsByClassName("EndText")[0].innerHTML = "You Win";
                GameRunning = false;
            }
        }
    }
    console.log(Board_Wins);
    UsedChars += CurrentString;
    CurrentLine++;
    CurrentString = "";
    SetLine();
    UpdateUsed();
    if (GameRunning)
    {
        if (CurrentLine >= Gusses){
            document.getElementsByClassName("EndText")[0].style.color = "red";    
            document.getElementsByClassName("EndText")[0].style.display = "block";
            document.getElementsByClassName("EndText")[0].innerHTML = "You looser";
            for(var i = 0; i < Board_Words.length; i++){
                document.getElementsByClassName("TheWords")[0].innerHTML += "<div class='FinishWords'>" + Board_Words[i] +"</div>";
            }
            GameRunning = false;
        }
    }
}
function SetLine(){
    for(var i = 0; i < Boardes; i++){
        for(var j = 0; j < Gusses; j++){
            for(var k = 0; k < WordLength; k++){
                var Line = document.getElementsByClassName("Bordes")[0].
                getElementsByClassName("Lines")[i].
                getElementsByClassName("Letters")[j].
                getElementsByClassName("Letter")[k];
                if (!Board_Wins[i])
                {
                    if (j < CurrentLine){
                        Line.classList.add("_1");
                        Line.classList.remove("_2");
                        Line.classList.remove("_3");
                        Line.classList.remove("_4");
                    }
                    if (j == CurrentLine){
                        Line.classList.remove("_1");
                        if (k == CurrentString.length){
                            Line.classList.add("_2");
                            Line.classList.remove("_4");
                        }
                        else{
                            Line.classList.remove("_2");
                            Line.classList.add("_4");
                        }
                        Line.classList.remove("_3");
                    }
                    if (j > CurrentLine){
                        Line.classList.remove("_1");
                        Line.classList.remove("_2");
                        Line.classList.add("_3");
                        Line.classList.remove("_4");
                    }
                }
            }
        }
    }
}
function UpdateUsed(){
    var CharDivs = document.getElementsByClassName("CharDiv");
    for(var i = 0; i < CharDivs.length; i++){
        if (UsedChars.includes(CharDivs[i].innerHTML)){
            CharDivs[i].style.display = "none";
        }
    }
}