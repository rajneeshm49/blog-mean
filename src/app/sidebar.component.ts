import { Component, OnInit } from '@angular/core';
import { CategoryService } from './services/category.service';

@Component({
    templateUrl: './templates/sidebar.component.html',
    selector: 'app-sidebar'
})

export class SidebarComponent implements OnInit {
    
    categories;
    constructor(private categoryService: CategoryService) {}

    ngOnInit() {
        this.categoryService.getAllCategories().subscribe(catg => {
            if(catg.success == 1) {
                this.categories = catg.data;
            } else {
                this.categories = [];
            }
            
        });    
    }
}