export class Item {
  constructor(item) {
    this.item = item;  
  }
  getProductPriceEl() {
    this.productPrice = document.querySelector(".product__price");
  }
  getProductRemoveEl() {
    this.productRemove = document.querySelector(".basket__remove");
  }
  createTemplate() {
    return `
        <div class="basket__product d-row">
        <img class="basket__img" src="${this.item.img}" alt="${this.item.alt}">
        <div class="basket__summary d-row">
            <div class="basket__details">
                <p class="basket__product-name">${this.item.name}</p>
                <p class="product__price"></p>
            </div>
        </div>
        <i class="fas fa-solid fa-trash-can basket__remove" tabindex="0"></i>
        </div>
        <div class="orange-btn basket__btn d-row" tabindex="0">
                        <p class="checkout-txt">Checkout</p>
        </div>
      `;
  }
  createEmptyBagTemplate() {
    return `
    <p class="basket__empty">Your cart is empty</p>
    `
  }
  totalPrice() {
    return this.item.price * this.item.quantity;
  }
}

