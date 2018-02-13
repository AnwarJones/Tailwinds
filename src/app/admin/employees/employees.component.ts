import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../about-page/employee.service';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from '../../employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: IEmployee[];
  errorMessage: string;
  selectedEmployee: IEmployee;
  selectedId: number;
  constructor( private employeeService: EmployeeService,
                private route: ActivatedRoute ) { }

  ngOnInit() {
    this.employeeService.getEmployees()
    .subscribe(employees => this.employees = employees,
               error => this.errorMessage = <any>error);
  }

}
