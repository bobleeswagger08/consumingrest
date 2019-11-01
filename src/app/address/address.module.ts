import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressRoutingModule } from './address-routing.module';
import { AddressComponent } from './address.component';
import { RegisteraddressComponent } from './registeraddress.component';


@NgModule({
  declarations: [AddressComponent, RegisteraddressComponent],
  imports: [
    CommonModule,
    AddressRoutingModule
  ]
})
export class AddressModule { }
