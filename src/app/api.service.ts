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

}