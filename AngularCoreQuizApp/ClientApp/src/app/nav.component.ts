import { Component } from '@angular/core';

@Component({
  selector: 'nav',
  template: `
<mat-toolbar>
<button md-button routerLink="/">Quiz</button>
<button md-button routerLink="/question">Question</button>
<button md-button routerLink="/questions">Question List</button>
</mat-toolbar>

`
})
export class NavComponent {

}
