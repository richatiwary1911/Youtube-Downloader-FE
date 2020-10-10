import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  loginVerify(username: String, password: String): Observable<any>{
    return this.http.post('', 
    {username: username, password: password},
    {observe: 'response'}
    );
  }

  signupUser(name: String, username: String, password: String): Observable<any>{
    return this.http.post('',
    {name: name, username: username, password: password},
    {observe: 'response'}
    );
  }
}
