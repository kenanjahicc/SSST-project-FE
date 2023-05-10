import {Employee} from "./employee.model";

export interface Team{
  title: string;
  employees: Array<Employee>
  gained: number;
  lost: number;
  profit:number;
}
