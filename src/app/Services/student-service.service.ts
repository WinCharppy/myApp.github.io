import { Injectable } from '@angular/core';
import { Student } from '../Models/Student.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  studentItem:Student;
  listStudents:Student[]= [
  {
    id:1,
    FirstName:'Anne',
    LastName:'One',
    Gender:'Female',
    BirthDate:new Date('1997/11/17'),
    RegistrationDate:'2018/10/24',
    Email:'Anne@abc.com',
    Program:'IT',
    Branch:'Java',
    YearOfPassing:'2017',
    Duration:'4',
    Status:true,
    PhotoPath:'assets/studentfemale.jpg',
    DocumentPath:'assets/TOEFL sample.png'
  },
  {
    id:2,
    FirstName:'Merlin',
    LastName:'Two',
    Gender:'Male',
    BirthDate:new Date('1993/07/19'),
    RegistrationDate:'2018/07/24',
    Email:'Merlin@abc.com',
    Program:'IT',
    Branch:'Angular',
    YearOfPassing:'2016',
    Duration:'3',
    Status:true,
    PhotoPath:'assets/studentmale.jpg',
    DocumentPath:'assets/Certificate sample.jpg'
  }
]
  constructor() { }
getStudents():Observable<Student[]>{
  return of(this.listStudents);
}

getStudentItem(id:number):Observable<Student>{
  return of(this.listStudents.find(e => e.id === id));
}
}
