import { CartItf, ProductItf } from "../types";

export type CartAction = { type: "addToCart"; payload: ProductItf };

export function cartReducer(state: CartItf, action: CartAction): CartItf {
  const existingProduct = state.products.find((product) => {
    return product.id === action.payload.id;
  });

  switch (action.type) {
    case "addToCart":
      if (existingProduct) {
        return {
          products: [
            ...state.products,
            { ...existingProduct, quantity: existingProduct.quantity + 1 },
          ],
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
