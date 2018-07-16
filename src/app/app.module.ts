import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { LogoutComponent } from './logout.component';
import { HomeComponent } from './home.component';
import { CategoriesComponent } from './categories.component';
import { CreateBlogComponent } from './create-blog.component';
import { EditBlogComponent } from './edit-blog.component';
import { ArticleComponent } from './article.component';
import { SidebarComponent } from './sidebar.component';
import { FooterComponent } from './footer.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { FlashMessagesModule } from 'angular2-flash-messages';

import { ArticlesService } from './services/articles.service';
import { UserService } from './services/user.service';
import { CategoryService } from './services/category.service';
import { MessageService } from './services/message.service';

import { ReadMorePipe } from './pipes/read-more.pipe';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, LoginComponent, LogoutComponent, FooterComponent, HomeComponent, CategoriesComponent, CreateBlogComponent, EditBlogComponent, SidebarComponent, 
    RegisterComponent, ArticleComponent, ReadMorePipe
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, FlashMessagesModule.forRoot(), FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  providers: [ ArticlesService, UserService, CategoryService, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
