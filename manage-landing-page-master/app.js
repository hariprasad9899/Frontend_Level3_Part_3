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

const scrollContainer = document.querySelector(".partFive");
scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    let w = scrollContainer.clientWidth;
    scrollContainer.scrollLeft += evt.deltaY;
});


function ValidateEmail(val) {   
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)){
        return (true)
    }
        return (false)
}

const go = document.getElementById('go')
const inp = document.getElementById('inp');
const err = document.getElementById('err');

go.addEventListener('click', () => {
    let inpVal = inp.value;
    let result = ValidateEmail(inpVal);
    if(result) {
        inp.style.outline = "3px solid green"
    } else {
        err.style.opacity = "1";
        inp.style.outline = "1px solid red";
    }
})
inp.addEventListener('input', ()=> {
    inp.style.outline = "none";
    err.style.opacity = "0";
})

window.onresize = function() {
    
}