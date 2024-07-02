import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditDetailsComponent } from './edit-details.component';
import { EditDetailsRoutingModule } from './edit-details-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EditDetailsComponent],
  imports: [
    CommonModule,
    EditDetailsRoutingModule,ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditDetailsModule { }
