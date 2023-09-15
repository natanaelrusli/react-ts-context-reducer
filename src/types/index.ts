export interface ProductItf {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

export interface CartItemItf extends ProductItf {
  quantity: number;
}

export interface CartItf {
  products: CartItemItf[];
  totalPrice: number;
}

export interface UserDataItf {
  username: string;
  email: string;
}
