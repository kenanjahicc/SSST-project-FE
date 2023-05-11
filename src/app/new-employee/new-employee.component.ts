import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../services/employee.service";
import {Role} from "../models/role.model";
import {Employee} from "../models/employee.model";
import {Team} from "../models/team.model";

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent {
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required),
  });

  my_role: Role = {
    id: 1,
    title: 'intern',
    income: 1230000,
  }

  my_team: Team = {
    id:1,
    title: 'nejra123',
  employees: [],
    gained: 20000
  }



  constructor(private employeeService: EmployeeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  createEmployee(): void {
    let name_=this.contactForm.get('name')?.value
    let salary=this.contactForm.get('salary')?.value
    const newEmployee: Employee ={name: name_!, id:123,salary:parseInt(salary!), team:this.my_team, role: this.my_role};
    this.employeeService.createEmployee(newEmployee).subscribe(() => {
      this.navigateToTeams();
    });
  }

  private navigateToTeams() {
    this.router.navigate(['/employees']);
  }
}




