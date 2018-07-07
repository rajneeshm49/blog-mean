import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './services/articles.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    templateUrl: './templates/home.component.html'
})

export class HomeComponent implements OnInit {
    private articles;

    constructor(private articlesService: ArticlesService, private router: Router, private route: ActivatedRoute ) {}
  
    ngOnInit() {

      //if user is logged in, we will show him the articles, otherwise redirect him to login page
      if(localStorage.getItem('blogosphere_user_token')) {
        this.getAllArticles();
      } else {
        this.router.navigate(['/login']);
      }
    }
  
    getAllArticles(): void {

      this.route.params.subscribe(params => {
        const id = this.route.snapshot.paramMap.get('id');

        this.articlesService.getAllArticles(typeof(id) == 'undefined'?'all':id).subscribe(res => {
          if(res.success == true) {
            this.articles = res.data;
          } else {
            this.articles = [];
          }
        });
      })
      
    }

    redirectToDetailPage(article_id) {
      this.router.navigate([`/article/${article_id}`]);
    }
}