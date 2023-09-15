import { useContext } from "react";
import { ProductItf } from "../../types";

import classes from "./ProductItem.module.css";
import { CartContext } from "../../context/CartContext";

interface ProductItemProps {
  product: ProductItf;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div key={product.id} className={classes.productItem}>
      {cart.products.map((product) => (
        <p>{product.title}</p>
      ))}
      <div className={classes.productItem__imageWrapper}>
        <img src={product.images[0]} alt={product.title} />
      </div>

      <div className={classes.productTitle}>{product.title}</div>

      <button
        className={classes.addProductButton}
        onClick={() =>
          setCart({
            products: [...cart.products, { ...product, quantity: 1 }],
            totalPrice: cart.totalPrice + product.price,
          })
        }
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
