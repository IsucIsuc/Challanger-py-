var RNG = [];
var rngCopy = [];
var rngCopy2 = [];
var end = 0;
var seconds = 0;

async function sendData(seconds) {
    try {
        const response = await fetch('http://127.0.0.1:5000/won/7', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ number: seconds, lastlvl: 7 })
        });
        const data = await response.json();
        console.log('Received from server:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

var a;
var b;
var c;
var d;
var e;
var f;
var g;
var h;
while(RNG.length < 4){
    var r = Math.ceil(Math.random() * 4);
    var n = r;
    var z = n;
    if(RNG.indexOf(r) === -1) RNG.push(r);
    if(rngCopy.indexOf(n) === -1) rngCopy.push(n);
    if(rngCopy2.indexOf(z) === -1) rngCopy2.push(z);
}
setTimeout(myFunction, 1000);
function myFunction(){
    end++;
    if(end > 4){
        step1();
    }
    document.getElementById(RNG.pop()).classList.add(`black`);
    setTimeout(myFunction, 500);
}
a = rngCopy.pop();
b = rngCopy2.pop();
c = rngCopy2.pop();
d = rngCopy.pop();
e = rngCopy.pop();
f = rngCopy2.pop();
g = rngCopy2.pop();
h = rngCopy.pop();

function step1(){
    document.getElementById(d).addEventListener(`click`, fail)
    document.getElementById(e).addEventListener(`click`, fail)
    document.getElementById(h).addEventListener(`click`, fail)
    alert(`your turn`);
    seconds = new Date();
    console.log("started");
    document.getElementById(a).addEventListener(`click`, step2)
}
function step2(){
    REL1();
    document.getElementById(b).classList.remove(`black`);
    document.getElementById(b).addEventListener(`click`, fail)
    document.getElementById(f).addEventListener(`click`, fail)
    document.getElementById(g).addEventListener(`click`, fail)
    document.getElementById(c).addEventListener(`click`, step3)
}
function step3(){
    REL2();
    document.getElementById(d).classList.remove(`black`);
    document.getElementById(a).addEventListener(`click`, fail)
    document.getElementById(d).addEventListener(`click`, fail)
    document.getElementById(h).addEventListener(`click`, fail)
    document.getElementById(e).addEventListener(`click`, step4)
}
function step4(){
    REL3();
    document.getElementById(f).classList.remove(`black`);
    document.getElementById(b).addEventListener(`click`, fail)
    document.getElementById(c).addEventListener(`click`, fail)
    document.getElementById(f).addEventListener(`click`, fail)
    document.getElementById(g).addEventListener(`click`, step5)
}
function step5(){
    document.getElementById(h).classList.remove(`black`);
    setTimeout(Win, 1000)
}
function REL1(){
    document.getElementById(d).removeEventListener(`click`, fail)
    document.getElementById(e).removeEventListener(`click`, fail)
    document.getElementById(h).removeEventListener(`click`, fail)
    document.getElementById(a).removeEventListener(`click`, step2)
}function REL2(){
    document.getElementById(b).removeEventListener(`click`, fail)
    document.getElementById(f).removeEventListener(`click`, fail)
    document.getElementById(g).removeEventListener(`click`, fail)
    document.getElementById(c).removeEventListener(`click`, step3)
}function REL3(){
    document.getElementById(a).removeEventListener(`click`, fail)
    document.getElementById(d).removeEventListener(`click`, fail)
    document.getElementById(h).removeEventListener(`click`, fail)
    document.getElementById(e).removeEventListener(`click`, step4)
}
function fail(){
    alert(`you lost`);
    location.reload()
}
function Win(){
    localStorage.setItem(`act7`, `true`);
    seconds = new Date() - seconds;
    console.log(seconds);
    sendData(seconds);
    alert('you won')
    location.replace('/won/7')
}