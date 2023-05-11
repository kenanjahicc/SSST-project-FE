import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-role-card',
  templateUrl: './role-card.component.html',
  styleUrls: ['./role-card.component.css']
})
export class RoleCardComponent {

  @Input()
  title!: string;
  @Input()
  income!: number;
  @Input()
  id!:number;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  setId():void {
    localStorage.setItem("id",this.id.toString())
  }




}
