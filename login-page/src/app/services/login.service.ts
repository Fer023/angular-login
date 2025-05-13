import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs/operators';
import { environment } from 'environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  login (name: string, password: string) {
    return this.httpClient.post<LoginResponse>(`${this.apiUrl}/auth/login`, {name, password}).pipe(
      tap((value) => {
        sessionStorage.setItem("authToken", value.token)
        sessionStorage.setItem("username", value.name)
      })
    )
  }
}

