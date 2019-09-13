import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentServiceService } from '../Services/student-service.service';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import { Student } from '../Models/Student.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
@ViewChild('studentForm',{static:false}) public createStudentForm:NgForm;
student:Student;
isCreate:boolean = false;
  constructor(private _studentservice:StudentServiceService,
              private _route:ActivatedRoute) { }

  ngOnInit() {
    this._route.paramMap.subscribe((parameterMap) => {
      const transferredId = +parameterMap.get('id');
      this.getStudent(transferredId);
    });
  }

  getStudent(id:number){
    if(id === 0){
     this.isCreate = true;
     this.student = {
      id:null,
      FirstName:null,
      LastName:null,
      Gender:null,
      BirthDate:null,
      RegistrationDate:Date.now().toString(),
      Email:null,
      Program:null,
      Branch:null,
      YearOfPassing:null,
      Duration:null,
      Status:false,
      PhotoPath:null,
      DocumentPath:null
     }
    }else{
      this._studentservice.getStudentItem(id).subscribe((item) => {
        this.student = item;
      });
    }
  }

  saveStudent(){
    if(this.student.id === null){
      //Get current max id of the listStudents
      const maxid = this._studentservice.listStudents.reduce((e1,e2) => {
        return (e1.id > e2.id)?e1:e2;
      }).id;
      //Add 1 to the maxid as the new id
      this.student.id = maxid + 1;
      //Add this new item into the listStudent
      this._studentservice.listStudents.push(this.student);

    }else{
      //Get the student item from the listStudent by id and assign the updated student to it.
      this._studentservice.getStudentItem(this.student.id).subscribe((founditem) => {
        founditem = this.student;
      })
    }
  }
}
