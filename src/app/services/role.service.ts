import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Role} from "../models/role.model";

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private readonly baseUrl = `${environment.backendUrl}/api/role`;

  constructor(private http: HttpClient) {}

    getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.baseUrl);
  }

  createRole(role:Role): Observable<Role> {
    return this.http.post<Role>(`${this.baseUrl}`, role);
  }

  getRole(id:number): Observable<Role> {
    return this.http.get<Role>(`${this.baseUrl}/${id}`);
  }

  updateRole(role: Role): Observable<Role> {
    return this.http.put<Role>(`${this.baseUrl}/${role.id}`, role);
  }

  deleteRole(roleId: number): Observable<null> {
    console.log(roleId);
    this.http.delete(`${this.baseUrl}/${roleId}`);
    localStorage.clear();
    return of(null);
  }
}
