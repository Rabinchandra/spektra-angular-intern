import { Injectable } from '@angular/core';
import { Employee } from '../interface/Employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: Employee[] = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Software Engineer',
      department: 'Engineering',
      salary: 80000,
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Data Analyst',
      department: 'Analytics',
      salary: 65000,
    },
    {
      id: 3,
      name: 'Alice Johnson',
      position: 'Marketing Manager',
      department: 'Marketing',
      salary: 75000,
    },
    {
      id: 4,
      name: 'Bob Wilson',
      position: 'HR Specialist',
      department: 'Human Resources',
      salary: 60000,
    },
    {
      id: 5,
      name: 'Emily Brown',
      position: 'Financial Analyst',
      department: 'Finance',
      salary: 70000,
    },
    {
      id: 6,
      name: 'Michael Lee',
      position: 'Product Manager',
      department: 'Product Management',
      salary: 85000,
    },
    {
      id: 7,
      name: 'Sara Garcia',
      position: 'Customer Support Specialist',
      department: 'Customer Service',
      salary: 55000,
    },
    {
      id: 8,
      name: 'David Martinez',
      position: 'Sales Representative',
      department: 'Sales',
      salary: 70000,
    },
    {
      id: 9,
      name: 'Laura Kim',
      position: 'Graphic Designer',
      department: 'Design',
      salary: 60000,
    },
    {
      id: 10,
      name: 'Daniel Nguyen',
      position: 'Operations Manager',
      department: 'Operations',
      salary: 80000,
    },
  ];

  constructor() {}

  getAllEmp(): Employee[] {
    return this.employees;
  }

  getEmpById(id: number): Employee | null {
    const found = this.employees.find((e) => e.id === id) || null;
    return found;
  }
}
