// Resolve
// Reject

// let myPromise = new Promise((resolve, reject) => {
//   if (false) {
//     setTimeout(() => {
//       resolve("There's fried Chickens");
//     }, 3000);
//   } else {
//     reject("No fried Chicken");
//   }
// });

// myPromise
//   .then((res) => {
//     console.log("I think there is a fried chicken");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
};
fetchData();
