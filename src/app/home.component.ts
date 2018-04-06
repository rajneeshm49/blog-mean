import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './services/articles.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './templates/home.component.html'
})

export class HomeComponent implements OnInit {
    private articles;
    constructor(private articlesService: ArticlesService, private router: Router) {}
  
    ngOnInit() {

      //if user is logged in, we will show him the articles, otherwise redirect him to login page
      if(localStorage.getItem('blogosphere_user_token')) {
        this.getAllArticles();
      } else {
        this.router.navigate(['/login']);
      }
    }
  
    getAllArticles(): void {
      this.articlesService.getAllArticles().subscribe(articles => this.articles = articles);
    }
}