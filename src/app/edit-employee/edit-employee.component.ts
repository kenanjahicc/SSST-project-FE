import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../services/employee.service";
import {Employee} from "../models/employee.model";
import {Role} from "../models/role.model";
import {Team} from "../models/team.model";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})

export class EditEmployeeComponent {

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required),
  });

  constructor(private employeeService: EmployeeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

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

  editEmployee():void {

    let name_=this.contactForm.get('name')?.value
    let salary=this.contactForm.get('salary')?.value
    const idString = localStorage.getItem('id');
    console.log(idString);
    if (idString !== null) {
      const newEmployee: Employee ={name: name_!, id:parseInt(idString), salary: parseInt(salary!), role: this.my_role, team: this.my_team};
      this.employeeService.updateEmployee(newEmployee).subscribe(() => {
        this.navigateToEmployees();
      });
    }

  }

  deleteEmployee():void {
    const idString = localStorage.getItem('id');
    console.log(idString);
    if (idString !== null) {
      const id = parseInt(idString, 10);
      this.employeeService.deleteEmployee(id).subscribe(() => {
        this.navigateToEmployees();
      });
    }
  }


  clear(): void {
    localStorage.clear();
  }


  private navigateToEmployees() {
    this.router.navigate(['/employees']);
    localStorage.clear();
  }




}
