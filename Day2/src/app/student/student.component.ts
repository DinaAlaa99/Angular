import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  stdName= "Dina";
  stdImg = "asstes/img.jpg";
  // constructor() {
  //   this.stdName = "";
  //  }
  updateName(s:string)
  {
    console.log(s);
    this.stdName = s;
    
  }
  myfunc(s:string) {
    //this.stdName="Rahaf"
   console.log(s);
   
   //alert("Hi "+this.stdName);
  }
  ngOnInit(): void {
  }

}
