import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../../Product';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  product: Product | null = null;
  activeImage: string = '';
  attributes: any;
  reviewImageObj = {
    backgroundImage:
      'url(https://i.pinimg.com/236x/4b/97/56/4b97563c09b2e56630cbc1479bffe863.jpg)',
  };

  // ActivatedRoute service to retrieve the parameters for the route
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    // scroll to top
    window.scrollTo(0, 0);

    // Extract id param
    const id = this.route.snapshot.paramMap.get('id') || '';
    // Get the product details using the id
    this.productService.getProductBy(id).subscribe((prod) => {
      this.product = prod;
      this.activeImage = prod.images[0];
      this.attributes = Object.entries(this.product.attributes);
    });
  }

  addToCart() {
    this.cartService.addToCart({
      ...this.product,
      image: this.product?.images[0],
    });
    alert('Added to Cart!');
  }
}
