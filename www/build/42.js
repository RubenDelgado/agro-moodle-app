webpackJsonp([42],{

/***/ 2138:
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

// EXTERNAL MODULE: ./src/core/settings/providers/helper.ts
var helper = __webpack_require__(745);

// CONCATENATED MODULE: ./src/core/settings/pages/space-usage/space-usage.ts
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};





/**
 * Page that displays the space usage settings.
 */
var space_usage_CoreSettingsSpaceUsagePage = /** @class */ (function () {
    function CoreSettingsSpaceUsagePage(sitesProvider, settingsHelper, domUtils, translate) {
        this.sitesProvider = sitesProvider;
        this.settingsHelper = settingsHelper;
        this.domUtils = domUtils;
        this.translate = translate;
        this.loaded = false;
        this.sites = [];
        this.currentSiteId = '';
        this.totals = {
            cacheEntries: 0,
            spaceUsage: 0
        };
        this.currentSiteId = this.sitesProvider.getCurrentSiteId();
    }
    /**
     * View loaded.
     */
    CoreSettingsSpaceUsagePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loadSiteData().finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Convenience function to load site data/usage and calculate the totals.
     *
     * @return Resolved when done.
     */
    CoreSettingsSpaceUsagePage.prototype.loadSiteData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var totalSize, totalEntries, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        totalSize = 0;
                        totalEntries = 0;
                        _a = this;
                        return [4 /*yield*/, this.sitesProvider.getSortedSites()];
                    case 1:
                        _a.sites = _b.sent();
                        // Get space usage.
                        return [4 /*yield*/, Promise.all(this.sites.map(function (site) { return __awaiter(_this, void 0, void 0, function () {
                                var siteInfo;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.settingsHelper.getSiteSpaceUsage(site.id)];
                                        case 1:
                                            siteInfo = _a.sent();
                                            site.cacheEntries = siteInfo.cacheEntries;
                                            site.spaceUsage = siteInfo.spaceUsage;
                                            totalSize += (site.spaceUsage ? parseInt(site.spaceUsage, 10) : 0);
                                            totalEntries += (site.cacheEntries ? parseInt(site.cacheEntries, 10) : 0);
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 2:
                        // Get space usage.
                        _b.sent();
                        this.totals.spaceUsage = totalSize;
                        this.totals.cacheEntries = totalEntries;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     */
    CoreSettingsSpaceUsagePage.prototype.refreshData = function (refresher) {
        this.loadSiteData().finally(function () {
            refresher.complete();
        });
    };
    /**
     * Deletes files of a site and the tables that can be cleared.
     *
     * @param siteData Site object with space usage.
     */
    CoreSettingsSpaceUsagePage.prototype.deleteSiteStorage = function (siteData) {
        var _this = this;
        this.settingsHelper.deleteSiteStorage(siteData.siteName, siteData.id).then(function (newInfo) {
            _this.totals.spaceUsage -= siteData.spaceUsage - newInfo.spaceUsage;
            _this.totals.spaceUsage -= siteData.cacheEntries - newInfo.cacheEntries;
            siteData.spaceUsage = newInfo.spaceUsage;
            siteData.cacheEntries = newInfo.cacheEntries;
        }).catch(function () {
            // Ignore cancelled confirmation modal.
        });
    };
    /**
     * Show information about space usage actions.
     */
    CoreSettingsSpaceUsagePage.prototype.showInfo = function () {
        this.domUtils.showAlert(this.translate.instant('core.help'), this.translate.instant('core.settings.spaceusagehelp'));
    };
    CoreSettingsSpaceUsagePage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-core-settings-space-usage',
            templateUrl: 'space-usage.html',
        }),
        __metadata("design:paramtypes", [sites["b" /* CoreSitesProvider */],
            helper["a" /* CoreSettingsHelper */],
            dom["b" /* CoreDomUtilsProvider */],
            _ngx_translate_core["c" /* TranslateService */]])
    ], CoreSettingsSpaceUsagePage);
    return CoreSettingsSpaceUsagePage;
}());

//# sourceMappingURL=space-usage.js.map
// EXTERNAL MODULE: ./src/components/components.module.ts
var components_module = __webpack_require__(26);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(32);

// EXTERNAL MODULE: ./src/pipes/pipes.module.ts + 2 modules
var pipes_module = __webpack_require__(111);

// CONCATENATED MODULE: ./src/core/settings/pages/space-usage/space-usage.module.ts
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
var space_usage_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var space_usage_module_CoreSettingsSpaceUsagePageModule = /** @class */ (function () {
    function CoreSettingsSpaceUsagePageModule() {
    }
    CoreSettingsSpaceUsagePageModule = space_usage_module___decorate([
        Object(core["J" /* NgModule */])({
            declarations: [
                space_usage_CoreSettingsSpaceUsagePage
            ],
            imports: [
                components_module["a" /* CoreComponentsModule */],
                directives_module["a" /* CoreDirectivesModule */],
                pipes_module["a" /* CorePipesModule */],
                ionic_angular["l" /* IonicPageModule */].forChild(space_usage_CoreSettingsSpaceUsagePage),
                _ngx_translate_core["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreSettingsSpaceUsagePageModule);
    return CoreSettingsSpaceUsagePageModule;
}());

//# sourceMappingURL=space-usage.module.js.map
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

// EXTERNAL MODULE: ./src/directives/format-text.ts
var format_text = __webpack_require__(49);

// EXTERNAL MODULE: ./src/providers/utils/text.ts
var utils_text = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(18);

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

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(9);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/icon/icon.js
var icon = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-divider.js
var item_divider = __webpack_require__(103);

// EXTERNAL MODULE: ./src/pipes/bytes-to-size.ts
var bytes_to_size = __webpack_require__(1584);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher.js
var refresher = __webpack_require__(163);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher-content.ngfactory.js
var refresher_content_ngfactory = __webpack_require__(217);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher-content.js
var refresher_content = __webpack_require__(178);

// EXTERNAL MODULE: ./src/components/loading/loading.ngfactory.js
var loading_ngfactory = __webpack_require__(57);

// EXTERNAL MODULE: ./src/components/loading/loading.ts
var loading = __webpack_require__(54);

// CONCATENATED MODULE: ./src/core/settings/pages/space-usage/space-usage.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

























































var styles_CoreSettingsSpaceUsagePage = [];
var RenderType_CoreSettingsSpaceUsagePage = core["_30" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreSettingsSpaceUsagePage, data: {} });

function View_CoreSettingsSpaceUsagePage_2(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 2, "p", [["text-end", ""]], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](1, null, ["", ""])), core["_50" /* ɵppd */](2, 1)], null, function (_ck, _v) { var currVal_0 = core["_57" /* ɵunv */](_v, 1, 0, _ck(_v, 2, 0, core["_45" /* ɵnov */](_v.parent.parent, 0), _v.parent.context.$implicit.spaceUsage)); _ck(_v, 1, 0, currVal_0); }); }
function View_CoreSettingsSpaceUsagePage_1(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 27, "ion-item", [["class", "item item-block"]], [[2, "core-primary-selected-item", null]], null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 3, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 4, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 5, { _icons: 1 }), core["_31" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_32" /* ɵeld */](7, 0, null, 2, 2, "h2", [["text-wrap", ""]], null, null, null, null, null)), (_l()(), core["_32" /* ɵeld */](8, 16777216, null, null, 1, "core-format-text", [["clean", "true"]], null, null, null, null, null)), core["_31" /* ɵdid */](9, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["t" /* ElementRef */], sites["b" /* CoreSitesProvider */], dom["b" /* CoreDomUtilsProvider */], utils_text["b" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["b" /* CoreUtilsProvider */], url["b" /* CoreUrlUtilsProvider */], logger["b" /* CoreLoggerProvider */], filepool["b" /* CoreFilepoolProvider */], providers_helper["b" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["b" /* CoreEventsProvider */], filter["a" /* CoreFilterProvider */], filter_providers_helper["a" /* CoreFilterHelperProvider */], delegate["a" /* CoreFilterDelegate */], core["_12" /* ViewContainerRef */], urlschemes["b" /* CoreCustomURLSchemesProvider */]], { text: [0, "text"], siteId: [1, "siteId"], clean: [2, "clean"] }, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_32" /* ɵeld */](11, 0, null, 2, 1, "p", [["text-wrap", ""]], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](12, null, ["", ""])), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_32" /* ɵeld */](14, 0, null, 4, 4, "div", [["item-end", ""]], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_CoreSettingsSpaceUsagePage_2)), core["_31" /* ɵdid */](17, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_32" /* ɵeld */](20, 0, null, 4, 6, "button", [["clear", ""], ["color", "danger"], ["icon-only", ""], ["ion-button", ""], ["item-end", ""]], [[8, "hidden", 0], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.deleteSiteStorage(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_31" /* ɵdid */](21, 1097728, [[4, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { color: [0, "color"], clear: [1, "clear"] }, null), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_32" /* ɵeld */](24, 0, null, 0, 1, "ion-icon", [["name", "trash"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_31" /* ɵdid */](25, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n        "]))], function (_ck, _v) { var currVal_1 = _v.context.$implicit.siteName; var currVal_2 = _v.context.$implicit.id; var currVal_3 = "true"; _ck(_v, 9, 0, currVal_1, currVal_2, currVal_3); var currVal_5 = (_v.context.$implicit.spaceUsage != null); _ck(_v, 17, 0, currVal_5); var currVal_8 = "danger"; var currVal_9 = ""; _ck(_v, 21, 0, currVal_8, currVal_9); var currVal_11 = "trash"; _ck(_v, 25, 0, currVal_11); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_v.context.$implicit.id == _co.currentSiteId); _ck(_v, 0, 0, currVal_0); var currVal_4 = _v.context.$implicit.fullName; _ck(_v, 12, 0, currVal_4); var currVal_6 = ((!_v.context.$implicit.spaceUsage > "0") && (!_v.context.$implicit.cacheEntries > "0")); var currVal_7 = core["_57" /* ɵunv */](_v, 20, 1, core["_45" /* ɵnov */](_v, 22).transform("core.settings.deletesitefilestitle")); _ck(_v, 20, 0, currVal_6, currVal_7); var currVal_10 = core["_45" /* ɵnov */](_v, 25)._hidden; _ck(_v, 24, 0, currVal_10); }); }
function View_CoreSettingsSpaceUsagePage_3(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 17, "ion-item-divider", [["class", "item item-divider"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 6, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 7, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 8, { _icons: 1 }), core["_31" /* ɵdid */](5, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_32" /* ɵeld */](7, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](8, null, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_32" /* ɵeld */](11, 0, null, 4, 5, "div", [["item-end", ""]], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_32" /* ɵeld */](13, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](14, null, ["", ""])), core["_50" /* ɵppd */](15, 1), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n        "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_57" /* ɵunv */](_v, 8, 0, core["_45" /* ɵnov */](_v, 9).transform("core.settings.total")); _ck(_v, 8, 0, currVal_0); var currVal_1 = core["_57" /* ɵunv */](_v, 14, 0, _ck(_v, 15, 0, core["_45" /* ɵnov */](_v.parent, 0), _co.totals.spaceUsage)); _ck(_v, 14, 0, currVal_1); }); }
function View_CoreSettingsSpaceUsagePage_0(_l) { return core["_58" /* ɵvid */](0, [core["_48" /* ɵpid */](0, bytes_to_size["a" /* CoreBytesToSizePipe */], [logger["b" /* CoreLoggerProvider */], utils_text["b" /* CoreTextUtilsProvider */]]), (_l()(), core["_32" /* ɵeld */](1, 0, null, null, 17, "ion-header", [], null, null, null, null, null)), core["_31" /* ɵdid */](2, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_32" /* ɵeld */](4, 0, null, null, 13, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_31" /* ɵdid */](5, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), core["_31" /* ɵdid */](6, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], translate_service["a" /* TranslateService */], events["b" /* CoreEventsProvider */]], null, null), (_l()(), core["_56" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_32" /* ɵeld */](8, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_31" /* ɵdid */](9, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_56" /* ɵted */](10, 0, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_32" /* ɵeld */](13, 0, null, 2, 3, "ion-buttons", [["end", ""]], null, null, null, null, null)), core["_31" /* ɵdid */](14, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_53" /* ɵqud */](603979776, 1, { _buttons: 1 }), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_56" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_32" /* ɵeld */](20, 0, null, null, 11, "core-navbar-buttons", [], null, null, null, navbar_buttons_ngfactory["b" /* View_CoreNavBarButtonsComponent_0 */], navbar_buttons_ngfactory["a" /* RenderType_CoreNavBarButtonsComponent */])), core["_31" /* ɵdid */](21, 245760, null, 1, navbar_buttons["a" /* CoreNavBarButtonsComponent */], [core["t" /* ElementRef */], logger["b" /* CoreLoggerProvider */], dom["b" /* CoreDomUtilsProvider */]], null, null), core["_53" /* ɵqud */](603979776, 2, { buttons: 1 }), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_32" /* ɵeld */](24, 0, null, 0, 6, "button", [["icon-only", ""], ["ion-button", ""]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.showInfo() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_31" /* ɵdid */](25, 1097728, [[2, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_32" /* ɵeld */](28, 0, null, 0, 1, "ion-icon", [["name", "information-circle"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_31" /* ɵdid */](29, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n"])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_32" /* ɵeld */](33, 0, null, null, 20, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_31" /* ɵdid */](34, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["W" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["N" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_56" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_32" /* ɵeld */](36, 0, null, 2, 6, "ion-refresher", [], [[2, "refresher-active", null], [4, "top", null]], [[null, "ionRefresh"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ionRefresh" === en)) {
        var pd_0 = (_co.refreshData($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), core["_31" /* ɵdid */](37, 212992, null, 0, refresher["a" /* Refresher */], [platform["a" /* Platform */], content["a" /* Content */], core["N" /* NgZone */], gesture_controller["l" /* GestureController */]], { enabled: [0, "enabled"] }, { ionRefresh: "ionRefresh" }), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_32" /* ɵeld */](39, 0, null, null, 2, "ion-refresher-content", [], [[1, "state", 0]], null, null, refresher_content_ngfactory["b" /* View_RefresherContent_0 */], refresher_content_ngfactory["a" /* RenderType_RefresherContent */])), core["_31" /* ɵdid */](40, 114688, null, 0, refresher_content["a" /* RefresherContent */], [refresher["a" /* Refresher */], config["a" /* Config */]], { pullingText: [0, "pullingText"] }, null), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_56" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_32" /* ɵeld */](44, 0, null, 1, 8, "core-loading", [], null, null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_31" /* ɵdid */](45, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["t" /* ElementRef */], events["b" /* CoreEventsProvider */], utils["b" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_27" /* ɵand */](16777216, null, 0, 1, null, View_CoreSettingsSpaceUsagePage_1)), core["_31" /* ɵdid */](48, 802816, null, 0, common["j" /* NgForOf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_27" /* ɵand */](16777216, null, 0, 1, null, View_CoreSettingsSpaceUsagePage_3)), core["_31" /* ɵdid */](51, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_56" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 6, 0); _ck(_v, 21, 0); var currVal_5 = "information-circle"; _ck(_v, 29, 0, currVal_5); var currVal_10 = _co.loaded; _ck(_v, 37, 0, currVal_10); var currVal_12 = core["_35" /* ɵinlineInterpolate */](1, "", core["_57" /* ɵunv */](_v, 40, 0, core["_45" /* ɵnov */](_v, 41).transform("core.pulltorefresh")), ""); _ck(_v, 40, 0, currVal_12); var currVal_13 = _co.loaded; _ck(_v, 45, 0, currVal_13); var currVal_14 = _co.sites; _ck(_v, 48, 0, currVal_14); var currVal_15 = _co.totals; _ck(_v, 51, 0, currVal_15); }, function (_ck, _v) { var currVal_0 = core["_45" /* ɵnov */](_v, 5)._hidden; var currVal_1 = core["_45" /* ɵnov */](_v, 5)._sbPadding; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_2 = core["_57" /* ɵunv */](_v, 10, 0, core["_45" /* ɵnov */](_v, 11).transform("core.settings.spaceusage")); _ck(_v, 10, 0, currVal_2); var currVal_3 = core["_57" /* ɵunv */](_v, 24, 0, core["_45" /* ɵnov */](_v, 26).transform("core.info")); _ck(_v, 24, 0, currVal_3); var currVal_4 = core["_45" /* ɵnov */](_v, 29)._hidden; _ck(_v, 28, 0, currVal_4); var currVal_6 = core["_45" /* ɵnov */](_v, 34).statusbarPadding; var currVal_7 = core["_45" /* ɵnov */](_v, 34)._hasRefresher; _ck(_v, 33, 0, currVal_6, currVal_7); var currVal_8 = (core["_45" /* ɵnov */](_v, 37).state !== "inactive"); var currVal_9 = core["_45" /* ɵnov */](_v, 37)._top; _ck(_v, 36, 0, currVal_8, currVal_9); var currVal_11 = core["_45" /* ɵnov */](_v, 40).r.state; _ck(_v, 39, 0, currVal_11); }); }
function View_CoreSettingsSpaceUsagePage_Host_0(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 1, "page-core-settings-space-usage", [], null, null, null, View_CoreSettingsSpaceUsagePage_0, RenderType_CoreSettingsSpaceUsagePage)), core["_31" /* ɵdid */](1, 49152, null, 0, space_usage_CoreSettingsSpaceUsagePage, [sites["b" /* CoreSitesProvider */], helper["a" /* CoreSettingsHelper */], dom["b" /* CoreDomUtilsProvider */], translate_service["a" /* TranslateService */]], null, null)], null, null); }
var CoreSettingsSpaceUsagePageNgFactory = core["_28" /* ɵccf */]("page-core-settings-space-usage", space_usage_CoreSettingsSpaceUsagePage, View_CoreSettingsSpaceUsagePage_Host_0, {}, {}, []);

//# sourceMappingURL=space-usage.ngfactory.js.map
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

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(277);

// CONCATENATED MODULE: ./src/core/settings/pages/space-usage/space-usage.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsSpaceUsagePageModuleNgFactory", function() { return CoreSettingsSpaceUsagePageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 































var CoreSettingsSpaceUsagePageModuleNgFactory = core["_29" /* ɵcmf */](space_usage_module_CoreSettingsSpaceUsagePageModule, [], function (_l) { return core["_41" /* ɵmod */]([core["_42" /* ɵmpd */](512, core["o" /* ComponentFactoryResolver */], core["_22" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], bs_tooltip_ngfactory["a" /* CoreBSTooltipComponentNgFactory */], CoreSettingsSpaceUsagePageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["L" /* NgModuleRef */]]), core["_42" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ɵa */]]]), core["_42" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_42" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_42" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_42" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_42" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_42" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_42" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_42" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_42" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_42" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_42" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_42" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_42" /* ɵmpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_42" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_42" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_42" /* ɵmpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_42" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_42" /* ɵmpd */](512, space_usage_module_CoreSettingsSpaceUsagePageModule, space_usage_module_CoreSettingsSpaceUsagePageModule, []), core["_42" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_42" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_42" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], space_usage_CoreSettingsSpaceUsagePage, [])]); });

//# sourceMappingURL=space-usage.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=42.js.map