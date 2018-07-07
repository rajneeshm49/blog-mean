import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CategoryService {

    constructor(private http: HttpClient) { }

    getAllCategories(): Observable<any> {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'authorization': 'bearer '+ localStorage.getItem('blogosphere_user_token')
            })
        }
        return this.http.get('/api/articles/categories', httpOptions).pipe(
            tap(emission => {
                console.log('categories fetched');
            }),
            catchError(val => of('Error in getting categories'))
        );
    }
}