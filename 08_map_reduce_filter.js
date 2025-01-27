const arr = [1, 2, 3, 4, 5];

// const doubles = arr.map((value) => value * 3);
// console.log(doubles);


// const filter = arr.filter((value) => value > 4 );
// console.log(filter);


function sum (arr){
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    
  }
  console.log(sum);
}
sum(arr);

const output = arr.reduce((acc , curr) =>{
   if(curr > acc){
    acc = curr
   }
   return acc;
},0)

console.log(output)