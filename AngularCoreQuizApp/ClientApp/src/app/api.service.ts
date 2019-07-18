import { Injectable } from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { Subject } from 'rxjs';
@Injectable()
export class ApiService {

  private selectedQuestion = new Subject<any>();
  questionSelected = this.selectedQuestion.asObservable();

  constructor(private http: HttpClient) {
  }

  getQuestions() {
    return this.http.get('api/Questions');
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

  postQuiz(quiz) {
    this.http.post('api/Quizzes', quiz).subscribe(res => {

      console.log(res);
    })
  }

  selectQuestion(question) {
    this.selectedQuestion.next(question)
  }

}
