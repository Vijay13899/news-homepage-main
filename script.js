const btn = document.querySelector(".ham");
const nav_links = document.querySelector("nav ul");
btn.addEventListener("click", () => {
  nav_links.classList.toggle("active");
});
// const ham = document.querySelector(".ham");
// const navLinks = document.querySelector("nav ul");
// const links = document.querySelectorAll("nav ul li");

// ham.addEventListener("click", () => {
//   navLinks.classList.toggle("active");
// });

// links.forEach((link) => {
//   link.addEventListener("click", () => {
//     navLinks.classList.remove("active");
//   });
// });
