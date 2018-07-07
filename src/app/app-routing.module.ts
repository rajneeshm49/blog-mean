import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CategoriesComponent } from './categories.component';
import { CreateBlogComponent } from './create-blog.component';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { LogoutComponent } from './logout.component';
import { ArticleComponent } from './article.component'; 
import { EditBlogComponent } from './edit-blog.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'category/:id', component: HomeComponent },
    { path: 'article/edit/:id', component: EditBlogComponent},
    { path: 'article/:id', component: ArticleComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'create-blog', component: CreateBlogComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'register', component: RegisterComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

}