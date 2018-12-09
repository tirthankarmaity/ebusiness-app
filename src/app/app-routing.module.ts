import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { CanActivateRouteGuard } from './services/can-activate-route-guard.service';
import { BlogComponent } from './blog/blog.component';
import { DetailsComponent } from './blog/details/details.component';
import { CanDeactivateRouteGuardService } from './services/can-deactivate-route-guard.service';
import { ProfileComponent } from './profile/profile.component';





export const routes: Routes = [
  { path: '', component: HomeComponent , },
  // tslint:disable-next-line:max-line-length
  { path: 'registration', loadChildren: './registration/registration.module#RegistrationModule' , canActivate: [CanDeactivateRouteGuardService] },
  { path: 'login', loadChildren: './login/login.module#LoginModule' , canActivate: [CanDeactivateRouteGuardService]},
  { path: 'blog/details', component: DetailsComponent, canActivate: [CanActivateRouteGuard]},
  { path: 'blog', component: BlogComponent,  },
  { path: 'profile', component: ProfileComponent , canActivate: [CanActivateRouteGuard]},
  // { path: 'success', loadChildren: './success/success.module#SuccessModule'  },
  { path: '**', component: ErrorpageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
