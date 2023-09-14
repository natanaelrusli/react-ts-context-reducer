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
