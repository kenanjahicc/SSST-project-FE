import {Role} from "./role.model";
import {Team} from "./team.model";

export interface Employee{
  id: number;
  name: string;
  salary: number;
  role: Role;
  team: Team;
}
