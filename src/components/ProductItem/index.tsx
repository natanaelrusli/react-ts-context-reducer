import { ProductItf } from "../../types";

import classes from "./ProductItem.module.css";

interface ProductItemProps {
  product: ProductItf;
}

const ProductItem = ({ product }: ProductItemProps) => {
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

export default ProductItem;
