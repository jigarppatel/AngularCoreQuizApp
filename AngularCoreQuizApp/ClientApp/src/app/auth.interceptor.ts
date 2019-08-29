import { Injectable } from '@angular/core'
import { ErrorDialogService } from './error-dialog/errordialog.service';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router'
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { LoaderService } from './services/loader/loader-service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {



  constructor(public errorDialogService: ErrorDialogService, private _loaderService: LoaderService, public router: Router) {
  }

  intercept(req, next) {

    var token = localStorage.getItem('token');
    var authRequest = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + token)
    })
    this._loaderService.setVisiblility(true);
    return next.handle(authRequest).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
          // this.errorDialogService.openDialog(event);
          
          this._loaderService.setVisiblility(false);
        }
        
        
        return event;
      }),
      
      catchError((error: HttpErrorResponse) => {
        
        this._loaderService.setVisiblility(false);
        let data = {};
        data = {
          reason: error.error != null ? error.error: (error && error.error && error.error.length > 0 ? error.error[0].description : error.statusText),
          status: error.status
        };
        //if (error.error != null)
        //  data.reason = error.error;
        this.errorDialogService.openDialog(data);
        //if (error.status == 401)
        //  this.router.navigateByUrl('/login');
        return throwError(error);
      }));
  }

}
