import { CartItf, ProductItf } from "../types";

export type CartAction = { type: "addToCart"; payload: ProductItf };

export function cartReducer(state: CartItf, action: CartAction): CartItf {
  const existingProduct = state.products.find(
    (product) => product.id === action.payload.id
  );

  switch (action.type) {
    case "addToCart":
      if (existingProduct) {
        return {
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
          totalPrice: state.totalPrice + action.payload.price,
        };
      } else {
        return {
          products: [...state.products, { ...action.payload, quantity: 1 }],
          totalPrice: state.totalPrice + action.payload.price,
        };
      }
    default:
      return state;
  }
}
