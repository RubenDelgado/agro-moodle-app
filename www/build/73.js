webpackJsonp([73],{

/***/ 2101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 3 modules
var ionic_angular = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/index.js + 1 modules
var _ngx_translate_core = __webpack_require__(3);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(1);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/core/contentlinks/providers/delegate.ts
var delegate = __webpack_require__(66);

// EXTERNAL MODULE: ./src/core/contentlinks/providers/helper.ts
var helper = __webpack_require__(14);

// EXTERNAL MODULE: ./src/core/login/providers/helper.ts
var providers_helper = __webpack_require__(128);

// CONCATENATED MODULE: ./src/core/contentlinks/pages/choose-site/choose-site.ts
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
 * Page to display the list of sites to choose one to perform a content link action.
 */
var choose_site_CoreContentLinksChooseSitePage = /** @class */ (function () {
    function CoreContentLinksChooseSitePage(navCtrl, navParams, contentLinksDelegate, sitesProvider, domUtils, translate, contentLinksHelper, loginHelper) {
        this.navCtrl = navCtrl;
        this.contentLinksDelegate = contentLinksDelegate;
        this.sitesProvider = sitesProvider;
        this.domUtils = domUtils;
        this.translate = translate;
        this.contentLinksHelper = contentLinksHelper;
        this.loginHelper = loginHelper;
        this.url = navParams.get('url');
    }
    /**
     * Component being initialized.
     */
    CoreContentLinksChooseSitePage.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.url) {
            return this.leaveView();
        }
        // Check if it's the root URL.
        this.sitesProvider.isStoredRootURL(this.url).then(function (data) {
            if (data.site) {
                // It's the root URL.
                _this.isRootURL = true;
                return data.siteIds;
            }
            else if (data.siteIds.length) {
                // Not root URL, but the URL belongs to at least 1 site. Check if there is any action to treat the link.
                return _this.contentLinksDelegate.getActionsFor(_this.url).then(function (actions) {
                    _this.action = _this.contentLinksHelper.getFirstValidAction(actions);
                    if (!_this.action) {
                        return Promise.reject(_this.translate.instant('core.contentlinks.errornoactions'));
                    }
                    return _this.action.sites;
                });
            }
            else {
                // No sites to treat the URL.
                return Promise.reject(_this.translate.instant('core.contentlinks.errornosites'));
            }
        }).then(function (siteIds) {
            // Get the sites that can perform the action.
            return _this.sitesProvider.getSites(siteIds);
        }).then(function (sites) {
            _this.sites = sites;
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'core.contentlinks.errornosites', true);
            _this.leaveView();
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Cancel.
     */
    CoreContentLinksChooseSitePage.prototype.cancel = function () {
        this.leaveView();
    };
    /**
     * Perform the action on a certain site.
     *
     * @param siteId Site ID.
     */
    CoreContentLinksChooseSitePage.prototype.siteClicked = function (siteId) {
        if (this.isRootURL) {
            this.loginHelper.redirect('', {}, siteId);
        }
        else {
            this.action.action(siteId, this.navCtrl);
        }
    };
    /**
     * Cancel and leave the view.
     */
    CoreContentLinksChooseSitePage.prototype.leaveView = function () {
        var _this = this;
        this.sitesProvider.logout().finally(function () {
            _this.navCtrl.setRoot('CoreLoginSitesPage');
        });
    };
    CoreContentLinksChooseSitePage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-core-content-links-choose-site',
            templateUrl: 'choose-site.html',
        }),
        __metadata("design:paramtypes", [ionic_angular["s" /* NavController */], ionic_angular["t" /* NavParams */], delegate["a" /* CoreContentLinksDelegate */],
            sites["b" /* CoreSitesProvider */], dom["b" /* CoreDomUtilsProvider */], _ngx_translate_core["c" /* TranslateService */],
            helper["b" /* CoreContentLinksHelperProvider */], providers_helper["b" /* CoreLoginHelperProvider */]])
    ], CoreContentLinksChooseSitePage);
    return CoreContentLinksChooseSitePage;
}());

//# sourceMappingURL=choose-site.js.map
// EXTERNAL MODULE: ./src/components/components.module.ts
var components_module = __webpack_require__(26);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(32);

// CONCATENATED MODULE: ./src/core/contentlinks/pages/choose-site/choose-site.module.ts
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
var choose_site_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var choose_site_module_CoreContentLinksChooseSitePageModule = /** @class */ (function () {
    function CoreContentLinksChooseSitePageModule() {
    }
    CoreContentLinksChooseSitePageModule = choose_site_module___decorate([
        Object(core["J" /* NgModule */])({
            declarations: [
                choose_site_CoreContentLinksChooseSitePage
            ],
            imports: [
                components_module["a" /* CoreComponentsModule */],
                directives_module["a" /* CoreDirectivesModule */],
                ionic_angular["l" /* IonicPageModule */].forChild(choose_site_CoreContentLinksChooseSitePage),
                _ngx_translate_core["b" /* TranslateModule */].forChild()
            ]
        })
    ], CoreContentLinksChooseSitePageModule);
    return CoreContentLinksChooseSitePageModule;
}());

//# sourceMappingURL=choose-site.module.js.map
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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.ngfactory.js + 1 modules
var item_ngfactory = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.js
var item = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/form.js
var util_form = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-reorder.js + 1 modules
var item_reorder = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-content.js
var item_content = __webpack_require__(33);

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

// EXTERNAL MODULE: ./src/directives/format-text.ts
var format_text = __webpack_require__(49);

// EXTERNAL MODULE: ./src/providers/utils/text.ts
var utils_text = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(28);

// EXTERNAL MODULE: ./src/components/split-view/split-view.ts
var split_view = __webpack_require__(29);

// EXTERNAL MODULE: ./src/providers/utils/iframe.ts
var iframe = __webpack_require__(42);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(9);

// EXTERNAL MODULE: ./src/core/filter/providers/filter.ts
var filter = __webpack_require__(43);

// EXTERNAL MODULE: ./src/core/filter/providers/helper.ts
var filter_providers_helper = __webpack_require__(30);

// EXTERNAL MODULE: ./src/core/filter/providers/delegate.ts
var providers_delegate = __webpack_require__(36);

// EXTERNAL MODULE: ./src/providers/urlschemes.ts
var urlschemes = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(379);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.ngfactory.js
var navbar_ngfactory = __webpack_require__(739);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.js
var navbar = __webpack_require__(216);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app = __webpack_require__(35);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(112);

// EXTERNAL MODULE: ./src/components/loading/loading.ngfactory.js
var loading_ngfactory = __webpack_require__(57);

// EXTERNAL MODULE: ./src/components/loading/loading.ts
var loading = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list.js + 1 modules
var list = __webpack_require__(87);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(73);

// CONCATENATED MODULE: ./src/core/contentlinks/pages/choose-site/choose-site.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





















































var styles_CoreContentLinksChooseSitePage = [];
var RenderType_CoreContentLinksChooseSitePage = core["_30" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreContentLinksChooseSitePage, data: {} });

function View_CoreContentLinksChooseSitePage_1(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 25, "a", [["class", "item item-block"], ["detail-none", ""], ["ion-item", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.siteClicked(_v.context.$implicit.id) !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 4, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 5, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 6, { _icons: 1 }), core["_31" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_32" /* ɵeld */](7, 0, null, 0, 7, "ion-avatar", [["item-start", ""]], null, null, null, null, null)), core["_31" /* ɵdid */](8, 16384, null, 0, avatar["a" /* Avatar */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_32" /* ɵeld */](10, 0, null, null, 3, "img", [["core-external-content", ""], ["onError", "this.src='assets/img/user-avatar.png'"], ["role", "presentation"]], [[8, "alt", 0]], null, null, null, null)), core["_31" /* ɵdid */](11, 4734976, null, 0, external_content["a" /* CoreExternalContentDirective */], [core["t" /* ElementRef */], logger["b" /* CoreLoggerProvider */], filepool["b" /* CoreFilepoolProvider */], platform["a" /* Platform */], sites["b" /* CoreSitesProvider */], dom["b" /* CoreDomUtilsProvider */], url["b" /* CoreUrlUtilsProvider */], utils["b" /* CoreUtilsProvider */]], { siteId: [0, "siteId"], src: [1, "src"] }, null), core["_49" /* ɵpod */](12, { $a: 0 }), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_32" /* ɵeld */](16, 0, null, 2, 1, "h2", [], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](17, null, ["", ""])), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_32" /* ɵeld */](19, 0, null, 2, 2, "p", [], null, null, null, null, null)), (_l()(), core["_32" /* ɵeld */](20, 16777216, null, null, 1, "core-format-text", [["clean", "true"]], null, null, null, null, null)), core["_31" /* ɵdid */](21, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["t" /* ElementRef */], sites["b" /* CoreSitesProvider */], dom["b" /* CoreDomUtilsProvider */], utils_text["b" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["b" /* CoreUtilsProvider */], url["b" /* CoreUrlUtilsProvider */], logger["b" /* CoreLoggerProvider */], filepool["b" /* CoreFilepoolProvider */], helper["b" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["b" /* CoreEventsProvider */], filter["a" /* CoreFilterProvider */], filter_providers_helper["a" /* CoreFilterHelperProvider */], providers_delegate["a" /* CoreFilterDelegate */], core["_12" /* ViewContainerRef */], urlschemes["b" /* CoreCustomURLSchemesProvider */]], { text: [0, "text"], siteId: [1, "siteId"], clean: [2, "clean"] }, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_32" /* ɵeld */](23, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](24, null, ["", ""])), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "]))], function (_ck, _v) { var currVal_1 = _v.context.$implicit.id; var currVal_2 = _v.context.$implicit.avatar; _ck(_v, 11, 0, currVal_1, currVal_2); var currVal_4 = _v.context.$implicit.siteName; var currVal_5 = _v.context.$implicit.id; var currVal_6 = "true"; _ck(_v, 21, 0, currVal_4, currVal_5, currVal_6); }, function (_ck, _v) { var currVal_0 = core["_35" /* ɵinlineInterpolate */](1, "", core["_57" /* ɵunv */](_v, 10, 0, core["_45" /* ɵnov */](_v, 13).transform("core.pictureof", _ck(_v, 12, 0, _v.context.$implicit.fullname))), ""); _ck(_v, 10, 0, currVal_0); var currVal_3 = _v.context.$implicit.fullName; _ck(_v, 17, 0, currVal_3); var currVal_7 = _v.context.$implicit.siteUrl; _ck(_v, 24, 0, currVal_7); }); }
function View_CoreContentLinksChooseSitePage_0(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 12, "ion-header", [], null, null, null, null, null)), core["_31" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_32" /* ɵeld */](3, 0, null, null, 8, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_31" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), core["_31" /* ɵdid */](5, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], translate_service["a" /* TranslateService */], events["b" /* CoreEventsProvider */]], null, null), (_l()(), core["_56" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_32" /* ɵeld */](7, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_31" /* ɵdid */](8, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_56" /* ɵted */](9, 0, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_32" /* ɵeld */](14, 0, null, null, 41, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_31" /* ɵdid */](15, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["W" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["N" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_56" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_32" /* ɵeld */](17, 0, null, 1, 37, "core-loading", [], null, null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_31" /* ɵdid */](18, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["t" /* ElementRef */], events["b" /* CoreEventsProvider */], utils["b" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_32" /* ɵeld */](20, 0, null, 0, 33, "ion-list", [], null, null, null, null, null)), core["_31" /* ɵdid */](21, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_32" /* ɵeld */](23, 0, null, null, 13, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](24, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 1, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 2, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 3, { _icons: 1 }), core["_31" /* ɵdid */](28, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_32" /* ɵeld */](30, 0, null, 2, 2, "p", [["class", "item-heading"]], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](31, null, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_32" /* ɵeld */](34, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](35, null, ["", ""])), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_CoreContentLinksChooseSitePage_1)), core["_31" /* ɵdid */](39, 802816, null, 0, common["j" /* NgForOf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_32" /* ɵeld */](41, 0, null, null, 11, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](42, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 7, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 8, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 9, { _icons: 1 }), core["_31" /* ɵdid */](46, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_32" /* ɵeld */](48, 0, null, 2, 3, "button", [["block", ""], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.cancel() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_31" /* ɵdid */](49, 1097728, [[8, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { block: [0, "block"] }, null), (_l()(), core["_56" /* ɵted */](50, 0, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_56" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 5, 0); var currVal_5 = _co.loaded; _ck(_v, 18, 0, currVal_5); var currVal_8 = _co.sites; _ck(_v, 39, 0, currVal_8); var currVal_9 = ""; _ck(_v, 49, 0, currVal_9); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_45" /* ɵnov */](_v, 4)._hidden; var currVal_1 = core["_45" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = core["_57" /* ɵunv */](_v, 9, 0, core["_45" /* ɵnov */](_v, 10).transform("core.contentlinks.chooseaccount")); _ck(_v, 9, 0, currVal_2); var currVal_3 = core["_45" /* ɵnov */](_v, 15).statusbarPadding; var currVal_4 = core["_45" /* ɵnov */](_v, 15)._hasRefresher; _ck(_v, 14, 0, currVal_3, currVal_4); var currVal_6 = core["_57" /* ɵunv */](_v, 31, 0, core["_45" /* ɵnov */](_v, 32).transform("core.contentlinks.chooseaccounttoopenlink")); _ck(_v, 31, 0, currVal_6); var currVal_7 = _co.url; _ck(_v, 35, 0, currVal_7); var currVal_10 = core["_57" /* ɵunv */](_v, 50, 0, core["_45" /* ɵnov */](_v, 51).transform("core.login.cancel")); _ck(_v, 50, 0, currVal_10); }); }
function View_CoreContentLinksChooseSitePage_Host_0(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 1, "page-core-content-links-choose-site", [], null, null, null, View_CoreContentLinksChooseSitePage_0, RenderType_CoreContentLinksChooseSitePage)), core["_31" /* ɵdid */](1, 114688, null, 0, choose_site_CoreContentLinksChooseSitePage, [nav_controller["a" /* NavController */], nav_params["a" /* NavParams */], delegate["a" /* CoreContentLinksDelegate */], sites["b" /* CoreSitesProvider */], dom["b" /* CoreDomUtilsProvider */], translate_service["a" /* TranslateService */], helper["b" /* CoreContentLinksHelperProvider */], providers_helper["b" /* CoreLoginHelperProvider */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CoreContentLinksChooseSitePageNgFactory = core["_28" /* ɵccf */]("page-core-content-links-choose-site", choose_site_CoreContentLinksChooseSitePage, View_CoreContentLinksChooseSitePage_Host_0, {}, {}, []);

//# sourceMappingURL=choose-site.ngfactory.js.map
// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(23);

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

// CONCATENATED MODULE: ./src/core/contentlinks/pages/choose-site/choose-site.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreContentLinksChooseSitePageModuleNgFactory", function() { return CoreContentLinksChooseSitePageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 































var CoreContentLinksChooseSitePageModuleNgFactory = core["_29" /* ɵcmf */](choose_site_module_CoreContentLinksChooseSitePageModule, [], function (_l) { return core["_41" /* ɵmod */]([core["_42" /* ɵmpd */](512, core["o" /* ComponentFactoryResolver */], core["_22" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], bs_tooltip_ngfactory["a" /* CoreBSTooltipComponentNgFactory */], CoreContentLinksChooseSitePageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["L" /* NgModuleRef */]]), core["_42" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ɵa */]]]), core["_42" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_42" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_42" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_42" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_42" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_42" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_42" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_42" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_42" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_42" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_42" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_42" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_42" /* ɵmpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_42" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_42" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_42" /* ɵmpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_42" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_42" /* ɵmpd */](512, choose_site_module_CoreContentLinksChooseSitePageModule, choose_site_module_CoreContentLinksChooseSitePageModule, []), core["_42" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_42" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_42" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], choose_site_CoreContentLinksChooseSitePage, [])]); });

//# sourceMappingURL=choose-site.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=73.js.map