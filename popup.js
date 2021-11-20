url = chrome.runtime.getURL('terms.json');
counter = 0;
found = []

fetch(url)
.then((response) => response.json()) // file contains json
.then((json) => {
    setTimeout(function() {
        
        for (var i = 0; i < json.length; i++){
            var obj = json[i];
            if ((document.documentElement.textContent || document.documentElement.innerText)
            .indexOf(obj.term) > -1) {
                document.write(obj.term + ": " + obj.description)
                found[counter];
                counter++;
            }
        }
        console.log(counter);
    }, 5000);
}); 
