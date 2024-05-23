const myArr = [0, 1, 2, 3, 4, 5];

//Array Methods
// console.log(myArr.push(6));
// console.log(myArr);
// console.log(myArr.pop());
// console.log(myArr);

// myArr.unshift(9);
// console.log(myArr);

// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(12));

// const newArr = myArr.join();
// console.log(newArr);
// console.log(myArr);

// const myn1 = myArr.slice(1,3);
// console.log(myn1);

// const myn2 = myArr.splice(1,3);
// console.log(myn2);
// console.log(myArr);

const m_h = ["A", "B", "C"];
const d_c = ["D", "E", "F"];

const all_hero = m_h.concat(d_c);
console.log(all_hero);

const all_new_hero = [...m_h, ...d_c]; //spread operator
console.log(all_new_hero);

const another_arr = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10]]];

console.log(another_arr.flat(Infinity));

console.log(Array.isArray("Yagyansh"));
console.log(Array.from("Yagyansh"));

let score1 = 100;
let score2 = 200;

console.log(Array.of(score1, score2));
