/* CLONING WITH SPREAD OPERATOR */

/**
 * HM - HEAP MEMORY (only for non-primitive(reference) values)
 * --------------------------
 *    name | address | value
 * --------------------------
 *    nums1 | 0001 | [10, 20]
 * --------------------------
 *    nums2 | 0002 | [10, 20, 50]
 *
 *
 * ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
 *
 * SM - STACK MEMORY (only for primitive values)
 * --------------------------
 *    name | address | value
 * --------------------------
 *  nums1 | 001   | HM_0001
 * --------------------------
 *  nums2 | 002   | HM_0002
 * --------------------------
 *
 */
// const nums1 = [10, 20]; // SM_nums1_001 = 20
// let nums2 = [...nums1]; // SM_nums2_002 = 20

// nums2.push(50); // HM_0002.push(50)

// console.log(nums1); // HM_0001
// console.log(nums2); // HM_0001
// console.log(nums1 === nums2); // true

/* SHALLOW COPY */
// const users1 = ['niko', 'jeko', 'ruko']; //
// const users2 = [...users1];
// users2.push('miko');

// console.log(users1);
// console.log(users2);
// console.log(users1 === users2); // true

/* DEEP COPY */
/**
 * SM - STACK MEMORY (only for primitive values)
 * --------------------------
 *   name | address | value
 * --------------------------
 *  person1 | 001 | HM_0001
 * --------------------------
 * person2 | 002 | HM_0002
 *
 *
 * HM - HEAP MEMORY (only for non-primitive(reference) values)
 * --------------------------
 *   address | value
 * --------------------------
 *      0001 | { name: 'Mark', age: 30, address: HM_0002 }
 * --------------------------
 *      0002 | { city: 'Tashkent', country: 'Uzbekistan' }
 * --------------------------
 *      0003 | { name: 'Kent', age: 20, address: HM_0004 }
 * --------------------------
 *     0004 | { city: 'Tashkent', country: 'Uzbekistan' }
 */
// const person1 = { name: 'Kent', age: 20, address: { city: 'Tashkent', country: 'Uzbekistan' } };
// const person2 = window.structuredClone(person1); // shallow copy

// person1.name = 'Mark';
// console.log('person1.name = ', person1.name);
// console.log('person2.name = ', person2.name);

// person1.age = 30;
// console.log('person1.age = ', person1.age);
// console.log('person2.age = ', person2.age);

// person1.address.city = 'New York'; // HM_0002.city = 'New York'
// console.log('person1.address.city = ', person1.address.city);
// console.log('person2.address.city = ', person2.address.city);



