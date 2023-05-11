import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team.model';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams!: Team[];

  constructor(private teamService: TeamService) {}

  ngOnInit():void {
    this.teamService.getTeams().subscribe((teams) => {
      this.teams = teams;
      console.log(teams);
    });
  }
}
