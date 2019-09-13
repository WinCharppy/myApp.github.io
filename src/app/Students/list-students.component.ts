import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../Models/Student.model';
import { StudentServiceService } from '../Services/student-service.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

students:Student[] = [];

  constructor(private _studentservice:StudentServiceService) { }

  ngOnInit() {
    this._studentservice.getStudents().subscribe((data) => {
      this.students = data;
    });
  }

}
