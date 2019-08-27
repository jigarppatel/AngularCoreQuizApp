import { Component } from '@angular/core'
import { ApiService } from './api.service'
import { Subject } from 'rxjs';

@Component({
  selector: 'quizzes',
  templateUrl: './quizzes.component.html'
})
export class QuizzesComponent {
  quize = {}
  quizzes;

  constructor(private api: ApiService) {
    this.api.quizListSelected.subscribe(
      quizeList => {
        this.quizzes = quizeList;
      });
  }
  ngOnInit() {
    this.api.getQuizzes().subscribe(res => {
      this.api.getQuizListMethod(res);
    });
  }
}
