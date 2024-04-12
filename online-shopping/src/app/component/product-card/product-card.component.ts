import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() id: string | undefined = '';
  @Input() name: string | undefined = '';
  @Input() image: string | undefined = '';
  @Input() category: string | undefined = '';
  @Input() price: number | undefined = 0;
  @Input() rating: number | undefined = 0;

  imageObj: { backgroundImage: string } | undefined;
  ratingArr: number[] = [];

  ngOnInit() {
    this.imageObj = {
      backgroundImage: `url(${this.image})`,
    };
  }
}
