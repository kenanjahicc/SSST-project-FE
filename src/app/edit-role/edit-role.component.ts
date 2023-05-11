import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TeamService} from "../services/team.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Team} from "../models/team.model";
import {RoleService} from "../services/role.service";
import {Role} from "../models/role.model";

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css']
})
export class EditRoleComponent {

  contactForm = new FormGroup({
    title: new FormControl('', Validators.required),
    income: new FormControl('', Validators.required),
  });


  constructor(private roleService: RoleService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  editRole(): void {
    let title = this.contactForm.get('title')?.value
    let income = this.contactForm.get('income')?.value
    const idString = localStorage.getItem('id');
    console.log(idString);
    if (idString !== null) {
      const newRole: Role = {title: title!, id: parseInt(idString), income: parseInt(income!)};
      this.roleService.updateRole(newRole).subscribe(() => {
        this.navigateToRoles();
      });
    }
  }


  deleteRole(): void {
    const idString = localStorage.getItem('id');
    console.log(idString);
    if (idString !== null) {
      const id = parseInt(idString, 10);
      this.roleService.deleteRole(id).subscribe(() => {
        this.navigateToRoles();
      });
    }
  }

  clear(): void {
    localStorage.clear();
  }


  private navigateToRoles() {
    this.router.navigate(['/roles']);
    localStorage.clear();
  }
}


