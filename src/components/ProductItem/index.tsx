import { ProductItf } from "../../types";

import classes from "./ProductItem.module.css";

interface ProductItemProps {
  product: ProductItf;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div key={product.id} className={classes.productItem}>
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
