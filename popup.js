// Run function on page load
document.getElementById("title").addEventListener("DOMContentLoaded", myFunction());

// Function
function myFunction(){

    document.getElementById("title").style.color = "rgb(82, 82, 82)";
    document.getElementById("title").style.fontSize = '20px';
    document.getElementById("title").style.fontFamily = "'Montserrat', sans-serif";
    document.getElementById("title").style.paddingBottom = "7px";

    // Variables
    // Get terms from local json
    url = chrome.runtime.getURL('terms.json');
    // Total words found
    counter = 0;

    // Get url from domain
    let queryOptions = { active: true, currentWindow: true };
    let tab = chrome.tabs.query(queryOptions);
    let domURL;

    // Dont worry about this
    Promise.resolve(tab).then((result) => {
        domURL = (result[0]["url"])
        fetch(domURL)
        .then((site) => {return site.text();})
        .then(function(string) {
            fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setTimeout(function() {

                    // For loop to add all terms + definitions to extension pop up
                    for (var i = 0; i < json.length; i++){

                        // Object has 2 values, term and definition
                        var obj = json[i];

                        // If string contains term
                        if ((string).indexOf(obj.term) > -1) {
                            counter++;

                            // STYLING TO DO HERE                            
                            var term = document.createElement("div");
                            term.className = 'term';
                            var tempNode = document.createTextNode(obj.term);
                            term.appendChild(tempNode);

                            var def = document.createElement("div");
                            def.className = 'def';
                            tempNode = document.createTextNode(obj.description);
                            def.appendChild(tempNode);

                            term.appendChild(def);
                            document.body.append(term);

                        }
                    }
                    // SOME STYLING HERE IF NONE FOUND
                    if (counter == 0)
                        document.getElementById("title").textContent = "Nothing Found!";
                    else
                        document.getElementById("title").textContent = "Words Found:";
                }, 1500);
            });
        })
    });
}


