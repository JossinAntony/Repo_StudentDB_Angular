import { Component, OnInit } from '@angular/core';
import {ApiService  } from '../api.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-retrieve-student',
  templateUrl: './retrieve-student.component.html',
  styleUrls: ['./retrieve-student.component.css']
})
export class RetrieveStudentComponent implements OnInit {

  private studentData : Array<object>;
  private status = false;
  constructor(private apiservice:ApiService) { }

  ngOnInit() {
  }

  onSubmit(data:NgForm){
    this.apiservice.retrieveStudent(data.value).subscribe((response:Array<object>)=>{
      if(response.length > 0){
      this.studentData=response;
      this.status = true;
      }else{
        alert("No matching entires found!")
        this.status = false;
      }
    })
  }
}
