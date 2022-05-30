import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateUsersComponent } from './components/create-users/create-users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';

const userRoutes: Routes = [
  {
    path: '',
    component: UsersComponent
  }
];

@NgModule({
  declarations: [
    UsersComponent,
    CreateUsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    ReactiveFormsModule,
    SharedModule,
    MatPaginatorModule
  ]
})
export class UsersModule { }
