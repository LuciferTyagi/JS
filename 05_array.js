const myArr = [0, 1, 2, 3, 4, 5];

//Array Methods
console.log(myArr.push(6));
console.log(myArr);
console.log(myArr.pop());
console.log(myArr);

myArr.unshift(9);
console.log(myArr);

myArr.shift();
console.log(myArr);

console.log(myArr.includes(12));

const newArr = myArr.join();
console.log(newArr);
console.log(myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);

const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log(myArr);