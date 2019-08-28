import { Component, OnInit } from '@angular/core';
import {ApiService  } from '../api.service';

@Component({
  selector: 'app-retrieve-student',
  templateUrl: './retrieve-student.component.html',
  styleUrls: ['./retrieve-student.component.css']
})
export class RetrieveStudentComponent implements OnInit {

  constructor(private apiservice:ApiService) { }

  ngOnInit() {
  }

}
