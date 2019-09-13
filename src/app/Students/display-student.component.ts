import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../Models/Student.model';
import { Router } from '@angular/router';
import { StudentServiceService } from '../Services/student-service.service';

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent implements OnInit {
@Input() student:Student;
@Input() searchTerm:string;
  constructor(private _router: Router,
              private _studentservice:StudentServiceService) { }

  ngOnInit() {
  }

viewStudent(){
  this._router.navigate(['/student',this.student.id]);
}

editStudent(){
  this._router.navigate(['/edit',this.student.id]);
}

deleteStudent(id:number){
  const i = +this._studentservice.listStudents.findIndex(e => e.id === id);
  this._studentservice.listStudents.splice(i,1);
}
}
