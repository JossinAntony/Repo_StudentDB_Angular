import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor(private http:HttpClient) { }

insertStudent(data){
  return this.http.post("http://localhost:3052/insertStudent",data);
}

retrieveStudent(data){
  return this.http.post("http://localhost:3052/retrieveStudentByAdmn", data);
}

viewAllStudents(){
  return this.http.get("http://localhost:3052/viewStudents");
}

editStudent(data){
  return this.http.post("http://localhost:3052/updateStudent", data);
}
}
