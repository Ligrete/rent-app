import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  // {
  //   path: '',
  //   children: [
  //     { path: 'log-in', component: LogInComponent },
  //     { path: 'sign-up', component: SignUpComponent },
  //     { path: '**', redirectTo: 'log-in' },
  //   ],
  // },
  { path: '', component: AuthComponent,
      children: [
      { path: 'log-in', component: LogInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: '**', redirectTo: 'log-in' },
    ],
},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
