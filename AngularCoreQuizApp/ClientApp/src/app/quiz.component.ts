import { Component } from '@angular/core'
import { ApiService } from './api.service'
import { QuizzesComponent } from './quizzes.component';
@Component({
  providers: [QuizzesComponent],
  selector: 'quiz',
  templateUrl: './quiz.component.html'
})
export class QuizComponent {

  quiz = {}
  constructor(private api: ApiService, private comp: QuizzesComponent) {

    
  }

  ngOnInit() {
    this.api.quizSelected.subscribe(c => this.quiz = c);
    
  }
  post(quiz) {
    this.api.postQuiz(quiz).subscribe(c => {
      this.comp.ngOnInit();
    });
    
  }
  
}
