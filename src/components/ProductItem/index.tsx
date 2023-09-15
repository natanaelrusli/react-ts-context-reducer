import { useContext } from "react";
import { ProductItf } from "../../types";

import classes from "./ProductItem.module.css";
import { CartDispatchContext } from "../../context/CartContext";

interface ProductItemProps {
  product: ProductItf;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const { dispatch } = useContext(CartDispatchContext);

  const handleAddToCart = (product: ProductItf) => {
    dispatch({
      type: "addToCart",
      payload: product,
    });
  };

  return (
    <div key={product.id} className={classes.productItem}>
      <div className={classes.productItem__imageWrapper}>
        <img src={product.images[0]} alt={product.title} />
      </div>

      <div className={classes.productTitle}>{product.title}</div>

      <div className={classes.productPrice}>${product.price}</div>

      <button
        className={classes.addProductButton}
        onClick={() => handleAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
