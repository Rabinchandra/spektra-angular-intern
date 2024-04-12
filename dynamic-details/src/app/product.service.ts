import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: any[] = [
    {
      title: 'Product 1',
      price: 20,
      description: 'product description',
    },
  ];
  constructor() {}

  addProducts(product: any) {
    this.products.push(product);
  }
}
