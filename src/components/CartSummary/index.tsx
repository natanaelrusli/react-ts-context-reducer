import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import classes from "./CartSummary.module.css";

const CartSummary = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className={classes.cartSummary}>
      <div className={classes.cartSummary__heading}>Cart Summary</div>
      <div className={classes.cartSummary__productList}>
        {cart.products.map((product) => (
          <div className={classes.productCard}>
            <img src={product.images[0]} alt={product.title} />

            <div className={classes.productCard__details}>
              <div className={classes.productCard__detailsTitle}>
                {product.title}
              </div>
              <div className={classes.productCard__detailsPrice}>
                $ {product.price}
              </div>
              <div className={classes.productCard__detailsPrice}>
                Quantity: {product.quantity}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={classes.cartSummary__totalPrice}>
        <p className={classes.cartSummary__caption}>Total Price:</p>
        <p className={classes.cartSummary__number}>$ {cart.totalPrice}</p>
      </div>
    </div>
  );
};

export default CartSummary;
