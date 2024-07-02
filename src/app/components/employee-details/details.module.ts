import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsRoutingModule } from './details-routing.module';
import { EmployeeDetailsComponent } from './employee-details.component';

@NgModule({
  declarations: [EmployeeDetailsComponent],
  imports: [
    CommonModule,
    DetailsRoutingModule
  ]
})
export class DetailsModule { }
