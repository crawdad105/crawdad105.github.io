
const VideoImg = [
    "https://i.ytimg.com/vi/F941ye2OyUU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWZ7LYUnUYTtk-R6Iys7RYJd3Lqw",
    "https://i.ytimg.com/vi/ZMq894mltZc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMdG-KYxZ4qZ2DQnhlRn3jepaqpQ",
    "https://i.ytimg.com/vi/eASzl6B6de4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRafmUIjBthhUWFn-l8gc-KcAhkQ",
    "https://i.ytimg.com/vi/gyFvupAErQ0/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAtYDigIMCAAQARhlIEQoVTAP&rs=AOn4CLD8aSRGFQfDUhAOqOXJHhQMAPcL2A",
    "https://i.ytimg.com/vi/yIN95ZiVDBs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCG8wlHnwKMaGy_HuINK73F8kHzXg",
    "https://i.ytimg.com/vi/xaDlOXLmUu8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA7gZ_h-SoxUawNuxTGjSF4UwAoXA",
    "https://i.ytimg.com/vi/RwlArabTF20/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3ykcuWs61puDwyRWANcA-06pQ8w",
    "https://i.ytimg.com/vi/_ZYR8mmtvpw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNm7E5E5MAeXwVuV4Nxzivejcfrw",
    "https://i.ytimg.com/vi/fjL6qI9uF4w/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_2wMH-tOd-IKL-U44pAX1HKEV5A",
    "https://i.ytimg.com/vi/3eubux7u2Js/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6qjXjHIydca_J6TolHNBA36yUgw",
    "https://i.ytimg.com/vi/5Smjf1d1ztw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCv_ZmVTOw_AFIf_wSp7VGT0ucNFw",
    "https://i.ytimg.com/vi/zqwpHwlB7oo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDc4kwPfMg6ORR832RCs2gLJ-Zq6g",
    "https://i.ytimg.com/vi/i6k8OqcBlvk/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGAoVjAP&rs=AOn4CLDByXL4HLn0p8x7qAyRopCFUdBXlg",
    "https://i.ytimg.com/vi/Qcn-CwKd06A/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDj1KKjYrBbEX92dCtMhviDRPLx_A",
    "https://i.ytimg.com/vi/XKpDIZQxxXo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRR7K7KH3FfB4NweP5Yk-swDi3UA",
    "https://i.ytimg.com/vi/Ij5fSdQCRb0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDI_mT0wkQjso8k81bXUyxbHEmR-w",
    "https://i.ytimg.com/vi/CrmAxjmQYww/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCtCajNskyt5ZpTnEUwW5UTrYMVDQ",
    "https://i.ytimg.com/vi/ZcrRJzjgryY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAn4q0ZXh247tuSaUymJ5cLQduXvA",
    "https://i.ytimg.com/vi/sR79vmHg-rE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBA28N9Gf3lWqd9NiyyFutb4xyeLQ",
    "https://i.ytimg.com/vi/wAoqr7VKDS4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDME27xAChXFDMxZuomuLqEzXk4Q",
];

const VideoName = [
    "The Most Limited Terraria Sky Block Map Possible.",
    "Breaking and Hacking Terraria... (don't sue me Relogic)",
    "I Created an Auto Fisher in Terraria",
    "TerraBlock Slander",
    "Is Bean Simulator the best game?",
    "Entire History of TerraBlock. So far...",
    "Speed Running Terraria In Ohio (Sub 4:20)",
    "I Win",
    "Cheese Forest | Trailer",
    "Building a house (real) | Dome Depot smp | Ep 1",
    "Beating the Twins And the Queen Slime | TerraBlock Ep.4",
    "Christmas hall EXTREEM!!1!1 (new ps6??!, new I phone 26??!, new fortnite?!1?1) (4k and 60fps!!11!)",
    "How to get eaten by me (reupload, 8k, 60fps)",
    "Killing Skelitron in TerraBlock with only 100 health | TerraBlock Ep.3",
    "Wide cat walking (real) #cat",
    "Actuly Killing the Wall of Flesh and Getting a Bow in TerraBlock | TerraBlock Ep.2",
    "surviving 1 day in minecraft hardcore mod (impossible)",
    "Eating Santa Claus (real) (not click bait)",
    "Killing the Wall of Flesh in TerraBlock | TerraBlock Ep.1",
    "The world hardest terraria skyblock! | TerraBlock Ep.0",
];

const VideoDesc = [
    "This is the ultimate video for people intrested in sky islands maps.",
    "In this video I hack Terraria.",
    "I created a terraria auto fisher",
    "TerrBlock Slander",
    "Ever wanted to know if Bean simulator is a good game?",
    "This video is 1 year recap of what happend in the TerraBlock world.",
    "Cursed video of speedruning terraria.",
    "I chalanged Cramer Studios to 75 subscribers... I Won",
    "Cheese Forest is a game i made and here is the traler for it.",
    "Episode 1 of the Dome Depot SMP (the only video of it)",
    "TerraBlock Ep.4 Beating some crucial bosses.",
    "Video of me pretending i got stop for cristmass but it was upleaded 1 day before christmass",
    "Reuplead of a pupulare video posted many years ago but in 8K",
    "TerraBlock Ep.3 Killing Skelitron and King Slime",
    "My cat but wider",
    "TerraBlock Ep.2 After thefirst attept at the wall of flesh failed we tried again and killed it.",
    "I definitly did not sheat while beating minecraft in 1 day.",
    "Walter white eats Santa Claus and died",
    "TerraBlock Ep.1 The first actual gameplay video of TerraBlock",
    "Intraduction to the infamus TerraBlock",
];

var MouseOnScroll = false;
var Scrolling = false;
var _1 = 0;
var _2 = 0;

var isMouseOnVideoBox = false;

window.addEventListener("load", function(){
    for(var i = 0; i < VideoImg.length; i++) {
        const c1 = `class="VideoBox"`;
        const c2 = `style="background-image: url(${VideoImg[i]});"`;
        const c3 = `onmouseover='MouseOnVideoBox(${i})'`;
        const c4 = `onclick='UpdateVideoPlayer(${i})'`;
        document.getElementById("Scroll").innerHTML += `<div ${c1} ${c2} ${c3} ${c4}></div>`;
    }
    
    document.getElementById("Scroll").addEventListener("mouseup", (e) => { _2 = document.getElementById("Scroll").scrollLeft; Scrolling = false;});
    document.getElementById("Scroll").addEventListener("mouseleave", (e) =>{ if (Scrolling) {_2 = document.getElementById("Scroll").scrollLeft; Scrolling = false;} MouseOnScroll = false; });
    document.getElementById("Scroll").addEventListener("mousedown", (e) => { _1 = e.clientX; Scrolling = true;});
    document.getElementById("Scroll").addEventListener("mousemove",  (e) => { if (Scrolling) { document.getElementById("Scroll").scrollLeft = -(e.clientX) + _1 + _2; } });
    document.getElementById("Scroll").addEventListener("mouseover",  (e) => { MouseOnScroll = true; });
    
    document.addEventListener("wheel", (e) => {
        if (MouseOnScroll) document.getElementById("Scroll").scrollLeft -= (e.deltaY / 3);
        _2 = document.getElementById("Scroll").scrollLeft;
    });
    this.document.addEventListener("mousemove", MouseMove);
});

function MouseMove(e){
    if (isMouseOnVideoBox){
        if (e.clientY > 270){
            isMouseOnVideoBox = false;
            document.getElementById("Info").style.height = "0px";
            document.getElementById("Info").style.marginBottom = "105px";
            document.getElementById("Info").getElementsByTagName("h3")[0].style.color = "#ffffff00";
            document.getElementById("Info").getElementsByTagName("p")[0].style.color = "#ffffff00";
        }
    }
}

function MouseOnVideoBox(num){
    isMouseOnVideoBox = true;
    document.getElementById("Info").style.height = "100px";
    document.getElementById("Info").style.marginBottom = "5px";
    document.getElementById("Info").getElementsByTagName("img")[0].src = VideoImg[num];
    document.getElementById("Info").getElementsByTagName("h3")[0].innerHTML = VideoName[num];
    document.getElementById("Info").getElementsByTagName("p")[0].innerHTML = VideoDesc[num];
    document.getElementById("Info").getElementsByTagName("h3")[0].style.color = "#e1d4e7";
    document.getElementById("Info").getElementsByTagName("p")[0].style.color = "#d2b2e1";
}
function UpdateVideoPlayer(num){
    console.log("Presed");
    var text1 = VideoImg[num];
    var text2 = "";
    for(var i = 23 ; i < 34; i++){
        text2 += text1[i];
    }
    document.getElementById("Video").getElementsByTagName("iframe")[0].src = `https://www.youtube.com/embed/${text2}`;
}