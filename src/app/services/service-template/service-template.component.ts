import { Component, OnInit, Input } from '@angular/core';
import { IService } from '../iservice';
import { fadeInAnimation } from '../../_animations';

@Component({
  selector: 'app-service-template',
  templateUrl: './service-template.component.html',
  styleUrls: ['./service-template.component.css']
  ,animations: [fadeInAnimation]
  ,host: {'[@fadeInAnimation': ''}
 
})
export class ServiceTemplateComponent implements OnInit {
  @Input() divService: IService;
  constructor() { }

  ngOnInit() {
  }

}
