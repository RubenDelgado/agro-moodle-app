webpackJsonp([102],{

/***/ 2067:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 3 modules
var ionic_angular = __webpack_require__(5);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(9);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(1);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// CONCATENATED MODULE: ./src/addon/mod/lesson/pages/password-modal/password-modal.ts
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
 * Modal that asks the password for a lesson.
 */
var password_modal_AddonModLessonPasswordModalPage = /** @class */ (function () {
    function AddonModLessonPasswordModalPage(viewCtrl, eventsProvider, sitesProvider, domUtils) {
        this.viewCtrl = viewCtrl;
        this.eventsProvider = eventsProvider;
        this.sitesProvider = sitesProvider;
        this.domUtils = domUtils;
    }
    /**
     * Send the password back.
     *
     * @param e Event.
     * @param password The input element.
     */
    AddonModLessonPasswordModalPage.prototype.submitPassword = function (e, password) {
        e.preventDefault();
        e.stopPropagation();
        this.domUtils.triggerFormSubmittedEvent(this.formElement, false, this.sitesProvider.getCurrentSiteId());
        this.viewCtrl.dismiss(password.value);
    };
    /**
     * Close modal.
     */
    AddonModLessonPasswordModalPage.prototype.closeModal = function () {
        this.domUtils.triggerFormCancelledEvent(this.formElement, this.sitesProvider.getCurrentSiteId());
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(core["_10" /* ViewChild */])('passwordForm'),
        __metadata("design:type", core["t" /* ElementRef */])
    ], AddonModLessonPasswordModalPage.prototype, "formElement", void 0);
    AddonModLessonPasswordModalPage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-addon-mod-lesson-password-modal',
            templateUrl: 'password-modal.html',
        }),
        __metadata("design:paramtypes", [ionic_angular["G" /* ViewController */],
            events["b" /* CoreEventsProvider */],
            sites["b" /* CoreSitesProvider */],
            dom["b" /* CoreDomUtilsProvider */]])
    ], AddonModLessonPasswordModalPage);
    return AddonModLessonPasswordModalPage;
}());

//# sourceMappingURL=password-modal.js.map
// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/index.js + 1 modules
var _ngx_translate_core = __webpack_require__(3);

// EXTERNAL MODULE: ./src/components/components.module.ts
var components_module = __webpack_require__(26);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(32);

// CONCATENATED MODULE: ./src/addon/mod/lesson/pages/password-modal/password-modal.module.ts
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
var password_modal_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var password_modal_module_AddonModLessonPasswordModalPageModule = /** @class */ (function () {
    function AddonModLessonPasswordModalPageModule() {
    }
    AddonModLessonPasswordModalPageModule = password_modal_module___decorate([
        Object(core["J" /* NgModule */])({
            declarations: [
                password_modal_AddonModLessonPasswordModalPage
            ],
            imports: [
                components_module["a" /* CoreComponentsModule */],
                directives_module["a" /* CoreDirectivesModule */],
                ionic_angular["l" /* IonicPageModule */].forChild(password_modal_AddonModLessonPasswordModalPage),
                _ngx_translate_core["b" /* TranslateModule */].forChild()
            ]
        })
    ], AddonModLessonPasswordModalPageModule);
    return AddonModLessonPasswordModalPageModule;
}());

//# sourceMappingURL=password-modal.module.js.map
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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(379);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.ngfactory.js
var navbar_ngfactory = __webpack_require__(739);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.js
var navbar = __webpack_require__(216);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(20);

// EXTERNAL MODULE: ./src/directives/back-button.ts
var back_button = __webpack_require__(486);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory.js
var toolbar_title_ngfactory = __webpack_require__(740);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.js
var toolbar_title = __webpack_require__(324);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(252);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-item.js
var toolbar_item = __webpack_require__(380);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/icon/icon.js
var icon = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(185);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(112);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(23);

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

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/label/label.js
var label = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.ngfactory.js
var input_ngfactory = __webpack_require__(115);

// EXTERNAL MODULE: ./src/directives/auto-focus.ts
var auto_focus = __webpack_require__(385);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.js
var input = __webpack_require__(95);

// CONCATENATED MODULE: ./src/addon/mod/lesson/pages/password-modal/password-modal.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








































var styles_AddonModLessonPasswordModalPage = [];
var RenderType_AddonModLessonPasswordModalPage = core["_30" /* ɵcrt */]({ encapsulation: 2, styles: styles_AddonModLessonPasswordModalPage, data: {} });

function View_AddonModLessonPasswordModalPage_0(_l) { return core["_58" /* ɵvid */](0, [core["_53" /* ɵqud */](402653184, 1, { formElement: 0 }), (_l()(), core["_32" /* ɵeld */](1, 0, null, null, 25, "ion-header", [], null, null, null, null, null)), core["_31" /* ɵdid */](2, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_32" /* ɵeld */](4, 0, null, null, 21, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_31" /* ɵdid */](5, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), core["_31" /* ɵdid */](6, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], translate_service["a" /* TranslateService */], events["b" /* CoreEventsProvider */]], null, null), (_l()(), core["_56" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_32" /* ɵeld */](8, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_31" /* ɵdid */](9, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_56" /* ɵted */](10, 0, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_32" /* ɵeld */](13, 0, null, 2, 11, "ion-buttons", [["end", ""]], null, null, null, null, null)), core["_31" /* ɵdid */](14, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_53" /* ɵqud */](603979776, 2, { _buttons: 1 }), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_32" /* ɵeld */](17, 0, null, null, 6, "button", [["icon-only", ""], ["ion-button", ""]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_31" /* ɵdid */](18, 1097728, [[2, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_32" /* ɵeld */](21, 0, null, 0, 1, "ion-icon", [["name", "close"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_31" /* ɵdid */](22, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_56" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_32" /* ɵeld */](28, 0, null, null, 47, "ion-content", [["class", "addon-mod_lesson-password-modal"], ["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_31" /* ɵdid */](29, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["W" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["N" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_56" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_32" /* ɵeld */](31, 0, [[1, 0], ["passwordForm", 1]], 1, 43, "form", [["ion-list", ""], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (core["_45" /* ɵnov */](_v, 33).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (core["_45" /* ɵnov */](_v, 33).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.submitPassword($event, core["_45" /* ɵnov */](_v, 54)) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), core["_31" /* ɵdid */](32, 16384, null, 0, esm5_forms["w" /* ɵbf */], [], null, null), core["_31" /* ɵdid */](33, 4210688, null, 0, esm5_forms["p" /* NgForm */], [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), core["_51" /* ɵprd */](2048, null, esm5_forms["b" /* ControlContainer */], null, [esm5_forms["p" /* NgForm */]]), core["_31" /* ɵdid */](35, 16384, null, 0, esm5_forms["o" /* NgControlStatusGroup */], [esm5_forms["b" /* ControlContainer */]], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_32" /* ɵeld */](37, 0, null, null, 20, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](38, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 3, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 4, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 5, { _icons: 1 }), core["_31" /* ɵdid */](42, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_32" /* ɵeld */](44, 0, null, 3, 12, "core-show-password", [["item-content", ""]], null, null, null, show_password_ngfactory["b" /* View_CoreShowPasswordComponent_0 */], show_password_ngfactory["a" /* RenderType_CoreShowPasswordComponent */])), core["_31" /* ɵdid */](45, 4308992, null, 0, show_password["a" /* CoreShowPasswordComponent */], [core["t" /* ElementRef */], utils["b" /* CoreUtilsProvider */], dom["b" /* CoreDomUtilsProvider */]], { name: [0, "name"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_32" /* ɵeld */](47, 0, null, 0, 3, "ion-label", [], null, null, null, null, null)), core["_31" /* ɵdid */](48, 16384, [[3, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_56" /* ɵted */](49, null, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_32" /* ɵeld */](52, 0, null, 0, 3, "ion-input", [["name", "password"], ["type", "password"]], null, null, null, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["_31" /* ɵdid */](53, 81920, null, 0, auto_focus["a" /* CoreAutoFocusDirective */], [core["t" /* ElementRef */], dom["b" /* CoreDomUtilsProvider */], utils["b" /* CoreUtilsProvider */], [2, nav_controller["a" /* NavController */]]], null, null), core["_31" /* ɵdid */](54, 5423104, [["passwordinput", 4]], 0, input["a" /* TextInput */], [config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app["a" /* App */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["m" /* NgControl */]], dom_controller["a" /* DomController */]], { type: [0, "type"], clearOnEdit: [1, "clearOnEdit"], placeholder: [2, "placeholder"] }, null), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_32" /* ɵeld */](59, 0, null, null, 14, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](60, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 6, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 7, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 8, { _icons: 1 }), core["_31" /* ɵdid */](64, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_32" /* ɵeld */](66, 0, null, 2, 6, "button", [["block", ""], ["icon-end", ""], ["ion-button", ""], ["type", "submit"]], null, null, null, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_31" /* ɵdid */](67, 1097728, [[7, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { block: [0, "block"] }, null), (_l()(), core["_56" /* ɵted */](68, 0, ["\n                ", "\n                "])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_32" /* ɵeld */](70, 0, null, 0, 1, "ion-icon", [["md", "ios-arrow-forward"], ["name", "arrow-forward"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_31" /* ɵdid */](71, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { name: [0, "name"], md: [1, "md"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_56" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { _ck(_v, 6, 0); var currVal_5 = "close"; _ck(_v, 22, 0, currVal_5); var currVal_15 = "password"; _ck(_v, 45, 0, currVal_15); _ck(_v, 53, 0); var currVal_17 = "password"; var currVal_18 = false; var currVal_19 = core["_35" /* ɵinlineInterpolate */](1, "", core["_57" /* ɵunv */](_v, 54, 2, core["_45" /* ɵnov */](_v, 55).transform("core.login.password")), ""); _ck(_v, 54, 0, currVal_17, currVal_18, currVal_19); var currVal_20 = ""; _ck(_v, 67, 0, currVal_20); var currVal_23 = "arrow-forward"; var currVal_24 = "ios-arrow-forward"; _ck(_v, 71, 0, currVal_23, currVal_24); }, function (_ck, _v) { var currVal_0 = core["_45" /* ɵnov */](_v, 5)._hidden; var currVal_1 = core["_45" /* ɵnov */](_v, 5)._sbPadding; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_2 = core["_57" /* ɵunv */](_v, 10, 0, core["_45" /* ɵnov */](_v, 11).transform("core.login.password")); _ck(_v, 10, 0, currVal_2); var currVal_3 = core["_57" /* ɵunv */](_v, 17, 0, core["_45" /* ɵnov */](_v, 19).transform("core.close")); _ck(_v, 17, 0, currVal_3); var currVal_4 = core["_45" /* ɵnov */](_v, 22)._hidden; _ck(_v, 21, 0, currVal_4); var currVal_6 = core["_45" /* ɵnov */](_v, 29).statusbarPadding; var currVal_7 = core["_45" /* ɵnov */](_v, 29)._hasRefresher; _ck(_v, 28, 0, currVal_6, currVal_7); var currVal_8 = core["_45" /* ɵnov */](_v, 35).ngClassUntouched; var currVal_9 = core["_45" /* ɵnov */](_v, 35).ngClassTouched; var currVal_10 = core["_45" /* ɵnov */](_v, 35).ngClassPristine; var currVal_11 = core["_45" /* ɵnov */](_v, 35).ngClassDirty; var currVal_12 = core["_45" /* ɵnov */](_v, 35).ngClassValid; var currVal_13 = core["_45" /* ɵnov */](_v, 35).ngClassInvalid; var currVal_14 = core["_45" /* ɵnov */](_v, 35).ngClassPending; _ck(_v, 31, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_16 = core["_57" /* ɵunv */](_v, 49, 0, core["_45" /* ɵnov */](_v, 50).transform("addon.mod_lesson.enterpassword")); _ck(_v, 49, 0, currVal_16); var currVal_21 = core["_57" /* ɵunv */](_v, 68, 0, core["_45" /* ɵnov */](_v, 69).transform("addon.mod_lesson.continue")); _ck(_v, 68, 0, currVal_21); var currVal_22 = core["_45" /* ɵnov */](_v, 71)._hidden; _ck(_v, 70, 0, currVal_22); }); }
function View_AddonModLessonPasswordModalPage_Host_0(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 1, "page-addon-mod-lesson-password-modal", [], null, null, null, View_AddonModLessonPasswordModalPage_0, RenderType_AddonModLessonPasswordModalPage)), core["_31" /* ɵdid */](1, 49152, null, 0, password_modal_AddonModLessonPasswordModalPage, [view_controller["a" /* ViewController */], events["b" /* CoreEventsProvider */], sites["b" /* CoreSitesProvider */], dom["b" /* CoreDomUtilsProvider */]], null, null)], null, null); }
var AddonModLessonPasswordModalPageNgFactory = core["_28" /* ɵccf */]("page-addon-mod-lesson-password-modal", password_modal_AddonModLessonPasswordModalPage, View_AddonModLessonPasswordModalPage_Host_0, {}, {}, []);

//# sourceMappingURL=password-modal.ngfactory.js.map
// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(7);

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

// CONCATENATED MODULE: ./src/addon/mod/lesson/pages/password-modal/password-modal.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModLessonPasswordModalPageModuleNgFactory", function() { return AddonModLessonPasswordModalPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 































var AddonModLessonPasswordModalPageModuleNgFactory = core["_29" /* ɵcmf */](password_modal_module_AddonModLessonPasswordModalPageModule, [], function (_l) { return core["_41" /* ɵmod */]([core["_42" /* ɵmpd */](512, core["o" /* ComponentFactoryResolver */], core["_22" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], bs_tooltip_ngfactory["a" /* CoreBSTooltipComponentNgFactory */], AddonModLessonPasswordModalPageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["L" /* NgModuleRef */]]), core["_42" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ɵa */]]]), core["_42" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_42" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_42" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_42" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_42" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_42" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_42" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_42" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_42" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_42" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_42" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_42" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_42" /* ɵmpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_42" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_42" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_42" /* ɵmpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_42" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_42" /* ɵmpd */](512, password_modal_module_AddonModLessonPasswordModalPageModule, password_modal_module_AddonModLessonPasswordModalPageModule, []), core["_42" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_42" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_42" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], password_modal_AddonModLessonPasswordModalPage, [])]); });

//# sourceMappingURL=password-modal.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=102.js.map