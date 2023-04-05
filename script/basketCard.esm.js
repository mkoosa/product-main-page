//basket, cart

import {
  buyPlus,
  buyMinus,
  quantityProduct,
  counterProduct,
  addBtn,
  trolley,
  basket,
  buyAmount,
  basketContent,
} from "./elements.esm.js";
import { Item } from "./Item.esm.js";
import { Storage } from "./storage.esm.js";

//initial value
let sneakers = {
  name: "Fall Limited Edition Sneakers",
  price: 125,
  quantity: 0,
  isAdded: false,
  img: "/images/image-product-1-thumbnail.jpg",
  alt: "sneakers",
};

const storage = new Storage();

// updated value
sneakers =
  storage.getItemStorage(sneakers.name) === null
    ? sneakers
    : storage.getItemStorage(sneakers.name);

storage.setStorage(sneakers.name, sneakers);

let item = new Item(sneakers);
productQuantity(sneakers);
productCounter(sneakers);
if (sneakers.isAdded) displayBasketContent();
if(!sneakers.isAdded) emptyBag()

//methods
export const shoWHideBasket = () => {
  basket.classList.toggle("active");
};

function updateStorage() {
  storage.setStorage(sneakers.name, sneakers);
}

function add(element) {
  element.quantity++;
}

function sub(element) {
  element.quantity--;
  if (element.quantity <= 0) element.quantity = 0; 
}

function addProductQuantity(element) {
  if (!element.isAdded) {
    add(element);
    updateQuantity(element);
    return;
  }
  add(element);
  updateQuantity(element);
  displayTotalPriceValue();
}

function updateQuantity(element) {
  productQuantity(element);
  productCounter(element);
  updateStorage();
}

function subtractProductQuantity(element) {
  if (!element.isAdded) {
    sub(element);
    updateQuantity(element);
    return;
  }
  sub(element);
  updateQuantity(element);
  displayTotalPriceValue();
  if (element.quantity < 1) {
    element.quantity = 0;
    updateQuantity(element);
    displayTotalPriceValue();
    return;
  }
}

function productCounter(element) {
  counterProduct.innerText = element.quantity;
  hideShowCounterProduct(element);
}

function hideShowCounterProduct(element) {
  isAddedToCart(element)
    ? (counterProduct.style.display = "block")
    : (counterProduct.style.display = "none");
}

function productQuantity(element) {
  quantityProduct.innerText = element.quantity;
}

function isAddedToCart(element) {
  return element.isAdded ? true : false;
}

function addProductToCart() {
  displayBasketContent();
  sneakers.isAdded = true;
  counterProduct.style.display = "block";
  updateStorage();
  addBtn.removeEventListener("click", addProductToCart);
}

function removeProductFromBag() {
  sneakers.isAdded = false;
  removeBasketContent();
  sneakers.quantity = 0;
  updateStorage();
}

function removeBasketContent() {
  emptyBag()
  updateQuantity(sneakers);
  buyAmount.innerText = 0;
}

function notEmptyBag(){
  basketContent.innerHTML = item.createTemplate();
}

function emptyBag() {
  basketContent.innerHTML = item.createEmptyBagTemplate();
  addBtn.addEventListener("click", addProductToCart);
}  

function displayBasketContent() {
  notEmptyBag()
  item.getProductPriceEl();
  item.getProductRemoveEl();
  item.productRemove.addEventListener("click", removeProductFromBag);
  displayTotalPriceValue();
}

function displayTotalPriceValue() {
  notExistElement(item.productPrice);
  item.productPrice.innerText = `$${sneakers.price.toFixed(2)}x${
    sneakers.quantity
  } total: $${item.totalPrice()}`;
}

function notExistElement(element) {
  if (!element) return;
}



//listeners
buyPlus.addEventListener("click", () => addProductQuantity(sneakers));
buyMinus.addEventListener("click", () => subtractProductQuantity(sneakers));
trolley.addEventListener("click", shoWHideBasket);
addBtn.addEventListener("click", addProductToCart);
