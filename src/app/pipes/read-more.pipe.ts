import {Pipe, PipeTransform} from '@angular/core';
import {Router} from "@angular/router";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import linkifyStr from 'linkifyjs/string';

@Pipe({name: 'readMore'})

export class ReadMorePipe implements PipeTransform {
    constructor(private router: Router, private sanitizer: DomSanitizer) {}

    transform(value: string, article_id: number): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(value.substr(0, 600) + " ...<a [routerLink]='/article/article_id'>Read More</a>");
    }

    redirectToDetailPage(article_id) {
        this.router.navigate([`/article/${article_id}`]);
      }
}