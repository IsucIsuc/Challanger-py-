var time = 0;
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

if(time < 1){
    document.getElementById(`a`).style.top = `50%`;
    document.getElementById(`a`).style.left = `50%`;
    document.getElementById(`a`).style.display = `none`;
    document.getElementById(`Begin`).style.display = `block`;
}

document.getElementById(`Begin`).addEventListener(`click`, function begin(){
    document.getElementById(`a`).style.display = `block`;
    document.getElementById(`Begin`).style.display = `none`;
})

document.getElementById(`a`).addEventListener(`click`, function changePosition(){
    var RNG = [];
    var r;
    for(i = 0; i < 2; i++){
        r = Math.ceil(Math.random() * 50 + 25);
        RNG.push(r);
    }
    var n1 = RNG.pop();
    document.getElementById(`a`).style.top = `${n1}%`;
    var n2 = RNG.pop();
    document.getElementById(`a`).style.left = `${n2}%`;
})

document.getElementById(`a`).addEventListener(`click`, function timeout(){
    time++;
    document.getElementById(`end-timer`).innerHTML = `${time}/30`;
    if(time > 30){
        localStorage.setItem(`act9`, `true`);
        alert(`you won`)
        location.replace('/')
    }
})

function myFunction(){
    if(time < 30){
        alert(`time out`)
        location.reload();
    }
}