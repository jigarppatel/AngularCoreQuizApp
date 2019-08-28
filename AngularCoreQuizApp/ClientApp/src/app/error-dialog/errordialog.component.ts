import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { errorData } from '../models/model';

@Component({
  selector: 'app-root',
  templateUrl: './errordialog.component.html'
})
export class ErrorDialogComponent {
  title = 'Angular-Interceptor';
  constructor(@Inject(MAT_DIALOG_DATA) public data: errorData) { }
}
