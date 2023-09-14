import { useEffect, useState } from "react";

import { ProductGrid } from "./components";
import { ProductItf } from "./types";

import "./App.css";

function App() {
  const [products, setProducts] = useState<ProductItf[]>([]);

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data?.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='comp'>
      <ProductGrid products={products} />
    </div>
  );
}

export default App;
