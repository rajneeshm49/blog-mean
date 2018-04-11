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
import { FooterComponent } from './footer.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { ArticlesService } from './services/articles.service';
import { UserService } from './services/user.service'
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, LoginComponent, LogoutComponent, FooterComponent, HomeComponent, CategoriesComponent, CreateBlogComponent, RegisterComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  providers: [ ArticlesService, UserService, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
