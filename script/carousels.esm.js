import {
  trolley,
  elements,
  basket,
  closeIcon,
  carouselWrapper,
  mainButtons,
  secondButtons,
  carouselSecondItems,
} from "./elements.esm.js";

import { shoWHideBasket } from "./basketCard.esm.js";

const removeActiveClass = (elements) => {
  trolley.addEventListener("click", shoWHideBasket);
  elements.forEach((element) => element.classList.remove("active"));
};

const freezeSecondCarousel = () => {
  return basket.classList.contains("active");
};

const addActiveClass = (elements) => {
  if(window.innerWidth<800) return;
  if (freezeSecondCarousel()) return;
  trolley.removeEventListener("click", shoWHideBasket);
  elements.forEach((element) => element.classList.add("active"));
};

closeIcon.addEventListener("click", () => removeActiveClass(elements));
carouselWrapper.addEventListener("click", () => addActiveClass(elements));

//second carousel
mainButtons.forEach((button) => button.addEventListener("click", setBtn));
function setBtn() {
  let target = this.dataset.bsSlideTo;
  let carouselItem = document.querySelector(`[data-target="${target}"]`);
  let indicatorBtn = document.querySelector(`[data-target-sec="${target}"]`);
  addClass(carouselItem);
  addClass(indicatorBtn);
}

function addClass(element) {
  removeActiveClass(secondButtons);
  removeActiveClass(carouselSecondItems);
  setTimeout(() => {
    element.classList.add("active");
  }, 300);
}
