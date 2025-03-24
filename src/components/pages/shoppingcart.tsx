import React from "react";
import { observer } from "mobx-react-lite";
import cartStore from "../../stores/cartStore";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Button from "../ui/button";
import { Link } from "react-router-dom";

const CartPage = observer(() => {
  return (
    <>
      <Header />
      <div className="cart-page">
        <h2>Your Cart ({cartStore.totalItems} items)</h2>
        {cartStore.cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartStore.cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-image" />
                <div>
                  <h3>{item.title}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                  <Button
                    className="remove"
                    text="Remove"
                    onClick={() => cartStore.removeFromCart(item.id)}
                    ariaLabel={`Remove ${item.title} from cart`}
                  />
                </div>
              </div>
            ))}
            <h3>Total Price: ${cartStore.totalPrice.toFixed(2)}</h3>
            {cartStore.cart.length > 0 && (
              <Link to="/checkout">
                <Button
                  className="checkout"
                  text="Complete Purchase"
                  ariaLabel="Proceed to checkout"
                />
              </Link>
            )}
            <Button
              text="Clear Cart"
              className="clear"
              isClearCart={true}
              ariaLabel="Clear shopping cart"
            />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
});

export default CartPage;
