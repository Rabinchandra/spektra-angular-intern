import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../../Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  // Get products by category
  getProductsByProperties(inputText: string): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      this.getProducts().subscribe((products) => {
        // Filter the products with properties matching the inputText
        const filtered = products.filter((p) => {
          const regex = new RegExp(inputText, 'i');
          // Check for matching attributes using regular expression
          if (
            regex.test(p.brand) ||
            regex.test(p.name) ||
            regex.test(p.category)
          ) {
            return true;
          }
          // check if any of the subcategory matches
          if (p.subcategories.find((item) => regex.test(item))) {
            return true;
          }

          return false;
        });

        resolve(filtered);
      });
    });
  }

  // Get Product by id
  getProductBy(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
}
