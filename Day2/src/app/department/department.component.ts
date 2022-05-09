import { Component, OnInit } from '@angular/core';
import { Department } from '../Models/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  dept: Department = new Department(1,"os",40);
  constructor() { }

  ngOnInit(): void {
  }

}
