import { Injectable } from '@angular/core';
import { Department } from './_models/depratment';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private departments: Department[] = [
    new Department(1, 'os', 'Alex'),
    new Department(2, 'pd', 'mansora'),
    new Department(3, 'cross', 'Aswan'),
    new Department(4, 'Java', 'Smart'),
  ];

  getAllDepartments() {
    return this.departments;
  }

  addDepartment(newDept: Department) {
    this.departments.push(
      new Department(newDept.id, newDept.deptName, newDept.location)
    );
  }

  constructor() {}
}
