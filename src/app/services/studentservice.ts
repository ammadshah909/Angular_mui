import { Service } from '@angular/core';
import { IStudent } from '../model/student';

@Service()
export class Studentservice {
    studentList: IStudent [] = []
    addStudent(student : IStudent){
        this.studentList.push(student)
    }
    getStudents() : IStudent[] {
return this.studentList
    }
}
