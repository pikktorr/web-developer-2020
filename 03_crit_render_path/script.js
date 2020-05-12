document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed", event);
});
window.addEventListener("load", (event) => {
  console.log("All resources finished loading", event);
});
console.log("this is the first script");
