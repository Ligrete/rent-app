import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogInModel, SignUpModel } from 'src/app/models/auth/auth.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly HOST = environment.api;

  constructor(private http: HttpClient) {}

  logIn(data: LogInModel): Observable<any> {
    return this.http.post(`${this.HOST}/auth/login`, data);
  }

  logOut(): Observable<any> {
    return this.http.get(`${this.HOST}/auth/logout`);
  }

  signUp(data: SignUpModel): Observable<any> {
    return this.http.post(`${this.HOST}/auth/registration`, data);
  }
}
