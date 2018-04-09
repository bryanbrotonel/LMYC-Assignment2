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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var home_component_1 = __webpack_require__("./src/app/pages/home/home.component.ts");
var contact_component_1 = __webpack_require__("./src/app/pages/contact/contact.component.ts");
var login_component_1 = __webpack_require__("./src/app/pages/login/login.component.ts");
var register_component_1 = __webpack_require__("./src/app/pages/register/register.component.ts");
// import { FleetComponent } from './fleet/fleet.component';
// import { FaqComponent } from './faq/faq.component';
// import { MembershipComponent } from './membership/membership.component';
// import { RulesComponent } from './rules/rules.component';
// import { ContactComponent } from './contact/contact.component';
// import { LoginComponent } from './auth/login/login.component';
// import { SignupComponent } from './auth/signup/signup.component';
// import { SignupAddressComponent } from './auth/signup/forms/signup-address.component';
// import { SignupPersonalComponent } from './auth/signup/forms/signup-personal.component';
// import { SignupPhoneComponent } from './auth/signup/forms/signup-phone.component';
// import { SignupSailingComponent } from './auth/signup/forms/signup-sailing.component';
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent, pathMatch: "full" },
    { path: 'contact', component: contact_component_1.ContactComponent },
    // { path: 'our-fleet', component: FleetComponent },
    // { path: 'faq', component: FaqComponent },
    // { path: 'membership', component: MembershipComponent },
    // { path: 'rules-and-regulations', component: RulesComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n\t<app-navbar></app-navbar>\n\t<div class=\"container\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var navbar_component_1 = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
var dynamic_form_component_1 = __webpack_require__("./src/app/components/dynamic-form/dynamic-form.component.ts");
var dynamic_form_question_component_1 = __webpack_require__("./src/app/components/dynamic-form-question/dynamic-form-question.component.ts");
var home_component_1 = __webpack_require__("./src/app/pages/home/home.component.ts");
var contact_component_1 = __webpack_require__("./src/app/pages/contact/contact.component.ts");
var login_component_1 = __webpack_require__("./src/app/pages/login/login.component.ts");
var register_component_1 = __webpack_require__("./src/app/pages/register/register.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                dynamic_form_component_1.DynamicFormComponent,
                dynamic_form_question_component_1.DynamicFormQuestionComponent,
                home_component_1.HomeComponent,
                contact_component_1.ContactComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                forms_1.ReactiveFormsModule
            ],
            // providers: [AuthService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/components/dynamic-form-question/dynamic-form-question.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dynamic-form-question/dynamic-form-question.component.html":
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"form\" class=\"form-group\">\n\t<label [attr.for]=\"question.key\">{{question.label}}</label>\n\n\t<div [ngSwitch]=\"question.controlType\">\n        <input class=\"form-control\" *ngSwitchCase=\"'textbox'\" [formControlName]=\"question.key\" [id]=\"question.key\" [type]=\"question.type\">\n    </div>\n\n\t<div class=\"errorMessage alert alert-danger\" *ngIf=\"!isValid && (isDirty || isTouched)\">{{question.label}} is required</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/dynamic-form-question/dynamic-form-question.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var question_base_1 = __webpack_require__("./src/app/components/questions/question-base.ts");
var DynamicFormQuestionComponent = /** @class */ (function () {
    function DynamicFormQuestionComponent() {
    }
    Object.defineProperty(DynamicFormQuestionComponent.prototype, "isValid", {
        get: function () {
            return this.form.controls[this.question.key].valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormQuestionComponent.prototype, "isDirty", {
        get: function () {
            return this.form.controls[this.question.key].dirty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormQuestionComponent.prototype, "isTouched", {
        get: function () {
            return this.form.controls[this.question.key].touched;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", question_base_1.QuestionBase)
    ], DynamicFormQuestionComponent.prototype, "question", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", forms_1.FormGroup)
    ], DynamicFormQuestionComponent.prototype, "form", void 0);
    DynamicFormQuestionComponent = __decorate([
        core_1.Component({
            selector: 'app-question',
            template: __webpack_require__("./src/app/components/dynamic-form-question/dynamic-form-question.component.html"),
            styles: [__webpack_require__("./src/app/components/dynamic-form-question/dynamic-form-question.component.css")],
        })
    ], DynamicFormQuestionComponent);
    return DynamicFormQuestionComponent;
}());
exports.DynamicFormQuestionComponent = DynamicFormQuestionComponent;


/***/ }),

/***/ "./src/app/components/dynamic-form/dynamic-form.component.css":
/***/ (function(module, exports) {

module.exports = ".form {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n  font-weight: 400;\n}\n\n.form .form-control {\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px;\n}\n\n.form-signin input[type=\"email\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.form-signin input[type=\"textbox\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n"

/***/ }),

/***/ "./src/app/components/dynamic-form/dynamic-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<!-- <form class=\"form\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\"> -->\n\t<form class=\"form\" [formGroup]=\"form\">\n\t\t<h1 class=\"h3 mb-3 font-weight-normal text-center\">{{title}}</h1>\n\n\t\t<div *ngFor=\"let question of questions\">\n\t\t\t<app-question [question]=\"question\" [form]=\"form\"></app-question>\n\t\t</div>\n\n\t\t<div>\n\t\t\t<button id=\"formButton\" class=\"btn btn-lg btn-primary btn-block\" (click)=\"buttonOnClick()\" [disabled]=\"form.invalid\">{{textButton}}</button>\n\t\t</div>\n\n\t\t<div *ngIf=\"payLoad\">\n\t\t\t<strong>Saved the following values</strong><br>{{payLoad}}\n\t\t</div>\n\t</form>\n\n\t<pre>{{ formData | json }}</pre>\n</div>\n"

/***/ }),

/***/ "./src/app/components/dynamic-form/dynamic-form.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var question_control_service_1 = __webpack_require__("./src/app/components/questions/question-control.service.ts");
var DynamicFormComponent = /** @class */ (function () {
    function DynamicFormComponent(qcs) {
        this.qcs = qcs;
        this.questions = [];
        this.payLoad = '';
    }
    DynamicFormComponent.prototype.ngOnInit = function () {
        this.form = this.qcs.toFormGroup(this.questions);
    };
    DynamicFormComponent.prototype.buttonOnClick = function () {
        this.payLoad = JSON.stringify(this.form.value);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], DynamicFormComponent.prototype, "questions", void 0);
    DynamicFormComponent = __decorate([
        core_1.Component({
            selector: 'app-dynamic-form',
            template: __webpack_require__("./src/app/components/dynamic-form/dynamic-form.component.html"),
            styles: [__webpack_require__("./src/app/components/dynamic-form/dynamic-form.component.css")],
            providers: [question_control_service_1.QuestionControlService]
        }),
        __metadata("design:paramtypes", [question_control_service_1.QuestionControlService])
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());
exports.DynamicFormComponent = DynamicFormComponent;


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n\t<div class=\"container\">\n\t\t<a class=\"navbar-brand\" href=\"/home\">LMYC</a>\n\t\t<button #navbarToggler class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsingNavbar\">\n\t\t<span class=\"navbar-toggler-icon\"></span>\n\t  </button>\n\t\t<div class=\"navbar-collapse collapse w-100\" id=\"collapsingNavbar\">\n\t\t\t<ul class=\"nav navbar-nav ml-auto w-100\" (click)=\"collapseNav()\">\n\t\t\t\t<li><a class=\"nav-link\" href=\"home/contact\">Contact</a></li>\n\t\t\t\t<!-- <li><a class=\"nav-link\" href=\"boats/index\">Boats</a></li>\n\t\t\t\t<li><a class=\"nav-link\" href=\"reservations/index\">Reservations</a></li> -->\n\t\t\t</ul>\n\t\t\t<ul class=\"nav navbar-nav ml-auto w-100 justify-content-end\">\n\t\t\t\t<li><a class=\"nav-link\" href=\"account/register\">Register</a></li>\n\t\t\t\t<li><a class=\"nav-link\" href=\"account/login\">Log In</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.navBarTogglerIsVisible = function () {
        return this.navbarToggler.nativeElement.offsetParent !== null;
    };
    NavbarComponent.prototype.collapseNav = function () {
        if (this.navBarTogglerIsVisible()) {
            this.navbarToggler.nativeElement.click();
        }
    };
    __decorate([
        core_1.ViewChild('navbarToggler'),
        __metadata("design:type", core_1.ElementRef)
    ], NavbarComponent.prototype, "navbarToggler", void 0);
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "./src/app/components/questions/question-base.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var QuestionBase = /** @class */ (function () {
    function QuestionBase(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
    }
    return QuestionBase;
}());
exports.QuestionBase = QuestionBase;


/***/ }),

/***/ "./src/app/components/questions/question-control.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var QuestionControlService = /** @class */ (function () {
    function QuestionControlService() {
    }
    QuestionControlService.prototype.toFormGroup = function (questions) {
        var group = {};
        questions.forEach(function (question) {
            group[question.key] = question.required ? new forms_1.FormControl(question.value || '', forms_1.Validators.required)
                : new forms_1.FormControl(question.value || '');
        });
        return new forms_1.FormGroup(group);
    };
    QuestionControlService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], QuestionControlService);
    return QuestionControlService;
}());
exports.QuestionControlService = QuestionControlService;


/***/ }),

/***/ "./src/app/components/questions/question-textbox.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var question_base_1 = __webpack_require__("./src/app/components/questions/question-base.ts");
var TextQuestion = /** @class */ (function (_super) {
    __extends(TextQuestion, _super);
    function TextQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'textbox';
        _this.type = options['type'] || '';
        return _this;
    }
    return TextQuestion;
}(question_base_1.QuestionBase));
exports.TextQuestion = TextQuestion;


/***/ }),

/***/ "./src/app/components/questions/questionsService.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var question_textbox_1 = __webpack_require__("./src/app/components/questions/question-textbox.ts");
var signUpFormData_1 = __webpack_require__("./src/app/models/signUpFormData.ts");
var QuestionsService = /** @class */ (function () {
    function QuestionsService() {
        this.formData = new signUpFormData_1.FormData();
        this.islFormDataValid = false;
        // getPersonal(): Personal {
        // 	// Return the Personal data
        // 	var personal: Personal = {
        // 		firstName: this.formData.firstName,
        // 		lastName: this.formData.lastName,
        // 		email: this.formData.email
        // 	};
        // 	return personal;
        // }
        //
        // setPersonal(data: Personal) {
        // 	// Update the Personal data only when the Personal Form had been validated successfully
        // 	this.isPersonalFormValid = true;
        // 	this.formData.firstName = data.firstName;
        // 	this.formData.lastName = data.lastName;
        // 	this.formData.email = data.email;
        // }
        //
        // resetFormData(): FormData {
        // 	// Return the form data after all this.* members had been reset
        // 	this.formData.clear();
        // 	this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
        // 	return this.formData;
        // }
        //
        // isFormValid() {
        // 	// Return true if all forms had been validated successfully; otherwise, return false
        // 	return this.isPersonalFormValid &&
        // 			this.isWorkFormValid &&
        // 			this.isAddressFormValid;
        // }
    }
    // Todo: get from a remote source of question metadata
    // Todo: make asynchronous
    QuestionsService.prototype.getRegisterQuestions = function () {
        var questions = [
            new question_textbox_1.TextQuestion({
                key: 'firstName',
                label: 'First name',
                required: true,
                order: 1
            }),
            new question_textbox_1.TextQuestion({
                key: 'lastName',
                label: 'Last name',
                required: true,
                order: 2
            }),
            new question_textbox_1.TextQuestion({
                key: 'userName',
                label: 'Username',
                required: true,
                order: 3
            }),
            new question_textbox_1.TextQuestion({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                required: true,
                order: 4
            }),
            new question_textbox_1.TextQuestion({
                key: 'password',
                label: 'Password',
                type: 'password',
                required: true,
                order: 5
            }),
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionsService.prototype.getLoginQuestions = function () {
        var questions = [
            new question_textbox_1.TextQuestion({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                required: true,
                order: 1
            }),
            new question_textbox_1.TextQuestion({
                key: 'password',
                label: 'Password',
                type: 'password',
                required: true,
                order: 2
            }),
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionsService = __decorate([
        core_1.Injectable()
    ], QuestionsService);
    return QuestionsService;
}());
exports.QuestionsService = QuestionsService;


/***/ }),

/***/ "./src/app/models/signUpFormData.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FormData = /** @class */ (function () {
    function FormData() {
        this.firstName = '';
        this.lastName = '';
        this.userName = '';
        this.email = '';
        this.password = '';
        this.street = '';
        this.city = '';
        this.province = '';
        this.postalCode = '';
        this.country = '';
        this.mobilePhone = '';
        this.emergencyContactOnePhone = '';
        this.emergencyContactTwoPhone = '';
        this.sailingExperience = '';
    }
    FormData.prototype.clear = function () {
        this.firstName = '';
        this.lastName = '';
        this.userName = '';
        this.email = '';
        this.street = '';
        this.city = '';
        this.province = '';
        this.country = '';
        this.postalCode = '';
        this.mobilePhone = '';
        this.sailingExperience = '';
    };
    return FormData;
}());
exports.FormData = FormData;


/***/ }),

/***/ "./src/app/pages/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Contact</h1>\n"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/pages/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;


/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n    <img src=\"http://www.lmyc.ca/sites/all/themes/lmyc/images/logo.png\" alt=\"LMYC Logo\" />\n    <h2>Welcome to the LMYC</h2>\n</div>\n\n\n<div class=\"row\">\n    <h3>Purpose</h3>\n    <p>Come join use at LMYC where we rent out sailboats to the public!  We hold races all the time and compete for the title of \"Best Skipper\" (and no I dont mean school).\n    So what are you waiting for?  Come sign up and be part of the action!</p>\n\n    <h3>Mission</h3>\n    <p>\n        The mission and purpose of the Lower Mainland Yacht co-op is to promote Affordable, Safe and Enjoyable recreational sailing.\n        As a co-op, it is possible to provide boats, equipment and sailing skill development at a fraction of the cost of any other sailing program you can find. The low cost, however, does require full participation of the members to make it succeed. All members are expected to contribute time for boat maintenance or helping with other activities toward our common goal.\n    </p>\n\n    <h3>Operations</h3>\n    <p>\n        To maintain our co-op interest and it's continuing success, an annual election is held in February to select the Commodore, First and Second Vice Commodores, Treasurer and Secretary.\n        Meetings are held on the third Thursday of each month, except July, August and December. Meetings are held at the Rotary Field House in White Rock at 1930 hours. Annual dues are payable by February 1st each year. The Annual General Meeting is held at the February meeting.\n    </p>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = 'LMYC';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__("./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { AuthService } from './../../auth.service';
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var question_control_service_1 = __webpack_require__("./src/app/components/questions/question-control.service.ts");
var questionsService_service_1 = __webpack_require__("./src/app/components/questions/questionsService.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(
        // private authService: AuthService,
        router, qcs, QuestionsService) {
        this.router = router;
        this.qcs = qcs;
        this.QuestionsService = QuestionsService;
        this.title = "Please Login";
        this.textButton = "Next";
        this.questions = QuestionsService.getLoginQuestions();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this.qcs.toFormGroup(this.questions);
        console.log('Login form loaded!');
    };
    LoginComponent.prototype.save = function (form) {
        if (!this.form.valid) {
            return false;
        }
        console.log(this.form.value);
        return true;
    };
    LoginComponent.prototype.buttonOnClick = function () {
        if (this.save(this.form)) {
            console.log("Login form saved");
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/dynamic-form/dynamic-form.component.html"),
            styles: [__webpack_require__("./src/app/components/dynamic-form/dynamic-form.component.css")],
            providers: [questionsService_service_1.QuestionsService, question_control_service_1.QuestionControlService]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            question_control_service_1.QuestionControlService,
            questionsService_service_1.QuestionsService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { AuthService } from './../../auth.service';
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var question_control_service_1 = __webpack_require__("./src/app/components/questions/question-control.service.ts");
var questionsService_service_1 = __webpack_require__("./src/app/components/questions/questionsService.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(
        // private authService: AuthService,
        router, qcs, QuestionsService) {
        this.router = router;
        this.qcs = qcs;
        this.QuestionsService = QuestionsService;
        this.title = "Register";
        this.textButton = "Submit";
        this.questions = QuestionsService.getRegisterQuestions();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.form = this.qcs.toFormGroup(this.questions);
        console.log('Register form loaded!');
    };
    RegisterComponent.prototype.save = function (form) {
        if (!this.form.valid) {
            return false;
        }
        console.log(this.form.value);
        return true;
    };
    RegisterComponent.prototype.buttonOnClick = function () {
        if (this.save(this.form)) {
            console.log("Register form saved");
        }
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/dynamic-form/dynamic-form.component.html"),
            styles: [__webpack_require__("./src/app/components/dynamic-form/dynamic-form.component.css")],
            providers: [questionsService_service_1.QuestionsService, question_control_service_1.QuestionControlService]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            question_control_service_1.QuestionControlService,
            questionsService_service_1.QuestionsService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map