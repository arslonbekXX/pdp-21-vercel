// Create the new node to insert
const newNode = document.createElement('span'); // <span></span>

// Get a reference to the parent node
const childElement = document.getElementById('childElement') as HTMLSpanElement;
const parentDiv = childElement.parentNode as HTMLDivElement;

// Begin test case [ 1 ] : Existing childElement (all works correctly)
let childElement2 = document.getElementById('childElement');
parentDiv.insertBefore(newNode, childElement2);
// End test case [ 1 ]

// // Begin test case [ 2 ] : childElement is of Type undefined
// sp2 = undefined; // Non-existent node of id "childElement"
// parentDiv.insertBefore(newNode, sp2); // Implicit dynamic cast to type Node
// // End test case [ 2 ]

// // Begin test case [ 3 ] : childElement is of Type "undefined" (string)
// sp2 = 'undefined'; // Non-existent node of id "childElement"
// parentDiv.insertBefore(newNode, sp2); // Generates "Type Error: Invalid Argument"
// // End test case [ 3 ]
