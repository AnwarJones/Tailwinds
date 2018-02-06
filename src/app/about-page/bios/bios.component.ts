import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from '../../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-bios',
  templateUrl: './bios.component.html',
  styleUrls: ['./bios.component.css']
})
export class BiosComponent implements OnInit {
  @Input() displayEmployee: IEmployee;
  errorMessage: string;
  imageheigth: number = 2;
  imagewidth: number = 1;

  constructor(private route: ActivatedRoute,
              private employeeService: EmployeeService) { }

  ngOnInit() {
    console.log(this.displayEmployee);
  }
}
