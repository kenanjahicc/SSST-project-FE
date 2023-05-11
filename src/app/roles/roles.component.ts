import {Component, OnInit} from '@angular/core';
import {Role} from "../models/role.model";
import {Team} from "../models/team.model";
import {TeamService} from "../services/team.service";
import {RoleService} from "../services/role.service";

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  roles!: Role[];

  constructor(private roleService: RoleService) {}

  ngOnInit():void {
    this.roleService.getRoles().subscribe((roles) => {
      this.roles = roles;
      console.log(roles);
    });
  }

}
