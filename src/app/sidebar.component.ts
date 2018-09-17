import { Component, OnInit } from '@angular/core';
import { CategoryService } from './services/category.service';

@Component({
    templateUrl: './templates/sidebar.component.html',
    selector: 'app-sidebar'
})

export class SidebarComponent implements OnInit {
    
    categories;
    keys;
    constructor(private categoryService: CategoryService) {}

    ngOnInit() {
        this.categoryService.getAllCategories().subscribe(catg => {
            if(catg.success) {
                this.categories = catg.data;
                this.keys = Object.keys(catg.data);
            } else {
                this.categories = [];
            }
            
        });    
    }
}