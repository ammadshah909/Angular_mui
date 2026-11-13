import { Component } from '@angular/core';
import { IStudent } from '../../model/student';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

import { Studentservice } from '../../services/studentservice';

@Component({
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  selector: 'app-add-student',
  styleUrl: './add-student.css',
  templateUrl: './add-student.html',
})

export class AddStudent {

  constructor(private studenttservice: Studentservice) {}

  student: IStudent = {
    name: "",
    age: 0,
    contact: "",
    course: ""
  };

  addStudent() {

    if (
      !this.student.name.trim() ||
      !this.student.contact.trim() ||
      !this.student.course.trim() ||
      this.student.age <= 0
    ) {
      alert("Please fill all fields correctly!");
      return;
    }

    // Console mein student details show hongi
    console.log("Student Added Successfully!");
    console.log(this.student);

    // Student service mein add hoga
    this.studenttservice.addStudent({ ...this.student });

    alert("Student Added Successfully!");

    // Form reset
    this.student = {
      name: "",
      age: 0,
      contact: "",
      course: ""
    };

  }

}