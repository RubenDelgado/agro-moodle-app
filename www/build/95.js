webpackJsonp([95],{

/***/ 2076:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 3 modules
var ionic_angular = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/index.js + 1 modules
var _ngx_translate_core = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(23);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(9);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(1);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/addon/mod/quiz/providers/access-rules-delegate.ts
var access_rules_delegate = __webpack_require__(131);

// CONCATENATED MODULE: ./src/addon/mod/quiz/pages/preflight-modal/preflight-modal.ts
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
 * Modal that renders the access rules for a quiz.
 */
var preflight_modal_AddonModQuizPreflightModalPage = /** @class */ (function () {
    function AddonModQuizPreflightModalPage(params, fb, translate, sitesProvider, viewCtrl, accessRuleDelegate, injector, domUtils, eventsProvider) {
        this.viewCtrl = viewCtrl;
        this.accessRuleDelegate = accessRuleDelegate;
        this.injector = injector;
        this.domUtils = domUtils;
        this.eventsProvider = eventsProvider;
        this.accessRulesData = []; // Components and data for each access rule.
        this.title = params.get('title') || translate.instant('addon.mod_quiz.startattempt');
        this.quiz = params.get('quiz');
        this.attempt = params.get('attempt');
        this.prefetch = params.get('prefetch');
        this.siteId = params.get('siteId') || sitesProvider.getCurrentSiteId();
        this.rules = params.get('rules') || [];
        // Create an empty form group. The controls will be added by the access rules components.
        this.preflightForm = fb.group({});
    }
    /**
     * Component being initialized.
     */
    AddonModQuizPreflightModalPage.prototype.ngOnInit = function () {
        var _this = this;
        var promises = [];
        this.rules.forEach(function (rule) {
            // Check if preflight is required for rule and, if so, get the component to render it.
            promises.push(_this.accessRuleDelegate.isPreflightCheckRequiredForRule(rule, _this.quiz, _this.attempt, _this.prefetch, _this.siteId).then(function (required) {
                if (required) {
                    return _this.accessRuleDelegate.getPreflightComponent(rule, _this.injector).then(function (component) {
                        if (component) {
                            _this.accessRulesData.push({
                                component: component,
                                data: {
                                    rule: rule,
                                    quiz: _this.quiz,
                                    attempt: _this.attempt,
                                    prefetch: _this.prefetch,
                                    form: _this.preflightForm,
                                    siteId: _this.siteId
                                }
                            });
                        }
                    });
                }
            }));
        });
        Promise.all(promises).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error loading rules');
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Check that the data is valid and send it back.
     *
     * @param e Event.
     */
    AddonModQuizPreflightModalPage.prototype.sendData = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (!this.preflightForm.valid) {
            // Form not valid. Scroll to the first element with errors.
            if (!this.domUtils.scrollToInputError(this.content)) {
                // Input not found, show an error modal.
                this.domUtils.showErrorModal('core.errorinvalidform', true);
            }
        }
        else {
            this.domUtils.triggerFormSubmittedEvent(this.formElement, false, this.siteId);
            this.viewCtrl.dismiss(this.preflightForm.value);
        }
    };
    /**
     * Close modal.
     */
    AddonModQuizPreflightModalPage.prototype.closeModal = function () {
        this.domUtils.triggerFormCancelledEvent(this.formElement, this.siteId);
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(core["_10" /* ViewChild */])(ionic_angular["f" /* Content */]),
        __metadata("design:type", ionic_angular["f" /* Content */])
    ], AddonModQuizPreflightModalPage.prototype, "content", void 0);
    __decorate([
        Object(core["_10" /* ViewChild */])('preflightFormEl'),
        __metadata("design:type", core["t" /* ElementRef */])
    ], AddonModQuizPreflightModalPage.prototype, "formElement", void 0);
    AddonModQuizPreflightModalPage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-addon-mod-quiz-preflight-modal',
            templateUrl: 'preflight-modal.html',
        }),
        __metadata("design:paramtypes", [ionic_angular["t" /* NavParams */],
            esm5_forms["d" /* FormBuilder */],
            _ngx_translate_core["c" /* TranslateService */],
            sites["b" /* CoreSitesProvider */],
            ionic_angular["G" /* ViewController */],
            access_rules_delegate["a" /* AddonModQuizAccessRuleDelegate */],
            core["C" /* Injector */],
            dom["b" /* CoreDomUtilsProvider */],
            events["b" /* CoreEventsProvider */]])
    ], AddonModQuizPreflightModalPage);
    return AddonModQuizPreflightModalPage;
}());

//# sourceMappingURL=preflight-modal.js.map
// EXTERNAL MODULE: ./src/components/components.module.ts
var components_module = __webpack_require__(26);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(32);

// CONCATENATED MODULE: ./src/addon/mod/quiz/pages/preflight-modal/preflight-modal.module.ts
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
var preflight_modal_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var preflight_modal_module_AddonModQuizPreflightModalModule = /** @class */ (function () {
    function AddonModQuizPreflightModalModule() {
    }
    AddonModQuizPreflightModalModule = preflight_modal_module___decorate([
        Object(core["J" /* NgModule */])({
            declarations: [
                preflight_modal_AddonModQuizPreflightModalPage
            ],
            imports: [
                components_module["a" /* CoreComponentsModule */],
                directives_module["a" /* CoreDirectivesModule */],
                ionic_angular["l" /* IonicPageModule */].forChild(preflight_modal_AddonModQuizPreflightModalPage),
                _ngx_translate_core["b" /* TranslateModule */].forChild()
            ]
        })
    ], AddonModQuizPreflightModalModule);
    return AddonModQuizPreflightModalModule;
}());

//# sourceMappingURL=preflight-modal.module.js.map
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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-divider.js
var item_divider = __webpack_require__(103);

// EXTERNAL MODULE: ./src/components/dynamic-component/dynamic-component.ngfactory.js
var dynamic_component_ngfactory = __webpack_require__(741);

// EXTERNAL MODULE: ./src/components/dynamic-component/dynamic-component.ts
var dynamic_component = __webpack_require__(203);

// EXTERNAL MODULE: ./src/providers/logger.ts
var logger = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(20);

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

// EXTERNAL MODULE: ./src/components/loading/loading.ngfactory.js
var loading_ngfactory = __webpack_require__(57);

// EXTERNAL MODULE: ./src/components/loading/loading.ts
var loading = __webpack_require__(54);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(73);

// CONCATENATED MODULE: ./src/addon/mod/quiz/pages/preflight-modal/preflight-modal.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










































var styles_AddonModQuizPreflightModalPage = [];
var RenderType_AddonModQuizPreflightModalPage = core["_30" /* ɵcrt */]({ encapsulation: 2, styles: styles_AddonModQuizPreflightModalPage, data: {} });

function View_AddonModQuizPreflightModalPage_2(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 5, "ion-item-divider", [["class", "item item-divider"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 4, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 5, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 6, { _icons: 1 }), core["_31" /* ɵdid */](5, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null)], null, null); }
function View_AddonModQuizPreflightModalPage_1(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 11, null, null, null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_32" /* ɵeld */](2, 0, null, null, 5, "core-dynamic-component", [], null, null, null, dynamic_component_ngfactory["b" /* View_CoreDynamicComponent_0 */], dynamic_component_ngfactory["a" /* RenderType_CoreDynamicComponent */])), core["_31" /* ɵdid */](3, 901120, null, 0, dynamic_component["a" /* CoreDynamicComponent */], [logger["b" /* CoreLoggerProvider */], core["o" /* ComponentFactoryResolver */], core["F" /* KeyValueDiffers */], [2, nav_controller["a" /* NavController */]], core["j" /* ChangeDetectorRef */], core["t" /* ElementRef */], dom["b" /* CoreDomUtilsProvider */]], { component: [0, "component"], data: [1, "data"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), core["_32" /* ɵeld */](5, 0, null, 0, 1, "p", [["padding", ""]], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](-1, null, ["Couldn't find the directive to render this access rule."])), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_AddonModQuizPreflightModalPage_2)), core["_31" /* ɵdid */](10, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.component; var currVal_1 = _v.context.$implicit.data; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = !_v.context.last; _ck(_v, 10, 0, currVal_2); }, null); }
function View_AddonModQuizPreflightModalPage_0(_l) { return core["_58" /* ɵvid */](0, [core["_53" /* ɵqud */](402653184, 1, { content: 0 }), core["_53" /* ɵqud */](402653184, 2, { formElement: 0 }), (_l()(), core["_32" /* ɵeld */](2, 0, null, null, 25, "ion-header", [], null, null, null, null, null)), core["_31" /* ɵdid */](3, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_32" /* ɵeld */](5, 0, null, null, 21, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_31" /* ɵdid */](6, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), core["_31" /* ɵdid */](7, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], translate_service["a" /* TranslateService */], events["b" /* CoreEventsProvider */]], null, null), (_l()(), core["_56" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_32" /* ɵeld */](9, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_31" /* ɵdid */](10, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_56" /* ɵted */](11, 0, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_32" /* ɵeld */](14, 0, null, 2, 11, "ion-buttons", [["end", ""]], null, null, null, null, null)), core["_31" /* ɵdid */](15, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_53" /* ɵqud */](603979776, 3, { _buttons: 1 }), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_32" /* ɵeld */](18, 0, null, null, 6, "button", [["icon-only", ""], ["ion-button", ""]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_31" /* ɵdid */](19, 1097728, [[3, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_32" /* ɵeld */](22, 0, null, 0, 1, "ion-icon", [["name", "close"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_31" /* ɵdid */](23, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_56" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_32" /* ɵeld */](29, 0, null, null, 22, "ion-content", [["class", "addon-mod_quiz-preflight-modal"], ["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_31" /* ɵdid */](30, 4374528, [[1, 4]], 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["W" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["N" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_56" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_32" /* ɵeld */](32, 0, null, 1, 18, "core-loading", [], null, null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_31" /* ɵdid */](33, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["t" /* ElementRef */], events["b" /* CoreEventsProvider */], utils["b" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_32" /* ɵeld */](35, 0, [[2, 0], ["preflightFormEl", 1]], 0, 14, "form", [["ion-list", ""], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (core["_45" /* ɵnov */](_v, 37).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (core["_45" /* ɵnov */](_v, 37).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.sendData($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), core["_31" /* ɵdid */](36, 16384, null, 0, esm5_forms["w" /* ɵbf */], [], null, null), core["_31" /* ɵdid */](37, 540672, null, 0, esm5_forms["h" /* FormGroupDirective */], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), core["_51" /* ɵprd */](2048, null, esm5_forms["b" /* ControlContainer */], null, [esm5_forms["h" /* FormGroupDirective */]]), core["_31" /* ɵdid */](39, 16384, null, 0, esm5_forms["o" /* NgControlStatusGroup */], [esm5_forms["b" /* ControlContainer */]], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_AddonModQuizPreflightModalPage_1)), core["_31" /* ɵdid */](43, 802816, null, 0, common["j" /* NgForOf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), core["_32" /* ɵeld */](45, 0, null, null, 3, "button", [["block", ""], ["ion-button", ""], ["type", "submit"]], null, null, null, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_31" /* ɵdid */](46, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { block: [0, "block"] }, null), (_l()(), core["_56" /* ɵted */](47, 0, ["\n                ", "\n            "])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_56" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 7, 0); var currVal_5 = "close"; _ck(_v, 23, 0, currVal_5); var currVal_8 = _co.loaded; _ck(_v, 33, 0, currVal_8); var currVal_16 = _co.preflightForm; _ck(_v, 37, 0, currVal_16); var currVal_17 = _co.accessRulesData; _ck(_v, 43, 0, currVal_17); var currVal_18 = ""; _ck(_v, 46, 0, currVal_18); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_45" /* ɵnov */](_v, 6)._hidden; var currVal_1 = core["_45" /* ɵnov */](_v, 6)._sbPadding; _ck(_v, 5, 0, currVal_0, currVal_1); var currVal_2 = core["_57" /* ɵunv */](_v, 11, 0, core["_45" /* ɵnov */](_v, 12).transform(_co.title)); _ck(_v, 11, 0, currVal_2); var currVal_3 = core["_57" /* ɵunv */](_v, 18, 0, core["_45" /* ɵnov */](_v, 20).transform("core.close")); _ck(_v, 18, 0, currVal_3); var currVal_4 = core["_45" /* ɵnov */](_v, 23)._hidden; _ck(_v, 22, 0, currVal_4); var currVal_6 = core["_45" /* ɵnov */](_v, 30).statusbarPadding; var currVal_7 = core["_45" /* ɵnov */](_v, 30)._hasRefresher; _ck(_v, 29, 0, currVal_6, currVal_7); var currVal_9 = core["_45" /* ɵnov */](_v, 39).ngClassUntouched; var currVal_10 = core["_45" /* ɵnov */](_v, 39).ngClassTouched; var currVal_11 = core["_45" /* ɵnov */](_v, 39).ngClassPristine; var currVal_12 = core["_45" /* ɵnov */](_v, 39).ngClassDirty; var currVal_13 = core["_45" /* ɵnov */](_v, 39).ngClassValid; var currVal_14 = core["_45" /* ɵnov */](_v, 39).ngClassInvalid; var currVal_15 = core["_45" /* ɵnov */](_v, 39).ngClassPending; _ck(_v, 35, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_19 = core["_57" /* ɵunv */](_v, 47, 0, core["_45" /* ɵnov */](_v, 48).transform(_co.title)); _ck(_v, 47, 0, currVal_19); }); }
function View_AddonModQuizPreflightModalPage_Host_0(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 1, "page-addon-mod-quiz-preflight-modal", [], null, null, null, View_AddonModQuizPreflightModalPage_0, RenderType_AddonModQuizPreflightModalPage)), core["_31" /* ɵdid */](1, 114688, null, 0, preflight_modal_AddonModQuizPreflightModalPage, [nav_params["a" /* NavParams */], esm5_forms["d" /* FormBuilder */], translate_service["a" /* TranslateService */], sites["b" /* CoreSitesProvider */], view_controller["a" /* ViewController */], access_rules_delegate["a" /* AddonModQuizAccessRuleDelegate */], core["C" /* Injector */], dom["b" /* CoreDomUtilsProvider */], events["b" /* CoreEventsProvider */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AddonModQuizPreflightModalPageNgFactory = core["_28" /* ɵccf */]("page-addon-mod-quiz-preflight-modal", preflight_modal_AddonModQuizPreflightModalPage, View_AddonModQuizPreflightModalPage_Host_0, {}, {}, []);

//# sourceMappingURL=preflight-modal.ngfactory.js.map
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

// CONCATENATED MODULE: ./src/addon/mod/quiz/pages/preflight-modal/preflight-modal.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModQuizPreflightModalModuleNgFactory", function() { return AddonModQuizPreflightModalModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 































var AddonModQuizPreflightModalModuleNgFactory = core["_29" /* ɵcmf */](preflight_modal_module_AddonModQuizPreflightModalModule, [], function (_l) { return core["_41" /* ɵmod */]([core["_42" /* ɵmpd */](512, core["o" /* ComponentFactoryResolver */], core["_22" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], bs_tooltip_ngfactory["a" /* CoreBSTooltipComponentNgFactory */], AddonModQuizPreflightModalPageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["L" /* NgModuleRef */]]), core["_42" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ɵa */]]]), core["_42" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_42" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_42" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_42" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_42" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_42" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_42" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_42" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_42" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_42" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_42" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_42" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_42" /* ɵmpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_42" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_42" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_42" /* ɵmpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_42" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_42" /* ɵmpd */](512, preflight_modal_module_AddonModQuizPreflightModalModule, preflight_modal_module_AddonModQuizPreflightModalModule, []), core["_42" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_42" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_42" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], preflight_modal_AddonModQuizPreflightModalPage, [])]); });

//# sourceMappingURL=preflight-modal.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=95.js.map