import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SuccessRoutingModule } from './success-routing.module';
import { SuccessComponent } from './success.component';


export const routes: Routes = [
  { path: '', component: SuccessComponent},
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SuccessRoutingModule
  ],
  declarations: [SuccessComponent]
})
export class SuccessModule { }
