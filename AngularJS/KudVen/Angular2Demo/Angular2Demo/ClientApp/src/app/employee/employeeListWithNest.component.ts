import { Component } from '@angular/core';

@Component({
  selector: 'list-employee-with-nest',
  templateUrl: './employeeListWithNest.component.html',
  styleUrls: ['./employeeListWithNest.component.css']
})

export class EmployeeListWithNestComponent {
  employees: any[];

  selectedEmployeeCountRadioButton: string = 'All';

  constructor() {
    this.employees=[
      { code: 'emp01', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '25/6/1988' },
      { code: 'emp02', name: 'Alex', gender: 'Male', annualSalary: 5900.45, dateOfBirth: '3/4/1978' },
      { code: 'emp03', name: 'Sam', gender: 'Male', annualSalary: 5700, dateOfBirth: '14/12/1983' },
      { code: 'emp04', name: 'Ellise', gender: 'Female', annualSalary: 6500, dateOfBirth: '2/3/1996' },
      { code: 'emp05', name: 'Amber', gender: 'Female', annualSalary: 6200, dateOfBirth: '9/3/1995' },
    ];

  }

  onEmployeeRadioButtonChange(selectedRadioButtonValue: string): void {
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
  }

  getTotalEmployeesCount(): number {
    return this.employees.length;
  }

  getMaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender ==="Male").length;
  }

  getFemaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === "Female").length;
  }
}
