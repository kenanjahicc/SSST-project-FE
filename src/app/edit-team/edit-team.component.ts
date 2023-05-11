import {Component, Input} from '@angular/core';
import {TeamService} from "../services/team.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Team} from "../models/team.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent {

  contactForm = new FormGroup({
    title: new FormControl('', Validators.required),
  });


  constructor(private teamsService: TeamService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  editTeam(): void {
    let title=this.contactForm.get('title')?.value
    console.log(title);
    const idString = localStorage.getItem('id');
    console.log(idString);
    if (idString !== null) {
    const newTeam: Team ={title: title!, id:parseInt(idString), employees:[], gained:123001};
    this.teamsService.updateTeam(newTeam).subscribe(() => {
      this.navigateToTeams();
    });
  }
  }


  deleteTeam(): void {
    const idString = localStorage.getItem('id');
    console.log(idString);
    if (idString !== null) {
      const id = parseInt(idString, 10);
      this.teamsService.deleteTeam(id).subscribe(() => {
        this.navigateToTeams();
      });
    }
  }

  clear(): void {
    localStorage.clear();
  }


  private navigateToTeams() {
    this.router.navigate(['/teams']);
    localStorage.clear();
  }

}
