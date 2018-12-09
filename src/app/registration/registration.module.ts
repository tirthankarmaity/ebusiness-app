import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { SharedModule } from '../shared/shared.module';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { environment } from './../../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';



export const routes: Routes = [
  { path: '', component: RegistrationComponent},
];
@NgModule({
  imports: [
    [ RouterModule.forChild(routes) ],
    CommonModule,
    FormsModule,
    CustomFormsModule,
    SharedModule,
    ToastModule,
    NgMultiSelectDropDownModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule


  ],
  declarations: [RegistrationComponent],
  providers: [ MessageService ],
})
export class RegistrationModule {

}


