import { Component } from '@angular/core';
import { employeeDto } from 'src/models/employeeDto';
import { EmployeeService } from 'src/Services/Employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lstEmployees: employeeDto[];

  public refreshData(data: employeeDto[]) {    
    this.lstEmployees = data;
  }

}
