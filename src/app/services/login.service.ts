import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of, pipe, tap } from 'rxjs';
import { Router } from '@angular/router';
import { IDesign, IHeader, IUsuario } from '../component/Login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://api.trakto.io'
  constructor(private httpClient: HttpClient,
    private router: Router) { }

      reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
     });
    logar(usuario: IUsuario): Observable<any> {
      const teste = this.httpClient.post<any>(this.apiUrl + "/auth/signin", usuario).pipe(
    tap((resposta) => {
      localStorage.setItem('token', JSON.stringify(resposta['access_token']));
      localStorage.setItem('usuario', JSON.stringify(resposta));
      this.router.navigate(['abertura']);
    }))
  return teste
}
deslogar() {
  localStorage.clear();
  this.router.navigate(['']);
}
obterUsuarioLogado(): string {
    const usuario = localStorage.getItem('usuario')
    return usuario ? usuario : '';
  }
  obterTokenUsuario(): string {
    const token =  localStorage.getItem('token')
    return token ? token : ''
  }
  get logado(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
  listAllDesigns(): Observable<any> {
    const headers =  `Bearer ${localStorage.getItem('token')} `;
    const teste = this.httpClient.get(this.apiUrl + "/document/2", {headers: new HttpHeaders().set('Authorization', headers )}).pipe(
      tap((resposta) => {
      }))
      return teste
    }

  }
