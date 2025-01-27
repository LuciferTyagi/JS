const cart = ["shoes", "kurta", "jeans"];

const promise = createOrder(cart);

promise.then(function (orderId) {
  console.log(orderId);
})

.catch(function (err){
console.log(err.message)
})
function validateCart(cart) {
  return false;
}

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    const orderId = "1234";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      } ,3000);
    }
  });

  return pr;
}
