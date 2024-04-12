export interface Product {
  id: string;
  name: string;
  description: string;
  brand: string;
  category: string;
  subcategories: string[];
  price: number;
  discount: number;
  images: string[];
  stock: number;
  attributes: {
    [key: string]: string;
  };
  reviews: {
    user: string;
    rating: number;
    comment: string;
  }[];
  rating: number;
}
