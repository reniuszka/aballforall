// const sliderContainer = document.querySelector('.header-uefa');
// const slideRight = document.querySelector('.header-uefa-right');
// const slideLeft = document.querySelector('.header-uefa-left');
// const upButton = document.querySelector('.header-uefa-buttons--up');
// const downButton = document.querySelector('.header-uefa-buttons--down');
//to now how many slides we have
// const slidesLength = slideRight.querySelectorAll('div').length;
// and it gives me 4
// console.log(slidesLength)

// one slide needs to be active at the beggining, so lets start with 0
let activeSlideIndex = 0;
// The top property sets or returns the top position of a positioned element.
// - because we want to go up
//slidesLength - 1 because we want to show the index here
// slideLeft.style.top = `-${(slidesLength - 1) * 80}vh`;

// upButton.addEventListener('click', () => changeSlide('up'));
// downButton.addEventListener('click', () => changeSlide('down'));

// const changeSlide = (direction) => {
//   const sliderHeight = sliderContainer.clientHeight;
//   console.log(sliderHeight);
//   // clientHeight -the viewport's height is returned
//   if (direction === 'up') {
//     activeSlideIndex++;
//     if (activeSlideIndex > slidesLength - 1) {
//       activeSlideIndex = 0;
//     }
//   } else if (direction === 'down') {
//     activeSlideIndex--;
//     if (activeSlideIndex < 0) {
//       activeSlideIndex = slidesLength - 1;
//     }
//   }

//   //goes from down to up
//   slideRight.style.transform = `translateY(-${
//     activeSlideIndex * sliderHeight
//   }px)`;
//   //left is positive as it goes the other direction
//   slideLeft.style.transform = `translateY(${
//     activeSlideIndex * sliderHeight
//   }px)`;
// };

const toggles = document.querySelectorAll(".details-uefa-tab-toggle");

toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle("active");
    });
});
