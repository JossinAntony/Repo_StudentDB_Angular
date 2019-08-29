import { Component, OnInit } from '@angular/core';
import {ApiService  } from '../api.service';


@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit {

  students : Array<object>;
  constructor(private apiservice:ApiService) { }

  ngOnInit() {
    this.fetchData();
  }

  public fetchData(){
    this.apiservice.viewAllStudents().subscribe((response:Array<Object>)=>{
      this.students=response;
    });

  }

}
