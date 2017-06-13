import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {LoginResponse} from './login-response';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class LoginService {

    private _endpoint = 'http://v2.beta.revealingreality.co.uk/api-login/login';

    constructor(private http: Http) { }

    login(email: string, password: string): Observable<LoginResponse> {
        const body = { 'email': email, 'password': password };

        return this.http.post(this._endpoint, body)
          .map(response => response.json() as LoginResponse)
          .catch(error => Observable.throw(error.json() as LoginResponse));
    }

}
