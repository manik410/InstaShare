(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <br/><br/><br/>\n  <div class=\"row\">\n    <div class=\"col-md-2 col-sm-3\"></div>\n    <div class=\"col-md-5 col-sm-5 back1\">\n        <h1 class=\"text-center main-heading\">\n          Welcome To InstaShare\n        </h1>\n        <br/><br/><br/>\n        <p class=\"main-data\">InstaShare is a social media app that allows users\n          to share photos from their lives, add captions,\n           engage with others, explore  and so, so much more !! Login or Signup to\n           share photos  with your friends and add new friends.\n          </p>\n          <a routerLink=\"signup\"><button  class=\"btn log\">Signup</button></a>\n          <a routerLink=\"login\"><button class=\"btn log\">Login</button></a>\n          <br/><br/><br/>\n    </div>\n   <div class=\"col-md-5 col-sm-5 back\">\n         <div id=\"img\"><img id=\"image1\" border=\"6\" style=\"border-color:white;\" />\n         </div>\n   </div>\n </div>\n\n<div class=\"row\">\n  <div class=\"col-md-12 col-sm-12\">\n    <br/>\n    <p class=\"footer\">Copyright © 2020 | All rights reserved | InstaShare</p>\n  </div>\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <img src=\"assets/img/instagram.png\" class=\"imagelogo\">\n      \t<a class=\"navbar-brand\" routerLink=\"/user\">&nbsp;&nbsp;InstaShare</a>\n    </div>\n      <ul class=\"nav navbar-nav explore\">\n     <li><a routerLink=\"/user\">Home</a></li>\n     <button class=\"btn btn-danger btn-lg post\" id=\"logout\" data-toggle=\"modal\" data-target=\"#myFriend\" (click)=\"checkEmpty()\">View Friends</button>&nbsp;&nbsp;&nbsp;\n      <button class=\"btn btn-danger btn-lg post\" id=\"logout\" (click)=\"clearLocal()\">Logout</button>\n      </ul>\n  </div>\n</nav>\n\n<div class=\"container behind\">\n\t<br>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-2\">\n\t\t</div>\n\t\t\t\t<div class=\"col-md-4\" >\n          <img *ngIf=\"pfstatus\" src=\"../../assets/img/defult.jpg\" class=\"img-rounded\" id=\"profileedit\">\n          <div *ngFor=\"let a of imgUrl;let i=index\">\n      <img src=\"{{a.path}}\" class=\"img-rounded\" id=\"profileedit\" alt=\"No Profile Image\" *ngIf=\"i==0\">\n      </div>\n\t\t</div>\n\t\t<div class=\"col-md-6\">\n\t\t\t<ul>\n\t\t\t<li><p>{{user}}</p></li>\n\t\t   </ul>\n\t\t   <ul class=\"followers\">\n\t\t   \t<li><h4>{{noOfPosts}} posts</h4></li>\n\t\t   \t<li><h4>{{noOfFriends}} Friends</h4></li><br/>\n\t\t  </ul>\n\t\t</div>\n\t</div>\n</div>\n<br>\n<hr>\n<div class=\"container-fluid\">\n  <h2 *ngIf=\"postStatus\" class=\"text-center\" style=\"font-family: 'Titillium Web', sans-serif;\">No Posts Uploaded</h2>\n</div>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-3 \" *ngFor=\"let a of imgUrl;let i of index\">\n      <button class=\"btn imageDis\"  data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"give(a)\"><img src='{{a.path}}' class=\"postsimages\"></button>\n    </div>\n  </div>\n  </div>\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <br/><br/><br/>\n      <div class=\"modal-content\">\n          <table>\n            <tr>\n              <td><img src='{{path}}' class=\"postsimage\"></td>\n              <td><h3>{{like}} Likes </h3>\n                <h3>{{noOfComments}} Comments</h3>\n              </td>\n            </tr>\n          </table>\n        </div>\n        <button type=\"button\" class=\"btn btn-default imbig\" data-dismiss=\"modal\">Close</button>&nbsp;&nbsp;&nbsp;\n        <button type=\"button\" class=\"btn btn-default imbig\" data-dismiss=\"modal\" (click)=\"deleteImage(path)\">Delete Post</button>\n      </div>\n    </div>\n    <div class=\"modal fade\" id=\"myFriend\" role=\"dialog\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-body user\">\n            <h1 *ngIf=\"status\" class=\"text-center\" style=\"font-family: 'Titillium Web', sans-serif;\">No Friends</h1>\n            <table class=\"table table-hover table-condensed\" style=\"width:100%;\">\n              <br/>\n              <tr *ngFor=\"let obj of names;let i =index\">\n                <td style=\"width:60%;text-align: center;font-size: 25px;\" class=\"friends\">{{obj}}</td>\n                <td class=\"friend\"><button class=\"btn btn-danger\" style=\"font-size:18px;\" (click)=\"removeFriend(obj,i)\">Remove Friend</button></td>\n              </tr>\n            </table>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n          </div>\n        </div>\n      </div>\n    </div>\n      <div class=\"col-md-12\">\n        <br/>\n        <p class=\"footer\" *ngIf=\"imgUrl.length>0\">Copyright © 2020 | All rights reserved | InstaShare</p>\n      </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <img src=\"assets/img/insta1.png\" class=\"imagelogo\">\n      <a class=\"navbar-brand\" routerLink=\"/user\">&nbsp;&nbsp;InstaShare &nbsp;&nbsp;&nbsp;&nbsp;</a>\n    </div>\n      <ul class=\"nav navbar-nav explore\">\n     <li><a routerLink=\"/user\">Home</a></li>\n      <li><a routerLink=\"/profile\">Profile</a></li>\n      <button class=\"btn btn-danger post\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"clearUrl()\">Add Post</button>\n      <button class=\"btn btn-danger post\" data-toggle=\"modal\" data-target=\"#myFriend\">Add Friends</button>\n      </ul>\n  </div>\n</nav>\n<br>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-9\" id=\"second\">\n      <h1 *ngIf=\"feedStatus\" class=\"text-center\" style=\"font-family:'Titillium Web', sans-serif;\">Please Add Friends to Explore Images.</h1>\n      <br/><br/>\n      <div class=\"row\" *ngIf=\"recent\">\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-md-8\">\n          <h3 class=\"postname\">{{username1}}</h3>\n          <img [src]=\"recentURL\" class=\"img1\">\n          <button class=\"btn btn-default bn-lg bt\">Like</button>\n          <button class=\"btn btn-default bn-lg bt\">View Likes</button>\n          <button class=\"btn btn-default bn-lg bt\">Comment</button>\n          <button class=\"btn btn-default bn-lg bt\">View Comments</button>\n        </div>\n      </div>\n      <div *ngFor=\"let a of feedPath;let i=index;\">\n        <div class=\"row\" *ngFor=\"let b of a.photos.slice().reverse();let j=index;\">\n          <div class=\"col-md-2\"></div>\n          <div class=\"col-md-8\">\n            <h3 class=\"postname\">{{a.username}}</h3>\n            <img src=\"{{b.path}}\" class=\"img1\">\n            <button [className]=\"likesChecking.get(b.path)? 'btn btn-default bt':'btn bt1 btn-lg'\"  (click)=\"liked(b.path)\">Like</button>\n            <button class=\"btn btn-default btn-lg bt\" (click)=\"getNames(b.path)\" data-toggle=\"modal\" data-target=\"#myLikeInfo\">View Likes</button>\n            <button class=\"btn btn-default btn-lg bt\" data-toggle=\"modal\" data-target=\"#myComment\" (click)=\"sendPath(b.path)\">Comment</button>\n            <button class=\"btn btn-default btn-lg bt\" data-toggle=\"modal\" data-target=\"#viewComments\" (click)=\"viewComment(b.path,a.username)\">View Comments</button>\n            <br/><br/>\n          </div>\n          <div class=\"col-md-2\"></div>\n        </div>\n        </div>\n    </div>\n    <div class=\"col-md-3\" id=\"first\">\n      <p class=\"text-center\" style=\"font-weight: bold;font-size:12px;\" *ngIf=\"make\">Ads</p>\n      <div *ngFor=\"let a of make;let i=index\">\n        <a *ngIf=\"i<=60&&i>56\" href=\"{{a.product_link}}\" target=\"_blank\"><img class=\"img\" *ngIf=\"i<=60&&i>56\" src=\"{{a.image_link}}\"></a>\n        <p class=\"text-center\" style=\"font-weight: bold;color:red;\" *ngIf=\"i<=60&&i>56\">{{a.price_sign}}{{a.price}}</p>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"clearUrl()\">&times;</button>\n        <h4 class=\"modal-title text-center\">Upload Image</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div>\n          <input (change)=\"onSelectFile($event)\" type=\"file\" id=\"up\" name=\"image\" ng2FileSelect [uploader]=\"uploader\" accept=\"image/x-png,image/gif,image/jpeg\">\n          <br/>\n          <img [src]=\"url\" height=\"auto\" width=\"100%\">\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"uploader.uploadAll();cl()\" [disabled]=\"!uploader.getNotUploadedItems().length\">Upload</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"myFriend\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body user\">\n        <h1 class=\"text-center\" style=\"font-family: 'Titillium Web', sans-serif;\" *ngIf=\"addingFriendStatus\">No Friends To Add</h1>\n        <table class=\"table table-hover table-condensed\" style=\"width:100%;\">\n          <tr *ngFor=\"let obj of username;let i =index\">\n            <td style=\"width:60%;text-align: center;font-size: 25px;\">{{obj.username}}</td>\n            <td ><button class=\"btn btn-danger\" style=\"font-size:18px;\" (click)=\"addFriend(obj,i)\" [disabled]=\"!friendStatus[i]\">Add as Friend</button></td>\n          </tr>\n        </table>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"myLikeInfo\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body user\">\n        <h1 class=\"text-center\" style=\"font-family: 'Titillium Web', sans-serif;\" >{{likes}} Likes</h1>\n        <br/><br/>\n        <table class=\"table table-hover table-condensed\" style=\"width:100%;\">\n          <tr *ngFor=\"let obj of likedBy\">\n            <td style=\"width:60%;text-align: center;font-size: 25px;\">{{obj}}</td>\n          </tr>\n        </table>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"myComment\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h3 class=\"modal-title text-center\">Please Enter Your Comment</h3>\n      </div>\n      <div class=\"modal-body\">\n        <div>\n            <input [(ngModel)]=\"commentText\" class=\"form-control\" type=\"text\" matInput name=\"comment\"  #comment=\"ngModel\"  placeholder=\"Enter Comment\" required=\"\" autofocus=\"\" ngModel/>\n              <mat-error *ngIf=\"comment.invalid\">Please enter comment</mat-error>\n          <br/>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn btn-default\" data-dismiss=\"modal\" [disabled]=\"!commentText\" (click)=\"addComment()\">Comment</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"viewComments\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body user\">\n        <h1 class=\"text-center\" style=\"font-family: 'Titillium Web', sans-serif;\" >{{noOfComments}} Comments</h1>\n        <br/><br/>\n        <table class=\"table table-hover table-condensed table-bordered\" style=\"width:100%;\">\n          <tr *ngIf=\"commentData.length>0\">\n            <th style=\"width:50%;text-align: center;font-size: 25px;font-family:'Titillium Web', sans-serif;border:1px solid grey\">Comment Text</th>\n            <th style=\"width:50%;text-align: center;font-size: 25px; font-family: 'Titillium Web', sans-serif;border:1px solid grey\">Commented By</th>\n            <th style=\"border:1px solid gray\"></th>\n            <br/><br/>\n          </tr>\n          <tr *ngFor=\"let obj of commentData;let i=index;\">\n            <td style=\"width:50%;text-align: center;font-size: 25px;padding:5px;border:1px solid grey\">{{obj.commentText}}</td>\n            <td style=\"width:50%;text-align: center;font-size: 25px;padding:5px;border:1px solid grey\">{{obj.commentedBy}}</td>\n            <td style=\"border:1px solid grey\"><button class=\"btn btn-danger\" style=\"font-size:18px;\" (click)=\"deleteComment(obj,i)\" [disabled]=\"!deleteStatus&&obj.commentedBy!=username1\">Delete Comment</button></td>\n          </tr>\n        </table>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/userstart/login/login.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userstart/login/login.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <br/><br/><br/><br/><br/><br/><br/><br/><br/>\n        <form class=\"form-signin\" (submit)=\"onAddPost(postForm)\" #postForm=\"ngForm\">\n          <h2 class=\"form-signin-heading text-center\">InstaShare Login</h2>\n          <br/>\n          <mat-form-field>\n            <input type=\"text\" matInput  name=\"username\" #username=\"ngModel\" placeholder=\"Enter username\" required=\"\" autofocus=\"\" ngModel/>\n              <mat-error *ngIf=\"username.invalid\">Please enter username</mat-error>\n          </mat-form-field><br/>\n          <mat-form-field>\n            <input type=\"password\" matInput #pass=\"ngModel\" name=\"pass\" placeholder=\"Enter password\" required=\"\" autofocus=\"\" ngModel/>\n              <mat-error *ngIf=\"pass.invalid\">Please enter password</mat-error>\n            </mat-form-field><br/><br/>\n          <button class=\"btn btn-lg btn-danger btn-block\" type=\"submit\">Login</button>\n          <p class=\"text-center warn\">Don't have an account?<a routerLink=\"/signup\">\n            <span style=\"color:blue;\">Sign-up</span></a></p>\n            <p class=\"text-center text-success warn1\">{{log}}</p>\n        </form>\n      </div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/userstart/signup/signup.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userstart/signup/signup.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <div class=\"wrapper\">\n    <br/><br/><br/><br/><br/><br/><br/><br/>\n    <form class=\"form-signup\" (submit)=\"onAddPost(postForm)\" #postForm=\"ngForm\">\n      <h2 class=\"form-signup-heading text-center\">New User!<br/> Regsiter here</h2>\n      <br/>\n      <mat-form-field>\n      <input type=\"email\" [pattern]=\"emailPattern\" matInput  name=\"mail\" #mail=\"ngModel\" placeholder=\"Enter email\" required=\"\" autofocus=\"\" ngModel/>\n        <mat-error *ngIf=\"mail.invalid\">Please enter valid email</mat-error>\n    </mat-form-field><br/>\n    <mat-form-field>\n    <input type=\"text\" matInput #name=\"ngModel\" name=\"username\" placeholder=\"Enter username\" required=\"\" autofocus=\"\" ngModel/>\n      <mat-error *ngIf=\"name.invalid\">Please enter username</mat-error>\n    </mat-form-field><br/>\n    <mat-form-field>\n      <input type=\"password\" matInput #pass=\"ngModel\" name=\"pass\" placeholder=\"Enter password\" required=\"\" autofocus=\"\" ngModel/>\n        <mat-error *ngIf=\"pass.invalid\">Please enter password</mat-error>\n      </mat-form-field><br/><br/>\n      <button  class=\"btn btn-lg btn-danger btn-block\" type=\"submit\">SignUp</button>\n      <p class=\"text-center warn\">Already have an account?<a routerLink=\"/login\">\n        <span style=\"color:blue;\">Login</span></a></p>\n      <p class=\"text-center text-success warn1\">{{error}}</p>\n      <br/>\n    </form>\n  </div>\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _userstart_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userstart/login/login.component */ "./src/app/userstart/login/login.component.ts");
/* harmony import */ var _userstart_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userstart/signup/signup.component */ "./src/app/userstart/signup/signup.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");








const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'login', component: _userstart_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'signup', component: _userstart_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'instain';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _userstart_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userstart/login/login.component */ "./src/app/userstart/login/login.component.ts");
/* harmony import */ var _userstart_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./userstart/signup/signup.component */ "./src/app/userstart/signup/signup.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _userstart_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _userstart_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
            _user_user_component__WEBPACK_IMPORTED_MODULE_11__["UserComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
        ],
        imports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"].forRoot(),
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__["FileUploadModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid\r\n{\r\n  padding-top:18px;\r\n  background-image: url('back.jpeg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n.back\r\n{\r\n\tbackground-image:url('login-frame.png');\r\n\tbackground-repeat: no-repeat;\r\n\theight:702px;\r\n}\r\n#image1\r\n{\r\n\tmargin-left:130px;\r\n    height: 438px;\r\n    width: 249px;\r\n    margin-top:95px;\r\n    border-radius:10px;\r\n    opacity: 0.9;\r\n}\r\n.main-heading\r\n{\r\n  margin-top:150px;\r\n  font-family:'Exo', sans-serif;\r\n  font-size:60px;\r\n  color:#b1b0b0;\r\n  text-shadow:2px 2px white;\r\n}\r\n.main-data\r\n{\r\n  padding:18px;\r\n  font-size:25px;\r\n  font-family: 'Titillium Web', sans-serif;\r\n  color: white;\r\n}\r\n.log\r\n{\r\n  margin:10px;\r\n  float:right;\r\n  font-size:22px;\r\n  width:100px;\r\n  background-color: #b1b0b0;\r\n  color:black;\r\n  border: 1px solid white;\r\n  font-family:'Exo', sans-serif;\r\n}\r\n.btn:hover{\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n  background-color:grey;\r\n}\r\n.footer\r\n{\r\n  text-align: center;\r\n  font-size: 22px;\r\n  font-family: 'Titillium Web', sans-serif;\r\n  color:black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGtDQUFtRDtFQUNuRCw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCO0FBQ0E7O0NBRUMsdUNBQXdEO0NBQ3hELDRCQUE0QjtDQUM1QixZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxpQkFBaUI7SUFDZCxhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBOztFQUVFLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7QUFDQTs7RUFFRSxZQUFZO0VBQ1osY0FBYztFQUNkLHdDQUF3QztFQUN4QyxZQUFZO0FBQ2Q7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2QjtBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysd0NBQXdDO0VBQ3hDLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZFxyXG57XHJcbiAgcGFkZGluZy10b3A6MThweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvYmFjay5qcGVnJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5iYWNrXHJcbntcclxuXHRiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi4vLi4vYXNzZXRzL2ltZy9sb2dpbi1mcmFtZS5wbmcnKTtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdGhlaWdodDo3MDJweDtcclxufVxyXG4jaW1hZ2UxXHJcbntcclxuXHRtYXJnaW4tbGVmdDoxMzBweDtcclxuICAgIGhlaWdodDogNDM4cHg7XHJcbiAgICB3aWR0aDogMjQ5cHg7XHJcbiAgICBtYXJnaW4tdG9wOjk1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuLm1haW4taGVhZGluZ1xyXG57XHJcbiAgbWFyZ2luLXRvcDoxNTBweDtcclxuICBmb250LWZhbWlseTonRXhvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6NjBweDtcclxuICBjb2xvcjojYjFiMGIwO1xyXG4gIHRleHQtc2hhZG93OjJweCAycHggd2hpdGU7XHJcbn1cclxuLm1haW4tZGF0YVxyXG57XHJcbiAgcGFkZGluZzoxOHB4O1xyXG4gIGZvbnQtc2l6ZToyNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5sb2dcclxue1xyXG4gIG1hcmdpbjoxMHB4O1xyXG4gIGZsb2F0OnJpZ2h0O1xyXG4gIGZvbnQtc2l6ZToyMnB4O1xyXG4gIHdpZHRoOjEwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiMWIwYjA7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6J0V4bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmJ0bjpob3ZlcntcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpncmV5O1xyXG59XHJcbi5mb290ZXJcclxue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjpibGFjaztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            var arr = [];
            arr[0] = new Image();
            arr[0].src = 'assets/img/login.png';
            arr[1] = new Image();
            arr[1].src = 'assets/img/login1.png';
            arr[2] = new Image();
            arr[2].src = 'assets/img/login2.png';
            jquery__WEBPACK_IMPORTED_MODULE_2__("#image1").attr("src", arr[0].src);
            var i = 1;
            jquery__WEBPACK_IMPORTED_MODULE_2__(setInterval(function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__("#image1").attr("src", arr[i].src);
                i++;
                if (i == arr.length) {
                    i = 0;
                }
            }, 3000));
        });
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.imagelogo\r\n{\r\n      height: 35px;\r\n    width: 35px;\r\n    margin-top:20px;\r\n    float:left;\r\n}\r\n.navbar-header\r\n{\r\n  width:25% !important;\r\n}\r\n.navbar-inverse\r\n{\r\n\r\n  border-radius: 0px !important;\r\n border:0px solid white !important;\r\n}\r\n.headinglogo\r\n{\r\n  margin:10px;\r\n  color:white;\r\n\r\n}\r\n.form-control\r\n{\r\n  margin-top:10px !important;\r\n  margin-left:20px !important;\r\n  height:38px !important;\r\n  width:300px !important;\r\n}\r\n.navbar-brand\r\n{\r\n  font-size: 28px !important;\r\n  margin-top:10px;\r\n  font-family: 'Titillium Web', sans-serif;\r\n}\r\n#profileheader\r\n{\r\n  margin:10px;\r\n  height:60px;\r\n  width:60px;\r\n  border-radius:50%;\r\n  float:right;\r\n\r\n}\r\n.btn-default\r\n{\r\n  margin-top:10px !important;\r\n  margin-left:-5px !important;\r\n  height:38px !important;\r\n  font-family: 'Titillium Web', sans-serif;\r\n}\r\n#profileedit\r\n{\r\n  height:190px;\r\n  width:195px;\r\n  border-radius:50%;\r\n  border:6px solid #80808026;\r\n}\r\nul\r\n{\r\n  list-style-type: none;\r\n}\r\nli\r\n{\r\n  display: -webkit-inline-box;\r\n  display: inline-flex;\r\npadding-left:15px;\r\n  padding-right:15px;\r\n\r\n}\r\n.post\r\n{\r\n  font-size: 17px;\r\n  padding-left:15px;\r\n  padding-right: 15px;\r\n}\r\nli p\r\n{\r\n  font-size:30px;\r\n  font-family: 'Titillium Web', sans-serif;\r\n }\r\n.followers li\r\n{\r\n  display: -webkit-inline-box;\r\n  display: inline-flex;\r\n  font-family: 'Titillium Web', sans-serif;\r\n}\r\n.bio\r\n{\r\n  font-family: 'Titillium Web', sans-serif;\r\n  padding-top:10px;\r\n  font-size:20px !important;\r\n}\r\n.name\r\n{\r\n  font-family: 'Titillium Web', sans-serif;\r\nfont-size:25px;\r\n}\r\n.imbig\r\n{\r\n  background-color: black !important;\r\n  color:white !important;\r\n  font-size: 20px;\r\n}\r\n.postsimages\r\n{\r\n  height:420px;\r\n  width:100%;\r\n  padding:15px;\r\n}\r\n.footer\r\n{\r\n  text-align: center;\r\n  font-size: 22px;\r\n  font-family: 'Titillium Web', sans-serif;\r\n  color:black;\r\n}\r\n.explore\r\n{\r\n  float: right;\r\n  font-size: 25px !important;\r\n  margin:11px !important;\r\n  font-family: 'Titillium Web', sans-serif;\r\n}\r\n.example-card {\r\n  max-width:300px;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n#logout\r\n{\r\n  padding:12px;\r\n  font-size:18px;\r\n  font-family: 'Titillium Web', sans-serif;\r\n}\r\n.imageDis\r\n{\r\n  background-color: white;\r\n}\r\ntable\r\n{\r\n  margin:0px !important;\r\n}\r\n.postsimage\r\n{\r\n  height:auto;\r\n  border-bottom-left-radius:5px;\r\n  border-top-left-radius: 5px;\r\n  width:100%;\r\n}\r\ntd h3\r\n{\r\n  text-align: center;\r\n  padding: 15px;\r\n  width:150px !important;\r\n  font-weight: bold;\r\n  font-size:20px;\r\n  font-family: 'Titillium Web', sans-serif;\r\n}\r\n.modal-content\r\n{\r\n  width:600px !important;\r\n}\r\n.user\r\n{\r\n  background-color: whitesmoke !important;\r\n  height:350px;\r\n  overflow-y: scroll;\r\n}\r\n.friend\r\n{\r\n  font-family: 'Titillium Web', sans-serif;\r\n  padding: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztNQUVNLFlBQVk7SUFDZCxXQUFXO0lBQ1gsZUFBZTtJQUNmLFVBQVU7QUFDZDtBQUNBOztFQUVFLG9CQUFvQjtBQUN0QjtBQUNBOzs7RUFHRSw2QkFBNkI7Q0FDOUIsaUNBQWlDO0FBQ2xDO0FBQ0E7O0VBRUUsV0FBVztFQUNYLFdBQVc7O0FBRWI7QUFDQTs7RUFFRSwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixzQkFBc0I7QUFDeEI7QUFDQTs7RUFFRSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLHdDQUF3QztBQUMxQztBQUNBOztFQUVFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixXQUFXOztBQUViO0FBQ0E7O0VBRUUsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsd0NBQXdDO0FBQzFDO0FBRUE7O0VBRUUsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCO0FBQ0E7O0VBRUUscUJBQXFCO0FBQ3ZCO0FBRUE7O0VBRUUsMkJBQW9CO0VBQXBCLG9CQUFvQjtBQUN0QixpQkFBaUI7RUFDZixrQkFBa0I7O0FBRXBCO0FBQ0E7O0VBRUUsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFDQTs7RUFFRSxjQUFjO0VBQ2Qsd0NBQXdDO0NBQ3pDO0FBQ0Q7O0VBRUUsMkJBQW9CO0VBQXBCLG9CQUFvQjtFQUNwQix3Q0FBd0M7QUFDMUM7QUFDQTs7RUFFRSx3Q0FBd0M7RUFDeEMsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjtBQUNBOztFQUVFLHdDQUF3QztBQUMxQyxjQUFjO0FBQ2Q7QUFDQTs7RUFFRSxrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7QUFFQTs7RUFFRSxZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysd0NBQXdDO0VBQ3hDLFdBQVc7QUFDYjtBQUVBOztFQUVFLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLHdDQUF3QztBQUMxQztBQUNBO0VBQ0UsZUFBZTtFQUNmLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUE4QjtVQUE5Qiw4QkFBOEI7QUFDaEM7QUFDQTs7RUFFRSxZQUFZO0VBQ1osY0FBYztFQUNkLHdDQUF3QztBQUMxQztBQUNBOztFQUVFLHVCQUF1QjtBQUN6QjtBQUNBOztFQUVFLHFCQUFxQjtBQUN2QjtBQUNBOztFQUVFLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLFVBQVU7QUFDWjtBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsd0NBQXdDO0FBQzFDO0FBQ0E7O0VBRUUsc0JBQXNCO0FBQ3hCO0FBQ0E7O0VBRUUsdUNBQXVDO0VBQ3ZDLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSx3Q0FBd0M7RUFDeEMsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmltYWdlbG9nb1xyXG57XHJcbiAgICAgIGhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgZmxvYXQ6bGVmdDtcclxufVxyXG4ubmF2YmFyLWhlYWRlclxyXG57XHJcbiAgd2lkdGg6MjUlICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hdmJhci1pbnZlcnNlXHJcbntcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbiBib3JkZXI6MHB4IHNvbGlkIHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhlYWRpbmdsb2dvXHJcbntcclxuICBtYXJnaW46MTBweDtcclxuICBjb2xvcjp3aGl0ZTtcclxuXHJcbn1cclxuLmZvcm0tY29udHJvbFxyXG57XHJcbiAgbWFyZ2luLXRvcDoxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6MjBweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDozOHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6MzAwcHggIWltcG9ydGFudDtcclxufVxyXG4ubmF2YmFyLWJyYW5kXHJcbntcclxuICBmb250LXNpemU6IDI4cHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcclxufVxyXG4jcHJvZmlsZWhlYWRlclxyXG57XHJcbiAgbWFyZ2luOjEwcHg7XHJcbiAgaGVpZ2h0OjYwcHg7XHJcbiAgd2lkdGg6NjBweDtcclxuICBib3JkZXItcmFkaXVzOjUwJTtcclxuICBmbG9hdDpyaWdodDtcclxuXHJcbn1cclxuLmJ0bi1kZWZhdWx0XHJcbntcclxuICBtYXJnaW4tdG9wOjEwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDotNXB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OjM4cHggIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4jcHJvZmlsZWVkaXRcclxue1xyXG4gIGhlaWdodDoxOTBweDtcclxuICB3aWR0aDoxOTVweDtcclxuICBib3JkZXItcmFkaXVzOjUwJTtcclxuICBib3JkZXI6NnB4IHNvbGlkICM4MDgwODAyNjtcclxufVxyXG51bFxyXG57XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG5saVxyXG57XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbnBhZGRpbmctbGVmdDoxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6MTVweDtcclxuXHJcbn1cclxuLnBvc3Rcclxue1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBwYWRkaW5nLWxlZnQ6MTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcbmxpIHBcclxue1xyXG4gIGZvbnQtc2l6ZTozMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XHJcbiB9XHJcbi5mb2xsb3dlcnMgbGlcclxue1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmJpb1xyXG57XHJcbiAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcclxuICBwYWRkaW5nLXRvcDoxMHB4O1xyXG4gIGZvbnQtc2l6ZToyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hbWVcclxue1xyXG4gIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XHJcbmZvbnQtc2l6ZToyNXB4O1xyXG59XHJcbi5pbWJpZ1xyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICBjb2xvcjp3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLnBvc3RzaW1hZ2VzXHJcbntcclxuICBoZWlnaHQ6NDIwcHg7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBwYWRkaW5nOjE1cHg7XHJcbn1cclxuLmZvb3RlclxyXG57XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG4uZXhwbG9yZVxyXG57XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjoxMXB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcclxufVxyXG4uZXhhbXBsZS1jYXJkIHtcclxuICBtYXgtd2lkdGg6MzAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuI2xvZ291dFxyXG57XHJcbiAgcGFkZGluZzoxMnB4O1xyXG4gIGZvbnQtc2l6ZToxOHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmltYWdlRGlzXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG50YWJsZVxyXG57XHJcbiAgbWFyZ2luOjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5wb3N0c2ltYWdlXHJcbntcclxuICBoZWlnaHQ6YXV0bztcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjVweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG50ZCBoM1xyXG57XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgd2lkdGg6MTUwcHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6MjBweDtcclxuICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5tb2RhbC1jb250ZW50XHJcbntcclxuICB3aWR0aDo2MDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi51c2VyXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OjM1MHB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG4uZnJpZW5kXHJcbntcclxuICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _userdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../userdata.service */ "./src/app/userdata.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let ProfileComponent = class ProfileComponent {
    constructor(router, postObj, http) {
        this.router = router;
        this.postObj = postObj;
        this.http = http;
        this.pfstatus = true;
        this.noOfPosts = 0;
        this.imgUrl = [];
        this.a = [];
        this.like = 0;
        this.postStatus = true;
        this.names = [];
        this.status = false;
        this.noOfComments = 0;
        this.mainIndex = 0;
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('loginToken'));
        this.username =
            {
                name: this.user
            };
        this.http.post("http://localhost:3000/api/myposts", this.username).subscribe((data) => {
            this.posts = data;
            if (this.posts.posts[0] != undefined) {
                if (this.posts.posts[0].photos.length == 0) {
                    this.noOfPosts = 0;
                }
                else {
                    this.pfstatus = false;
                    this.imgUrl = this.posts.posts[0].photos;
                    this.noOfPosts = this.imgUrl.length;
                    this.postStatus = false;
                }
            }
        });
        this.http.get("http://localhost:3000/api/myFriends/" + this.user).subscribe((data) => {
            this.friends = data;
            this.names = this.friends.users[0].friends;
            for (var k = 0; k < this.names.length; k++) {
                if (this.names[k] == this.user) {
                    this.names.splice(k, 1);
                }
            }
            this.noOfFriends = this.names.length;
        });
    }
    clearLocal() {
        localStorage.clear();
        this.router.navigate(["/"]);
    }
    give(index) {
        this.path = index.path;
        let p = this.path.substring(22, this.path.length);
        this.http.get("http://localhost:3000/api/getLikes/" + p).subscribe((data) => {
            this.likeInfo = data;
            if (this.likeInfo.data[0] != undefined) {
                this.like = this.likeInfo.data[0].likes;
            }
            else {
                this.like = 0;
            }
        });
        this.http.get("http://localhost:3000/api/getLikes/" + p).subscribe((data) => {
            this.commentInfo = data;
            if (this.commentInfo.data[0] != undefined) {
                this.noOfComments = this.commentInfo.data[0].comments.length;
            }
            else {
                this.noOfComments = 0;
            }
        });
    }
    removeFriend(obj, index) {
        for (var k = 0; k < this.names.length; k++) {
            if (this.names[k] == obj) {
                this.names.splice(k, 1);
            }
        }
        if (this.names.length == 0) {
            this.status = true;
        }
        this.http.post("http://localhost:3000/api/removefriends/" + obj, this.username).subscribe((data) => {
            console.log(data);
        });
        this.noOfFriends = this.names.length;
    }
    checkEmpty() {
        this.noOfFriends = this.names.length;
        if (this.names.length == 0) {
            this.status = true;
        }
    }
    deleteImage(path) {
        let index = this.imgUrl.map(function (item) { return item.path; }).indexOf(path);
        this.imgUrl.splice(index, 1);
        this.noOfPosts = this.imgUrl.length;
        let obj = {
            img: path
        };
        this.http.post("http://localhost:3000/api/removePost/" + this.user, obj).subscribe((data) => {
            console.log(data);
        });
        if (this.imgUrl.length == 0) {
            this.postStatus = true;
            this.pfstatus = true;
        }
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _userdata_service__WEBPACK_IMPORTED_MODULE_2__["UserdataService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.imagelogo\r\n{\r\n    height: 35px;\r\n    width: 35px;\r\n    margin-top:20px;\r\n    float:left;\r\n}\r\n.navbar-inverse\r\n{\r\n\r\n  border-radius: 0px !important;\r\n border:0px solid white !important;\r\n}\r\n.headinglogo\r\n{\r\n  margin:10px;\r\n  color:white;\r\n\r\n}\r\n.navbar-brand\r\n{\r\n  font-size: 30px !important;\r\n  margin-top:10px;\r\n  font-family: 'Titillium Web', sans-serif;\r\n}\r\n#profileheader\r\n{\r\n  margin:10px;\r\n  height:60px;\r\n  width:60px;\r\n  border-radius:50%;\r\n  float:right;\r\n\r\n}\r\n.btn-default\r\n{\r\n  margin-top:10px !important;\r\n  margin-left:-5px !important;\r\n  height:38px !important;\r\n}\r\n.explore\r\n{\r\n  float: right;\r\n  font-size: 25px !important;\r\n  margin:11px !important;\r\n  font-family: 'Titillium Web', sans-serif;\r\n}\r\n#first\r\n{\r\n  height:620px;\r\n}\r\n#second\r\n{\r\n  height:950px;\r\n  overflow-y: scroll;\r\n  background-color: whitesmoke;\r\n  border-radius:5px;\r\n}\r\n#second::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n#third\r\n{\r\n  height:620px;\r\n}\r\n.img\r\n{\r\n  width:100%;\r\n  height:200px;\r\n  padding:5px;\r\n  border-radius:5px;\r\n  border:1px solid whitesmoke;\r\n}\r\n.postname\r\n{\r\n  font-family: 'Titillium Web', sans-serif;\r\n  background-color: white;\r\n  margin:0px !important;\r\n  padding:10px;\r\n  border-radius:7px;\r\n}\r\nli\r\n  {\r\n    padding-left:15px;\r\n    padding-right: 15px;\r\n  }\r\n.username\r\n{\r\n  padding-top:24px;\r\n  float:right;\r\n  font-size:20px;\r\n  color:white;\r\n  font-family: 'Titillium Web', sans-serif;\r\n}\r\n.modal-title\r\n{\r\n  font-family: 'Titillium Web', sans-serif;\r\n  font-size:20px;\r\n  font-weight: bold;\r\n}\r\n.post\r\n{\r\n  margin:8px;\r\n  font-size: 17px;\r\n  padding-left:15px;\r\n  padding-right: 15px;\r\n}\r\n.img1{\r\n  width:100%;\r\n  height:auto;\r\n}\r\n.bt\r\n{\r\n  margin:10px;\r\n  font-family: 'Titillium Web', sans-serif;\r\n  color:black;\r\n  font-weight: bold;\r\n  font-size: 15px;\r\n}\r\n.bt1\r\n{\r\n  margin:10px;\r\n  font-family: 'Titillium Web', sans-serif;\r\n  color:white;\r\n  font-size: 15px;\r\n  background-color:#ff0000ad;\r\n}\r\n#logout\r\n{\r\n  padding:12px;\r\n  font-size:16px;\r\n}\r\n.user\r\n{\r\n  background-color: whitesmoke;\r\n  height:400px;\r\n  overflow-y: scroll;\r\n}\r\ntd\r\n{\r\n  font-family: 'Titillium Web', sans-serif;\r\n  padding: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztJQUVJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLFVBQVU7QUFDZDtBQUNBOzs7RUFHRSw2QkFBNkI7Q0FDOUIsaUNBQWlDO0FBQ2xDO0FBQ0E7O0VBRUUsV0FBVztFQUNYLFdBQVc7O0FBRWI7QUFDQTs7RUFFRSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLHdDQUF3QztBQUMxQztBQUNBOztFQUVFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixXQUFXOztBQUViO0FBQ0E7O0VBRUUsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQixzQkFBc0I7QUFDeEI7QUFDQTs7RUFFRSxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0Qix3Q0FBd0M7QUFDMUM7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7QUFDQTs7RUFFRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBOztFQUVFLFlBQVk7QUFDZDtBQUNBOztFQUVFLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQiwyQkFBMkI7QUFDN0I7QUFDQTs7RUFFRSx3Q0FBd0M7RUFDeEMsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBQ0U7O0lBRUUsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjtBQUNGOztFQUVFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7RUFDWCx3Q0FBd0M7QUFDMUM7QUFDQTs7RUFFRSx3Q0FBd0M7RUFDeEMsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUNBOztFQUVFLFVBQVU7RUFDVixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBOztFQUVFLFdBQVc7RUFDWCx3Q0FBd0M7RUFDeEMsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7O0VBRUUsV0FBVztFQUNYLHdDQUF3QztFQUN4QyxXQUFXO0VBQ1gsZUFBZTtFQUNmLDBCQUEwQjtBQUM1QjtBQUNBOztFQUVFLFlBQVk7RUFDWixjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSx3Q0FBd0M7RUFDeEMsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmltYWdlbG9nb1xyXG57XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbn1cclxuLm5hdmJhci1pbnZlcnNlXHJcbntcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbiBib3JkZXI6MHB4IHNvbGlkIHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhlYWRpbmdsb2dvXHJcbntcclxuICBtYXJnaW46MTBweDtcclxuICBjb2xvcjp3aGl0ZTtcclxuXHJcbn1cclxuLm5hdmJhci1icmFuZFxyXG57XHJcbiAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XHJcbn1cclxuI3Byb2ZpbGVoZWFkZXJcclxue1xyXG4gIG1hcmdpbjoxMHB4O1xyXG4gIGhlaWdodDo2MHB4O1xyXG4gIHdpZHRoOjYwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgZmxvYXQ6cmlnaHQ7XHJcblxyXG59XHJcbi5idG4tZGVmYXVsdFxyXG57XHJcbiAgbWFyZ2luLXRvcDoxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6LTVweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDozOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmV4cGxvcmVcclxue1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcclxuICBtYXJnaW46MTFweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiNmaXJzdFxyXG57XHJcbiAgaGVpZ2h0OjYyMHB4O1xyXG59XHJcbiNzZWNvbmRcclxue1xyXG4gIGhlaWdodDo5NTBweDtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICBib3JkZXItcmFkaXVzOjVweDtcclxufVxyXG4jc2Vjb25kOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4jdGhpcmRcclxue1xyXG4gIGhlaWdodDo2MjBweDtcclxufVxyXG4uaW1nXHJcbntcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDoyMDBweDtcclxuICBwYWRkaW5nOjVweDtcclxuICBib3JkZXItcmFkaXVzOjVweDtcclxuICBib3JkZXI6MXB4IHNvbGlkIHdoaXRlc21va2U7XHJcbn1cclxuLnBvc3RuYW1lXHJcbntcclxuICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjowcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOjEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czo3cHg7XHJcbn1cclxuICBsaVxyXG4gIHtcclxuICAgIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICB9XHJcbi51c2VybmFtZVxyXG57XHJcbiAgcGFkZGluZy10b3A6MjRweDtcclxuICBmbG9hdDpyaWdodDtcclxuICBmb250LXNpemU6MjBweDtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5tb2RhbC10aXRsZVxyXG57XHJcbiAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6MjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ucG9zdFxyXG57XHJcbiAgbWFyZ2luOjhweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgcGFkZGluZy1sZWZ0OjE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxufVxyXG5cclxuLmltZzF7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6YXV0bztcclxufVxyXG4uYnRcclxue1xyXG4gIG1hcmdpbjoxMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5idDFcclxue1xyXG4gIG1hcmdpbjoxMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2ZmMDAwMGFkO1xyXG59XHJcbiNsb2dvdXRcclxue1xyXG4gIHBhZGRpbmc6MTJweDtcclxuICBmb250LXNpemU6MTZweDtcclxufVxyXG4udXNlclxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICBoZWlnaHQ6NDAwcHg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcbnRkXHJcbntcclxuICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _userdata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../userdata.service */ "./src/app/userdata.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");








let UserComponent = class UserComponent {
    constructor(apiservice, toastr, router, http) {
        this.apiservice = apiservice;
        this.toastr = toastr;
        this.router = router;
        this.http = http;
        this.url = ' ';
        this.user = JSON.parse(localStorage.getItem('loginToken'));
        this.recentURL = ' ';
        this.feedStatus = false;
        this.username = [];
        this.afterCurrentUpload = false;
        this.addingFriendStatus = false;
        this.friendStatus = [];
        this.feedPath = [];
        this.obj = {};
        this.likesChecking = new Map();
        this.likes = 0;
        this.likedBy = [];
        this.noOfComments = 0;
        this.deleteStatus = false;
        this.commentData = [];
        this.recent = false;
        this.URL = 'http://localhost:3000/api/upload/' + this.user;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploader"]({
            url: this.URL,
            itemAlias: 'image'
        });
        this.http.get("http://localhost:3000/api/Users/").subscribe((data) => {
            var user = JSON.parse(localStorage.getItem('loginToken'));
            this.username1 = user;
            this.users = data;
            this.username = this.users.users;
            for (var k = 0; k < this.username.length; k++) {
                if (this.username[k].username == this.username1) {
                    this.username.splice(k, 1);
                }
            }
            if (this.username.length == 0) {
                this.addingFriendStatus = true;
            }
            else {
                this.addingFriendStatus = false;
            }
            for (var k = 0; k < this.username.length; k++) {
                this.friendStatus[k] = true;
            }
        });
    }
    ngOnInit() {
        if (!localStorage.getItem("reload")) {
            localStorage.setItem("reload", "true");
            location.reload();
        }
        else {
            localStorage.removeItem("reload");
            this.http.get("http://localhost:3000/api/myfeed/" + this.user).subscribe((data) => {
                this.feed = data;
                this.feedPath = this.feed.users;
                console.log(this.feedPath);
                if (this.feedPath.length == 0) {
                    this.feedStatus = true;
                }
                else if (this.feedPath[0].photos.length == 0 && this.feedPath.length == 1) {
                    this.feedStatus = true;
                }
                else {
                    this.feedStatus = false;
                }
                for (var i = 0; i < this.feedPath.length; i++) {
                    for (var j = 0; j < this.feedPath[i].photos.length; j++) {
                        this.likesChecking.set(this.feedPath[i].photos[j].path, true);
                    }
                }
                for (var i = 0; i < this.feedPath.length; i++) {
                    for (var j = 0; j < this.feedPath[i].photos.length; j++) {
                        let l = this.feedPath[i].photos[j].path;
                        this.likesChecking.set(this.feedPath[i].photos[j].path, true);
                        let p = this.feedPath[i].photos[j].path.substring(22, this.feedPath[i].photos[j].path.length);
                        this.http.get("http://localhost:3000/api/getLikes/" + p).subscribe((data) => {
                            this.likeInfo = data;
                            if (this.likeInfo.data[0] != undefined) {
                                if (this.likeInfo.data[0].likedBy.indexOf(this.username1) !== -1) {
                                    this.likesChecking.set(l, false);
                                }
                            }
                        });
                    }
                }
            });
        }
        this.apiservice.getBooks().subscribe((data) => {
            this.make = data;
        });
        this.uploader.onAfterAddingFile = (file) => {
            file.withCredentials = false;
            if (this.uploader.queue.length > 1) {
                this.uploader.removeFromQueue(this.uploader.queue[0]);
            }
        };
    }
    cl() {
        jquery__WEBPACK_IMPORTED_MODULE_2__("#up").val('');
        this.recent = true;
        this.feedStatus = false;
    }
    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
            this.url = ' ';
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (imgsrc) => {
                this.url = imgsrc.target.result;
                this.recentURL = this.url;
            };
        }
    }
    clearUrl() {
        this.url = ' ';
        jquery__WEBPACK_IMPORTED_MODULE_2__("#up").val('');
    }
    addFriend(obj, index) {
        this.friendStatus[index] = false;
        this.http.post("http://localhost:3000/api/myfriends/" + this.username1, obj).subscribe((data) => {
            this.al = data;
            this.http.get("http://localhost:3000/api/myfeed/" + this.user).subscribe((data) => {
                this.feed = data;
                this.feedPath.splice(0, this.feedPath.length);
                this.feedPath = this.feed.users;
                this.recent = false;
                for (var i = 0; i < this.feedPath.length; i++) {
                    for (var j = 0; j < this.feedPath[i].photos.length; j++) {
                        this.likesChecking.set(this.feedPath[i].photos[j].path, true);
                    }
                }
                for (var i = 0; i < this.feedPath.length; i++) {
                    for (var j = 0; j < this.feedPath[i].photos.length; j++) {
                        let l = this.feedPath[i].photos[j].path;
                        this.likesChecking.set(this.feedPath[i].photos[j].path, true);
                        let p = this.feedPath[i].photos[j].path.substring(22, this.feedPath[i].photos[j].path.length);
                        this.http.get("http://localhost:3000/api/getLikes/" + p).subscribe((data) => {
                            this.likeInfo = data;
                            if (this.likeInfo.data[0] != undefined) {
                                if (this.likeInfo.data[0].likedBy.indexOf(this.username1) !== -1) {
                                    this.likesChecking.set(l, false);
                                }
                            }
                        });
                    }
                }
                if (this.feedPath.length == 0) {
                    this.feedStatus = true;
                }
                else {
                    this.feedStatus = false;
                }
            });
            alert(this.al.message);
        });
    }
    liked(path) {
        this.obj = { "path": path };
        if (this.likesChecking.get(path) == true) {
            this.likesChecking.set(path, false);
            this.http.post("http://localhost:3000/api/like/" + this.username1, this.obj).subscribe((data) => {
                console.log(data);
            });
        }
        else {
            this.likesChecking.set(path, true);
            this.http.post("http://localhost:3000/api/disLike/" + this.username1, this.obj).subscribe((data) => {
                console.log(data);
            });
        }
    }
    getNames(path) {
        let p = path.substring(22, path.length);
        this.http.get("http://localhost:3000/api/getLikes/" + p).subscribe((data) => {
            this.likeByInfo = data;
            if (this.likeByInfo.data[0] != undefined) {
                this.likes = this.likeByInfo.data[0].likes;
                this.likedBy = this.likeByInfo.data[0].likedBy;
            }
        });
    }
    sendPath(path) {
        this.commentPath = path;
    }
    addComment() {
        this.commentObj = {
            "path": this.commentPath,
            "comment": this.commentText,
            "by": this.username1
        };
        this.http.post("http://localhost:3000/api/getComments/", this.commentObj).subscribe((data) => {
            this.commentStatus = data;
            alert(this.commentStatus.message);
            this.commentText = "";
        });
    }
    viewComment(path, name) {
        if (name == this.username1) {
            this.deleteStatus = true;
        }
        else {
            this.deleteStatus = false;
        }
        this.forCommentPath = path.substring(22, path.length);
        this.http.get("http://localhost:3000/api/getLikes/" + this.forCommentPath).subscribe((data) => {
            this.commentInfo = data;
            if (this.commentInfo.data[0].comments.length > 0) {
                this.noOfComments = this.commentInfo.data[0].comments.length;
                this.commentData = this.commentInfo.data[0].comments;
            }
            else {
                this.noOfComments = 0;
                this.commentData = [];
            }
        });
    }
    deleteComment(obj, index) {
        this.commentData.splice(index, 1);
        this.noOfComments = this.commentData.length;
        this.http.post("http://localhost:3000/api/deleteComment/" + index + "/" + this.forCommentPath, obj).subscribe((data) => {
            console.log(data);
        });
    }
};
UserComponent.ctorParameters = () => [
    { type: _userdata_service__WEBPACK_IMPORTED_MODULE_3__["UserdataService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
];
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")).default]
    })
], UserComponent);



/***/ }),

/***/ "./src/app/userdata.service.ts":
/*!*************************************!*\
  !*** ./src/app/userdata.service.ts ***!
  \*************************************/
/*! exports provided: UserdataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdataService", function() { return UserdataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserdataService = class UserdataService {
    constructor(http) {
        this.http = http;
        this._postsURL = "http://makeup-api.herokuapp.com/api/v1/products.json";
    }
    getBooks() {
        return this
            .http
            .get(`${this._postsURL}`);
    }
};
UserdataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserdataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserdataService);



/***/ }),

/***/ "./src/app/userstart/login/login.component.css":
/*!*****************************************************!*\
  !*** ./src/app/userstart/login/login.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container\r\n{\r\n  background-color: red !important;\r\n}\r\n.form-signin {\r\n  max-width:600px;\r\n  padding: 15px 35px 45px;\r\n  margin: 0 auto;\r\n  box-shadow: 2px 2px 8px #060606ab;\r\n  border-radius: 10px;\r\n  background-color: whitesmoke!important;\r\n  box-shadow: 5px 5px 4px 4px rgb(187,10,83) ;\r\n\r\n}\r\n.form-signin-heading\r\n{\r\n  font-family:'Acme', sans-serif;\r\n  color: rgb(187,10,83) ;\r\n\r\n  font-size:50px;\r\n  padding:5px;\r\n}\r\n.form-signin-heading\r\n   {\r\n\t  margin-bottom: 30px;\r\n\t}\r\n.warn\r\n{\r\n  padding:20px;\r\n  font-size:25px;\r\n  font-family:'Acme', sans-serif;\r\n}\r\n.warn1\r\n{\r\n  padding:10px;\r\n  font-size:25px;\r\n  font-family:'Acme', sans-serif;\r\n  color:red;\r\n}\r\na{\r\n  text-decoration: none;\r\n}\r\n.mat-form-field {\r\n  display: block;\r\n  position: relative;\r\n  -webkit-box-flex: 1;\r\n          flex: auto;\r\n  min-width: 0;\r\n  font-family:'Acme', sans-serif;\r\n  font-size:22px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnN0YXJ0L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLHNDQUFzQztFQUN0QywyQ0FBMkM7O0FBRTdDO0FBQ0E7O0VBRUUsOEJBQThCO0VBQzlCLHNCQUFzQjs7RUFFdEIsY0FBYztFQUNkLFdBQVc7QUFDYjtBQUNFOztHQUVDLG1CQUFtQjtDQUNyQjtBQUVEOztFQUVFLFlBQVk7RUFDWixjQUFjO0VBQ2QsOEJBQThCO0FBQ2hDO0FBQ0E7O0VBRUUsWUFBWTtFQUNaLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsU0FBUztBQUNYO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQVU7VUFBVixVQUFVO0VBQ1YsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdXNlcnN0YXJ0L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcclxufVxyXG4uZm9ybS1zaWduaW4ge1xyXG4gIG1heC13aWR0aDo2MDBweDtcclxuICBwYWRkaW5nOiAxNXB4IDM1cHggNDVweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBib3gtc2hhZG93OiAycHggMnB4IDhweCAjMDYwNjA2YWI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiA1cHggNXB4IDRweCA0cHggcmdiKDE4NywxMCw4MykgO1xyXG5cclxufVxyXG4uZm9ybS1zaWduaW4taGVhZGluZ1xyXG57XHJcbiAgZm9udC1mYW1pbHk6J0FjbWUnLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiByZ2IoMTg3LDEwLDgzKSA7XHJcblxyXG4gIGZvbnQtc2l6ZTo1MHB4O1xyXG4gIHBhZGRpbmc6NXB4O1xyXG59XHJcbiAgLmZvcm0tc2lnbmluLWhlYWRpbmdcclxuICAge1xyXG5cdCAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHR9XHJcblxyXG4ud2FyblxyXG57XHJcbiAgcGFkZGluZzoyMHB4O1xyXG4gIGZvbnQtc2l6ZToyNXB4O1xyXG4gIGZvbnQtZmFtaWx5OidBY21lJywgc2Fucy1zZXJpZjtcclxufVxyXG4ud2FybjFcclxue1xyXG4gIHBhZGRpbmc6MTBweDtcclxuICBmb250LXNpemU6MjVweDtcclxuICBmb250LWZhbWlseTonQWNtZScsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6cmVkO1xyXG59XHJcbmF7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsZXg6IGF1dG87XHJcbiAgbWluLXdpZHRoOiAwO1xyXG4gIGZvbnQtZmFtaWx5OidBY21lJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6MjJweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/userstart/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/userstart/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _userdata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../userdata.service */ "./src/app/userdata.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let LoginComponent = class LoginComponent {
    constructor(router, myobj, http) {
        this.router = router;
        this.myobj = myobj;
        this.http = http;
    }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            document.body.style.zoom = "72%";
        });
    }
    onAddPost(form) {
        if (form.invalid) {
            console.log("Error");
            return false;
        }
        const post = { username: form.value.username, password: form.value.pass };
        this.http.post('http://localhost:3000/api/users', post)
            .subscribe(responseData => {
            if (responseData.message == 1) {
                this.b = responseData;
                localStorage.setItem("loginToken", JSON.stringify(this.b.posts.username));
                this.router.navigate(["/user"]);
            }
            else if (responseData.message == 0) {
                console.log("Error");
                this.log = "Username or Password Invalid";
            }
        });
        form.resetForm();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _userdata_service__WEBPACK_IMPORTED_MODULE_4__["UserdataService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/userstart/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/userstart/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/userstart/signup/signup.component.css":
/*!*******************************************************!*\
  !*** ./src/app/userstart/signup/signup.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.form-signup {\r\n  max-width:600px;\r\n  padding: 15px 35px 45px;\r\n  margin: 0 auto;\r\n  background-color: whitesmoke!important;\r\n  box-shadow: 2px 2px 8px #060606ab;\r\n  border-radius: 10px;\r\n  box-shadow: 5px 5px 4px 4px rgb(187,10,83) ;\r\n}\r\n.form-signup-heading\r\n{\r\n  font-family:'Acme', sans-serif;\r\n  color: rgb(187,10,83) ;\r\n  font-size:48px;\r\n  padding:5px;\r\n  margin-bottom: 30px;\r\n}\r\n.mat-form-field {\r\n  display: block;\r\n  position: relative;\r\n  -webkit-box-flex: 1;\r\n          flex: auto;\r\n  min-width: 0;\r\n\r\n  font-family:'Acme', sans-serif;\r\n  font-size:22px;\r\n}\r\n.warn1\r\n{\r\n  padding:15px;\r\n  font-size:28px;\r\n  font-family:'Acme', sans-serif;\r\n  color:red;\r\n}\r\n.warn\r\n{\r\n  padding:20px;\r\n  font-size:25px;\r\n  font-family:'Acme', sans-serif;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnN0YXJ0L3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxzQ0FBc0M7RUFDdEMsaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQiwyQ0FBMkM7QUFDN0M7QUFDQTs7RUFFRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFVO1VBQVYsVUFBVTtFQUNWLFlBQVk7O0VBRVosOEJBQThCO0VBQzlCLGNBQWM7QUFDaEI7QUFDQTs7RUFFRSxZQUFZO0VBQ1osY0FBYztFQUNkLDhCQUE4QjtFQUM5QixTQUFTO0FBQ1g7QUFFQTs7RUFFRSxZQUFZO0VBQ1osY0FBYztFQUNkLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL3VzZXJzdGFydC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm0tc2lnbnVwIHtcclxuICBtYXgtd2lkdGg6NjAwcHg7XHJcbiAgcGFkZGluZzogMTVweCAzNXB4IDQ1cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZSFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggIzA2MDYwNmFiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogNXB4IDVweCA0cHggNHB4IHJnYigxODcsMTAsODMpIDtcclxufVxyXG4uZm9ybS1zaWdudXAtaGVhZGluZ1xyXG57XHJcbiAgZm9udC1mYW1pbHk6J0FjbWUnLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiByZ2IoMTg3LDEwLDgzKSA7XHJcbiAgZm9udC1zaXplOjQ4cHg7XHJcbiAgcGFkZGluZzo1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbGV4OiBhdXRvO1xyXG4gIG1pbi13aWR0aDogMDtcclxuXHJcbiAgZm9udC1mYW1pbHk6J0FjbWUnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZToyMnB4O1xyXG59XHJcbi53YXJuMVxyXG57XHJcbiAgcGFkZGluZzoxNXB4O1xyXG4gIGZvbnQtc2l6ZToyOHB4O1xyXG4gIGZvbnQtZmFtaWx5OidBY21lJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjpyZWQ7XHJcbn1cclxuXHJcbi53YXJuXHJcbntcclxuICBwYWRkaW5nOjIwcHg7XHJcbiAgZm9udC1zaXplOjI1cHg7XHJcbiAgZm9udC1mYW1pbHk6J0FjbWUnLCBzYW5zLXNlcmlmO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/userstart/signup/signup.component.ts":
/*!******************************************************!*\
  !*** ./src/app/userstart/signup/signup.component.ts ***!
  \******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let SignupComponent = class SignupComponent {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            document.body.style.zoom = "70%";
        });
    }
    onAddPost(form) {
        if (form.invalid) {
            console.log("Error");
            return false;
        }
        this.usernew = { email: form.value.mail, username: form.value.username, password: form.value.pass };
        this.http.post('http://localhost:3000/api/newuser', this.usernew)
            .subscribe(responseData => {
            this.data = responseData;
            if (this.data.message) {
                this.error = '';
                this.router.navigate(["/login"]);
            }
            else {
                this.error = "UserName Already Exists.Please try another one. . . .";
            }
        });
        form.resetForm();
    }
};
SignupComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/userstart/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/userstart/signup/signup.component.css")).default]
    })
], SignupComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sahil\OneDrive\Desktop\final\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map