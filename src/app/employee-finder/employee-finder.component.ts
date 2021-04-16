import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { employeeDto } from 'src/models/employeeDto';
import { EmployeeService } from 'src/Services/Employee.service';

@Component({
  selector: 'app-employee-finder',
  templateUrl: './employee-finder.component.html',
  styleUrls: ['./employee-finder.component.css']
})
export class EmployeeFinderComponent implements OnInit {
  employeeId: string = '';
  @Input() dataSource: employeeDto[];
  @Output() dataChanged = new EventEmitter<employeeDto[]>();

  constructor(private employeeService: EmployeeService) { }

  public buttonClick() {
    if (this.employeeId != '') {
      this.employeeService.getById(this.employeeId).subscribe((data) => {
        this.dataSource = [];
        this.dataSource.push(data);
        this.dataChanged.emit(this.dataSource);
      });
    }
    else {
      this.employeeService.getAll().subscribe((data) => {
        this.dataSource = data;
        this.dataChanged.emit(this.dataSource);
      });
    }
  };

  ngOnInit() {
  }

}
