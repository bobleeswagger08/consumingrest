import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { AddEmployeeComponent } from './add-employee.component';
import { NewEmployeeComponent } from './new-employee.component';


@NgModule({
  declarations: [EmployeeComponent, AddEmployeeComponent, NewEmployeeComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    EmployeeRoutingModule,
    
  ]
})
export class EmployeeModule { }
