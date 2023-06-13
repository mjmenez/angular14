import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ToDoComponent } from './to-do/to-do/to-do.component';
import { HomeComponent } from './home/home/home.component';
import { UsersComponent } from './users/users/users.component';
import { CommonModule } from '@angular/common';
import { UsersDetailsComponent } from './users/users-details/users-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'to-do', component: ToDoComponent },
      { path: 'users', component: UsersComponent,
      children :[{path: ':id', component: UsersDetailsComponent }]
    },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
