import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) {}

    login(userCredentials): Observable<any> {
        const loginUrl = '/login';
        const httpOptions= {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
        return this.http.post(loginUrl, userCredentials, httpOptions);

    }

}
