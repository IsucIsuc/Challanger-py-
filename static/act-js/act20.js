const buttons = document.getElementById(`button`);
var seconds = 0;
buttons.addEventListener(`click`, function(e){
  let x = e.clientX - e.target.offsetLeft;
  let y = e.clientY - e.target.offsetTop;

  let ripples = document.createElement(`span`);
  ripples.style.left = x + 'px';
  ripples.style.top = y + 'px';
  this.appendChild(ripples);

  setTimeout(() => {
    ripples.remove()
  }, 750);
})

async function sendData(seconds) {
  try {
      const response = await fetch('http://127.0.0.1:5000/won/20', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ number: seconds, lastlvl: 20 })
      });
      const data = await response.json();
      console.log('Received from server:', data);
  } catch (error) {
      console.error('Error:', error);
  }
}

document.getElementById(`button`).style.display = `None`;
document.getElementById(`counter`).style.display = `None`;
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
var i = 0;

document.getElementById(`begin`).addEventListener(`click`, () => setTimeout(fail, 10000))

function myFunction(){
  document.getElementById(`begin`).style.display = `none`;
  document.getElementById(`button`).style.display = `block`;
  document.getElementById(`counter`).style.display = `block`;
  seconds = new Date();
  console.log("started");
}

document.getElementById(`button`).addEventListener(`click`, timeout);

function timeout(){
  i++;
  if(i > 159){
    localStorage.setItem(`act4`, `true`);
    document.getElementById(`button`).setAttribute(`href`, `/won/20`)
    seconds = new Date() - seconds;
    console.log(seconds);
    sendData(seconds);
    alert(`you won`);
  }
  document.getElementById(`counter`).innerHTML = `${i}/160`;
}

function fail(){
  if(i < 160){
    alert(`time out`)
    location.reload();
  }
}