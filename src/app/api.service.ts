import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor(private http:HttpClient) { }

insertStudent(data){
  return this.http.post("http://customapi-jossin.herokuapp.com/insertStudent",data);
}

retrieveStudent(data){
  return this.http.post("http://customapi-jossin.herokuapp.com/retrieveStudentByAdmn", data);
}

viewAllStudents(){
  return this.http.get("http://customapi-jossin.herokuapp.com/viewStudents");
}

editStudent(data){
  return this.http.post("http://customapi-jossin.herokuapp.com/updateStudent", data);
}

deleteStudent(data){
  return this.http.post("http://customapi-jossin.herokuapp.com/deleteStudent", data);
}

}
