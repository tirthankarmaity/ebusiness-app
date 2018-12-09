import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ErrorpageComponent } from './errorpage/errorpage.component';
import { AuthServiceService } from './services/auth-service.service';
import { CanActivateRouteGuard } from './services/can-activate-route-guard.service';
import { SharedModule } from './shared/shared.module';
import { BlogComponent } from './blog/blog.component';
import { DetailsComponent } from './blog/details/details.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { CanDeactivateRouteGuardService } from './services/can-deactivate-route-guard.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, LinkedinLoginProvider} from 'angular-6-social-login';
import { ProfileComponent } from './profile/profile.component';

import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from './../environments/environment';
import { GrowlModule } from 'primeng/growl';
import { MessageService } from 'primeng/components/common/messageservice';
import {AccordionModule} from 'primeng/accordion';
import {ToastModule} from 'primeng/toast';
import { AngularFireStorageModule } from 'angularfire2/storage';




export function getAuthServiceConfigs() {
  // tslint:disable-next-line:prefer-const
  let config = new AuthServiceConfig(
      [
        {

            id: LinkedinLoginProvider.PROVIDER_ID,
            provider: new LinkedinLoginProvider('813wcmp3nctkmg')
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('515357267283-lhlm923um1p2jhp76p4d662c8gh87073.apps.googleusercontent.com')
        },
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorpageComponent,
    BlogComponent,
    DetailsComponent,
    ProfileComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng4LoadingSpinnerModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    FormsModule,
    CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    GrowlModule,
    AccordionModule,
    ToastModule,
    AngularFireStorageModule


  ],
  providers: [AuthServiceService, CanActivateRouteGuard, CanDeactivateRouteGuardService, ApiService, MessageService,
  {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})

export class AppModule { }
