import { useEffect, useReducer, useState } from "react";

import { ProductGrid } from "./components";
import { CartItf, ProductItf, UserDataItf } from "./types";

import "./App.css";
import { UserContext } from "./context/UserContext";
import { CartContext, CartDispatchContext } from "./context/CartContext";
import { cartReducer } from "./reducers/cartReducer";

function App() {
  const [products, setProducts] = useState<ProductItf[]>([]);
  const [user, setUser] = useState<UserDataItf>({
    username: "",
    email: "",
  });
  const initialCart: CartItf = {
    products: [],
    totalPrice: 0,
  };

  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data?.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <CartContext.Provider value={{ cart }}>
      <CartDispatchContext.Provider value={{ dispatch: dispatch }}>
        <UserContext.Provider value={{ user, setUser }}>
          <div className='comp'>
            <button
              onClick={() => {
                setUser({
                  username: "ev9801",
                  email: "ev9801@gmail.com",
                });
              }}
            >
              Login
            </button>
            <ProductGrid products={products} />
          </div>
        </UserContext.Provider>
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
