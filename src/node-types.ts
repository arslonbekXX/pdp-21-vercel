const nav = document.getElementById('nav');

console.log(nav?.nodeType === Node.ELEMENT_NODE);

const textNode = document.createTextNode('Hello world');
console.log(textNode.nodeType === Node.TEXT_NODE);

const commentNode = document.createComment('Something');
console.log(commentNode.nodeType === Node.COMMENT_NODE);

console.log(document.nodeType === Node.DOCUMENT_NODE);
