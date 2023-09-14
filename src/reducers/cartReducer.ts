import { CartItemItf } from "../types";

export interface CartState {
  products: CartItemItf[];
  totalPrice: number;
}

type CartActions = AddToCart | RemoveFromCart;

type AddToCart = { type: "addToCart"; payload: CartItemItf };
type RemoveFromCart = { type: "removeFromCart"; payload: CartItemItf };

export const cartReducer = (
  state: CartState,
  action: CartActions
): CartState => {
  const existingProduct = state.products.find(
    (product) => product.id === action.payload.id
  );

  const getTotalPrice = (products: CartItemItf[]) => {
    let total = 0;

    products.forEach((product) => {
      total += product.price * product.quantity;
    });

    return total;
  };

  switch (action.type) {
    case "addToCart":
      if (existingProduct) {
        const updatedProducts = state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );

        return {
          products: updatedProducts,
          totalPrice: getTotalPrice(updatedProducts),
        };
      } else {
        return {
          products: [...state.products, { ...action.payload, quantity: 1 }],
          totalPrice: state.totalPrice + action.payload.price,
        };
      }

    case "removeFromCart":
      if (!existingProduct || existingProduct.quantity === 1) {
        const updatedProducts = state.products.filter(
          (product) => product.id !== action.payload.id
        );

        return {
          products: updatedProducts,
          totalPrice: getTotalPrice(updatedProducts),
        };
      } else {
        const updatedProducts = state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        );

        return {
          products: updatedProducts,
          totalPrice: getTotalPrice(updatedProducts),
        };
      }

    default:
      return state;
  }
};
