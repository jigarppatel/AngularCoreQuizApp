import { Component } from '@angular/core'
import { ApiService } from './api.service'
@Component({
  selector: 'quizzes',
  templateUrl: './quizzes.component.html'
})
export class QuizzesComponent {
  quize = {}
  quizzes
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getQuizzes().subscribe(res => {
      console.log(res);
      this.quizzes = res;
    });
  }

  post(quiz) {
    this.api.postQuiz(quiz);
  }
}
