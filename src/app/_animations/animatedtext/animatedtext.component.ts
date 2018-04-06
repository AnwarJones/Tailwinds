import { Component, OnInit, AfterViewInit } from '@angular/core';
import { fadeInAnimation, slideInOutAnimation } from '../index';

@Component({
  selector: 'app-animatedtext',
  templateUrl: './animatedtext.component.html',
  animations: [fadeInAnimation]
  ,host: {'[@fadeInAnimation': ''}
})
export class AnimatedtextComponent implements OnInit, AfterViewInit {
  
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
  }

}
