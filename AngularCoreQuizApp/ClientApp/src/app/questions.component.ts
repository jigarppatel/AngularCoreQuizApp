import { Component } from '@angular/core'
import { ApiService } from './api.service'
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'questions',
  templateUrl: './questions.component.html'
})
export class QuestionsComponent {
  question = {}
  questions
  constructor(private api: ApiService, private route: ActivatedRoute) {
    this.api.questionList.subscribe(
      questionList => {
        this.questions = questionList;
      });
  }

  ngOnInit() {
    var quizId = this.route.snapshot.paramMap.get('quizId')
    
    this.api.getQuestions(quizId).subscribe(res => {
      this.api.setQuestionList(res);
    });
  }

}
