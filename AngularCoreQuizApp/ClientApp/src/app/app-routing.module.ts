import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './question.component';
import { QuestionsComponent } from './questions.component';
import { HomeComponent } from './home.component';
import { QuizComponent } from './quiz.component';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { PlayComponent } from './play.component';
import { PlayQuizComponent } from './playQuiz.component'
const routes: Routes = [
  { path: '', component: PlayComponent },
  { path: 'myQuiz', component: HomeComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'question/:quizId', component: QuestionComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'play', component: PlayComponent },
  { path: 'playQuiz/:quizId/:quizName', component: PlayQuizComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
