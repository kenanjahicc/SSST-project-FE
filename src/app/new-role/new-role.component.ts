import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Team} from "../models/team.model";
import {RoleService} from "../services/role.service";
import {Role} from "../models/role.model";
@Component({
  selector: 'app-new-role',
  templateUrl: './new-role.component.html',
  styleUrls: ['./new-role.component.css']
})
export class NewRoleComponent implements OnInit, OnDestroy {

  contactForm = new FormGroup({
    title: new FormControl('', Validators.required),
    income: new FormControl('', Validators.required),
  });

  constructor(private roleService: RoleService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }


  createRole(): void {
    let title = this.contactForm.get('title')?.value
    let income = this.contactForm.get('income')?.value
    const newRole: Role = {title: title!, id: 123, income: parseInt(income!)};
    this.roleService.createRole(newRole).subscribe(() => {
      this.navigateToRoles();
    });
  }

  private navigateToRoles() {
    this.router.navigate(['/roles']);
  }


  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }
}




