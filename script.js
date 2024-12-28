let url='https://catfact.ninja/fact';
let btn=document.getElementById('btn');
let cont=document.getElementById('cont');
async function getthequotes() {
    let response=await fetch(url);
    let data=await response.json();
    cont.innerHTML=`
    <h3>FACT</h3>
    <p>${data.fact}</p>`
    cont.style.display='flex'
}

btn.onclick=getthequotes;
