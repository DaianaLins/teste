import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-abertura',
  templateUrl: './abertura.component.html',
  styleUrls: ['./abertura.component.css']
})
export class AberturaComponent {
  container = 'container'
  content = 'content'
  constructor(private loginService: LoginService){
    this.obterUsuarioLogado()
  }

  obterUsuarioLogado(){
  }

}
