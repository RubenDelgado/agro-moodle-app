webpackJsonp([41],{

/***/ 2139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 3 modules
var ionic_angular = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/index.js + 1 modules
var _ngx_translate_core = __webpack_require__(3);

// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__(37);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(9);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(1);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/providers/config.ts
var config = __webpack_require__(129);

// EXTERNAL MODULE: ./src/core/settings/providers/helper.ts
var helper = __webpack_require__(745);

// CONCATENATED MODULE: ./src/core/settings/pages/synchronization/synchronization.ts
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
 * Page that displays the synchronization settings.
 */
var synchronization_CoreSettingsSynchronizationPage = /** @class */ (function () {
    function CoreSettingsSynchronizationPage(configProvider, eventsProvider, sitesProvider, domUtils, settingsHelper, translate) {
        var _this = this;
        this.configProvider = configProvider;
        this.eventsProvider = eventsProvider;
        this.sitesProvider = sitesProvider;
        this.domUtils = domUtils;
        this.settingsHelper = settingsHelper;
        this.translate = translate;
        this.sites = [];
        this.sitesLoaded = false;
        this.currentSiteId = '';
        this.syncOnlyOnWifi = false;
        this.isDestroyed = false;
        this.currentSiteId = this.sitesProvider.getCurrentSiteId();
        this.sitesObserver = this.eventsProvider.on(events["b" /* CoreEventsProvider */].SITE_UPDATED, function (data) {
            _this.sitesProvider.getSite(data.siteId).then(function (site) {
                var siteInfo = site.getInfo();
                var siteEntry = _this.sites.find(function (siteEntry) { return siteEntry.id == site.id; });
                if (siteEntry) {
                    siteEntry.siteUrl = siteInfo.siteurl;
                    siteEntry.siteName = site.getSiteName();
                    siteEntry.fullName = siteInfo.fullname;
                }
            });
        });
    }
    /**
     * View loaded.
     */
    CoreSettingsSynchronizationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.sitesProvider.getSortedSites().then(function (sites) {
            _this.sites = sites;
        }).finally(function () {
            _this.sitesLoaded = true;
        });
        this.configProvider.get(constants["a" /* CoreConstants */].SETTINGS_SYNC_ONLY_ON_WIFI, true).then(function (syncOnlyOnWifi) {
            _this.syncOnlyOnWifi = !!syncOnlyOnWifi;
        });
    };
    /**
     * Called when sync only on wifi setting is enabled or disabled.
     */
    CoreSettingsSynchronizationPage.prototype.syncOnlyOnWifiChanged = function () {
        this.configProvider.set(constants["a" /* CoreConstants */].SETTINGS_SYNC_ONLY_ON_WIFI, this.syncOnlyOnWifi ? 1 : 0);
    };
    /**
     * Syncrhonizes a site.
     *
     * @param siteId Site ID.
     */
    CoreSettingsSynchronizationPage.prototype.synchronize = function (siteId) {
        var _this = this;
        // Using syncOnlyOnWifi false to force manual sync.
        this.settingsHelper.synchronizeSite(false, siteId).catch(function (error) {
            if (_this.isDestroyed) {
                return;
            }
            _this.domUtils.showErrorModalDefault(error, 'core.settings.errorsyncsite', true);
        });
    };
    /**
     * Returns true if site is beeing synchronized.
     *
     * @param siteId Site ID.
     * @return True if site is beeing synchronized, false otherwise.
     */
    CoreSettingsSynchronizationPage.prototype.isSynchronizing = function (siteId) {
        return !!this.settingsHelper.getSiteSyncPromise(siteId);
    };
    /**
     * Show information about sync actions.
     */
    CoreSettingsSynchronizationPage.prototype.showInfo = function () {
        this.domUtils.showAlert(this.translate.instant('core.help'), this.translate.instant('core.settings.synchronizenowhelp'));
    };
    /**
     * Page destroyed.
     */
    CoreSettingsSynchronizationPage.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
        this.sitesObserver && this.sitesObserver.off();
    };
    CoreSettingsSynchronizationPage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-core-settings-synchronization',
            templateUrl: 'synchronization.html',
        }),
        __metadata("design:paramtypes", [config["b" /* CoreConfigProvider */],
            events["b" /* CoreEventsProvider */],
            sites["b" /* CoreSitesProvider */],
            dom["b" /* CoreDomUtilsProvider */],
            helper["a" /* CoreSettingsHelper */],
            _ngx_translate_core["c" /* TranslateService */]])
    ], CoreSettingsSynchronizationPage);
    return CoreSettingsSynchronizationPage;
}());

//# sourceMappingURL=synchronization.js.map
// EXTERNAL MODULE: ./src/components/components.module.ts
var components_module = __webpack_require__(26);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(32);

// EXTERNAL MODULE: ./src/pipes/pipes.module.ts + 2 modules
var pipes_module = __webpack_require__(111);

// CONCATENATED MODULE: ./src/core/settings/pages/synchronization/synchronization.module.ts
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
var synchronization_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var synchronization_module_CoreSettingsSynchronizationPageModule = /** @class */ (function () {
    function CoreSettingsSynchronizationPageModule() {
    }
    CoreSettingsSynchronizationPageModule = synchronization_module___decorate([
        Object(core["J" /* NgModule */])({
            declarations: [
                synchronization_CoreSettingsSynchronizationPage
            ],
            imports: [
                components_module["a" /* CoreComponentsModule */],
                directives_module["a" /* CoreDirectivesModule */],
                pipes_module["a" /* CorePipesModule */],
                ionic_angular["l" /* IonicPageModule */].forChild(synchronization_CoreSettingsSynchronizationPage),
                _ngx_translate_core["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreSettingsSynchronizationPageModule);
    return CoreSettingsSynchronizationPageModule;
}());

//# sourceMappingURL=synchronization.module.js.map
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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config_config = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/icon/icon.js
var icon = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/spinner/spinner.ngfactory.js
var spinner_ngfactory = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/spinner/spinner.js
var spinner = __webpack_require__(104);

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

// EXTERNAL MODULE: ./src/directives/format-text.ts
var format_text = __webpack_require__(49);

// EXTERNAL MODULE: ./src/providers/utils/text.ts
var utils_text = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform = __webpack_require__(16);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils = __webpack_require__(2);

// EXTERNAL MODULE: ./src/providers/utils/url.ts
var url = __webpack_require__(19);

// EXTERNAL MODULE: ./src/providers/logger.ts
var logger = __webpack_require__(6);

// EXTERNAL MODULE: ./src/providers/filepool.ts
var filepool = __webpack_require__(17);

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

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(7);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-item.js
var toolbar_item = __webpack_require__(380);

// EXTERNAL MODULE: ./src/components/navbar-buttons/navbar-buttons.ngfactory.js
var navbar_buttons_ngfactory = __webpack_require__(96);

// EXTERNAL MODULE: ./src/components/navbar-buttons/navbar-buttons.ts
var navbar_buttons = __webpack_require__(88);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-divider.js
var item_divider = __webpack_require__(103);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/label/label.js
var label = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toggle/toggle.ngfactory.js
var toggle_ngfactory = __webpack_require__(742);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toggle/toggle.js + 1 modules
var toggle = __webpack_require__(326);

// EXTERNAL MODULE: ./node_modules/ionic-angular/tap-click/haptic.js
var haptic = __webpack_require__(190);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(23);

// CONCATENATED MODULE: ./src/core/settings/pages/synchronization/synchronization.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





























































var styles_CoreSettingsSynchronizationPage = [];
var RenderType_CoreSettingsSynchronizationPage = core["_30" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreSettingsSynchronizationPage, data: {} });

function View_CoreSettingsSynchronizationPage_2(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 6, "button", [["clear", ""], ["icon-only", ""], ["ion-button", ""], ["item-end", ""]], [[8, "title", 0], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.synchronize(_v.parent.context.$implicit.id) !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_31" /* ɵdid */](1, 1097728, [[13, 4]], 0, button_button["a" /* Button */], [[8, ""], config_config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { clear: [0, "clear"] }, null), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_32" /* ɵeld */](4, 0, null, 0, 1, "ion-icon", [["name", "sync"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_31" /* ɵdid */](5, 147456, null, 0, icon["a" /* Icon */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n            "]))], function (_ck, _v) { var currVal_2 = ""; _ck(_v, 1, 0, currVal_2); var currVal_4 = "sync"; _ck(_v, 5, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.siteName; var currVal_1 = core["_57" /* ɵunv */](_v, 0, 1, core["_45" /* ɵnov */](_v, 2).transform("core.settings.synchronizenow")); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = core["_45" /* ɵnov */](_v, 5)._hidden; _ck(_v, 4, 0, currVal_3); }); }
function View_CoreSettingsSynchronizationPage_3(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 1, "ion-spinner", [["item-end", ""]], [[2, "spinner-paused", null]], null, null, spinner_ngfactory["b" /* View_Spinner_0 */], spinner_ngfactory["a" /* RenderType_Spinner */])), core["_31" /* ɵdid */](1, 114688, null, 0, spinner["a" /* Spinner */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = core["_45" /* ɵnov */](_v, 1)._paused; _ck(_v, 0, 0, currVal_0); }); }
function View_CoreSettingsSynchronizationPage_1(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 22, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], [[2, "core-primary-selected-item", null]], null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config_config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 12, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 13, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 14, { _icons: 1 }), core["_31" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_32" /* ɵeld */](7, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_32" /* ɵeld */](8, 16777216, null, null, 1, "core-format-text", [["clean", "true"]], null, null, null, null, null)), core["_31" /* ɵdid */](9, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["t" /* ElementRef */], sites["b" /* CoreSitesProvider */], dom["b" /* CoreDomUtilsProvider */], utils_text["b" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["b" /* CoreUtilsProvider */], url["b" /* CoreUrlUtilsProvider */], logger["b" /* CoreLoggerProvider */], filepool["b" /* CoreFilepoolProvider */], providers_helper["b" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["b" /* CoreEventsProvider */], filter["a" /* CoreFilterProvider */], filter_providers_helper["a" /* CoreFilterHelperProvider */], delegate["a" /* CoreFilterDelegate */], core["_12" /* ViewContainerRef */], urlschemes["b" /* CoreCustomURLSchemesProvider */]], { text: [0, "text"], siteId: [1, "siteId"], clean: [2, "clean"] }, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_32" /* ɵeld */](11, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](12, null, ["", ""])), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_32" /* ɵeld */](14, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](15, null, ["", ""])), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_27" /* ɵand */](16777216, null, 4, 1, null, View_CoreSettingsSynchronizationPage_2)), core["_31" /* ɵdid */](18, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_27" /* ɵand */](16777216, null, 4, 1, null, View_CoreSettingsSynchronizationPage_3)), core["_31" /* ɵdid */](21, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _v.context.$implicit.siteName; var currVal_2 = _v.context.$implicit.id; var currVal_3 = "true"; _ck(_v, 9, 0, currVal_1, currVal_2, currVal_3); var currVal_6 = !_co.isSynchronizing(_v.context.$implicit.id); _ck(_v, 18, 0, currVal_6); var currVal_7 = _co.isSynchronizing(_v.context.$implicit.id); _ck(_v, 21, 0, currVal_7); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_v.context.$implicit.id == _co.currentSiteId); _ck(_v, 0, 0, currVal_0); var currVal_4 = _v.context.$implicit.fullName; _ck(_v, 12, 0, currVal_4); var currVal_5 = _v.context.$implicit.siteUrl; _ck(_v, 15, 0, currVal_5); }); }
function View_CoreSettingsSynchronizationPage_0(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 17, "ion-header", [], null, null, null, null, null)), core["_31" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_32" /* ɵeld */](3, 0, null, null, 13, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_31" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config_config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), core["_31" /* ɵdid */](5, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], translate_service["a" /* TranslateService */], events["b" /* CoreEventsProvider */]], null, null), (_l()(), core["_56" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_32" /* ɵeld */](7, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_31" /* ɵdid */](8, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_56" /* ɵted */](9, 0, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_32" /* ɵeld */](12, 0, null, 2, 3, "ion-buttons", [["end", ""]], null, null, null, null, null)), core["_31" /* ɵdid */](13, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_53" /* ɵqud */](603979776, 1, { _buttons: 1 }), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_56" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_32" /* ɵeld */](19, 0, null, null, 11, "core-navbar-buttons", [], null, null, null, navbar_buttons_ngfactory["b" /* View_CoreNavBarButtonsComponent_0 */], navbar_buttons_ngfactory["a" /* RenderType_CoreNavBarButtonsComponent */])), core["_31" /* ɵdid */](20, 245760, null, 1, navbar_buttons["a" /* CoreNavBarButtonsComponent */], [core["t" /* ElementRef */], logger["b" /* CoreLoggerProvider */], dom["b" /* CoreDomUtilsProvider */]], null, null), core["_53" /* ɵqud */](603979776, 2, { buttons: 1 }), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_32" /* ɵeld */](23, 0, null, 0, 6, "button", [["icon-only", ""], ["ion-button", ""]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.showInfo() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_31" /* ɵdid */](24, 1097728, [[2, 4]], 0, button_button["a" /* Button */], [[8, ""], config_config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_32" /* ɵeld */](27, 0, null, 0, 1, "ion-icon", [["name", "information-circle"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_31" /* ɵdid */](28, 147456, null, 0, icon["a" /* Icon */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n"])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_32" /* ɵeld */](32, 0, null, null, 54, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_31" /* ɵdid */](33, 4374528, null, 0, content["a" /* Content */], [config_config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["W" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["N" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_56" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_32" /* ɵeld */](35, 0, null, 1, 50, "core-loading", [], null, null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_31" /* ɵdid */](36, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["t" /* ElementRef */], events["b" /* CoreEventsProvider */], utils["b" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_32" /* ɵeld */](38, 0, null, 0, 10, "ion-item-divider", [["class", "item item-divider"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](39, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config_config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 3, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 4, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 5, { _icons: 1 }), core["_31" /* ɵdid */](43, 16384, null, 0, item_divider["a" /* ItemDivider */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_32" /* ɵeld */](45, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](46, null, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_32" /* ɵeld */](50, 0, null, 0, 19, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](51, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config_config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 6, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 7, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 8, { _icons: 1 }), core["_31" /* ɵdid */](55, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_32" /* ɵeld */](57, 0, null, 1, 3, "ion-label", [], null, null, null, null, null)), core["_31" /* ɵdid */](58, 16384, [[6, 4]], 0, label["a" /* Label */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_56" /* ɵted */](59, null, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_32" /* ɵeld */](62, 0, null, 4, 6, "ion-toggle", [["item-end", ""]], [[2, "toggle-disabled", null], [2, "toggle-checked", null], [2, "toggle-activated", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keyup"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keyup" === en)) {
        var pd_0 = (core["_45" /* ɵnov */](_v, 63)._keyup($event) !== false);
        ad = (pd_0 && ad);
    } if (("ngModelChange" === en)) {
        var pd_1 = ((_co.syncOnlyOnWifi = $event) !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = (_co.syncOnlyOnWifiChanged() !== false);
        ad = (pd_2 && ad);
    } return ad; }, toggle_ngfactory["b" /* View_Toggle_0 */], toggle_ngfactory["a" /* RenderType_Toggle */])), core["_31" /* ɵdid */](63, 1228800, null, 0, toggle["a" /* Toggle */], [util_form["a" /* Form */], config_config["a" /* Config */], platform["a" /* Platform */], core["t" /* ElementRef */], core["W" /* Renderer */], haptic["a" /* Haptic */], [2, item["a" /* Item */]], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */], core["N" /* NgZone */]], null, null), core["_51" /* ɵprd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [toggle["a" /* Toggle */]]), core["_31" /* ɵdid */](65, 671744, null, 0, esm5_forms["q" /* NgModel */], [[8, null], [8, null], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), core["_51" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_31" /* ɵdid */](67, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_32" /* ɵeld */](71, 0, null, 0, 10, "ion-item-divider", [["class", "item item-divider"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](72, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config_config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 9, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 10, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 11, { _icons: 1 }), core["_31" /* ɵdid */](76, 16384, null, 0, item_divider["a" /* ItemDivider */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_32" /* ɵeld */](78, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](79, null, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_27" /* ɵand */](16777216, null, 0, 1, null, View_CoreSettingsSynchronizationPage_1)), core["_31" /* ɵdid */](84, 802816, null, 0, common["j" /* NgForOf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_56" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 5, 0); _ck(_v, 20, 0); var currVal_5 = "information-circle"; _ck(_v, 28, 0, currVal_5); var currVal_8 = _co.sitesLoaded; _ck(_v, 36, 0, currVal_8); var currVal_21 = _co.syncOnlyOnWifi; _ck(_v, 65, 0, currVal_21); var currVal_23 = _co.sites; _ck(_v, 84, 0, currVal_23); }, function (_ck, _v) { var currVal_0 = core["_45" /* ɵnov */](_v, 4)._hidden; var currVal_1 = core["_45" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = core["_57" /* ɵunv */](_v, 9, 0, core["_45" /* ɵnov */](_v, 10).transform("core.settings.synchronization")); _ck(_v, 9, 0, currVal_2); var currVal_3 = core["_57" /* ɵunv */](_v, 23, 0, core["_45" /* ɵnov */](_v, 25).transform("core.info")); _ck(_v, 23, 0, currVal_3); var currVal_4 = core["_45" /* ɵnov */](_v, 28)._hidden; _ck(_v, 27, 0, currVal_4); var currVal_6 = core["_45" /* ɵnov */](_v, 33).statusbarPadding; var currVal_7 = core["_45" /* ɵnov */](_v, 33)._hasRefresher; _ck(_v, 32, 0, currVal_6, currVal_7); var currVal_9 = core["_57" /* ɵunv */](_v, 46, 0, core["_45" /* ɵnov */](_v, 47).transform("core.settings.syncsettings")); _ck(_v, 46, 0, currVal_9); var currVal_10 = core["_57" /* ɵunv */](_v, 59, 0, core["_45" /* ɵnov */](_v, 60).transform("core.settings.enablesyncwifi")); _ck(_v, 59, 0, currVal_10); var currVal_11 = core["_45" /* ɵnov */](_v, 63)._disabled; var currVal_12 = core["_45" /* ɵnov */](_v, 63)._value; var currVal_13 = core["_45" /* ɵnov */](_v, 63)._activated; var currVal_14 = core["_45" /* ɵnov */](_v, 67).ngClassUntouched; var currVal_15 = core["_45" /* ɵnov */](_v, 67).ngClassTouched; var currVal_16 = core["_45" /* ɵnov */](_v, 67).ngClassPristine; var currVal_17 = core["_45" /* ɵnov */](_v, 67).ngClassDirty; var currVal_18 = core["_45" /* ɵnov */](_v, 67).ngClassValid; var currVal_19 = core["_45" /* ɵnov */](_v, 67).ngClassInvalid; var currVal_20 = core["_45" /* ɵnov */](_v, 67).ngClassPending; _ck(_v, 62, 0, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20); var currVal_22 = core["_57" /* ɵunv */](_v, 79, 0, core["_45" /* ɵnov */](_v, 80).transform("core.settings.sites")); _ck(_v, 79, 0, currVal_22); }); }
function View_CoreSettingsSynchronizationPage_Host_0(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 1, "page-core-settings-synchronization", [], null, null, null, View_CoreSettingsSynchronizationPage_0, RenderType_CoreSettingsSynchronizationPage)), core["_31" /* ɵdid */](1, 180224, null, 0, synchronization_CoreSettingsSynchronizationPage, [config["b" /* CoreConfigProvider */], events["b" /* CoreEventsProvider */], sites["b" /* CoreSitesProvider */], dom["b" /* CoreDomUtilsProvider */], helper["a" /* CoreSettingsHelper */], translate_service["a" /* TranslateService */]], null, null)], null, null); }
var CoreSettingsSynchronizationPageNgFactory = core["_28" /* ɵccf */]("page-core-settings-synchronization", synchronization_CoreSettingsSynchronizationPage, View_CoreSettingsSynchronizationPage_Host_0, {}, {}, []);

//# sourceMappingURL=synchronization.ngfactory.js.map
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

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(277);

// CONCATENATED MODULE: ./src/core/settings/pages/synchronization/synchronization.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsSynchronizationPageModuleNgFactory", function() { return CoreSettingsSynchronizationPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 































var CoreSettingsSynchronizationPageModuleNgFactory = core["_29" /* ɵcmf */](synchronization_module_CoreSettingsSynchronizationPageModule, [], function (_l) { return core["_41" /* ɵmod */]([core["_42" /* ɵmpd */](512, core["o" /* ComponentFactoryResolver */], core["_22" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], bs_tooltip_ngfactory["a" /* CoreBSTooltipComponentNgFactory */], CoreSettingsSynchronizationPageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["L" /* NgModuleRef */]]), core["_42" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ɵa */]]]), core["_42" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_42" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_42" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_42" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_42" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_42" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_42" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_42" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_42" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_42" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_42" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_42" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_42" /* ɵmpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_42" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_42" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_42" /* ɵmpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_42" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_42" /* ɵmpd */](512, synchronization_module_CoreSettingsSynchronizationPageModule, synchronization_module_CoreSettingsSynchronizationPageModule, []), core["_42" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_42" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_42" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], synchronization_CoreSettingsSynchronizationPage, [])]); });

//# sourceMappingURL=synchronization.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=41.js.map