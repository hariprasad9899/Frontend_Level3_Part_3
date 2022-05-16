// async function shorten(link)  {
//     const encodedParams = new URLSearchParams();
//     encodedParams.append("url", link);

//     const options = {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/x-www-form-urlencoded',
//             'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com',
//             'X-RapidAPI-Key': 'a28b4d4c28msh80ae5fdfb74b90bp158054jsn28c6cbaab4bd'
//         },
//         body: encodedParams
//     };

//     let result = await fetch('https://url-shortener-service.p.rapidapi.com/shorten', options);
//     let data = await result.json();
//     return data;
// }
    
// const inp = document.getElementById('inp');
// const txt = document.getElementById('txt');
// const btn = document.getElementById('btn');


// btn.onclick = async function() {
//     let x = await shorten(inp.value);
//     txt.innerText = x.result_url;
// }

const ham = document.getElementById("ham");
const lineElem = document.getElementsByClassName('line');

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

ham.addEventListener('click', () => {
    if(ham.classList.contains("open")) {
        addStyle();
        ham.classList.remove("open","adjust");
    } else {
        removeStyle()
        ham.classList.add("open","adjust")
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