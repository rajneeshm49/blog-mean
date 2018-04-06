import { Component } from '@angular/core';
import { ArticlesService } from './services/articles.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './templates/create-blog.component.html'
})

export class CreateBlogComponent {
    blog = {title: '', category: '', description: ''};
    error_msg = '';
    categories = ["Parenting", "Technical", "Other"];

    constructor(private articlesService: ArticlesService, private router: Router) { }

    onSubmit(): void {
        this.articlesService.createBlog(this.blog).subscribe(
            res => {
                if(res.success === false) {
                    this.error_msg = 'Some error occurred while creating blog. Please try again later';
                } else {
                    this.router.navigate(['/']);
                }
            }
        );
    }
}