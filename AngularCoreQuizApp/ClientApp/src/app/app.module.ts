import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material'
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { QuestionComponent } from './question.component'
import { ApiService } from './api.service'
import { QuestionsComponent } from './questions.component'
import { NavComponent } from './nav.component'
import { QuizComponent } from './quiz.component'

@NgModule({
  declarations: [
    AppComponent, QuestionComponent, QuestionsComponent, HomeComponent,
    NavComponent, QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, MatButtonModule, MatInputModule, MatCardModule, FormsModule, HttpClientModule, MatListModule,
    MatToolbarModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
