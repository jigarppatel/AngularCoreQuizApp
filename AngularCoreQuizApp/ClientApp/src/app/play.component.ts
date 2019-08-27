import { Component } from '@angular/core'
import { ApiService } from './api.service'

@Component({
    selector: 'play',
    templateUrl: './play.component.html'
})
export class PlayComponent {

    quizzes

    constructor(private api: ApiService) {}

    ngOnInit() {
        this.api.getAllQuizzes().subscribe(res => {
            this.quizzes = res
        })
    }
}