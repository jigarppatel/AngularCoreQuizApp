import { Component } from '@angular/core'
import { AuthService } from './auth.service'
import { FormBuilder, Validators } from '@angular/forms'
@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  form
  constructor(public auth: AuthService, private fb: FormBuilder) {
    this.form = fb.group(
      {
        email: ['', Validators.required],
        password: ['', Validators.required]
      })
  }

  register() {
    console.log(this.form)
  }


}
