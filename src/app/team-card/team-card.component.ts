import {Component, Input} from '@angular/core';
import {TeamService} from "../services/team.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent {
  @Input()
  title!: string;
  @Input()
  members!: number;
  @Input()
  profit!:number;
  @Input()
  income!:number;
  @Input()
  loss!:number;
  @Input()
  id!:number;

  constructor(private teamsService: TeamService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  setId():void {
    localStorage.setItem("id",this.id.toString())
  }
}


