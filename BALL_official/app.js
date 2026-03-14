const menuToggle = document.querySelector(".toggle");
const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const showcase = document.querySelector(".showcase");
const dateCopyright = document.querySelector(".copyright-year");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
  // nav.classList.toggle("active");
  // showcase.classList.toggle("active");
});

const boxes = document.querySelectorAll(".gallery__box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  console.log(triggerBottom);

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

// const currentYear = new Date().getFullYear();
const span = `${new Date().getFullYear()}`;

dateCopyright.innerText = span;
