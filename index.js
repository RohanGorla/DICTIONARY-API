let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

var sou = new Audio();
document.getElementsByClassName("searchbtn")[0].addEventListener("click", ()=>{
    document.getElementsByClassName("partos")[0].innerText = "";
    document.getElementsByClassName("meaning")[0].innerText = "";
    document.getElementsByClassName("phonetic")[0].innerText = "";
    document.getElementsByTagName("h2")[0].innerText = "";
    let wor = document.getElementById("word").value;    
    let reqUrl = `${url}${wor}`;
    var pass;

    let p = fetch(reqUrl).then((res)=>{
        if (res.status != 404) {
            pass = true;
            return res.json();
        } else {
            document.getElementsByClassName("meaning")[0].innerText = "Sorry, word doesn't exist in DATABASE!"
            pass = false;
        }
    });

    setTimeout(()=>{
        if (pass) {
            p.then((resp) => {
                for(var i = 0; i < resp[0].phonetics.length; i++) {
                    if (resp[0].phonetics[i].audio) {
                        var aud_url = resp[0].phonetics[i].audio;
                        sou.src = aud_url;
                        document.getElementsByClassName("sound")[0].addEventListener("click", ()=>{
                            sou.play();
                        })
                        break;
                    }
                }
                document.getElementsByClassName("partos")[0].innerText = resp[0].meanings[0].partOfSpeech;
                document.getElementsByClassName("meaning")[0].innerText = resp[0].meanings[0].definitions[0].definition;
                document.getElementsByClassName("phonetic")[0].innerText = resp[0].phonetics[i].text;
                document.getElementsByTagName("h2")[0].innerText = wor;
            });
        }
    }, 400);
});
