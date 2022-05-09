import { Component, OnInit } from '@angular/core';
import { Department } from '../Models/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent implements OnInit {
  dept: Department = new Department(1, 'os', '');
  ndept: Department = new Department(0, '', '');

  AddDept() {
    this.depts.push(
      new Department(this.ndept.id, this.ndept.name, this.ndept.location)
    );
    this.dept = new Department(0, '', '');
  }

  ShowDept(id: number) {
    for (let i = 0; i < this.depts.length; i++) {
      if (this.depts[i].id == id) {
        this.dept = this.depts[i];
        break;
      }
    }
  }
  DeleteDept(id: number) {
    for (let i = 0; i < this.depts.length; i++) {
      if (this.depts[i].id == id) {
         this.depts.splice(i, 1);
        break;
      }
    }
  }
  depts: Department[] = [
    new Department(1, 'os', "Alex"),
    new Department(2, 'pd', "Cairo"),
    new Department(3, 'admin', "Mansoura"),
  ];

  constructor() {}

  ngOnInit(): void {}
}
