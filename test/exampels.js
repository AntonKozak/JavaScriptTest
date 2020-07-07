////////////////////// // Пример 1
function fun1() {
  var chbox;
  chbox = document.getElementById("one");

  if (chbox.checked) {
    alert("Ok");
  } else {
    alert("No");
  }
}

/////////////////////// Пример 2
function fun2() {
  var radi = document.getElementsByName("r1");
  for (var i = 0; i < radi.length; i++) {
    if (radi[i].checked) {
      alert("Choosen" + i + "element");
    }
  }
}
//////////////// <!-- // Пример 3 //-->
function fun3() {
  var sel = document.getElementById("mySelect").selectedIndex;
  var options = document.getElementById("mySelect").options;
  alert("Chosen option" + options[sel].text);
}

////////// <!-- // Пример 4 //-->

function fun4() {
    var rng=document.getElementById('r4')
    var p=document.getElementById('four')
    p.innerHTML=rng.value
}

////////// <!-- // Пример 5 //-->
function fun5() {
    var rng=document.getElementById('r5')
    var p=document.getElementById('i5')
    i5.value=rng.value
}
////////////////////////// <!-- // Пример 6 //-->
function fun6() {
    var rng=document.getElementById('r6')
    var div=document.getElementById('test')
    div.style.width=rng.value+'px'
}

////////////////////////// <!-- // Пример 7 //-->
document.getElementById('nav').onmouseover = function(event) {
    var target = event.target;
    if(target.className == 'menu-item') {
        var s = target.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display = 'block';
    }
}
document.onmouseover=function(event) {
    var target = event.target;
    console.log(event.target);
    if (target.className!= 'menu-item' &&target.className!='submenu'){
        closeMenu();
    }
}
function closeMenu () {
    var menu = document.getElementById('nav')
    var subm = document.getElementsByClassName('submenu');

    for (var i=0; i <subm.length; i++){
        subm[i].style.display="none";
    }
}
////////////////////////// <!-- // Execise 8//-->

var tab;
var tabContent;

window.onload = function() { // отримуємо масив всіх вкладок tab і масив обєктів tabContent
    tabContent=document.getElementsByClassName('tabContent')
    tab=document.getElementsByClassName('tab')
    hideTabsContent(1)
}

function hideTabsContent(a) {  // приховування вкладок TabsContent
    for(var i=a; i<tabContent.length; i++){
        tabContent[i].classList.remove('show')
        tabContent[i].classList.add('hide')
        tab[i].classList.remove('whiteborder')
    }
}

document.getElementById('tabs').onclick=function (event) {   //  слідкує за кліками миші в області tabs
    var target=event.target; 
    if(target.className=='tab'){
        for(var i=0; i<tab.length; i++){
            if(target == tab[i]){
                showTabsContent(i);
                break;
            }
        }
    }
}

function showTabsContent(b) {
    if (tabContent[b].classList.contains('hide')){
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}
