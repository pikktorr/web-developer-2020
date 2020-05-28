"use strict";
a = "b";
console.log(a);
// 1. READING THE JAVASCRIPT FILE
console.log("this is the first script");
// 2. FINISH THE BUILT DOM TREE
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});
// 3. FINISH LOADING ALL THE FILES
window.addEventListener("load", (event) => {
  console.log("All resources finished loading");
});

const sum = (num1, num2) => num1 + num2;
