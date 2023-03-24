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
const counterWrapper = document.querySelector('.counter__wrapper')
const elements = [carouselSecond, backdrop, navList, counterWrapper];

const removeActive = (elements) => {
  trolley.addEventListener("click", shoWHideBasket);
  elements.forEach((element) => element.classList.remove("active"));
};
const addActive = (elements) => {
  console.log('ok');
  trolley.removeEventListener("click", shoWHideBasket);
  elements.forEach((element) => element.classList.add("active"));
};

closeIcon.addEventListener("click", () => removeActive(elements));
carouselWrapper.addEventListener("click", () => addActive(elements));

//basket

const trolley = document.querySelector(".cart__wrapper");
const basket = document.querySelector(".basket");
const shoWHideBasket = () => basket.classList.toggle("active");
trolley.addEventListener("click", shoWHideBasket);

//second carousel
const mainButtons = document.querySelectorAll(".indicators__button--main");
const secondButtons = document.querySelectorAll(".indicators__button--second");
const carouselSecondItems = document.querySelectorAll(".carousel-item--second");
mainButtons.forEach((button) => button.addEventListener("click", setBtn));

function setBtn() {
  let target = this.dataset.bsSlideTo;
  let carouselItem = document.querySelector(`[data-target="${target}"]`);
  let indicatorBtn = document.querySelector(`[data-target-sec="${target}"]`);
  addClass(carouselItem);
  addClass(indicatorBtn);
}

function addClass(element) {
  removeActive(secondButtons);
  removeActive(carouselSecondItems);
  setTimeout(() => {
    element.classList.add("active");
  }, 300);
}


//navigation hover effect

const navigationTxt = document.querySelectorAll('.navigation__text');
navigationTxt.forEach(el => {
  el.addEventListener('mouseover', () => el.parentNode.classList.add('active'))
  el.addEventListener('mouseout', () => el.parentNode.classList.remove('active'))
})



