// const p = new Promise(function (resolve, reject) {
//   resolve("Promise resolved value!!");
// });

// async function getData() {
//   return p;
// }

// const dataPromise = getData();

// dataPromise.then((res) => {
//   console.log(res);
// });

const p = new Promise(function (resolve, reject) {
    setTimeout(() =>{

        resolve("Promise Resolved by async & await");
    } ,2000)
});

const p2 = new Promise(function (resolve, reject) {
    setTimeout(() =>{

        resolve("Promise Resolved by async & await");
    } ,5000)
});
async function getData() {
    console.log("heheheh");
  const val = await p;     //JS Engine wait here
  console.log("wait");
  console.log(val);
  const val2 = await p2;     //JS Engine wait here
  console.log("wait");
  console.log(val2);
}

getData();