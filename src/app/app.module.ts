import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { LoginComponent } from './login.component';
import { HomeComponent } from './home.component';
import { CategoriesComponent } from './categories.component';
import { CreateBlogComponent } from './create-blog.component';
import { FooterComponent } from './footer.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { ArticlesService } from './services/articles.service';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, LoginComponent, FooterComponent, HomeComponent, CategoriesComponent, CreateBlogComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  providers: [ ArticlesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
