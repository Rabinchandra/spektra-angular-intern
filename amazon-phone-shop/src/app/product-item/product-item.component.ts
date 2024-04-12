import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() price: number = 0;
  @Input() discount: number = 0;
  @Input() image: string = '';

  constructor(private router: Router) {}

  goToDetail() {
    this.router.navigate([`/${this.id}`]);
  }
}
