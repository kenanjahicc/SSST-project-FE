import {Employee} from "./employee.model";

export interface Team {
  id: number;
  title: string;
  employees: Employee[];
}
