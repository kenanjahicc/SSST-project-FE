import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NewRoleComponent } from './new-role/new-role.component';
import { NewRoleEditComponent } from './new-role-edit/new-role-edit.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormeComponent } from './forme/forme.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { TeamsComponent } from './teams/teams.component';
import {RouterOutlet} from "@angular/router";
import {MatGridListModule} from "@angular/material/grid-list";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { EditFormComponent } from './edit-form/edit-form.component';
import { TeamCardComponent } from './team-card/team-card.component';
import { EmployeesComponent } from './employees/employees.component';
import { RolesComponent } from './roles/roles.component';
import { NewTeamComponent } from './new-team/new-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import {TeamService} from "./services/team.service";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { RoleCardComponent } from './role-card/role-card.component';
import { EditRoleComponent } from './edit-role/edit-role.component';



@NgModule({
  declarations: [
    AppComponent,
    FormeComponent,
    NewRoleComponent,
    NewRoleEditComponent,
    EditFormComponent,
    HeaderComponent,
    TeamsComponent,
    TeamCardComponent,
    EmployeesComponent,
    RolesComponent,
    NewTeamComponent,
    EditTeamComponent,
    NewEmployeeComponent,
    EditEmployeeComponent,
    EmployeeCardComponent,
    RolesComponent,
    RoleCardComponent,
    EditRoleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    RouterOutlet,
    MatGridListModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [TeamService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
