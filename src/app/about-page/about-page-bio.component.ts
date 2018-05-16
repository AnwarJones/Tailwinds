import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';
import { EmployeeService } from './employee.service';
import { ActivatedRoute } from '@angular/router';
import { Output } from '@angular/core';
import { BiosComponent } from './bios/bios.component';

@Component({
  selector: 'app-about-page-bio',
  templateUrl: './about-page-bio.component.html',
  styleUrls: ['./about-page-bio.component.css'],
})
export class AboutPageBioComponent implements OnInit {
  employees: IEmployee[];
  errorMessage: string;
  selectedEmployee: IEmployee;
  selectedId: number;


  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute) { }

  // ngOnInit(): void {
  //   this.employees = this.route.snapshot.data['employees'];
  //   this.employeeSelect(1);
  // }
  // employeeSelect(id: number): void {
  //   this.selectedId = id;
  //   this.selectedEmployee = this.employees.find((employee) => employee.id === id);
  //   this.selectedEmployee = this.route.snapshot.data['employee'];
  // }
  ngOnInit(): void{
    //this.selectedEmployee = this.employees.find((employee) => employee.id === 1);

    this.employees =  [
      {
          'id': 1,
          'firstName' : 'Marvia',
          'lastName' : 'Jones',
          'title': 'Principal',
          'photoUrl': '/assets/Marvia.png',
          'academics': [
              {
              'school': 'University of Kansas',
              'graduationYear': '2014',
              'major': 'Behavioral Science',
              'degree': 'PhD'
              },
              {
                  'school': 'University of Kansas - Medical School',
                  'graduationYear': '2012',
                  'major': 'Behavioral Science',
                  'degree': 'Masters'
              },
              {
                  'school': 'Florida State University',
                  'graduationYear': '2007',
                  'major': 'Chemistry',
                  'degree': 'Bachelors of Science'
              }
          ],
          'experience': [
              {
                  'organization': 'CSX',
                  'beginYear': '2007',
                  'endYear': '2009',
                  'title': 'Environmental Chemicals'
              },
              {
                  'organization': 'KU Medical School',
                  'beginYear': '2010',
                  'endYear': '2014',
                  'title' : 'Graduate Assistant'
              },
              {
                  'organization': 'MOCSA',
                  'beginYear': '2014',
                  'endYear': '2015',
                  'title': 'Policy Advisor'
              },
              {
                  'organization': 'Centers for Disease Control',
                  'beginYear': '2015',
                  'endYear': '2017',
                  'title': 'Doctoral Fellowship',
              },
              {
                  'organization': 'Communities Creating Opportunities',
                  'beginYear': '2017',
                  'endYear': '2018',
                  'title': 'Directof of Policy, Programs and Evaluation'
              }
          ],
          // tslint:disable-next-line:max-line-length
          'statement':''// 'I want to come with you to Alderaan.There"s nothing for me here now. I want to learn the ways of the Force and be a Jedi like my father before me. Your eyes can deceive you'
      }]
      this.selectedEmployee = this.employees[0]
  }

}
