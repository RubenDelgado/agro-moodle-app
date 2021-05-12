webpackJsonp([111],{

/***/ 2057:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 3 modules
var ionic_angular = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/index.js + 1 modules
var _ngx_translate_core = __webpack_require__(3);

// EXTERNAL MODULE: ./src/components/components.module.ts
var components_module = __webpack_require__(26);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(23);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(9);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(1);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/providers/utils/text.ts
var utils_text = __webpack_require__(10);

// EXTERNAL MODULE: ./src/core/fileuploader/providers/fileuploader.ts
var fileuploader = __webpack_require__(70);

// EXTERNAL MODULE: ./src/addon/mod/glossary/providers/glossary.ts
var glossary = __webpack_require__(208);

// EXTERNAL MODULE: ./src/addon/mod/glossary/providers/offline.ts
var offline = __webpack_require__(263);

// EXTERNAL MODULE: ./src/addon/mod/glossary/providers/helper.ts
var helper = __webpack_require__(516);

// CONCATENATED MODULE: ./src/addon/mod/glossary/pages/edit/edit.ts
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
 * Page that displays the edit form.
 */
var edit_AddonModGlossaryEditPage = /** @class */ (function () {
    function AddonModGlossaryEditPage(navParams, navCtrl, translate, domUtils, eventsProvider, sitesProvider, uploaderProvider, textUtils, glossaryProvider, glossaryOffline, glossaryHelper) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.domUtils = domUtils;
        this.eventsProvider = eventsProvider;
        this.sitesProvider = sitesProvider;
        this.uploaderProvider = uploaderProvider;
        this.textUtils = textUtils;
        this.glossaryProvider = glossaryProvider;
        this.glossaryOffline = glossaryOffline;
        this.glossaryHelper = glossaryHelper;
        this.component = glossary["a" /* AddonModGlossaryProvider */].COMPONENT;
        this.loaded = false;
        this.entry = {
            concept: '',
            definition: '',
            timecreated: 0,
        };
        this.options = {
            categories: [],
            aliases: '',
            usedynalink: false,
            casesensitive: false,
            fullmatch: false
        };
        this.attachments = [];
        this.definitionControl = new esm5_forms["e" /* FormControl */]();
        this.categories = [];
        this.editorExtraParams = {};
        this.isDestroyed = false;
        this.saved = false;
        this.courseId = navParams.get('courseId');
        this.module = navParams.get('module');
        this.glossary = navParams.get('glossary');
    }
    /**
     * Component being initialized.
     */
    AddonModGlossaryEditPage.prototype.ngOnInit = function () {
        var _this = this;
        var entry = this.navParams.get('entry');
        var promise;
        if (entry) {
            this.entry.concept = entry.concept || '';
            this.entry.definition = entry.definition || '';
            this.entry.timecreated = entry.timecreated || 0;
            this.originalData = {
                concept: this.entry.concept,
                definition: this.entry.definition,
                files: [],
            };
            if (entry.options) {
                this.options.categories = entry.options.categories || [];
                this.options.aliases = entry.options.aliases || '';
                this.options.usedynalink = !!entry.options.usedynalink;
                if (this.options.usedynalink) {
                    this.options.casesensitive = !!entry.options.casesensitive;
                    this.options.fullmatch = !!entry.options.fullmatch;
                }
            }
            // Treat offline attachments if any.
            if (entry.attachments && entry.attachments.offline) {
                promise = this.glossaryHelper.getStoredFiles(this.glossary.id, entry.concept, entry.timecreated).then(function (files) {
                    _this.attachments = files;
                    _this.originalData.files = files.slice();
                });
            }
            if (entry.id) {
                this.editorExtraParams.id = entry.id;
            }
        }
        this.definitionControl.setValue(this.entry.definition);
        Promise.resolve(promise).then(function () {
            _this.glossaryProvider.getAllCategories(_this.glossary.id, {
                cmId: _this.module.id,
            }).then(function (categories) {
                _this.categories = categories;
            }).finally(function () {
                _this.loaded = true;
            });
        });
    };
    /**
     * Definition changed.
     *
     * @param text The new text.
     */
    AddonModGlossaryEditPage.prototype.onDefinitionChange = function (text) {
        this.entry.definition = text;
    };
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    AddonModGlossaryEditPage.prototype.ionViewCanLeave = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.saved) {
                            return [2 /*return*/];
                        }
                        if (!this.glossaryHelper.hasEntryDataChanged(this.entry, this.attachments, this.originalData)) return [3 /*break*/, 2];
                        // Show confirmation if some data has been modified.
                        return [4 /*yield*/, this.domUtils.showConfirm(this.translate.instant('core.confirmcanceledit'))];
                    case 1:
                        // Show confirmation if some data has been modified.
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        // Delete the local files from the tmp folder.
                        this.uploaderProvider.clearTmpFiles(this.attachments);
                        this.domUtils.triggerFormCancelledEvent(this.formElement, this.sitesProvider.getCurrentSiteId());
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Save the entry.
     */
    AddonModGlossaryEditPage.prototype.save = function () {
        var _this = this;
        var definition = this.entry.definition, saveOffline = false, promise;
        var timecreated = this.entry.timecreated || Date.now();
        if (!this.entry.concept || !definition) {
            this.domUtils.showErrorModal('addon.mod_glossary.fillfields', true);
            return;
        }
        var modal = this.domUtils.showModalLoading('core.sending', true);
        // Add some HTML to the definition if needed.
        definition = this.textUtils.formatHtmlLines(definition);
        // Upload attachments first if any.
        if (this.attachments.length > 0) {
            promise = this.glossaryHelper.uploadOrStoreFiles(this.glossary.id, this.entry.concept, timecreated, this.attachments, false).catch(function () {
                // Cannot upload them in online, save them in offline.
                saveOffline = true;
                return _this.glossaryHelper.uploadOrStoreFiles(_this.glossary.id, _this.entry.concept, timecreated, _this.attachments, true);
            });
        }
        else {
            promise = Promise.resolve();
        }
        promise.then(function (attach) {
            var options = {
                aliases: _this.options.aliases,
                categories: _this.options.categories.join(',')
            };
            if (_this.glossary.usedynalink) {
                options.usedynalink = _this.options.usedynalink ? 1 : 0;
                if (_this.options.usedynalink) {
                    options.casesensitive = _this.options.casesensitive ? 1 : 0;
                    options.fullmatch = _this.options.fullmatch ? 1 : 0;
                }
            }
            if (saveOffline) {
                var promise_1;
                if (_this.entry && !_this.glossary.allowduplicatedentries) {
                    // Check if the entry is duplicated in online or offline mode.
                    promise_1 = _this.glossaryProvider.isConceptUsed(_this.glossary.id, _this.entry.concept, {
                        timeCreated: _this.entry.timecreated,
                        cmId: _this.module.id,
                    }).then(function (used) {
                        if (used) {
                            // There's a entry with same name, reject with error message.
                            return Promise.reject(_this.translate.instant('addon.mod_glossary.errconceptalreadyexists'));
                        }
                    });
                }
                else {
                    promise_1 = Promise.resolve();
                }
                return promise_1.then(function () {
                    // Save entry in offline.
                    return _this.glossaryOffline.addNewEntry(_this.glossary.id, _this.entry.concept, definition, _this.courseId, options, attach, timecreated, undefined, undefined, _this.entry).then(function () {
                        // Don't return anything.
                    });
                });
            }
            else {
                // Try to send it to server.
                // Don't allow offline if there are attachments since they were uploaded fine.
                return _this.glossaryProvider.addEntry(_this.glossary.id, _this.entry.concept, definition, _this.courseId, options, attach, {
                    timeCreated: timecreated,
                    discardEntry: _this.entry,
                    allowOffline: !_this.attachments.length,
                    checkDuplicates: !_this.glossary.allowduplicatedentries,
                });
            }
        }).then(function (entryId) {
            // Delete the local files from the tmp folder.
            _this.uploaderProvider.clearTmpFiles(_this.attachments);
            if (entryId) {
                // Data sent to server, delete stored files (if any).
                _this.glossaryHelper.deleteStoredFiles(_this.glossary.id, _this.entry.concept, timecreated);
                _this.eventsProvider.trigger(events["b" /* CoreEventsProvider */].ACTIVITY_DATA_SENT, { module: 'glossary' });
            }
            var data = {
                glossaryId: _this.glossary.id,
            };
            _this.eventsProvider.trigger(glossary["a" /* AddonModGlossaryProvider */].ADD_ENTRY_EVENT, data, _this.sitesProvider.getCurrentSiteId());
            _this.domUtils.triggerFormSubmittedEvent(_this.formElement, !!entryId, _this.sitesProvider.getCurrentSiteId());
            _this.saved = true;
            _this.navCtrl.pop();
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.mod_glossary.cannoteditentry', true);
        }).finally(function () {
            modal.dismiss();
        });
    };
    __decorate([
        Object(core["_10" /* ViewChild */])('editFormEl'),
        __metadata("design:type", core["t" /* ElementRef */])
    ], AddonModGlossaryEditPage.prototype, "formElement", void 0);
    AddonModGlossaryEditPage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-addon-mod-glossary-edit',
            templateUrl: 'edit.html',
        }),
        __metadata("design:paramtypes", [ionic_angular["t" /* NavParams */],
            ionic_angular["s" /* NavController */],
            _ngx_translate_core["c" /* TranslateService */],
            dom["b" /* CoreDomUtilsProvider */],
            events["b" /* CoreEventsProvider */],
            sites["b" /* CoreSitesProvider */],
            fileuploader["b" /* CoreFileUploaderProvider */],
            utils_text["b" /* CoreTextUtilsProvider */],
            glossary["a" /* AddonModGlossaryProvider */],
            offline["a" /* AddonModGlossaryOfflineProvider */],
            helper["a" /* AddonModGlossaryHelperProvider */]])
    ], AddonModGlossaryEditPage);
    return AddonModGlossaryEditPage;
}());

//# sourceMappingURL=edit.js.map
// EXTERNAL MODULE: ./src/core/editor/components/components.module.ts
var components_components_module = __webpack_require__(202);

// CONCATENATED MODULE: ./src/addon/mod/glossary/pages/edit/edit.module.ts
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
var edit_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var edit_module_AddonModGlossaryNewDiscussionPageModule = /** @class */ (function () {
    function AddonModGlossaryNewDiscussionPageModule() {
    }
    AddonModGlossaryNewDiscussionPageModule = edit_module___decorate([
        Object(core["J" /* NgModule */])({
            declarations: [
                edit_AddonModGlossaryEditPage,
            ],
            imports: [
                components_module["a" /* CoreComponentsModule */],
                directives_module["a" /* CoreDirectivesModule */],
                components_components_module["a" /* CoreEditorComponentsModule */],
                ionic_angular["l" /* IonicPageModule */].forChild(edit_AddonModGlossaryEditPage),
                _ngx_translate_core["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModGlossaryNewDiscussionPageModule);
    return AddonModGlossaryNewDiscussionPageModule;
}());

//# sourceMappingURL=edit.module.js.map
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

// EXTERNAL MODULE: ./src/core/editor/components/rich-text-editor/rich-text-editor.ngfactory.js
var rich_text_editor_ngfactory = __webpack_require__(279);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/option/option.js
var option_option = __webpack_require__(113);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/label/label.js
var label = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select.ngfactory.js
var select_ngfactory = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select.js
var select_select = __webpack_require__(114);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/deep-linker.js
var deep_linker = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-divider.js
var item_divider = __webpack_require__(103);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toggle/toggle.ngfactory.js
var toggle_ngfactory = __webpack_require__(742);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toggle/toggle.js + 1 modules
var toggle = __webpack_require__(326);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/ionic-angular/tap-click/haptic.js
var haptic = __webpack_require__(190);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(379);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.ngfactory.js
var navbar_ngfactory = __webpack_require__(739);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.js
var navbar = __webpack_require__(216);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(20);

// EXTERNAL MODULE: ./src/directives/back-button.ts
var back_button = __webpack_require__(486);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory.js
var toolbar_title_ngfactory = __webpack_require__(740);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.js
var toolbar_title = __webpack_require__(324);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(252);

// EXTERNAL MODULE: ./src/directives/format-text.ts
var format_text = __webpack_require__(49);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-item.js
var toolbar_item = __webpack_require__(380);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(185);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(112);

// EXTERNAL MODULE: ./src/components/loading/loading.ngfactory.js
var loading_ngfactory = __webpack_require__(57);

// EXTERNAL MODULE: ./src/components/loading/loading.ts
var loading = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.ngfactory.js
var input_ngfactory = __webpack_require__(115);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.js
var input = __webpack_require__(95);

// EXTERNAL MODULE: ./src/core/editor/components/rich-text-editor/rich-text-editor.ts
var rich_text_editor = __webpack_require__(254);

// EXTERNAL MODULE: ./src/core/editor/providers/editor-offline.ts
var editor_offline = __webpack_require__(219);

// EXTERNAL MODULE: ./node_modules/@ionic-native/device/index.js
var device = __webpack_require__(180);

// EXTERNAL MODULE: ./src/directives/auto-rows.ts
var auto_rows = __webpack_require__(389);

// EXTERNAL MODULE: ./src/components/attachments/attachments.ngfactory.js
var attachments_ngfactory = __webpack_require__(384);

// EXTERNAL MODULE: ./src/components/attachments/attachments.ts
var attachments = __webpack_require__(290);

// EXTERNAL MODULE: ./src/providers/app.ts
var providers_app = __webpack_require__(12);

// EXTERNAL MODULE: ./src/core/fileuploader/providers/helper.ts
var fileuploader_providers_helper = __webpack_require__(145);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(73);

// CONCATENATED MODULE: ./src/addon/mod/glossary/pages/edit/edit.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










































































var styles_AddonModGlossaryEditPage = [];
var RenderType_AddonModGlossaryEditPage = core["_30" /* ɵcrt */]({ encapsulation: 2, styles: styles_AddonModGlossaryEditPage, data: {} });

function View_AddonModGlossaryEditPage_2(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), core["_31" /* ɵdid */](1, 16384, [[12, 4]], 0, option_option["a" /* Option */], [core["t" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_56" /* ɵted */](2, null, ["", ""]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.id; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.name; _ck(_v, 2, 0, currVal_1); }); }
function View_AddonModGlossaryEditPage_1(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 24, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 9, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 10, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 11, { _icons: 1 }), core["_31" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_32" /* ɵeld */](7, 0, null, 1, 3, "ion-label", [["id", "addon-mod-glossary-categories-label"], ["stacked", ""]], null, null, null, null, null)), core["_31" /* ɵdid */](8, 16384, [[9, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], { id: [0, "id"] }, null), (_l()(), core["_56" /* ɵted */](9, null, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_32" /* ɵeld */](12, 0, null, 3, 11, "ion-select", [["aria-labelledby", "addon-mod-glossary-categories-label"], ["interface", "action-sheet"], ["multiple", "true"], ["name", "categories"]], [[2, "select-disabled", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "click"], [null, "keyup.space"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (core["_45" /* ɵnov */](_v, 13)._click($event) !== false);
        ad = (pd_0 && ad);
    } if (("keyup.space" === en)) {
        var pd_1 = (core["_45" /* ɵnov */](_v, 13)._keyup() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.options.categories = $event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, select_ngfactory["b" /* View_Select_0 */], select_ngfactory["a" /* RenderType_Select */])), core["_31" /* ɵdid */](13, 1228800, null, 1, select_select["a" /* Select */], [app["a" /* App */], util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item["a" /* Item */]], deep_linker["a" /* DeepLinker */]], { placeholder: [0, "placeholder"], interface: [1, "interface"], multiple: [2, "multiple"] }, null), core["_53" /* ɵqud */](603979776, 12, { options: 1 }), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), core["_51" /* ɵprd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [select_select["a" /* Select */]]), core["_31" /* ɵdid */](17, 671744, null, 0, esm5_forms["q" /* NgModel */], [[2, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), core["_51" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_31" /* ɵdid */](19, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_AddonModGlossaryEditPage_2)), core["_31" /* ɵdid */](22, 802816, null, 0, common["j" /* NgForOf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "addon-mod-glossary-categories-label"; _ck(_v, 8, 0, currVal_0); var currVal_10 = core["_57" /* ɵunv */](_v, 13, 0, core["_45" /* ɵnov */](_v, 15).transform("addon.mod_glossary.categories")); var currVal_11 = "action-sheet"; var currVal_12 = "true"; _ck(_v, 13, 0, currVal_10, currVal_11, currVal_12); var currVal_13 = "categories"; var currVal_14 = _co.options.categories; _ck(_v, 17, 0, currVal_13, currVal_14); var currVal_15 = _co.categories; _ck(_v, 22, 0, currVal_15); }, function (_ck, _v) { var currVal_1 = core["_57" /* ɵunv */](_v, 9, 0, core["_45" /* ɵnov */](_v, 10).transform("addon.mod_glossary.categories")); _ck(_v, 9, 0, currVal_1); var currVal_2 = core["_45" /* ɵnov */](_v, 13)._disabled; var currVal_3 = core["_45" /* ɵnov */](_v, 19).ngClassUntouched; var currVal_4 = core["_45" /* ɵnov */](_v, 19).ngClassTouched; var currVal_5 = core["_45" /* ɵnov */](_v, 19).ngClassPristine; var currVal_6 = core["_45" /* ɵnov */](_v, 19).ngClassDirty; var currVal_7 = core["_45" /* ɵnov */](_v, 19).ngClassValid; var currVal_8 = core["_45" /* ɵnov */](_v, 19).ngClassInvalid; var currVal_9 = core["_45" /* ɵnov */](_v, 19).ngClassPending; _ck(_v, 12, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
function View_AddonModGlossaryEditPage_3(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 70, null, null, null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_32" /* ɵeld */](2, 0, null, null, 7, "ion-item-divider", [["class", "item item-divider"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](3, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 19, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 20, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 21, { _icons: 1 }), core["_31" /* ɵdid */](7, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), (_l()(), core["_56" /* ɵted */](8, 2, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_32" /* ɵeld */](11, 0, null, null, 18, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](12, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 22, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 23, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 24, { _icons: 1 }), core["_31" /* ɵdid */](16, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_32" /* ɵeld */](18, 0, null, 1, 3, "ion-label", [], null, null, null, null, null)), core["_31" /* ɵdid */](19, 16384, [[22, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_56" /* ɵted */](20, null, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_32" /* ɵeld */](23, 0, null, 4, 5, "ion-toggle", [["name", "usedynalink"]], [[2, "toggle-disabled", null], [2, "toggle-checked", null], [2, "toggle-activated", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keyup"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keyup" === en)) {
        var pd_0 = (core["_45" /* ɵnov */](_v, 24)._keyup($event) !== false);
        ad = (pd_0 && ad);
    } if (("ngModelChange" === en)) {
        var pd_1 = ((_co.options.usedynalink = $event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, toggle_ngfactory["b" /* View_Toggle_0 */], toggle_ngfactory["a" /* RenderType_Toggle */])), core["_31" /* ɵdid */](24, 1228800, null, 0, toggle["a" /* Toggle */], [util_form["a" /* Form */], config["a" /* Config */], platform["a" /* Platform */], core["t" /* ElementRef */], core["W" /* Renderer */], haptic["a" /* Haptic */], [2, item["a" /* Item */]], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */], core["N" /* NgZone */]], null, null), core["_51" /* ɵprd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [toggle["a" /* Toggle */]]), core["_31" /* ɵdid */](26, 671744, null, 0, esm5_forms["q" /* NgModel */], [[2, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), core["_51" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_31" /* ɵdid */](28, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_32" /* ɵeld */](31, 0, null, null, 18, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](32, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 25, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 26, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 27, { _icons: 1 }), core["_31" /* ɵdid */](36, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_32" /* ɵeld */](38, 0, null, 1, 3, "ion-label", [], null, null, null, null, null)), core["_31" /* ɵdid */](39, 16384, [[25, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_56" /* ɵted */](40, null, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_32" /* ɵeld */](43, 0, null, 4, 5, "ion-toggle", [["name", "casesensitive"]], [[2, "toggle-disabled", null], [2, "toggle-checked", null], [2, "toggle-activated", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keyup"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keyup" === en)) {
        var pd_0 = (core["_45" /* ɵnov */](_v, 44)._keyup($event) !== false);
        ad = (pd_0 && ad);
    } if (("ngModelChange" === en)) {
        var pd_1 = ((_co.options.casesensitive = $event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, toggle_ngfactory["b" /* View_Toggle_0 */], toggle_ngfactory["a" /* RenderType_Toggle */])), core["_31" /* ɵdid */](44, 1228800, null, 0, toggle["a" /* Toggle */], [util_form["a" /* Form */], config["a" /* Config */], platform["a" /* Platform */], core["t" /* ElementRef */], core["W" /* Renderer */], haptic["a" /* Haptic */], [2, item["a" /* Item */]], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */], core["N" /* NgZone */]], { disabled: [0, "disabled"] }, null), core["_51" /* ɵprd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [toggle["a" /* Toggle */]]), core["_31" /* ɵdid */](46, 671744, null, 0, esm5_forms["q" /* NgModel */], [[2, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], isDisabled: [1, "isDisabled"], model: [2, "model"] }, { update: "ngModelChange" }), core["_51" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_31" /* ɵdid */](48, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_32" /* ɵeld */](51, 0, null, null, 18, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](52, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 28, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 29, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 30, { _icons: 1 }), core["_31" /* ɵdid */](56, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_32" /* ɵeld */](58, 0, null, 1, 3, "ion-label", [], null, null, null, null, null)), core["_31" /* ɵdid */](59, 16384, [[28, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_56" /* ɵted */](60, null, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_32" /* ɵeld */](63, 0, null, 4, 5, "ion-toggle", [["name", "fullmatch"]], [[2, "toggle-disabled", null], [2, "toggle-checked", null], [2, "toggle-activated", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keyup"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keyup" === en)) {
        var pd_0 = (core["_45" /* ɵnov */](_v, 64)._keyup($event) !== false);
        ad = (pd_0 && ad);
    } if (("ngModelChange" === en)) {
        var pd_1 = ((_co.options.fullmatch = $event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, toggle_ngfactory["b" /* View_Toggle_0 */], toggle_ngfactory["a" /* RenderType_Toggle */])), core["_31" /* ɵdid */](64, 1228800, null, 0, toggle["a" /* Toggle */], [util_form["a" /* Form */], config["a" /* Config */], platform["a" /* Platform */], core["t" /* ElementRef */], core["W" /* Renderer */], haptic["a" /* Haptic */], [2, item["a" /* Item */]], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */], core["N" /* NgZone */]], { disabled: [0, "disabled"] }, null), core["_51" /* ɵprd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [toggle["a" /* Toggle */]]), core["_31" /* ɵdid */](66, 671744, null, 0, esm5_forms["q" /* NgModel */], [[2, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], isDisabled: [1, "isDisabled"], model: [2, "model"] }, { update: "ngModelChange" }), core["_51" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_31" /* ɵdid */](68, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_12 = "usedynalink"; var currVal_13 = _co.options.usedynalink; _ck(_v, 26, 0, currVal_12, currVal_13); var currVal_25 = !_co.options.usedynalink; _ck(_v, 44, 0, currVal_25); var currVal_26 = "casesensitive"; var currVal_27 = !_co.options.usedynalink; var currVal_28 = _co.options.casesensitive; _ck(_v, 46, 0, currVal_26, currVal_27, currVal_28); var currVal_40 = !_co.options.usedynalink; _ck(_v, 64, 0, currVal_40); var currVal_41 = "fullmatch"; var currVal_42 = !_co.options.usedynalink; var currVal_43 = _co.options.fullmatch; _ck(_v, 66, 0, currVal_41, currVal_42, currVal_43); }, function (_ck, _v) { var currVal_0 = core["_57" /* ɵunv */](_v, 8, 0, core["_45" /* ɵnov */](_v, 9).transform("addon.mod_glossary.linking")); _ck(_v, 8, 0, currVal_0); var currVal_1 = core["_57" /* ɵunv */](_v, 20, 0, core["_45" /* ɵnov */](_v, 21).transform("addon.mod_glossary.entryusedynalink")); _ck(_v, 20, 0, currVal_1); var currVal_2 = core["_45" /* ɵnov */](_v, 24)._disabled; var currVal_3 = core["_45" /* ɵnov */](_v, 24)._value; var currVal_4 = core["_45" /* ɵnov */](_v, 24)._activated; var currVal_5 = core["_45" /* ɵnov */](_v, 28).ngClassUntouched; var currVal_6 = core["_45" /* ɵnov */](_v, 28).ngClassTouched; var currVal_7 = core["_45" /* ɵnov */](_v, 28).ngClassPristine; var currVal_8 = core["_45" /* ɵnov */](_v, 28).ngClassDirty; var currVal_9 = core["_45" /* ɵnov */](_v, 28).ngClassValid; var currVal_10 = core["_45" /* ɵnov */](_v, 28).ngClassInvalid; var currVal_11 = core["_45" /* ɵnov */](_v, 28).ngClassPending; _ck(_v, 23, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_14 = core["_57" /* ɵunv */](_v, 40, 0, core["_45" /* ɵnov */](_v, 41).transform("addon.mod_glossary.casesensitive")); _ck(_v, 40, 0, currVal_14); var currVal_15 = core["_45" /* ɵnov */](_v, 44)._disabled; var currVal_16 = core["_45" /* ɵnov */](_v, 44)._value; var currVal_17 = core["_45" /* ɵnov */](_v, 44)._activated; var currVal_18 = core["_45" /* ɵnov */](_v, 48).ngClassUntouched; var currVal_19 = core["_45" /* ɵnov */](_v, 48).ngClassTouched; var currVal_20 = core["_45" /* ɵnov */](_v, 48).ngClassPristine; var currVal_21 = core["_45" /* ɵnov */](_v, 48).ngClassDirty; var currVal_22 = core["_45" /* ɵnov */](_v, 48).ngClassValid; var currVal_23 = core["_45" /* ɵnov */](_v, 48).ngClassInvalid; var currVal_24 = core["_45" /* ɵnov */](_v, 48).ngClassPending; _ck(_v, 43, 0, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24); var currVal_29 = core["_57" /* ɵunv */](_v, 60, 0, core["_45" /* ɵnov */](_v, 61).transform("addon.mod_glossary.fullmatch")); _ck(_v, 60, 0, currVal_29); var currVal_30 = core["_45" /* ɵnov */](_v, 64)._disabled; var currVal_31 = core["_45" /* ɵnov */](_v, 64)._value; var currVal_32 = core["_45" /* ɵnov */](_v, 64)._activated; var currVal_33 = core["_45" /* ɵnov */](_v, 68).ngClassUntouched; var currVal_34 = core["_45" /* ɵnov */](_v, 68).ngClassTouched; var currVal_35 = core["_45" /* ɵnov */](_v, 68).ngClassPristine; var currVal_36 = core["_45" /* ɵnov */](_v, 68).ngClassDirty; var currVal_37 = core["_45" /* ɵnov */](_v, 68).ngClassValid; var currVal_38 = core["_45" /* ɵnov */](_v, 68).ngClassInvalid; var currVal_39 = core["_45" /* ɵnov */](_v, 68).ngClassPending; _ck(_v, 63, 0, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39); }); }
function View_AddonModGlossaryEditPage_0(_l) { return core["_58" /* ɵvid */](0, [core["_53" /* ɵqud */](402653184, 1, { formElement: 0 }), (_l()(), core["_32" /* ɵeld */](1, 0, null, null, 22, "ion-header", [], null, null, null, null, null)), core["_31" /* ɵdid */](2, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_32" /* ɵeld */](4, 0, null, null, 18, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_31" /* ɵdid */](5, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), core["_31" /* ɵdid */](6, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], translate_service["a" /* TranslateService */], events["b" /* CoreEventsProvider */]], null, null), (_l()(), core["_56" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_32" /* ɵeld */](8, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_31" /* ɵdid */](9, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_32" /* ɵeld */](10, 16777216, null, 0, 1, "core-format-text", [["contextLevel", "module"]], null, null, null, null, null)), core["_31" /* ɵdid */](11, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["t" /* ElementRef */], sites["b" /* CoreSitesProvider */], dom["b" /* CoreDomUtilsProvider */], utils_text["b" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["b" /* CoreUtilsProvider */], url["b" /* CoreUrlUtilsProvider */], logger["b" /* CoreLoggerProvider */], filepool["b" /* CoreFilepoolProvider */], providers_helper["b" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["b" /* CoreEventsProvider */], filter["a" /* CoreFilterProvider */], filter_providers_helper["a" /* CoreFilterHelperProvider */], delegate["a" /* CoreFilterDelegate */], core["_12" /* ViewContainerRef */], urlschemes["b" /* CoreCustomURLSchemesProvider */]], { text: [0, "text"], contextLevel: [1, "contextLevel"], contextInstanceId: [2, "contextInstanceId"], courseId: [3, "courseId"] }, null), (_l()(), core["_56" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_32" /* ɵeld */](13, 0, null, 2, 8, "ion-buttons", [["end", ""]], null, null, null, null, null)), core["_31" /* ɵdid */](14, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_53" /* ɵqud */](603979776, 2, { _buttons: 1 }), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_32" /* ɵeld */](17, 0, null, null, 3, "button", [["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.save() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_31" /* ɵdid */](18, 1097728, [[2, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), (_l()(), core["_56" /* ɵted */](19, 0, [" ", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_56" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_32" /* ɵeld */](25, 0, null, null, 88, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_31" /* ɵdid */](26, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["W" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["N" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_56" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_32" /* ɵeld */](28, 0, null, 1, 84, "core-loading", [], null, null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_31" /* ɵdid */](29, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["t" /* ElementRef */], events["b" /* CoreEventsProvider */], utils["b" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_32" /* ɵeld */](31, 0, [[1, 0], ["editFormEl", 1]], 0, 80, "form", [["ion-list", ""], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (core["_45" /* ɵnov */](_v, 33).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (core["_45" /* ɵnov */](_v, 33).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), core["_31" /* ɵdid */](32, 16384, null, 0, esm5_forms["w" /* ɵbf */], [], null, null), core["_31" /* ɵdid */](33, 4210688, null, 0, esm5_forms["p" /* NgForm */], [[8, null], [8, null]], null, null), core["_51" /* ɵprd */](2048, null, esm5_forms["b" /* ControlContainer */], null, [esm5_forms["p" /* NgForm */]]), core["_31" /* ɵdid */](35, 16384, null, 0, esm5_forms["o" /* NgControlStatusGroup */], [esm5_forms["b" /* ControlContainer */]], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_32" /* ɵeld */](37, 0, null, null, 18, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](38, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 3, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 4, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 5, { _icons: 1 }), core["_31" /* ɵdid */](42, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_32" /* ɵeld */](44, 0, null, 1, 3, "ion-label", [["stacked", ""]], null, null, null, null, null)), core["_31" /* ɵdid */](45, 16384, [[3, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), core["_56" /* ɵted */](46, null, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_32" /* ɵeld */](49, 0, null, 3, 5, "ion-input", [["name", "concept"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.entry.concept = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["_31" /* ɵdid */](50, 671744, null, 0, esm5_forms["q" /* NgModel */], [[2, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [8, null]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), core["_51" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_31" /* ɵdid */](52, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), core["_31" /* ɵdid */](53, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app["a" /* App */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["m" /* NgControl */]], dom_controller["a" /* DomController */]], { type: [0, "type"], placeholder: [1, "placeholder"] }, null), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_32" /* ɵeld */](57, 0, null, null, 15, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](58, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 6, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 7, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 8, { _icons: 1 }), core["_31" /* ɵdid */](62, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_32" /* ɵeld */](64, 0, null, 1, 3, "ion-label", [["stacked", ""]], null, null, null, null, null)), core["_31" /* ɵdid */](65, 16384, [[6, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), core["_56" /* ɵted */](66, null, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_32" /* ɵeld */](69, 0, null, 3, 2, "core-rich-text-editor", [["contextLevel", "module"], ["elementId", "definition_editor"], ["item-content", ""], ["name", "addon_mod_glossary_edit"]], null, [[null, "contentChanged"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("contentChanged" === en)) {
        var pd_0 = (_co.onDefinitionChange($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, rich_text_editor_ngfactory["c" /* View_CoreEditorRichTextEditorComponent_0 */], rich_text_editor_ngfactory["b" /* RenderType_CoreEditorRichTextEditorComponent */])), core["_31" /* ɵdid */](70, 1228800, null, 0, rich_text_editor["a" /* CoreEditorRichTextEditorComponent */], [dom["b" /* CoreDomUtilsProvider */], url["b" /* CoreUrlUtilsProvider */], sites["b" /* CoreSitesProvider */], filepool["b" /* CoreFilepoolProvider */], [2, content["a" /* Content */]], core["t" /* ElementRef */], events["b" /* CoreEventsProvider */], utils["b" /* CoreUtilsProvider */], platform["a" /* Platform */], editor_offline["a" /* CoreEditorOfflineProvider */], device["a" /* Device */]], { placeholder: [0, "placeholder"], control: [1, "control"], name: [2, "name"], component: [3, "component"], componentId: [4, "componentId"], autoSave: [5, "autoSave"], contextLevel: [6, "contextLevel"], contextInstanceId: [7, "contextInstanceId"], elementId: [8, "elementId"], draftExtraParams: [9, "draftExtraParams"] }, { contentChanged: "contentChanged" }), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_AddonModGlossaryEditPage_1)), core["_31" /* ɵdid */](75, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_32" /* ɵeld */](77, 0, null, null, 18, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](78, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 13, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 14, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 15, { _icons: 1 }), core["_31" /* ɵdid */](82, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_32" /* ɵeld */](84, 0, null, 1, 3, "ion-label", [["id", "addon-mod-glossary-aliases-label"], ["stacked", ""]], null, null, null, null, null)), core["_31" /* ɵdid */](85, 16384, [[13, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], { id: [0, "id"] }, null), (_l()(), core["_56" /* ɵted */](86, null, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_32" /* ɵeld */](89, 0, null, 3, 5, "ion-textarea", [["aria-labelledby", "addon-mod-glossary-aliases-label"], ["core-auto-rows", ""], ["name", "aliases"], ["rows", "1"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (core["_45" /* ɵnov */](_v, 90).onInput() !== false);
        ad = (pd_0 && ad);
    } if (("change" === en)) {
        var pd_1 = (core["_45" /* ɵnov */](_v, 90).onChange() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.options.aliases = $event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["_31" /* ɵdid */](90, 4210688, null, 0, auto_rows["a" /* CoreAutoRowsDirective */], [core["t" /* ElementRef */]], null, null), core["_31" /* ɵdid */](91, 671744, null, 0, esm5_forms["q" /* NgModel */], [[2, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [8, null]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), core["_51" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_31" /* ɵdid */](93, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), core["_31" /* ɵdid */](94, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app["a" /* App */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["m" /* NgControl */]], dom_controller["a" /* DomController */]], null, { input: "input" }), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_32" /* ɵeld */](97, 0, null, null, 7, "ion-item-divider", [["class", "item item-divider"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](98, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 16, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 17, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 18, { _icons: 1 }), core["_31" /* ɵdid */](102, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), (_l()(), core["_56" /* ɵted */](103, 2, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_32" /* ɵeld */](106, 0, null, null, 1, "core-attachments", [], null, null, null, attachments_ngfactory["b" /* View_CoreAttachmentsComponent_0 */], attachments_ngfactory["a" /* RenderType_CoreAttachmentsComponent */])), core["_31" /* ɵdid */](107, 114688, null, 0, attachments["a" /* CoreAttachmentsComponent */], [providers_app["b" /* CoreAppProvider */], dom["b" /* CoreDomUtilsProvider */], utils_text["b" /* CoreTextUtilsProvider */], fileuploader["b" /* CoreFileUploaderProvider */], translate_service["a" /* TranslateService */], fileuploader_providers_helper["a" /* CoreFileUploaderHelperProvider */]], { files: [0, "files"], component: [1, "component"], componentId: [2, "componentId"], allowOffline: [3, "allowOffline"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_AddonModGlossaryEditPage_3)), core["_31" /* ɵdid */](110, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_56" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 6, 0); var currVal_2 = _co.module.name; var currVal_3 = "module"; var currVal_4 = _co.module.id; var currVal_5 = _co.courseId; _ck(_v, 11, 0, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_9 = _co.loaded; _ck(_v, 29, 0, currVal_9); var currVal_25 = "concept"; var currVal_26 = _co.entry.concept; _ck(_v, 50, 0, currVal_25, currVal_26); var currVal_27 = "text"; var currVal_28 = core["_57" /* ɵunv */](_v, 53, 1, core["_45" /* ɵnov */](_v, 54).transform("addon.mod_glossary.concept")); _ck(_v, 53, 0, currVal_27, currVal_28); var currVal_30 = core["_57" /* ɵunv */](_v, 70, 0, core["_45" /* ɵnov */](_v, 71).transform("addon.mod_glossary.definition")); var currVal_31 = _co.definitionControl; var currVal_32 = "addon_mod_glossary_edit"; var currVal_33 = _co.component; var currVal_34 = _co.glossary.cmid; var currVal_35 = true; var currVal_36 = "module"; var currVal_37 = _co.module.id; var currVal_38 = "definition_editor"; var currVal_39 = _co.editorExtraParams; _ck(_v, 70, 0, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39); var currVal_40 = (_co.categories.length > 0); _ck(_v, 75, 0, currVal_40); var currVal_41 = "addon-mod-glossary-aliases-label"; _ck(_v, 85, 0, currVal_41); var currVal_50 = "aliases"; var currVal_51 = _co.options.aliases; _ck(_v, 91, 0, currVal_50, currVal_51); var currVal_53 = _co.attachments; var currVal_54 = _co.component; var currVal_55 = _co.glossary.cmid; var currVal_56 = true; _ck(_v, 107, 0, currVal_53, currVal_54, currVal_55, currVal_56); var currVal_57 = _co.glossary.usedynalink; _ck(_v, 110, 0, currVal_57); }, function (_ck, _v) { var currVal_0 = core["_45" /* ɵnov */](_v, 5)._hidden; var currVal_1 = core["_45" /* ɵnov */](_v, 5)._sbPadding; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_6 = core["_57" /* ɵunv */](_v, 19, 0, core["_45" /* ɵnov */](_v, 20).transform("core.save")); _ck(_v, 19, 0, currVal_6); var currVal_7 = core["_45" /* ɵnov */](_v, 26).statusbarPadding; var currVal_8 = core["_45" /* ɵnov */](_v, 26)._hasRefresher; _ck(_v, 25, 0, currVal_7, currVal_8); var currVal_10 = core["_45" /* ɵnov */](_v, 35).ngClassUntouched; var currVal_11 = core["_45" /* ɵnov */](_v, 35).ngClassTouched; var currVal_12 = core["_45" /* ɵnov */](_v, 35).ngClassPristine; var currVal_13 = core["_45" /* ɵnov */](_v, 35).ngClassDirty; var currVal_14 = core["_45" /* ɵnov */](_v, 35).ngClassValid; var currVal_15 = core["_45" /* ɵnov */](_v, 35).ngClassInvalid; var currVal_16 = core["_45" /* ɵnov */](_v, 35).ngClassPending; _ck(_v, 31, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16); var currVal_17 = core["_57" /* ɵunv */](_v, 46, 0, core["_45" /* ɵnov */](_v, 47).transform("addon.mod_glossary.concept")); _ck(_v, 46, 0, currVal_17); var currVal_18 = core["_45" /* ɵnov */](_v, 52).ngClassUntouched; var currVal_19 = core["_45" /* ɵnov */](_v, 52).ngClassTouched; var currVal_20 = core["_45" /* ɵnov */](_v, 52).ngClassPristine; var currVal_21 = core["_45" /* ɵnov */](_v, 52).ngClassDirty; var currVal_22 = core["_45" /* ɵnov */](_v, 52).ngClassValid; var currVal_23 = core["_45" /* ɵnov */](_v, 52).ngClassInvalid; var currVal_24 = core["_45" /* ɵnov */](_v, 52).ngClassPending; _ck(_v, 49, 0, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24); var currVal_29 = core["_57" /* ɵunv */](_v, 66, 0, core["_45" /* ɵnov */](_v, 67).transform("addon.mod_glossary.definition")); _ck(_v, 66, 0, currVal_29); var currVal_42 = core["_57" /* ɵunv */](_v, 86, 0, core["_45" /* ɵnov */](_v, 87).transform("addon.mod_glossary.aliases")); _ck(_v, 86, 0, currVal_42); var currVal_43 = core["_45" /* ɵnov */](_v, 93).ngClassUntouched; var currVal_44 = core["_45" /* ɵnov */](_v, 93).ngClassTouched; var currVal_45 = core["_45" /* ɵnov */](_v, 93).ngClassPristine; var currVal_46 = core["_45" /* ɵnov */](_v, 93).ngClassDirty; var currVal_47 = core["_45" /* ɵnov */](_v, 93).ngClassValid; var currVal_48 = core["_45" /* ɵnov */](_v, 93).ngClassInvalid; var currVal_49 = core["_45" /* ɵnov */](_v, 93).ngClassPending; _ck(_v, 89, 0, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49); var currVal_52 = core["_57" /* ɵunv */](_v, 103, 0, core["_45" /* ɵnov */](_v, 104).transform("addon.mod_glossary.attachment")); _ck(_v, 103, 0, currVal_52); }); }
function View_AddonModGlossaryEditPage_Host_0(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 1, "page-addon-mod-glossary-edit", [], null, null, null, View_AddonModGlossaryEditPage_0, RenderType_AddonModGlossaryEditPage)), core["_31" /* ɵdid */](1, 114688, null, 0, edit_AddonModGlossaryEditPage, [nav_params["a" /* NavParams */], nav_controller["a" /* NavController */], translate_service["a" /* TranslateService */], dom["b" /* CoreDomUtilsProvider */], events["b" /* CoreEventsProvider */], sites["b" /* CoreSitesProvider */], fileuploader["b" /* CoreFileUploaderProvider */], utils_text["b" /* CoreTextUtilsProvider */], glossary["a" /* AddonModGlossaryProvider */], offline["a" /* AddonModGlossaryOfflineProvider */], helper["a" /* AddonModGlossaryHelperProvider */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AddonModGlossaryEditPageNgFactory = core["_28" /* ɵccf */]("page-addon-mod-glossary-edit", edit_AddonModGlossaryEditPage, View_AddonModGlossaryEditPage_Host_0, {}, {}, []);

//# sourceMappingURL=edit.ngfactory.js.map
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

// CONCATENATED MODULE: ./src/addon/mod/glossary/pages/edit/edit.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModGlossaryNewDiscussionPageModuleNgFactory", function() { return AddonModGlossaryNewDiscussionPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

































var AddonModGlossaryNewDiscussionPageModuleNgFactory = core["_29" /* ɵcmf */](edit_module_AddonModGlossaryNewDiscussionPageModule, [], function (_l) { return core["_41" /* ɵmod */]([core["_42" /* ɵmpd */](512, core["o" /* ComponentFactoryResolver */], core["_22" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], bs_tooltip_ngfactory["a" /* CoreBSTooltipComponentNgFactory */], rich_text_editor_ngfactory["a" /* CoreEditorRichTextEditorComponentNgFactory */], AddonModGlossaryEditPageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["L" /* NgModuleRef */]]), core["_42" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ɵa */]]]), core["_42" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_42" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_42" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_42" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_42" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_42" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_42" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_42" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_42" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_42" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_42" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_42" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_42" /* ɵmpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_42" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_42" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_42" /* ɵmpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_42" /* ɵmpd */](512, components_components_module["a" /* CoreEditorComponentsModule */], components_components_module["a" /* CoreEditorComponentsModule */], []), core["_42" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_42" /* ɵmpd */](512, edit_module_AddonModGlossaryNewDiscussionPageModule, edit_module_AddonModGlossaryNewDiscussionPageModule, []), core["_42" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_42" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_42" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], edit_AddonModGlossaryEditPage, [])]); });

//# sourceMappingURL=edit.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=111.js.map