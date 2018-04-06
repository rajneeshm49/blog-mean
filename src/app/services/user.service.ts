import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserService {

    token;
    isLoggedIn = false;
    name;
    userApiUrl = '/api/user';

    constructor(private http: HttpClient) {}

    login(userCredentialsBody): Observable<any> {
        const httpOptions= {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
        return this.http.post(`${this.userApiUrl}/login`, userCredentialsBody, httpOptions).pipe(
            tap((res:any) => 
                console.log('got output in user service')
            ),

            catchError(this.handleError<any>('Error while User Login'))
        );
    }

    register(userDataBody) {

        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
        return this.http.post(`${this.userApiUrl}/register`, userDataBody, httpOptions).pipe(
            tap((res:any) => 
                console.log('registration done')
            ),

            catchError(this.handleError<any>('Error while User registration.'))
        );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
    
        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
        };
    }

}
