export interface OrderProps {
  price: number;
  quantity: string;
  name: string;
  image: string;
  category: string;
  id: number;
}

export interface Additional {
  name: string;
  quantity: number;
  price: number;
}
