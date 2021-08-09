import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CartController extends Controller {
  @service('shopping-cart') cart;

  get subtotal() {
    return this.cart.itemList.reduce((acc, item) => {
      return acc + item.price * item.count;
    }, 0);
  }
  get desconto() {
    return this.subtotal * 0.1;
  }

  get total() {
    return this.subtotal - this.desconto;
  }

  @action
  updateItemCount(item, event) {
    const count = event.target.value;

    count >= 0 ? (item.count = count) : (item.count = 0);
  }
}
