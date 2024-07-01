for(i = 1; i < 21; i++){
    document.getElementById(i).style.display = "none";
}
var RNG = [];
var i = 0;
while(RNG.length < 10){
    var r = Math.ceil(Math.random() * 20);
    if(RNG.indexOf(r) === -1) RNG.push(r);
}
for(i = 0; i < 10; i++){
    document.getElementById(RNG.pop()).style.display = "inline-block";
}
// start setup ig

var None = document.getElementById(`diffNone`);
var Easy = document.getElementById(`diffEasy`);
var Medium = document.getElementById(`diffMedium`);
var Hard = document.getElementById(`diffHard`);

var NoneSt = document.getElementById(`diffNoneSt`);
var EasySt = document.getElementById(`diffEasySt`);
var MediumSt = document.getElementById(`diffMediumSt`);
var HardSt = document.getElementById(`diffHardSt`);

// None.addEventListener(`click`, noneChecked)
// Easy.addEventListener(`click`, easyChecked)
// Medium.addEventListener(`click`, mediumChecked)
// Hard.addEventListener(`click`, hardChecked)

var actj;

function deleteProgress() {
    for(var j = 1; j < 21; j++){
        actj = `act${j}`;
        localStorage.removeItem(actj);
    }
    location.reload();
}

var completion = 0;
completionist();
function completionist(){
    for(var k = 1; k <= 20; k++){
        if(localStorage.getItem(`act${k}`)){
            completion++;
        }
        document.getElementById(`completionist`).innerHTML = `${completion}/20`;
    }
}

function randomCards(){
    if(None.checked){
        for(i = 1; i < 21; i++){
            document.getElementById(i).style.display = "none";
        }
        var RNG = [];
        while(RNG.length < 10){
            var r = Math.ceil(Math.random() * 20);
            if(RNG.indexOf(r) === -1) RNG.push(r);
        }
        for(i = 0; i < 10; i++){
            document.getElementById(RNG.pop()).style.display = "inline-block";
        }
        document.getElementById(`containerer`).classList.remove(`px1056`);
        document.getElementById(`mainSection`).classList.add(`hAuto`);
    }else if(Easy.checked){
        for(i = 1; i < 21; i++){
            document.getElementById(i).style.display = "none";
        }
        var RNG = [];
        while(RNG.length < 8){
            var r = Math.ceil(Math.random() * 8);
            if(RNG.indexOf(r) === -1) RNG.push(r);
        }
        for(i = 0; i < 8; i++){
            document.getElementById(RNG.pop()).style.display = "inline-block";
        }
        document.getElementById(`containerer`).classList.add(`px1056`);
        document.getElementById(`mainSection`).classList.add(`hAuto`);
    }else if(Medium.checked){
        for(i = 1; i < 21; i++){
            document.getElementById(i).style.display = "none";
        }
        var RNG = [];
        while(RNG.length <8){
            var r = Math.ceil(Math.random() * 8 + 8);
            if(RNG.indexOf(r) === -1) RNG.push(r);
        }
        for(i = 0; i < 8; i++){
            document.getElementById(RNG.pop()).style.display = "inline-block";
        }
        document.getElementById(`containerer`).classList.add(`px1056`);
        document.getElementById(`mainSection`).classList.add(`hAuto`);
    }else if(Hard.checked){
        for(i = 1; i < 21; i++){
            document.getElementById(i).style.display = "none";
        }
        var RNG = [];
        while(RNG.length < 4){
            var r = Math.ceil(Math.random() * 4 + 16);
            if(RNG.indexOf(r) === -1) RNG.push(r);
        }
        for(i = 0; i < 4; i++){
            document.getElementById(RNG.pop()).style.display = "inline-block";
        }
        document.getElementById(`containerer`).classList.add(`px1056`);
        document.getElementById(`mainSection`).classList.remove(`hAuto`);
        document.getElementById(`mainSection`).classList.add(`h85`);
    }
}