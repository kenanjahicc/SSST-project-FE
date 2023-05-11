import {Employee} from "./employee.model";

export class Team {
  id!: number;
  title!: string;
  employees!: Employee[];
  gained!: number;
}
