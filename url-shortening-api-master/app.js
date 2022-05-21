async function shorten(link)  {
    const encodedParams = new URLSearchParams();
    encodedParams.append("url", link);

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com',
            'X-RapidAPI-Key': 'a28b4d4c28msh80ae5fdfb74b90bp158054jsn28c6cbaab4bd'
        },
        body: encodedParams
    };

    let result = await fetch('https://url-shortener-service.p.rapidapi.com/shorten', options);
    let data = await result.json();
    return data;
}
    
const ham = document.getElementById("ham");
const lineElem = document.getElementsByClassName('line');
const mobMenu = document.getElementsByClassName('mobMenu')[0];
const mobNav = document.getElementById('mobNav');
const btnSet = document.getElementsByClassName("btnSet")[0];
const bgBlur = document.getElementsByClassName('bgBlur')[0];


function addStyle() {
    lineElem[1].classList.add("hide");
    lineElem[0].classList.add("rotateElemOne")
    lineElem[2].classList.add("rotateElemTwo")
}
function removeStyle() {
    lineElem[1].classList.remove("hide");
    lineElem[0].classList.remove("rotateElemOne")
    lineElem[2].classList.remove("rotateElemTwo")
}

function showMonMenu() {
    addStyle();
    mobMenu.style.display = "flex";
    ham.classList.remove("open","adjust");
    bgBlur.style.display = "block";
    document.body.classList.add("stop-scrolling")
}

function hideMobMenu() {
    removeStyle()
    mobMenu.style.display = "none";
    ham.classList.add("open","adjust");
    bgBlur.style.display = "none";
    document.body.classList.remove("stop-scrolling")
}

ham.addEventListener('click', () => {
    if(ham.classList.contains("open")) {
        showMonMenu();
    } else {
        hideMobMenu();
    }
})

window.addEventListener('click', (e) => {
    if(!e.target.classList.contains("mob")) {
        hideMobMenu();
    }
})


const btns = [...document.getElementsByClassName('btns')]
const menu = [...document.getElementsByClassName('menu')]

for(let eachElem of btns) {
    eachElem.addEventListener("click",() => {
        for(let each of btns) {
            each.classList.remove("active");
        }
        eachElem.classList.add("active");
    })
}
for(let eachElem of menu) {
    eachElem.addEventListener("click",() => {
        for(let each of menu) {
            each.classList.remove("active");
        }
        eachElem.classList.add("active");
    })
}


const resultDiv = document.getElementsByClassName("result")[0];
const shortenBtn = document.getElementById("shortenBtn");
const urlInp = document.getElementById("urlInp");
const err = document.getElementsByClassName('break')[0];

shortenBtn.onclick = async function() {   
    if(urlInp.value.length < 1){
        showError()
    } else {
        await provideUrl(urlInp.value)
    }
}

function showError() {
    err.style.display = "block";
    urlInp.style.outline = "3px solid hsl(0, 87%, 67%)";
}

urlInp.addEventListener('input', ()=> {
    err.style.display = "none";
    urlInp.style.outline = "none";
})

async function provideUrl(val) {
    let provideUrl = val;
    let data = await shorten(val);
    let newUrl = data.result_url;
    if (newUrl == undefined) {
        showError()
    } else {
        addDiv(provideUrl,newUrl);
    }
    
}
function addDiv(url1,url2) {
    const inner = document.getElementsByClassName("innerFour")[0];
    let myResultDiv = resultDiv.cloneNode(true);
    myResultDiv.style.display = "flex";
    let givenLink = myResultDiv.getElementsByClassName("givenLink")[0];
    let shortenLink = myResultDiv.getElementsByClassName("shortenLink")[0];
    givenLink.innerText = url1;
    shortenLink.innerText = url2;
    inner.appendChild(myResultDiv);
    copyElem();
}

function copyText(elem) {
    let urlLink = elem.previousElementSibling.innerText;
    let helperInp = document.getElementById("helperInp");
    helperInp.value = urlLink;
    helperInp.select();
    helperInp.setSelectionRange(0, 999);
    document.execCommand("Copy")
}

let copyElem = function() {
    let copy = [...document.getElementsByClassName('copyBtn')];
    for(let eachElem of copy) {
        eachElem.addEventListener('click', ()=> {
            for(let eachCopy of copy) {
                eachCopy.innerText = "copy";
                eachCopy.style.backgroundColor = "hsl(180, 66%, 49%)";
            }
            copyText(eachElem)
            eachElem.innerText = "copied!";
            eachElem.style.backgroundColor = "hsl(257, 27%, 26%)";
            setTimeout(()=> {
                eachElem.innerText = "copy";
                eachElem.style.backgroundColor = "hsl(180, 66%, 49%)";
            },20000)
        })
    }
}

copyElem();
