import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css',
})
export class SearchResultsComponent {
  products: any[] = [];

  constructor(private productService: ProductsService) {
    this.products = this.productService.products;
  }
}
