import { Component, Input, OnInit } from '@angular/core';
import { employeeDto } from 'src/models/employeeDto';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'contractTypeName', 'roleName', 'hourlySalary', 'monthlySalary', 'annualSalary'];
  @Input() dataSource: employeeDto[];

  constructor() { }

  ngOnInit() {
  }

}
