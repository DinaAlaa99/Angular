import { Injectable } from '@angular/core';
import { Student } from './_models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[] = [
    new Student(1, 'Dina', 24, 2),
    new Student(2, 'Reham', 22, 2),
    new Student(3, 'Rowan', 22, 2),
  ];

  getAllStudents() {
    return this.students;
  }

  addStudent(newStudent: Student) {
    this.students.push(
      new Student(
        newStudent.id,
        newStudent.name,
        newStudent.age,
        newStudent.deptno
      )
    );
  }
  constructor() {}
}
