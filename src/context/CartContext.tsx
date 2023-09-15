import { Dispatch, createContext } from "react";
import { CartItf } from "../types";
import { CartAction } from "../reducers/cartReducer";

interface CartContextItf {
  cart: CartItf;
}

interface CartDispatchContextItf {
  dispatch: Dispatch<CartAction>;
}

const initialCartstate: CartItf = {
  products: [],
  totalPrice: 0,
};

export const CartContext = createContext<CartContextItf>({
  cart: initialCartstate,
});

export const CartDispatchContext = createContext<CartDispatchContextItf>({
  dispatch: () => {},
});
