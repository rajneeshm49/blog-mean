import { Component, OnInit } from '@angular/core';
import  { Router, ActivatedRoute } from '@angular/router';
import { ArticlesService } from './services/articles.service';

@Component ({
    templateUrl: './templates/article.component.html'
})

export class ArticleComponent implements OnInit {

    articleDetail = '';
    constructor(private route: ActivatedRoute, private articlesService: ArticlesService) {}

    ngOnInit() {
        this.getArticle();
    }

    getArticle() {
        const id = this.route.snapshot.paramMap.get('id');
        this.articlesService.getArticleDetail(id).subscribe(artDetail => {
            if(artDetail.success == true) {
                this.articleDetail = artDetail.data;
            }
        });
    }
}