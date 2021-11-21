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
            var term = String(obj.term).toLowerCase();
            var definition = String(obj.description)

            // Get location of all instances of term
            var result = document.evaluate(("//text()[contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), '" + term +"')]"), document, null, XPathResult.ANY_TYPE, null);
            var node, nodes = [];

            // Add all nodes to node array
            while (node = result.iterateNext()){
                if (!(node.textContent.includes("{") || node.textContent.includes("}"))){
                    nodes.push(node);
                    console.log(node);
                }
            }

            // Add in line html
            for (var j = 0; j < nodes.length; j++){
                var oldNode = nodes[j];
                var s = oldNode.nodeValue;
                var parentNode = oldNode.parentNode;
                var effects = '<span class="foundWord">' + term + '<span class="definition">' + definition + "</span></span>"
                var s1 = s.replace(term, effects);
                if (parentNode){
                    parentNode.innerHTML = parentNode.innerHTML.replace(s,s1)
                }
                else {
                    oldNode.innerHTML = oldNode.innerHTML.replace(s,s1)
                }
            }
        }
    }, 3000);
});
