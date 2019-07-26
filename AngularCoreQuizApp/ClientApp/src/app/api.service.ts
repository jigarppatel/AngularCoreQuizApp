import { Injectable } from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { Subject } from 'rxjs';
@Injectable()
export class ApiService {

  private selectedQuestion = new Subject<any>();
  questionSelected = this.selectedQuestion.asObservable();

  private selectedQuiz = new Subject<any>();
  quizSelected = this.selectedQuiz.asObservable();

  constructor(private http: HttpClient) {
  }

  getQuestions(quizId) {
    return this.http.get('api/Questions/' + quizId);
  }

  postQuestion(question) {
    this.http.post('api/Questions', question).subscribe(res => {

      console.log(res);
    })
  }

  putQuestion(question) {
    this.http.put('api/Questions/' + question.id, question).subscribe(res => {

      console.log(res);
    })
  }
  putQuiz(quiz) {
    this.http.put('api/Quizzes/' + quiz.id, quiz).subscribe(res => {

      console.log(res);
    })
  }

  postQuiz(quiz) {
    this.http.post('api/Quizzes', quiz).subscribe(res => {

      console.log(res);
    })
  }
  getQuizzes() {
    return this.http.get('api/Quizzes');
  }
  selectQuestion(question) {
    this.selectedQuestion.next(question)
  }
  selectQuiz(quiz) {
    this.selectedQuiz.next(quiz)
  }
}
