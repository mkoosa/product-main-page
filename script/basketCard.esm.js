//basket, cart

import {
  buyPlus,
  buyMinus,
  quantityProduct,
  counterProduct,
  productPrice,
  emptyBasket,
  basketProduct,
  basketBtn,
  addBtn,
  trolley,
  basketRemove,
  basket,
} from "./elements.esm.js";

export const shoWHideBasket = () => {
  basket.classList.toggle("active");
};

const item = {
  price: 125,
  quantity: 0,
  show: false,
  total() {
    return this.price * this.quantity;
  },
};

trolley.addEventListener("click", shoWHideBasket);

const cartContent = () => {
  item.quantity ? addCartContent() : removeCartContent();
};

const removeCartContent = () => {
  basketProduct.style.display = "none";
  basketBtn.style.display = "none";
  emptyBasket.style.display = "block";
};

const addCartContent = () => {
    basketProduct.style.display = "flex";
    basketBtn.style.display = "flex";
    emptyBasket.style.display = "none";
};

const displayQuantity = () => {
  quantityProduct.innerText = item.quantity;
  counterProduct.innerText = item.quantity;
  displayTotal();
  showHideCounter();
  cartContent();
};

const addProductQuantity = () => {
  item.quantity++;
  quantityProduct.innerText = item.quantity;
  if (item.show) displayQuantity();
};

const subtractProductQuantity = () => {
  item.quantity--;
  if (item.quantity < 0) item.quantity = 0;
  quantityProduct.innerText = item.quantity;
  if (item.show) displayQuantity();
};

const addProductToBag = () => {
  item.show = true;
  counterProduct.innerText = item.quantity;
  displayTotal();
  showHideCounter();
  cartContent();
};

addBtn.addEventListener("click", addProductToBag);
buyPlus.addEventListener("click", () => addProductQuantity());
buyMinus.addEventListener("click", () => subtractProductQuantity());

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
  displayQuantity();
};
basketRemove.addEventListener("click", removeItemFromBasket);
