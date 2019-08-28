import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private apiservice:ApiService) { }

  ngOnInit() {
  }

  onSubmit(data:NgForm){
    this.apiservice.insertStudent(data.value).subscribe((response)=>{
      //console.log(response);
      alert('Student successfully added into database!')
    })
  }

}
