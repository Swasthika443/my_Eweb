import { Component, OnInit } from '@angular/core';
import * as productDetails from '../popular/product.json';
@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  product:any = (productDetails as any).default;
  productDetail=false;
  //Event to perform the toggle effect
  showproductDetailsToggle()
  {
    this.productDetail=!this.productDetail;
  }


}
