webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("./src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categories_component__ = __webpack_require__("./src/app/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_blog_component__ = __webpack_require__("./src/app/create-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_component__ = __webpack_require__("./src/app/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_component__ = __webpack_require__("./src/app/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logout_component__ = __webpack_require__("./src/app/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__article_component__ = __webpack_require__("./src/app/article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__edit_blog_component__ = __webpack_require__("./src/app/edit-blog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */] },
    { path: 'category/:id', component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */] },
    { path: 'article/edit/:id', component: __WEBPACK_IMPORTED_MODULE_9__edit_blog_component__["a" /* EditBlogComponent */] },
    { path: 'article/:id', component: __WEBPACK_IMPORTED_MODULE_8__article_component__["a" /* ArticleComponent */] },
    { path: 'categories', component: __WEBPACK_IMPORTED_MODULE_3__categories_component__["a" /* CategoriesComponent */] },
    { path: 'create-blog', component: __WEBPACK_IMPORTED_MODULE_4__create_blog_component__["a" /* CreateBlogComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__login_component__["a" /* LoginComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_7__logout_component__["a" /* LogoutComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__register_component__["a" /* RegisterComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(router, messageService, flashMessage) {
        this.router = router;
        this.messageService = messageService;
        this.flashMessage = flashMessage;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent.prototype.ngDoCheck = function () {
        if (this.messageService.show_msg != '') {
            this.flashMessage.show(this.messageService.show_msg, { cssClass: 'alert-success' });
            this.messageService.show_msg = '';
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/templates/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_component__ = __webpack_require__("./src/app/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_component__ = __webpack_require__("./src/app/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_component__ = __webpack_require__("./src/app/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logout_component__ = __webpack_require__("./src/app/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_component__ = __webpack_require__("./src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__categories_component__ = __webpack_require__("./src/app/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__create_blog_component__ = __webpack_require__("./src/app/create-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__edit_blog_component__ = __webpack_require__("./src/app/edit-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__article_component__ = __webpack_require__("./src/app/article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sidebar_component__ = __webpack_require__("./src/app/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__footer_component__ = __webpack_require__("./src/app/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular_froala_wysiwyg__ = __webpack_require__("./node_modules/angular-froala-wysiwyg/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_articles_service__ = __webpack_require__("./src/app/services/articles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_category_service__ = __webpack_require__("./src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pipes_read_more_pipe__ = __webpack_require__("./src/app/pipes/read-more.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_3__header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_5__login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_6__logout_component__["a" /* LogoutComponent */], __WEBPACK_IMPORTED_MODULE_13__footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_7__home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_8__categories_component__["a" /* CategoriesComponent */], __WEBPACK_IMPORTED_MODULE_9__create_blog_component__["a" /* CreateBlogComponent */], __WEBPACK_IMPORTED_MODULE_10__edit_blog_component__["a" /* EditBlogComponent */], __WEBPACK_IMPORTED_MODULE_12__sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_4__register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_11__article_component__["a" /* ArticleComponent */], __WEBPACK_IMPORTED_MODULE_23__pipes_read_more_pipe__["a" /* ReadMorePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_16__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_14__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__["FlashMessagesModule"].forRoot(), __WEBPACK_IMPORTED_MODULE_17_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_17_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_19__services_articles_service__["a" /* ArticlesService */], __WEBPACK_IMPORTED_MODULE_20__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_21__services_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_22__services_message_service__["a" /* MessageService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_articles_service__ = __webpack_require__("./src/app/services/articles.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleComponent = /** @class */ (function () {
    function ArticleComponent(route, articlesService) {
        this.route = route;
        this.articlesService = articlesService;
        this.canEdit = false;
    }
    ArticleComponent.prototype.ngOnInit = function () {
        this.getArticle();
    };
    ArticleComponent.prototype.getArticle = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.articlesService.getArticleDetail(id).subscribe(function (artDetail) {
            if (artDetail.success == true) {
                _this.articleDetail = artDetail.data;
                if (localStorage.getItem('blogosphere_username') == _this.articleDetail.created_by) {
                    _this.canEdit = true;
                }
            }
        });
    };
    ArticleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/templates/article.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_articles_service__["a" /* ArticlesService */]])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent() {
    }
    CategoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/templates/categories.component.html")
        })
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/create-blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateBlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_articles_service__ = __webpack_require__("./src/app/services/articles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateBlogComponent = /** @class */ (function () {
    function CreateBlogComponent(articlesService, router) {
        this.articlesService = articlesService;
        this.router = router;
        this.blog = { title: '', category: '', isPublic: true, description: '' };
        this.error_msg = '';
        this.categories = ["Parenting", "Technical", "Other"];
    }
    CreateBlogComponent.prototype.onSubmit = function () {
        var _this = this;
        this.articlesService.createBlog(this.blog).subscribe(function (res) {
            if (res.success === false) {
                _this.error_msg = 'Some error occurred while creating blog. Please try again later';
            }
            else {
                _this.router.navigate(['/']);
            }
        });
    };
    CreateBlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/templates/create-blog.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_articles_service__["a" /* ArticlesService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], CreateBlogComponent);
    return CreateBlogComponent;
}());



/***/ }),

/***/ "./src/app/edit-blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_articles_service__ = __webpack_require__("./src/app/services/articles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditBlogComponent = /** @class */ (function () {
    function EditBlogComponent(router, route, articlesService) {
        this.router = router;
        this.route = route;
        this.articlesService = articlesService;
        this.error_msg = '';
        this.categories = ["Parenting", "Technical", "Other"];
        this.blog = '';
    }
    EditBlogComponent.prototype.ngOnInit = function () {
        this.getArticleDetail();
    };
    EditBlogComponent.prototype.getArticleDetail = function () {
        var _this = this;
        this.blogId = this.route.snapshot.paramMap.get('id');
        this.articlesService.getArticleDetail(this.blogId).subscribe(function (artDetail) {
            if (artDetail.success == true) {
                _this.blog = artDetail.data;
            }
        });
    };
    EditBlogComponent.prototype.onSubmit = function () {
        var _this = this;
        this.articlesService.editBlog(this.blog).subscribe(function (res) {
            if (res.success === false) {
                _this.error_msg = 'Some error occurred while updating blog. Please try again later';
            }
            else {
                _this.router.navigate(["/article/" + _this.blogId]);
            }
        });
    };
    EditBlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/templates/edit-blog.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__services_articles_service__["a" /* ArticlesService */]])
    ], EditBlogComponent);
    return EditBlogComponent;
}());



/***/ }),

/***/ "./src/app/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/templates/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userService) {
        this.userService = userService;
        this.i = 0;
    }
    HeaderComponent.prototype.ngDoCheck = function () {
        if (localStorage.getItem('blogosphere_user_token')) {
            this.isLoggedIn = true;
            this.name = localStorage.getItem('blogosphere_user');
        }
        else {
            this.isLoggedIn = false;
        }
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/templates/header.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_articles_service__ = __webpack_require__("./src/app/services/articles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(articlesService, router, route) {
        this.articlesService = articlesService;
        this.router = router;
        this.route = route;
    }
    HomeComponent.prototype.ngOnInit = function () {
        //if user is logged in, we will show him the articles, otherwise redirect him to login page
        if (localStorage.getItem('blogosphere_user_token')) {
            this.getAllArticles();
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    HomeComponent.prototype.getAllArticles = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = _this.route.snapshot.paramMap.get('id');
            _this.articlesService.getAllArticles(typeof (id) == 'undefined' ? 'all' : id).subscribe(function (res) {
                if (res.success == true) {
                    _this.articles = res.data;
                }
                else {
                    _this.articles = [];
                }
            });
        });
    };
    HomeComponent.prototype.redirectToDetailPage = function (article_id) {
        this.router.navigate(["/article/" + article_id]);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/templates/home.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_articles_service__["a" /* ArticlesService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = { username: '', password: '' };
        this.errorMsg = '';
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.login(this.user).subscribe(function (res) {
            if (res.success === true) {
                localStorage.setItem('blogosphere_user_token', res.token);
                localStorage.setItem('blogosphere_user', res.name);
                localStorage.setItem('blogosphere_username', res.username);
                _this.router.navigate(['/home']);
            }
            else {
                _this.errorMsg = res.message;
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/templates/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(router) {
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        localStorage.removeItem('blogosphere_user_token');
        localStorage.removeItem('blogosphere_user');
        this.router.navigate(['/login']);
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/templates/logout.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/pipes/read-more.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadMorePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReadMorePipe = /** @class */ (function () {
    function ReadMorePipe(router, sanitizer) {
        this.router = router;
        this.sanitizer = sanitizer;
    }
    ReadMorePipe.prototype.transform = function (value, article_id) {
        return this.sanitizer.bypassSecurityTrustHtml(value.substr(0, 600) + " ...<a [routerLink]='/article/article_id'>Read More</a>");
    };
    ReadMorePipe.prototype.redirectToDetailPage = function (article_id) {
        this.router.navigate(["/article/" + article_id]);
    };
    ReadMorePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'readMore' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]])
    ], ReadMorePipe);
    return ReadMorePipe;
}());



/***/ }),

/***/ "./src/app/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, messageService, router) {
        this.userService = userService;
        this.messageService = messageService;
        this.router = router;
        this.user = { firstname: '', lastname: '', username: '', password: '', email: '', confirm_pwd: '' };
        this.errorMsg = '';
        this.successMsg = '';
    }
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.successMsg = '';
        this.errorMsg = '';
        this.userService.register(this.user).subscribe(function (res) {
            if (res.success === false) {
                _this.errorMsg = res.message;
            }
            else {
                _this.successMsg = res.message;
                _this.messageService.show_msg = 'User successfully registered. Please login to explore Blogosphere';
                _this.router.navigate(['/login']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/templates/register.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/articles.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArticlesService = /** @class */ (function () {
    function ArticlesService(http) {
        this.http = http;
        this.url = '/api/articles';
    }
    //get all articles
    ArticlesService.prototype.getAllArticles = function (category) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'content-type': 'application/json',
                'authorization': 'bearer ' + localStorage.getItem('blogosphere_user_token')
            }),
            params: {
                category: category
            }
        };
        return this.http.get(this.url, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (res) {
            console.log('Articles fetched');
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('get Articles')));
    };
    ArticlesService.prototype.getArticleDetail = function (id) {
        return this.http.get(this.url + "/detail", {
            params: {
                id: id
            }
        }).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (res) {
            console.log('article detail fetched without any error');
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('article detail')));
    };
    ArticlesService.prototype.createBlog = function (articleBody) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'content-type': 'application/json',
                'authorization': 'bearer ' + localStorage.getItem('blogosphere_user_token')
            })
        };
        return this.http.post(this.url + "/createBlog", articleBody, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (res) {
            console.log('article created without any error');
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('article created')));
    };
    ArticlesService.prototype.editBlog = function (articleBody) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'content-type': 'application/json',
                'authorization': 'bearer ' + localStorage.getItem('blogosphere_user_token')
            })
        };
        return this.http.put(this.url + "/editBlog", articleBody, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (res) {
            console.log('article updated without any error');
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('article updated')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    ArticlesService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    ArticlesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ArticlesService);
    return ArticlesService;
}());



/***/ }),

/***/ "./src/app/services/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
    }
    CategoryService.prototype.getAllCategories = function () {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'authorization': 'bearer ' + localStorage.getItem('blogosphere_user_token')
            })
        };
        return this.http.get('/api/articles/categories', httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (emission) {
            console.log('categories fetched');
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function (val) { return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])('Error in getting categories'); }));
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/services/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.show_msg = '';
    }
    MessageService.prototype.clearMessage = function () {
        this.show_msg = '';
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.isLoggedIn = false;
        this.userApiUrl = '/api/user';
    }
    UserService.prototype.login = function (userCredentialsBody) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this.userApiUrl + "/login", userCredentialsBody, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (res) {
            return console.log('got output in user service');
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError('Error while User Login')));
    };
    UserService.prototype.register = function (userDataBody) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this.userApiUrl + "/register", userDataBody, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (res) {
            return console.log('registration done');
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError('Error while User registration.')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    UserService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_category_service__ = __webpack_require__("./src/app/services/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(categoryService) {
        this.categoryService = categoryService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.getAllCategories().subscribe(function (catg) {
            if (catg.success == 1) {
                _this.categories = catg.data;
            }
            else {
                _this.categories = [];
            }
        });
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/templates/sidebar.component.html"),
            selector: 'app-sidebar'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_category_service__["a" /* CategoryService */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/templates/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<div id=\"content-wrap\">\n    <div class=\"row\">\n            <flash-messages class=\"alert container\" style=\"text-align:center;\"></flash-messages>\n        <router-outlet></router-outlet>\n    </div> <!-- end row -->\n</div> <!-- end content-wrap -->\n<app-footer></app-footer>\n  \n  "

/***/ }),

/***/ "./src/app/templates/article.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main\" class=\"eight columns\">\n    <article class=\"entry\">\n        <header class=\"entry-header\">\n            <h2 class=\"entry-title\">{{articleDetail?.title}}&nbsp;&nbsp;<small *ngIf=\"canEdit\"><a routerLink=\"/article/edit/{{articleDetail?._id}}\" title=\"Edit Article\"><img src=\"assets/img/edit.png\" /></a></small></h2> \t\t\t\t \n            <div class=\"entry-meta\">\n                <ul>\n                    <li>{{articleDetail?.created | date:'medium'}}</li>\n                    <span class=\"meta-sep\">&bull;</span>\t\t\t\t\t\t\t\t\n                    <li><a href=\"#\" title=\"\" rel=\"category tag\">{{articleDetail?.category}}</a></li>\n                    <span class=\"meta-sep\">&bull;</span>\n                    <li>{{articleDetail?.created_by}}</li>\n                </ul>\n            </div> \n        </header> \n        <div class=\"entry-content\" [innerHTML]=\"articleDetail?.description\"></div> \n    </article>  \n</div>\n<app-sidebar></app-sidebar>"

/***/ }),

/***/ "./src/app/templates/categories.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/templates/create-blog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form #blogForm=\"ngForm\" (ngSubmit)=\"onSubmit();\">\n        <div class=\"form-group row\" style=\"padding-top:50px;\">\n            <label for=\"title\" class=\"col-sm-2 col-lg-2 col-xl-2 col-form-label\">Title</label>\n            <div class=\"col-sm-10 col-lg-10 col-xl-10\">\n                <input type=\"text\" name=\"title\" id=\"title\" class=\"white-textbox\" [(ngModel)]=\"blog.title\" #title=\"ngModel\" placeholder=\"Enter Title\" required>\n                <div class=\"alert alert-danger\" [hidden]=\"title.pristine || title.valid\">Please enter Title</div>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"category\" class=\"col-sm-2 col-lg-2 col xl-2 col-form-label\">Category</label>\n            <div class=\"col-sm-10 col-lg-10 col-xl-10\">\n                <select name=\"category\" class=\"white-textbox\" [(ngModel)]=\"blog.category\" #category=\"ngModel\" required>\n                    <option *ngFor=\"let category of categories\" value=\"{{category}}\">{{category}}</option>\n                </select>\n                <div class=\"alert alert-danger\" [hidden]=\"category.pristine || category.valid\">Please select category</div>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"category\" class=\"col-sm-2 col-lg-2 col xl-2 col-form-label\">Is public</label>\n            <div class=\"col-sm-10 col-lg-10 col-xl-10\">\n                <input type=\"checkbox\" name=\"isPublic\" [(ngModel)]=\"blog.isPublic\" #isPublic=\"ngModel\" >\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"description\" class=\"col-sm-2 col-lg-2 col xl-2 col-form-label\">Description</label>\n            <div class=\"col-sm-10 col-lg-10 col xl-10\">\n                <textarea [froalaEditor] name=\"description\" id=\"description\" cols=\"30\" rows=\"10\" class=\"form-control\" [(ngModel)]=\"blog.description\" #description=\"ngModel\" required></textarea>\n                <div class=\"alert alert-danger\" [hidden]=\"description.pristine || description.valid\">Please enter Description</div>\n            </div>\n        </div>\n        <div class=\"form-group row\" style=\"padding-top:50px;\">\n            <div class=\"col-sm-2 col-lg-2 col xl-2 col-form-label\">&nbsp;</div>\n            <div>\n                <button type=\"submit\" [disabled]=\"!blogForm.valid || blogForm.pritine\" class=\"btn btn-success\">Submit</button>\n            </div>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/templates/edit-blog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form #blogForm=\"ngForm\" (ngSubmit)=\"onSubmit();\">\n        <div class=\"form-group row\" style=\"padding-top:50px;\">\n            <label for=\"title\" class=\"col-sm-2 col-lg-2 col-xl-2 col-form-label\">Title</label>\n            <div class=\"col-sm-10 col-lg-10 col-xl-10\">\n                <input type=\"text\" name=\"title\" id=\"title\" class=\"white-textbox\" [(ngModel)]=\"blog.title\" #title=\"ngModel\" placeholder=\"Enter Title\" required readonly>\n                <div class=\"alert alert-danger\" [hidden]=\"title.pristine || title.valid\">Please enter Title</div>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"category\" class=\"col-sm-2 col-lg-2 col xl-2 col-form-label\">Category</label>\n            <div class=\"col-sm-10 col-lg-10 col-xl-10\">\n                <select name=\"category\" class=\"white-textbox\" [(ngModel)]=\"blog.category\" #category=\"ngModel\" required>\n                    <option *ngFor=\"let category of categories\" value=\"{{category}}\">{{category}}</option>\n                </select>\n                <div class=\"alert alert-danger\" [hidden]=\"category.pristine || category.valid\">Please select category</div>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"category\" class=\"col-sm-2 col-lg-2 col xl-2 col-form-label\">Is public</label>\n            <div class=\"col-sm-10 col-lg-10 col-xl-10\">\n                <input type=\"checkbox\" name=\"isPublic\" [(ngModel)]=\"blog.isPublic\" #isPublic=\"ngModel\" >\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"description\" class=\"col-sm-2 col-lg-2 col xl-2 col-form-label\">Description</label>\n            <div class=\"col-sm-10 col-lg-10 col xl-10\">\n                <textarea [froalaEditor] name=\"description\" id=\"description\" cols=\"30\" rows=\"10\" class=\"form-control\" [(ngModel)]=\"blog.description\" #description=\"ngModel\" required></textarea>\n                <div class=\"alert alert-danger\" [hidden]=\"description.pristine || description.valid\">Please enter Description</div>\n            </div>\n        </div>\n        <div class=\"form-group row\" style=\"padding-top:50px;\">\n            <div class=\"col-sm-2 col-lg-2 col xl-2 col-form-label\">&nbsp;</div>\n            <div>\n                <button type=\"submit\" [disabled]=\"!blogForm.valid || blogForm.pritine\" class=\"btn btn-success\">Submit</button>\n            </div>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/templates/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n\n    <div class=\"row\"> \n\n        <div class=\"twelve columns\">\t\n              <ul class=\"social-links\">\n             <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n             <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n             <li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>               \n             <li><a href=\"#\"><i class=\"fa fa-github-square\"></i></a></li>\n             <li><a href=\"#\"><i class=\"fa fa-instagram\"></i></a></li>\n             <li><a href=\"#\"><i class=\"fa fa-flickr\"></i></a></li>               \n             <li><a href=\"#\"><i class=\"fa fa-skype\"></i></a></li>\n          </ul>\t\t\t\n        </div>\n        \n       <div class=\"six columns info\">\n\n          <h3>About Keep It Simple</h3> \n\n          <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.\n          Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem\n          nibh id elit. \n          </p>\n\n          <p>Lorem ipsum Sed nulla deserunt voluptate elit occaecat culpa cupidatat sit irure sint \n          sint incididunt cupidatat esse in Ut sed commodo tempor consequat culpa fugiat incididunt.</p>\n\n       </div>\n\n       <div class=\"four columns\">\n\n          <h3>Photostream</h3>\n          \n          <ul class=\"photostream group\">\n             <!--li><a href=\"#\"><img alt=\"thumbnail\" src=\"images/thumb.jpg\"></a></li>\n             <li><a href=\"#\"><img alt=\"thumbnail\" src=\"images/thumb.jpg\"></a></li>\n             <li><a href=\"#\"><img alt=\"thumbnail\" src=\"images/thumb.jpg\"></a></li>\n             <li><a href=\"#\"><img alt=\"thumbnail\" src=\"images/thumb.jpg\"></a></li>\n             <li><a href=\"#\"><img alt=\"thumbnail\" src=\"images/thumb.jpg\"></a></li>\n             <li><a href=\"#\"><img alt=\"thumbnail\" src=\"images/thumb.jpg\"></a></li>\n             <li><a href=\"#\"><img alt=\"thumbnail\" src=\"images/thumb.jpg\"></a></li>\n             <li><a href=\"#\"><img alt=\"thumbnail\" src=\"images/thumb.jpg\"></a></li02261606161-->\n          </ul>           \n\n       </div>\n\n       <div class=\"two columns\">\n          <h3 class=\"social\">Navigate</h3>\n\n          <ul class=\"navigate group\">\n             <li><a href=\"#\">Home</a></li>\n             <li><a href=\"#\">Blog</a></li>\n             <li><a href=\"#\">Demo</a></li>\n             <li><a href=\"#\">Archives</a></li>\n             <li><a href=\"#\">About</a></li>\n          </ul>\n       </div>\n\n       <p class=\"copyright\">&copy; Copyright 2014 Keep It Simple. &nbsp; Design by <a title=\"Styleshout\" href=\"http://www.styleshout.com/\">Styleshout</a>.</p>\n      \n    </div> <!-- End row -->\n\n    <div id=\"go-top\"><a class=\"smoothscroll\" title=\"Back to Top\" href=\"#top\"><i class=\"fa fa-chevron-up\"></i></a></div>\n\n </footer> <!-- End Footer-->\n"

/***/ }),

/***/ "./src/app/templates/header.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"top\">\n\n    <div class=\"row\">\n\n        <div class=\"header-content twelve columns\">\n\n           <h1 id=\"logo-text\"><a routerLink=\"/\" title=\"\">Blog-sphere</a></h1>\n             <!--p id=\"intro\">Put your heart out here...</p-->\n             <hr>\n\n         </div>\t\t\t\n\n    </div>\n\n    <nav id=\"nav-wrap\"> \n\n        <a class=\"mobile-btn\" href=\"#nav-wrap\" title=\"Show navigation\">Show Menu</a>\n        <a class=\"mobile-btn\" href=\"#\" title=\"Hide navigation\">Hide Menu</a>\n\n        <div class=\"row\">    \t\t            \n\n                <ul id=\"nav\" class=\"nav\">\n                   <li routerLinkActive=\"current\"><a routerLink=\"/home\" >Home</a></li>\n                   <li routerLinkActive=\"current\"><a routerLink=\"/categories\" >Categories</a></li>\n                   <!--li class=\"has-children\"><a href=\"#\">Dropdown</a>\n                   <ul>\n                      <li><a href=\"#\">Submenu 01</a></li>\n                      <li><a href=\"#\">Submenu 02</a></li>\n                      <li><a href=\"#\">Submenu 03</a></li>\n                   </ul>\n                 </li-->\t\n                 <li *ngIf=\"isLoggedIn\" routerLinkActive=\"current\"><a routerLink=\"/create-blog\">Create Blog</a></li>\t\t      \t\n                 <li *ngIf=\"!isLoggedIn\"><a routerLink=\"/login\">Login</a></li>\n                 <li *ngIf=\"isLoggedIn\"><a routerLink=\"/logout\">Logout</a></li>\n                 <li *ngIf=\"!isLoggedIn\"><a routerLink=\"/register\">Register</a></li>\n                 <li *ngIf=\"isLoggedIn\">Welcome <b>{{name}}</b></li>\n                </ul> <!-- end #nav -->\t\t\t   \t \n                <!--span *ngIf=\"sess\">Welcome {{sess.username}}</span-->\n\n        </div> \n\n    </nav> <!-- end #nav-wrap --> \t     \n\n</header> <!-- Header End -->\n<div id=\"content-wrap\">\n\n    <div class=\"row\">\n"

/***/ }),

/***/ "./src/app/templates/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main\" class=\"eight columns\">\n    <article class=\"entry\" *ngFor=\"let article of articles\">\n        <header class=\"entry-header\">\n            <h2 class=\"entry-title\">\n                <a routerLink=\"/article/{{article._id}}\" title=\"111\">{{article.title}}</a>\n            </h2> \t\t\t\t \n            <div class=\"entry-meta\">\n                <ul>\n                    <li>{{article.created | date:'medium'}}</li>\n                    <span class=\"meta-sep\">&bull;</span>\t\t\t\t\t\t\t\t\n                    <li><a href=\"#\" title=\"\" rel=\"category tag\">{{article.category}}</a></li>\n                    <span class=\"meta-sep\">&bull;</span>\n                    <li>{{article.created_by}}</li>\n                </ul>\n            </div> \n        </header> \n        <div class=\"entry-content\" [innerHTML]=\"article.description | readMore: article._id\">Read More</div> \n    </article>\n</div>\n<app-sidebar></app-sidebar>\n\n        "

/***/ }),

/***/ "./src/app/templates/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form role=\"form\" #loginForm=\"ngForm\">\n        <h2>Log In</h2>\n        <div *ngIf=\"errorMsg && !loginForm.dirty\" class=\"alert alert-danger\">{{errorMsg}}</div>   \n            <hr class=\"colorgraph\">\n                \n                    \n                        <div class=\"form-group\">\n                            <input type=\"text\" name=\"username\" id=\"username\" class=\"form-control input-lg\"  [(ngModel)]=\"user.username\" #username=\"ngModel\" required placeholder=\"Enter your Username\">\n                            <div [hidden]=\"username.valid || username.pristine\" class=\"alert alert-danger\">Username is required</div>\n                        </div>\n                    \n                        <div class=\"form-group\">\n                            <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control input-lg\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required placeholder=\"Enter your Password\">\n                            <div [hidden]=\"password.valid || password.pristine\" class=\"alert alert-danger\">Password is required</div>\n                        </div>\n                    \n                                               \n                <hr class=\"colorgraph\">\n                <div class=\"row\">\n                    <div class=\"col-xs-12 col-md-6\">\n                        <button type=\"submit\" class=\"btn btn-success\" tabindex=\"3\" [disabled]=\"!loginForm.valid || loginForm.pristine\" (click)=\"onSubmit(); loginForm.form.markAsPristine();\">Login</button>\n                    </div>\n                </div>\n            </form>\n    </div>"

/***/ }),

/***/ "./src/app/templates/logout.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/templates/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form role=\"form\" #registerForm=\"ngForm\">\n        <div *ngIf=\"errorMsg && !registerForm.dirty\" class=\"alert alert-danger\">{{errorMsg}}</div>\n        <h2>Please Sign Up</h2>\n            <hr class=\"colorgraph\">\n                <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" name=\"firstname\" id=\"firstname\" class=\"form-control input-lg\"  [(ngModel)]=\"user.firstname\" #firstname=\"ngModel\" required placeholder=\"Enter First Name\" tabindex=\"1\">\n                            <div [hidden]=\"firstname.valid || firstname.pristine\" class=\"alert alert-danger\">First Name is required</div>\n                        </div>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" name=\"lastname\" id=\"lastname\" class=\"form-control input-lg\"  [(ngModel)]=\"user.lastname\" #lastname=\"ngModel\" required placeholder=\"Enter Last Name\" tabindex=\"2\">\n                            <div [hidden]=\"lastname.valid || lastname.pristine\" class=\"alert alert-danger\">Last Name is required</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control input-lg\"  [(ngModel)]=\"user.email\" #email=\"ngModel\" required placeholder=\"Enter your Email Id\" tabindex=\"3\">\n                    <div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\">Email is required</div>\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"text\" name=\"username\" id=\"username\" class=\"form-control input-lg\"  [(ngModel)]=\"user.username\" #username=\"ngModel\" required placeholder=\"Enter your Username\" tabindex=\"4\">\n                <div [hidden]=\"username.valid || username.pristine\" class=\"alert alert-danger\">Username is required</div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                        <div class=\"form-group\">\n                            <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control input-lg\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required placeholder=\"Enter your Password\" tabindex=\"5\">\n                            <div [hidden]=\"password.valid || password.pristine\" class=\"alert alert-danger\">Password is required</div>\n                        </div>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-6 col-md-6\">\n                        <div class=\"form-group\">\n                            <input type=\"password\" name=\"confirm_pwd\" id=\"confirm_pwd\" class=\"form-control input-lg\" [(ngModel)]=\"user.confirm_pwd\" #confirm_pwd=\"ngModel\" required placeholder=\"Please confirm your Password\" tabindex=\"6\">\n                            <div [hidden]=\"confirm_pwd.valid || confirm_pwd.pristine\" class=\"alert alert-danger\">Please confirm your password</div>\n                        </div>\n                    </div>\n                </div>\n                                \n                <hr class=\"colorgraph\">\n                <div class=\"row\">\n                    <div class=\"col-xs-12 col-md-6\">\n                        <button type=\"submit\" class=\"btn btn-primary btn-block btn-lg\" tabindex=\"7\" [disabled]=\"!registerForm.valid || registerForm.pristine\" (click)=\"onSubmit(); registerForm.form.markAsPristine();\">Register</button>\n                    </div>\n                    <div class=\"col-xs-12 col-md-6\">\n                        <a routerLink=\"/login\" class=\"btn btn-success btn-block btn-lg\">Already a Member? Sign In</a>\n                    </div>\n                </div>\n            </form>\n        \n    <!-- Modal -->\n    <!--div class=\"modal fade\" id=\"t_and_c_m\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n                    <h4 class=\"modal-title\" id=\"myModalLabel\">Terms & Conditions</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">I Agree</button>\n                </div>\n            </div>\n        </div>\n    </div--><!-- /.modal -->\n    </div>"

/***/ }),

/***/ "./src/app/templates/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"sidebar\" class=\"four columns\">\n\n    <div class=\"widget widget_search\">\n       <h3>Search</h3> \n       <form action=\"#\">\n\n          <input type=\"text\" value=\"Search here...\" onblur=\"if(this.value == '') { this.value = 'Search here...'; }\" onfocus=\"if (this.value == 'Search here...') { this.value = ''; }\" class=\"text-search\">\n          <input type=\"submit\" value=\"\" class=\"submit-search\">\n\n       </form>\n    </div>\n\n    <div class=\"widget widget_categories group\">\n        <h3>Categories.</h3> \n        <ul>\n             <li *ngFor=\"let category of categories\"><a routerLink=\"/category/{{category._id}}\" title=\"\">{{category._id}}</a> ({{category.count}})</li>\t\t\t\t\t\t\n         </ul>\n     </div>\n\n     <div class=\"widget widget_text group\">\n         <h3>Widget Text.</h3>\n\n        <p>Lorem ipsum Ullamco commodo laboris sit dolore commodo aliquip incididunt fugiat esse dolor aute fugiat minim eiusmod do velit labore fugiat officia ad sit culpa labore in consectetur sint cillum sint consectetur voluptate adipisicing Duis irure magna ut sit amet reprehenderit.</p>\n\n    </div>\n\n    <div class=\"widget widget_tags\">\n    <h3>Post Tags.</h3>\n\n    <div class=\"tagcloud group\">\n         <a href=\"#\">Corporate</a>\n       <a href=\"#\">Onepage</a>\n       <a href=\"#\">Agency</a>\n       <a href=\"#\">Multipurpose</a>\n       <a href=\"#\">Blog</a>\n       <a href=\"#\">Landing Page</a>\n       <a href=\"#\">Resume</a>\n    </div>\n       \n </div>\n\n <div class=\"widget widget_popular\">\n    <h3>Popular Post.</h3>\n\n    <ul class=\"link-list\">\n       <li><a href=\"#\">Sint cillum consectetur voluptate.</a></li>\n       <li><a href=\"#\">Lorem ipsum Ullamco commodo.</a></li>\n       <li><a href=\"#\">Fugiat minim eiusmod do.</a></li>                     \n    </ul>\n       \n </div>\n    \n</div> <!-- end sidebar -->\n"

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map