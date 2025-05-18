// const nav = document.getElementById('nav');

// console.log(nav?.nodeType === Node.ELEMENT_NODE);

// const textNode = document.createTextNode('Hello world');
// console.log(textNode.nodeType === Node.TEXT_NODE);

// const commentNode = document.createComment('Something');
// console.log(commentNode.nodeType === Node.COMMENT_NODE);

// console.log(document.nodeType === Node.DOCUMENT_NODE);

/* Root Nodes */
// console.log(document.nodeType === Node.DOCUMENT_NODE);
// console.log(document.documentElement.nodeType === Node.ELEMENT_NODE);
// console.log(document.head.nodeType === Node.ELEMENT_NODE);
// console.log(document.body.nodeType === Node.ELEMENT_NODE);

/* Parent Nodes */
// const boxesWrapper = document.querySelector('.boxes') as HTMLDivElement;

/* parentNode */
// console.log(boxesWrapper.parentNode);
// console.log(boxesWrapper.parentNode?.parentNode);
// console.log(boxesWrapper.parentNode?.parentNode?.parentNode);
// console.log(boxesWrapper.parentNode?.parentNode?.parentNode?.parentNode);

/* parentElement */
// console.log(boxesWrapper.parentElement);
// console.log(boxesWrapper.parentElement?.parentElement);
// console.log(boxesWrapper.parentElement?.parentElement?.parentElement);
// console.log(boxesWrapper.parentElement?.parentElement?.parentElement?.parentElement);

/* Sibling Nodes */
// const box2 = document.querySelector('.box-2') as HTMLDivElement;

// /* previousSibling */
// console.log(box2.previousSibling);

// /* previousSibling */
// console.log(box2.previousElementSibling);

// /* nextSibling */
// console.log(box2.nextSibling);

// /* nextSibling */
// console.log(box2.nextElementSibling);

// box2.previousSibling?.parentElement.remove(); //
// box2.nextElementSibling?.remove();
