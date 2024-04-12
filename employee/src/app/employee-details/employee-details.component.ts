import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../interface/Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css',
})
export class EmployeeDetailsComponent {
  employee: Employee | null = null;

  constructor(
    private route: ActivatedRoute,
    private empService: EmployeeService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.employee = this.empService.getEmpById(id);
  }
}
