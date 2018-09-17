(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
/* harmony import */ var _categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories.component */ "./src/app/categories.component.ts");
/* harmony import */ var _create_blog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-blog.component */ "./src/app/create-blog.component.ts");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register.component */ "./src/app/register.component.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.component */ "./src/app/login.component.ts");
/* harmony import */ var _logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logout.component */ "./src/app/logout.component.ts");
/* harmony import */ var _article_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./article.component */ "./src/app/article.component.ts");
/* harmony import */ var _edit_blog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-blog.component */ "./src/app/edit-blog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'category/:id', component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'article/edit/:id', component: _edit_blog_component__WEBPACK_IMPORTED_MODULE_9__["EditBlogComponent"] },
    { path: 'article/:id', component: _article_component__WEBPACK_IMPORTED_MODULE_8__["ArticleComponent"] },
    { path: 'categories', component: _categories_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesComponent"] },
    { path: 'create-blog', component: _create_blog_component__WEBPACK_IMPORTED_MODULE_4__["CreateBlogComponent"] },
    { path: 'login', component: _login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'logout', component: _logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"] },
    { path: 'register', component: _register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./templates/app.component.html */ "./src/app/templates/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.component */ "./src/app/header.component.ts");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register.component */ "./src/app/register.component.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.component */ "./src/app/login.component.ts");
/* harmony import */ var _logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logout.component */ "./src/app/logout.component.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
/* harmony import */ var _categories_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./categories.component */ "./src/app/categories.component.ts");
/* harmony import */ var _create_blog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create-blog.component */ "./src/app/create-blog.component.ts");
/* harmony import */ var _edit_blog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-blog.component */ "./src/app/edit-blog.component.ts");
/* harmony import */ var _article_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./article.component */ "./src/app/article.component.ts");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sidebar.component */ "./src/app/sidebar.component.ts");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer.component */ "./src/app/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-froala-wysiwyg */ "./node_modules/angular-froala-wysiwyg/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _services_articles_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/articles.service */ "./src/app/services/articles.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _pipes_read_more_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pipes/read-more.pipe */ "./src/app/pipes/read-more.pipe.ts");
/* harmony import */ var _my_dialog_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./my-dialog.component */ "./src/app/my-dialog.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"], _footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _categories_component__WEBPACK_IMPORTED_MODULE_9__["CategoriesComponent"], _create_blog_component__WEBPACK_IMPORTED_MODULE_10__["CreateBlogComponent"], _edit_blog_component__WEBPACK_IMPORTED_MODULE_11__["EditBlogComponent"], _sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"],
                _register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"], _article_component__WEBPACK_IMPORTED_MODULE_12__["ArticleComponent"], _pipes_read_more_pipe__WEBPACK_IMPORTED_MODULE_24__["ReadMorePipe"], _my_dialog_component__WEBPACK_IMPORTED_MODULE_25__["MyDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_19__["FlashMessagesModule"].forRoot(),
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_18__["FroalaEditorModule"].forRoot(), angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_18__["FroalaViewModule"].forRoot(), _material_module__WEBPACK_IMPORTED_MODULE_26__["MaterialModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
            ],
            providers: [_services_articles_service__WEBPACK_IMPORTED_MODULE_20__["ArticlesService"], _services_user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"], _services_category_service__WEBPACK_IMPORTED_MODULE_22__["CategoryService"], _services_message_service__WEBPACK_IMPORTED_MODULE_23__["MessageService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            entryComponents: [
                _my_dialog_component__WEBPACK_IMPORTED_MODULE_25__["MyDialogComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/article.component.ts":
/*!**************************************!*\
  !*** ./src/app/article.component.ts ***!
  \**************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_articles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/articles.service */ "./src/app/services/articles.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./templates/article.component.html */ "./src/app/templates/article.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_articles_service__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"]])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/categories.component.ts":
/*!*****************************************!*\
  !*** ./src/app/categories.component.ts ***!
  \*****************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent() {
    }
    CategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./templates/categories.component.html */ "./src/app/templates/categories.component.html")
        })
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/create-blog.component.ts":
/*!******************************************!*\
  !*** ./src/app/create-blog.component.ts ***!
  \******************************************/
/*! exports provided: CreateBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBlogComponent", function() { return CreateBlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_articles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/articles.service */ "./src/app/services/articles.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateBlogComponent = /** @class */ (function () {
    function CreateBlogComponent(articlesService, router) {
        this.articlesService = articlesService;
        this.router = router;
        this.blog = { title: '', category: '', isPublic: true, description: '' };
        this.error_msg = '';
        this.categories = ["Parenting", "Technical", "Other"];
        this.editorOptions = {
            enter: $.FroalaEditor.ENTER_DIV
        };
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./templates/create-blog.component.html */ "./src/app/templates/create-blog.component.html")
        }),
        __metadata("design:paramtypes", [_services_articles_service__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CreateBlogComponent);
    return CreateBlogComponent;
}());



/***/ }),

/***/ "./src/app/edit-blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit-blog.component.ts ***!
  \****************************************/
/*! exports provided: EditBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBlogComponent", function() { return EditBlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_articles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/articles.service */ "./src/app/services/articles.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./templates/edit-blog.component.html */ "./src/app/templates/edit-blog.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_articles_service__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"]])
    ], EditBlogComponent);
    return EditBlogComponent;
}());



/***/ }),

/***/ "./src/app/footer.component.ts":
/*!*************************************!*\
  !*** ./src/app/footer.component.ts ***!
  \*************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./templates/footer.component.html */ "./src/app/templates/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header.component.ts":
/*!*************************************!*\
  !*** ./src/app/header.component.ts ***!
  \*************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _my_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-dialog.component */ "./src/app/my-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, dialog) {
        this.router = router;
        this.dialog = dialog;
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
    HeaderComponent.prototype.logoutDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_my_dialog_component__WEBPACK_IMPORTED_MODULE_2__["MyDialogComponent"], {
            data: {
                ques: "Are you sure you want to logout?", button2msg: "Logout"
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.router.navigate(['/logout']);
            }
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./templates/header.html */ "./src/app/templates/header.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home.component.ts":
/*!***********************************!*\
  !*** ./src/app/home.component.ts ***!
  \***********************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_articles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/articles.service */ "./src/app/services/articles.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./templates/home.component.html */ "./src/app/templates/home.component.html")
        }),
        __metadata("design:paramtypes", [_services_articles_service__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login.component.ts":
/*!************************************!*\
  !*** ./src/app/login.component.ts ***!
  \************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./templates/login.component.html */ "./src/app/templates/login.component.html")
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout.component.ts":
/*!*************************************!*\
  !*** ./src/app/logout.component.ts ***!
  \*************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./templates/logout.component.html */ "./src/app/templates/logout.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/my-dialog.component.ts":
/*!****************************************!*\
  !*** ./src/app/my-dialog.component.ts ***!
  \****************************************/
/*! exports provided: MyDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDialogComponent", function() { return MyDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MyDialogComponent = /** @class */ (function () {
    function MyDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    MyDialogComponent.prototype.ngOnInit = function () {
    };
    MyDialogComponent.prototype.proceed = function () {
        this.dialogRef.close(1);
    };
    MyDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-dialog',
            template: __webpack_require__(/*! ./templates/my-dialog.component.html */ "./src/app/templates/my-dialog.component.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], MyDialogComponent);
    return MyDialogComponent;
}());



/***/ }),

/***/ "./src/app/pipes/read-more.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/read-more.pipe.ts ***!
  \*****************************************/
/*! exports provided: ReadMorePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadMorePipe", function() { return ReadMorePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'readMore' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], ReadMorePipe);
    return ReadMorePipe;
}());



/***/ }),

/***/ "./src/app/register.component.ts":
/*!***************************************!*\
  !*** ./src/app/register.component.ts ***!
  \***************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/message.service */ "./src/app/services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./templates/register.component.html */ "./src/app/templates/register.component.html")
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/articles.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/articles.service.ts ***!
  \**********************************************/
/*! exports provided: ArticlesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesService", function() { return ArticlesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'content-type': 'application/json',
                'authorization': 'bearer ' + localStorage.getItem('blogosphere_user_token')
            }),
            params: {
                category: category
            }
        };
        return this.http.get(this.url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            console.log('Articles fetched');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('get Articles')));
    };
    ArticlesService.prototype.getArticleDetail = function (id) {
        return this.http.get(this.url + "/detail", {
            params: {
                id: id
            }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            console.log('article detail fetched without any error');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('article detail')));
    };
    ArticlesService.prototype.createBlog = function (articleBody) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'content-type': 'application/json',
                'authorization': 'bearer ' + localStorage.getItem('blogosphere_user_token')
            })
        };
        return this.http.post(this.url + "/createBlog", articleBody, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            console.log('article created without any error');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('article created')));
    };
    ArticlesService.prototype.editBlog = function (articleBody) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'content-type': 'application/json',
                'authorization': 'bearer ' + localStorage.getItem('blogosphere_user_token')
            })
        };
        return this.http.put(this.url + "/editBlog", articleBody, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            console.log('article updated without any error');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('article updated')));
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
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    ArticlesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ArticlesService);
    return ArticlesService;
}());



/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
    }
    CategoryService.prototype.getAllCategories = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'authorization': 'bearer ' + localStorage.getItem('blogosphere_user_token')
            })
        };
        return this.http.get('/api/articles/categories', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (emission) {
            console.log('categories fetched');
            console.log(emission);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (val) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('Error in getting categories'); }));
    };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this.userApiUrl + "/login", userCredentialsBody, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            return console.log('got output in user service');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Error while User Login')));
    };
    UserService.prototype.register = function (userDataBody) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this.userApiUrl + "/register", userDataBody, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            return console.log('registration done');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('Error while User registration.')));
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
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/sidebar.component.ts":
/*!**************************************!*\
  !*** ./src/app/sidebar.component.ts ***!
  \**************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/category.service */ "./src/app/services/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(categoryService) {
        this.categoryService = categoryService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.getAllCategories().subscribe(function (catg) {
            if (catg.success) {
                _this.categories = catg.data;
                _this.keys = Object.keys(catg.data);
            }
            else {
                _this.categories = [];
            }
        });
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./templates/sidebar.component.html */ "./src/app/templates/sidebar.component.html"),
            selector: 'app-sidebar'
        }),
        __metadata("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/templates/app.component.html":
/*!**********************************************!*\
  !*** ./src/app/templates/app.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<div id=\"content-wrap\">\n    <div class=\"row\">\n            <flash-messages class=\"alert container\" style=\"text-align:center;\"></flash-messages>\n        <router-outlet></router-outlet>\n    </div> <!-- end row -->\n</div> <!-- end content-wrap -->\n<app-footer></app-footer>\n  \n  "

/***/ }),

/***/ "./src/app/templates/article.component.html":
/*!**************************************************!*\
  !*** ./src/app/templates/article.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\" class=\"eight columns\">\n    <article class=\"entry\">\n        <header class=\"entry-header\">\n            <h2 class=\"entry-title\">{{articleDetail?.title}}&nbsp;&nbsp;<small *ngIf=\"canEdit\"><a routerLink=\"/article/edit/{{articleDetail?._id}}\" title=\"Edit Article\"><img src=\"assets/img/edit.png\" /></a></small></h2> \t\t\t\t \n            <div class=\"entry-meta\">\n                <ul>\n                    <li>{{articleDetail?.created | date:'medium'}}</li>\n                    <span class=\"meta-sep\">&bull;</span>\t\t\t\t\t\t\t\t\n                    <li><a href=\"#\" title=\"\" rel=\"category tag\">{{articleDetail?.category}}</a></li>\n                    <span class=\"meta-sep\">&bull;</span>\n                    <li>{{articleDetail?.created_by}}</li>\n                </ul>\n            </div> \n        </header> \n        <div class=\"entry-content\" [innerHTML]=\"articleDetail?.description\"></div> \n    </article>  \n</div>\n<app-sidebar></app-sidebar>"

/***/ }),

/***/ "./src/app/templates/categories.component.html":
/*!*****************************************************!*\
  !*** ./src/app/templates/categories.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/templates/create-blog.component.html":
/*!******************************************************!*\
  !*** ./src/app/templates/create-blog.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form #blogForm=\"ngForm\" (ngSubmit)=\"onSubmit();\">\n        <div class=\"form-group row\" style=\"padding-top:50px;\">\n            <label for=\"title\" class=\"col-sm-2 col-lg-2 col-xl-2 col-form-label\">Title</label>\n            <div class=\"col-sm-10 col-lg-10 col-xl-10\">\n                <input type=\"text\" name=\"title\" id=\"title\" class=\"white-textbox\" [(ngModel)]=\"blog.title\" #title=\"ngModel\" placeholder=\"Enter Title\" required>\n                <div class=\"alert alert-danger\" [hidden]=\"title.pristine || title.valid\">Please enter Title</div>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"category\" class=\"col-sm-2 col-lg-2 col xl-2 col-form-label\">Category</label>\n            <div class=\"col-sm-10 col-lg-10 col-xl-10\">\n                <select name=\"category\" class=\"white-textbox\" [(ngModel)]=\"blog.category\" #category=\"ngModel\" required>\n                    <option *ngFor=\"let category of categories\" value=\"{{category}}\">{{category}}</option>\n                </select>\n                <div class=\"alert alert-danger\" [hidden]=\"category.pristine || category.valid\">Please select category</div>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"category\" class=\"col-sm-2 col-lg-2 col xl-2 col-form-label\">Is public</label>\n            <div class=\"col-sm-10 col-lg-10 col-xl-10\">\n                <input type=\"checkbox\" name=\"isPublic\" [(ngModel)]=\"blog.isPublic\" #isPublic=\"ngModel\" >\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"description\" class=\"col-sm-2 col-lg-2 col xl-2 col-form-label\">Description</label>\n            <div class=\"col-sm-10 col-lg-10 col xl-10\">\n                <textarea [froalaEditor]=\"editorOptions\" name=\"description\" id=\"description\" cols=\"30\" rows=\"10\" \n                class=\"form-control\" [(ngModel)]=\"blog.description\" #description=\"ngModel\" required></textarea>\n                <div class=\"alert alert-danger\" [hidden]=\"description.pristine || description.valid\">Please enter Description</div>\n            </div>\n        </div>\n        <div class=\"form-group row\" style=\"padding-top:50px;\">\n            <div class=\"col-sm-2 col-lg-2 col xl-2 col-form-label\">&nbsp;</div>\n            <div>\n                <button type=\"submit\" [disabled]=\"!blogForm.valid || blogForm.pritine\" class=\"btn btn-success\">Submit</button>\n            </div>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/templates/edit-blog.component.html":
/*!****************************************************!*\
  !*** ./src/app/templates/edit-blog.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form #blogForm=\"ngForm\" (ngSubmit)=\"onSubmit();\">\n        <div class=\"form-group row\" style=\"padding-top:50px;\">\n            <label for=\"title\" class=\"col-sm-2 col-lg-2 col-xl-2 col-form-label\">Title</label>\n            <div class=\"col-sm-10 col-lg-10 col-xl-10\">\n                <input type=\"text\" name=\"title\" id=\"title\" class=\"white-textbox\" [(ngModel)]=\"blog.title\" #title=\"ngModel\" placeholder=\"Enter Title\" required readonly>\n                <div class=\"alert alert-danger\" [hidden]=\"title.pristine || title.valid\">Please enter Title</div>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"category\" class=\"col-sm-2 col-lg-2 col xl-2 col-form-label\">Category</label>\n            <div class=\"col-sm-10 col-lg-10 col-xl-10\">\n                <select name=\"category\" class=\"white-textbox\" [(ngModel)]=\"blog.category\" #category=\"ngModel\" required>\n                    <option *ngFor=\"let category of categories\" value=\"{{category}}\">{{category}}</option>\n                </select>\n                <div class=\"alert alert-danger\" [hidden]=\"category.pristine || category.valid\">Please select category</div>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"category\" class=\"col-sm-2 col-lg-2 col xl-2 col-form-label\">Is public</label>\n            <div class=\"col-sm-10 col-lg-10 col-xl-10\">\n                <input type=\"checkbox\" name=\"isPublic\" [(ngModel)]=\"blog.isPublic\" #isPublic=\"ngModel\" >\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"description\" class=\"col-sm-2 col-lg-2 col xl-2 col-form-label\">Description</label>\n            <div class=\"col-sm-10 col-lg-10 col xl-10\">\n                <textarea [froalaEditor] name=\"description\" id=\"description\" cols=\"30\" rows=\"10\" class=\"form-control\" [(ngModel)]=\"blog.description\" #description=\"ngModel\" required></textarea>\n                <div class=\"alert alert-danger\" [hidden]=\"description.pristine || description.valid\">Please enter Description</div>\n            </div>\n        </div>\n        <div class=\"form-group row\" style=\"padding-top:50px;\">\n            <div class=\"col-sm-2 col-lg-2 col xl-2 col-form-label\">&nbsp;</div>\n            <div>\n                <button type=\"submit\" [disabled]=\"!blogForm.valid || blogForm.pritine\" class=\"btn btn-success\">Submit</button>\n            </div>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/templates/footer.component.html":
/*!*************************************************!*\
  !*** ./src/app/templates/footer.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n\n    <div class=\"row\"> \n\n        <div class=\"twelve columns\">\t\n              <ul class=\"social-links\">\n             <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n             <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n             <li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>               \n             <li><a href=\"#\"><i class=\"fa fa-github-square\"></i></a></li>\n             <li><a href=\"#\"><i class=\"fa fa-instagram\"></i></a></li>\n             <li><a href=\"#\"><i class=\"fa fa-flickr\"></i></a></li>               \n             <li><a href=\"#\"><i class=\"fa fa-skype\"></i></a></li>\n          </ul>\t\t\t\n        </div>\n        \n       <div class=\"six columns info\">\n\n          <h3>About Keep It Simple</h3> \n\n          <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.\n          Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem\n          nibh id elit. \n          </p>\n\n          <p>Lorem ipsum Sed nulla deserunt voluptate elit occaecat culpa cupidatat sit irure sint \n          sint incididunt cupidatat esse in Ut sed commodo tempor consequat culpa fugiat incididunt.</p>\n\n       </div>\n\n       <div class=\"four columns\">\n\n          <h3>Photostream</h3>\n          \n          <ul class=\"photostream group\">\n             <!--li><a href=\"#\"><img alt=\"thumbnail\" src=\"images/thumb.jpg\"></a></li>\n             <li><a href=\"#\"><img alt=\"thumbnail\" src=\"images/thumb.jpg\"></a></li>\n             <li><a href=\"#\"><img alt=\"thumbnail\" src=\"images/thumb.jpg\"></a></li>\n             <li><a href=\"#\"><img alt=\"thumbnail\" src=\"images/thumb.jpg\"></a></li>\n             <li><a href=\"#\"><img alt=\"thumbnail\" src=\"images/thumb.jpg\"></a></li>\n             <li><a href=\"#\"><img alt=\"thumbnail\" src=\"images/thumb.jpg\"></a></li>\n             <li><a href=\"#\"><img alt=\"thumbnail\" src=\"images/thumb.jpg\"></a></li>\n             <li><a href=\"#\"><img alt=\"thumbnail\" src=\"images/thumb.jpg\"></a></li02261606161-->\n          </ul>           \n\n       </div>\n\n       <div class=\"two columns\">\n          <h3 class=\"social\">Navigate</h3>\n\n          <ul class=\"navigate group\">\n             <li><a href=\"#\">Home</a></li>\n             <li><a href=\"#\">Blog</a></li>\n             <li><a href=\"#\">Demo</a></li>\n             <li><a href=\"#\">Archives</a></li>\n             <li><a href=\"#\">About</a></li>\n          </ul>\n       </div>\n\n       <p class=\"copyright\">&copy; Copyright 2014 Keep It Simple. &nbsp; Design by <a title=\"Styleshout\" href=\"http://www.styleshout.com/\">Styleshout</a>.</p>\n      \n    </div> <!-- End row -->\n\n    <div id=\"go-top\"><a class=\"smoothscroll\" title=\"Back to Top\" href=\"#top\"><i class=\"fa fa-chevron-up\"></i></a></div>\n\n </footer> <!-- End Footer-->\n"

/***/ }),

/***/ "./src/app/templates/header.html":
/*!***************************************!*\
  !*** ./src/app/templates/header.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"top\">\n\n    <div class=\"row\">\n\n        <div class=\"header-content twelve columns\">\n\n           <h1 id=\"logo-text\"><a routerLink=\"/\" title=\"\">Blog-sphere</a></h1>\n             <!--p id=\"intro\">Put your heart out here...</p-->\n             <hr>\n\n         </div>\t\t\t\n\n    </div>\n\n    <nav id=\"nav-wrap\"> \n\n        <a class=\"mobile-btn\" href=\"#nav-wrap\" title=\"Show navigation\">Show Menu</a>\n        <a class=\"mobile-btn\" href=\"#\" title=\"Hide navigation\">Hide Menu</a>\n\n        <div class=\"row\">    \t\t            \n            <ul id=\"nav\" class=\"nav\">\n                <li *ngIf=\"isLoggedIn\" routerLinkActive=\"current\"><a routerLink=\"/home\" >Home</a></li>\n                <li *ngIf=\"isLoggedIn\" routerLinkActive=\"current\"><a routerLink=\"/categories\" >Categories</a></li>\n                <li *ngIf=\"isLoggedIn\" routerLinkActive=\"current\"><a routerLink=\"/create-blog\">Create Blog</a></li>\n                <li *ngIf=\"isLoggedIn\" class=\"has-children\"><a routerLink=\"#\">Welcome <b>{{name}}</b></a>\n                    <ul>\n                        <li (click)=\"logoutDialog()\" style=\"cursor:pointer;\">Logout</li>\n                    </ul>\n                </li>\t\t      \t\n                <li *ngIf=\"!isLoggedIn\"><a routerLink=\"/login\">Login</a></li>\n                <li *ngIf=\"!isLoggedIn\"><a routerLink=\"/register\">Register</a></li>\n            </ul>\n        </div> \n\n    </nav> <!-- end #nav-wrap --> \t     \n\n</header> <!-- Header End -->\n<div id=\"content-wrap\">\n    <div class=\"row\">"

/***/ }),

/***/ "./src/app/templates/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/templates/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\" class=\"eight columns\">\n    <article class=\"entry\" *ngFor=\"let article of articles\">\n        <header class=\"entry-header\">\n            <h2 class=\"entry-title\">\n                <a routerLink=\"/article/{{article._id}}\" title=\"111\">{{article.title}}</a>\n            </h2> \t\t\t\t \n            <div class=\"entry-meta\">\n                <ul>\n                    <li>{{article.created | date:'medium'}}</li>\n                    <span class=\"meta-sep\">&bull;</span>\t\t\t\t\t\t\t\t\n                    <li><a href=\"#\" title=\"\" rel=\"category tag\">{{article.category}}</a></li>\n                    <span class=\"meta-sep\">&bull;</span>\n                    <li>{{article.created_by}}</li>\n                </ul>\n            </div> \n        </header> \n        <div class=\"entry-content\" [innerHTML]=\"article.description | readMore: article._id\">Read More</div> \n    </article>\n</div>\n<app-sidebar></app-sidebar>\n\n        "

/***/ }),

/***/ "./src/app/templates/login.component.html":
/*!************************************************!*\
  !*** ./src/app/templates/login.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form role=\"form\" #loginForm=\"ngForm\">\n        <h2>Log In</h2>\n        <div *ngIf=\"errorMsg && !loginForm.dirty\" class=\"alert alert-danger\">{{errorMsg}}</div>   \n        <hr class=\"colorgraph\">\n        <div class=\"form-group\">\n            <div class=\"col-xs-12 col-sm-10 col-md-10\">\n                <input type=\"text\" name=\"username\" id=\"username\" class=\"form-control input-lg\"  [(ngModel)]=\"user.username\" #username=\"ngModel\" required placeholder=\"Enter your Username\">\n                <div [hidden]=\"username.valid || username.pristine\" class=\"alert alert-danger\">Username is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"col-xs-12 col-sm-10 col-md-10\">\n                <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control input-lg\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required placeholder=\"Enter your Password\">\n                <div [hidden]=\"password.valid || password.pristine\" class=\"alert alert-danger\">Password is required</div>\n            </div>\n        </div>\n        <hr class=\"colorgraph\">\n        <div class=\"form-group\">\n            <div class=\"col-xs-12 col-md-6\">\n                <button type=\"submit\" class=\"btn btn-success\" tabindex=\"3\" [disabled]=\"!loginForm.valid || loginForm.pristine\" (click)=\"onSubmit(); loginForm.form.markAsPristine();\">Login</button>\n            </div>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/templates/logout.component.html":
/*!*************************************************!*\
  !*** ./src/app/templates/logout.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/templates/my-dialog.component.html":
/*!****************************************************!*\
  !*** ./src/app/templates/my-dialog.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Confirmation</h2>\n\n<mat-dialog-content>\n  <p>{{data.ques}}</p>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button mat-raised-button mat-dialog-close>Cancel</button>\n  <button mat-button (click)=\"proceed()\">{{data.button2msg}}</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/templates/register.component.html":
/*!***************************************************!*\
  !*** ./src/app/templates/register.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form role=\"form\" #registerForm=\"ngForm\">\n        <div *ngIf=\"errorMsg && !registerForm.dirty\" class=\"alert alert-danger\">{{errorMsg}}</div>\n        <h2>Please Sign Up</h2>\n            <hr class=\"colorgraph\">\n                <div class=\"form-group\">\n                    <div class=\"col-xs-12 col-sm-5 col-md-5\">\n                        <input type=\"text\" name=\"firstname\" id=\"firstname\" class=\"form-control input-lg\"  [(ngModel)]=\"user.firstname\" #firstname=\"ngModel\" required placeholder=\"Enter First Name\" tabindex=\"1\">\n                        <div [hidden]=\"firstname.valid || firstname.pristine\" class=\"alert alert-danger\">First Name is required</div>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-5 col-md-5\">\n                        <input type=\"text\" name=\"lastname\" id=\"lastname\" class=\"form-control input-lg\"  [(ngModel)]=\"user.lastname\" #lastname=\"ngModel\" required placeholder=\"Enter Last Name\" tabindex=\"2\">\n                        <div [hidden]=\"lastname.valid || lastname.pristine\" class=\"alert alert-danger\">Last Name is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"col-xs-12 col-sm-10 col-md-10\">\n                        <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control input-lg\"  [(ngModel)]=\"user.email\" #email=\"ngModel\" required placeholder=\"Enter your Email Id\" tabindex=\"3\">\n                        <div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\">Email is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"col-xs-12 col-sm-10 col-md-10\">\n                        <input type=\"text\" name=\"username\" id=\"username\" class=\"form-control input-lg\"  [(ngModel)]=\"user.username\" #username=\"ngModel\" required placeholder=\"Enter your Username\" tabindex=\"4\">\n                        <div [hidden]=\"username.valid || username.pristine\" class=\"alert alert-danger\">Username is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"col-xs-12 col-sm-5 col-md-5\">\n                        <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control input-lg\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required placeholder=\"Enter your Password\" tabindex=\"6\">\n                        <div [hidden]=\"password.valid || password.pristine\" class=\"alert alert-danger\">Password is required</div>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-5 col-md-5\">\n                        <input type=\"password\" name=\"confirm_pwd\" id=\"confirm_pwd\" class=\"form-control input-lg\" [(ngModel)]=\"user.confirm_pwd\" #confirm_pwd=\"ngModel\" required placeholder=\"Confirm your Password\" tabindex=\"6\">\n                        <div [hidden]=\"confirm_pwd.valid || confirm_pwd.pristine\" class=\"alert alert-danger\">Please confirm your password</div>\n                    </div>\n                </div>\n                                \n                <hr class=\"colorgraph\">\n                <div class=\"form-group\">\n                    <div class=\"col-xs-12 col-sm-5 col-md-5\" style=\"padding-bottom:10px;\">\n                        <button type=\"submit\" class=\"btn btn-primary btn-block btn-lg\" tabindex=\"7\" [disabled]=\"!registerForm.valid || registerForm.pristine\" (click)=\"onSubmit(); registerForm.form.markAsPristine();\">Register</button>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-5 col-md-5\" style=\"padding-bottom:10px;\">\n                        <a routerLink=\"/login\" class=\"btn btn-success btn-block btn-lg\">Already a Member? Sign In</a>\n                    </div>\n                </div>\n            </form>\n        \n    <!-- Modal -->\n    <!--div class=\"modal fade\" id=\"t_and_c_m\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n                    <h4 class=\"modal-title\" id=\"myModalLabel\">Terms & Conditions</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">I Agree</button>\n                </div>\n            </div>\n        </div>\n    </div--><!-- /.modal -->\n    </div>"

/***/ }),

/***/ "./src/app/templates/sidebar.component.html":
/*!**************************************************!*\
  !*** ./src/app/templates/sidebar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"sidebar\" class=\"four columns\">\n\n    <div class=\"widget widget_search\">\n       <h3>Search</h3> \n       <form action=\"#\">\n\n          <input type=\"text\" value=\"Search here...\" onblur=\"if(this.value == '') { this.value = 'Search here...'; }\" onfocus=\"if (this.value == 'Search here...') { this.value = ''; }\" class=\"text-search\">\n          <input type=\"submit\" value=\"\" class=\"submit-search\">\n\n       </form>\n    </div>\n\n    <div class=\"widget widget_categories group\">\n        <h3>Categories.</h3> \n        <ul>\n             <li *ngFor=\"let key of keys\"><a routerLink=\"/category/{{key}}\" title=\"\">{{key}}</a> ({{categories[key]}})</li>\t\t\t\t\t\t\n         </ul>\n     </div>\n\n     <div class=\"widget widget_text group\">\n         <h3>Widget Text.</h3>\n\n        <p>Lorem ipsum Ullamco commodo laboris sit dolore commodo aliquip incididunt fugiat esse dolor aute fugiat minim eiusmod do velit labore fugiat officia ad sit culpa labore in consectetur sint cillum sint consectetur voluptate adipisicing Duis irure magna ut sit amet reprehenderit.</p>\n\n    </div>\n\n    <div class=\"widget widget_tags\">\n    <h3>Post Tags.</h3>\n\n    <div class=\"tagcloud group\">\n         <a href=\"#\">Corporate</a>\n       <a href=\"#\">Onepage</a>\n       <a href=\"#\">Agency</a>\n       <a href=\"#\">Multipurpose</a>\n       <a href=\"#\">Blog</a>\n       <a href=\"#\">Landing Page</a>\n       <a href=\"#\">Resume</a>\n    </div>\n       \n </div>\n\n <div class=\"widget widget_popular\">\n    <h3>Popular Post.</h3>\n\n    <ul class=\"link-list\">\n       <li><a href=\"#\">Sint cillum consectetur voluptate.</a></li>\n       <li><a href=\"#\">Lorem ipsum Ullamco commodo.</a></li>\n       <li><a href=\"#\">Fugiat minim eiusmod do.</a></li>                     \n    </ul>\n       \n </div>\n    \n</div> <!-- end sidebar -->\n"

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rajneesh/Documents/home/blog-mean/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map