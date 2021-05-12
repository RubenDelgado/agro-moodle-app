webpackJsonp([20],{

/***/ 2111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 3 modules
var ionic_angular = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/index.js + 1 modules
var _ngx_translate_core = __webpack_require__(3);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/core/courses/providers/courses.ts
var courses = __webpack_require__(55);

// CONCATENATED MODULE: ./src/core/courses/pages/search/search.ts
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
 * Page that allows searching for courses.
 */
var search_CoreCoursesSearchPage = /** @class */ (function () {
    function CoreCoursesSearchPage(domUtils, coursesProvider) {
        this.domUtils = domUtils;
        this.coursesProvider = coursesProvider;
        this.total = 0;
        this.loadMoreError = false;
        this.page = 0;
        this.currentSearch = '';
    }
    /**
     * Search a new text.
     *
     * @param text The text to search.
     */
    CoreCoursesSearchPage.prototype.search = function (text) {
        this.currentSearch = text;
        this.courses = undefined;
        this.page = 0;
        var modal = this.domUtils.showModalLoading('core.searching', true);
        this.searchCourses().finally(function () {
            modal.dismiss();
        });
    };
    /**
     * Clear search box.
     *
     * @param e The event object.
     */
    CoreCoursesSearchPage.prototype.clearSearch = function (e) {
        this.currentSearch = '';
        this.courses = undefined;
        this.page = 0;
        this.total = 0;
    };
    /**
     * Load more results.
     *
     * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
     */
    CoreCoursesSearchPage.prototype.loadMoreResults = function (infiniteComplete) {
        this.searchCourses().finally(function () {
            infiniteComplete && infiniteComplete();
        });
    };
    /**
     * Search courses or load the next page of current search.
     *
     * @return Promise resolved when done.
     */
    CoreCoursesSearchPage.prototype.searchCourses = function () {
        var _this = this;
        this.loadMoreError = false;
        return this.coursesProvider.search(this.currentSearch, this.page).then(function (response) {
            if (_this.page === 0) {
                _this.courses = response.courses;
            }
            else {
                _this.courses = _this.courses.concat(response.courses);
            }
            _this.total = response.total;
            _this.page++;
            _this.canLoadMore = _this.courses.length < _this.total;
        }).catch(function (error) {
            _this.loadMoreError = true; // Set to prevent infinite calls with infinite-loading.
            _this.domUtils.showErrorModalDefault(error, 'core.courses.errorsearching', true);
        });
    };
    CoreCoursesSearchPage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-core-courses-search',
            templateUrl: 'search.html',
        }),
        __metadata("design:paramtypes", [dom["b" /* CoreDomUtilsProvider */], courses["b" /* CoreCoursesProvider */]])
    ], CoreCoursesSearchPage);
    return CoreCoursesSearchPage;
}());

//# sourceMappingURL=search.js.map
// EXTERNAL MODULE: ./src/components/components.module.ts
var components_module = __webpack_require__(26);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(32);

// EXTERNAL MODULE: ./src/core/search/components/components.module.ts
var components_components_module = __webpack_require__(325);

// EXTERNAL MODULE: ./src/core/courses/components/components.module.ts
var courses_components_components_module = __webpack_require__(286);

// CONCATENATED MODULE: ./src/core/courses/pages/search/search.module.ts
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
var search_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var search_module_CoreCoursesSearchPageModule = /** @class */ (function () {
    function CoreCoursesSearchPageModule() {
    }
    CoreCoursesSearchPageModule = search_module___decorate([
        Object(core["J" /* NgModule */])({
            declarations: [
                search_CoreCoursesSearchPage,
            ],
            imports: [
                components_module["a" /* CoreComponentsModule */],
                directives_module["a" /* CoreDirectivesModule */],
                courses_components_components_module["a" /* CoreCoursesComponentsModule */],
                components_components_module["a" /* CoreSearchComponentsModule */],
                ionic_angular["l" /* IonicPageModule */].forChild(search_CoreCoursesSearchPage),
                _ngx_translate_core["b" /* TranslateModule */].forChild(),
            ],
        })
    ], CoreCoursesSearchPageModule);
    return CoreCoursesSearchPageModule;
}());

//# sourceMappingURL=search.module.js.map
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

// EXTERNAL MODULE: ./src/core/courses/components/course-options-menu/course-options-menu.ngfactory.js
var course_options_menu_ngfactory = __webpack_require__(1583);

// EXTERNAL MODULE: ./src/core/search/components/search-box/search-box.ngfactory.js
var search_box_ngfactory = __webpack_require__(488);

// EXTERNAL MODULE: ./src/components/empty-box/empty-box.ngfactory.js
var empty_box_ngfactory = __webpack_require__(126);

// EXTERNAL MODULE: ./src/components/empty-box/empty-box.ts
var empty_box = __webpack_require__(118);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(18);

// EXTERNAL MODULE: ./src/core/courses/components/course-list-item/course-list-item.ngfactory.js
var course_list_item_ngfactory = __webpack_require__(2168);

// EXTERNAL MODULE: ./src/core/courses/components/course-list-item/course-list-item.ts
var course_list_item = __webpack_require__(1572);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(20);

// EXTERNAL MODULE: ./src/core/course/providers/helper.ts
var helper = __webpack_require__(38);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-divider.js
var item_divider = __webpack_require__(103);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: ./src/components/infinite-loading/infinite-loading.ngfactory.js
var infinite_loading_ngfactory = __webpack_require__(381);

// EXTERNAL MODULE: ./src/components/infinite-loading/infinite-loading.ts
var infinite_loading = __webpack_require__(281);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(28);

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

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory.js
var toolbar_title_ngfactory = __webpack_require__(740);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.js
var toolbar_title = __webpack_require__(324);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(252);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(185);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(112);

// EXTERNAL MODULE: ./src/core/search/components/search-box/search-box.ts
var search_box = __webpack_require__(388);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils = __webpack_require__(2);

// EXTERNAL MODULE: ./src/core/search/providers/search-history.ts
var search_history = __webpack_require__(293);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(1);

// CONCATENATED MODULE: ./src/core/courses/pages/search/search.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









































var styles_CoreCoursesSearchPage = [];
var RenderType_CoreCoursesSearchPage = core["_30" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreCoursesSearchPage, data: {} });

function View_CoreCoursesSearchPage_2(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 2, "core-empty-box", [["icon", "search"]], null, null, null, empty_box_ngfactory["b" /* View_CoreEmptyBoxComponent_0 */], empty_box_ngfactory["a" /* RenderType_CoreEmptyBoxComponent */])), core["_31" /* ɵdid */](1, 49152, null, 0, empty_box["a" /* CoreEmptyBoxComponent */], [], { message: [0, "message"], icon: [1, "icon"] }, null), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = core["_57" /* ɵunv */](_v, 1, 0, core["_45" /* ɵnov */](_v, 2).transform("core.courses.nosearchresults")); var currVal_1 = "search"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_CoreCoursesSearchPage_3(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 1, "core-courses-course-list-item", [], null, null, null, course_list_item_ngfactory["b" /* View_CoreCoursesCourseListItemComponent_0 */], course_list_item_ngfactory["a" /* RenderType_CoreCoursesCourseListItemComponent */])), core["_31" /* ɵdid */](1, 114688, null, 0, course_list_item["a" /* CoreCoursesCourseListItemComponent */], [[2, nav_controller["a" /* NavController */]], translate_service["a" /* TranslateService */], courses["b" /* CoreCoursesProvider */], helper["b" /* CoreCourseHelperProvider */]], { course: [0, "course"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }, null); }
function View_CoreCoursesSearchPage_1(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 20, "div", [], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_32" /* ɵeld */](2, 0, null, null, 8, "ion-item-divider", [["class", "item item-divider"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](3, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 1, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 2, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 3, { _icons: 1 }), core["_31" /* ɵdid */](7, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), (_l()(), core["_56" /* ɵted */](8, 2, ["", ""])), core["_49" /* ɵpod */](9, { $a: 0 }), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_CoreCoursesSearchPage_2)), core["_31" /* ɵdid */](13, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_CoreCoursesSearchPage_3)), core["_31" /* ɵdid */](16, 802816, null, 0, common["j" /* NgForOf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_32" /* ɵeld */](18, 0, null, null, 1, "core-infinite-loading", [], null, [[null, "action"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("action" === en)) {
        var pd_0 = (_co.loadMoreResults($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, infinite_loading_ngfactory["b" /* View_CoreInfiniteLoadingComponent_0 */], infinite_loading_ngfactory["a" /* RenderType_CoreInfiniteLoadingComponent */])), core["_31" /* ɵdid */](19, 573440, null, 0, infinite_loading["a" /* CoreInfiniteLoadingComponent */], [[2, content["a" /* Content */]], dom["b" /* CoreDomUtilsProvider */]], { enabled: [0, "enabled"], error: [1, "error"] }, { action: "action" }), (_l()(), core["_56" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = (_co.total == 0); _ck(_v, 13, 0, currVal_1); var currVal_2 = _co.courses; _ck(_v, 16, 0, currVal_2); var currVal_3 = _co.canLoadMore; var currVal_4 = _co.loadMoreError; _ck(_v, 19, 0, currVal_3, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_57" /* ɵunv */](_v, 8, 0, core["_45" /* ɵnov */](_v, 10).transform("core.courses.totalcoursesearchresults", _ck(_v, 9, 0, _co.total))); _ck(_v, 8, 0, currVal_0); }); }
function View_CoreCoursesSearchPage_0(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 12, "ion-header", [], null, null, null, null, null)), core["_31" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_32" /* ɵeld */](3, 0, null, null, 8, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_31" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), core["_31" /* ɵdid */](5, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], translate_service["a" /* TranslateService */], events["b" /* CoreEventsProvider */]], null, null), (_l()(), core["_56" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_32" /* ɵeld */](7, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_31" /* ɵdid */](8, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_56" /* ɵted */](9, 0, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_32" /* ɵeld */](14, 0, null, null, 10, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_31" /* ɵdid */](15, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["W" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["N" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_56" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_32" /* ɵeld */](17, 0, null, 1, 3, "core-search-box", [["autoFocus", "true"], ["searchArea", "CoreCoursesSearch"]], null, [[null, "onSubmit"], [null, "onClear"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onSubmit" === en)) {
        var pd_0 = (_co.search($event) !== false);
        ad = (pd_0 && ad);
    } if (("onClear" === en)) {
        var pd_1 = (_co.clearSearch($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, search_box_ngfactory["c" /* View_CoreSearchBoxComponent_0 */], search_box_ngfactory["b" /* RenderType_CoreSearchBoxComponent */])), core["_31" /* ɵdid */](18, 114688, null, 0, search_box["a" /* CoreSearchBoxComponent */], [translate_service["a" /* TranslateService */], utils["b" /* CoreUtilsProvider */], search_history["a" /* CoreSearchHistoryProvider */], events["b" /* CoreEventsProvider */], sites["b" /* CoreSitesProvider */], dom["b" /* CoreDomUtilsProvider */]], { searchLabel: [0, "searchLabel"], placeholder: [1, "placeholder"], autoFocus: [2, "autoFocus"], searchArea: [3, "searchArea"] }, { onSubmit: "onSubmit", onClear: "onClear" }), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 1, ["\n\n    "])), (_l()(), core["_27" /* ɵand */](16777216, null, 1, 1, null, View_CoreCoursesSearchPage_1)), core["_31" /* ɵdid */](23, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 5, 0); var currVal_5 = core["_57" /* ɵunv */](_v, 18, 0, core["_45" /* ɵnov */](_v, 19).transform("core.courses.search")); var currVal_6 = core["_57" /* ɵunv */](_v, 18, 1, core["_45" /* ɵnov */](_v, 20).transform("core.courses.search")); var currVal_7 = "true"; var currVal_8 = "CoreCoursesSearch"; _ck(_v, 18, 0, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_9 = _co.courses; _ck(_v, 23, 0, currVal_9); }, function (_ck, _v) { var currVal_0 = core["_45" /* ɵnov */](_v, 4)._hidden; var currVal_1 = core["_45" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = core["_57" /* ɵunv */](_v, 9, 0, core["_45" /* ɵnov */](_v, 10).transform("core.courses.searchcourses")); _ck(_v, 9, 0, currVal_2); var currVal_3 = core["_45" /* ɵnov */](_v, 15).statusbarPadding; var currVal_4 = core["_45" /* ɵnov */](_v, 15)._hasRefresher; _ck(_v, 14, 0, currVal_3, currVal_4); }); }
function View_CoreCoursesSearchPage_Host_0(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 1, "page-core-courses-search", [], null, null, null, View_CoreCoursesSearchPage_0, RenderType_CoreCoursesSearchPage)), core["_31" /* ɵdid */](1, 49152, null, 0, search_CoreCoursesSearchPage, [dom["b" /* CoreDomUtilsProvider */], courses["b" /* CoreCoursesProvider */]], null, null)], null, null); }
var CoreCoursesSearchPageNgFactory = core["_28" /* ɵccf */]("page-core-courses-search", search_CoreCoursesSearchPage, View_CoreCoursesSearchPage_Host_0, {}, {}, []);

//# sourceMappingURL=search.ngfactory.js.map
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

// CONCATENATED MODULE: ./src/core/courses/pages/search/search.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCoursesSearchPageModuleNgFactory", function() { return CoreCoursesSearchPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



































var CoreCoursesSearchPageModuleNgFactory = core["_29" /* ɵcmf */](search_module_CoreCoursesSearchPageModule, [], function (_l) { return core["_41" /* ɵmod */]([core["_42" /* ɵmpd */](512, core["o" /* ComponentFactoryResolver */], core["_22" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], bs_tooltip_ngfactory["a" /* CoreBSTooltipComponentNgFactory */], course_options_menu_ngfactory["a" /* CoreCoursesCourseOptionsMenuComponentNgFactory */], search_box_ngfactory["a" /* CoreSearchBoxComponentNgFactory */], CoreCoursesSearchPageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["L" /* NgModuleRef */]]), core["_42" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ɵa */]]]), core["_42" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_42" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_42" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_42" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_42" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_42" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_42" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_42" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_42" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_42" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_42" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_42" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_42" /* ɵmpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_42" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_42" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_42" /* ɵmpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_42" /* ɵmpd */](512, courses_components_components_module["a" /* CoreCoursesComponentsModule */], courses_components_components_module["a" /* CoreCoursesComponentsModule */], []), core["_42" /* ɵmpd */](512, components_components_module["a" /* CoreSearchComponentsModule */], components_components_module["a" /* CoreSearchComponentsModule */], []), core["_42" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_42" /* ɵmpd */](512, search_module_CoreCoursesSearchPageModule, search_module_CoreCoursesSearchPageModule, []), core["_42" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_42" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_42" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], search_CoreCoursesSearchPage, [])]); });

//# sourceMappingURL=search.module.ngfactory.js.map

/***/ }),

/***/ 2168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_CoreCoursesCourseListItemComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_CoreCoursesCourseListItemComponent_0;
/* unused harmony export View_CoreCoursesCourseListItemComponent_Host_0 */
/* unused harmony export CoreCoursesCourseListItemComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_icon_icon_ngfactory__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_icon_icon__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_ionic_angular_components_button_button_ngfactory__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_button_button__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core_src_translate_pipe__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core_src_translate_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__node_modules_ionic_angular_components_item_item_ngfactory__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular_components_item_item__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular_util_form__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular_components_item_item_reorder__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_angular_components_item_item_content__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__directives_format_text__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_sites__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_utils_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_utils_text__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ionic_angular_platform_platform__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_utils_utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_utils_url__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_logger__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_filepool__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__contentlinks_providers_helper__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ionic_angular_navigation_nav_controller__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ionic_angular_components_content_content__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_split_view_split_view__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_utils_iframe__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_events__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__filter_providers_filter__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__filter_providers_helper__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__filter_providers_delegate__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_urlschemes__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__course_list_item__ = __webpack_require__(1572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_courses__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__course_providers_helper__ = __webpack_require__(38);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




































var styles_CoreCoursesCourseListItemComponent = [];
var RenderType_CoreCoursesCourseListItemComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreCoursesCourseListItemComponent, data: {} });

function View_CoreCoursesCourseListItemComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_58" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵeld */](0, 0, null, null, 1, "core-icon", [], null, null, null, __WEBPACK_IMPORTED_MODULE_1__components_icon_icon_ngfactory__["b" /* View_CoreIconComponent_0 */], __WEBPACK_IMPORTED_MODULE_1__components_icon_icon_ngfactory__["a" /* RenderType_CoreIconComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵdid */](1, 704512, null, 0, __WEBPACK_IMPORTED_MODULE_2__components_icon_icon__["a" /* CoreIconComponent */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */]], { name: [0, "name"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.icon; _ck(_v, 1, 0, currVal_0); }, null); }
function View_CoreCoursesCourseListItemComponent_4(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_58" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵeld */](0, 0, null, null, 0, "img", [["class", "core-course-enrollment-img"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.img; _ck(_v, 0, 0, currVal_0); }); }
function View_CoreCoursesCourseListItemComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_58" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵeld */](0, 0, null, null, 9, "span", [["clear", ""], ["color", "gray"], ["icon-only", ""], ["ion-button", ""]], [[1, "aria-label", 0]], null, null, __WEBPACK_IMPORTED_MODULE_4__node_modules_ionic_angular_components_button_button_ngfactory__["b" /* View_Button_0 */], __WEBPACK_IMPORTED_MODULE_4__node_modules_ionic_angular_components_button_button_ngfactory__["a" /* RenderType_Button */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵdid */](1, 1097728, [[2, 4]], 0, __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_button_button__["a" /* Button */], [[8, ""], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer */]], { color: [0, "color"], clear: [1, "clear"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_48" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core_src_translate_pipe__["a" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_7__ngx_translate_core_src_translate_service__["a" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]]), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_56" /* ɵted */](-1, 0, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵand */](16777216, null, 0, 1, null, View_CoreCoursesCourseListItemComponent_3)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵdid */](5, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_56" /* ɵted */](-1, 0, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵand */](16777216, null, 0, 1, null, View_CoreCoursesCourseListItemComponent_4)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵdid */](8, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_56" /* ɵted */](-1, 0, ["\n            "]))], function (_ck, _v) { var currVal_1 = "gray"; var currVal_2 = ""; _ck(_v, 1, 0, currVal_1, currVal_2); var currVal_3 = _v.context.$implicit.icon; _ck(_v, 5, 0, currVal_3); var currVal_4 = (_v.context.$implicit.img && !_v.context.$implicit.icon); _ck(_v, 8, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_57" /* ɵunv */](_v, 0, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵnov */](_v, 2).transform(_v.context.$implicit.name)); _ck(_v, 0, 0, currVal_0); }); }
function View_CoreCoursesCourseListItemComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_58" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵeld */](0, 0, null, null, 4, "span", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵand */](16777216, null, null, 1, null, View_CoreCoursesCourseListItemComponent_2)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵdid */](3, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_common__["j" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_56" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.course.enrollment; _ck(_v, 3, 0, currVal_0); }, null); }
function View_CoreCoursesCourseListItemComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_58" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵeld */](0, 0, null, null, 19, "a", [["class", "item item-block"], ["ion-item", ""], ["text-wrap", ""]], [[2, "item-disabled", null], [8, "title", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openCourse(_co.course) !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_9__node_modules_ionic_angular_components_item_item_ngfactory__["b" /* View_Item_0 */], __WEBPACK_IMPORTED_MODULE_9__node_modules_ionic_angular_components_item_item_ngfactory__["a" /* RenderType_Item */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵdid */](1, 1097728, null, 3, __WEBPACK_IMPORTED_MODULE_10_ionic_angular_components_item_item__["a" /* Item */], [__WEBPACK_IMPORTED_MODULE_11_ionic_angular_util_form__["a" /* Form */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_12_ionic_angular_components_item_item_reorder__["a" /* ItemReorder */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_53" /* ɵqud */](335544320, 1, { contentLabel: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_53" /* ɵqud */](603979776, 2, { _buttons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_53" /* ɵqud */](603979776, 3, { _icons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵdid */](5, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_13_ionic_angular_components_item_item_content__["a" /* ItemContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_56" /* ɵted */](-1, 2, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵeld */](7, 0, null, 0, 1, "core-icon", [["fixed-width", ""], ["item-start", ""], ["name", "fa-graduation-cap"]], null, null, null, __WEBPACK_IMPORTED_MODULE_1__components_icon_icon_ngfactory__["b" /* View_CoreIconComponent_0 */], __WEBPACK_IMPORTED_MODULE_1__components_icon_icon_ngfactory__["a" /* RenderType_CoreIconComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵdid */](8, 704512, null, 0, __WEBPACK_IMPORTED_MODULE_2__components_icon_icon__["a" /* CoreIconComponent */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */]], { name: [0, "name"], fixedWidth: [1, "fixedWidth"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_56" /* ɵted */](-1, 2, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵeld */](10, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵeld */](11, 16777216, null, null, 1, "core-format-text", [["contextLevel", "course"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵdid */](12, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_14__directives_format_text__["a" /* CoreFormatTextDirective */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_15__providers_sites__["b" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_16__providers_utils_dom__["b" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_17__providers_utils_text__["b" /* CoreTextUtilsProvider */], __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core_src_translate_service__["a" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_18_ionic_angular_platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_19__providers_utils_utils__["b" /* CoreUtilsProvider */], __WEBPACK_IMPORTED_MODULE_20__providers_utils_url__["b" /* CoreUrlUtilsProvider */], __WEBPACK_IMPORTED_MODULE_21__providers_logger__["b" /* CoreLoggerProvider */], __WEBPACK_IMPORTED_MODULE_22__providers_filepool__["b" /* CoreFilepoolProvider */], __WEBPACK_IMPORTED_MODULE_23__contentlinks_providers_helper__["b" /* CoreContentLinksHelperProvider */], [2, __WEBPACK_IMPORTED_MODULE_24_ionic_angular_navigation_nav_controller__["a" /* NavController */]], [2, __WEBPACK_IMPORTED_MODULE_25_ionic_angular_components_content_content__["a" /* Content */]], [2, __WEBPACK_IMPORTED_MODULE_26__components_split_view_split_view__["a" /* CoreSplitViewComponent */]], __WEBPACK_IMPORTED_MODULE_27__providers_utils_iframe__["a" /* CoreIframeUtilsProvider */], __WEBPACK_IMPORTED_MODULE_28__providers_events__["b" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_29__filter_providers_filter__["a" /* CoreFilterProvider */], __WEBPACK_IMPORTED_MODULE_30__filter_providers_helper__["a" /* CoreFilterHelperProvider */], __WEBPACK_IMPORTED_MODULE_31__filter_providers_delegate__["a" /* CoreFilterDelegate */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_32__providers_urlschemes__["b" /* CoreCustomURLSchemesProvider */]], { text: [0, "text"], contextLevel: [1, "contextLevel"], contextInstanceId: [2, "contextInstanceId"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_56" /* ɵted */](-1, 2, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵeld */](14, 0, null, 4, 4, "div", [["item-end", ""]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵand */](16777216, null, null, 1, null, View_CoreCoursesCourseListItemComponent_1)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵdid */](17, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_56" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_56" /* ɵted */](-1, 2, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_56" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = "fa-graduation-cap"; var currVal_3 = ""; _ck(_v, 8, 0, currVal_2, currVal_3); var currVal_4 = (_co.course.displayname || _co.course.fullname); var currVal_5 = "course"; var currVal_6 = _co.course.id; _ck(_v, 12, 0, currVal_4, currVal_5, currVal_6); var currVal_7 = !_co.course.isEnrolled; _ck(_v, 17, 0, currVal_7); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.course.visible == 0); var currVal_1 = (_co.course.displayname || _co.course.fullname); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_CoreCoursesCourseListItemComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_58" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵeld */](0, 0, null, null, 1, "core-courses-course-list-item", [], null, null, null, View_CoreCoursesCourseListItemComponent_0, RenderType_CoreCoursesCourseListItemComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_33__course_list_item__["a" /* CoreCoursesCourseListItemComponent */], [[2, __WEBPACK_IMPORTED_MODULE_24_ionic_angular_navigation_nav_controller__["a" /* NavController */]], __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core_src_translate_service__["a" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_34__providers_courses__["b" /* CoreCoursesProvider */], __WEBPACK_IMPORTED_MODULE_35__course_providers_helper__["b" /* CoreCourseHelperProvider */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CoreCoursesCourseListItemComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* ɵccf */]("core-courses-course-list-item", __WEBPACK_IMPORTED_MODULE_33__course_list_item__["a" /* CoreCoursesCourseListItemComponent */], View_CoreCoursesCourseListItemComponent_Host_0, { course: "course" }, {}, []);

//# sourceMappingURL=course-list-item.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=20.js.map