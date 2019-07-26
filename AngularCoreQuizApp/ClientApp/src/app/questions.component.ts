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
  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    var quizId = this.route.snapshot.paramMap.get('quizId')
    alert(quizId);
    this.api.getQuestions(quizId).subscribe(res => {
      console.log(res);
      this.questions = res;
    });
  }

  post(question) {
    this.api.postQuestion(question);
  }
}
