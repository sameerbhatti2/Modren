let element;

document.getElementById('li-Quickstart').addEventListener('click',onclickone)
document.getElementById('li-Quickstart').addEventListener('mouseenter',onclickone)
document.getElementById('menu-01').addEventListener('mouseleave',onclickoo)
document.getElementById('li-Service').addEventListener('click',onclicktwo)
document.getElementById('li-Service').addEventListener('mouseenter',onclicktwo)
document.getElementById('menu-02').addEventListener('mouseleave',onclickoo1)
document.getElementById('li-Platform').addEventListener('click',onclickthree)
document.getElementById('li-Platform').addEventListener('mouseenter',onclickthree)
document.getElementById('menu-03').addEventListener('mouseleave',onclickoo2)
document.getElementById('li-More').addEventListener('click',onclickfour)
document.getElementById('li-More').addEventListener('mouseenter',onclickfour)
document.getElementById('menu-04').addEventListener('mouseleave',onclickoo3)



function onclickone(){
    document.getElementById('li-Quickstart').classList.add('active')
    document.getElementById('li-Service').classList.remove('active')
    document.getElementById('li-Platform').classList.remove('active')
    document.getElementById('li-More').classList.remove('active')
    document.querySelector('#menu-01').style.display="flex"
    document.querySelector('#menu-02').style.display="none"
    document.querySelector('#menu-03').style.display="none"
    document.querySelector('#menu-04').style.display="none"

}
function onclickoo(){
    document.getElementById('li-Quickstart').classList.remove('active')
    document.getElementById('li-Service').classList.remove('active')
    document.getElementById('li-Platform').classList.remove('active')
    document.getElementById('li-More').classList.remove('active')
    document.querySelector('#menu-01').style.display="none"
    document.querySelector('#menu-02').style.display="none"
    document.querySelector('#menu-03').style.display="none"
    document.querySelector('#menu-04').style.display="none"
}

function onclicktwo(){
    document.getElementById('li-Service').classList.add('active')
    document.getElementById('li-Quickstart').classList.remove('active')
    document.getElementById('li-Platform').classList.remove('active')
    document.getElementById('li-More').classList.remove('active')
    document.querySelector('#menu-01').style.display="none"
    document.querySelector('#menu-02').style.display="flex"
    document.querySelector('#menu-03').style.display="none"
    document.querySelector('#menu-04').style.display="none"
}
function onclickoo1(){
    document.getElementById('li-Quickstart').classList.remove('active')
    document.getElementById('li-Service').classList.remove('active')
    document.getElementById('li-Platform').classList.remove('active')
    document.getElementById('li-More').classList.remove('active')
    document.querySelector('#menu-01').style.display="none"
    document.querySelector('#menu-02').style.display="none"
    document.querySelector('#menu-03').style.display="none"
    document.querySelector('#menu-04').style.display="none"
}


function onclickthree(){
    document.getElementById('li-Platform').classList.add('active')
    document.getElementById('li-Quickstart').classList.remove('active')
    document.getElementById('li-Service').classList.remove('active')
    document.getElementById('li-More').classList.remove('active')
    document.querySelector('#menu-01').style.display="none"
    document.querySelector('#menu-02').style.display="none"
    document.querySelector('#menu-03').style.display="flex"
    document.querySelector('#menu-04').style.display="none"
}

function onclickoo2(){
    document.getElementById('li-Quickstart').classList.remove('active')
    document.getElementById('li-Service').classList.remove('active')
    document.getElementById('li-Platform').classList.remove('active')
    document.getElementById('li-More').classList.remove('active')
    document.querySelector('#menu-01').style.display="none"
    document.querySelector('#menu-02').style.display="none"
    document.querySelector('#menu-03').style.display="none"
    document.querySelector('#menu-04').style.display="none"
}

function onclickfour(){
    document.getElementById('li-More').classList.add('active')
    document.getElementById('li-Quickstart').classList.remove('active')
    document.getElementById('li-Service').classList.remove('active')
    document.getElementById('li-Platform').classList.remove('active')
    document.querySelector('#menu-01').style.display="none"
    document.querySelector('#menu-02').style.display="none"
    document.querySelector('#menu-03').style.display="none"
    document.querySelector('#menu-04').style.display="flex"
}

function onclickoo3(){
    document.getElementById('li-Quickstart').classList.remove('active')
    document.getElementById('li-Service').classList.remove('active')
    document.getElementById('li-Platform').classList.remove('active')
    document.getElementById('li-More').classList.remove('active')
    document.querySelector('#menu-01').style.display="none"
    document.querySelector('#menu-02').style.display="none"
    document.querySelector('#menu-03').style.display="none"
    document.querySelector('#menu-04').style.display="none"
}
// =============ham burger menu==================

document.getElementById('hamburger').addEventListener('click', hamburger)
document.getElementById('hamburger').addEventListener('click', hamburger01)
document.getElementById('ham-open').addEventListener('click', hamOpen)
document.getElementById('ham-close').addEventListener('click', hamClose)

function hamOpen(){
     document.getElementById('ham-open').classList.add('display-none')
     document.getElementById('ham-close').classList.add('display-block')
}
function hamClose(){
    document.getElementById('ham-open').classList.remove('display-none')
    document.getElementById('ham-close').classList.remove('display-block')
}

function hamburger(){
    document.getElementById('nav').classList.toggle('display-block')
    document.getElementById('menu-01').classList.add('change')
    document.getElementById('menu-02').classList.add('change')
    document.getElementById('menu-03').classList.add('change')
    document.getElementById('menu-04').classList.add('change')
}
function hamburger01(){
    document.getElementById('divcardmenu').classList.toggle('display-flex')
    // document.getElementById('divcardmenu').classList.add('display-flex')
}