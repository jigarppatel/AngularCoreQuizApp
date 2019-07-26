import { Component } from '@angular/core';

@Component({
  selector: 'nav',
  template: `
<mat-toolbar>
<button mat-button routerLink="/">Quiz</button>

<span style="flex: 1 1 auto;">
<button mat-button routerLink="/register">Register</button></span>
</mat-toolbar>

`
})
export class NavComponent {

}
