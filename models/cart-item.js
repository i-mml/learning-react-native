export default class CartItem {
  constructor(quantity, productPrice, productTitle, sum, imageUrl) {
    this.quantity = quantity;
    this.productPrice = productPrice;
    this.productTitle = productTitle;
    this.sum = sum;
    this.productImage = imageUrl;
  }
}
