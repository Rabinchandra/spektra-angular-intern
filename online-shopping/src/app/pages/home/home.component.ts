import { Component, input } from '@angular/core';
import { Product } from '../../../../Product';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../../component/product-card/product-card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  products: Product[] = [];

  inputText: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService
      .getProductsByProperties('electronics')
      .then((res) => (this.products = res));
  }

  fetchData() {
    this.productService
      .getProductsByProperties(this.inputText)
      .then((res) => (this.products = res));
  }
}
