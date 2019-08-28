import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.component.html',
  styleUrls: ['./edit-entry.component.css']
})
export class EditEntryComponent implements OnInit {

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

  edit(){
    this.apiservice.editStudent(this.studentData[0]).subscribe((response:Array<object>)=>{
      alert("Entry updated!")
    })
  }


}
