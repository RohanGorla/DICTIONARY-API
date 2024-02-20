let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

function ron() {
    document.querySelector("p").innerText = "";
    let wor = document.getElementById("word").value;    
    console.log(wor);
    let reqUrl = `${url}${wor}`;

    let p = fetch(reqUrl).
    then((res)=>{
        return res.json();
    }).
    then((resp)=>{
            console.log(resp);
            if (resp.title) {
                document.querySelector("p").innerText = "Word doesn't exist in DATABASE!"
            } else {
                document.querySelector("p").innerText = resp[0].meanings[0].definitions[0].definition;
            }
        });
}
