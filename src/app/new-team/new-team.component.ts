import {Component, OnDestroy, OnInit} from '@angular/core';
import {TeamService} from "../services/team.service";
import {Team} from "../models/team.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.css']
})
export class NewTeamComponent implements OnInit, OnDestroy {

  public newTeam!: Team

  constructor(private teamsService: TeamService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }


  createTeam(): void {
    this.teamsService.createTeam(this.newTeam).subscribe(() => {
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

