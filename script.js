let url='https://catfact.ninja/fact';

async function getthequotes() {
    let response=await fetch(url);
    let data=await response.json()
    console.log(data)
}
getthequotes();