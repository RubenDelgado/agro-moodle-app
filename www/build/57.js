webpackJsonp([57],{

/***/ 2123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 3 modules
var ionic_angular = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/index.js + 1 modules
var _ngx_translate_core = __webpack_require__(3);

// EXTERNAL MODULE: ./src/providers/app.ts
var app = __webpack_require__(12);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(9);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(1);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/core/login/providers/helper.ts
var helper = __webpack_require__(128);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(23);

// CONCATENATED MODULE: ./src/core/login/pages/reconnect/reconnect.ts
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
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
 * Page to enter the user password to reconnect to a site.
 */
var reconnect_CoreLoginReconnectPage = /** @class */ (function () {
    function CoreLoginReconnectPage(navCtrl, navParams, fb, appProvider, sitesProvider, loginHelper, domUtils, eventsProvider) {
        this.navCtrl = navCtrl;
        this.appProvider = appProvider;
        this.sitesProvider = sitesProvider;
        this.loginHelper = loginHelper;
        this.domUtils = domUtils;
        this.eventsProvider = eventsProvider;
        this.showForgottenPassword = true;
        this.showSiteAvatar = false;
        this.isOAuth = false;
        this.viewLeft = false;
        this.eventThrown = false;
        var currentSite = this.sitesProvider.getCurrentSite();
        this.infoSiteUrl = navParams.get('infoSiteUrl');
        this.pageName = navParams.get('pageName');
        this.pageParams = navParams.get('pageParams');
        this.siteConfig = navParams.get('siteConfig');
        this.siteUrl = navParams.get('siteUrl');
        this.siteId = navParams.get('siteId');
        this.isLoggedOut = currentSite && currentSite.isLoggedOut();
        this.credForm = fb.group({
            password: ['', esm5_forms["u" /* Validators */].required]
        });
    }
    /**
     * View loaded.
     */
    CoreLoginReconnectPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.siteConfig) {
            this.getDataFromConfig(this.siteConfig);
        }
        this.sitesProvider.getSite(this.siteId).then(function (site) {
            _this.site = {
                id: site.id,
                fullname: site.infos.fullname,
                avatar: site.infos.userpictureurl
            };
            _this.username = site.infos.username;
            _this.siteUrl = site.infos.siteurl;
            _this.siteName = site.getSiteName();
            // If login was OAuth we should only reach this page if the OAuth method ID has changed.
            _this.isOAuth = site.isOAuth();
            // Show logo instead of avatar if it's a fixed site.
            _this.showSiteAvatar = _this.site.avatar && !_this.loginHelper.getFixedSites();
            return site.getPublicConfig().then(function (config) {
                return _this.sitesProvider.checkApplication(config).then(function () {
                    // Check logoURL if user avatar is not set.
                    if (_this.site.avatar.startsWith(site.infos.siteurl + '/theme/image.php')) {
                        _this.showSiteAvatar = false;
                    }
                    _this.logoUrl = _this.loginHelper.getLogoUrl(config);
                    _this.getDataFromConfig(_this.siteConfig);
                }).catch(function () {
                    _this.cancel();
                });
            }).catch(function () {
                // Ignore errors.
            });
        }).catch(function () {
            // Shouldn't happen. Just leave the view.
            _this.cancel();
        });
    };
    /**
     * View destroyed.
     */
    CoreLoginReconnectPage.prototype.ionViewWillUnload = function () {
        this.viewLeft = true;
        this.eventsProvider.trigger(events["b" /* CoreEventsProvider */].LOGIN_SITE_UNCHECKED, { config: this.siteConfig }, this.siteId);
    };
    /**
     * Get some data (like identity providers) from the site config.
     *
     * @param config Config to use.
     */
    CoreLoginReconnectPage.prototype.getDataFromConfig = function (config) {
        var disabledFeatures = this.loginHelper.getDisabledFeatures(config);
        this.identityProviders = this.loginHelper.getValidIdentityProviders(config, disabledFeatures);
        this.showForgottenPassword = !this.loginHelper.isForgottenPasswordDisabled(config);
        if (!this.eventThrown && !this.viewLeft) {
            this.eventThrown = true;
            this.eventsProvider.trigger(events["b" /* CoreEventsProvider */].LOGIN_SITE_CHECKED, { config: config });
        }
    };
    /**
     * Cancel reconnect.
     *
     * @param e Event.
     */
    CoreLoginReconnectPage.prototype.cancel = function (e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        this.sitesProvider.logout();
    };
    /**
     * Tries to authenticate the user.
     *
     * @param e Event.
     */
    CoreLoginReconnectPage.prototype.login = function (e) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        this.appProvider.closeKeyboard();
        // Get input data.
        var siteUrl = this.siteUrl, username = this.username, password = this.credForm.value.password;
        if (!password) {
            this.domUtils.showErrorModal('core.login.passwordrequired', true);
            return;
        }
        if (!this.appProvider.isOnline()) {
            this.domUtils.showErrorModal('core.networkerrormsg', true);
            return;
        }
        var modal = this.domUtils.showModalLoading();
        // Start the authentication process.
        this.sitesProvider.getUserToken(siteUrl, username, password).then(function (data) {
            return _this.sitesProvider.updateSiteToken(_this.infoSiteUrl, username, data.token, data.privateToken).then(function () {
                _this.domUtils.triggerFormSubmittedEvent(_this.formElement, true);
                // Update site info too because functions might have changed (e.g. unisntall local_mobile).
                return _this.sitesProvider.updateSiteInfoByUrl(_this.infoSiteUrl, username).then(function () {
                    // Reset fields so the data is not in the view anymore.
                    _this.credForm.controls['password'].reset();
                    // Go to the site initial page.
                    return _this.loginHelper.goToSiteInitialPage(_this.navCtrl, _this.pageName, _this.pageParams);
                }).catch(function (error) {
                    if (error.loggedout) {
                        _this.loginHelper.treatUserTokenError(siteUrl, error, username, password);
                    }
                    else {
                        _this.domUtils.showErrorModalDefault(error, 'core.login.errorupdatesite', true);
                    }
                    // Error, go back to login page.
                    _this.cancel();
                });
            });
        }).catch(function (error) {
            _this.loginHelper.treatUserTokenError(siteUrl, error, username, password);
            if (error.loggedout) {
                _this.cancel();
            }
            else if (error.errorcode == 'forcepasswordchangenotice') {
                // Reset password field.
                _this.credForm.controls.password.reset();
            }
        }).finally(function () {
            modal.dismiss();
        });
    };
    /**
     * Forgotten password button clicked.
     */
    CoreLoginReconnectPage.prototype.forgottenPassword = function () {
        this.loginHelper.forgottenPasswordClicked(this.navCtrl, this.siteUrl, this.credForm.value.username, this.siteConfig);
    };
    /**
     * An OAuth button was clicked.
     *
     * @param provider The provider that was clicked.
     */
    CoreLoginReconnectPage.prototype.oauthClicked = function (provider) {
        if (!this.loginHelper.openBrowserForOAuthLogin(this.siteUrl, provider, this.siteConfig.launchurl)) {
            this.domUtils.showErrorModal('Invalid data.');
        }
    };
    __decorate([
        Object(core["_10" /* ViewChild */])('reconnectForm'),
        __metadata("design:type", core["t" /* ElementRef */])
    ], CoreLoginReconnectPage.prototype, "formElement", void 0);
    CoreLoginReconnectPage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-core-login-reconnect',
            templateUrl: 'reconnect.html',
        }),
        __metadata("design:paramtypes", [ionic_angular["s" /* NavController */],
            ionic_angular["t" /* NavParams */],
            esm5_forms["d" /* FormBuilder */],
            app["b" /* CoreAppProvider */],
            sites["b" /* CoreSitesProvider */],
            helper["b" /* CoreLoginHelperProvider */],
            dom["b" /* CoreDomUtilsProvider */],
            events["b" /* CoreEventsProvider */]])
    ], CoreLoginReconnectPage);
    return CoreLoginReconnectPage;
}());

//# sourceMappingURL=reconnect.js.map
// EXTERNAL MODULE: ./src/components/components.module.ts
var components_module = __webpack_require__(26);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(32);

// CONCATENATED MODULE: ./src/core/login/pages/reconnect/reconnect.module.ts
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var reconnect_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var reconnect_module_CoreLoginReconnectPageModule = /** @class */ (function () {
    function CoreLoginReconnectPageModule() {
    }
    CoreLoginReconnectPageModule = reconnect_module___decorate([
        Object(core["J" /* NgModule */])({
            declarations: [
                reconnect_CoreLoginReconnectPage
            ],
            imports: [
                components_module["a" /* CoreComponentsModule */],
                directives_module["a" /* CoreDirectivesModule */],
                ionic_angular["l" /* IonicPageModule */].forChild(reconnect_CoreLoginReconnectPage),
                _ngx_translate_core["b" /* TranslateModule */].forChild()
            ]
        })
    ], CoreLoginReconnectPageModule);
    return CoreLoginReconnectPageModule;
}());

//# sourceMappingURL=reconnect.module.js.map
// EXTERNAL MODULE: ./node_modules/ionic-angular/components/action-sheet/action-sheet-component.ngfactory.js
var action_sheet_component_ngfactory = __webpack_require__(1551);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/alert/alert-component.ngfactory.js
var alert_component_ngfactory = __webpack_require__(1552);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app-root.ngfactory.js
var app_root_ngfactory = __webpack_require__(1553);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/loading/loading-component.ngfactory.js
var loading_component_ngfactory = __webpack_require__(1554);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/modal/modal-component.ngfactory.js
var modal_component_ngfactory = __webpack_require__(1555);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/picker/picker-component.ngfactory.js + 1 modules
var picker_component_ngfactory = __webpack_require__(1556);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/popover/popover-component.ngfactory.js
var popover_component_ngfactory = __webpack_require__(1557);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select-popover-component.ngfactory.js
var select_popover_component_ngfactory = __webpack_require__(1558);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toast/toast-component.ngfactory.js
var toast_component_ngfactory = __webpack_require__(1559);

// EXTERNAL MODULE: ./src/components/context-menu/context-menu-popover.ngfactory.js
var context_menu_popover_ngfactory = __webpack_require__(1560);

// EXTERNAL MODULE: ./src/components/course-picker-menu/course-picker-menu-popover.ngfactory.js
var course_picker_menu_popover_ngfactory = __webpack_require__(1561);

// EXTERNAL MODULE: ./src/components/recaptcha/recaptchamodal.ngfactory.js
var recaptchamodal_ngfactory = __webpack_require__(1562);

// EXTERNAL MODULE: ./src/components/bs-tooltip/bs-tooltip.ngfactory.js
var bs_tooltip_ngfactory = __webpack_require__(1563);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/avatar/avatar.js
var avatar = __webpack_require__(164);

// EXTERNAL MODULE: ./src/directives/external-content.ts
var external_content = __webpack_require__(234);

// EXTERNAL MODULE: ./src/providers/logger.ts
var logger = __webpack_require__(6);

// EXTERNAL MODULE: ./src/providers/filepool.ts
var filepool = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform = __webpack_require__(16);

// EXTERNAL MODULE: ./src/providers/utils/url.ts
var url = __webpack_require__(19);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: ./src/directives/format-text.ts
var format_text = __webpack_require__(49);

// EXTERNAL MODULE: ./src/providers/utils/text.ts
var utils_text = __webpack_require__(10);

// EXTERNAL MODULE: ./src/core/contentlinks/providers/helper.ts
var providers_helper = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(28);

// EXTERNAL MODULE: ./src/components/split-view/split-view.ts
var split_view = __webpack_require__(29);

// EXTERNAL MODULE: ./src/providers/utils/iframe.ts
var iframe = __webpack_require__(42);

// EXTERNAL MODULE: ./src/core/filter/providers/filter.ts
var filter = __webpack_require__(43);

// EXTERNAL MODULE: ./src/core/filter/providers/helper.ts
var filter_providers_helper = __webpack_require__(30);

// EXTERNAL MODULE: ./src/core/filter/providers/delegate.ts
var delegate = __webpack_require__(36);

// EXTERNAL MODULE: ./src/providers/urlschemes.ts
var urlschemes = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/icon/icon.js
var icon = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config_config = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.ngfactory.js + 1 modules
var item_ngfactory = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.js
var item = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/form.js
var util_form = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-reorder.js + 1 modules
var item_reorder = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-content.js
var item_content = __webpack_require__(33);

// EXTERNAL MODULE: ./src/components/show-password/show-password.ngfactory.js
var show_password_ngfactory = __webpack_require__(754);

// EXTERNAL MODULE: ./src/components/show-password/show-password.ts
var show_password = __webpack_require__(387);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.ngfactory.js
var input_ngfactory = __webpack_require__(115);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.js
var input = __webpack_require__(95);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app_app = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/grid.js
var grid = __webpack_require__(155);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/row.js
var row = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/col.js
var col = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list.js + 1 modules
var list = __webpack_require__(87);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(379);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.ngfactory.js
var navbar_ngfactory = __webpack_require__(739);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.js
var navbar = __webpack_require__(216);

// EXTERNAL MODULE: ./src/directives/back-button.ts
var back_button = __webpack_require__(486);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory.js
var toolbar_title_ngfactory = __webpack_require__(740);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.js
var toolbar_title = __webpack_require__(324);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(252);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(185);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(112);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(73);

// CONCATENATED MODULE: ./src/core/login/pages/reconnect/reconnect.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




























































var styles_CoreLoginReconnectPage = [];
var RenderType_CoreLoginReconnectPage = core["_30" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreLoginReconnectPage, data: {} });

function View_CoreLoginReconnectPage_2(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 11, null, null, null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_32" /* ɵeld */](2, 0, null, null, 8, "ion-avatar", [], null, null, null, null, null)), core["_31" /* ɵdid */](3, 16384, null, 0, avatar["a" /* Avatar */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_32" /* ɵeld */](6, 0, null, null, 3, "img", [["class", "avatar"], ["core-external-content", ""], ["onError", "this.src='assets/img/user-avatar.png'"], ["role", "presentation"]], [[8, "alt", 0]], null, null, null, null)), core["_31" /* ɵdid */](7, 4734976, null, 0, external_content["a" /* CoreExternalContentDirective */], [core["t" /* ElementRef */], logger["b" /* CoreLoggerProvider */], filepool["b" /* CoreFilepoolProvider */], platform["a" /* Platform */], sites["b" /* CoreSitesProvider */], dom["b" /* CoreDomUtilsProvider */], url["b" /* CoreUrlUtilsProvider */], utils["b" /* CoreUtilsProvider */]], { siteId: [0, "siteId"], src: [1, "src"] }, null), core["_49" /* ɵpod */](8, { $a: 0 }), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.site.id; var currVal_2 = _co.site.avatar; _ck(_v, 7, 0, currVal_1, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_35" /* ɵinlineInterpolate */](1, "", core["_57" /* ɵunv */](_v, 6, 0, core["_45" /* ɵnov */](_v, 9).transform("core.pictureof", _ck(_v, 8, 0, _co.site.fullname))), ""); _ck(_v, 6, 0, currVal_0); }); }
function View_CoreLoginReconnectPage_4(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 0, "img", [["onError", "this.src='assets/img/login_logo.png'"], ["role", "presentation"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.logoUrl; _ck(_v, 0, 0, currVal_0); }); }
function View_CoreLoginReconnectPage_5(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 0, "img", [["role", "presentation"], ["src", "assets/img/login_logo.png"]], null, null, null, null, null))], null, null); }
function View_CoreLoginReconnectPage_3(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 8, "div", [["class", "core-login-site-logo"]], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginReconnectPage_4)), core["_31" /* ɵdid */](4, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginReconnectPage_5)), core["_31" /* ɵdid */](7, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.logoUrl; _ck(_v, 4, 0, currVal_0); var currVal_1 = !_co.logoUrl; _ck(_v, 7, 0, currVal_1); }, null); }
function View_CoreLoginReconnectPage_6(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 2, "h3", [["class", "core-sitename"], ["padding", ""]], null, null, null, null, null)), (_l()(), core["_32" /* ɵeld */](1, 16777216, null, null, 1, "core-format-text", [], null, null, null, null, null)), core["_31" /* ɵdid */](2, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["t" /* ElementRef */], sites["b" /* CoreSitesProvider */], dom["b" /* CoreDomUtilsProvider */], utils_text["b" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["b" /* CoreUtilsProvider */], url["b" /* CoreUrlUtilsProvider */], logger["b" /* CoreLoggerProvider */], filepool["b" /* CoreFilepoolProvider */], providers_helper["b" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["b" /* CoreEventsProvider */], filter["a" /* CoreFilterProvider */], filter_providers_helper["a" /* CoreFilterHelperProvider */], delegate["a" /* CoreFilterDelegate */], core["_12" /* ViewContainerRef */], urlschemes["b" /* CoreCustomURLSchemesProvider */]], { text: [0, "text"], filter: [1, "filter"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.siteName; var currVal_1 = false; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_CoreLoginReconnectPage_7(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 5, "p", [["class", "core-login-reconnect-warning"]], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_32" /* ɵeld */](2, 0, null, null, 1, "ion-icon", [["name", "alert"], ["padding", ""], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_31" /* ɵdid */](3, 147456, null, 0, icon["a" /* Icon */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_56" /* ɵted */](4, null, [" ", "\n        "])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_1 = "alert"; _ck(_v, 3, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = core["_45" /* ɵnov */](_v, 3)._hidden; _ck(_v, 2, 0, currVal_0); var currVal_2 = core["_57" /* ɵunv */](_v, 4, 0, core["_45" /* ɵnov */](_v, 5).transform("core.login.reconnectdescription")); _ck(_v, 4, 0, currVal_2); }); }
function View_CoreLoginReconnectPage_1(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 18, "div", [["margin-bottom", ""], ["text-center", ""], ["text-wrap", ""]], null, null, null, null, null)), core["_31" /* ɵdid */](1, 278528, null, 0, common["i" /* NgClass */], [core["E" /* IterableDiffers */], core["F" /* KeyValueDiffers */], core["t" /* ElementRef */], core["X" /* Renderer2 */]], { ngClass: [0, "ngClass"] }, null), core["_49" /* ɵpod */](2, { "item-avatar-center": 0 }), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginReconnectPage_2)), core["_31" /* ɵdid */](5, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginReconnectPage_3)), core["_31" /* ɵdid */](8, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginReconnectPage_6)), core["_31" /* ɵdid */](11, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_32" /* ɵeld */](13, 0, null, null, 1, "p", [["class", "core-siteurl"]], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](14, null, ["", ""])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginReconnectPage_7)), core["_31" /* ɵdid */](17, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 2, 0, _co.showSiteAvatar); _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.showSiteAvatar; _ck(_v, 5, 0, currVal_1); var currVal_2 = !_co.showSiteAvatar; _ck(_v, 8, 0, currVal_2); var currVal_3 = _co.siteName; _ck(_v, 11, 0, currVal_3); var currVal_5 = !_co.isLoggedOut; _ck(_v, 17, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_4 = _co.siteUrl; _ck(_v, 14, 0, currVal_4); }); }
function View_CoreLoginReconnectPage_8(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, [[1, 0], ["reconnectForm", 1]], null, 61, "form", [["class", "core-login-form"], ["ion-list", ""], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (core["_45" /* ɵnov */](_v, 2).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (core["_45" /* ɵnov */](_v, 2).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.login($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), core["_31" /* ɵdid */](1, 16384, null, 0, esm5_forms["w" /* ɵbf */], [], null, null), core["_31" /* ɵdid */](2, 540672, null, 0, esm5_forms["h" /* FormGroupDirective */], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), core["_51" /* ɵprd */](2048, null, esm5_forms["b" /* ControlContainer */], null, [esm5_forms["h" /* FormGroupDirective */]]), core["_31" /* ɵdid */](4, 16384, null, 0, esm5_forms["o" /* NgControlStatusGroup */], [esm5_forms["b" /* ControlContainer */]], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_32" /* ɵeld */](6, 0, null, null, 9, "ion-item", [["class", "core-username item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](7, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config_config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 2, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 3, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 4, { _icons: 1 }), core["_31" /* ɵdid */](11, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_32" /* ɵeld */](13, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](14, null, ["", ""])), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_32" /* ɵeld */](17, 0, null, null, 17, "ion-item", [["class", "item item-block"], ["margin-bottom", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](18, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config_config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 5, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 6, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 7, { _icons: 1 }), core["_31" /* ɵdid */](22, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_32" /* ɵeld */](24, 0, null, 3, 9, "core-show-password", [["item-content", ""]], null, null, null, show_password_ngfactory["b" /* View_CoreShowPasswordComponent_0 */], show_password_ngfactory["a" /* RenderType_CoreShowPasswordComponent */])), core["_31" /* ɵdid */](25, 4308992, null, 0, show_password["a" /* CoreShowPasswordComponent */], [core["t" /* ElementRef */], utils["b" /* CoreUtilsProvider */], dom["b" /* CoreDomUtilsProvider */]], { name: [0, "name"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_32" /* ɵeld */](27, 0, null, 0, 5, "ion-input", [["autocomplete", "current-password"], ["class", "core-ioninput-password"], ["formControlName", "password"], ["name", "password"], ["type", "password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["_31" /* ɵdid */](28, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [8, null]], { name: [0, "name"] }, null), core["_51" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_31" /* ɵdid */](30, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), core["_31" /* ɵdid */](31, 5423104, null, 0, input["a" /* TextInput */], [config_config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app_app["a" /* App */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["m" /* NgControl */]], dom_controller["a" /* DomController */]], { type: [0, "type"], clearOnEdit: [1, "clearOnEdit"], autocomplete: [2, "autocomplete"], placeholder: [3, "placeholder"] }, null), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_32" /* ɵeld */](36, 0, null, null, 24, "ion-grid", [["class", "grid"], ["padding", ""]], null, null, null, null, null)), core["_31" /* ɵdid */](37, 16384, null, 0, grid["a" /* Grid */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_32" /* ɵeld */](39, 0, null, null, 20, "ion-row", [["class", "row"]], null, null, null, null, null)), core["_31" /* ɵdid */](40, 16384, null, 0, row["a" /* Row */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_32" /* ɵeld */](42, 0, null, null, 7, "ion-col", [["class", "col"]], null, null, null, null, null)), core["_31" /* ɵdid */](43, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_32" /* ɵeld */](45, 0, null, null, 3, "a", [["block", ""], ["color", "light"], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.cancel($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_31" /* ɵdid */](46, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config_config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { color: [0, "color"], block: [1, "block"] }, null), (_l()(), core["_56" /* ɵted */](47, 0, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_32" /* ɵeld */](51, 0, null, null, 7, "ion-col", [["class", "col"]], null, null, null, null, null)), core["_31" /* ɵdid */](52, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_32" /* ɵeld */](54, 0, null, null, 3, "button", [["block", ""], ["ion-button", ""]], [[8, "disabled", 0]], null, null, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_31" /* ɵdid */](55, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config_config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { block: [0, "block"] }, null), (_l()(), core["_56" /* ɵted */](56, 0, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.credForm; _ck(_v, 2, 0, currVal_7); var currVal_9 = "password"; _ck(_v, 25, 0, currVal_9); var currVal_17 = "password"; _ck(_v, 28, 0, currVal_17); var currVal_18 = "password"; var currVal_19 = false; var currVal_20 = "current-password"; var currVal_21 = core["_35" /* ɵinlineInterpolate */](1, "", core["_57" /* ɵunv */](_v, 31, 3, core["_45" /* ɵnov */](_v, 32).transform("core.login.password")), ""); _ck(_v, 31, 0, currVal_18, currVal_19, currVal_20, currVal_21); var currVal_22 = "light"; var currVal_23 = ""; _ck(_v, 46, 0, currVal_22, currVal_23); var currVal_26 = ""; _ck(_v, 55, 0, currVal_26); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_45" /* ɵnov */](_v, 4).ngClassUntouched; var currVal_1 = core["_45" /* ɵnov */](_v, 4).ngClassTouched; var currVal_2 = core["_45" /* ɵnov */](_v, 4).ngClassPristine; var currVal_3 = core["_45" /* ɵnov */](_v, 4).ngClassDirty; var currVal_4 = core["_45" /* ɵnov */](_v, 4).ngClassValid; var currVal_5 = core["_45" /* ɵnov */](_v, 4).ngClassInvalid; var currVal_6 = core["_45" /* ɵnov */](_v, 4).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = _co.username; _ck(_v, 14, 0, currVal_8); var currVal_10 = core["_45" /* ɵnov */](_v, 30).ngClassUntouched; var currVal_11 = core["_45" /* ɵnov */](_v, 30).ngClassTouched; var currVal_12 = core["_45" /* ɵnov */](_v, 30).ngClassPristine; var currVal_13 = core["_45" /* ɵnov */](_v, 30).ngClassDirty; var currVal_14 = core["_45" /* ɵnov */](_v, 30).ngClassValid; var currVal_15 = core["_45" /* ɵnov */](_v, 30).ngClassInvalid; var currVal_16 = core["_45" /* ɵnov */](_v, 30).ngClassPending; _ck(_v, 27, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16); var currVal_24 = core["_57" /* ɵunv */](_v, 47, 0, core["_45" /* ɵnov */](_v, 48).transform("core.login.cancel")); _ck(_v, 47, 0, currVal_24); var currVal_25 = !_co.credForm.valid; _ck(_v, 54, 0, currVal_25); var currVal_27 = core["_57" /* ɵunv */](_v, 56, 0, core["_45" /* ɵnov */](_v, 57).transform("core.login.loginbutton")); _ck(_v, 56, 0, currVal_27); }); }
function View_CoreLoginReconnectPage_9(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 11, "ion-list", [["class", "core-login-forgotten-password core-login-link"], ["no-lines", ""]], null, null, null, null, null)), core["_31" /* ɵdid */](1, 16384, null, 0, list["a" /* List */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_32" /* ɵeld */](3, 0, null, null, 7, "a", [["class", "item item-block"], ["detail-none", ""], ["ion-item", ""], ["text-center", ""], ["text-wrap", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.forgottenPassword() !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config_config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 8, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 9, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 10, { _icons: 1 }), core["_31" /* ɵdid */](8, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_56" /* ɵted */](9, 2, ["\n            ", "\n        "])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, null, ["\n    "]))], null, function (_ck, _v) { var currVal_0 = core["_57" /* ɵunv */](_v, 9, 0, core["_45" /* ɵnov */](_v, 10).transform("core.login.forgotten")); _ck(_v, 9, 0, currVal_0); }); }
function View_CoreLoginReconnectPage_11(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 8, "button", [["class", "core-oauth-icon item item-block"], ["ion-item", ""], ["text-wrap", ""]], [[8, "title", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.oauthClicked(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config_config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 14, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 15, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 16, { _icons: 1 }), core["_31" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_32" /* ɵeld */](7, 0, null, 0, 0, "img", [["alt", ""], ["height", "32"], ["item-start", ""], ["width", "32"]], [[8, "src", 4]], null, null, null, null)), (_l()(), core["_56" /* ɵted */](8, 2, ["\n            ", "\n        "]))], null, function (_ck, _v) { var currVal_0 = core["_35" /* ɵinlineInterpolate */](1, "", _v.context.$implicit.name, ""); _ck(_v, 0, 0, currVal_0); var currVal_1 = _v.context.$implicit.iconurl; _ck(_v, 7, 0, currVal_1); var currVal_2 = _v.context.$implicit.name; _ck(_v, 8, 0, currVal_2); }); }
function View_CoreLoginReconnectPage_10(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 15, "ion-list", [["class", "core-login-identity-providers"], ["padding-top", ""]], null, null, null, null, null)), core["_31" /* ɵdid */](1, 16384, null, 0, list["a" /* List */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_32" /* ɵeld */](3, 0, null, null, 8, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config_config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 11, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 12, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 13, { _icons: 1 }), core["_31" /* ɵdid */](8, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_32" /* ɵeld */](9, 0, null, 2, 2, "h3", [["class", "item-heading"]], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](10, null, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginReconnectPage_11)), core["_31" /* ɵdid */](14, 802816, null, 0, common["j" /* NgForOf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.identityProviders; _ck(_v, 14, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = core["_57" /* ɵunv */](_v, 10, 0, core["_45" /* ɵnov */](_v, 11).transform("core.login.potentialidps")); _ck(_v, 10, 0, currVal_0); }); }
function View_CoreLoginReconnectPage_12(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 15, "ion-list", [], null, null, null, null, null)), core["_31" /* ɵdid */](1, 16384, null, 0, list["a" /* List */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_32" /* ɵeld */](3, 0, null, null, 11, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config_config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 17, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 18, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 19, { _icons: 1 }), core["_31" /* ɵdid */](8, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_32" /* ɵeld */](10, 0, null, 2, 3, "a", [["block", ""], ["color", "light"], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.cancel($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_31" /* ɵdid */](11, 1097728, [[18, 4]], 0, button_button["a" /* Button */], [[8, ""], config_config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { color: [0, "color"], block: [1, "block"] }, null), (_l()(), core["_56" /* ɵted */](12, 0, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var currVal_0 = "light"; var currVal_1 = ""; _ck(_v, 11, 0, currVal_0, currVal_1); }, function (_ck, _v) { var currVal_2 = core["_57" /* ɵunv */](_v, 12, 0, core["_45" /* ɵnov */](_v, 13).transform("core.login.cancel")); _ck(_v, 12, 0, currVal_2); }); }
function View_CoreLoginReconnectPage_0(_l) { return core["_58" /* ɵvid */](0, [core["_53" /* ɵqud */](671088640, 1, { formElement: 0 }), (_l()(), core["_32" /* ɵeld */](1, 0, null, null, 12, "ion-header", [], null, null, null, null, null)), core["_31" /* ɵdid */](2, 16384, null, 0, toolbar_header["a" /* Header */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_32" /* ɵeld */](4, 0, null, null, 8, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_31" /* ɵdid */](5, 49152, null, 0, navbar["a" /* Navbar */], [app_app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config_config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), core["_31" /* ɵdid */](6, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], translate_service["a" /* TranslateService */], events["b" /* CoreEventsProvider */]], null, null), (_l()(), core["_56" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_32" /* ɵeld */](8, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_31" /* ɵdid */](9, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_56" /* ɵted */](10, 0, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_32" /* ɵeld */](15, 0, null, null, 20, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_31" /* ɵdid */](16, 4374528, null, 0, content["a" /* Content */], [config_config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["W" /* Renderer */], app_app["a" /* App */], keyboard["a" /* Keyboard */], core["N" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_56" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_27" /* ɵand */](16777216, null, 1, 1, null, View_CoreLoginReconnectPage_1)), core["_31" /* ɵdid */](19, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_27" /* ɵand */](16777216, null, 1, 1, null, View_CoreLoginReconnectPage_8)), core["_31" /* ɵdid */](22, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, 1, ["\n\n    "])), (_l()(), core["_56" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_27" /* ɵand */](16777216, null, 1, 1, null, View_CoreLoginReconnectPage_9)), core["_31" /* ɵdid */](26, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, 1, ["\n\n    "])), (_l()(), core["_56" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_27" /* ɵand */](16777216, null, 1, 1, null, View_CoreLoginReconnectPage_10)), core["_31" /* ɵdid */](30, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, 1, ["\n\n    "])), (_l()(), core["_56" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_27" /* ɵand */](16777216, null, 1, 1, null, View_CoreLoginReconnectPage_12)), core["_31" /* ɵdid */](34, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 6, 0); var currVal_5 = _co.site; _ck(_v, 19, 0, currVal_5); var currVal_6 = !_co.isOAuth; _ck(_v, 22, 0, currVal_6); var currVal_7 = (_co.showForgottenPassword && !_co.isOAuth); _ck(_v, 26, 0, currVal_7); var currVal_8 = (_co.identityProviders && _co.identityProviders.length); _ck(_v, 30, 0, currVal_8); var currVal_9 = _co.isOAuth; _ck(_v, 34, 0, currVal_9); }, function (_ck, _v) { var currVal_0 = core["_45" /* ɵnov */](_v, 5)._hidden; var currVal_1 = core["_45" /* ɵnov */](_v, 5)._sbPadding; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_2 = core["_57" /* ɵunv */](_v, 10, 0, core["_45" /* ɵnov */](_v, 11).transform("core.login.reconnect")); _ck(_v, 10, 0, currVal_2); var currVal_3 = core["_45" /* ɵnov */](_v, 16).statusbarPadding; var currVal_4 = core["_45" /* ɵnov */](_v, 16)._hasRefresher; _ck(_v, 15, 0, currVal_3, currVal_4); }); }
function View_CoreLoginReconnectPage_Host_0(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 1, "page-core-login-reconnect", [], null, null, null, View_CoreLoginReconnectPage_0, RenderType_CoreLoginReconnectPage)), core["_31" /* ɵdid */](1, 49152, null, 0, reconnect_CoreLoginReconnectPage, [nav_controller["a" /* NavController */], nav_params["a" /* NavParams */], esm5_forms["d" /* FormBuilder */], app["b" /* CoreAppProvider */], sites["b" /* CoreSitesProvider */], helper["b" /* CoreLoginHelperProvider */], dom["b" /* CoreDomUtilsProvider */], events["b" /* CoreEventsProvider */]], null, null)], null, null); }
var CoreLoginReconnectPageNgFactory = core["_28" /* ɵccf */]("page-core-login-reconnect", reconnect_CoreLoginReconnectPage, View_CoreLoginReconnectPage_Host_0, {}, {}, []);

//# sourceMappingURL=reconnect.ngfactory.js.map
// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.loader.js
var translate_loader = __webpack_require__(375);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.compiler.js
var translate_compiler = __webpack_require__(376);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.parser.js
var translate_parser = __webpack_require__(378);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/missing-translation-handler.js
var missing_translation_handler = __webpack_require__(377);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.store.js
var translate_store = __webpack_require__(485);

// EXTERNAL MODULE: ./node_modules/ionic-angular/module.js
var ionic_angular_module = __webpack_require__(738);

// EXTERNAL MODULE: ./src/pipes/pipes.module.ts + 2 modules
var pipes_module = __webpack_require__(111);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(277);

// CONCATENATED MODULE: ./src/core/login/pages/reconnect/reconnect.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginReconnectPageModuleNgFactory", function() { return CoreLoginReconnectPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 































var CoreLoginReconnectPageModuleNgFactory = core["_29" /* ɵcmf */](reconnect_module_CoreLoginReconnectPageModule, [], function (_l) { return core["_41" /* ɵmod */]([core["_42" /* ɵmpd */](512, core["o" /* ComponentFactoryResolver */], core["_22" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], bs_tooltip_ngfactory["a" /* CoreBSTooltipComponentNgFactory */], CoreLoginReconnectPageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["L" /* NgModuleRef */]]), core["_42" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ɵa */]]]), core["_42" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_42" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_42" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_42" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_42" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_42" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_42" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_42" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_42" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_42" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_42" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_42" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_42" /* ɵmpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_42" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_42" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_42" /* ɵmpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_42" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_42" /* ɵmpd */](512, reconnect_module_CoreLoginReconnectPageModule, reconnect_module_CoreLoginReconnectPageModule, []), core["_42" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_42" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_42" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], reconnect_CoreLoginReconnectPage, [])]); });

//# sourceMappingURL=reconnect.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=57.js.map