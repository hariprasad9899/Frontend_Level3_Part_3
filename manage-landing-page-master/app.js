const btn = document.getElementById('btn');
const mobMenu = document.getElementsByClassName('mobMenu')[0];
const menuBtn = [...document.getElementsByClassName('menuBtn')];
const mobNav = document.getElementById('mobNav');
const bgBlur = document.getElementsByClassName('bgBlur')[0];
const myBody = document.body

for(let eachElem of menuBtn) {
    eachElem.addEventListener('click', ()=> {
        for(let each of menuBtn) {
            each.classList.remove('active');
        }
        eachElem.classList.add('active');
    })
}


btn.onclick = function() {
    if(btn.classList.contains('open')) {
        btn.src = "./images/icon-close.svg";
        btn.classList.replace('open','close');
        mobMenu.style.display = "block";
        document.body.classList.add("stop-scrolling")
        bgBlur.style.display = "block";
    } else {
        btn.src = "./images/icon-hamburger.svg";
        btn.classList.replace('close','open');
        mobMenu.style.display = "none";
        document.body.classList.remove("stop-scrolling")
        bgBlur.style.display = "none";
    }
}

function show(elem) {
    if(elem.classList.contains("mob")) {
        return false
    } else {
        return true
    }
}

window.addEventListener('click', (e)=> {
    if(e.target !== mobNav && e.target !== mobNav.parentElement && e.target !== btn ) {
        let res = show(e.target)
        if(res) {
            btn.src = "./images/icon-hamburger.svg";
            btn.classList.replace('close','open');
            mobMenu.style.display = "none";
            document.body.classList.remove("stop-scrolling")
            bgBlur.style.display = "none";
        }
    }
})