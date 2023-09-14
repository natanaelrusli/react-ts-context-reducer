import { useReducer } from "react";
import { CartState, cartReducer } from "../../reducers/cartReducer";
import { ProductItf } from "../../types";

import classes from "./ProductItem.module.css";

interface ProductItemProps {
  product: ProductItf;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const initialCart: CartState = {
    products: [],
    totalPrice: 0,
  };

  const [, dispatchCart] = useReducer(cartReducer, initialCart);

  const handleAddToCart = (product: ProductItf) => {
    dispatchCart({
      type: "addToCart",
      payload: {
        id: product.id,
        title: product.title,
        images: product.images,
        price: product.price,
        description: product.description,
        quantity: 1,
      },
    });
  };

  return (
    <div key={product.id} className={classes.productItem}>
      <div className={classes.productItem__imageWrapper}>
        <img src={product.images[0]} alt={product.title} />
      </div>

      <div className={classes.productTitle}>{product.title}</div>

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
