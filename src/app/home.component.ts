import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './services/articles.service';

@Component({
    templateUrl: './templates/home.component.html'
})

export class HomeComponent implements OnInit {
    private articles;
    constructor(private articlesService: ArticlesService) {}
  
    ngOnInit() {
      this.getAllArticles();
    }
  
    getAllArticles(): void {
      this.articlesService.getAllArticles().subscribe(articles => this.articles = articles);
    }
}