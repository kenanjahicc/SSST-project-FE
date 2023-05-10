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
import {TeamResolver} from "./resolvers/team.resolver";


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
    component:TeamsComponent,
    resolve: {
      teams: TeamResolver
    }
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
