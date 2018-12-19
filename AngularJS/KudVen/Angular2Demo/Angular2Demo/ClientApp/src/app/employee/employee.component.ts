import { Component } from '@angular/core'

@Component({
  selector: 'my-employee',
  templateUrl:'./employee.component.html'
})

export class EmployeeComponent {
  firstName: string = 'Tom';
  lastName: string = 'Hopkings';
  gender: string = 'Make';
  age: number = 20;
}
