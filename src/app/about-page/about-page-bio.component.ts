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

  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees, error => this.errorMessage = <any>error);
  }

}
