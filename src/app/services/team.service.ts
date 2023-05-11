import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { Team } from '../models/team.model';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private readonly baseUrl = `${environment.backendUrl}/api/team`;

  constructor(private http: HttpClient) {}

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.baseUrl);
  }

  createTeam(team:Team): Observable<Team> {
    return this.http.post<Team>(`${this.baseUrl}`, team);
  }

  getTeam(id:number): Observable<Team> {
    return this.http.get<Team>(`${this.baseUrl}/${id}`);
  }

  updateTeam(team: Team): Observable<Team> {
    return this.http.put<Team>(`${this.baseUrl}/${team.id}`, team);
  }

  deleteTeam(teamId: number): Observable<null> {
    this.http.delete(`${this.baseUrl}/${teamId}`);
    return of(null);
  }
}
