import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

import {empDetail} from './employee-detail';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
 // employees:any[];
  empCode:string;
  employeeDetail:empDetail;
  constructor(private route:ActivatedRoute,private router:Router,private service:EmployeeService) { }

  ngOnInit() {
    this.empCode=this.route.snapshot.paramMap.get('code');
    if(this.empCode){
    this.service.getAll('Id/'+this.empCode)
      .subscribe(employees => this.employeeDetail = employees);
    }
  }
  updateEmployee(){
      this.service.updatePut(this.employeeDetail)
      //this.http.put(this.url,JSON.stringify(post))
      .subscribe(updatedEmployee=>{
        //console.log(updatedEmployee);
        this.router.navigate(['employee']);
      });
      
    }
  
}
