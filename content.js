// Get location of all instances of term
var result = document.evaluate(("//text()[contains(., 'inflation')]"), document, null, XPathResult.ANY_TYPE, null);
var node, nodes = [];

// Add all nodes to node array
while (node = result.iterateNext()){
    if (!(node.textContent.includes("{") || node.textContent.includes("}"))){
        nodes.push(node);
    }
}

// Add in line html
// setTimeout(function() {
//     for (const n of nodes){
//         var s = n.innerHTML;
//         var parentNode = n.parentNode;
//         var s1 = s.replace("inflation", '<span style="background-color: #FF0000">inflation</span>');
//         var tempNode = document.createTextNode(s1);
//         tempNode.innerHTML = s1
//         parentNode.replaceChild(tempNode, n)
//         console.log(n)
//     }
//   }, 5000);


