function Cm(valNum) {
    document.getElementById("Cm").innerHTML=valNum
    document.getElementById("inLine").innerHTML=810 / valNum
    document.getElementById("onTable").innerHTML=(810 / valNum)*9
    document.getElementById("metrKvadratnui").innerHTML=((810 / valNum)*9)/13
    document.getElementById("box125").innerHTML=((810 / valNum)/12)*5
    document.getElementById("box124").innerHTML=((810 / valNum)/12)*4
    document.getElementById("box145").innerHTML=((810 / valNum)/14)*5
    document.getElementById("box144").innerHTML=((810 / valNum)/14)*4
    document.getElementById("totalBox12").innerHTML=(((810 / valNum)/12)*4)+(((810 / valNum)/12)*5)
    document.getElementById("totalBox14").innerHTML=(((810 / valNum)/14)*4)+(((810 / valNum)/14)*5)
}

function onTable(valNum) {
    document.getElementById("Cm").innerHTML= 819 / (valNum/9)
    document.getElementById("inLine").innerHTML=valNum / 9  
    document.getElementById("onTable").innerHTML=valNum 
    document.getElementById("metrKvadratnui").innerHTML=valNum/13
    document.getElementById("box125").innerHTML=((valNum/9)/12)*5
    document.getElementById("box124").innerHTML=((valNum/9)/12)*4
    document.getElementById("box145").innerHTML=((valNum/9)/14)*5
    document.getElementById("box144").innerHTML=((valNum/9)/14)*4
    document.getElementById("totalBox12").innerHTML=(((valNum/9)/12)*5)+(((valNum/9)/12)*4)
    document.getElementById("totalBox14").innerHTML=(((valNum/9)/14)*5)+(((valNum/9)/14)*4)
    
}

function metrKvad(valNum) {
    document.getElementById("Cm").innerHTML= 819 / ((valNum * 13)/9)
    document.getElementById("inLine").innerHTML=(valNum * 13) / 9  
    document.getElementById("onTable").innerHTML=valNum * 13 
    document.getElementById("metrKvadratnui").innerHTML=valNum
    document.getElementById("box125").innerHTML=(((valNum * 13) / 9 )/12)*5
    document.getElementById("box124").innerHTML=(((valNum * 13) / 9 )/12)*4
    document.getElementById("box145").innerHTML=(((valNum * 13) / 9 )/14)*5
    document.getElementById("box144").innerHTML=(((valNum * 13) / 9 )/14)*4
    document.getElementById("totalBox12").innerHTML=((((valNum * 13) / 9 )/12)*5)+((((valNum * 13) / 9 )/12)*4)
    document.getElementById("totalBox14").innerHTML=((((valNum * 13) / 9 )/14)*5)+((((valNum * 13) / 9 )/14)*4)
    
}

