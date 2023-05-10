import {Role} from "./role.model";

export interface Employee{
  id: number;
  name: string;
  salary: number;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}
