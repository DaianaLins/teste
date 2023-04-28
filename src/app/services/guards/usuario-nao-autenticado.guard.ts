import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioNaoAutenticadoGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router) { }
  canActivate(){
    if (this.loginService.logado) {
      this.router.navigate(['']);
      return false;
    }

    return true;
  }

}
