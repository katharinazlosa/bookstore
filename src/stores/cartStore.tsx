import { makeAutoObservable } from "mobx";

type CartItem = {
  image: string | undefined;
  id: string;
  title: string;
  price: number;
  quantity: number;
};

class CartStore {
  cart: CartItem[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  // Add item to the cart
  addToCart(item: CartItem) {
    const existingItem = this.cart.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push(item);
    }
  }

  // Remove item from the cart
  removeFromCart(id: string) {
    this.cart = this.cart.filter((item) => item.id !== id);
  }

  // Update item quantity
  updateQuantity(id: string, quantity: number) {
    const item = this.cart.find((i) => i.id === id);
    if (item && quantity > 0) {
      item.quantity = quantity;
    }
  }

  // Calculate total price
  get totalPrice() {
    return this.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  // Get the total number of items in the cart
  get totalItems() {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  // Clear the cart
  clearCart() {
    this.cart = [];
  }
}

const cartStore = new CartStore();
export default cartStore;
