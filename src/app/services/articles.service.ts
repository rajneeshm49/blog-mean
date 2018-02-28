import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}