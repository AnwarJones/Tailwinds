import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
  ,  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  collapsed = true;
  constructor(public auth: AuthService) { }

  ngOnInit() {
  }
  toggleCollapsed():void{
    this.collapsed = !this.collapsed;
  }

}
