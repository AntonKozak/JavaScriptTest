// //Execise 1
function fun1() {
    var rtl = document.getElementById('rtl').value;
    var rtr = document.getElementById('rtr').value;
    var rbr = document.getElementById('rbr').value;
    var rbl = document.getElementById('rbl').value;
    var ttl = document.getElementById('ttl');
    var ttr = document.getElementById('ttr');
    var tbr = document.getElementById('tbr');
    var tbl = document.getElementById('tbl');
    var block = document.getElementById('block');
  
    ttl.value = rtl;
    ttr.value = rtr;
    tbr.value = rbr;
    tbl.value = rbl;
    block.style.borderRadius = rtl+'px ' +rtr+'px ' +rbr+'px ' +rbl+'px ';
  }
// //Execise 2
var modal =document.getElementById('myModal');
var btn = document.getElementById("click");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block"
}
span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none"
    }
}
// // Execise 3
function myMove() {
    var elem = document.getElementById("myAnimation");
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if(pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos +'px';
            elem.style.left = pos +'px';

        }
    }
}
// // Execise 4