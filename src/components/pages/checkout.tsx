import React from "react";
import { observer } from "mobx-react-lite";
import cartStore from "../../stores/cartStore";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Button from "../ui/button";

const Checkout = () => {
  const handleQuantityChange = (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const quantity = parseInt(event.target.value);
    if (!isNaN(quantity) && quantity >= 0) {
      cartStore.updateQuantity(id, quantity);
    }
  };

  const handleRemoveItem = (id: string) => {
    cartStore.removeFromCart(id);
  };

  const handleClearCart = () => {
    cartStore.clearCart();
  };

  const handleCheckout = () => {
    alert(
      `Total: $${cartStore.totalPrice.toFixed(2)}. Proceeding to payment...`
    );
    cartStore.clearCart();
  };

  return (
    <>
      <Header />
      <div className="checkout">
        <h1 className="checkout__title">Checkout</h1>
        <div className="checkout__summary">
          <h3 className="checkout__summary-title">Your Order Summary:</h3>
          <div className="checkout__items">
            {cartStore.cart.length > 0 ? (
              cartStore.cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <h3>{item.title}</h3>
                  <p>${item.price.toFixed(2)} x</p>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => handleQuantityChange(item.id, e)}
                  />
                  <Button
                    className="remove"
                    text="Remove"
                    onClick={() => handleRemoveItem(item.id)}
                  />
                </div>
              ))
            ) : (
              <div>Your cart is empty.</div>
            )}
          </div>
          {cartStore.cart.length > 0 && (
            <div className="cart-total">
              <p>Total: ${cartStore.totalPrice.toFixed(2)}</p>
              <Button
                className="checkout"
                text="Complete Purchase"
                onClick={handleCheckout}
                ariaLabel="Proceed to checkout"
              />
              <Button
                className="clear"
                text="Clear Cart"
                onClick={handleClearCart}
                ariaLabel="Proceed to checkout"
              />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default observer(Checkout);
