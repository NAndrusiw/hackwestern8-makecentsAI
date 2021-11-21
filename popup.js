// Run function on page load
document.getElementById("title").addEventListener("DOMContentLoaded", myFunction());

// Function
function myFunction(){

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
                            var s = obj.term + ": " + obj.description + "\n\n"
                            var tempDiv = document.createElement("div");
                            var tempNode = document.createTextNode(s);
                            tempDiv.appendChild(tempNode);
                            document.body.append(tempDiv);

                        }
                    }
                    // SOME STYLING HERE IF NONE FOUND
                    if (counter == 0)
                        document.getElementById("title").textContent = "Nothing Found!";
                    else
                        document.getElementById("title").textContent = "Words Found:";
                }, 3000);
            });
        })
    });
}


