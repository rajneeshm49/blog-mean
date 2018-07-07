import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './services/articles.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './templates/edit-blog.component.html'
})

export class EditBlogComponent implements OnInit {
    error_msg = '';
    categories = ["Parenting", "Technical", "Other"];
    blog= '';
    blogId;

    constructor(private router: Router ,private route: ActivatedRoute, private articlesService: ArticlesService) { }

    ngOnInit() {
        this.getArticleDetail();
    }

    getArticleDetail() {
        this.blogId = this.route.snapshot.paramMap.get('id');
        this.articlesService.getArticleDetail(this.blogId).subscribe(artDetail => {
            if(artDetail.success == true) {
                this.blog = artDetail.data;
            }
        });
    }

    onSubmit(): void {
        this.articlesService.editBlog(this.blog).subscribe(
            res => {
                if(res.success === false) {
                    this.error_msg = 'Some error occurred while updating blog. Please try again later';
                } else {
                    this.router.navigate([`/article/${this.blogId}`]);
                }
            }
        );
    }
}