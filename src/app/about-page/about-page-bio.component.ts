import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';
import { EmployeeService } from './employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-page-bio',
  templateUrl: './about-page-bio.component.html',
  styleUrls: ['./about-page-bio.component.css']
})
export class AboutPageBioComponent implements OnInit {
  employees: IEmployee[];
  errorMessage: string;
  selectedEmployee: IEmployee;
  selectedId: number;
  imageheigth: number = 2;
  imagewidth: number = 1;

  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeService.getEmployees()
    .subscribe(employees => this.employees = employees
        , error => this.errorMessage = <any>error);
    this.employeeSelect(1);
  }
  employeeSelect(id: number): void {
    this.selectedId = id;
    console.log(this.selectedId);
    this.employeeService.getEmployee(this.selectedId)
    .subscribe(
      employee => this.selectedEmployee = employee
      , error => this.errorMessage = <any>error);
  }

}
