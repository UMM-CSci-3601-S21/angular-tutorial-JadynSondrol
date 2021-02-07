import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor() { }

  ngOnInit(): void {
  }

}
