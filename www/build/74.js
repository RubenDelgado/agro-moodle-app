webpackJsonp([74],{

/***/ 2100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 3 modules
var ionic_angular = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/index.js + 1 modules
var _ngx_translate_core = __webpack_require__(3);

// EXTERNAL MODULE: ./src/classes/animations.ts
var animations = __webpack_require__(761);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(1);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/providers/utils/text.ts
var utils_text = __webpack_require__(10);

// EXTERNAL MODULE: ./src/providers/utils/time.ts
var utils_time = __webpack_require__(24);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(9);

// EXTERNAL MODULE: ./src/core/user/providers/user.ts
var user = __webpack_require__(46);

// EXTERNAL MODULE: ./src/core/comments/providers/comments.ts
var providers_comments = __webpack_require__(157);

// EXTERNAL MODULE: ./src/core/comments/providers/offline.ts
var offline = __webpack_require__(399);

// EXTERNAL MODULE: ./src/core/comments/providers/sync.ts
var providers_sync = __webpack_require__(532);

// CONCATENATED MODULE: ./src/core/comments/pages/viewer/viewer.ts
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
 * Page that displays comments.
 */
var viewer_CoreCommentsViewerPage = /** @class */ (function () {
    function CoreCommentsViewerPage(navParams, sitesProvider, userProvider, domUtils, translate, modalCtrl, commentsProvider, offlineComments, eventsProvider, commentsSync, textUtils, timeUtils) {
        var _this = this;
        this.sitesProvider = sitesProvider;
        this.userProvider = userProvider;
        this.domUtils = domUtils;
        this.translate = translate;
        this.modalCtrl = modalCtrl;
        this.commentsProvider = commentsProvider;
        this.offlineComments = offlineComments;
        this.eventsProvider = eventsProvider;
        this.commentsSync = commentsSync;
        this.textUtils = textUtils;
        this.timeUtils = timeUtils;
        this.comments = [];
        this.commentsLoaded = false;
        this.canLoadMore = false;
        this.loadMoreError = false;
        this.canAddComments = false;
        this.canDeleteComments = false;
        this.showDelete = false;
        this.hasOffline = false;
        this.refreshIcon = 'spinner';
        this.syncIcon = 'spinner';
        this.addDeleteCommentsAvailable = false;
        this.contextLevel = navParams.get('contextLevel');
        this.instanceId = navParams.get('instanceId');
        this.componentName = navParams.get('componentName');
        this.itemId = navParams.get('itemId');
        this.area = navParams.get('area') || '';
        this.title = navParams.get('title') || this.translate.instant('core.comments.comments');
        this.courseId = navParams.get('courseId');
        this.page = 0;
        // Refresh data if comments are synchronized automatically.
        this.syncObserver = eventsProvider.on(providers_sync["a" /* CoreCommentsSyncProvider */].AUTO_SYNCED, function (data) {
            if (data.contextLevel == _this.contextLevel && data.instanceId == _this.instanceId &&
                data.componentName == _this.componentName && data.itemId == _this.itemId && data.area == _this.area) {
                // Show the sync warnings.
                _this.showSyncWarnings(data.warnings);
                // Refresh the data.
                _this.commentsLoaded = false;
                _this.refreshIcon = 'spinner';
                _this.syncIcon = 'spinner';
                _this.domUtils.scrollToTop(_this.content);
                _this.page = 0;
                _this.comments = [];
                _this.fetchComments(false);
            }
        }, sitesProvider.getCurrentSiteId());
    }
    /**
     * View loaded.
     */
    CoreCommentsViewerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.commentsProvider.isAddCommentsAvailable().then(function (enabled) {
            // Is implicit the user can delete if he can add.
            _this.addDeleteCommentsAvailable = enabled;
        });
        this.currentUserId = this.sitesProvider.getCurrentSiteUserId();
        this.fetchComments(true);
    };
    /**
     * Fetches the comments.
     *
     * @param sync When to resync comments.
     * @param showErrors When to display errors or not.
     * @return Resolved when done.
     */
    CoreCommentsViewerPage.prototype.fetchComments = function (sync, showErrors) {
        var _this = this;
        this.loadMoreError = false;
        var promise = sync ? this.syncComments(showErrors) : Promise.resolve();
        return promise.catch(function () {
            // Ignore errors.
        }).then(function () {
            // Get comments data.
            return _this.commentsProvider.getComments(_this.contextLevel, _this.instanceId, _this.componentName, _this.itemId, _this.area, _this.page).then(function (response) {
                _this.canAddComments = _this.addDeleteCommentsAvailable && response.canpost;
                var comments = response.comments.sort(function (a, b) { return b.timecreated - a.timecreated; });
                if (typeof response.count != 'undefined') {
                    _this.canLoadMore = (_this.comments.length + comments.length) > response.count;
                }
                else {
                    // Old style.
                    _this.canLoadMore = response.comments.length > 0 && response.comments.length >= providers_comments["a" /* CoreCommentsProvider */].pageSize;
                }
                return Promise.all(comments.map(function (comment) { return _this.loadCommentProfile(comment); }));
            }).then(function (comments) {
                _this.comments = _this.comments.concat(comments);
                _this.canDeleteComments = _this.addDeleteCommentsAvailable && (_this.hasOffline || _this.comments.some(function (comment) {
                    return !!comment.delete;
                }));
            });
        }).then(function () {
            return _this.loadOfflineData();
        }).catch(function (error) {
            _this.loadMoreError = true; // Set to prevent infinite calls with infinite-loading.
            if (error && _this.componentName == 'assignsubmission_comments') {
                _this.domUtils.showAlertTranslated('core.notice', 'core.comments.commentsnotworking');
            }
            else {
                _this.domUtils.showErrorModalDefault(error, _this.translate.instant('core.error') + ': get_comments');
            }
        }).finally(function () {
            _this.commentsLoaded = true;
            _this.refreshIcon = 'refresh';
            _this.syncIcon = 'sync';
        });
    };
    /**
     * Function to load more commemts.
     *
     * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
     * @return Resolved when done.
     */
    CoreCommentsViewerPage.prototype.loadMore = function (infiniteComplete) {
        this.page++;
        this.canLoadMore = false;
        return this.fetchComments(true).finally(function () {
            infiniteComplete && infiniteComplete();
        });
    };
    /**
     * Refresh the comments.
     *
     * @param showErrors Whether to display errors or not.
     * @param refresher Refresher.
     * @return Resolved when done.
     */
    CoreCommentsViewerPage.prototype.refreshComments = function (showErrors, refresher) {
        var _this = this;
        this.commentsLoaded = false;
        this.refreshIcon = 'spinner';
        this.syncIcon = 'spinner';
        return this.invalidateComments().finally(function () {
            _this.page = 0;
            _this.comments = [];
            return _this.fetchComments(true, showErrors).finally(function () {
                refresher && refresher.complete();
            });
        });
    };
    /**
     * Show sync warnings if any.
     *
     * @param warnings the warnings
     */
    CoreCommentsViewerPage.prototype.showSyncWarnings = function (warnings) {
        var message = this.textUtils.buildMessage(warnings);
        if (message) {
            this.domUtils.showErrorModal(message);
        }
    };
    /**
     * Tries to synchronize comments.
     *
     * @param showErrors Whether to display errors or not.
     * @return Promise resolved if sync is successful, rejected otherwise.
     */
    CoreCommentsViewerPage.prototype.syncComments = function (showErrors) {
        var _this = this;
        return this.commentsSync.syncComments(this.contextLevel, this.instanceId, this.componentName, this.itemId, this.area).then(function (warnings) {
            _this.showSyncWarnings(warnings);
        }).catch(function (error) {
            if (showErrors) {
                _this.domUtils.showErrorModalDefault(error, 'core.errorsync', true);
            }
            return Promise.reject(null);
        });
    };
    /**
     * Add a new comment to the list.
     *
     * @param e Event.
     */
    CoreCommentsViewerPage.prototype.addComment = function (e) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        var params = {
            contextLevel: this.contextLevel,
            instanceId: this.instanceId,
            componentName: this.componentName,
            itemId: this.itemId,
            area: this.area,
            content: this.hasOffline ? this.offlineComment.content : ''
        };
        var modal = this.modalCtrl.create('CoreCommentsAddPage', params);
        modal.onDidDismiss(function (data) {
            if (data && data.comments) {
                _this.invalidateComments();
                return Promise.all(data.comments.map(function (comment) { return _this.loadCommentProfile(comment); })).then(function (addedComments) {
                    // Add the comment to the top.
                    _this.comments = addedComments.concat(_this.comments);
                    _this.canDeleteComments = _this.addDeleteCommentsAvailable;
                    _this.eventsProvider.trigger(providers_comments["a" /* CoreCommentsProvider */].COMMENTS_COUNT_CHANGED_EVENT, {
                        contextLevel: _this.contextLevel,
                        instanceId: _this.instanceId,
                        component: _this.componentName,
                        itemId: _this.itemId,
                        area: _this.area,
                        countChange: addedComments.length,
                    }, _this.sitesProvider.getCurrentSiteId());
                });
            }
            else if (data && !data.comments) {
                // Comments added in offline mode.
                return _this.loadOfflineData();
            }
        });
        modal.present();
    };
    /**
     * Delete a comment.
     *
     * @param e Click event.
     * @param deleteComment Comment to delete.
     */
    CoreCommentsViewerPage.prototype.deleteComment = function (e, deleteComment) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        var time = this.timeUtils.userDate((deleteComment.lastmodified || deleteComment.timecreated) * 1000, 'core.strftimerecentfull');
        deleteComment.contextlevel = this.contextLevel;
        deleteComment.instanceid = this.instanceId;
        deleteComment.component = this.componentName;
        deleteComment.itemid = this.itemId;
        deleteComment.area = this.area;
        this.domUtils.showDeleteConfirm('core.comments.deletecommentbyon', { $a: { user: deleteComment.fullname || '', time: time } }).then(function () {
            _this.commentsProvider.deleteComment(deleteComment).then(function (deletedOnline) {
                _this.showDelete = false;
                if (deletedOnline) {
                    var index = _this.comments.findIndex(function (comment) { return comment.id == deleteComment.id; });
                    if (index >= 0) {
                        _this.comments.splice(index, 1);
                        _this.eventsProvider.trigger(providers_comments["a" /* CoreCommentsProvider */].COMMENTS_COUNT_CHANGED_EVENT, {
                            contextLevel: _this.contextLevel,
                            instanceId: _this.instanceId,
                            component: _this.componentName,
                            itemId: _this.itemId,
                            area: _this.area,
                            countChange: -1,
                        }, _this.sitesProvider.getCurrentSiteId());
                    }
                }
                else {
                    _this.loadOfflineData();
                }
                _this.invalidateComments();
                _this.domUtils.showToast('core.comments.eventcommentdeleted', true, 3000);
            }).catch(function (error) {
                _this.domUtils.showErrorModalDefault(error, 'Delete comment failed.');
            });
        }).catch(function () {
            // User cancelled, nothing to do.
        });
    };
    /**
     * Invalidate comments.
     *
     * @return Resolved when done.
     */
    CoreCommentsViewerPage.prototype.invalidateComments = function () {
        return this.commentsProvider.invalidateCommentsData(this.contextLevel, this.instanceId, this.componentName, this.itemId, this.area);
    };
    /**
     * Loads the profile info onto the comment object.
     *
     * @param  comment Comment object.
     * @return Promise resolved with modified comment when done.
     */
    CoreCommentsViewerPage.prototype.loadCommentProfile = function (comment) {
        // Get the user profile image.
        return this.userProvider.getProfile(comment.userid, undefined, true).then(function (user) {
            comment.profileimageurl = user.profileimageurl;
            comment.fullname = user.fullname;
            comment.userid = user.id;
            return comment;
        }).catch(function () {
            // Ignore errors.
            return comment;
        });
    };
    /**
     * Load offline comments.
     *
     * @return Promise resolved when done.
     */
    CoreCommentsViewerPage.prototype.loadOfflineData = function () {
        var _this = this;
        var promises = [];
        var hasDeletedComments = false;
        // Load the only offline comment allowed if any.
        promises.push(this.offlineComments.getComment(this.contextLevel, this.instanceId, this.componentName, this.itemId, this.area).then(function (offlineComment) {
            if (offlineComment && !_this.currentUser) {
                offlineComment.userid = _this.currentUserId;
                _this.loadCommentProfile(offlineComment).then(function (comment) {
                    // Save this fields for further requests.
                    if (comment.fullname) {
                        _this.currentUser = {};
                        _this.currentUser.profileimageurl = comment.profileimageurl;
                        _this.currentUser.fullname = comment.fullname;
                        _this.currentUser.userid = comment.userid;
                    }
                });
            }
            else if (offlineComment) {
                offlineComment.profileimageurl = _this.currentUser.profileimageurl;
                offlineComment.fullname = _this.currentUser.fullname;
                offlineComment.userid = _this.currentUser.id;
            }
            _this.offlineComment = offlineComment;
        }));
        // Load deleted comments offline.
        promises.push(this.offlineComments.getDeletedComments(this.contextLevel, this.instanceId, this.componentName, this.itemId, this.area).then(function (deletedComments) {
            hasDeletedComments = deletedComments && deletedComments.length > 0;
            hasDeletedComments && deletedComments.forEach(function (deletedComment) {
                var comment = _this.comments.find(function (comment) {
                    return comment.id == deletedComment.commentid;
                });
                if (comment) {
                    comment.deleted = deletedComment.deleted;
                }
            });
        }));
        return Promise.all(promises).then(function () {
            _this.hasOffline = !!_this.offlineComment || hasDeletedComments;
        });
    };
    /**
     * Restore a comment.
     *
     * @param e Click event.
     * @param comment Comment to delete.
     */
    CoreCommentsViewerPage.prototype.undoDeleteComment = function (e, comment) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        this.offlineComments.undoDeleteComment(comment.id).then(function () {
            comment.deleted = false;
            _this.showDelete = false;
        });
    };
    /**
     * Toggle delete.
     */
    CoreCommentsViewerPage.prototype.toggleDelete = function () {
        this.showDelete = !this.showDelete;
    };
    /**
     * Page destroyed.
     */
    CoreCommentsViewerPage.prototype.ngOnDestroy = function () {
        this.syncObserver && this.syncObserver.off();
    };
    __decorate([
        Object(core["_10" /* ViewChild */])(ionic_angular["f" /* Content */]),
        __metadata("design:type", ionic_angular["f" /* Content */])
    ], CoreCommentsViewerPage.prototype, "content", void 0);
    CoreCommentsViewerPage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-core-comments-viewer',
            templateUrl: 'viewer.html',
            animations: [animations["b" /* coreSlideInOut */]]
        }),
        __metadata("design:paramtypes", [ionic_angular["t" /* NavParams */],
            sites["b" /* CoreSitesProvider */],
            user["b" /* CoreUserProvider */],
            dom["b" /* CoreDomUtilsProvider */],
            _ngx_translate_core["c" /* TranslateService */],
            ionic_angular["q" /* ModalController */],
            providers_comments["a" /* CoreCommentsProvider */],
            offline["a" /* CoreCommentsOfflineProvider */],
            events["b" /* CoreEventsProvider */],
            providers_sync["a" /* CoreCommentsSyncProvider */],
            utils_text["b" /* CoreTextUtilsProvider */],
            utils_time["b" /* CoreTimeUtilsProvider */]])
    ], CoreCommentsViewerPage);
    return CoreCommentsViewerPage;
}());

//# sourceMappingURL=viewer.js.map
// EXTERNAL MODULE: ./src/components/components.module.ts
var components_module = __webpack_require__(26);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(32);

// EXTERNAL MODULE: ./src/pipes/pipes.module.ts + 2 modules
var pipes_module = __webpack_require__(111);

// EXTERNAL MODULE: ./src/core/comments/components/components.module.ts
var components_components_module = __webpack_require__(382);

// CONCATENATED MODULE: ./src/core/comments/pages/viewer/viewer.module.ts
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
var viewer_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var viewer_module_CoreCommentsViewerPageModule = /** @class */ (function () {
    function CoreCommentsViewerPageModule() {
    }
    CoreCommentsViewerPageModule = viewer_module___decorate([
        Object(core["J" /* NgModule */])({
            declarations: [
                viewer_CoreCommentsViewerPage
            ],
            imports: [
                components_module["a" /* CoreComponentsModule */],
                directives_module["a" /* CoreDirectivesModule */],
                pipes_module["a" /* CorePipesModule */],
                components_components_module["a" /* CoreCommentsComponentsModule */],
                ionic_angular["l" /* IonicPageModule */].forChild(viewer_CoreCommentsViewerPage),
                _ngx_translate_core["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreCommentsViewerPageModule);
    return CoreCommentsViewerPageModule;
}());

//# sourceMappingURL=viewer.module.js.map
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

// EXTERNAL MODULE: ./src/core/comments/components/comments/comments.ngfactory.js
var comments_ngfactory = __webpack_require__(493);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/icon/icon.js
var icon = __webpack_require__(48);

// EXTERNAL MODULE: ./src/components/empty-box/empty-box.ngfactory.js
var empty_box_ngfactory = __webpack_require__(126);

// EXTERNAL MODULE: ./src/components/empty-box/empty-box.ts
var empty_box = __webpack_require__(118);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/card/card.js
var card = __webpack_require__(79);

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

// EXTERNAL MODULE: ./src/components/user-avatar/user-avatar.ngfactory.js
var user_avatar_ngfactory = __webpack_require__(218);

// EXTERNAL MODULE: ./src/components/user-avatar/user-avatar.ts
var user_avatar = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(20);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils = __webpack_require__(2);

// EXTERNAL MODULE: ./src/providers/app.ts
var app = __webpack_require__(12);

// EXTERNAL MODULE: ./src/components/split-view/split-view.ts
var split_view = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/avatar/avatar.js
var avatar = __webpack_require__(164);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: ./src/directives/format-text.ts
var format_text = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform = __webpack_require__(16);

// EXTERNAL MODULE: ./src/providers/utils/url.ts
var url = __webpack_require__(19);

// EXTERNAL MODULE: ./src/providers/logger.ts
var logger = __webpack_require__(6);

// EXTERNAL MODULE: ./src/providers/filepool.ts
var filepool = __webpack_require__(17);

// EXTERNAL MODULE: ./src/core/contentlinks/providers/helper.ts
var helper = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(28);

// EXTERNAL MODULE: ./src/providers/utils/iframe.ts
var iframe = __webpack_require__(42);

// EXTERNAL MODULE: ./src/core/filter/providers/filter.ts
var filter = __webpack_require__(43);

// EXTERNAL MODULE: ./src/core/filter/providers/helper.ts
var providers_helper = __webpack_require__(30);

// EXTERNAL MODULE: ./src/core/filter/providers/delegate.ts
var delegate = __webpack_require__(36);

// EXTERNAL MODULE: ./src/providers/urlschemes.ts
var urlschemes = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/fab/fab-container.ngfactory.js
var fab_container_ngfactory = __webpack_require__(291);

// EXTERNAL MODULE: ./src/directives/fab.ts
var fab = __webpack_require__(258);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/fab/fab-container.js
var fab_container = __webpack_require__(221);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/fab/fab.ngfactory.js
var fab_ngfactory = __webpack_require__(292);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/fab/fab.js
var fab_fab = __webpack_require__(193);

// EXTERNAL MODULE: ./src/pipes/format-date.ts
var format_date = __webpack_require__(231);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(379);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.ngfactory.js
var navbar_ngfactory = __webpack_require__(739);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.js
var navbar = __webpack_require__(216);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app_app = __webpack_require__(35);

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

// EXTERNAL MODULE: ./src/components/context-menu/context-menu.ngfactory.js
var context_menu_ngfactory = __webpack_require__(93);

// EXTERNAL MODULE: ./src/components/context-menu/context-menu.ts
var context_menu = __webpack_require__(81);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/popover/popover-controller.js
var popover_controller = __webpack_require__(72);

// EXTERNAL MODULE: ./src/components/tabs/tab.ts
var tab = __webpack_require__(80);

// EXTERNAL MODULE: ./src/components/context-menu/context-menu-item.ngfactory.js
var context_menu_item_ngfactory = __webpack_require__(94);

// EXTERNAL MODULE: ./src/components/context-menu/context-menu-item.ts
var context_menu_item = __webpack_require__(86);

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

// EXTERNAL MODULE: ./src/components/infinite-loading/infinite-loading.ngfactory.js
var infinite_loading_ngfactory = __webpack_require__(381);

// EXTERNAL MODULE: ./src/components/infinite-loading/infinite-loading.ts
var infinite_loading = __webpack_require__(281);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/modal/modal-controller.js
var modal_controller = __webpack_require__(166);

// CONCATENATED MODULE: ./src/core/comments/pages/viewer/viewer.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
















































































var styles_CoreCommentsViewerPage = [];
var RenderType_CoreCommentsViewerPage = core["_30" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreCommentsViewerPage, data: { "animation": [{ type: 7, name: "coreSlideInOut", definitions: [{ type: 1, expr: "void => fromLeft", animation: [{ type: 6, styles: { transform: "translateX(0)", opacity: 1 }, offset: null }, { type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "translateX(-100%)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "translateX(5%)", offset: 0.7 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "translateX(0)", offset: 1 }, offset: null }] }, timings: 300 }], options: null }, { type: 1, expr: "fromLeft => void", animation: [{ type: 6, styles: { transform: "translateX(-100%)", opacity: 0 }, offset: null }, { type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 1, transform: "translateX(0)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "translateX(5%)", offset: 0.3 }, offset: null }, { type: 6, styles: { opacity: 0, transform: "translateX(-100%)", offset: 1 }, offset: null }] }, timings: 300 }], options: null }, { type: 1, expr: "void => fromRight", animation: [{ type: 6, styles: { transform: "translateX(0)", opacity: 1 }, offset: null }, { type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 0, transform: "translateX(100%)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "translateX(-5%)", offset: 0.7 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "translateX(0)", offset: 1 }, offset: null }] }, timings: 300 }], options: null }, { type: 1, expr: "fromRight => void", animation: [{ type: 6, styles: { transform: "translateX(-100%)", opacity: 0 }, offset: null }, { type: 4, styles: { type: 5, steps: [{ type: 6, styles: { opacity: 1, transform: "translateX(0)", offset: 0 }, offset: null }, { type: 6, styles: { opacity: 1, transform: "translateX(-5%)", offset: 0.3 }, offset: null }, { type: 6, styles: { opacity: 0, transform: "translateX(100%)", offset: 1 }, offset: null }] }, timings: 300 }], options: null }], options: {} }] } });

function View_CoreCommentsViewerPage_1(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 6, "button", [["clear", ""], ["icon-only", ""], ["ion-button", ""], ["item-end", ""]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.toggleDelete($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_31" /* ɵdid */](1, 1097728, [[2, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { clear: [0, "clear"] }, null), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_32" /* ɵeld */](4, 0, null, 0, 1, "ion-icon", [["ios", "md-create"], ["name", "create"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_31" /* ɵdid */](5, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { name: [0, "name"], ios: [1, "ios"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n            "]))], function (_ck, _v) { var currVal_1 = ""; _ck(_v, 1, 0, currVal_1); var currVal_3 = "create"; var currVal_4 = "md-create"; _ck(_v, 5, 0, currVal_3, currVal_4); }, function (_ck, _v) { var currVal_0 = core["_57" /* ɵunv */](_v, 0, 0, core["_45" /* ɵnov */](_v, 2).transform("core.delete")); _ck(_v, 0, 0, currVal_0); var currVal_2 = core["_45" /* ɵnov */](_v, 5)._hidden; _ck(_v, 4, 0, currVal_2); }); }
function View_CoreCommentsViewerPage_2(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 2, "core-empty-box", [["icon", "chatbubbles"]], null, null, null, empty_box_ngfactory["b" /* View_CoreEmptyBoxComponent_0 */], empty_box_ngfactory["a" /* RenderType_CoreEmptyBoxComponent */])), core["_31" /* ɵdid */](1, 49152, null, 0, empty_box["a" /* CoreEmptyBoxComponent */], [], { message: [0, "message"], icon: [1, "icon"] }, null), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = core["_57" /* ɵunv */](_v, 1, 0, core["_45" /* ɵnov */](_v, 2).transform("core.comments.nocomments")); var currVal_1 = "chatbubbles"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_CoreCommentsViewerPage_3(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 8, "div", [["class", "core-warning-card"], ["icon-start", ""]], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_32" /* ɵeld */](2, 0, null, null, 1, "ion-icon", [["name", "warning"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_31" /* ɵdid */](3, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_56" /* ɵted */](4, null, ["\n            ", "\n        "])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), core["_50" /* ɵppd */](6, 1), core["_49" /* ɵpod */](7, { $a: 0 }), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_1 = "warning"; _ck(_v, 3, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = core["_45" /* ɵnov */](_v, 3)._hidden; _ck(_v, 2, 0, currVal_0); var currVal_2 = core["_57" /* ɵunv */](_v, 4, 0, core["_45" /* ɵnov */](_v, 8).transform("core.thereisdatatosync", _ck(_v, 7, 0, core["_57" /* ɵunv */](_v, 4, 0, _ck(_v, 6, 0, core["_45" /* ɵnov */](_v.parent, 0), core["_57" /* ɵunv */](_v, 4, 0, core["_45" /* ɵnov */](_v, 5).transform("core.comments.comments"))))))); _ck(_v, 4, 0, currVal_2); }); }
function View_CoreCommentsViewerPage_5(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 6, "button", [["clear", ""], ["color", "danger"], ["icon-only", ""], ["ion-button", ""], ["item-end", ""]], [[24, "@coreSlideInOut", 0], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.deleteComment($event, _co.offlineComment) !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_31" /* ɵdid */](1, 1097728, [[4, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { color: [0, "color"], clear: [1, "clear"] }, null), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), core["_32" /* ɵeld */](4, 0, null, 0, 1, "ion-icon", [["name", "trash"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_31" /* ɵdid */](5, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n                "]))], function (_ck, _v) { var currVal_2 = "danger"; var currVal_3 = ""; _ck(_v, 1, 0, currVal_2, currVal_3); var currVal_5 = "trash"; _ck(_v, 5, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = "fromRight"; var currVal_1 = core["_57" /* ɵunv */](_v, 0, 1, core["_45" /* ɵnov */](_v, 2).transform("core.delete")); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_4 = core["_45" /* ɵnov */](_v, 5)._hidden; _ck(_v, 4, 0, currVal_4); }); }
function View_CoreCommentsViewerPage_4(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 38, "ion-card", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.addComment($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), core["_31" /* ɵdid */](1, 16384, null, 0, card["a" /* Card */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_32" /* ɵeld */](3, 0, null, null, 23, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 3, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 4, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 5, { _icons: 1 }), core["_31" /* ɵdid */](8, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_32" /* ɵeld */](10, 0, null, 0, 2, "ion-avatar", [["core-user-avatar", ""], ["item-start", ""]], null, null, null, user_avatar_ngfactory["b" /* View_CoreUserAvatarComponent_0 */], user_avatar_ngfactory["a" /* RenderType_CoreUserAvatarComponent */])), core["_31" /* ɵdid */](11, 770048, null, 0, user_avatar["a" /* CoreUserAvatarComponent */], [nav_controller["a" /* NavController */], sites["b" /* CoreSitesProvider */], utils["b" /* CoreUtilsProvider */], app["b" /* CoreAppProvider */], events["b" /* CoreEventsProvider */], [2, split_view["a" /* CoreSplitViewComponent */]]], { user: [0, "user"] }, null), core["_31" /* ɵdid */](12, 16384, null, 0, avatar["a" /* Avatar */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_32" /* ɵeld */](14, 0, null, 2, 1, "h2", [], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](15, null, ["", ""])), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_32" /* ɵeld */](17, 0, null, 2, 5, "p", [], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_32" /* ɵeld */](19, 0, null, null, 1, "ion-icon", [["name", "time"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_31" /* ɵdid */](20, 147456, [[5, 4]], 0, icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_56" /* ɵted */](21, null, [" ", "\n                "])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_27" /* ɵand */](16777216, null, 4, 1, null, View_CoreCommentsViewerPage_5)), core["_31" /* ɵdid */](25, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_32" /* ɵeld */](28, 0, null, null, 9, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](29, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 6, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 7, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 8, { _icons: 1 }), core["_31" /* ɵdid */](33, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_32" /* ɵeld */](35, 16777216, null, 2, 1, "core-format-text", [["clean", "true"]], null, null, null, null, null)), core["_31" /* ɵdid */](36, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["t" /* ElementRef */], sites["b" /* CoreSitesProvider */], dom["b" /* CoreDomUtilsProvider */], utils_text["b" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["b" /* CoreUtilsProvider */], url["b" /* CoreUrlUtilsProvider */], logger["b" /* CoreLoggerProvider */], filepool["b" /* CoreFilepoolProvider */], helper["b" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["b" /* CoreEventsProvider */], filter["a" /* CoreFilterProvider */], providers_helper["a" /* CoreFilterHelperProvider */], delegate["a" /* CoreFilterDelegate */], core["_12" /* ViewContainerRef */], urlschemes["b" /* CoreCustomURLSchemesProvider */]], { text: [0, "text"], clean: [1, "clean"], contextLevel: [2, "contextLevel"], contextInstanceId: [3, "contextInstanceId"], courseId: [4, "courseId"] }, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.offlineComment; _ck(_v, 11, 0, currVal_0); var currVal_3 = "time"; _ck(_v, 20, 0, currVal_3); var currVal_5 = _co.showDelete; _ck(_v, 25, 0, currVal_5); var currVal_6 = _co.offlineComment.content; var currVal_7 = "true"; var currVal_8 = _co.contextLevel; var currVal_9 = _co.instanceId; var currVal_10 = _co.courseId; _ck(_v, 36, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.offlineComment.fullname; _ck(_v, 15, 0, currVal_1); var currVal_2 = core["_45" /* ɵnov */](_v, 20)._hidden; _ck(_v, 19, 0, currVal_2); var currVal_4 = core["_57" /* ɵunv */](_v, 21, 0, core["_45" /* ɵnov */](_v, 22).transform("core.notsent")); _ck(_v, 21, 0, currVal_4); }); }
function View_CoreCommentsViewerPage_7(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](1, null, ["", ""])), core["_50" /* ɵppd */](2, 2)], null, function (_ck, _v) { var currVal_0 = core["_57" /* ɵunv */](_v, 1, 0, _ck(_v, 2, 0, core["_45" /* ɵnov */](_v.parent.parent, 1), (_v.parent.context.$implicit.timecreated * 1000), "strftimerecentfull")); _ck(_v, 1, 0, currVal_0); }); }
function View_CoreCommentsViewerPage_8(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 8, "p", [], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_32" /* ɵeld */](2, 0, null, null, 1, "ion-icon", [["name", "trash"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_31" /* ɵdid */](3, 147456, [[11, 4]], 0, icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, [" "])), (_l()(), core["_32" /* ɵeld */](5, 0, null, null, 2, "span", [["text-wrap", ""]], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](6, null, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "]))], function (_ck, _v) { var currVal_1 = "trash"; _ck(_v, 3, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = core["_45" /* ɵnov */](_v, 3)._hidden; _ck(_v, 2, 0, currVal_0); var currVal_2 = core["_57" /* ɵunv */](_v, 6, 0, core["_45" /* ɵnov */](_v, 7).transform("core.deletedoffline")); _ck(_v, 6, 0, currVal_2); }); }
function View_CoreCommentsViewerPage_9(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 6, "button", [["clear", ""], ["color", "danger"], ["icon-only", ""], ["ion-button", ""], ["item-end", ""]], [[24, "@coreSlideInOut", 0], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.deleteComment($event, _v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_31" /* ɵdid */](1, 1097728, [[10, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { color: [0, "color"], clear: [1, "clear"] }, null), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), core["_32" /* ɵeld */](4, 0, null, 0, 1, "ion-icon", [["name", "trash"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_31" /* ɵdid */](5, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n                "]))], function (_ck, _v) { var currVal_2 = "danger"; var currVal_3 = ""; _ck(_v, 1, 0, currVal_2, currVal_3); var currVal_5 = "trash"; _ck(_v, 5, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = "fromRight"; var currVal_1 = core["_57" /* ɵunv */](_v, 0, 1, core["_45" /* ɵnov */](_v, 2).transform("core.delete")); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_4 = core["_45" /* ɵnov */](_v, 5)._hidden; _ck(_v, 4, 0, currVal_4); }); }
function View_CoreCommentsViewerPage_10(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 6, "button", [["clear", ""], ["color", "danger"], ["icon-only", ""], ["ion-button", ""], ["item-end", ""]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.undoDeleteComment($event, _v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_31" /* ɵdid */](1, 1097728, [[10, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { color: [0, "color"], clear: [1, "clear"] }, null), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), core["_32" /* ɵeld */](4, 0, null, 0, 1, "ion-icon", [["name", "undo"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_31" /* ɵdid */](5, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n                "]))], function (_ck, _v) { var currVal_1 = "danger"; var currVal_2 = ""; _ck(_v, 1, 0, currVal_1, currVal_2); var currVal_4 = "undo"; _ck(_v, 5, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = core["_57" /* ɵunv */](_v, 0, 0, core["_45" /* ɵnov */](_v, 2).transform("core.restore")); _ck(_v, 0, 0, currVal_0); var currVal_3 = core["_45" /* ɵnov */](_v, 5)._hidden; _ck(_v, 4, 0, currVal_3); }); }
function View_CoreCommentsViewerPage_6(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 40, "ion-card", [], null, null, null, null, null)), core["_31" /* ɵdid */](1, 16384, null, 0, card["a" /* Card */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_32" /* ɵeld */](3, 0, null, null, 25, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 9, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 10, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 11, { _icons: 1 }), core["_31" /* ɵdid */](8, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_32" /* ɵeld */](10, 0, null, 0, 2, "ion-avatar", [["core-user-avatar", ""], ["item-start", ""]], null, null, null, user_avatar_ngfactory["b" /* View_CoreUserAvatarComponent_0 */], user_avatar_ngfactory["a" /* RenderType_CoreUserAvatarComponent */])), core["_31" /* ɵdid */](11, 770048, null, 0, user_avatar["a" /* CoreUserAvatarComponent */], [nav_controller["a" /* NavController */], sites["b" /* CoreSitesProvider */], utils["b" /* CoreUtilsProvider */], app["b" /* CoreAppProvider */], events["b" /* CoreEventsProvider */], [2, split_view["a" /* CoreSplitViewComponent */]]], { user: [0, "user"] }, null), core["_31" /* ɵdid */](12, 16384, null, 0, avatar["a" /* Avatar */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_32" /* ɵeld */](14, 0, null, 2, 1, "h2", [], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](15, null, ["", ""])), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_27" /* ɵand */](16777216, null, 2, 1, null, View_CoreCommentsViewerPage_7)), core["_31" /* ɵdid */](18, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_27" /* ɵand */](16777216, null, 2, 1, null, View_CoreCommentsViewerPage_8)), core["_31" /* ɵdid */](21, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_27" /* ɵand */](16777216, null, 4, 1, null, View_CoreCommentsViewerPage_9)), core["_31" /* ɵdid */](24, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_27" /* ɵand */](16777216, null, 4, 1, null, View_CoreCommentsViewerPage_10)), core["_31" /* ɵdid */](27, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_32" /* ɵeld */](30, 0, null, null, 9, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](31, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 12, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 13, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 14, { _icons: 1 }), core["_31" /* ɵdid */](35, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_32" /* ɵeld */](37, 16777216, null, 2, 1, "core-format-text", [], null, null, null, null, null)), core["_31" /* ɵdid */](38, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["t" /* ElementRef */], sites["b" /* CoreSitesProvider */], dom["b" /* CoreDomUtilsProvider */], utils_text["b" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["b" /* CoreUtilsProvider */], url["b" /* CoreUrlUtilsProvider */], logger["b" /* CoreLoggerProvider */], filepool["b" /* CoreFilepoolProvider */], helper["b" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["b" /* CoreEventsProvider */], filter["a" /* CoreFilterProvider */], providers_helper["a" /* CoreFilterHelperProvider */], delegate["a" /* CoreFilterDelegate */], core["_12" /* ViewContainerRef */], urlschemes["b" /* CoreCustomURLSchemesProvider */]], { text: [0, "text"], contextLevel: [1, "contextLevel"], contextInstanceId: [2, "contextInstanceId"], courseId: [3, "courseId"] }, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.$implicit; _ck(_v, 11, 0, currVal_0); var currVal_2 = !_v.context.$implicit.deleted; _ck(_v, 18, 0, currVal_2); var currVal_3 = _v.context.$implicit.deleted; _ck(_v, 21, 0, currVal_3); var currVal_4 = ((_co.showDelete && !_v.context.$implicit.deleted) && _v.context.$implicit.delete); _ck(_v, 24, 0, currVal_4); var currVal_5 = (_co.showDelete && _v.context.$implicit.deleted); _ck(_v, 27, 0, currVal_5); var currVal_6 = _v.context.$implicit.content; var currVal_7 = _co.contextLevel; var currVal_8 = _co.instanceId; var currVal_9 = _co.courseId; _ck(_v, 38, 0, currVal_6, currVal_7, currVal_8, currVal_9); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.fullname; _ck(_v, 15, 0, currVal_1); }); }
function View_CoreCommentsViewerPage_11(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 13, "ion-fab", [["bottom", ""], ["core-fab", ""], ["end", ""]], null, null, null, fab_container_ngfactory["b" /* View_FabContainer_0 */], fab_container_ngfactory["a" /* RenderType_FabContainer */])), core["_31" /* ɵdid */](1, 212992, null, 0, fab["a" /* CoreFabDirective */], [core["t" /* ElementRef */], content["a" /* Content */]], null, null), core["_31" /* ɵdid */](2, 1228800, null, 2, fab_container["a" /* FabContainer */], [platform["a" /* Platform */]], null, null), core["_53" /* ɵqud */](335544320, 15, { _mainButton: 0 }), core["_53" /* ɵqud */](603979776, 16, { _fabLists: 1 }), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_32" /* ɵeld */](6, 0, null, 0, 6, "button", [["ion-fab", ""]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.addComment($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, fab_ngfactory["b" /* View_FabButton_0 */], fab_ngfactory["a" /* RenderType_FabButton */])), core["_31" /* ɵdid */](7, 49152, [[15, 4]], 0, fab_fab["a" /* FabButton */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_32" /* ɵeld */](10, 0, null, 0, 1, "ion-icon", [["name", "add"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_31" /* ɵdid */](11, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n    "]))], function (_ck, _v) { _ck(_v, 1, 0); var currVal_2 = "add"; _ck(_v, 11, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_57" /* ɵunv */](_v, 6, 0, core["_45" /* ɵnov */](_v, 8).transform("core.comments.addcomment")); _ck(_v, 6, 0, currVal_0); var currVal_1 = core["_45" /* ɵnov */](_v, 11)._hidden; _ck(_v, 10, 0, currVal_1); }); }
function View_CoreCommentsViewerPage_0(_l) { return core["_58" /* ɵvid */](0, [core["_48" /* ɵpid */](0, common["h" /* LowerCasePipe */], []), core["_48" /* ɵpid */](0, format_date["a" /* CoreFormatDatePipe */], [logger["b" /* CoreLoggerProvider */], utils_time["b" /* CoreTimeUtilsProvider */]]), core["_53" /* ɵqud */](402653184, 1, { content: 0 }), (_l()(), core["_32" /* ɵeld */](3, 0, null, null, 32, "ion-header", [], null, null, null, null, null)), core["_31" /* ɵdid */](4, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_32" /* ɵeld */](6, 0, null, null, 28, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_31" /* ɵdid */](7, 49152, null, 0, navbar["a" /* Navbar */], [app_app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), core["_31" /* ɵdid */](8, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], translate_service["a" /* TranslateService */], events["b" /* CoreEventsProvider */]], null, null), (_l()(), core["_56" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_32" /* ɵeld */](10, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_31" /* ɵdid */](11, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_32" /* ɵeld */](12, 16777216, null, 0, 1, "core-format-text", [], null, null, null, null, null)), core["_31" /* ɵdid */](13, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["t" /* ElementRef */], sites["b" /* CoreSitesProvider */], dom["b" /* CoreDomUtilsProvider */], utils_text["b" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["b" /* CoreUtilsProvider */], url["b" /* CoreUrlUtilsProvider */], logger["b" /* CoreLoggerProvider */], filepool["b" /* CoreFilepoolProvider */], helper["b" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["b" /* CoreEventsProvider */], filter["a" /* CoreFilterProvider */], providers_helper["a" /* CoreFilterHelperProvider */], delegate["a" /* CoreFilterDelegate */], core["_12" /* ViewContainerRef */], urlschemes["b" /* CoreCustomURLSchemesProvider */]], { text: [0, "text"], contextLevel: [1, "contextLevel"], contextInstanceId: [2, "contextInstanceId"], courseId: [3, "courseId"] }, null), (_l()(), core["_56" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_32" /* ɵeld */](15, 0, null, 2, 18, "ion-buttons", [["end", ""]], null, null, null, null, null)), core["_31" /* ɵdid */](16, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_53" /* ɵqud */](603979776, 2, { _buttons: 1 }), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_CoreCommentsViewerPage_1)), core["_31" /* ɵdid */](20, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_32" /* ɵeld */](22, 0, null, null, 10, "core-context-menu", [], null, null, null, context_menu_ngfactory["b" /* View_CoreContextMenuComponent_0 */], context_menu_ngfactory["a" /* RenderType_CoreContextMenuComponent */])), core["_31" /* ɵdid */](23, 245760, null, 0, context_menu["a" /* CoreContextMenuComponent */], [translate_service["a" /* TranslateService */], popover_controller["a" /* PopoverController */], core["t" /* ElementRef */], dom["b" /* CoreDomUtilsProvider */], [2, tab["a" /* CoreTabComponent */]], utils["b" /* CoreUtilsProvider */]], null, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_32" /* ɵeld */](25, 0, null, 0, 2, "core-context-menu-item", [], null, [[null, "action"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("action" === en)) {
        var pd_0 = (_co.refreshComments(false) !== false);
        ad = (pd_0 && ad);
    } return ad; }, context_menu_item_ngfactory["b" /* View_CoreContextMenuItemComponent_0 */], context_menu_item_ngfactory["a" /* RenderType_CoreContextMenuItemComponent */])), core["_31" /* ɵdid */](26, 770048, null, 0, context_menu_item["a" /* CoreContextMenuItemComponent */], [context_menu["a" /* CoreContextMenuComponent */]], { content: [0, "content"], iconAction: [1, "iconAction"], closeOnClick: [2, "closeOnClick"], priority: [3, "priority"], hidden: [4, "hidden"] }, { action: "action" }), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_32" /* ɵeld */](29, 0, null, 0, 2, "core-context-menu-item", [], null, [[null, "action"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("action" === en)) {
        var pd_0 = (_co.refreshComments(true) !== false);
        ad = (pd_0 && ad);
    } return ad; }, context_menu_item_ngfactory["b" /* View_CoreContextMenuItemComponent_0 */], context_menu_item_ngfactory["a" /* RenderType_CoreContextMenuItemComponent */])), core["_31" /* ɵdid */](30, 770048, null, 0, context_menu_item["a" /* CoreContextMenuItemComponent */], [context_menu["a" /* CoreContextMenuComponent */]], { content: [0, "content"], iconAction: [1, "iconAction"], closeOnClick: [2, "closeOnClick"], priority: [3, "priority"], hidden: [4, "hidden"] }, { action: "action" }), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_56" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_32" /* ɵeld */](37, 0, null, null, 32, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_31" /* ɵdid */](38, 4374528, [[1, 4]], 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["W" /* Renderer */], app_app["a" /* App */], keyboard["a" /* Keyboard */], core["N" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_56" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_32" /* ɵeld */](40, 0, null, 2, 6, "ion-refresher", [], [[2, "refresher-active", null], [4, "top", null]], [[null, "ionRefresh"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ionRefresh" === en)) {
        var pd_0 = (_co.refreshComments(false, $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), core["_31" /* ɵdid */](41, 212992, null, 0, refresher["a" /* Refresher */], [platform["a" /* Platform */], content["a" /* Content */], core["N" /* NgZone */], gesture_controller["l" /* GestureController */]], { enabled: [0, "enabled"] }, { ionRefresh: "ionRefresh" }), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_32" /* ɵeld */](43, 0, null, null, 2, "ion-refresher-content", [], [[1, "state", 0]], null, null, refresher_content_ngfactory["b" /* View_RefresherContent_0 */], refresher_content_ngfactory["a" /* RenderType_RefresherContent */])), core["_31" /* ɵdid */](44, 114688, null, 0, refresher_content["a" /* RefresherContent */], [refresher["a" /* Refresher */], config["a" /* Config */]], { pullingText: [0, "pullingText"] }, null), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_56" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_32" /* ɵeld */](48, 0, null, 1, 17, "core-loading", [], null, null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_31" /* ɵdid */](49, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["t" /* ElementRef */], events["b" /* CoreEventsProvider */], utils["b" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_27" /* ɵand */](16777216, null, 0, 1, null, View_CoreCommentsViewerPage_2)), core["_31" /* ɵdid */](52, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n\n        "])), (_l()(), core["_27" /* ɵand */](16777216, null, 0, 1, null, View_CoreCommentsViewerPage_3)), core["_31" /* ɵdid */](55, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n\n        "])), (_l()(), core["_27" /* ɵand */](16777216, null, 0, 1, null, View_CoreCommentsViewerPage_4)), core["_31" /* ɵdid */](58, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n\n        "])), (_l()(), core["_27" /* ɵand */](16777216, null, 0, 1, null, View_CoreCommentsViewerPage_6)), core["_31" /* ɵdid */](61, 802816, null, 0, common["j" /* NgForOf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n\n        "])), (_l()(), core["_32" /* ɵeld */](63, 0, null, 0, 1, "core-infinite-loading", [], null, [[null, "action"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("action" === en)) {
        var pd_0 = (_co.loadMore($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, infinite_loading_ngfactory["b" /* View_CoreInfiniteLoadingComponent_0 */], infinite_loading_ngfactory["a" /* RenderType_CoreInfiniteLoadingComponent */])), core["_31" /* ɵdid */](64, 573440, null, 0, infinite_loading["a" /* CoreInfiniteLoadingComponent */], [[2, content["a" /* Content */]], dom["b" /* CoreDomUtilsProvider */]], { enabled: [0, "enabled"], error: [1, "error"] }, { action: "action" }), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_56" /* ɵted */](-1, 1, ["\n\n    "])), (_l()(), core["_27" /* ɵand */](16777216, null, 0, 1, null, View_CoreCommentsViewerPage_11)), core["_31" /* ɵdid */](68, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 8, 0); var currVal_2 = _co.title; var currVal_3 = _co.contextLevel; var currVal_4 = _co.instanceId; var currVal_5 = _co.courseId; _ck(_v, 13, 0, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_6 = _co.canDeleteComments; _ck(_v, 20, 0, currVal_6); _ck(_v, 23, 0); var currVal_7 = core["_57" /* ɵunv */](_v, 26, 0, core["_45" /* ɵnov */](_v, 27).transform("core.refresh")); var currVal_8 = _co.refreshIcon; var currVal_9 = true; var currVal_10 = 100; var currVal_11 = !(_co.commentsLoaded && !_co.hasOffline); _ck(_v, 26, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_12 = core["_57" /* ɵunv */](_v, 30, 0, core["_45" /* ɵnov */](_v, 31).transform("core.settings.synchronizenow")); var currVal_13 = _co.syncIcon; var currVal_14 = false; var currVal_15 = 100; var currVal_16 = !(_co.commentsLoaded && _co.hasOffline); _ck(_v, 30, 0, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16); var currVal_21 = _co.commentsLoaded; _ck(_v, 41, 0, currVal_21); var currVal_23 = core["_35" /* ɵinlineInterpolate */](1, "", core["_57" /* ɵunv */](_v, 44, 0, core["_45" /* ɵnov */](_v, 45).transform("core.pulltorefresh")), ""); _ck(_v, 44, 0, currVal_23); var currVal_24 = _co.commentsLoaded; _ck(_v, 49, 0, currVal_24); var currVal_25 = (!_co.comments || !_co.comments.length); _ck(_v, 52, 0, currVal_25); var currVal_26 = _co.hasOffline; _ck(_v, 55, 0, currVal_26); var currVal_27 = _co.offlineComment; _ck(_v, 58, 0, currVal_27); var currVal_28 = _co.comments; _ck(_v, 61, 0, currVal_28); var currVal_29 = _co.canLoadMore; var currVal_30 = _co.loadMoreError; _ck(_v, 64, 0, currVal_29, currVal_30); var currVal_31 = _co.canAddComments; _ck(_v, 68, 0, currVal_31); }, function (_ck, _v) { var currVal_0 = core["_45" /* ɵnov */](_v, 7)._hidden; var currVal_1 = core["_45" /* ɵnov */](_v, 7)._sbPadding; _ck(_v, 6, 0, currVal_0, currVal_1); var currVal_17 = core["_45" /* ɵnov */](_v, 38).statusbarPadding; var currVal_18 = core["_45" /* ɵnov */](_v, 38)._hasRefresher; _ck(_v, 37, 0, currVal_17, currVal_18); var currVal_19 = (core["_45" /* ɵnov */](_v, 41).state !== "inactive"); var currVal_20 = core["_45" /* ɵnov */](_v, 41)._top; _ck(_v, 40, 0, currVal_19, currVal_20); var currVal_22 = core["_45" /* ɵnov */](_v, 44).r.state; _ck(_v, 43, 0, currVal_22); }); }
function View_CoreCommentsViewerPage_Host_0(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 1, "page-core-comments-viewer", [], null, null, null, View_CoreCommentsViewerPage_0, RenderType_CoreCommentsViewerPage)), core["_31" /* ɵdid */](1, 180224, null, 0, viewer_CoreCommentsViewerPage, [nav_params["a" /* NavParams */], sites["b" /* CoreSitesProvider */], user["b" /* CoreUserProvider */], dom["b" /* CoreDomUtilsProvider */], translate_service["a" /* TranslateService */], modal_controller["a" /* ModalController */], providers_comments["a" /* CoreCommentsProvider */], offline["a" /* CoreCommentsOfflineProvider */], events["b" /* CoreEventsProvider */], providers_sync["a" /* CoreCommentsSyncProvider */], utils_text["b" /* CoreTextUtilsProvider */], utils_time["b" /* CoreTimeUtilsProvider */]], null, null)], null, null); }
var CoreCommentsViewerPageNgFactory = core["_28" /* ɵccf */]("page-core-comments-viewer", viewer_CoreCommentsViewerPage, View_CoreCommentsViewerPage_Host_0, {}, {}, []);

//# sourceMappingURL=viewer.ngfactory.js.map
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

// CONCATENATED MODULE: ./src/core/comments/pages/viewer/viewer.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommentsViewerPageModuleNgFactory", function() { return CoreCommentsViewerPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

































var CoreCommentsViewerPageModuleNgFactory = core["_29" /* ɵcmf */](viewer_module_CoreCommentsViewerPageModule, [], function (_l) { return core["_41" /* ɵmod */]([core["_42" /* ɵmpd */](512, core["o" /* ComponentFactoryResolver */], core["_22" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], bs_tooltip_ngfactory["a" /* CoreBSTooltipComponentNgFactory */], comments_ngfactory["a" /* CoreCommentsCommentsComponentNgFactory */], CoreCommentsViewerPageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["L" /* NgModuleRef */]]), core["_42" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ɵa */]]]), core["_42" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_42" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_42" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_42" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_42" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_42" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_42" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_42" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_42" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_42" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_42" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_42" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_42" /* ɵmpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_42" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_42" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_42" /* ɵmpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_42" /* ɵmpd */](512, components_components_module["a" /* CoreCommentsComponentsModule */], components_components_module["a" /* CoreCommentsComponentsModule */], []), core["_42" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_42" /* ɵmpd */](512, viewer_module_CoreCommentsViewerPageModule, viewer_module_CoreCommentsViewerPageModule, []), core["_42" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_42" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_42" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], viewer_CoreCommentsViewerPage, [])]); });

//# sourceMappingURL=viewer.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=74.js.map