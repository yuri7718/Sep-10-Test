import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router'; 

import { SimpleTablesComponent } from '../simple-tables/simple-tables.component';
import { DataTablesComponent } from '../data-tables/data-tables.component';

export const routes: Routes = [
  { path: 'simpletables', component: SimpleTablesComponent },
  { path: 'datatables', component: DataTablesComponent },
  { path: '', redirectTo: '/simpletables', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
