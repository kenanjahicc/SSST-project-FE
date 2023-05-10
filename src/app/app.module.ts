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
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { EditFormComponent } from './edit-form/edit-form.component';
import { TeamCardComponent } from './team-card/team-card.component';
import { EmployeesComponent } from './employees/employees.component';
import { RolesComponent } from './roles/roles.component';
import { NewTeamComponent } from './new-team/new-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import {TeamService} from "./services/team.service";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";


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
    HttpClientModule
  ],
  providers: [TeamService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
