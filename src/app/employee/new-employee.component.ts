import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import {empDetail} from './employee-detail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  
  constructor(private router:Router,private service:EmployeeService) { 
    
  }
  
  ngOnInit() {
  }
  updateEmployee(emp){
    let employeeDetail={code:'',
    tasks:{}={}
  };
    employeeDetail['code']=emp.code;
    employeeDetail['name']=emp.name;
    employeeDetail['note']=emp.note;
    employeeDetail.tasks['description']=emp.tasks;
    
    console.log(employeeDetail);
     // let post = { title : inputTitle.value };
      // this.employees=this.employeeDetail;
      // this.employeeDetail.splice(0,0,post);
      console.log(employeeDetail);
     //inputTitle.value='';
     this.service.create(employeeDetail)
      .subscribe(newEmployee=>{
       // post['id']= newPost.id;
       // console.log(newEmployee);
        this.router.navigate(['employee']);
      },(error:AppError)=>{
       //this.posts.splice(0,1)

        if(error instanceof BadInput){
          //this.form.setErrors(error.json());
         // this.form.setErrors(error.originalError);
        }
        else throw error;
      });
     
  }

}
