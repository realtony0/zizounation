// Product and Cart Types
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  puffs: number;
  variants: string[];
  image: string;
  description?: string;
  boxPrice?: number;
  boxQuantity?: number;
}

export interface CartItem {
  product: Product;
  variant: string;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

