import { Component, OnInit } from '@angular/core';
import { Student } from '../Models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  std: Student = new Student(0, '', 0, 0);
  nstd: Student = new Student(0, '', 0, 0);
  editFlag: boolean = false;
  index: number = -1;

  constructor() {}
  add() {
    this.stds.push(
      new Student(this.nstd.id, this.nstd.name, this.nstd.age, this.nstd.deptno)
    );
    this.std = new Student(0, '', 0, 0);
  }

  show(id: number) {
    this.editFlag = false;
    for (let i = 0; i < this.stds.length; i++) {
      if (this.stds[i].id == id) {
        this.std = this.stds[i];
        break;
      }
    }
  }
  edit(id: number) {
    for (let i = 0; i < this.stds.length; i++) {
      if (this.stds[i].id == id) {
        this.std = this.stds[i];
        this.index = i;
        break;
      }
    }
    this.editFlag = true;
  }
  update(id: any, name: string, age: any, deptno: any) {
    this.editFlag = false;
    this.stds[this.index].id = id;
    this.stds[this.index].name = name;
    this.stds[this.index].age = age;
    this.stds[this.index].deptno = deptno;
  }
  destroy(id: number) {
    this.editFlag = false;
    for (let i = 0; i < this.stds.length; i++) {
      if (this.stds[i].id == id) {
        this.stds.splice(i, 1);
        break;
      }
    }
  }
  stds: Student[] = [
    new Student(1, 'Dina', 23, 1),
    new Student(2, 'Rowan', 23, 1),
    new Student(3, 'Reham', 24, 1),
    new Student(4, 'Esraa', 24, 2),
  ];

  ngOnInit(): void {}
}
