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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */] },
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/templates/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__footer_component__ = __webpack_require__("./src/app/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular_froala_wysiwyg__ = __webpack_require__("./node_modules/angular-froala-wysiwyg/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_articles_service__ = __webpack_require__("./src/app/services/articles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_3__header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_5__login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_6__logout_component__["a" /* LogoutComponent */], __WEBPACK_IMPORTED_MODULE_10__footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_7__home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_8__categories_component__["a" /* CategoriesComponent */], __WEBPACK_IMPORTED_MODULE_9__create_blog_component__["a" /* CreateBlogComponent */], __WEBPACK_IMPORTED_MODULE_4__register_component__["a" /* RegisterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_13__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_14_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_14_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__services_articles_service__["a" /* ArticlesService */], __WEBPACK_IMPORTED_MODULE_16__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_17__services_message_service__["a" /* MessageService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
        this.blog = { title: '', category: '', description: '' };
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/templates/create-blog.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_articles_service__["a" /* ArticlesService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], CreateBlogComponent);
    return CreateBlogComponent;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
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
    function HeaderComponent(userService, messageService) {
        this.userService = userService;
        this.messageService = messageService;
    }
    HeaderComponent.prototype.ngDoCheck = function () {
        if (this.messageService.show_msg != '') {
            this.message = this.messageService.show_msg;
            this.messageService.clearMessage();
        }
        if (localStorage.getItem('blogosphere_user_token')) {
            this.isLoggedIn = true;
            this.name = localStorage.getItem('blogosphere_user');
        }
        else {
            this.isLoggedIn = false;
        }
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/templates/header.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */]])
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
    function HomeComponent(articlesService, router) {
        this.articlesService = articlesService;
        this.router = router;
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
        this.articlesService.getAllArticles().subscribe(function (articles) { return _this.articles = articles; });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/templates/home.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_articles_service__["a" /* ArticlesService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
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
                _this.router.navigate(['/home']);
            }
            else {
                _this.errorMsg = res.message;
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/templates/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/templates/logout.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LogoutComponent);
    return LogoutComponent;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/templates/register.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
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
    ArticlesService.prototype.getAllArticles = function () {
        return this.http.get(this.url);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ArticlesService);
    return ArticlesService;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/templates/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n  \n  "

/***/ }),

/***/ "./src/app/templates/categories.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/templates/create-blog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form #blogForm=\"ngForm\" (ngSubmit)=\"onSubmit();\">\n        <div class=\"form-group row\" style=\"padding-top:50px;\">\n            <label for=\"title\" class=\"col-sm-2 col-lg-2 col-xl-2 col-form-label\">Title</label>\n            <div class=\"col-sm-10 col-lg-10 col-xl-10\">\n                <input type=\"text\" name=\"title\" id=\"title\" class=\"white-textbox\" [(ngModel)]=\"blog.title\" #title=\"ngModel\" placeholder=\"Enter Title\" required>\n                <div class=\"alert alert-danger\" [hidden]=\"title.pristine || title.valid\">Please enter Title</div>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"category\" class=\"col-sm-2 col-lg-2 col xl-2 col-form-label\">Category</label>\n            <div class=\"col-sm-10 col-lg-10 col-xl-10\">\n                <select name=\"category\" class=\"white-textbox\" [(ngModel)]=\"blog.category\" #category=\"ngModel\" required>\n                    <option *ngFor=\"let category of categories\" value=\"{{category}}\">{{category}}</option>\n                </select>\n                <div class=\"alert alert-danger\" [hidden]=\"category.pristine || category.valid\">Please select category</div>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"description\" class=\"col-sm-2 col-lg-2 col xl-2 col-form-label\">Description</label>\n            <div class=\"col-sm-10 col-lg-10 col xl-10\">\n                <textarea [froalaEditor] name=\"description\" id=\"description\" cols=\"30\" rows=\"10\" class=\"form-control\" [(ngModel)]=\"blog.description\" #description=\"ngModel\" required></textarea>\n                <div class=\"alert alert-danger\" [hidden]=\"description.pristine || description.valid\">Please enter Description</div>\n            </div>\n        </div>\n        <div class=\"form-group row\" style=\"padding-top:50px;\">\n            <div class=\"col-sm-2 col-lg-2 col xl-2 col-form-label\">&nbsp;</div>\n            <div>\n                <button type=\"submit\" [disabled]=\"!blogForm.valid || blogForm.pritine\" class=\"btn btn-success\">Submit</button>\n            </div>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/templates/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n\n    <div class=\"row\"> \n\n        <div class=\"twelve columns\">\t\n              <ul class=\"social-links\">\n             <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n             <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n             <li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>               \n             <li><a href=\"#\"><i class=\"fa fa-github-square\"></i></a></li>\n             <li><a href=\"#\"><i class=\"fa fa-instagram\"></i></a></li>\n             <li><a href=\"#\"><i class=\"fa fa-flickr\"></i></a></li>               \n             <li><a href=\"#\"><i class=\"fa fa-skype\"></i></a></li>\n          </ul>\t\t\t\n        </div>\n        \n       <div class=\"six columns info\">\n\n          <h3>About Keep It Simple</h3> \n\n          <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.\n          Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem\n          nibh id elit. \n          </p>\n\n          <p>Lorem ipsum Sed nulla deserunt voluptate elit occaecat culpa cupidatat sit irure sint \n          sint incididunt cupidatat esse in Ut sed commodo tempor consequat culpa fugiat incididunt.</p>\n\n       </div>\n\n       <div class=\"four columns\">\n\n          <h3>Photostream</h3>\n          \n          <ul class=\"photostream group\">\n             <!--li><a href=\"#\"><img alt=\"thumbnail\" src=\"images/thumb.jpg\"></a></li>\n             <li><a href=\"#\"><img alt=\"thumbnail\" src=\"images/thumb.jpg\"></a></li>\n             <li><a href=\"#\"><img alt=\"thumbnail\" src=\"images/thumb.jpg\"></a></li>\n             <li><a href=\"#\"><img alt=\"thumbnail\" src=\"images/thumb.jpg\"></a></li>\n             <li><a href=\"#\"><img alt=\"thumbnail\" src=\"images/thumb.jpg\"></a></li>\n             <li><a href=\"#\"><img alt=\"thumbnail\" src=\"images/thumb.jpg\"></a></li>\n             <li><a href=\"#\"><img alt=\"thumbnail\" src=\"images/thumb.jpg\"></a></li>\n             <li><a href=\"#\"><img alt=\"thumbnail\" src=\"images/thumb.jpg\"></a></li02261606161-->\n          </ul>           \n\n       </div>\n\n       <div class=\"two columns\">\n          <h3 class=\"social\">Navigate</h3>\n\n          <ul class=\"navigate group\">\n             <li><a href=\"#\">Home</a></li>\n             <li><a href=\"#\">Blog</a></li>\n             <li><a href=\"#\">Demo</a></li>\n             <li><a href=\"#\">Archives</a></li>\n             <li><a href=\"#\">About</a></li>\n          </ul>\n       </div>\n\n       <p class=\"copyright\">&copy; Copyright 2014 Keep It Simple. &nbsp; Design by <a title=\"Styleshout\" href=\"http://www.styleshout.com/\">Styleshout</a>.</p>\n      \n    </div> <!-- End row -->\n\n    <div id=\"go-top\"><a class=\"smoothscroll\" title=\"Back to Top\" href=\"#top\"><i class=\"fa fa-chevron-up\"></i></a></div>\n\n </footer> <!-- End Footer-->\n"

/***/ }),

/***/ "./src/app/templates/header.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"top\">\n\n    <div class=\"row\">\n\n        <div class=\"header-content twelve columns\">\n\n           <h1 id=\"logo-text\"><a routerLink=\"/\" title=\"\"></a></h1>\n             <p id=\"intro\">Put your heart out here...</p>\n\n         </div>\t\t\t\n\n    </div>\n\n    <nav id=\"nav-wrap\"> \n\n        <a class=\"mobile-btn\" href=\"#nav-wrap\" title=\"Show navigation\">Show Menu</a>\n        <a class=\"mobile-btn\" href=\"#\" title=\"Hide navigation\">Hide Menu</a>\n\n        <div class=\"row\">    \t\t            \n\n                <ul id=\"nav\" class=\"nav\">\n                   <li routerLinkActive=\"current\"><a routerLink=\"/home\" >Home</a></li>\n                   <li routerLinkActive=\"current\"><a routerLink=\"/categories\" >Categories</a></li>\n                   <!--li class=\"has-children\"><a href=\"#\">Dropdown</a>\n                   <ul>\n                      <li><a href=\"#\">Submenu 01</a></li>\n                      <li><a href=\"#\">Submenu 02</a></li>\n                      <li><a href=\"#\">Submenu 03</a></li>\n                   </ul>\n                 </li-->\t\n                 <li *ngIf=\"isLoggedIn\" routerLinkActive=\"current\"><a routerLink=\"/create-blog\">Create Blog</a></li>\t\t      \t\n                 <li *ngIf=\"!isLoggedIn\"><a routerLink=\"/login\">Login</a></li>\n                 <li *ngIf=\"isLoggedIn\"><a routerLink=\"/logout\">Logout</a></li>\n                 <li *ngIf=\"!isLoggedIn\"><a routerLink=\"/register\">Register</a></li>\n                 <li *ngIf=\"isLoggedIn\">Welcome <b>{{name}}</b></li>\n                </ul> <!-- end #nav -->\t\t\t   \t \n                <!--span *ngIf=\"sess\">Welcome {{sess.username}}</span-->\n\n        </div> \n\n    </nav> <!-- end #nav-wrap --> \t     \n\n</header> <!-- Header End -->\n<div class=\"alert alert-info container\" style=\"text-align:center;\" *ngIf=\"message\">{{message}}</div>\n"

/***/ }),

/***/ "./src/app/templates/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content-wrap\">\n\n    <div class=\"row\">\n\n        <div id=\"main\" class=\"eight columns\">\n\n            <article class=\"entry\" *ngFor=\"let article of articles\">\n\n                 <header class=\"entry-header\">\n\n                     <h2 class=\"entry-title\">\n                         <a href=\"single.html\" title=\"\">{{article.title}}</a>\n                     </h2> \t\t\t\t \n                 \n                     <div class=\"entry-meta\">\n                         <ul>\n                             <li>{{article.created | date:'medium'}}</li>\n                             <span class=\"meta-sep\">&bull;</span>\t\t\t\t\t\t\t\t\n                             <li><a href=\"#\" title=\"\" rel=\"category tag\">{{article.category}}</a></li>\n                             <span class=\"meta-sep\">&bull;</span>\n                             <li>{{article.created_by}}</li>\n                         </ul>\n                     </div> \n                  \n                 </header> \n             \n                 <div class=\"entry-content\">\n                     <p>{{article.description}}</p>\n                 </div> \n\n             </article> <!-- end entry -->\n\n             \n        </div> <!-- end main -->\n\n        <div id=\"sidebar\" class=\"four columns\">\n\n            <div class=\"widget widget_search\">\n               <h3>Search</h3> \n               <form action=\"#\">\n\n                  <input type=\"text\" value=\"Search here...\" onblur=\"if(this.value == '') { this.value = 'Search here...'; }\" onfocus=\"if (this.value == 'Search here...') { this.value = ''; }\" class=\"text-search\">\n                  <input type=\"submit\" value=\"\" class=\"submit-search\">\n\n               </form>\n            </div>\n\n            <div class=\"widget widget_categories group\">\n                <h3>Categories.</h3> \n                <ul>\n                     <li><a href=\"#\" title=\"\">Wordpress</a> (2)</li>\n                     <li><a href=\"#\" title=\"\">Ghost</a> (14)</li>\n                     <li><a href=\"#\" title=\"\">Joomla</a> (5)</li>\n                     <li><a href=\"#\" title=\"\">Drupal</a> (3)</li>\n                     <li><a href=\"#\" title=\"\">Magento</a> (2)</li>\n                     <li><a href=\"#\" title=\"\">Uncategorized</a> (9)</li>\t\t\t\t\t\t\n                 </ul>\n             </div>\n\n             <div class=\"widget widget_text group\">\n                 <h3>Widget Text.</h3>\n\n                <p>Lorem ipsum Ullamco commodo laboris sit dolore commodo aliquip incididunt fugiat esse dolor aute fugiat minim eiusmod do velit labore fugiat officia ad sit culpa labore in consectetur sint cillum sint consectetur voluptate adipisicing Duis irure magna ut sit amet reprehenderit.</p>\n\n            </div>\n\n            <div class=\"widget widget_tags\">\n            <h3>Post Tags.</h3>\n\n            <div class=\"tagcloud group\">\n                 <a href=\"#\">Corporate</a>\n               <a href=\"#\">Onepage</a>\n               <a href=\"#\">Agency</a>\n               <a href=\"#\">Multipurpose</a>\n               <a href=\"#\">Blog</a>\n               <a href=\"#\">Landing Page</a>\n               <a href=\"#\">Resume</a>\n            </div>\n               \n         </div>\n\n         <div class=\"widget widget_popular\">\n            <h3>Popular Post.</h3>\n\n            <ul class=\"link-list\">\n               <li><a href=\"#\">Sint cillum consectetur voluptate.</a></li>\n               <li><a href=\"#\">Lorem ipsum Ullamco commodo.</a></li>\n               <li><a href=\"#\">Fugiat minim eiusmod do.</a></li>                     \n            </ul>\n               \n         </div>\n            \n        </div> <!-- end sidebar -->\n\n    </div> <!-- end row -->\n\n</div> <!-- end content-wrap -->"

/***/ }),

/***/ "./src/app/templates/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n        <form #loginForm=\"ngForm\">\n            <div *ngIf=\"errorMsg && !loginForm.dirty\" class=\"alert alert-danger\">{{errorMsg}}</div>\n            <div class=\"form-group row\" style=\"padding-top:50px;\">\n                <label for=\"title\" class=\"col-sm-2 col-lg-2 col xl-2 col-form-label\">Username</label>\n                <div class=\"col-sm-10 col-lg-10 col-xl-10\">\n                    <input type=\"text\" name=\"username\" id=\"username\" class=\"white-textbox\"  [(ngModel)]=\"user.username\" #username=\"ngModel\" required placeholder=\"Enter your Username\">\n                    <div [hidden]=\"username.valid || username.pristine\" class=\"alert alert-danger\">Username is required</div>\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"description\" class=\"col-sm-2 col-lg-2 col xl-2 col-form-label\">Password</label>\n                <div class=\"col-sm-10 col-lg-10 col-xl-10\">\n                    <input type=\"password\" name=\"password\" id=\"password\" class=\"white-textbox\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required placeholder=\"Enter your Password\">\n                    <div [hidden]=\"password.valid || password.pristine\" class=\"alert alert-danger\">Password is required</div>\n                </div>\n            </div>\n            <div class=\"form-group row\" style=\"padding-top:50px;\">\n                <div class=\"col-sm-2 col-lg-2 col xl-2 col-form-label\">&nbsp;</div>\n                <div>\n                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!loginForm.valid || loginForm.pristine\" (click)=\"onSubmit(); loginForm.form.markAsPristine();\">Login</button>\n                </div>\n            </div>\n        </form>\n    </div>"

/***/ }),

/***/ "./src/app/templates/logout.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/templates/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form #registerForm=\"ngForm\">\n        <div *ngIf=\"errorMsg && !registerForm.dirty\" class=\"alert alert-danger\">{{errorMsg}}</div>\n        <div class=\"form-group row\" style=\"padding-top:50px;\">\n            <label for=\"firstname\" class=\"col-sm-2 col-lg-2 col xl-2 col-form-label\">First Name</label>\n            <div class=\"col-sm-10 col-lg-10 col-xl-10\">\n                <input type=\"text\" name=\"firstname\" id=\"firstname\" class=\"white-textbox\"  [(ngModel)]=\"user.firstname\" #firstname=\"ngModel\" required placeholder=\"Enter First Name\">\n                <div [hidden]=\"firstname.valid || firstname.pristine\" class=\"alert alert-danger\">First Name is required</div>\n            </div>\n        </div>\n        <div class=\"form-group row\" style=\"padding-top:50px;\">\n            <label for=\"lastname\" class=\"col-sm-2 col-lg-2 col xl-2 col-form-label\">Last Name</label>\n            <div class=\"col-sm-10 col-lg-10 col-xl-10\">\n                <input type=\"text\" name=\"lastname\" id=\"lastname\" class=\"white-textbox\"  [(ngModel)]=\"user.lastname\" #lastname=\"ngModel\" required placeholder=\"Enter First Name\">\n                <div [hidden]=\"lastname.valid || lastname.pristine\" class=\"alert alert-danger\">Last Name is required</div>\n            </div>\n        </div>\n        <div class=\"form-group row\" style=\"padding-top:50px;\">\n            <label for=\"email\" class=\"col-sm-2 col-lg-2 col xl-2 col-form-label\">Email</label>\n            <div class=\"col-sm-10 col-lg-10 col-xl-10\">\n                <input type=\"text\" name=\"email\" id=\"email\" class=\"white-textbox\"  [(ngModel)]=\"user.email\" #email=\"ngModel\" required placeholder=\"Enter your Email Id\">\n                <div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\">Email is required</div>\n            </div>\n        </div>\n        <div class=\"form-group row\" style=\"padding-top:50px;\">\n            <label for=\"username\" class=\"col-sm-2 col-lg-2 col xl-2 col-form-label\">Username</label>\n            <div class=\"col-sm-10 col-lg-10 col-xl-10\">\n                <input type=\"text\" name=\"username\" id=\"username\" class=\"white-textbox\"  [(ngModel)]=\"user.username\" #username=\"ngModel\" required placeholder=\"Enter your Username\">\n                <div [hidden]=\"username.valid || username.pristine\" class=\"alert alert-danger\">Username is required</div>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"password\" class=\"col-sm-2 col-lg-2 col xl-2 col-form-label\">Password</label>\n            <div class=\"col-sm-10 col-lg-10 col-xl-10\">\n                <input type=\"password\" name=\"password\" id=\"password\" class=\"white-textbox\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required placeholder=\"Enter your Password\">\n                <div [hidden]=\"password.valid || password.pristine\" class=\"alert alert-danger\">Password is required</div>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"confirm_pwd\" class=\"col-sm-2 col-lg-2 col xl-2 col-form-label\">Confirm Password</label>\n            <div class=\"col-sm-10 col-lg-10 col-xl-10\">\n                <input type=\"password\" name=\"confirm_pwd\" id=\"confirm_pwd\" class=\"white-textbox\" [(ngModel)]=\"user.confirm_pwd\" #confirm_pwd=\"ngModel\" required placeholder=\"Please confirm your Password\">\n                <div [hidden]=\"confirm_pwd.valid || confirm_pwd.pristine\" class=\"alert alert-danger\">Please confirm your password</div>\n            </div>\n        </div>\n        <div class=\"form-group row\" style=\"padding-top:50px;\">\n            <div class=\"col-sm-2 col-lg-2 col xl-2 col-form-label\">&nbsp;</div>\n            <div>\n                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!registerForm.valid || registerForm.pristine\" (click)=\"onSubmit(); registerForm.form.markAsPristine();\">Submit</button>\n            </div>\n        </div>\n    </form>\n</div>"

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map