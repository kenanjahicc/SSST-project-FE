import {Role} from "./role.model";

export class Employee{
  id!: number;
  name!: string;
  salary!: number;
  role!: Role;
  createdAt!: Date;
  updatedAt!: Date;
}
