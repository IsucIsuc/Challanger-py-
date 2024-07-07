var completion = 0;
completionist();
function completionist(){
    for(var k = 1; k <= 20; k++){
        if(localStorage.getItem(`act${k}`)){
            completion++;
        }
    }
    if(document.getElementById(`completionist`).innerHTML == "0/20"){
        document.getElementById(`completionist`).innerHTML = `${completion}/20`;
    }
}