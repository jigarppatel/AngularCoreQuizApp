import { Component } from '@angular/core'
import { ApiService } from './api.service'
import {ActivatedRoute } from '@angular/router'
import { Question } from './models/model';
@Component({
  selector:'question',
  templateUrl: './question.component.html'
})
export class QuestionComponent {

  question: Question = new Question();
  
  quizId
  constructor(private api: ApiService, private route: ActivatedRoute) {
   
  }

  ngOnInit() {
    this.quizId = this.route.snapshot.paramMap.get('quizId')
    this.api.questionSelected.subscribe(c => this.question = c);
  }

  post(question) {
    if (this.validateInputData(question)) {
      question.quizId = this.quizId;
      this.api.postQuestion(question).subscribe(c => {
        this.question = new Question();
        this.api.getQuestions(this.quizId).subscribe(s => {
          this.api.setQuestionList(s);
          
        });
      });
    }
  }

  put(question) {
    if (this.validateInputData(question)) {
      question.quizId = this.quizId;
      this.api.putQuestion(question).subscribe(c => {
        this.question = new Question();
      });
    }
  }

  validateInputData(question) {
    if (question.text == null || question.correctAnswer == null ||
      question.answer1 == null || question.answer2 == null || question.answer3 == null || question.text == '' || question.correctAnswer == '' ||
      question.answer1 == '' || question.answer2 == '' || question.answer3 == '')
      return false;
    else
      return true;
  }
}
