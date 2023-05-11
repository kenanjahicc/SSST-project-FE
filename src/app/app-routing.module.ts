import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from "@angular/router";
import {TeamsComponent} from "./teams/teams.component";
import {NewRoleComponent} from "./new-role/new-role.component";
import {NewRoleEditComponent} from "./new-role-edit/new-role-edit.component";
import {EmployeesComponent} from "./employees/employees.component";
import {RolesComponent} from "./roles/roles.component";
import {NewTeamComponent} from "./new-team/new-team.component";
import {EditTeamComponent} from "./edit-team/edit-team.component";
import {NewEmployeeComponent} from "./new-employee/new-employee.component";
import {EditEmployeeComponent} from "./edit-employee/edit-employee.component";
import {EditRoleComponent} from "./edit-role/edit-role.component";



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
    path: "edit-role",
    component: EditRoleComponent
  },
  {
    path: "new-employee",
    component: NewEmployeeComponent
  },
  {
    path: "edit-employee",
    component: EditEmployeeComponent
  },
  {
    path: 'teams',
    component:TeamsComponent,
  },
  {
    path: 'employees',
    component:EmployeesComponent
  },
  {
    path: 'roles',
    component: RolesComponent
  },
  {
    path: 'new-team',
    component: NewTeamComponent
  },
  {
    path: 'edit-team',
    component: EditTeamComponent
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  declarations: [],

})
export class AppRoutingModule { }
