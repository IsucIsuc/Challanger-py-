var RNG = [];
var rngCopy = [];
var rngCopy2 = [];
var end = 0;
var a;
var b;
var c;
var d;
var e;
var f;
var g;
var h;
var i;
var j;
var k;
var l;
var m;
var n;
var o;
var p;
var q;
var r;
while(RNG.length < 9){
    var r = Math.ceil(Math.random() * 9);
    var n = r;
    var z = n;
    if(RNG.indexOf(r) === -1) RNG.push(r);
    if(rngCopy.indexOf(n) === -1) rngCopy.push(n);
    if(rngCopy2.indexOf(z) === -1) rngCopy2.push(z);
}
setTimeout(myFunction, 1000);
function myFunction(){
    end++;
    if(end > 9){
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
i = rngCopy.pop();
j = rngCopy2.pop();
k = rngCopy2.pop();
l = rngCopy.pop();
m = rngCopy.pop();
n = rngCopy2.pop();
o = rngCopy2.pop();
p = rngCopy.pop();
q = rngCopy.pop();
r = rngCopy2.pop();

function step1(){
    document.getElementById(d).addEventListener(`click`, fail)
    document.getElementById(e).addEventListener(`click`, fail)
    document.getElementById(h).addEventListener(`click`, fail)
    document.getElementById(i).addEventListener(`click`, fail)
    document.getElementById(l).addEventListener(`click`, fail)
    document.getElementById(m).addEventListener(`click`, fail)
    document.getElementById(p).addEventListener(`click`, fail)
    document.getElementById(q).addEventListener(`click`, fail)
    alert(`your turn`);
    document.getElementById(a).addEventListener(`click`, step2)
}function step2(){
    REL1();
    document.getElementById(b).classList.remove(`black`)
    document.getElementById(b).addEventListener(`click`, fail)
    document.getElementById(f).addEventListener(`click`, fail)
    document.getElementById(g).addEventListener(`click`, fail)
    document.getElementById(j).addEventListener(`click`, fail)
    document.getElementById(k).addEventListener(`click`, fail)
    document.getElementById(n).addEventListener(`click`, fail)
    document.getElementById(o).addEventListener(`click`, fail)
    document.getElementById(r).addEventListener(`click`, fail)
    document.getElementById(c).addEventListener(`click`, step3)
}function step3(){
    REL2();
    document.getElementById(d).classList.remove(`black`)
    document.getElementById(a).addEventListener(`click`, fail)
    document.getElementById(d).addEventListener(`click`, fail)
    document.getElementById(h).addEventListener(`click`, fail)
    document.getElementById(i).addEventListener(`click`, fail)
    document.getElementById(l).addEventListener(`click`, fail)
    document.getElementById(m).addEventListener(`click`, fail)
    document.getElementById(p).addEventListener(`click`, fail)
    document.getElementById(q).addEventListener(`click`, fail)
    document.getElementById(e).addEventListener(`click`, step4)
}function step4(){
    REL3();
    document.getElementById(f).classList.remove(`black`)
    document.getElementById(b).addEventListener(`click`, fail)
    document.getElementById(c).addEventListener(`click`, fail)
    document.getElementById(f).addEventListener(`click`, fail)
    document.getElementById(j).addEventListener(`click`, fail)
    document.getElementById(k).addEventListener(`click`, fail)
    document.getElementById(n).addEventListener(`click`, fail)
    document.getElementById(o).addEventListener(`click`, fail)
    document.getElementById(r).addEventListener(`click`, fail)
    document.getElementById(g).addEventListener(`click`, step5)
}function step5(){
    REL4();
    document.getElementById(h).classList.remove(`black`)
    document.getElementById(a).addEventListener(`click`, fail)
    document.getElementById(d).addEventListener(`click`, fail)
    document.getElementById(e).addEventListener(`click`, fail)
    document.getElementById(h).addEventListener(`click`, fail)
    document.getElementById(l).addEventListener(`click`, fail)
    document.getElementById(m).addEventListener(`click`, fail)
    document.getElementById(p).addEventListener(`click`, fail)
    document.getElementById(q).addEventListener(`click`, fail)
    document.getElementById(i).addEventListener(`click`, step6)
}function step6(){
    REL5();
    document.getElementById(j).classList.remove(`black`)
    document.getElementById(b).addEventListener(`click`, fail)
    document.getElementById(c).addEventListener(`click`, fail)
    document.getElementById(f).addEventListener(`click`, fail)
    document.getElementById(g).addEventListener(`click`, fail)
    document.getElementById(j).addEventListener(`click`, fail)
    document.getElementById(n).addEventListener(`click`, fail)
    document.getElementById(o).addEventListener(`click`, fail)
    document.getElementById(r).addEventListener(`click`, fail)
    document.getElementById(k).addEventListener(`click`, step7)
}function step7(){
    REL6();
    document.getElementById(l).classList.remove(`black`)
    document.getElementById(a).addEventListener(`click`, fail)
    document.getElementById(d).addEventListener(`click`, fail)
    document.getElementById(e).addEventListener(`click`, fail)
    document.getElementById(h).addEventListener(`click`, fail)
    document.getElementById(i).addEventListener(`click`, fail)
    document.getElementById(l).addEventListener(`click`, fail)
    document.getElementById(p).addEventListener(`click`, fail)
    document.getElementById(q).addEventListener(`click`, fail)
    document.getElementById(m).addEventListener(`click`, step8)
}function step8(){
    REL7();
    document.getElementById(n).classList.remove(`black`)
    document.getElementById(b).addEventListener(`click`, fail)
    document.getElementById(c).addEventListener(`click`, fail)
    document.getElementById(f).addEventListener(`click`, fail)
    document.getElementById(g).addEventListener(`click`, fail)
    document.getElementById(j).addEventListener(`click`, fail)
    document.getElementById(k).addEventListener(`click`, fail)
    document.getElementById(n).addEventListener(`click`, fail)
    document.getElementById(r).addEventListener(`click`, fail)
    document.getElementById(o).addEventListener(`click`, step9)
}function step9(){
    REL8();
    document.getElementById(p).classList.remove(`black`)
    document.getElementById(a).addEventListener(`click`, fail)
    document.getElementById(d).addEventListener(`click`, fail)
    document.getElementById(e).addEventListener(`click`, fail)
    document.getElementById(h).addEventListener(`click`, fail)
    document.getElementById(i).addEventListener(`click`, fail)
    document.getElementById(l).addEventListener(`click`, fail)
    document.getElementById(m).addEventListener(`click`, fail)
    document.getElementById(p).addEventListener(`click`, fail)
    document.getElementById(q).addEventListener(`click`, step10)
}function step10(){
    document.getElementById(r).classList.remove(`black`)
    setTimeout(Win, 1000)
}
function REL1(){
    document.getElementById(d).removeEventListener(`click`, fail)
    document.getElementById(e).removeEventListener(`click`, fail)
    document.getElementById(h).removeEventListener(`click`, fail)
    document.getElementById(i).removeEventListener(`click`, fail)
    document.getElementById(l).removeEventListener(`click`, fail)
    document.getElementById(m).removeEventListener(`click`, fail)
    document.getElementById(p).removeEventListener(`click`, fail)
    document.getElementById(q).removeEventListener(`click`, fail)
    document.getElementById(a).removeEventListener(`click`, step2)
}
function REL2(){
    document.getElementById(b).removeEventListener(`click`, fail)
    document.getElementById(f).removeEventListener(`click`, fail)
    document.getElementById(g).removeEventListener(`click`, fail)
    document.getElementById(j).removeEventListener(`click`, fail)
    document.getElementById(k).removeEventListener(`click`, fail)
    document.getElementById(n).removeEventListener(`click`, fail)
    document.getElementById(o).removeEventListener(`click`, fail)
    document.getElementById(r).removeEventListener(`click`, fail)
    document.getElementById(c).removeEventListener(`click`, step3)
}
function REL3(){
    document.getElementById(a).removeEventListener(`click`, fail)
    document.getElementById(d).removeEventListener(`click`, fail)
    document.getElementById(h).removeEventListener(`click`, fail)
    document.getElementById(i).removeEventListener(`click`, fail)
    document.getElementById(l).removeEventListener(`click`, fail)
    document.getElementById(m).removeEventListener(`click`, fail)
    document.getElementById(p).removeEventListener(`click`, fail)
    document.getElementById(q).removeEventListener(`click`, fail)
    document.getElementById(e).removeEventListener(`click`, step4)
}
function REL4(){
    document.getElementById(b).removeEventListener(`click`, fail)
    document.getElementById(c).removeEventListener(`click`, fail)
    document.getElementById(f).removeEventListener(`click`, fail)
    document.getElementById(j).removeEventListener(`click`, fail)
    document.getElementById(k).removeEventListener(`click`, fail)
    document.getElementById(n).removeEventListener(`click`, fail)
    document.getElementById(o).removeEventListener(`click`, fail)
    document.getElementById(r).removeEventListener(`click`, fail)
    document.getElementById(g).removeEventListener(`click`, step5)
}
function REL5(){
    document.getElementById(a).removeEventListener(`click`, fail)
    document.getElementById(d).removeEventListener(`click`, fail)
    document.getElementById(e).removeEventListener(`click`, fail)
    document.getElementById(h).removeEventListener(`click`, fail)
    document.getElementById(l).removeEventListener(`click`, fail)
    document.getElementById(m).removeEventListener(`click`, fail)
    document.getElementById(p).removeEventListener(`click`, fail)
    document.getElementById(q).removeEventListener(`click`, fail)
    document.getElementById(i).removeEventListener(`click`, step6)
}
function REL6(){
    document.getElementById(b).removeEventListener(`click`, fail)
    document.getElementById(c).removeEventListener(`click`, fail)
    document.getElementById(f).removeEventListener(`click`, fail)
    document.getElementById(g).removeEventListener(`click`, fail)
    document.getElementById(j).removeEventListener(`click`, fail)
    document.getElementById(n).removeEventListener(`click`, fail)
    document.getElementById(o).removeEventListener(`click`, fail)
    document.getElementById(r).removeEventListener(`click`, fail)
    document.getElementById(k).removeEventListener(`click`, step7)
}
function REL7(){
    document.getElementById(a).removeEventListener(`click`, fail)
    document.getElementById(d).removeEventListener(`click`, fail)
    document.getElementById(e).removeEventListener(`click`, fail)
    document.getElementById(h).removeEventListener(`click`, fail)
    document.getElementById(i).removeEventListener(`click`, fail)
    document.getElementById(l).removeEventListener(`click`, fail)
    document.getElementById(p).removeEventListener(`click`, fail)
    document.getElementById(q).removeEventListener(`click`, fail)
    document.getElementById(m).removeEventListener(`click`, step8)
}
function REL8(){
    document.getElementById(b).removeEventListener(`click`, fail)
    document.getElementById(c).removeEventListener(`click`, fail)
    document.getElementById(f).removeEventListener(`click`, fail)
    document.getElementById(g).removeEventListener(`click`, fail)
    document.getElementById(j).removeEventListener(`click`, fail)
    document.getElementById(k).removeEventListener(`click`, fail)
    document.getElementById(n).removeEventListener(`click`, fail)
    document.getElementById(r).removeEventListener(`click`, fail)
    document.getElementById(o).removeEventListener(`click`, step9)
}
function fail(){
    alert(`you lost`);
    location.reload()
}
function Win(){
    localStorage.setItem(`act15`, `true`);
    alert('you won')
        location.replace("/");
}