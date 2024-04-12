import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../../interface/Employee';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent {
  employees: Employee[] | [] = [];

  constructor(private empService: EmployeeService) {
    this.employees = this.empService.getAllEmp();
  }
}
