import React, { useContext, useState } from "react";
import CartItem from "../components/CartItem";
import { Context } from "../context";

function Cart() {
  const [buttonText, setButtonText] = useState("Place Order");
  const { cartItems, emptyCart } = useContext(Context);
  const totalCost = 5.99 * cartItems.length;

  const cartItemsElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  function placeOrder() {
    setButtonText("Ordering...");
    setTimeout(() => {
      setButtonText("Place Order");
      emptyCart();
    }, 3000);
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemsElements}
      <p className="total-cost">Total: ${totalCost}</p>
      <div className="order-button">
        <button onClick={placeOrder}>{buttonText}</button>
      </div>
    </main>
  );
}

export default Cart;
