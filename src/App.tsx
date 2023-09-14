import { useEffect, useState } from "react";

import { ProductGrid } from "./components";
import { ProductItf, UserDataItf } from "./types";

import "./App.css";
import { UserContext } from "./context/UserContext";

function App() {
  const [products, setProducts] = useState<ProductItf[]>([]);
  const [user, setUser] = useState<UserDataItf>({
    username: "",
    email: "",
  });

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data?.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className='comp'>
        <button onClick={() => {}}>Login</button>
        <ProductGrid products={products} />
      </div>
    </UserContext.Provider>
  );
}

export default App;
