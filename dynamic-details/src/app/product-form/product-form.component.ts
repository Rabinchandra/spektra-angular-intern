import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {
  title = '';
  price = 0;
  description = '';

  constructor(private productService: ProductService) {}

  onAdd() {
    this.productService.addProducts({
      title: this.title,
      price: this.price,
      description: this.description,
    });
  }
}
