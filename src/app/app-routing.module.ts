import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'employee-details/:id',
    loadChildren: () => import('./components/employee-details/details.module').then(m => m.DetailsModule),
  },
  {
    path: 'edit-employee-details/:id',
    loadChildren: () => import('./components/edit-details/edit-details.module').then(m => m.EditDetailsModule),
  },
  {
    path: 'add-record',
    loadChildren: () => import('./components/add-record/add-record.module').then(m => m.AddRecordModule),
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
