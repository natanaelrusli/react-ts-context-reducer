import { useContext } from "react";
import { ProductItf } from "../../types";

import classes from "./ProductItem.module.css";
import { UserContext } from "../../context/UserContext";

interface ProductItemProps {
  product: ProductItf;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const { user } = useContext(UserContext);

  return (
    <div key={product.id} className={classes.productItem}>
      <p>{user.username}</p>
      <div className={classes.productItem__imageWrapper}>
        <img src={product.images[0]} alt={product.title} />
      </div>

      <div className={classes.productTitle}>{product.title}</div>

      <button className={classes.addProductButton} onClick={() => {}}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
