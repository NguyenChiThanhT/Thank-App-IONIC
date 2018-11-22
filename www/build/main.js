webpackJsonp([0],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Core components
//key api : 277d0b7a9b5b45c5a11391878c2c0f0d


// RxJS


var NewsApiService = /** @class */ (function () {
    function NewsApiService(http) {
        this.http = http;
        this.data = null;
    }
    NewsApiService.prototype.getPerson = function () {
        var url = "http://nguyenchithanhfpt.atwebpages.com/api/getalldata-thanksapp.php";
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .then(function (resJSON) { return resJSON.person; })
            .catch(function (error) { return console.log('Une erreur est survenue ' + error); });
    };
    //update countstart
    NewsApiService.prototype.updateCountStart = function (parmas) {
        var headers = new Headers();
        headers.append("Access-Control-Allow-Credentials", "true");
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Methods", "PUT");
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        // @ts-ignore
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var url = "http://nguyenchithanhfpt.atwebpages.com/api/updatecountstart.php";
        return this.http.put(url, parmas, requestOptions)
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJSON) { return resJSON; })
            .catch(function (error) { return console.log(error); });
    };
    // updatecount
    NewsApiService.prototype.updateCount = function (parmas) {
        var headers = new Headers();
        headers.append("Access-Control-Allow-Credentials", "true");
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Methods", "PUT");
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        // @ts-ignore
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var url = "http://nguyenchithanhfpt.atwebpages.com/api/updatecount.php";
        return this.http.put(url, parmas, requestOptions)
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJSON) { return resJSON; })
            .catch(function (error) { return console.log(error); });
    };
    //update list person
    NewsApiService.prototype.updatePerson = function (parmas) {
        var headers = new Headers();
        headers.append("Access-Control-Allow-Credentials", "true");
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Methods", "PUT");
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        // @ts-ignore
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var url = "http://nguyenchithanhfpt.atwebpages.com/api/updatecount.php";
        return this.http.put(url, parmas, requestOptions)
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJSON) { return resJSON; })
            .catch(function (error) { return console.log(error); });
    };
    //login
    NewsApiService.prototype.login = function (parmas) {
        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        // @ts-ignore
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var url = "http://moblaze.net/service_login/login";
        return this.http.post(url, parmas, requestOptions)
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJSON) { return resJSON; })
            .catch(function (error) { return console.log(error); });
    };
    NewsApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], NewsApiService);
    return NewsApiService;
    var _a;
}());

//# sourceMappingURL=newsapi.service.js.map

/***/ }),

/***/ 161:
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
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 206:
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
webpackEmptyAsyncContext.id = 206;

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_newsapi_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_like_modal_like__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_countstart_list_countstart__ = __webpack_require__(257);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, newsApiService, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.newsApiService = newsApiService;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.newCountStart = 0;
        this.newsApiService.getPerson()
            .then(function (data) {
            _this.listPerson = data;
        })
            .catch(function (err) { return console.log(err); });
    };
    HomePage.prototype.showDailogLike = function (countstart, id) {
        var _this = this;
        this.newCountStart = parseInt(countstart) + 1;
        // console.log(this.newCountStart);
        this.postData = {
            "countstart": this.newCountStart,
            "id": id
        };
        this.newsApiService.updateCountStart(this.postData)
            .then(function (data) {
            _this.listPerson = data;
            var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_like_modal_like__["a" /* ModalLikePage */], {
                "listperson": _this.listPerson,
                "id": id,
                "countstart": _this.newCountStart
            });
            modal.present();
        })
            .catch(function (err) { return console.log(err); });
    };
    //show modal
    HomePage.prototype.showPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Login',
            message: "Enter a name for this new album you're so keen on adding",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'password'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.postData = {
                            "email": "admin@admin.com",
                            "password": "adminadmin"
                            // "password": data.title
                        };
                        _this.newsApiService.login(_this.postData)
                            .then(function (res) {
                            // console.log(res);
                            _this.message = res[1].response.message;
                            if (_this.message === "Login Success") {
                                _this.goToListcount();
                            }
                            else {
                                alert("that bai");
                            }
                        })
                            .catch(function (err) { return console.log(err); });
                        console.log('Saved clicked', data);
                    }
                }
            ]
        });
        prompt.present();
    };
    //goto list count
    HomePage.prototype.goToListcount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__list_countstart_list_countstart__["a" /* ListCountstartPage */], { "listcount": this.listPerson }); //goto listcount
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/ThankApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n       ThanksApp\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="showPrompt()">\n        <ion-icon name="person"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-card *ngFor="let item of listPerson">\n    <ion-item>\n      <ion-avatar item-start>\n        <img [src]="item.image" (click)="showDailogLike(item.countstart,item.id)">\n      </ion-avatar>\n      <h2>{{item.name}}</h2>\n      <p>{{item.email}}</p>\n    </ion-item>\n\n    <img [src]="item.urlImage">\n\n    <ion-card-content>\n      <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>{{item.countstart}}</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>4 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col center text-center>\n        <ion-note>\n          11h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/ThankApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_newsapi_service__["a" /* NewsApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_newsapi_service__["a" /* NewsApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalLikePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_newsapi_service__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ModalLikePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalLikePage = /** @class */ (function () {
    function ModalLikePage(navCtrl, navParams, viewCtrl, newsApiService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.newsApiService = newsApiService;
        this.gaming = '';
        this.person = this.navParams.get("listperson");
        this.id = this.navParams.get("id");
        this.countstart = this.navParams.get("countstart");
        this.newSida = this.person.map(function (data, index) {
            return data;
        });
    }
    ModalLikePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var index = this.newSida.findIndex(function (e) { return e.id == _this.id; });
        this.newSida.splice(index, 1);
        //console.log(this.newSida);
    };
    ModalLikePage.prototype.dismiss = function () {
        var _this = this;
        this.viewCtrl.dismiss();
        this.postData = {
            "countstart": parseInt(this.countstart) - 1,
            "id": this.id
        };
        this.newsApiService.updateCountStart(this.postData)
            .then(function (data) {
            _this.person = data;
        })
            .catch(function (err) { return console.log(err); });
    };
    ModalLikePage.prototype.gamingCancel = function () {
        // this.postData = {
        //   "countstart": parseInt(this.countstart) -1,
        //   "id": this.id
        // }
        // this.newsApiService.updateCountStart(this.postData)
        //   .then(data =>console.log(data))
        //   .catch(err =>console.log(err))
        console.log('Gaming Select, Cancel');
    };
    ModalLikePage.prototype.gamingChange = function (selectedValue) {
        this.arrcount = selectedValue.split(',');
        this.id = this.arrcount[0];
        this.newcount = this.arrcount[1];
        // console.log('Gaming Select, Change value:', selectedValue);
    };
    ModalLikePage.prototype.gotoOK = function () {
        var _this = this;
        this.postData = {
            "count": parseInt(this.newcount) - 1,
            "id": parseInt(this.id)
        };
        this.newsApiService.updateCount(this.postData)
            .then(function (data) {
            _this.newSida = data;
            //console.log(data)
            _this.viewCtrl.dismiss();
        })
            .catch(function (err) { return console.log(err); });
    };
    ModalLikePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-like',template:/*ion-inline-start:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/ThankApp/src/pages/modal-like/modal-like.html"*/'<div style="width: 80%;height: 25%;margin-top: 40%;margin-left: 10%;margin-right: 10%;">\n  <ion-header style="position: relative;">\n    <ion-toolbar>\n      <ion-title>\n        Description\n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n          <span ion-text color="primary" showWhen="ios">Cancel</span>\n          <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item>\n        <ion-label >Sender</ion-label>\n        <ion-select [(ngModel)]="gaming" (ionCancel)="gamingCancel()" (ionChange)="gamingChange($event)">\n          <ion-option [value]="item.id +\',\'+ item.count" *ngFor="let item of newSida">{{item.name}} &nbsp;&nbsp;{{item.count}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item text-wrap>\n        <ion-input type="text" value="" placeholder="Content"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button full style="height: 5.6rem;font-size: 20px;" (click)="gotoOK()">OK</button>\n  </ion-content>\n</div>\n'/*ion-inline-end:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/ThankApp/src/pages/modal-like/modal-like.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_newsapi_service__["a" /* NewsApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_newsapi_service__["a" /* NewsApiService */]) === "function" && _d || Object])
    ], ModalLikePage);
    return ModalLikePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=modal-like.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListCountstartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_picker__ = __webpack_require__(698);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListCountstartPage = /** @class */ (function () {
    function ListCountstartPage(navCtrl, navParams, file, storage, filePicker) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.file = file;
        this.storage = storage;
        this.filePicker = filePicker;
        this.listcount = this.navParams.get("listcount");
        this.listcount.sort(function (a, b) {
            return b.countstart - a.countstart;
        });
    }
    ListCountstartPage.prototype.ionViewDidLoad = function () {
    };
    //dowload file csv
    ListCountstartPage.prototype.dowloadFile = function () {
        var _this = this;
        this.listcount = [];
        this.filePicker.pickFile()
            .then(function (uri) {
            var correctPath = uri.substr(0, uri.lastIndexOf('/') + 1);
            var convertPath = "file://" + correctPath;
            var currentName = uri.substring(uri.lastIndexOf('/') + 1);
            _this.file.readAsText(convertPath, currentName)
                .then(function (data) {
                var lines = data.split('\r\n');
                var headers = lines[0].split(",");
                var result = [];
                for (var i = 1; i < lines.length; i++) {
                    var obj = {};
                    var row = lines[i].split(",");
                    for (var j = 0; j < row.length; j++) {
                        obj[headers[j]] = row[j];
                    }
                    result.push(obj);
                }
                result.pop();
                result.map(function (e) {
                    _this.listcount.push(e);
                });
                console.log(result);
            })
                .catch(function (err) { return console.log("err"); });
        })
            .catch(function (err) { return console.log('Error', "rr"); });
    };
    ListCountstartPage.prototype.savefile = function () {
        var _this = this;
        var csvData = this.ConvertToCSV(this.listcount);
        var opt = { replace: true };
        this.file.writeFile(this.file.documentsDirectory, 'data.csv', csvData, opt)
            .then(function (data) {
            var sessinID = new Date().getTime();
            var nameref = _this.storage.ref('file').child(sessinID + ".csv");
            _this.file.readAsDataURL(_this.file.documentsDirectory, 'data.csv')
                .then(function (res) {
                return nameref.putString(res, 'data_url')
                    .then(function (ha) {
                    console.log(ha);
                });
            })
                .catch(function (err) { return console.log(err); });
        })
            .catch(function (err) { return console.log(err); });
    };
    ListCountstartPage.prototype.ConvertToCSV = function (objArray) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
        var row = "";
        for (var index in objArray[0]) {
            //Now convert each value to string and comma-separated
            row += index + ',';
        }
        row = row.slice(0, -1);
        //append Label row with line break
        str += row + '\r\n';
        for (var i = 0; i < array.length; i++) {
            var line = '';
            for (var index in array[i]) {
                if (line != '')
                    line += ',';
                line += array[i][index];
            }
            str += line + '\r\n';
        }
        return str;
    };
    ListCountstartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-countstart',template:/*ion-inline-start:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/ThankApp/src/pages/list-countstart/list-countstart.html"*/'<!--\n  Generated template for the ListCountstartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons margin-left="10px">\n      <button ion-button icon-only (click)="dowloadFile()">\n        <ion-icon name="cloud-download"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>List sort</ion-title>\n    <ion-buttons end margin-right="10px">\n      <button ion-button icon-only (click)="savefile()">\n        <ion-icon name="cloud-upload"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngFor="let item of listcount">\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img [src]="item.image">\n      </ion-thumbnail>\n      <h2>{{item.name}}</h2>\n      <p>{{item.email}}</p>\n      <button ion-button clear item-end>{{item.countstart}}</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/ThankApp/src/pages/list-countstart/list-countstart.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__["AngularFireStorage"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__["AngularFireStorage"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_picker__["a" /* IOSFilePicker */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_picker__["a" /* IOSFilePicker */]) === "function" && _e || Object])
    ], ListCountstartPage);
    return ListCountstartPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=list-countstart.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(361);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_newsapi_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_modal_like_modal_like__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_list_countstart_list_countstart__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__firebase_config__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_storage__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angularfire2_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_chooser__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_file_picker__ = __webpack_require__(698);
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
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_modal_like_modal_like__["a" /* ModalLikePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_list_countstart_list_countstart__["a" /* ListCountstartPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_13__firebase_config__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_storage__["AngularFireStorageModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_modal_like_modal_like__["a" /* ModalLikePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_list_countstart_list_countstart__["a" /* ListCountstartPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_file_picker__["a" /* IOSFilePicker */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_8__services_newsapi_service__["a" /* NewsApiService */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(252);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/ThankApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/ThankApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyCrW1LbKCz60DUpUh79bRMUGRthI4lxyCc",
    authDomain: "fir-reactnative-f5c43.firebaseapp.com",
    databaseURL: "https://fir-reactnative-f5c43.firebaseio.com",
    projectId: "fir-reactnative-f5c43",
    storageBucket: "fir-reactnative-f5c43.appspot.com",
    messagingSenderId: "413850205635"
};
//# sourceMappingURL=firebase.config.js.map

/***/ })

},[356]);
//# sourceMappingURL=main.js.map