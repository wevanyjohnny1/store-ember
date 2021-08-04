import Controller from '@ember/controller';

export default class CartController extends Controller {
  get subtotal() {
    return this.model.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
  }
  get desconto() {
    return this.subtotal * 0.1;
  }

  get total() {
    return this.subtotal - this.desconto;
  }
}
