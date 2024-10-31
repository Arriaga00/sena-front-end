import { AdditionalProduct } from "@/data/data";

export interface Cart {
  id: number;
  name: string;
  quantity: string;
  price: number;
  image: string;
  category: string;
  comment: string;
  adicional: AdditionalProduct[];
}
