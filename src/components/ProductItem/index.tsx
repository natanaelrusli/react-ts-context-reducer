import { ProductItf } from "../../types";

import classes from "./ProductItem.module.css";

interface CartItemProps {
  product: ProductItf;
}

const CartItem = ({ product }: CartItemProps) => {
  return (
    <div key={product.id} className={classes.productItem}>
      <img src={product.images[0]} alt='' />
      <div className={classes.productTitle}>{product.title}</div>
      <button className={classes.addProductButton} onClick={() => {}}>
        Add to Cart
      </button>
    </div>
  );
};

export default CartItem;
