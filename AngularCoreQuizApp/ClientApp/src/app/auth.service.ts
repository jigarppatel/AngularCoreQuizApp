import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

const baseUrl = environment.BaseURL;

@Injectable()
export class AuthService {



  constructor(private http: HttpClient, private router: Router) {
  }

  
  get isAuthenticated() {
    return !!localStorage.getItem('token')
  }
  register(credentials) {
    return this.http.post<any>(baseUrl+'api/account', credentials).subscribe(res => {

      this.authenticate(res.token);
    })
  }
  login(credentials) {
    return this.http.post<any>(baseUrl +'api/account/login', credentials).subscribe(res => {
      this.authenticate(res.token);
    },
      err => {
        console.log(err);
      }
    )
  }

  authenticate(res) {
    localStorage.setItem('token', res)
    this.router.navigate(['/'])
  }
  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
}
