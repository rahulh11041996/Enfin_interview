import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_TOKEN = '9d43586ad3a0a056677256d827c4b95229c4398cd683b160344931d838928661'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: { Authorization: `Bearer ${AUTH_TOKEN}` }
    })
    return next.handle(request);
  }
}
