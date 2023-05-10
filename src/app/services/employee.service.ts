import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Employee} from "../models/employee.model";

@Injectable()
export class EmployeeService {

  private readonly employees: Employee[] = [
    { name: 'Nejra Muzaferija', salary: 60, team: 3, role: 2},
    { name: 'Zakira Skaljic', salary: 50, team: 1, role: 1},
    { name: 'Melika Borovina', salary: 30, team: 2, role: 3}
  ];


  getEmployees(): Observable<Employee[]> {
    return of(this.employees);
  }




  //This code reads users from backend
  // private readonly url = "http://localhost:8080/api/employee";
  //
  // constructor(private http: HttpClient) {
  //
  // }
  //
  // getEmployees(): Observable<Employee[]> {
  //   return this.http.get<Employee[]>(this.url);
  // }
  //
  // getEmployeeById(id: string): Observable<Employee> {
  //   return this.http.get<Employee>(this.url + '/' + id);
  // }
}
