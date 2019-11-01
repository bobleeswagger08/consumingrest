import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
import {FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees:any[];
  loginSuccess:boolean=false;
  loginForm= new FormGroup({
  userName:new FormControl('',Validators.required),
  userPassword:new FormControl('',Validators.required,PasswordValidators.validPassword)
  })
  constructor(private router:Router,private service:EmployeeService) { 
    
  }
  get userName(){return this.loginForm.get('userName')};
  get userPassword(){return this.loginForm.get('userPassword')};
  ngOnInit() {
    let ls= localStorage.getItem('isLoggedIn')
    if(ls)
    this.loginSuccess=true;
    else
    this.loginSuccess=false;

    this.service.getAll()
      .subscribe(employees => this.employees = employees);
  }
  deleteEmployee(emp){
    emp['code']= emp.code
    let index= this.employees.indexOf(emp);
    this.employees.splice(index,1);

    this.service.delete('Id/'+emp.code)
    .subscribe(
      null,
    (error: AppError) => {
      this.employees.splice(index,0,emp);
      
      if(error instanceof NotFoundError){
        alert('This post has already been deleted.')
      }
      else throw error;
    });

  }
  editEmployee(emp){
    this.router.navigate(['employee/addemp',emp.code]);
  }
  addEmployee(){
    this.router.navigate(['employee/newemp']);
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.loginSuccess=true;
    localStorage.setItem('isLoggedIn','true');
    console.warn(this.loginForm.value);
  }
  logOut(){
    localStorage.removeItem('isLoggedIn');
    this.loginSuccess=false;
  }
}
