//navigation

const closeImg = document.querySelector(".close-img");
const hamburger = document.querySelector(".header__hamburger");
const nav = document.querySelector(".navigation");
const header = document.querySelector(".header");

const openCloseNav = () => {
  header.classList.contains("active")
    ? header.classList.remove("active")
    : header.classList.add("active");
};

closeImg.addEventListener("click", openCloseNav);
hamburger.addEventListener("click", openCloseNav);

//carousel
const carouselSecond = document.querySelector(".carousel--second");
const backdrop = document.querySelector(".backdrop");
const closeIcon = document.querySelector(".fa-xmark");
const navList = document.querySelector(".navigation__list");
const carouselWrapper = document.querySelector(".carousel__wrapper");
const elements = [carouselSecond, backdrop, navList];

const removeActive = (elements) => {
  elements.forEach((element) => element.classList.remove("active"));
};
const addActive = (elements) => {
  elements.forEach((element) => element.classList.add("active"));
};

closeIcon.addEventListener("click", () => removeActive(elements));
carouselWrapper.addEventListener("click", () => addActive(elements));

//second carousel
const mainButtons = document.querySelectorAll(".indicators__button--main");
const secondButtons = document.querySelectorAll(".indicators__button--second");
const carouselSecondItems = document.querySelectorAll('.carousel-item--second')
mainButtons.forEach((button) => button.addEventListener("click", setBtn));

function setBtn() {
  let target = this.dataset.bsSlideTo;
  let carouselItem = document.querySelector(`[data-target="${target}"]`);
  let indicatorBtn = document.querySelector(`[data-target-sec="${target}"]`);
  addClass(carouselItem);
  addClass(indicatorBtn);
}

function addClass(element) {
  removeActive(carouselSecondItems)
  removeActive(secondButtons)
   setTimeout(() => {
     element.classList.add("active");
   }, 300); 
}




