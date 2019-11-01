import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends DataService{
  // private url="https://jsonplaceholder.typicode.com/posts";
   constructor(http:Http) {
     super("https://localhost:5001/Employee",http);
    }
}
