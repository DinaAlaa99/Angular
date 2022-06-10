import { Injectable } from '@angular/core';
import { Student } from './_models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students:Student[] = [
    new Student(1,"radwa",24,2),
    new Student(2,"mahitab",22,2),
    new Student(3,"shaimaa",22,2),
  ];

  getAllStudents(){
    return this.students;
  }

  addStudent(newStudent:Student){
    this.students.push(new Student(newStudent.id, newStudent.name, newStudent.age, newStudent.deptno));
  }

  getStudent(id:number){
    for (let i = 0; i < this.students.length; i++) {
      if(id==this.students[i].id){
        return this.students[i];
      }
    }
    return null;
  }
  constructor() { }
}