/* CLONING ARRAY */
// const nums1 = [1, 2, 3]; // HM_0001
// const nums2 = [...nums1]; // HM_0002
// nums2[0] = 100; // HM_0001[0] = 100

// console.log(nums1); // [1, 2, 3]
// console.log(nums2); // [100, 2, 3]

/* CLONING ARRAY */
// const animal = { name: "dog", age: 10, address: { city: "Xorazm", state: "uzb" } }; // HM_0001
// const animal2 = { ...animal }; // HM_0003
// animal2.address = { ...animal.address }; // HM_0004
// animal2.age = 30;
// animal2.address.city = "Xorazm";

// console.log(animal); // { name: 'dog', age: 30, color: 'black' }
// console.log(animal2); // { name: 'dog', age: 30, color: 'black' }

// const person = {
// 	name: "kent",
// 	age: 20,
// 	salary: 1000,
// };

// function assign(newObject: object, oldObject: object) {
// 	for (const key in oldObject) {
// 		newObject[key as keyof typeof newObject] = oldObject[key as keyof typeof oldObject];
// 	}

// 	return newObject;
// }

// const person1 = Object.assign({}, person);
// console.log(person1);
