url = chrome.runtime.getURL('terms.json');
counter = 0;
found = []

fetch(url)
.then((response) => response.json()) // file contains json
.then((json) => {
    setTimeout(function() {
        for (var i = 0; i < json.length; i++){

            // Entry
            var obj = json[i];
            var term = String(obj.term);

            // Get location of all instances of term
            var result = document.evaluate(("//text()[contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), '" + term + "')]"), document, null, XPathResult.ANY_TYPE, null);
            var node, nodes = [];

            // Add all nodes to node array
            while (node = result.iterateNext()){
                if (!(node.textContent.includes("{") || node.textContent.includes("}"))){
                    nodes.push(node);
                }
            }

            // Add in line html
            for (var j = 0; j < nodes.length; j++){
                var oldNode = nodes[j];
                var s = oldNode.nodeValue;
                var parentNode = oldNode.parentNode;
                var effects = '<span style="background-color: #C9FF9F">' + term + '</span>'
                var s1 = s.replace(term, effects);
                if (parentNode){
                    parentNode.innerHTML = s1
                }
                else {
                    oldNode.innerHTML = s1
                }
            }
        }
    }, 5000);
});

        // OY

        // url = chrome.runtime.getURL('terms.json');
        // counter = 0;
        // found = []
        // console.log(document);

        // fetch(url)
        // .then((response) => response.json()) // file contains json
        // .then((json) => {
        //     setTimeout(function() {
                
        //         for (var i = 0; i < json.length; i++){
        //             var obj = json[i];
        //             if ((document.documentElement.textContent || document.documentElement.innerText)
        //             .indexOf(obj.term) > -1) {
        //                 console.log(obj.term + ": " + obj.description)
        //                 found[counter];
        //                 counter++;
        //             }
        //         }
        //         console.log(counter);
        //     }, 5000);
        // }); 


