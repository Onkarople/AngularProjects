import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RestaurentDashComponent } from './restaurent-dash/restaurent-dash.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login',pathMatch: 'full' //login.compnent.html
  },
  {
   path: 'login', component: LoginComponent //login.compnent.html
  },
 {
   path: 'signup', component: SignupComponent //sigup.compnent.html
 }, 
 {
   path:'restaurent' , component: RestaurentDashComponent //rest-dash.compnent.html
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
