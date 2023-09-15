import { Dispatch, SetStateAction, createContext } from "react";
import { CartItf } from "../types";

interface CartContextItf {
  cart: CartItf;
  setCart: Dispatch<SetStateAction<CartItf>>;
}

const initialCartstate: CartItf = {
  products: [],
  totalPrice: 0,
};

export const CartContext = createContext<CartContextItf>({
  cart: initialCartstate,
  setCart: () => {},
});
