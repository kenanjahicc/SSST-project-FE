import {Component, Input} from '@angular/core';
import {TeamService} from "../services/team.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../services/employee.service";

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent {

  @Input()
  name!: string;
  @Input()
  salary!: number;
  @Input()
  id!:number;

  constructor(private employeeService: EmployeeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  setId():void {
    localStorage.setItem("id",this.id.toString())
  }

}
