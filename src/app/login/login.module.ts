import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { SharedModule } from '../shared/shared.module';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { environment } from './../../environments/environment';



export const routes: Routes = [
  { path: '', component: LoginComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    CustomFormsModule,
    SharedModule,
    ToastModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule


  ],
  declarations: [LoginComponent],
  providers: [ MessageService ],
})
export class LoginModule { }
