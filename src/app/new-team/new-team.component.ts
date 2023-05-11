import {Component, OnDestroy, OnInit} from '@angular/core';
import {TeamService} from "../services/team.service";
import {Team} from "../models/team.model";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.css']
})
export class NewTeamComponent implements OnInit, OnDestroy {

  contactForm = new FormGroup({
    title: new FormControl('', Validators.required),
  });

  constructor(private teamsService: TeamService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }


  createTeam(): void {
    let title=this.contactForm.get('title')?.value
    console.log(title);
    const newTeam: Team ={title: title!, id:123, employees:[], gained:123001};
    this.teamsService.createTeam(newTeam).subscribe(() => {
      this.navigateToTeams();
    });
  }

  private navigateToTeams() {
    this.router.navigate(['/teams']);
  }



  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }


}

