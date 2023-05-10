import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from "@angular/router";
import {TeamsComponent} from "./teams/teams.component";
import {NewRoleComponent} from "./new-role/new-role.component";
import {NewRoleEditComponent} from "./new-role-edit/new-role-edit.component";
import {RolesComponent} from "./roles/roles.component";


const routes: Routes = [
  {
    path: "new-role",
    component: NewRoleComponent
  },
  {
    path: "new-role-edit",
    component: NewRoleEditComponent
  },
  {
    path: 'teams',
    component:TeamsComponent
  },
  {
    path: 'roles',
    component:RolesComponent
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  declarations: [],

})
export class AppRoutingModule { }
