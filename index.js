let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

function ron() {
    let wor = document.getElementById("word").value;    
    console.log(wor);
    let reqUrl = `${url}${wor}`;

    let p = fetch(reqUrl).
    then((res)=>res.json()).
    then((resp)=>{
            if (resp.title) {
                document.querySelector("p").innerText = "Word doesn't exist in DATABASE!"
            } else {
                document.querySelector("p").innerText = resp[0].meanings[0].definitions[0].definition;
            }
        });
}
