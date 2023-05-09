import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {NewRoleComponent} from "./new-role/new-role.component";
import {NewRoleEditComponent} from "./new-role-edit/new-role-edit.component";



const routes: Routes = [
  {
    path: "/new-role",
    component: NewRoleComponent
  },
  {
    path: "/new-role-edit",
    component: NewRoleEditComponent
  }
]

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
