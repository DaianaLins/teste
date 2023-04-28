import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { IUsuario } from '../Login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  body = "body";
  container = "container";
  email = "email";
  emailInput = "emailInput";
  login: string = '';
  password: string = '';
  showErr:boolean = false;
  showErrAut:boolean = false;

  constructor(private loginService: LoginService){

  }

  logar(){
    if(this.login === '' || this.password===''){
      this.showErr = true
    }else{
      var usuario = {'email': this.login, 'password': this.password} as IUsuario;
      this.loginService.logar(usuario).subscribe((response) => {

        }, (err)=>{
          if(this.login !== '' || this.password !==''){
            this.showErr = false
             this.showErrAut = true
            }
      })
    }
  }


}
