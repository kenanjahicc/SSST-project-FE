import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NewRoleComponent } from './new-role/new-role.component';
import { NewRoleEditComponent } from './new-role-edit/new-role-edit.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

import { FormeComponent } from './forme/forme.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { EditFormComponent } from './edit-form/edit-form.component';
import {EmployeesComponent} from "./employees/employees.component";
import {EmployeeService} from "./services/employee.service";

@NgModule({
  declarations: [
    AppComponent,
    FormeComponent,
    NewRoleComponent,
    NewRoleEditComponent,
    EditFormComponent,
    EmployeesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
