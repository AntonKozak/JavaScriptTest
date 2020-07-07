//HTML
{/* <body>
<button onclick="switch_on()">Click on</button>

<img id="myImage" src='pic_bulboff.gif'>

<button onclick="switch_off()">Click off</button>

<script src="index.js"></script>
</body> */}


// JS 
function switch_on() {
    document.getElementById('myImage').src='pic_bulbon.gif'
}
function switch_off() {
    document.getElementById('myImage').src='pic_bulboff.gif'
}
