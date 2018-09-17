import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

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
                console.log(emission);
            }),
            catchError(val => of('Error in getting categories'))
        );
    }
}