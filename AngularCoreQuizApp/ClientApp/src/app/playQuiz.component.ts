import { Component } from '@angular/core'
import { ApiService } from './api.service'
import { ActivatedRoute } from '@angular/router'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { FinishedComponent } from './finished.component'
@Component({
  templateUrl: './playQuiz.component.html'
})
export class PlayQuizComponent {

  quizId
  questions

  constructor(private api: ApiService, private route: ActivatedRoute, private dialog: MatDialog) { }


  ngOnInit() {
    this.quizId = this.route.snapshot.paramMap.get('quizId')

    this.api.getQuestions(this.quizId).subscribe(res => {
      this.questions = res

      this.questions.forEach(q => {
        q.answers = [q.correctAnswer, q.answer1, q.answer2, q.answer3]
        shuffle(q.answers)
      });
    })
  }

  finish() {
    var correct = 0;
    this.questions.forEach(q => {
      if (q.correctAnswer == q.selectedAnswer)
        correct++
    });

    let dialogRef = this.dialog.open(FinishedComponent, {
      data: { correct, total: this.questions.length }
    });

    console.log(correct)
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}

function shuffle(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}
