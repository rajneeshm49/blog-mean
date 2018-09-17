import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ArticlesService {
    url = '/api/articles';

    constructor(private http: HttpClient) {}

    //get all articles
    getAllArticles(category): Observable<any> {
        let httpOptions = {
            headers: new HttpHeaders({
                'content-type': 'application/json',
                'authorization': 'bearer ' + localStorage.getItem('blogosphere_user_token')
            }),
            params: {
                category: category
            }
        }
        return this.http.get(this.url, httpOptions).pipe(
            tap((res:any) => {
                console.log('Articles fetched')
            }), catchError(this.handleError('get Articles'))
        );
    }

    getArticleDetail(id): Observable<any> {
        return this.http.get(`${this.url}/detail`, {
            params: {
                id: id
            }
        }).pipe(
            tap((res:any) => {
                console.log('article detail fetched without any error');
            }),
            catchError(this.handleError('article detail'))
        )
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

    editBlog(articleBody):Observable<any> {
        let httpOptions = {
            headers: new HttpHeaders({
                'content-type': 'application/json',
                'authorization': 'bearer ' + localStorage.getItem('blogosphere_user_token')
            })
        }
        
        return this.http.put(`${this.url}/editBlog`, articleBody, httpOptions).pipe(
            tap((res:any) => {
                console.log('article updated without any error');
            }),
            catchError(this.handleError('article updated'))
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