import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { FlashMessagesModule } from 'angular2-flash-messages';

import { ArticlesService } from './services/articles.service';
import { UserService } from './services/user.service';
import { CategoryService } from './services/category.service';
import { MessageService } from './services/message.service';

import { ReadMorePipe } from './pipes/read-more.pipe';
import { MyDialogComponent } from './my-dialog.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, LoginComponent, LogoutComponent, FooterComponent, HomeComponent, CategoriesComponent, CreateBlogComponent, EditBlogComponent, SidebarComponent, 
    RegisterComponent, ArticleComponent, ReadMorePipe, MyDialogComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, FlashMessagesModule.forRoot(), 
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(), MaterialModule, BrowserAnimationsModule
  ],
  providers: [ ArticlesService, UserService, CategoryService, MessageService ],
  bootstrap: [AppComponent],
  entryComponents: [
    MyDialogComponent
  ]
})
export class AppModule { }
