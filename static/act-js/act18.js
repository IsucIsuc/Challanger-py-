var modal = document.getElementById("myModal");
var btn = document.getElementById("Begin");
var span = document.getElementsByClassName("close")[0];

modal.style.display = "block";
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.getElementById(``)

document.getElementById(`circle1`).style.display = `none`;
document.getElementById(`circle2`).style.display = `none`;
document.getElementById(`circle3`).style.display = `none`;
document.getElementById(`circle4`).style.display = `none`;

var RNG = [];
var r;
var n;
var end = 0;
var death = 0;

function begin(){
    document.getElementById(`beginButton`).style.display = `none`;
    document.getElementById(`endButton`).style.display = `none`;
    document.getElementById(`circle1`).style.display = `inline`;
    document.getElementById(`circle2`).style.display = `inline`;
    document.getElementById(`circle3`).style.display = `inline`;
    document.getElementById(`circle4`).style.display = `inline`;
    idk();
}

while(RNG.length < 101){
    var r = Math.ceil(Math.random() * 4);
    RNG.push(r);
}

window.addEventListener('keypress', (event) => {
    if(n === 1){
        if(event.key !== 'd'){
            death ++;
            console.log(`death${death}`);
        }
    }else if(n === 2){
        if(event.key !== 'f'){
            death ++;
            console.log(`death${death}`);
        }
    }else if(n === 3){
        if(event.key !== 'j'){
            death ++;
            console.log(`death${death}`);
        }
    }else if(n === 4){
        if(event.key !== 'k'){
            death ++;
            console.log(`death${death}`);
        }
    }
    if(death > 2){
        alert(`you ran out of lives`)
        location.reload();
    }
});

function idk(){
    n = RNG.pop();
    if(n == 1){
        document.getElementById(`circle1`).classList.add(`clickTime`);
        document.getElementById(`circle2`).classList.remove(`clickTime`);
        document.getElementById(`circle3`).classList.remove(`clickTime`);
        document.getElementById(`circle4`).classList.remove(`clickTime`);
    }else if(n == 2){
        document.getElementById(`circle1`).classList.remove(`clickTime`);
        document.getElementById(`circle2`).classList.add(`clickTime`);
        document.getElementById(`circle3`).classList.remove(`clickTime`);
        document.getElementById(`circle4`).classList.remove(`clickTime`);
    }else if(n == 3){
        document.getElementById(`circle1`).classList.remove(`clickTime`);
        document.getElementById(`circle2`).classList.remove(`clickTime`);
        document.getElementById(`circle3`).classList.add(`clickTime`);
        document.getElementById(`circle4`).classList.remove(`clickTime`);
    }else if(n == 4){
        document.getElementById(`circle1`).classList.remove(`clickTime`);
        document.getElementById(`circle2`).classList.remove(`clickTime`);
        document.getElementById(`circle3`).classList.remove(`clickTime`);
        document.getElementById(`circle4`).classList.add(`clickTime`);
    }
    document.getElementById(`end-timer`).innerHTML = `${end}/100`;
    if(end > 100 && death < 3){
        localStorage.setItem(`act18`, `true`);
        alert(`you win`)
        location.replace('/');
    }
    window.addEventListener('keydown', (event) => {
        if(event.key == 'd' && n == 1){
            end++;
            event.preventDefault();
            document.getElementById(`circle1`).classList.remove(`clickTime`);
            idk();
        }else if(event.key == 'f' && n == 2){
            end++;
            event.preventDefault();
            document.getElementById(`circle2`).classList.remove(`clickTime`);
            idk();
        }else if(event.key == 'j' && n == 3){
            end++;
            event.preventDefault();
            document.getElementById(`circle3`).classList.remove(`clickTime`);
            idk();
        }else if(event.key == 'k' && n == 4){
            end++;
            event.preventDefault();
            document.getElementById(`circle4`).classList.remove(`clickTime`);
            idk();
        }
    })
}

function myFunction(){
    if(end < 100){
        alert(`time out`)
        location.reload();
    }
}