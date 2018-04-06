import { Component, OnInit } from '@angular/core';
import {fadeInAnimation } from '../_animations/_fadeIn';

@Component({
  selector: 'app-backgroundvid',
  templateUrl: './backgroundvid.component.html'
  ,styleUrls: ['./backgroundvid.component.css']

})
export class BackgroundvidComponent implements OnInit {
  sources: string = 'assets/560156925.mp4'
  constructor() { }

  ngOnInit() {
  }

}
