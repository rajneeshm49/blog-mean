import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserService {

    token;
    isLoggedIn = false;

    constructor(private http: HttpClient, private router: Router) {}

    login(userCredentialsBody): Observable<any> {
        const loginUrl = '/api/user/login';
        const httpOptions= {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
        return this.http.post(loginUrl, userCredentialsBody, httpOptions).pipe(
            tap((res:any) => {
            if(res.success === true) {
                this.isLoggedIn = true;
                this.token = res.token;
                this.router.navigate(['/']);
            } else {
                console.log(res);
            }
        }
        ),

        catchError(this.handleError<any>('login done'))
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
