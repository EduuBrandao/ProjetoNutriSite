import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  fazerLogin(email: string, password: string): void { // Adicionando os parâmetros 'email' e 'password'
    const credentials = {
      email: email,
      password: password
    };
    console.log("email digitado", email)
    console.log("password digitado", password)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.post<any>('https://localhost:44373/login', credentials, httpOptions)
    .subscribe(
      (response: { message: string }) => {
        // Agora você pode acessar a mensagem da resposta
        console.log(response.message);
      },
      (error) => {
        // Lógica de tratamento de erro aqui
        console.error('Erro ao fazer login:', error);
      }
    );


  }
}
