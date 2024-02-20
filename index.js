let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

function ron() {
    document.querySelector("p").innerText = "";
    let wor = document.getElementById("word").value;    
    console.log(wor);
    let reqUrl = `${url}${wor}`;
    var pass;
    
    let p = fetch(reqUrl).then((res)=>{
        if (res.status != 404) {
            pass = true;
            return res.json();
        } else {
            document.querySelector("p").innerText = "Sorry, word doesn't exist in DATABASE!"
            pass = false;
        }
    });

    setTimeout(()=>{
        if (pass) {
            console.log("hello");
            p.then((resp) => {
                console.log(resp);
                document.querySelector("p").innerText = resp[0].meanings[0].definitions[0].definition;
            })
        }
    }, 500);
}
