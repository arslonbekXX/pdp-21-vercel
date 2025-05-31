// // Both methods will return a single element
const demo = document.querySelector('#demo') as HTMLDivElement;

/* hasAttribute() */
// const isExistClass = demo.hasAttribute('class');
// console.log('isExistClass = ', isExistClass);

// const isExistID = demo.hasAttribute('id');
// console.log('isExistID = ', isExistID);

// const isExistStyle = demo.hasAttribute('style');
// console.log('isExistStyle = ', isExistStyle);

/* getAttribute() */
// const _class = demo.getAttribute('class');
// console.log('class = ', _class);

// const id = demo.getAttribute('id');
// console.log('id = ', id);

// const style = demo.getAttribute('style');
// console.log('style = ', style);

// /* setAttribute() */
// demo.setAttribute('id', 'demo-id');
// console.log('demo = ', demo);

demo.onmouseenter = () => {
	demo.setAttribute('class', 'active');
};
demo.onmouseleave = () => {
	demo.removeAttribute('class');
};
