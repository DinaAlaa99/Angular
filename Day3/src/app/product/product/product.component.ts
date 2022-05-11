import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  proudct: Product = new Product('', '', '', new Date(), 0, 0);
  nproduct: Product = new Product('', '', '', new Date(), 0, 0);
  addFlag: boolean = false;
  editFlag: boolean = false;
  imgFlag: boolean = false;
  index: number = -1;

  constructor() {}

  add() {
    this.addFlag = true;
  }
  store() {
    this.products.push(
      new Product(
        this.nproduct.img,
        this.nproduct.name,
        this.nproduct.code,
        this.nproduct.available,
        this.nproduct.price,
        this.nproduct.rate
      )
    );
  }
  show() {}
  edit() {}
  update() {}
  destroy() {}
  products: Product[] = [
    new Product('', 'Big Mac', 'gdn-123', new Date('2/2/2022'), 25, 5),
    new Product('', 'Big Tasty', 'tbx-121', new Date('1/2/2022'), 30, 4),
    new Product('', 'Sunday', 'gdn-122', new Date('10/5/2022'), 10, 2),
  ];
  ngOnInit(): void {}
}
