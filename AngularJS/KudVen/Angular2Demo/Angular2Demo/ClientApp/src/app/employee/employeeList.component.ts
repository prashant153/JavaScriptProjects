import { Component } from '@angular/core';

@Component({
  selector: 'list-employee',
  templateUrl: './employeeList.component.html',
  styleUrls: ['./employeeList.component.css']
})

export class EmployeeListComponent {
  employees: any[];

  constructor() {
    this.employees=[
      { code: 'emp01', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '25/6/1988' },
      { code: 'emp02', name: 'Alex', gender: 'Male', annualSalary: 5900.45, dateOfBirth: '3/4/1978' },
      { code: 'emp03', name: 'Sam', gender: 'Male', annualSalary: 5700, dateOfBirth: '14/12/1983' },
      { code: 'emp04', name: 'Ellise', gender: 'Female', annualSalary: 6500, dateOfBirth: '2/3/1996' },
    ];
  }

  getEmployees(): void {
    this.employees = [
      { code: 'emp01', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '25/6/1988' },
      { code: 'emp02', name: 'Alex', gender: 'Male', annualSalary: 5900.45, dateOfBirth: '3/4/1978' },
      { code: 'emp03', name: 'Sam', gender: 'Male', annualSalary: 5700, dateOfBirth: '14/12/1983' },
      { code: 'emp04', name: 'Ellise', gender: 'Female', annualSalary: 6500, dateOfBirth: '2/3/1996' },
      { code: 'emp05', name: 'Amber', gender: 'Female', annualSalary: 6200, dateOfBirth: '9/3/1995' },
    ];

  }
  trackByEmpCode(index: number, employee: any): string {
    return employee.code;
  }
}
