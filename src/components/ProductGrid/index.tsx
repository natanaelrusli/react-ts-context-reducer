import { ProductItem } from "..";
import { ProductItf } from "../../types";
import classes from "./ProductGrid.module.css";

interface ProductGridProps {
  products: ProductItf[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className={classes.productGrid}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
