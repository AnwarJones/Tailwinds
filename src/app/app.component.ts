import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  //,  styleUrls: ['./app.component.css','./parallax.css']
})
export class AppComponent {
  title = 'app';

  constructor(private auth: AuthService){
    auth.handleAuth();
  }
}
