setInterval(UpdateSecond, 1000);
setInterval(UpdateMillisecond, 1);
setInterval(UpdateHalfSecond, 500);

function Btn(){
    Log("Newst:" + TimeUntilDate(document.getElementById("1").value, document.getElementById("2").value))
}

function Btn2(){
    function r(i){ return Math.floor(Math.random() * (i + 1)); }
    document.getElementById("3").innerHTML = FormatTime(1800 + r(300), r(12), r(30), r(23), r(59), r(59), r(999)) + 
    " | " +
    FormatTime(1800 + r(300), r(12), r(30), r(23), r(59), r(59), r(999));
}

var ScreenRotation = 70;

function UpdateMillisecond() { 
    function CalcToCrist(){
        var d = TimeUntilDate(GetCurrentTime(), GetChristmasStart());
    
        var Els = [
            document.getElementsByClassName("mo"),
            document.getElementsByClassName("d"),
            document.getElementsByClassName("hr"),
            document.getElementsByClassName("min"),
            document.getElementsByClassName("sec"),
            document.getElementsByClassName("msec")
        ]
        var f = [
            GetMonth(d),
            GetDay(d),
            GetHour(d),
            GetMinute(d),
            GetSecond(d),
            GetMillisecond(d),
        ]
        for (var x = 0; x < Els.length; x++) {
            for (var i = 0; i < Els[x].length; i++) {
                Els[x][i].getElementsByTagName("h1")[0].innerHTML = f[x];
            }
        }
        document.getElementsByClassName("dt")[0].getElementsByTagName("h1")[0].innerHTML = CristmasDay() - GetDayOfYear(GetCurrentTime()) - 1;
    }
    function CalcSinceCrist(){
        var d = TimeUntilDate(GetLastChristmasEnd(), GetCurrentTime());
        var Els = [
            document.getElementsByClassName("mo2"),
            document.getElementsByClassName("d2"),
            document.getElementsByClassName("hr2"),
            document.getElementsByClassName("min2"),
            document.getElementsByClassName("sec2"),
            document.getElementsByClassName("msec2")
        ]
        var f = [
            GetMonth(d),
            GetDay(d),
            GetHour(d),
            GetMinute(d),
            GetSecond(d),
            GetMillisecond(d),
        ]
        for (var x = 0; x < Els.length; x++) {
            for (var i = 0; i < Els[x].length; i++) {
                Els[x][i].getElementsByTagName("h1")[0].innerHTML = f[x];
            }
        }
    }
    function CalcToCrist2(){
        var d = TimeUntilDate(GetCurrentTime(), GetChristmasStart());
    
        var Els = [
            document.getElementsByClassName("mo3"),
            document.getElementsByClassName("d3"),
            document.getElementsByClassName("w"),
            document.getElementsByClassName("hr3"),
            document.getElementsByClassName("min3"),
            document.getElementsByClassName("sec3"),
            document.getElementsByClassName("msec3")
        ]
        var ct = GetCurrentTime();
        var day = CristmasDay() - GetDayOfYear(ct) - 1;
        var f = [
            GetMonth(d),
            day,
            (day) / 7,
            (day * 24) + GetHour(d),
            (((day * 24) + GetHour(d)) * 60) + GetMinute(d),
            (((((day * 24) + GetHour(d)) * 60) + GetMinute(d)) * 60) + GetSecond(d),
            (((((((day * 24) + GetHour(d)) * 60) + GetMinute(d)) * 60) + GetSecond(d)) * 1000) + GetMillisecond(d),
        ]
        for (var x = 0; x < Els.length; x++) {
            for (var i = 0; i < Els[x].length; i++) {
                Els[x][i].getElementsByTagName("h1")[0].innerHTML = f[x];
            }
        }
    }
    function CalcCurretnTime(){
        var d = GetCurrentTime();
    
        var Els = [
            document.getElementsByClassName("yr0"),
            document.getElementsByClassName("mo0"),
            document.getElementsByClassName("d0"),
            document.getElementsByClassName("hr0"),
            document.getElementsByClassName("min0"),
            document.getElementsByClassName("sec0"),
            document.getElementsByClassName("msec0")
        ]
        var f = [
            GetYear(d),
            GetMonth(d),
            GetDay(d),
            GetHour(d),
            GetMinute(d),
            GetSecond(d),
            GetMillisecond(d),
        ]
        for (var x = 0; x < Els.length; x++) {
            for (var i = 0; i < Els[x].length; i++) {
                Els[x][i].getElementsByTagName("h1")[0].innerHTML = f[x];
            }
        }
    }
    CalcCurretnTime();
    CalcToCrist();
    CalcSinceCrist();
    CalcToCrist2();
}
function UpdateHalfSecond(){
    document.getElementsByTagName("html")[0].style.background = "linear-gradient(" + ScreenRotation + "deg, black, gray)";
    ScreenRotation += 1;
}
function UpdateSecond(){
    document.getElementById("is").innerHTML = `${IsChristmas()}`;
}

//Date: yyyy mm dd
//Time: yyyy mm dd hh mm ss msms

function TimeUntilDate(StartTime, EndTime){    
    var off = [0, 12, GetMonthDays(GetYear(EndTime), GetMonth(EndTime) - 1 == -1 ? 12 : GetMonth(EndTime) - 1), 24, 60, 60, 1000];
    var f = [GetYear, GetMonth, GetDay, GetHour, GetMinute, GetSecond,GetMillisecond];
    var out = [0, 0, 0, 0, 0, 0, 0]
    for (var i = 0; i < 7; i++){
        if (f[i](EndTime) - f[i](StartTime) < 0){
            out[i] = (f[i](EndTime) + off[i]) - f[i](StartTime);
            out[i - 1]--;
            for (var j = i - 1; j > 0; j--){ // j == i
                if (out[j] < 0){
                    out[j] += off[j];
                    out[j - 1]--;
                }
            }
        }
        else out[i] = f[i](EndTime) - f[i](StartTime);
    }
    //Log([out[0], out[1], out[2], out[3], out[4], out[5], out[6]]);
    var d = FormatTime(out[0], out[1], out[2], out[3], out[4], out[5], out[6]);
    if (d.includes("-")) return "Invalid Dates";
    else return d;
}
function FormatTime(years, months, days, hours, minutes, seconds, milliseconds){
    var SpaceMax = [4, 2, 2, 2, 2, 2, 4]
    var Values = [years, months, days, hours, minutes, seconds, milliseconds]
    var Out = "";
    for (var x = 0; x < Values.length; x++) {
        for (var i = 0; i < SpaceMax[x] - Values[x].toString().length; i++) {
            Out += "0";
        }
        Out += Values[x] + " ";
    }
    return Out;
};

//dateTime: date or time
function GetYear(dateTime) { return parseInt(dateTime.substring(0, 4));}
function GetMonth(dateTime){ return parseInt(dateTime.substring(5, 7)); };
function GetDay(dateTime) { return parseInt(dateTime.substring(8, 10)); };
function GetHour(time) { return parseInt(time.substring(11, 13));}
function GetMinute(time){ return parseInt(time.substring(14, 16)); };
function GetSecond(time) { return parseInt(time.substring(17, 19)); };
function GetMillisecond(time) { return parseInt(time.substring(20, 24)); };

function GetDaysInYear(year) { return GetLeapYear(year) ? 366 : 365; };
function GetLeapYear(year) { return year % 4 == 0 ? year % 100 == 0 ? year % 400 != 0 : true : false; };
function GetDayOfYear(dateTime) { for(var i = 0, num = GetDay(dateTime); i < GetMonth(dateTime) - 1; i++) { num += GetMonthDays(GetYear(dateTime), i + 1)  } return num; };
function GetMonthDays(year, month) { return month == 2 ? ((GetLeapYear(year) ? 29 : 28)) : (month % 2 == 0 ? (month < 8 ? 30 : 31) : (month < 8 ? 31 : 30)); };

function GetCurrentTime(){
    return FormatTime(new Date(Date.now()).getFullYear(), new Date(Date.now()).getMonth() + 1, new Date(Date.now()).getDate(), new Date(Date.now()).getHours(),new Date(Date.now()).getMinutes(),new Date(Date.now()).getSeconds(),new Date(Date.now()).getMilliseconds())
}
function GetChristmasStart(){
    return `${new Date(Date.now()).getFullYear()} 12 25 00 00 00 0000`;
}
function GetChristmasEnd(){
    return `${new Date(Date.now()).getFullYear()} 12 25 23 59 59 0999`;
}
function IsChristmas(){
    return GetDayOfYear(GetChristmasStart()) == GetDayOfYear(GetCurrentTime()) ? "Yes" : "No";
}
function DaysInYear(){
    return GetLeapYear(GetCurrentTime()) ? 365 : 365;
}
function CristmasDay(){
    return GetLeapYear(GetCurrentTime()) ? 360 : 359;
}
function GetLastChristmasEnd(){
    return `${(new Date(Date.now()).getFullYear() - 1)} 12 25 23 59 59 0999`;
}


function ToMilliseconds(time) { return (GetHour(time) * 3600000) + (GetMinute(time) * 60000) + (GetSecond(time) * 1000) + GetMillisecond(time); }

function Log(Prams) { console.log("Log: " + Prams); }