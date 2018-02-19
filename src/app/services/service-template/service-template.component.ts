import { Component, OnInit, Input } from '@angular/core';
import { IService } from '../iservice';

@Component({
  selector: 'app-service-template',
  templateUrl: './service-template.component.html',
  styleUrls: ['./service-template.component.css']
})
export class ServiceTemplateComponent implements OnInit {
  @Input() divService: IService;
  constructor() { }

  ngOnInit() {
  }

}
