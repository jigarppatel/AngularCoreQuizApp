import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';
@Injectable()
export class AuthService {



  constructor(private http: HttpClient) {
  }

  

  regsiter(credentials) {
    return this.http.post<any>('api/account', credentials).subscribe(res => {

      localStorage.setItem('token',res)
    })
  }

}
