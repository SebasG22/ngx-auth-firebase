import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthEmailLoginPage } from './pages/email/login/login-email.page';
import { AuthEmailRegisterPage } from './pages/email/register/register-email.page';


const routes: Routes = [
  {
    path: 'email', children: [
      { path: 'login', component: AuthEmailLoginPage },
      { path: 'register', component: AuthEmailRegisterPage }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }

export const routedComponents = [
  AuthEmailLoginPage,
  AuthEmailRegisterPage
];