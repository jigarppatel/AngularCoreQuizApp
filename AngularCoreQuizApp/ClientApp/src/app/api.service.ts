import { Injectable } from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { Subject } from 'rxjs';
import { environment } from '../environments/environment';

const baseUrl = environment.BaseURL;

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
    return this.http.get(baseUrl+'api/Questions/' + quizId);
  }

  postQuestion(question) {
    return this.http.post(baseUrl +'api/Questions', question);
  }

  putQuestion(question) {
    return this.http.put(baseUrl +'api/Questions/' + question.id, question);
  }
  putQuiz(quiz) {
    return this.http.put(baseUrl +'api/Quizzes/' + quiz.id, quiz);
  }

  postQuiz(quiz) {
    return this.http.post(baseUrl +'api/Quizzes', quiz)
  }
  getQuizzes() {
    return this.http.get(baseUrl +'api/Quizzes');
  }
  getAllQuizzes() {
    return this.http.get(baseUrl +'api/quizzes/all');
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
