document.addEventListener("DOMContentLoaded", () => {
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
  const counterWrapper = document.querySelector(".counter__wrapper");
  const basket = document.querySelector(".basket");
  const elements = [carouselSecond, backdrop, navList, counterWrapper];

  const removeActive = (elements) => {
    trolley.addEventListener("click", shoWHideBasket);
    elements.forEach((element) => element.classList.remove("active"));
  };

  const freezeSecondCarousel = () => {
    return basket.classList.contains("active");
  };

  const addActive = (elements) => {
    if (freezeSecondCarousel()) return;
    trolley.removeEventListener("click", shoWHideBasket);
    elements.forEach((element) => element.classList.add("active"));
  };

  closeIcon.addEventListener("click", () => removeActive(elements));
  carouselWrapper.addEventListener("click", () => addActive(elements));

  //second carousel

  const mainButtons = document.querySelectorAll(".indicators__button--main");
  const secondButtons = document.querySelectorAll(
    ".indicators__button--second"
  );
  const carouselSecondItems = document.querySelectorAll(
    ".carousel-item--second"
  );
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

  const navigationTxt = document.querySelectorAll(".navigation__text");
  navigationTxt.forEach((el) => {
    el.addEventListener("mouseover", () =>
      el.parentNode.classList.add("active")
    );
    el.addEventListener("mouseout", () =>
      el.parentNode.classList.remove("active")
    );
  });

  //basket, cart

  const buyPlus = document.querySelector(".buy__plus");
  const buyMinus = document.querySelector(".buy__minus");
  const quantityProduct = document.querySelector(".buy__amount");
  const counterProduct = document.querySelector(".counter__product");
  const productPrice = document.querySelector(".product__price");
  const emptyBasket = document.querySelector(".basket__empty");
  const basketProduct = document.querySelector(".basket__product");
  const button = document.querySelector(".basket__btn");
  const addBtn = document.querySelector(".orange-btn--buy");
  const trolley = document.querySelector(".cart__wrapper");
  const basketRemove = document.querySelector(".basket__remove");

  function shoWHideBasket() {
    basket.classList.toggle("active");
  }

  trolley.addEventListener("click", shoWHideBasket);

  const item = {
    price: 125,
    quantity: 0,
    show: false,
    total() {
      return this.price * this.quantity;
    },
  };

  const cartContent = () => {
    item.quantity ? showContent() : hideContent();
  };

  const hideContent = () => {
    basketProduct.style.display = "none";
    button.style.display = "none";
    emptyBasket.style.display = "block";
  };

  const showContent = () => {
    basketProduct.style.display = "flex";
    button.style.display = "flex";
    emptyBasket.style.display = "none";
  };

  const displayBasketContent = () => {
    quantityProduct.innerText = item.quantity;
    counterProduct.innerText = item.quantity;
    displayTotal();
    showHideCounter();
    cartContent();
  };

  const add = () => {
    item.quantity++;
    quantityProduct.innerText = item.quantity;
    if (item.show) displayBasketContent();
  };

  const sub = () => {
    item.quantity--;
    if (item.quantity < 0) item.quantity = 0;
    quantityProduct.innerText = item.quantity;
    if (item.show) displayBasketContent();
  };

  const addToCart = () => {
    item.show = true;
    counterProduct.innerText = item.quantity;
    displayTotal();
    showHideCounter();
    cartContent();
  };

  addBtn.addEventListener("click", addToCart);
  buyPlus.addEventListener("click", () => add());
  buyMinus.addEventListener("click", () => sub());

  const displayTotal = () => {
    productPrice.innerText = `${item.price.toFixed(2)}x${item.quantity} $${item
      .total()
      .toFixed(2)}`;
  };

  const showHideCounter = () => {
    !item.quantity
      ? (counterProduct.style.display = "none")
      : (counterProduct.style.display = "block");
  };

  const removeItemFromBasket = () => {
    item.quantity = 0;
    displayBasketContent();
  };
  basketRemove.addEventListener("click", removeItemFromBasket);
});
