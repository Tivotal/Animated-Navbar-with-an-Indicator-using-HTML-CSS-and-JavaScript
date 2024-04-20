/* Created by Tivotal */

let links = document.querySelectorAll(".navbar li");
let indicator = document.querySelector(".indicator");

links.forEach((link, index) => {
  link.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");

    link.classList.add("active");

    indicator.style.transform = `translateX(${index * 80}px)`;
  });
});
