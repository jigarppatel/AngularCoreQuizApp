import { Component } from '@angular/core'
import { ApiService } from './api.service'
import { QuizzesComponent } from './quizzes.component';
import { Quiz } from './models/model';
@Component({
  providers: [QuizzesComponent],
  selector: 'quiz',
  templateUrl: './quiz.component.html'
})
export class QuizComponent {

  quiz: Quiz = new Quiz();
  constructor(private api: ApiService, private comp: QuizzesComponent) {

    
  }

  ngOnInit() {
    this.api.quizSelected.subscribe(c => this.quiz = c);
    
  }
  post(quiz) {
    if (this.validateInputData(quiz)) {
      this.api.postQuiz(quiz).subscribe(c => {
        this.comp.ngOnInit();
      });
    }
    
  }
  put(quiz) {
    if (this.validateInputData(quiz)) {
      this.api.putQuiz(quiz).subscribe(c => {
        this.quiz = new Quiz();
      });
    }
  }

  validateInputData(quiz) {
    if (quiz.title == null || quiz.title == '')
      return false;
    else
      return true;
  }
}
