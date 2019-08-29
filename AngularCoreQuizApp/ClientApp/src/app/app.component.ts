import { Component } from '@angular/core';
import { QuestionComponent } from './question.component'
@Component({
  selector: 'app-root',
  template: '<nav></nav><router-outlet></router-outlet><app-loader></app-loader>'
})
export class AppComponent {
  
}
