import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee.component';
import { AddEmployeeComponent } from './add-employee.component';
import { NewEmployeeComponent } from './new-employee.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent },
  { path: 'addemp/:code', component: AddEmployeeComponent },
  { path: 'newemp', component: NewEmployeeComponent },
 // { path: '**', component: EmployeeComponent }//NotFoundComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
