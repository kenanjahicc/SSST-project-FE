import { Component } from '@angular/core';
import {EmployeeService} from "../services/employee.service";
import {Employee} from "../models/employee.model";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  employees!:Employee[];

  constructor(private employeeService:EmployeeService) {
    this.employeeService.getEmployees().subscribe((employees) => {
      this.employees = employees;
    })
  }


}
