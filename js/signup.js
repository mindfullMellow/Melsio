"use strict";

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // Redirect to homepage if the link contains "#"
    if (href === "#" || href.startsWith("#")) {
      e.preventDefault();
      window.location.href = "../index.html"; // Change this to your actual homepage
    }
  });
});
document.querySelector(".form---btn").addEventListener("click", function () {
  window.location.href = "../index.html"; // Change this to your actual homepage
});
console.log(window.location.href);

////////////////////////////////////////////////////////////////////
// JavaScript code to update all elements with class "year"
const currentYear = new Date().getFullYear();
console.log("Current Year:", currentYear);

document.querySelectorAll(".year").forEach((yearEl, index) => {
  console.log(`Updating element ${index + 1}:`, yearEl);
  yearEl.textContent = currentYear;
});
