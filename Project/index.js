
function Cm(valNum) {

    let width, length, lines, squareMeter
width = document.getElementById('width').value
width = parseFloat(width)
length = document.getElementById('length').value
length = parseFloat(length)
lines = document.getElementById('lines').value
lines = parseFloat(lines)

squareMeter= (width * length)/10000

    document.getElementById("Cm").innerHTML=valNum
    document.getElementById("inLine").innerHTML=(width) / valNum
    document.getElementById("onTable").innerHTML=((width) / valNum)*lines
    document.getElementById("metrKvadratnui").innerHTML=(((width) / valNum) *lines) / squareMeter
    document.getElementById("box125").innerHTML=(((width) / valNum)/12)*5
    document.getElementById("box124").innerHTML=(((width) / valNum)/12)*4
    document.getElementById("box145").innerHTML=(((width) / valNum)/14)*5
    document.getElementById("box144").innerHTML=(((width) / valNum)/14)*4
    document.getElementById("totalBox12").innerHTML=((((width) / valNum)/12)*4)+((((width) / valNum)/12)*5)
    document.getElementById("totalBox14").innerHTML=((((width) / valNum)/14)*4)+((((width) / valNum)/14)*5)
}

function onTable(valNum) {

    let width, length, lines, squareMeter
width = document.getElementById('width').value
width = parseFloat(width)
length = document.getElementById('length').value
length = parseFloat(length)
lines = document.getElementById('lines').value
lines = parseFloat(lines)

squareMeter= (width * length)/10000

    document.getElementById("Cm").innerHTML= (width) / (valNum/lines)
    document.getElementById("inLine").innerHTML=valNum / lines  
    document.getElementById("onTable").innerHTML=valNum 
    document.getElementById("metrKvadratnui").innerHTML=valNum/squareMeter
    document.getElementById("box125").innerHTML=((valNum/lines)/12)*5
    document.getElementById("box124").innerHTML=((valNum/lines)/12)*4
    document.getElementById("box145").innerHTML=((valNum/lines)/14)*5
    document.getElementById("box144").innerHTML=((valNum/lines)/14)*4
    document.getElementById("totalBox12").innerHTML=(((valNum/lines)/12)*5)+(((valNum/lines)/12)*4)
    document.getElementById("totalBox14").innerHTML=(((valNum/lines)/14)*5)+(((valNum/lines)/14)*4)
    
}

function metrKvad(valNum) {

    let width, length, lines, squareMeter
width = document.getElementById('width').value
width = parseFloat(width)
length = document.getElementById('length').value
length = parseFloat(length)
lines = document.getElementById('lines').value
lines = parseFloat(lines)

squareMeter= (width * length)/10000

    document.getElementById("Cm").innerHTML= (width) / ((valNum * squareMeter)/lines)
    document.getElementById("inLine").innerHTML=(valNum * squareMeter) / lines  
    document.getElementById("onTable").innerHTML=valNum * squareMeter 
    document.getElementById("metrKvadratnui").innerHTML=valNum
    document.getElementById("box125").innerHTML=(((valNum * squareMeter) / lines )/12)*5
    document.getElementById("box124").innerHTML=(((valNum * squareMeter) / lines )/12)*4
    document.getElementById("box145").innerHTML=(((valNum * squareMeter) / lines )/14)*5
    document.getElementById("box144").innerHTML=(((valNum * squareMeter) / lines )/14)*4
    document.getElementById("totalBox12").innerHTML=((((valNum * squareMeter) / lines )/12)*5)+((((valNum * squareMeter) / lines )/12)*4)
    document.getElementById("totalBox14").innerHTML=((((valNum * squareMeter) / lines )/14)*5)+((((valNum * squareMeter) / lines )/14)*4)
    
}

var table = document.getElementById('table')
for(var i = 1; i<table.rows.length; i++){
    table.rows[i].onclick = function(){
        document.getElementById('house').value = this.cells[0].innerHTML
        document.getElementById('width').value = this.cells[1].innerHTML
        document.getElementById('length').value = this.cells[2].innerHTML
        document.getElementById('lines').value = this.cells[3].innerHTML
    }
}


