import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecordComponent } from './add-record.component';
import { AddRecordRoutingModule } from './add-record-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddRecordComponent],
  imports: [
    CommonModule,
    AddRecordRoutingModule, ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddRecordModule { }
