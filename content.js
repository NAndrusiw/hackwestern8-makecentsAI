// Get location of all instances of term
var result = document.evaluate(("//text()[contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'inflation')]"), document, null, XPathResult.ANY_TYPE, null);
var node, nodes = [];

// Add all nodes to node array
while (node = result.iterateNext()){
    if (!(node.textContent.includes("{") || node.textContent.includes("}"))){
        nodes.push(node);
    }
}

console.log("HIGHLIGHTER")
// Add in line html
setTimeout(function() {
    for (const n of nodes){
        var s = n.textContent;
        var parentNode = n.parentNode;
        var s1 = s.replace("inflation", '<span style="background-color: #FF0000">inflation</span>');
        var tempNode = document.createTextNode(s1);
        n.innerHTML = s1
        console.log(n)
    }
  }, 5000);

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


