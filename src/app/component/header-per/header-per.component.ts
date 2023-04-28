import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header-per',
  templateUrl: './header-per.component.html',
  styleUrls: ['./header-per.component.css']
})
export class HeaderPerComponent {

  today = new Date();
  constructor(private loginService: LoginService){

  }

  deslogar(){
    this.loginService.deslogar()
  }
}
