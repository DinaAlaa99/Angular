import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
declare var window: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product: Product = new Product(0, '', '', '', new Date(), 0, 0);
  nproduct: Product = new Product(0, '', '', '', new Date(), 0, 0);
  editFlag: boolean = false;
  imgFlag: boolean = false;
  index: number = -1;
  readonly: boolean = true;
  addFormModal: any;
  editFormModal: any;
  showModal: any;
  filter: string='';
  constructor() {}

  add() {
    this.readonly = true;
    this.nproduct.img = this.nproduct.img.replace(/^C:\\fakepath\\/i, '');
    this.products.push(
      new Product(
        this.nproduct.id,
        this.nproduct.img,
        this.nproduct.name,
        this.nproduct.code,
        this.nproduct.available,
        this.nproduct.price,
        this.nproduct.rate
      )
    );
    //this.product = new Product(0, '', '', '', new Date(), 0, 0);
    this.addFormModal.hide();
  }
  show(id: number) {
    this.readonly = true;
    this.showModal.show();
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        this.product = this.products[i];
        break;
      }
    }
  }
  edit(id: number) {
    this.readonly = false;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        this.product = this.products[i];
        this.index = i;
        break;
      }
    }
    this.editFormModal.show();
  }
  update(id: any, name: any, code: any, date: any, price: any, rate: any) {
    this.readonly = true;
    this.editFormModal.hide();
    this.products[this.index].id = id;
    this.products[this.index].img = this.product.img;
    this.products[this.index].name = name;
    this.products[this.index].code = code;
    this.products[this.index].available = date;
    this.products[this.index].price = price;
    this.products[this.index].rate = this.nproduct.rate;
  }
  destroy(id: number) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        this.products.splice(i, 1);
        break;
      }
    }
  }
  showImages() {
    if (this.imgFlag) {
      this.imgFlag = false;
    } else {
      this.imgFlag = true;
    }
  }
  products: Product[] = [
    new Product(
      1,
      'bigmac.jpg',
      'Big Mac',
      'gdn-123',
      new Date('2/2/2022'),
      25,
      5
    ),
    new Product(
      2,
      'bigtasty.jpg',
      'Big Tasty',
      'tbx-121',
      new Date('1/2/2022'),
      30,
      4
    ),
    new Product(
      3,
      'sunday.jpg',
      'Sunday',
      'gdn-122',
      new Date('10/5/2022'),
      10,
      2
    ),
  ];
  ngOnInit(): void {
    this.addFormModal = new window.bootstrap.Modal(
      document.getElementById('myAddModal')
    );
    this.editFormModal = new window.bootstrap.Modal(
      document.getElementById('myEditModal')
    );
    this.showModal = new window.bootstrap.Modal(
      document.getElementById('showModal')
    );
  }

  openAddFormModal() {
    this.readonly = false;
    this.addFormModal.show();
  }

  rating(value: string) {
    this.nproduct.rate = Number(value);
  }
}
