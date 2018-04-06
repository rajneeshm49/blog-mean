import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ArticlesService {
    url = '/api/articles';

    constructor(private http: HttpClient) {}

    getAllArticles(): Observable<any> {
        return this.http.get(this.url);
    }

    createBlog(articleBody): Observable<any> {
        let httpOptions = {
            headers: new HttpHeaders({
                'content-type': 'application/json',
                'authorization': 'bearer ' + localStorage.getItem('blogosphere_user_token')
            })
        }
        return this.http.post(`${this.url}/createBlog`, articleBody, httpOptions).pipe(
            tap((res:any) => {
                console.log('article created without any error');
            }
            ),
            catchError(this.handleError('article created'))
        )
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