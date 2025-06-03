const nums = [10, 20, 30];
nums.push(20, 20, 20, 20, 20);

console.log(nums);

const set = new Set();
set.add('default');
set.add('active');
set.add('active');
set.clear();
console.log('is exist second =', set.has('second'));
console.log('set length  = ', set.size);

console.log(set);
