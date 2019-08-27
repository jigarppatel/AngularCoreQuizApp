import { Injectable } from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { Subject } from 'rxjs';
@Injectable()
export class ApiService {

  private selectedQuestion = new Subject<any>();
  questionSelected = this.selectedQuestion.asObservable();

  private selectedQuiz = new Subject<any>();
  quizSelected = this.selectedQuiz.asObservable();


  private getQuizList = new Subject<any>();
  quizListSelected = this.getQuizList.asObservable();

  private getQuestionList = new Subject<any>();
  questionList = this.getQuestionList.asObservable();

  constructor(private http: HttpClient) {
  }

  getQuestions(quizId) {
    return this.http.get('api/Questions/' + quizId);
  }

  postQuestion(question) {
    return this.http.post('api/Questions', question);
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
    return this.http.post('api/Quizzes', quiz)
  }
  getQuizzes() {
    return this.http.get('api/Quizzes');
  }
  getAllQuizzes() {
    return this.http.get('api/quizzes/all');
  }

  selectQuestion(question) {
    this.selectedQuestion.next(question)
  }
  selectQuiz(quiz) {
    this.selectedQuiz.next(quiz)
  }

  getQuizListMethod(quizzes) {
    this.getQuizList.next(quizzes)
  }

  setQuestionList(questions) {
    this.getQuestionList.next(questions)
  }
}
