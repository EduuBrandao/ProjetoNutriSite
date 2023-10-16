import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) {}

  fazerLogin(email: string, password: string): void { // Adicionando os parâmetros 'email' e 'password'
    const credentials = {
      email: email,
      password: password
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };



    this.http.post<any>('https://localhost:44373/login', credentials, httpOptions)
    .subscribe(
      (response: { message: string }) => {
        if (response.message === 'Usuário autenticado') {
          console.log("autenticado")
          this.router.navigate(['/home']);
        } else {
          alert('Credenciais inválidas. Verifique seu e-mail e senha.');
        }
      },
      (error) => {
        console.error('Erro ao fazer login:', error);
      }
    );
  }
}
