import { Component } from '@angular/core';
import {TeamService} from "../services/team.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Team} from "../models/team.model";

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent {

  newTeam!:Team

  constructor(private teamsService: TeamService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  editTeam(): void {
    this.teamsService.updateTeam(this.newTeam).subscribe(() => {
      this.navigateToTeams();
    });
  }


  deleteTeam(): void {
    this.teamsService.deleteTeam(this.newTeam.id).subscribe(() => {
      this.navigateToTeams();
    });
  }

  private navigateToTeams() {
    this.router.navigate(['/teams']);
  }

}
