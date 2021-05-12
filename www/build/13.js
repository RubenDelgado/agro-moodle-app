webpackJsonp([13],{

/***/ 2052:
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

// EXTERNAL MODULE: ./src/addon/mod/forum/components/components.module.ts
var components_components_module = __webpack_require__(753);

// EXTERNAL MODULE: ./node_modules/@ionic-native/network/index.js
var _ionic_native_network = __webpack_require__(167);

// EXTERNAL MODULE: ./src/providers/app.ts
var app = __webpack_require__(12);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(9);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(1);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils_utils = __webpack_require__(2);

// EXTERNAL MODULE: ./src/core/fileuploader/providers/fileuploader.ts
var fileuploader = __webpack_require__(70);

// EXTERNAL MODULE: ./src/core/user/providers/user.ts
var user = __webpack_require__(46);

// EXTERNAL MODULE: ./src/components/split-view/split-view.ts
var split_view = __webpack_require__(29);

// EXTERNAL MODULE: ./src/core/rating/providers/rating.ts
var rating = __webpack_require__(235);

// EXTERNAL MODULE: ./src/core/rating/providers/offline.ts
var offline = __webpack_require__(206);

// EXTERNAL MODULE: ./src/core/rating/providers/sync.ts
var providers_sync = __webpack_require__(241);

// EXTERNAL MODULE: ./src/addon/mod/forum/providers/forum.ts
var forum = __webpack_require__(138);

// EXTERNAL MODULE: ./src/addon/mod/forum/providers/offline.ts
var providers_offline = __webpack_require__(237);

// EXTERNAL MODULE: ./src/addon/mod/forum/providers/helper.ts
var helper = __webpack_require__(289);

// EXTERNAL MODULE: ./src/addon/mod/forum/providers/sync.ts
var forum_providers_sync = __webpack_require__(259);

// CONCATENATED MODULE: ./src/addon/mod/forum/pages/discussion/discussion.ts
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
 * Page that displays a forum discussion.
 */
var discussion_AddonModForumDiscussionPage = /** @class */ (function () {
    function AddonModForumDiscussionPage(navParams, network, zone, appProvider, eventsProvider, sitesProvider, domUtils, utils, translate, uploaderProvider, forumProvider, forumOffline, forumHelper, forumSync, ratingOffline, userProvider, svComponent, navCtrl) {
        var _this = this;
        this.appProvider = appProvider;
        this.eventsProvider = eventsProvider;
        this.sitesProvider = sitesProvider;
        this.domUtils = domUtils;
        this.utils = utils;
        this.translate = translate;
        this.uploaderProvider = uploaderProvider;
        this.forumProvider = forumProvider;
        this.forumOffline = forumOffline;
        this.forumHelper = forumHelper;
        this.forumSync = forumSync;
        this.ratingOffline = ratingOffline;
        this.userProvider = userProvider;
        this.svComponent = svComponent;
        this.navCtrl = navCtrl;
        this.forum = {};
        this.accessInfo = {};
        this.discussionLoaded = false;
        this.sort = 'nested';
        this.replyData = {
            replyingTo: 0,
            isEditing: false,
            subject: '',
            message: null,
            files: [],
            isprivatereply: false,
        };
        this.originalData = {
            subject: null,
            message: null,
            files: [],
            isprivatereply: false,
        };
        this.refreshIcon = 'spinner';
        this.syncIcon = 'spinner';
        this.discussionStr = '';
        this.component = forum["a" /* AddonModForumProvider */].COMPONENT;
        this.canPin = false;
        this.leavingPage = false;
        this.courseId = navParams.get('courseId');
        this.cmId = navParams.get('cmId');
        this.forumId = navParams.get('forumId');
        this.discussion = navParams.get('discussion');
        this.discussionId = this.discussion ? this.discussion.discussion : navParams.get('discussionId');
        this.trackPosts = navParams.get('trackPosts');
        this.postId = navParams.get('postId');
        this.parent = navParams.get('parent');
        this.isOnline = this.appProvider.isOnline();
        this.onlineObserver = network.onchange().subscribe(function () {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            zone.run(function () {
                _this.isOnline = _this.appProvider.isOnline();
            });
        });
        this.isSplitViewOn = this.svComponent && this.svComponent.isOn();
        this.discussionStr = translate.instant('addon.mod_forum.discussion');
    }
    /**
     * View loaded.
     */
    AddonModForumDiscussionPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, scrollTo;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.parent) return [3 /*break*/, 1];
                        this.sort = 'nested'; // Force nested order.
                        return [3 /*break*/, 3];
                    case 1:
                        _a = this;
                        return [4 /*yield*/, this.getUserSort()];
                    case 2:
                        _a.sort = _b.sent();
                        _b.label = 3;
                    case 3: return [4 /*yield*/, this.fetchPosts(true, false, true)];
                    case 4:
                        _b.sent();
                        scrollTo = this.postId || this.parent;
                        if (scrollTo) {
                            // Scroll to the post.
                            setTimeout(function () {
                                _this.domUtils.scrollToElementBySelector(_this.content, '#addon-mod_forum-post-' + scrollTo);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get sort type configured by the current user.
     *
     * @return Promise resolved with the sort type.
     */
    AddonModForumDiscussionPage.prototype.getUserSort = function () {
        return __awaiter(this, void 0, void 0, function () {
            var value, error_1, value, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 7]);
                        return [4 /*yield*/, this.sitesProvider.getCurrentSite().getLocalSiteConfig('AddonModForumDiscussionSort')];
                    case 1:
                        value = _a.sent();
                        return [2 /*return*/, value];
                    case 2:
                        error_1 = _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.userProvider.getUserPreference('forum_displaymode')];
                    case 4:
                        value = _a.sent();
                        switch (Number(value)) {
                            case 1:
                                return [2 /*return*/, 'flat-oldest'];
                            case -1:
                                return [2 /*return*/, 'flat-newest'];
                            case 3:
                                return [2 /*return*/, 'nested'];
                            case 2: // Threaded not implemented.
                            default:
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        error_2 = _a.sent();
                        return [3 /*break*/, 6];
                    case 6: return [3 /*break*/, 7];
                    case 7: return [2 /*return*/, 'flat-oldest'];
                }
            });
        });
    };
    /**
     * User entered the page that contains the component.
     */
    AddonModForumDiscussionPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (this.syncObserver) {
            // Already setup.
            return;
        }
        // Refresh data if this discussion is synchronized automatically.
        this.syncObserver = this.eventsProvider.on(forum_providers_sync["a" /* AddonModForumSyncProvider */].AUTO_SYNCED, function (data) {
            if (data.forumId == _this.forumId && _this.discussionId == data.discussionId
                && data.userId == _this.sitesProvider.getCurrentSiteUserId()) {
                // Refresh the data.
                _this.discussionLoaded = false;
                _this.refreshPosts();
            }
        }, this.sitesProvider.getCurrentSiteId());
        // Refresh data if this forum discussion is synchronized from discussions list.
        this.syncManualObserver = this.eventsProvider.on(forum_providers_sync["a" /* AddonModForumSyncProvider */].MANUAL_SYNCED, function (data) {
            if (data.source != 'discussion' && data.forumId == _this.forumId &&
                data.userId == _this.sitesProvider.getCurrentSiteUserId()) {
                // Refresh the data.
                _this.discussionLoaded = false;
                _this.refreshPosts();
            }
        }, this.sitesProvider.getCurrentSiteId());
        // Trigger view event, to highlight the current opened discussion in the split view.
        this.eventsProvider.trigger(forum["a" /* AddonModForumProvider */].VIEW_DISCUSSION_EVENT, {
            forumId: this.forumId,
            discussion: this.discussionId
        }, this.sitesProvider.getCurrentSiteId());
        // Listen for offline ratings saved and synced.
        this.ratingOfflineObserver = this.eventsProvider.on(rating["a" /* CoreRatingProvider */].RATING_SAVED_EVENT, function (data) {
            if (data.component == 'mod_forum' && data.ratingArea == 'post' && data.contextLevel == 'module' &&
                data.instanceId == _this.cmId && data.itemSetId == _this.discussionId) {
                _this.hasOfflineRatings = true;
            }
        });
        this.ratingSyncObserver = this.eventsProvider.on(providers_sync["a" /* CoreRatingSyncProvider */].SYNCED_EVENT, function (data) {
            if (data.component == 'mod_forum' && data.ratingArea == 'post' && data.contextLevel == 'module' &&
                data.instanceId == _this.cmId && data.itemSetId == _this.discussionId) {
                _this.hasOfflineRatings = false;
            }
        });
        this.changeDiscObserver = this.eventsProvider.on(forum["a" /* AddonModForumProvider */].CHANGE_DISCUSSION_EVENT, function (data) {
            if ((_this.forumId && _this.forumId === data.forumId) || data.cmId === _this.cmId) {
                _this.forumProvider.invalidateDiscussionsList(_this.forumId).finally(function () {
                    if (typeof data.locked != 'undefined') {
                        _this.discussion.locked = data.locked;
                    }
                    if (typeof data.pinned != 'undefined') {
                        _this.discussion.pinned = data.pinned;
                    }
                    if (typeof data.starred != 'undefined') {
                        _this.discussion.starred = data.starred;
                    }
                    if (typeof data.deleted != 'undefined' && data.deleted) {
                        if (!data.post.parentid) {
                            if (_this.svComponent && _this.svComponent.isOn()) {
                                _this.svComponent.emptyDetails();
                            }
                            else {
                                _this.navCtrl.pop();
                            }
                        }
                        else {
                            _this.discussionLoaded = false;
                            _this.refreshPosts();
                        }
                    }
                });
            }
        });
    };
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    AddonModForumDiscussionPage.prototype.ionViewCanLeave = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.forumHelper.hasPostDataChanged(this.replyData, this.originalData)) return [3 /*break*/, 2];
                        // Show confirmation if some data has been modified.
                        return [4 /*yield*/, this.domUtils.showConfirm(this.translate.instant('core.confirmcanceledit'))];
                    case 1:
                        // Show confirmation if some data has been modified.
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        // Delete the local files from the tmp folder.
                        this.uploaderProvider.clearTmpFiles(this.replyData.files);
                        this.leavingPage = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Convenience function to get the forum.
     *
     * @return Promise resolved with the forum.
     */
    AddonModForumDiscussionPage.prototype.fetchForum = function () {
        if (this.courseId && this.cmId) {
            return this.forumProvider.getForum(this.courseId, this.cmId);
        }
        else if (this.courseId && this.forumId) {
            return this.forumProvider.getForumById(this.courseId, this.forumId);
        }
        else {
            // Cannot get the forum.
            return Promise.reject(null);
        }
    };
    /**
     * Convenience function to get the posts.
     *
     * @param sync Whether to try to synchronize the discussion.
     * @param showErrors Whether to show errors in a modal.
     * @param forceMarkAsRead Whether to mark all posts as read.
     * @return Promise resolved when done.
     */
    AddonModForumDiscussionPage.prototype.fetchPosts = function (sync, showErrors, forceMarkAsRead) {
        var _this = this;
        var syncPromise;
        if (sync) {
            // Try to synchronize the forum.
            syncPromise = this.syncDiscussion(showErrors).catch(function () {
                // Ignore errors.
            });
        }
        else {
            syncPromise = Promise.resolve();
        }
        var onlinePosts = [];
        var offlineReplies = [];
        var hasUnreadPosts = false;
        var ratingInfo;
        return syncPromise.then(function () {
            return _this.forumProvider.getDiscussionPosts(_this.discussionId, { cmId: _this.cmId }).then(function (response) {
                onlinePosts = response.posts;
                ratingInfo = response.ratinginfo;
                _this.courseId = response.courseid || _this.courseId;
                _this.forumId = response.forumid || _this.forumId;
            }).then(function () {
                // Check if there are responses stored in offline.
                return _this.forumOffline.getDiscussionReplies(_this.discussionId).then(function (replies) {
                    _this.postHasOffline = !!replies.length;
                    var convertPromises = [];
                    // Index posts to allow quick access. Also check unread field.
                    var posts = {};
                    onlinePosts.forEach(function (post) {
                        posts[post.id] = post;
                        hasUnreadPosts = hasUnreadPosts || !!post.unread;
                    });
                    replies.forEach(function (offlineReply) {
                        // If we don't have forumId and courseId, get it from the post.
                        if (!_this.forumId) {
                            _this.forumId = offlineReply.forumid;
                        }
                        if (!_this.courseId) {
                            _this.courseId = offlineReply.courseid;
                        }
                        convertPromises.push(_this.forumHelper.convertOfflineReplyToOnline(offlineReply).then(function (reply) {
                            offlineReplies.push(reply);
                            // Disable reply of the parent. Reply in offline to the same post is not allowed, edit instead.
                            posts[reply.parentid].capabilities.reply = false;
                        }));
                    });
                    return Promise.all(convertPromises).then(function () {
                        // Convert back to array.
                        onlinePosts = _this.utils.objectToArray(posts);
                    });
                });
            });
        }).then(function () {
            var posts = offlineReplies.concat(onlinePosts);
            _this.startingPost = _this.forumProvider.extractStartingPost(posts);
            // If sort type is nested, normal sorting is disabled and nested posts will be displayed.
            if (_this.sort == 'nested') {
                // Sort first by creation date to make format tree work.
                _this.forumProvider.sortDiscussionPosts(posts, 'ASC');
                var rootId = _this.startingPost ? _this.startingPost.id : (_this.discussion ? _this.discussion.id : 0);
                posts = _this.utils.formatTree(posts, 'parentid', 'id', rootId);
            }
            else {
                // Set default reply subject.
                var direction = _this.sort == 'flat-newest' ? 'DESC' : 'ASC';
                _this.forumProvider.sortDiscussionPosts(posts, direction);
            }
            // Now try to get the forum.
            return _this.fetchForum().then(function (forum) {
                // "forum.istracked" is more reliable than "trackPosts".
                if (typeof forum.istracked != 'undefined') {
                    _this.trackPosts = forum.istracked;
                }
                _this.forumId = forum.id;
                _this.cmId = forum.cmid;
                _this.courseId = forum.course;
                _this.forum = forum;
                _this.availabilityMessage = _this.forumHelper.getAvailabilityMessage(forum);
                var promises = [];
                promises.push(_this.forumProvider.getAccessInformation(_this.forumId, { cmId: _this.cmId }).then(function (accessInfo) {
                    _this.accessInfo = accessInfo;
                    // Disallow replying if cut-off date is reached and the user has not the capability to override it.
                    // Just in case the posts were fetched from WS when the cut-off date was not reached but it is now.
                    if (_this.forumHelper.isCutoffDateReached(forum) && !accessInfo.cancanoverridecutoff) {
                        posts.forEach(function (post) {
                            post.capabilities.reply = false;
                        });
                    }
                }));
                // The discussion object was not passed as parameter and there is no starting post. Should not happen.
                if (!_this.discussion) {
                    promises.push(_this.loadDiscussion(_this.forumId, _this.cmId, _this.discussionId));
                }
                return Promise.all(promises);
            }).catch(function () {
                // Ignore errors.
            }).then(function () {
                if (!_this.discussion && !_this.startingPost) {
                    // The discussion object was not passed as parameter and there is no starting post. Should not happen.
                    return Promise.reject('Invalid forum discussion.');
                }
                if (_this.startingPost.author && _this.forum.type == 'single') {
                    // Hide author and groups for first post and type single.
                    _this.startingPost.author.fullname = null;
                    _this.startingPost.author.groups = null;
                }
                _this.posts = posts;
                _this.ratingInfo = ratingInfo;
                _this.postSubjects = _this.getAllPosts().reduce(function (postSubjects, post) {
                    postSubjects[post.id] = post.subject;
                    return postSubjects;
                }, (_a = {}, _a[_this.startingPost.id] = _this.startingPost.subject, _a));
                var _a;
            });
        }).then(function () {
            if (_this.forumProvider.isSetPinStateAvailableForSite()) {
                // Use the canAddDiscussion WS to check if the user can pin discussions.
                return _this.forumProvider.canAddDiscussionToAll(_this.forumId, { cmId: _this.cmId }).then(function (response) {
                    _this.canPin = !!response.canpindiscussions;
                }).catch(function () {
                    _this.canPin = false;
                });
            }
            else {
                _this.canPin = false;
            }
        }).then(function () {
            return _this.ratingOffline.hasRatings('mod_forum', 'post', 'module', _this.cmId, _this.discussionId).then(function (hasRatings) {
                _this.hasOfflineRatings = hasRatings;
            });
        }).catch(function (message) {
            _this.domUtils.showErrorModal(message);
        }).finally(function () {
            _this.discussionLoaded = true;
            _this.refreshIcon = 'refresh';
            _this.syncIcon = 'sync';
            if (forceMarkAsRead || (hasUnreadPosts && _this.trackPosts)) {
                // // Add log in Moodle and mark unread posts as readed.
                _this.forumProvider.logDiscussionView(_this.discussionId, _this.forumId || -1, _this.forum.name).catch(function () {
                    // Ignore errors.
                }).finally(function () {
                    // Trigger mark read posts.
                    _this.eventsProvider.trigger(forum["a" /* AddonModForumProvider */].MARK_READ_EVENT, {
                        courseId: _this.courseId,
                        moduleId: _this.cmId
                    }, _this.sitesProvider.getCurrentSiteId());
                });
            }
        });
    };
    /**
     * Convenience function to load discussion.
     *
     * @param  forumId Forum ID.
     * @param  cmId Forum cmid.
     * @param  discussionId Discussion ID.
     * @return Promise resolved when done.
     */
    AddonModForumDiscussionPage.prototype.loadDiscussion = function (forumId, cmId, discussionId) {
        var _this = this;
        // Fetch the discussion if not passed as parameter.
        if (!this.discussion && forumId) {
            return this.forumHelper.getDiscussionById(forumId, cmId, discussionId).then(function (discussion) {
                _this.discussion = discussion;
                _this.discussionId = _this.discussion.discussion;
            }).catch(function () {
                // Ignore errors.
            });
        }
        return Promise.resolve();
    };
    /**
     * Tries to synchronize the posts discussion.
     *
     * @param showErrors Whether to show errors in a modal.
     * @return Promise resolved when done.
     */
    AddonModForumDiscussionPage.prototype.syncDiscussion = function (showErrors) {
        var _this = this;
        var promises = [];
        promises.push(this.forumSync.syncDiscussionReplies(this.discussionId).then(function (result) {
            if (result.warnings && result.warnings.length) {
                _this.domUtils.showErrorModal(result.warnings[0]);
            }
            if (result && result.updated) {
                // Sync successful, send event.
                _this.eventsProvider.trigger(forum_providers_sync["a" /* AddonModForumSyncProvider */].MANUAL_SYNCED, {
                    forumId: _this.forumId,
                    userId: _this.sitesProvider.getCurrentSiteUserId(),
                    source: 'discussion'
                }, _this.sitesProvider.getCurrentSiteId());
            }
            return result.updated;
        }));
        promises.push(this.forumSync.syncRatings(this.cmId, this.discussionId).then(function (result) {
            if (result.warnings && result.warnings.length) {
                _this.domUtils.showErrorModal(result.warnings[0]);
            }
        }));
        return Promise.all(promises).catch(function (error) {
            if (showErrors) {
                _this.domUtils.showErrorModalDefault(error, 'core.errorsync', true);
            }
            return Promise.reject(null);
        });
    };
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     * @param done Function to call when done.
     * @param showErrors If show errors to the user of hide them.
     * @return Promise resolved when done.
     */
    AddonModForumDiscussionPage.prototype.doRefresh = function (refresher, done, showErrors) {
        if (showErrors === void 0) { showErrors = false; }
        if (this.discussionLoaded) {
            return this.refreshPosts(true, showErrors).finally(function () {
                refresher && refresher.complete();
                done && done();
            });
        }
        return Promise.resolve();
    };
    /**
     * Refresh posts.
     *
     * @param sync Whether to try to synchronize the discussion.
     * @param showErrors Whether to show errors in a modal.
     * @return Promise resolved when done.
     */
    AddonModForumDiscussionPage.prototype.refreshPosts = function (sync, showErrors) {
        var _this = this;
        this.domUtils.scrollToTop(this.content);
        this.refreshIcon = 'spinner';
        this.syncIcon = 'spinner';
        var promises = [
            this.forumProvider.invalidateForumData(this.courseId),
            this.forumProvider.invalidateDiscussionPosts(this.discussionId, this.forumId),
            this.forumProvider.invalidateAccessInformation(this.forumId),
            this.forumProvider.invalidateCanAddDiscussion(this.forumId)
        ];
        return this.utils.allPromises(promises).catch(function () {
            // Ignore errors.
        }).then(function () {
            return _this.fetchPosts(sync, showErrors);
        });
    };
    /**
     * Function to change posts sorting
     *
     * @param type Sort type.
     * @return Promised resolved when done.
     */
    AddonModForumDiscussionPage.prototype.changeSort = function (type) {
        this.discussionLoaded = false;
        this.sort = type;
        this.sitesProvider.getCurrentSite().setLocalSiteConfig('AddonModForumDiscussionSort', this.sort);
        this.domUtils.scrollToTop(this.content);
        return this.fetchPosts();
    };
    /**
     * Lock or unlock the discussion.
     *
     * @param locked True to lock the discussion, false to unlock.
     */
    AddonModForumDiscussionPage.prototype.setLockState = function (locked) {
        var _this = this;
        var modal = this.domUtils.showModalLoading('core.sending', true);
        this.forumProvider.setLockState(this.forumId, this.discussionId, locked).then(function (response) {
            _this.discussion.locked = response.locked;
            var data = {
                forumId: _this.forumId,
                discussionId: _this.discussionId,
                cmId: _this.cmId,
                locked: _this.discussion.locked
            };
            _this.eventsProvider.trigger(forum["a" /* AddonModForumProvider */].CHANGE_DISCUSSION_EVENT, data, _this.sitesProvider.getCurrentSiteId());
            _this.domUtils.showToast('addon.mod_forum.lockupdated', true);
        }).catch(function (error) {
            _this.domUtils.showErrorModal(error);
        }).finally(function () {
            modal.dismiss();
        });
    };
    /**
     * Pin or unpin the discussion.
     *
     * @param pinned True to pin the discussion, false to unpin it.
     */
    AddonModForumDiscussionPage.prototype.setPinState = function (pinned) {
        var _this = this;
        var modal = this.domUtils.showModalLoading('core.sending', true);
        this.forumProvider.setPinState(this.discussionId, pinned).then(function () {
            _this.discussion.pinned = pinned;
            var data = {
                forumId: _this.forumId,
                discussionId: _this.discussionId,
                cmId: _this.cmId,
                pinned: _this.discussion.pinned
            };
            _this.eventsProvider.trigger(forum["a" /* AddonModForumProvider */].CHANGE_DISCUSSION_EVENT, data, _this.sitesProvider.getCurrentSiteId());
            _this.domUtils.showToast('addon.mod_forum.pinupdated', true);
        }).catch(function (error) {
            _this.domUtils.showErrorModal(error);
        }).finally(function () {
            modal.dismiss();
        });
    };
    /**
     * Star or unstar the discussion.
     *
     * @param starred True to star the discussion, false to unstar it.
     */
    AddonModForumDiscussionPage.prototype.toggleFavouriteState = function (starred) {
        var _this = this;
        var modal = this.domUtils.showModalLoading('core.sending', true);
        this.forumProvider.toggleFavouriteState(this.discussionId, starred).then(function () {
            _this.discussion.starred = starred;
            var data = {
                forumId: _this.forumId,
                discussionId: _this.discussionId,
                cmId: _this.cmId,
                starred: _this.discussion.starred
            };
            _this.eventsProvider.trigger(forum["a" /* AddonModForumProvider */].CHANGE_DISCUSSION_EVENT, data, _this.sitesProvider.getCurrentSiteId());
            _this.domUtils.showToast('addon.mod_forum.favouriteupdated', true);
        }).catch(function (error) {
            _this.domUtils.showErrorModal(error);
        }).finally(function () {
            modal.dismiss();
        });
    };
    /**
     * New post added.
     */
    AddonModForumDiscussionPage.prototype.postListChanged = function () {
        var _this = this;
        // Trigger an event to notify a new reply.
        var data = {
            forumId: this.forumId,
            discussionId: this.discussionId,
            cmId: this.cmId
        };
        this.eventsProvider.trigger(forum["a" /* AddonModForumProvider */].REPLY_DISCUSSION_EVENT, data, this.sitesProvider.getCurrentSiteId());
        this.discussionLoaded = false;
        this.refreshPosts().finally(function () {
            _this.discussionLoaded = true;
        });
    };
    /**
     * Runs when the page is about to leave and no longer be the active page.
     */
    AddonModForumDiscussionPage.prototype.ionViewWillLeave = function () {
        this.syncObserver && this.syncObserver.off();
        this.syncManualObserver && this.syncManualObserver.off();
        this.ratingOfflineObserver && this.ratingOfflineObserver.off();
        this.ratingSyncObserver && this.ratingSyncObserver.off();
        this.changeDiscObserver && this.changeDiscObserver.off();
        delete this.syncObserver;
    };
    /**
     * Page destroyed.
     */
    AddonModForumDiscussionPage.prototype.ngOnDestroy = function () {
        this.onlineObserver && this.onlineObserver.unsubscribe();
    };
    /**
     * Get all the posts contained in the discussion.
     *
     * @return Array containing all the posts of the discussion.
     */
    AddonModForumDiscussionPage.prototype.getAllPosts = function () {
        return [].concat.apply([], this.posts.map(this.flattenPostHierarchy.bind(this)));
    };
    /**
     * Flatten a post's hierarchy into an array.
     *
     * @param parent Parent post.
     * @return Array containing all the posts within the hierarchy (including the parent).
     */
    AddonModForumDiscussionPage.prototype.flattenPostHierarchy = function (parent) {
        var posts = [parent];
        var children = parent.children || [];
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            posts.push.apply(posts, this.flattenPostHierarchy(child));
        }
        return posts;
    };
    __decorate([
        Object(core["_10" /* ViewChild */])(ionic_angular["f" /* Content */]),
        __metadata("design:type", ionic_angular["f" /* Content */])
    ], AddonModForumDiscussionPage.prototype, "content", void 0);
    AddonModForumDiscussionPage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-addon-mod-forum-discussion',
            templateUrl: 'discussion.html',
        }),
        __param(16, Object(core["O" /* Optional */])()),
        __metadata("design:paramtypes", [ionic_angular["t" /* NavParams */],
            _ionic_native_network["a" /* Network */],
            core["N" /* NgZone */],
            app["b" /* CoreAppProvider */],
            events["b" /* CoreEventsProvider */],
            sites["b" /* CoreSitesProvider */],
            dom["b" /* CoreDomUtilsProvider */],
            utils_utils["b" /* CoreUtilsProvider */],
            _ngx_translate_core["c" /* TranslateService */],
            fileuploader["b" /* CoreFileUploaderProvider */],
            forum["a" /* AddonModForumProvider */],
            providers_offline["a" /* AddonModForumOfflineProvider */],
            helper["a" /* AddonModForumHelperProvider */],
            forum_providers_sync["a" /* AddonModForumSyncProvider */],
            offline["a" /* CoreRatingOfflineProvider */],
            user["b" /* CoreUserProvider */],
            split_view["a" /* CoreSplitViewComponent */],
            ionic_angular["s" /* NavController */]])
    ], AddonModForumDiscussionPage);
    return AddonModForumDiscussionPage;
}());

//# sourceMappingURL=discussion.js.map
// CONCATENATED MODULE: ./src/addon/mod/forum/pages/discussion/discussion.module.ts
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
var discussion_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var discussion_module_AddonModForumDiscussionPageModule = /** @class */ (function () {
    function AddonModForumDiscussionPageModule() {
    }
    AddonModForumDiscussionPageModule = discussion_module___decorate([
        Object(core["J" /* NgModule */])({
            declarations: [
                discussion_AddonModForumDiscussionPage,
            ],
            imports: [
                components_module["a" /* CoreComponentsModule */],
                directives_module["a" /* CoreDirectivesModule */],
                components_components_module["a" /* AddonModForumComponentsModule */],
                ionic_angular["l" /* IonicPageModule */].forChild(discussion_AddonModForumDiscussionPage),
                _ngx_translate_core["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModForumDiscussionPageModule);
    return AddonModForumDiscussionPageModule;
}());

//# sourceMappingURL=discussion.module.js.map
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

// EXTERNAL MODULE: ./src/core/block/components/only-title-block/only-title-block.ngfactory.js
var only_title_block_ngfactory = __webpack_require__(1566);

// EXTERNAL MODULE: ./src/core/block/components/pre-rendered-block/pre-rendered-block.ngfactory.js
var pre_rendered_block_ngfactory = __webpack_require__(1567);

// EXTERNAL MODULE: ./src/core/block/components/course-blocks/course-blocks.ngfactory.js
var course_blocks_ngfactory = __webpack_require__(1564);

// EXTERNAL MODULE: ./src/core/course/components/unsupported-module/unsupported-module.ngfactory.js
var unsupported_module_ngfactory = __webpack_require__(1565);

// EXTERNAL MODULE: ./src/core/course/components/tag-area/tag-area.ngfactory.js
var tag_area_ngfactory = __webpack_require__(1568);

// EXTERNAL MODULE: ./src/core/tag/components/feed/feed.ngfactory.js
var feed_ngfactory = __webpack_require__(1569);

// EXTERNAL MODULE: ./src/core/editor/components/rich-text-editor/rich-text-editor.ngfactory.js
var rich_text_editor_ngfactory = __webpack_require__(279);

// EXTERNAL MODULE: ./src/addon/mod/forum/components/index/index.ngfactory.js
var index_ngfactory = __webpack_require__(1596);

// EXTERNAL MODULE: ./src/addon/mod/forum/components/discussion-options-menu/discussion-options-menu.ngfactory.js
var discussion_options_menu_ngfactory = __webpack_require__(1604);

// EXTERNAL MODULE: ./src/addon/mod/forum/components/post-options-menu/post-options-menu.ngfactory.js
var post_options_menu_ngfactory = __webpack_require__(1605);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory.js
var toolbar_title_ngfactory = __webpack_require__(740);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.js
var toolbar_title = __webpack_require__(324);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(252);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.js
var navbar = __webpack_require__(216);

// EXTERNAL MODULE: ./src/directives/format-text.ts
var format_text = __webpack_require__(49);

// EXTERNAL MODULE: ./src/providers/utils/text.ts
var utils_text = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform = __webpack_require__(16);

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

// EXTERNAL MODULE: ./src/components/context-menu/context-menu-item.ngfactory.js
var context_menu_item_ngfactory = __webpack_require__(94);

// EXTERNAL MODULE: ./src/components/context-menu/context-menu-item.ts
var context_menu_item = __webpack_require__(86);

// EXTERNAL MODULE: ./src/components/context-menu/context-menu.ts
var context_menu = __webpack_require__(81);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/card/card.js
var card = __webpack_require__(79);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/icon/icon.js
var icon = __webpack_require__(48);

// EXTERNAL MODULE: ./src/components/icon/icon.ngfactory.js
var icon_ngfactory = __webpack_require__(85);

// EXTERNAL MODULE: ./src/components/icon/icon.ts
var icon_icon = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/note/note.js
var note = __webpack_require__(253);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(7);

// EXTERNAL MODULE: ./src/components/user-avatar/user-avatar.ngfactory.js
var user_avatar_ngfactory = __webpack_require__(218);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/avatar/avatar.js
var avatar = __webpack_require__(164);

// EXTERNAL MODULE: ./src/components/user-avatar/user-avatar.ts
var user_avatar = __webpack_require__(186);

// EXTERNAL MODULE: ./src/components/files/files.ngfactory.js
var files_ngfactory = __webpack_require__(415);

// EXTERNAL MODULE: ./src/components/files/files.ts
var files = __webpack_require__(304);

// EXTERNAL MODULE: ./src/providers/utils/mimetype.ts
var mimetype = __webpack_require__(65);

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

// EXTERNAL MODULE: ./src/core/tag/components/list/list.ngfactory.js
var list_ngfactory = __webpack_require__(504);

// EXTERNAL MODULE: ./src/core/tag/components/list/list.ts
var list = __webpack_require__(332);

// EXTERNAL MODULE: ./src/core/rating/components/rate/rate.ngfactory.js
var rate_ngfactory = __webpack_require__(2166);

// EXTERNAL MODULE: ./src/core/rating/components/rate/rate.ts
var rate = __webpack_require__(1576);

// EXTERNAL MODULE: ./src/core/rating/components/aggregate/aggregate.ngfactory.js
var aggregate_ngfactory = __webpack_require__(2167);

// EXTERNAL MODULE: ./src/core/rating/components/aggregate/aggregate.ts
var aggregate = __webpack_require__(1575);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/modal/modal-controller.js
var modal_controller = __webpack_require__(166);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/label/label.js
var label = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/checkbox/checkbox.ngfactory.js
var checkbox_ngfactory = __webpack_require__(255);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/checkbox/checkbox.js
var checkbox_checkbox = __webpack_require__(204);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(23);

// EXTERNAL MODULE: ./src/components/attachments/attachments.ngfactory.js
var attachments_ngfactory = __webpack_require__(384);

// EXTERNAL MODULE: ./src/components/attachments/attachments.ts
var attachments = __webpack_require__(290);

// EXTERNAL MODULE: ./src/core/fileuploader/providers/helper.ts
var fileuploader_providers_helper = __webpack_require__(145);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-divider.js
var item_divider = __webpack_require__(103);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.ngfactory.js
var input_ngfactory = __webpack_require__(115);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.js
var input = __webpack_require__(95);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app_app = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(34);

// EXTERNAL MODULE: ./src/core/editor/components/rich-text-editor/rich-text-editor.ts
var rich_text_editor = __webpack_require__(254);

// EXTERNAL MODULE: ./src/core/editor/providers/editor-offline.ts
var editor_offline = __webpack_require__(219);

// EXTERNAL MODULE: ./node_modules/@ionic-native/device/index.js
var device = __webpack_require__(180);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/grid.js
var grid = __webpack_require__(155);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/row.js
var row = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/col.js
var col = __webpack_require__(119);

// EXTERNAL MODULE: ./src/pipes/format-date.ts
var format_date = __webpack_require__(231);

// EXTERNAL MODULE: ./src/providers/utils/time.ts
var time = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/card/card-header.js
var card_header = __webpack_require__(327);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/card/card-content.js
var card_content = __webpack_require__(497);

// EXTERNAL MODULE: ./src/addon/mod/forum/components/post/post.ts
var post = __webpack_require__(1619);

// EXTERNAL MODULE: ./src/providers/sync.ts
var src_providers_sync = __webpack_require__(82);

// EXTERNAL MODULE: ./src/core/tag/providers/tag.ts
var tag = __webpack_require__(168);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/popover/popover-controller.js
var popover_controller = __webpack_require__(72);

// CONCATENATED MODULE: ./src/addon/mod/forum/components/post/post.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



















































































var styles_AddonModForumPostComponent = [];
var RenderType_AddonModForumPostComponent = core["_30" /* ɵcrt */]({ encapsulation: 2, styles: styles_AddonModForumPostComponent, data: {} });

function View_AddonModForumPostComponent_2(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 1, "core-icon", [["name", "fa-map-pin"]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_31" /* ɵdid */](1, 704512, null, 0, icon_icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config["a" /* Config */]], { name: [0, "name"] }, null)], function (_ck, _v) { var currVal_0 = "fa-map-pin"; _ck(_v, 1, 0, currVal_0); }, null); }
function View_AddonModForumPostComponent_3(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 1, "core-icon", [["class", "addon-forum-star"], ["name", "fa-star"]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_31" /* ɵdid */](1, 704512, null, 0, icon_icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config["a" /* Config */]], { name: [0, "name"] }, null)], function (_ck, _v) { var currVal_0 = "fa-star"; _ck(_v, 1, 0, currVal_0); }, null); }
function View_AddonModForumPostComponent_4(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 6, "ion-note", [["float-end", ""], ["padding-left", ""], ["text-end", ""]], [[1, "aria-label", 0]], null, null, null, null)), core["_31" /* ɵdid */](1, 16384, null, 0, note["a" /* Note */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_32" /* ɵeld */](4, 0, null, null, 1, "core-icon", [["color", "primary"], ["name", "fa-circle"]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_31" /* ɵdid */](5, 704512, null, 0, icon_icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config["a" /* Config */]], { name: [0, "name"], color: [1, "color"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "]))], function (_ck, _v) { var currVal_1 = "fa-circle"; var currVal_2 = "primary"; _ck(_v, 5, 0, currVal_1, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_57" /* ɵunv */](_v, 0, 0, core["_45" /* ɵnov */](_v, 2).transform("addon.mod_forum.unread")); _ck(_v, 0, 0, currVal_0); }); }
function View_AddonModForumPostComponent_5(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 6, "button", [["clear", ""], ["color", "dark"], ["icon-only", ""], ["ion-button", ""]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.showOptionsMenu($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_31" /* ɵdid */](1, 1097728, [[3, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { color: [0, "color"], clear: [1, "clear"] }, null), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), core["_32" /* ɵeld */](4, 0, null, 0, 1, "core-icon", [["name", "more"]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_31" /* ɵdid */](5, 704512, null, 0, icon_icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config["a" /* Config */]], { name: [0, "name"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n                "]))], function (_ck, _v) { var currVal_1 = "dark"; var currVal_2 = ""; _ck(_v, 1, 0, currVal_1, currVal_2); var currVal_3 = "more"; _ck(_v, 5, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = core["_57" /* ɵunv */](_v, 0, 0, core["_45" /* ɵnov */](_v, 2).transform("core.displayoptions")); _ck(_v, 0, 0, currVal_0); }); }
function View_AddonModForumPostComponent_1(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 19, "div", [["class", "addon-mod-forum-post-title"]], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_32" /* ɵeld */](2, 0, null, null, 10, "h2", [["text-wrap", ""]], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_AddonModForumPostComponent_2)), core["_31" /* ɵdid */](5, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_AddonModForumPostComponent_3)), core["_31" /* ɵdid */](8, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_32" /* ɵeld */](10, 16777216, null, null, 1, "core-format-text", [["contextLevel", "module"]], null, null, null, null, null)), core["_31" /* ɵdid */](11, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["t" /* ElementRef */], sites["b" /* CoreSitesProvider */], dom["b" /* CoreDomUtilsProvider */], utils_text["b" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils_utils["b" /* CoreUtilsProvider */], url["b" /* CoreUrlUtilsProvider */], logger["b" /* CoreLoggerProvider */], filepool["b" /* CoreFilepoolProvider */], providers_helper["b" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["b" /* CoreEventsProvider */], filter["a" /* CoreFilterProvider */], filter_providers_helper["a" /* CoreFilterHelperProvider */], delegate["a" /* CoreFilterDelegate */], core["_12" /* ViewContainerRef */], urlschemes["b" /* CoreCustomURLSchemesProvider */]], { text: [0, "text"], contextLevel: [1, "contextLevel"], contextInstanceId: [2, "contextInstanceId"], courseId: [3, "courseId"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_AddonModForumPostComponent_4)), core["_31" /* ɵdid */](15, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_AddonModForumPostComponent_5)), core["_31" /* ɵdid */](18, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.discussion && !_co.post.parentid) && _co.discussion.pinned); _ck(_v, 5, 0, currVal_0); var currVal_1 = (((_co.discussion && !_co.post.parentid) && !_co.discussion.pinned) && _co.discussion.starred); _ck(_v, 8, 0, currVal_1); var currVal_2 = _co.post.subject; var currVal_3 = "module"; var currVal_4 = (_co.forum && _co.forum.cmid); var currVal_5 = _co.courseId; _ck(_v, 11, 0, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_6 = (_co.trackPosts && _co.post.unread); _ck(_v, 15, 0, currVal_6); var currVal_7 = _co.optionsMenuEnabled; _ck(_v, 18, 0, currVal_7); }, null); }
function View_AddonModForumPostComponent_6(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 2, "ion-avatar", [["core-user-avatar", ""], ["item-start", ""]], null, null, null, user_avatar_ngfactory["b" /* View_CoreUserAvatarComponent_0 */], user_avatar_ngfactory["a" /* RenderType_CoreUserAvatarComponent */])), core["_31" /* ɵdid */](1, 16384, null, 0, avatar["a" /* Avatar */], [], null, null), core["_31" /* ɵdid */](2, 770048, null, 0, user_avatar["a" /* CoreUserAvatarComponent */], [nav_controller["a" /* NavController */], sites["b" /* CoreSitesProvider */], utils_utils["b" /* CoreUtilsProvider */], app["b" /* CoreAppProvider */], events["b" /* CoreEventsProvider */], [2, split_view["a" /* CoreSplitViewComponent */]]], { user: [0, "user"], courseId: [1, "courseId"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.post.author; var currVal_1 = _co.courseId; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_AddonModForumPostComponent_7(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.post.author.fullname; _ck(_v, 1, 0, currVal_0); }); }
function View_AddonModForumPostComponent_9(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), core["_32" /* ɵeld */](1, 0, null, null, 1, "ion-icon", [["name", "people"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_31" /* ɵdid */](2, 147456, [[4, 4]], 0, icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_56" /* ɵted */](3, null, [" ", " "]))], function (_ck, _v) { var currVal_1 = "people"; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = core["_45" /* ɵnov */](_v, 2)._hidden; _ck(_v, 1, 0, currVal_0); var currVal_2 = _v.context.$implicit.name; _ck(_v, 3, 0, currVal_2); }); }
function View_AddonModForumPostComponent_8(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_AddonModForumPostComponent_9)), core["_31" /* ɵdid */](2, 802816, null, 0, common["j" /* NgForOf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.post.author.groups; _ck(_v, 2, 0, currVal_0); }, null); }
function View_AddonModForumPostComponent_10(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](1, null, ["", ""])), core["_50" /* ɵppd */](2, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_57" /* ɵunv */](_v, 1, 0, _ck(_v, 2, 0, core["_45" /* ɵnov */](_v.parent, 0), (_co.post.timecreated * 1000), "strftimerecentfull")); _ck(_v, 1, 0, currVal_0); }); }
function View_AddonModForumPostComponent_11(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), core["_32" /* ɵeld */](1, 0, null, null, 1, "ion-icon", [["name", "time"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_31" /* ɵdid */](2, 147456, [[4, 4]], 0, icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_56" /* ɵted */](3, null, [" ", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_1 = "time"; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = core["_45" /* ɵnov */](_v, 2)._hidden; _ck(_v, 1, 0, currVal_0); var currVal_2 = core["_57" /* ɵunv */](_v, 3, 0, core["_45" /* ɵnov */](_v, 4).transform("core.notsent")); _ck(_v, 3, 0, currVal_2); }); }
function View_AddonModForumPostComponent_13(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 6, "ion-note", [["float-end", ""], ["padding-left", ""], ["text-end", ""]], [[1, "aria-label", 0]], null, null, null, null)), core["_31" /* ɵdid */](1, 16384, null, 0, note["a" /* Note */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_32" /* ɵeld */](4, 0, null, null, 1, "core-icon", [["color", "primary"], ["name", "fa-circle"]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_31" /* ɵdid */](5, 704512, null, 0, icon_icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config["a" /* Config */]], { name: [0, "name"], color: [1, "color"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                    "]))], function (_ck, _v) { var currVal_1 = "fa-circle"; var currVal_2 = "primary"; _ck(_v, 5, 0, currVal_1, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_57" /* ɵunv */](_v, 0, 0, core["_45" /* ɵnov */](_v, 2).transform("addon.mod_forum.unread")); _ck(_v, 0, 0, currVal_0); }); }
function View_AddonModForumPostComponent_14(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 6, "button", [["clear", ""], ["color", "dark"], ["icon-only", ""], ["ion-button", ""]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.showOptionsMenu($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_31" /* ɵdid */](1, 1097728, [[3, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { color: [0, "color"], clear: [1, "clear"] }, null), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), core["_32" /* ɵeld */](4, 0, null, 0, 1, "core-icon", [["name", "more"]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_31" /* ɵdid */](5, 704512, null, 0, icon_icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config["a" /* Config */]], { name: [0, "name"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n                    "]))], function (_ck, _v) { var currVal_1 = "dark"; var currVal_2 = ""; _ck(_v, 1, 0, currVal_1, currVal_2); var currVal_3 = "more"; _ck(_v, 5, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = core["_57" /* ɵunv */](_v, 0, 0, core["_45" /* ɵnov */](_v, 2).transform("core.displayoptions")); _ck(_v, 0, 0, currVal_0); }); }
function View_AddonModForumPostComponent_12(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_AddonModForumPostComponent_13)), core["_31" /* ɵdid */](3, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_AddonModForumPostComponent_14)), core["_31" /* ɵdid */](6, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.trackPosts && _co.post.unread); _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.optionsMenuEnabled; _ck(_v, 6, 0, currVal_1); }, null); }
function View_AddonModForumPostComponent_15(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 6, "div", [["padding-bottom", ""]], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_32" /* ɵeld */](2, 0, null, null, 3, "ion-note", [["color", "danger"]], null, null, null, null, null)), core["_31" /* ɵdid */](3, 16384, null, 0, note["a" /* Note */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_56" /* ɵted */](4, null, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_0 = "danger"; _ck(_v, 3, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = core["_57" /* ɵunv */](_v, 4, 0, core["_45" /* ɵnov */](_v, 5).transform("addon.mod_forum.postisprivatereply")); _ck(_v, 4, 0, currVal_1); }); }
function View_AddonModForumPostComponent_16(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 4, "div", [["no-lines", ""]], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_32" /* ɵeld */](2, 0, null, null, 1, "core-files", [["showInline", "true"]], null, null, null, files_ngfactory["b" /* View_CoreFilesComponent_0 */], files_ngfactory["a" /* RenderType_CoreFilesComponent */])), core["_31" /* ɵdid */](3, 376832, null, 0, files["a" /* CoreFilesComponent */], [mimetype["b" /* CoreMimetypeUtilsProvider */], utils_utils["b" /* CoreUtilsProvider */], core["F" /* KeyValueDiffers */]], { files: [0, "files"], component: [1, "component"], componentId: [2, "componentId"], showInline: [3, "showInline"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.post.attachments; var currVal_1 = _co.component; var currVal_2 = _co.componentId; var currVal_3 = "true"; _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3); }, null); }
function View_AddonModForumPostComponent_17(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 13, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 5, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 6, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 7, { _icons: 1 }), core["_31" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_32" /* ɵeld */](7, 0, null, 0, 2, "div", [["item-start", ""]], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](8, null, ["", ":"])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_32" /* ɵeld */](11, 0, null, 2, 1, "core-tag-list", [], null, null, null, list_ngfactory["b" /* View_CoreTagListComponent_0 */], list_ngfactory["a" /* RenderType_CoreTagListComponent */])), core["_31" /* ɵdid */](12, 49152, null, 0, list["a" /* CoreTagListComponent */], [nav_controller["a" /* NavController */], [2, split_view["a" /* CoreSplitViewComponent */]]], { tags: [0, "tags"] }, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.post.tags; _ck(_v, 12, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = core["_57" /* ɵunv */](_v, 8, 0, core["_45" /* ɵnov */](_v, 9).transform("core.tag.tags")); _ck(_v, 8, 0, currVal_0); }); }
function View_AddonModForumPostComponent_18(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 1, "core-rating-rate", [["contextLevel", "module"]], null, [[null, "onUpdate"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onUpdate" === en)) {
        var pd_0 = (_co.ratingUpdated() !== false);
        ad = (pd_0 && ad);
    } return ad; }, rate_ngfactory["b" /* View_CoreRatingRateComponent_0 */], rate_ngfactory["a" /* RenderType_CoreRatingRateComponent */])), core["_31" /* ɵdid */](1, 704512, null, 0, rate["a" /* CoreRatingRateComponent */], [dom["b" /* CoreDomUtilsProvider */], translate_service["a" /* TranslateService */], events["b" /* CoreEventsProvider */], rating["a" /* CoreRatingProvider */], offline["a" /* CoreRatingOfflineProvider */], sites["b" /* CoreSitesProvider */]], { ratingInfo: [0, "ratingInfo"], contextLevel: [1, "contextLevel"], instanceId: [2, "instanceId"], itemId: [3, "itemId"], itemSetId: [4, "itemSetId"], courseId: [5, "courseId"], aggregateMethod: [6, "aggregateMethod"], scaleId: [7, "scaleId"], userId: [8, "userId"] }, { onUpdate: "onUpdate" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.ratingInfo; var currVal_1 = "module"; var currVal_2 = _co.componentId; var currVal_3 = _co.post.id; var currVal_4 = _co.discussionId; var currVal_5 = _co.courseId; var currVal_6 = _co.forum.assessed; var currVal_7 = _co.forum.scale; var currVal_8 = _co.post.author.id; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); }, null); }
function View_AddonModForumPostComponent_19(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 1, "core-rating-aggregate", [["contextLevel", "module"]], null, null, null, aggregate_ngfactory["b" /* View_CoreRatingAggregateComponent_0 */], aggregate_ngfactory["a" /* RenderType_CoreRatingAggregateComponent */])), core["_31" /* ɵdid */](1, 704512, null, 0, aggregate["a" /* CoreRatingAggregateComponent */], [events["b" /* CoreEventsProvider */], modal_controller["a" /* ModalController */], rating["a" /* CoreRatingProvider */], sites["b" /* CoreSitesProvider */]], { ratingInfo: [0, "ratingInfo"], contextLevel: [1, "contextLevel"], instanceId: [2, "instanceId"], itemId: [3, "itemId"], aggregateMethod: [4, "aggregateMethod"], scaleId: [5, "scaleId"], courseId: [6, "courseId"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.ratingInfo; var currVal_1 = "module"; var currVal_2 = _co.componentId; var currVal_3 = _co.post.id; var currVal_4 = _co.forum.assessed; var currVal_5 = _co.forum.scale; var currVal_6 = _co.courseId; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }, null); }
function View_AddonModForumPostComponent_20(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 14, "ion-item", [["class", "addon-forum-reply-button item item-block"], ["no-padding", ""], ["text-end", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 8, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 9, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 10, { _icons: 1 }), core["_31" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_32" /* ɵeld */](7, 0, null, 2, 6, "button", [["clear", ""], ["icon-left", ""], ["ion-button", ""], ["small", ""]], [[1, "aria-controls", 0], [1, "aria-expanded", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.showReplyForm() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_31" /* ɵdid */](8, 1097728, [[9, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { small: [0, "small"], clear: [1, "clear"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_32" /* ɵeld */](10, 0, null, 0, 1, "core-icon", [["name", "fa-reply"]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_31" /* ɵdid */](11, 704512, null, 0, icon_icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config["a" /* Config */]], { name: [0, "name"] }, null), (_l()(), core["_56" /* ɵted */](12, 0, [" ", "\n            "])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n        "]))], function (_ck, _v) { var currVal_2 = ""; var currVal_3 = ""; _ck(_v, 8, 0, currVal_2, currVal_3); var currVal_4 = "fa-reply"; _ck(_v, 11, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ("addon-forum-reply-edit-form-" + _co.uniqueId); var currVal_1 = (_co.replyData.replyingTo === _co.post.id); _ck(_v, 7, 0, currVal_0, currVal_1); var currVal_5 = core["_57" /* ɵunv */](_v, 12, 0, core["_45" /* ɵnov */](_v, 13).transform("addon.mod_forum.reply")); _ck(_v, 12, 0, currVal_5); }); }
function View_AddonModForumPostComponent_22(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 18, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 17, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 18, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 19, { _icons: 1 }), core["_31" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_32" /* ɵeld */](7, 0, null, 1, 3, "ion-label", [], null, null, null, null, null)), core["_31" /* ɵdid */](8, 16384, [[17, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_56" /* ɵted */](9, null, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_32" /* ɵeld */](12, 0, null, 4, 5, "ion-checkbox", [["item-end", ""], ["name", "isprivatereply"]], [[2, "checkbox-disabled", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (core["_45" /* ɵnov */](_v, 13)._click($event) !== false);
        ad = (pd_0 && ad);
    } if (("ngModelChange" === en)) {
        var pd_1 = ((_co.replyData.isprivatereply = $event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, checkbox_ngfactory["b" /* View_Checkbox_0 */], checkbox_ngfactory["a" /* RenderType_Checkbox */])), core["_31" /* ɵdid */](13, 1228800, null, 0, checkbox_checkbox["a" /* Checkbox */], [config["a" /* Config */], util_form["a" /* Form */], [2, item["a" /* Item */]], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), core["_51" /* ɵprd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [checkbox_checkbox["a" /* Checkbox */]]), core["_31" /* ɵdid */](15, 671744, null, 0, esm5_forms["q" /* NgModel */], [[2, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), core["_51" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_31" /* ɵdid */](17, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_9 = "isprivatereply"; var currVal_10 = _co.replyData.isprivatereply; _ck(_v, 15, 0, currVal_9, currVal_10); }, function (_ck, _v) { var currVal_0 = core["_57" /* ɵunv */](_v, 9, 0, core["_45" /* ɵnov */](_v, 10).transform("addon.mod_forum.privatereply")); _ck(_v, 9, 0, currVal_0); var currVal_1 = core["_45" /* ɵnov */](_v, 13)._disabled; var currVal_2 = core["_45" /* ɵnov */](_v, 17).ngClassUntouched; var currVal_3 = core["_45" /* ɵnov */](_v, 17).ngClassTouched; var currVal_4 = core["_45" /* ɵnov */](_v, 17).ngClassPristine; var currVal_5 = core["_45" /* ɵnov */](_v, 17).ngClassDirty; var currVal_6 = core["_45" /* ɵnov */](_v, 17).ngClassValid; var currVal_7 = core["_45" /* ɵnov */](_v, 17).ngClassInvalid; var currVal_8 = core["_45" /* ɵnov */](_v, 17).ngClassPending; _ck(_v, 12, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); }); }
function View_AddonModForumPostComponent_24(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 1, "core-icon", [["item-start", ""], ["name", "fa-caret-right"]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_31" /* ɵdid */](1, 704512, null, 0, icon_icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config["a" /* Config */]], { name: [0, "name"] }, null)], function (_ck, _v) { var currVal_0 = "fa-caret-right"; _ck(_v, 1, 0, currVal_0); }, null); }
function View_AddonModForumPostComponent_25(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 1, "core-icon", [["item-start", ""], ["name", "fa-caret-down"]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_31" /* ɵdid */](1, 704512, null, 0, icon_icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config["a" /* Config */]], { name: [0, "name"] }, null)], function (_ck, _v) { var currVal_0 = "fa-caret-down"; _ck(_v, 1, 0, currVal_0); }, null); }
function View_AddonModForumPostComponent_26(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_32" /* ɵeld */](2, 0, null, null, 1, "core-attachments", [], null, null, null, attachments_ngfactory["b" /* View_CoreAttachmentsComponent_0 */], attachments_ngfactory["a" /* RenderType_CoreAttachmentsComponent */])), core["_31" /* ɵdid */](3, 114688, null, 0, attachments["a" /* CoreAttachmentsComponent */], [app["b" /* CoreAppProvider */], dom["b" /* CoreDomUtilsProvider */], utils_text["b" /* CoreTextUtilsProvider */], fileuploader["b" /* CoreFileUploaderProvider */], translate_service["a" /* TranslateService */], fileuploader_providers_helper["a" /* CoreFileUploaderHelperProvider */]], { files: [0, "files"], maxSize: [1, "maxSize"], maxSubmissions: [2, "maxSubmissions"], component: [3, "component"], componentId: [4, "componentId"], allowOffline: [5, "allowOffline"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.replyData.files; var currVal_1 = _co.forum.maxbytes; var currVal_2 = _co.forum.maxattachments; var currVal_3 = _co.component; var currVal_4 = _co.forum.cmid; var currVal_5 = true; _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }, null); }
function View_AddonModForumPostComponent_23(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 19, null, null, null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_32" /* ɵeld */](2, 0, null, null, 13, "ion-item-divider", [["class", "core-expandable item item-divider"], ["text-wrap", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.toggleAdvanced() !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](3, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 20, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 21, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 22, { _icons: 1 }), core["_31" /* ɵdid */](7, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_27" /* ɵand */](16777216, null, 0, 1, null, View_AddonModForumPostComponent_24)), core["_31" /* ɵdid */](10, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_27" /* ɵand */](16777216, null, 0, 1, null, View_AddonModForumPostComponent_25)), core["_31" /* ɵdid */](13, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](14, 2, ["\n                ", "\n            "])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_AddonModForumPostComponent_26)), core["_31" /* ɵdid */](18, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.advanced; _ck(_v, 10, 0, currVal_0); var currVal_1 = _co.advanced; _ck(_v, 13, 0, currVal_1); var currVal_3 = _co.advanced; _ck(_v, 18, 0, currVal_3); }, function (_ck, _v) { var currVal_2 = core["_57" /* ɵunv */](_v, 14, 0, core["_45" /* ɵnov */](_v, 15).transform("addon.mod_forum.advanced")); _ck(_v, 14, 0, currVal_2); }); }
function View_AddonModForumPostComponent_21(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, [[1, 0], ["replyFormEl", 1]], null, 75, "form", [["ion-list", ""], ["novalidate", ""]], [[8, "id", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (core["_45" /* ɵnov */](_v, 2).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (core["_45" /* ɵnov */](_v, 2).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), core["_31" /* ɵdid */](1, 16384, null, 0, esm5_forms["w" /* ɵbf */], [], null, null), core["_31" /* ɵdid */](2, 4210688, null, 0, esm5_forms["p" /* NgForm */], [[8, null], [8, null]], null, null), core["_51" /* ɵprd */](2048, null, esm5_forms["b" /* ControlContainer */], null, [esm5_forms["p" /* NgForm */]]), core["_31" /* ɵdid */](4, 16384, null, 0, esm5_forms["o" /* NgControlStatusGroup */], [esm5_forms["b" /* ControlContainer */]], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_32" /* ɵeld */](6, 0, null, null, 18, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](7, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 11, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 12, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 13, { _icons: 1 }), core["_31" /* ɵdid */](11, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_32" /* ɵeld */](13, 0, null, 1, 3, "ion-label", [["stacked", ""]], null, null, null, null, null)), core["_31" /* ɵdid */](14, 16384, [[11, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), core["_56" /* ɵted */](15, null, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_32" /* ɵeld */](18, 0, null, 3, 5, "ion-input", [["name", "subject"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.replyData.subject = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["_31" /* ɵdid */](19, 671744, null, 0, esm5_forms["q" /* NgModel */], [[2, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [8, null]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), core["_51" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_31" /* ɵdid */](21, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), core["_31" /* ɵdid */](22, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app_app["a" /* App */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["m" /* NgControl */]], dom_controller["a" /* DomController */]], { type: [0, "type"], placeholder: [1, "placeholder"] }, null), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_32" /* ɵeld */](26, 0, null, null, 16, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](27, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 14, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 15, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 16, { _icons: 1 }), core["_31" /* ɵdid */](31, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_32" /* ɵeld */](33, 0, null, 1, 3, "ion-label", [["stacked", ""]], null, null, null, null, null)), core["_31" /* ɵdid */](34, 16384, [[14, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), core["_56" /* ɵted */](35, null, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_32" /* ɵeld */](38, 0, null, 3, 3, "core-rich-text-editor", [["contextLevel", "module"], ["elementId", "message"], ["item-content", ""]], null, [[null, "contentChanged"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("contentChanged" === en)) {
        var pd_0 = (_co.onMessageChange($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, rich_text_editor_ngfactory["c" /* View_CoreEditorRichTextEditorComponent_0 */], rich_text_editor_ngfactory["b" /* RenderType_CoreEditorRichTextEditorComponent */])), core["_31" /* ɵdid */](39, 1228800, null, 0, rich_text_editor["a" /* CoreEditorRichTextEditorComponent */], [dom["b" /* CoreDomUtilsProvider */], url["b" /* CoreUrlUtilsProvider */], sites["b" /* CoreSitesProvider */], filepool["b" /* CoreFilepoolProvider */], [2, content["a" /* Content */]], core["t" /* ElementRef */], events["b" /* CoreEventsProvider */], utils_utils["b" /* CoreUtilsProvider */], platform["a" /* Platform */], editor_offline["a" /* CoreEditorOfflineProvider */], device["a" /* Device */]], { placeholder: [0, "placeholder"], control: [1, "control"], name: [2, "name"], component: [3, "component"], componentId: [4, "componentId"], autoSave: [5, "autoSave"], contextLevel: [6, "contextLevel"], contextInstanceId: [7, "contextInstanceId"], elementId: [8, "elementId"], draftExtraParams: [9, "draftExtraParams"] }, { contentChanged: "contentChanged" }), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), core["_49" /* ɵpod */](41, { reply: 0 }), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_AddonModForumPostComponent_22)), core["_31" /* ɵdid */](45, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_AddonModForumPostComponent_23)), core["_31" /* ɵdid */](48, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_32" /* ɵeld */](50, 0, null, null, 24, "ion-grid", [["class", "grid"]], null, null, null, null, null)), core["_31" /* ɵdid */](51, 16384, null, 0, grid["a" /* Grid */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_32" /* ɵeld */](53, 0, null, null, 20, "ion-row", [["class", "row"]], null, null, null, null, null)), core["_31" /* ɵdid */](54, 16384, null, 0, row["a" /* Row */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_32" /* ɵeld */](56, 0, null, null, 7, "ion-col", [["class", "col"]], null, null, null, null, null)), core["_31" /* ɵdid */](57, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_32" /* ɵeld */](59, 0, null, null, 3, "button", [["block", ""], ["ion-button", ""]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.reply() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_31" /* ɵdid */](60, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { block: [0, "block"] }, null), (_l()(), core["_56" /* ɵted */](61, 0, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_32" /* ɵeld */](65, 0, null, null, 7, "ion-col", [["class", "col"]], null, null, null, null, null)), core["_31" /* ɵdid */](66, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_32" /* ɵeld */](68, 0, null, null, 3, "button", [["block", ""], ["color", "light"], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.cancel() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_31" /* ɵdid */](69, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { color: [0, "color"], block: [1, "block"] }, null), (_l()(), core["_56" /* ɵted */](70, 0, ["", ""])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_16 = "subject"; var currVal_17 = _co.replyData.subject; _ck(_v, 19, 0, currVal_16, currVal_17); var currVal_18 = "text"; var currVal_19 = core["_57" /* ɵunv */](_v, 22, 1, core["_45" /* ɵnov */](_v, 23).transform("addon.mod_forum.subject")); _ck(_v, 22, 0, currVal_18, currVal_19); var currVal_21 = core["_57" /* ɵunv */](_v, 39, 0, core["_45" /* ɵnov */](_v, 40).transform("addon.mod_forum.replyplaceholder")); var currVal_22 = _co.messageControl; var currVal_23 = ("mod_forum_reply_" + _co.post.id); var currVal_24 = _co.component; var currVal_25 = _co.componentId; var currVal_26 = true; var currVal_27 = "module"; var currVal_28 = (_co.forum && _co.forum.cmid); var currVal_29 = "message"; var currVal_30 = _ck(_v, 41, 0, _co.post.id); _ck(_v, 39, 0, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30); var currVal_31 = _co.accessInfo.canpostprivatereply; _ck(_v, 45, 0, currVal_31); var currVal_32 = (_co.forum.id && (_co.forum.maxattachments > 0)); _ck(_v, 48, 0, currVal_32); var currVal_34 = ""; _ck(_v, 60, 0, currVal_34); var currVal_36 = "light"; var currVal_37 = ""; _ck(_v, 69, 0, currVal_36, currVal_37); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ("addon-forum-reply-edit-form-" + _co.uniqueId); var currVal_1 = core["_45" /* ɵnov */](_v, 4).ngClassUntouched; var currVal_2 = core["_45" /* ɵnov */](_v, 4).ngClassTouched; var currVal_3 = core["_45" /* ɵnov */](_v, 4).ngClassPristine; var currVal_4 = core["_45" /* ɵnov */](_v, 4).ngClassDirty; var currVal_5 = core["_45" /* ɵnov */](_v, 4).ngClassValid; var currVal_6 = core["_45" /* ɵnov */](_v, 4).ngClassInvalid; var currVal_7 = core["_45" /* ɵnov */](_v, 4).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_8 = core["_57" /* ɵunv */](_v, 15, 0, core["_45" /* ɵnov */](_v, 16).transform("addon.mod_forum.subject")); _ck(_v, 15, 0, currVal_8); var currVal_9 = core["_45" /* ɵnov */](_v, 21).ngClassUntouched; var currVal_10 = core["_45" /* ɵnov */](_v, 21).ngClassTouched; var currVal_11 = core["_45" /* ɵnov */](_v, 21).ngClassPristine; var currVal_12 = core["_45" /* ɵnov */](_v, 21).ngClassDirty; var currVal_13 = core["_45" /* ɵnov */](_v, 21).ngClassValid; var currVal_14 = core["_45" /* ɵnov */](_v, 21).ngClassInvalid; var currVal_15 = core["_45" /* ɵnov */](_v, 21).ngClassPending; _ck(_v, 18, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_20 = core["_57" /* ɵunv */](_v, 35, 0, core["_45" /* ɵnov */](_v, 36).transform("addon.mod_forum.message")); _ck(_v, 35, 0, currVal_20); var currVal_33 = ((_co.replyData.subject == "") || (_co.replyData.message == null)); _ck(_v, 59, 0, currVal_33); var currVal_35 = core["_57" /* ɵunv */](_v, 61, 0, core["_45" /* ɵnov */](_v, 62).transform("addon.mod_forum.posttoforum")); _ck(_v, 61, 0, currVal_35); var currVal_38 = core["_57" /* ɵunv */](_v, 70, 0, core["_45" /* ɵnov */](_v, 71).transform("core.cancel")); _ck(_v, 70, 0, currVal_38); }); }
function View_AddonModForumPostComponent_0(_l) { return core["_58" /* ɵvid */](0, [core["_48" /* ɵpid */](0, format_date["a" /* CoreFormatDatePipe */], [logger["b" /* CoreLoggerProvider */], time["b" /* CoreTimeUtilsProvider */]]), core["_53" /* ɵqud */](671088640, 1, { formElement: 0 }), (_l()(), core["_32" /* ɵeld */](2, 0, null, null, 71, "div", [["class", "addon-mod_forum-post"]], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_32" /* ɵeld */](4, 0, null, null, 37, "ion-card-header", [["no-padding", ""], ["text-wrap", ""]], [[8, "id", 0]], null, null, null, null)), core["_31" /* ɵdid */](5, 16384, null, 0, card_header["a" /* CardHeader */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_32" /* ɵeld */](7, 0, null, null, 33, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](8, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 2, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 3, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 4, { _icons: 1 }), core["_31" /* ɵdid */](12, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_27" /* ɵand */](16777216, null, 2, 1, null, View_AddonModForumPostComponent_1)), core["_31" /* ɵdid */](15, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_32" /* ɵeld */](17, 0, null, 2, 22, "div", [["class", "addon-mod-forum-post-info"]], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_AddonModForumPostComponent_6)), core["_31" /* ɵdid */](20, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_32" /* ɵeld */](22, 0, null, null, 13, "div", [["class", "addon-mod-forum-post-author"]], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_AddonModForumPostComponent_7)), core["_31" /* ɵdid */](25, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_AddonModForumPostComponent_8)), core["_31" /* ɵdid */](28, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_AddonModForumPostComponent_10)), core["_31" /* ɵdid */](31, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_AddonModForumPostComponent_11)), core["_31" /* ɵdid */](34, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_AddonModForumPostComponent_12)), core["_31" /* ɵdid */](38, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_56" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_32" /* ɵeld */](43, 0, null, null, 11, "ion-card-content", [], [[1, "padding-top", 0]], null, null, null, null)), core["_31" /* ɵdid */](44, 16384, null, 0, card_content["a" /* CardContent */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_AddonModForumPostComponent_15)), core["_31" /* ɵdid */](47, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_32" /* ɵeld */](49, 16777216, null, null, 1, "core-format-text", [["contextLevel", "module"]], null, null, null, null, null)), core["_31" /* ɵdid */](50, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["t" /* ElementRef */], sites["b" /* CoreSitesProvider */], dom["b" /* CoreDomUtilsProvider */], utils_text["b" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils_utils["b" /* CoreUtilsProvider */], url["b" /* CoreUrlUtilsProvider */], logger["b" /* CoreLoggerProvider */], filepool["b" /* CoreFilepoolProvider */], providers_helper["b" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["b" /* CoreEventsProvider */], filter["a" /* CoreFilterProvider */], filter_providers_helper["a" /* CoreFilterHelperProvider */], delegate["a" /* CoreFilterDelegate */], core["_12" /* ViewContainerRef */], urlschemes["b" /* CoreCustomURLSchemesProvider */]], { text: [0, "text"], component: [1, "component"], componentId: [2, "componentId"], contextLevel: [3, "contextLevel"], contextInstanceId: [4, "contextInstanceId"], courseId: [5, "courseId"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_AddonModForumPostComponent_16)), core["_31" /* ɵdid */](53, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_32" /* ɵeld */](56, 0, null, null, 13, "div", [["class", "addon-mod-forum-post-more-info"]], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_AddonModForumPostComponent_17)), core["_31" /* ɵdid */](59, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_AddonModForumPostComponent_18)), core["_31" /* ɵdid */](62, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_AddonModForumPostComponent_19)), core["_31" /* ɵdid */](65, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_AddonModForumPostComponent_20)), core["_31" /* ɵdid */](68, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_AddonModForumPostComponent_21)), core["_31" /* ɵdid */](72, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.displaySubject; _ck(_v, 15, 0, currVal_1); var currVal_2 = (_co.post.author && _co.post.author.fullname); _ck(_v, 20, 0, currVal_2); var currVal_3 = (_co.post.author && _co.post.author.fullname); _ck(_v, 25, 0, currVal_3); var currVal_4 = (_co.post.author && _co.post.author.groups); _ck(_v, 28, 0, currVal_4); var currVal_5 = _co.post.timecreated; _ck(_v, 31, 0, currVal_5); var currVal_6 = !_co.post.timecreated; _ck(_v, 34, 0, currVal_6); var currVal_7 = !_co.displaySubject; _ck(_v, 38, 0, currVal_7); var currVal_9 = _co.post.isprivatereply; _ck(_v, 47, 0, currVal_9); var currVal_10 = _co.post.message; var currVal_11 = _co.component; var currVal_12 = _co.componentId; var currVal_13 = "module"; var currVal_14 = (_co.forum && _co.forum.cmid); var currVal_15 = _co.courseId; _ck(_v, 50, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_16 = (_co.post.attachments && (_co.post.attachments.length > 0)); _ck(_v, 53, 0, currVal_16); var currVal_17 = ((_co.tagsEnabled && _co.post.tags) && (_co.post.tags.length > 0)); _ck(_v, 59, 0, currVal_17); var currVal_18 = (_co.forum && _co.ratingInfo); _ck(_v, 62, 0, currVal_18); var currVal_19 = (_co.forum && _co.ratingInfo); _ck(_v, 65, 0, currVal_19); var currVal_20 = (((_co.post.id > 0) && _co.post.capabilities.reply) && !_co.post.isprivatereply); _ck(_v, 68, 0, currVal_20); var currVal_21 = ((((_co.post.id > 0) && !_co.replyData.isEditing) && (_co.replyData.replyingTo == _co.post.id)) || (((_co.post.id <= 0) && _co.replyData.isEditing) && (_co.replyData.replyingTo == _co.post.parentid))); _ck(_v, 72, 0, currVal_21); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_35" /* ɵinlineInterpolate */](1, "addon-mod_forum-post-", _co.post.id, ""); _ck(_v, 4, 0, currVal_0); var currVal_8 = ((_co.post.parentid == 0) || null); _ck(_v, 43, 0, currVal_8); }); }
function View_AddonModForumPostComponent_Host_0(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 1, "addon-mod-forum-post", [], null, null, null, View_AddonModForumPostComponent_0, RenderType_AddonModForumPostComponent)), core["_31" /* ɵdid */](1, 770048, null, 0, post["a" /* AddonModForumPostComponent */], [fileuploader["b" /* CoreFileUploaderProvider */], src_providers_sync["a" /* CoreSyncProvider */], dom["b" /* CoreDomUtilsProvider */], utils_text["b" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], forum["a" /* AddonModForumProvider */], helper["a" /* AddonModForumHelperProvider */], providers_offline["a" /* AddonModForumOfflineProvider */], forum_providers_sync["a" /* AddonModForumSyncProvider */], tag["a" /* CoreTagProvider */], [2, content["a" /* Content */]], popover_controller["a" /* PopoverController */], modal_controller["a" /* ModalController */], events["b" /* CoreEventsProvider */], sites["b" /* CoreSitesProvider */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AddonModForumPostComponentNgFactory = core["_28" /* ɵccf */]("addon-mod-forum-post", post["a" /* AddonModForumPostComponent */], View_AddonModForumPostComponent_Host_0, { post: "post", courseId: "courseId", discussionId: "discussionId", discussion: "discussion", component: "component", componentId: "componentId", replyData: "replyData", originalData: "originalData", trackPosts: "trackPosts", forum: "forum", accessInfo: "accessInfo", parentSubject: "parentSubject", ratingInfo: "ratingInfo", leavingPage: "leavingPage" }, { onPostChange: "onPostChange" }, []);

//# sourceMappingURL=post.ngfactory.js.map
// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(379);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.ngfactory.js
var navbar_ngfactory = __webpack_require__(739);

// EXTERNAL MODULE: ./src/directives/back-button.ts
var back_button = __webpack_require__(486);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-item.js
var toolbar_item = __webpack_require__(380);

// EXTERNAL MODULE: ./src/components/navbar-buttons/navbar-buttons.ngfactory.js
var navbar_buttons_ngfactory = __webpack_require__(96);

// EXTERNAL MODULE: ./src/components/navbar-buttons/navbar-buttons.ts
var navbar_buttons = __webpack_require__(88);

// EXTERNAL MODULE: ./src/components/context-menu/context-menu.ngfactory.js
var context_menu_ngfactory = __webpack_require__(93);

// EXTERNAL MODULE: ./src/components/tabs/tab.ts
var tab = __webpack_require__(80);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(185);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(73);

// CONCATENATED MODULE: ./src/addon/mod/forum/pages/discussion/discussion.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 












































































var styles_AddonModForumDiscussionPage = [];
var RenderType_AddonModForumDiscussionPage = core["_30" /* ɵcrt */]({ encapsulation: 2, styles: styles_AddonModForumDiscussionPage, data: {} });

function View_AddonModForumDiscussionPage_1(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_31" /* ɵdid */](1, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_32" /* ɵeld */](2, 16777216, null, 0, 1, "core-format-text", [["contextLevel", "module"]], null, null, null, null, null)), core["_31" /* ɵdid */](3, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["t" /* ElementRef */], sites["b" /* CoreSitesProvider */], dom["b" /* CoreDomUtilsProvider */], utils_text["b" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils_utils["b" /* CoreUtilsProvider */], url["b" /* CoreUrlUtilsProvider */], logger["b" /* CoreLoggerProvider */], filepool["b" /* CoreFilepoolProvider */], providers_helper["b" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["b" /* CoreEventsProvider */], filter["a" /* CoreFilterProvider */], filter_providers_helper["a" /* CoreFilterHelperProvider */], delegate["a" /* CoreFilterDelegate */], core["_12" /* ViewContainerRef */], urlschemes["b" /* CoreCustomURLSchemesProvider */]], { text: [0, "text"], contextLevel: [1, "contextLevel"], contextInstanceId: [2, "contextInstanceId"], courseId: [3, "courseId"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.startingPost.subject; var currVal_1 = "module"; var currVal_2 = _co.cmId; var currVal_3 = _co.courseId; _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3); }, null); }
function View_AddonModForumDiscussionPage_2(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 2, "core-context-menu-item", [], null, [[null, "action"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("action" === en)) {
        var pd_0 = (_co.doRefresh(null, $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, context_menu_item_ngfactory["b" /* View_CoreContextMenuItemComponent_0 */], context_menu_item_ngfactory["a" /* RenderType_CoreContextMenuItemComponent */])), core["_31" /* ɵdid */](1, 770048, null, 0, context_menu_item["a" /* CoreContextMenuItemComponent */], [context_menu["a" /* CoreContextMenuComponent */]], { content: [0, "content"], iconAction: [1, "iconAction"], closeOnClick: [2, "closeOnClick"], priority: [3, "priority"] }, { action: "action" }), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_57" /* ɵunv */](_v, 1, 0, core["_45" /* ɵnov */](_v, 2).transform("addon.mod_forum.refreshposts")); var currVal_1 = _co.refreshIcon; var currVal_2 = false; var currVal_3 = 650; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3); }, null); }
function View_AddonModForumDiscussionPage_3(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 2, "core-context-menu-item", [], null, [[null, "action"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("action" === en)) {
        var pd_0 = (_co.doRefresh(null, $event, true) !== false);
        ad = (pd_0 && ad);
    } return ad; }, context_menu_item_ngfactory["b" /* View_CoreContextMenuItemComponent_0 */], context_menu_item_ngfactory["a" /* RenderType_CoreContextMenuItemComponent */])), core["_31" /* ɵdid */](1, 770048, null, 0, context_menu_item["a" /* CoreContextMenuItemComponent */], [context_menu["a" /* CoreContextMenuComponent */]], { content: [0, "content"], iconAction: [1, "iconAction"], closeOnClick: [2, "closeOnClick"], priority: [3, "priority"] }, { action: "action" }), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_57" /* ɵunv */](_v, 1, 0, core["_45" /* ɵnov */](_v, 2).transform("core.settings.synchronizenow")); var currVal_1 = _co.syncIcon; var currVal_2 = false; var currVal_3 = 550; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3); }, null); }
function View_AddonModForumDiscussionPage_4(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 7, "ion-card", [["class", "core-warning-card"]], null, null, null, null, null)), core["_31" /* ɵdid */](1, 16384, null, 0, card["a" /* Card */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_32" /* ɵeld */](3, 0, null, null, 1, "ion-icon", [["name", "warning"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_31" /* ɵdid */](4, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_56" /* ɵted */](5, null, [" ", "\n        "])), core["_49" /* ɵpod */](6, { $a: 0 }), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_1 = "warning"; _ck(_v, 4, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_45" /* ɵnov */](_v, 4)._hidden; _ck(_v, 3, 0, currVal_0); var currVal_2 = core["_57" /* ɵunv */](_v, 5, 0, core["_45" /* ɵnov */](_v, 7).transform("core.hasdatatosync", _ck(_v, 6, 0, _co.discussionStr))); _ck(_v, 5, 0, currVal_2); }); }
function View_AddonModForumDiscussionPage_5(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 5, "ion-card", [["class", "core-info-card"], ["icon-start", ""]], null, null, null, null, null)), core["_31" /* ɵdid */](1, 16384, null, 0, card["a" /* Card */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_32" /* ɵeld */](3, 0, null, null, 1, "ion-icon", [["name", "information-circle"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_31" /* ɵdid */](4, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_56" /* ɵted */](5, null, [" ", "\n        "]))], function (_ck, _v) { var currVal_1 = "information-circle"; _ck(_v, 4, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_45" /* ɵnov */](_v, 4)._hidden; _ck(_v, 3, 0, currVal_0); var currVal_2 = _co.availabilityMessage; _ck(_v, 5, 0, currVal_2); }); }
function View_AddonModForumDiscussionPage_6(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 6, "ion-card", [["class", "core-info-card"], ["icon-start", ""]], null, null, null, null, null)), core["_31" /* ɵdid */](1, 16384, null, 0, card["a" /* Card */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_32" /* ɵeld */](3, 0, null, null, 1, "core-icon", [["name", "fa-lock"]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_31" /* ɵdid */](4, 704512, null, 0, icon_icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config["a" /* Config */]], { name: [0, "name"] }, null), (_l()(), core["_56" /* ɵted */](5, null, [" ", "\n        "])), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = "fa-lock"; _ck(_v, 4, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = core["_57" /* ɵunv */](_v, 5, 0, core["_45" /* ɵnov */](_v, 6).transform("addon.mod_forum.discussionlocked")); _ck(_v, 5, 0, currVal_1); }); }
function View_AddonModForumDiscussionPage_7(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 4, "div", [["class", "highlight"], ["margin-bottom", ""]], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_32" /* ɵeld */](2, 0, null, null, 1, "addon-mod-forum-post", [], null, [[null, "onPostChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onPostChange" === en)) {
        var pd_0 = (_co.postListChanged() !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_AddonModForumPostComponent_0, RenderType_AddonModForumPostComponent)), core["_31" /* ɵdid */](3, 770048, null, 0, post["a" /* AddonModForumPostComponent */], [fileuploader["b" /* CoreFileUploaderProvider */], src_providers_sync["a" /* CoreSyncProvider */], dom["b" /* CoreDomUtilsProvider */], utils_text["b" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], forum["a" /* AddonModForumProvider */], helper["a" /* AddonModForumHelperProvider */], providers_offline["a" /* AddonModForumOfflineProvider */], forum_providers_sync["a" /* AddonModForumSyncProvider */], tag["a" /* CoreTagProvider */], [2, content["a" /* Content */]], popover_controller["a" /* PopoverController */], modal_controller["a" /* ModalController */], events["b" /* CoreEventsProvider */], sites["b" /* CoreSitesProvider */]], { post: [0, "post"], courseId: [1, "courseId"], discussionId: [2, "discussionId"], discussion: [3, "discussion"], component: [4, "component"], componentId: [5, "componentId"], replyData: [6, "replyData"], originalData: [7, "originalData"], trackPosts: [8, "trackPosts"], forum: [9, "forum"], accessInfo: [10, "accessInfo"], ratingInfo: [11, "ratingInfo"], leavingPage: [12, "leavingPage"] }, { onPostChange: "onPostChange" }), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.startingPost; var currVal_1 = _co.courseId; var currVal_2 = _co.discussionId; var currVal_3 = _co.discussion; var currVal_4 = _co.component; var currVal_5 = _co.cmId; var currVal_6 = _co.replyData; var currVal_7 = _co.originalData; var currVal_8 = _co.trackPosts; var currVal_9 = _co.forum; var currVal_10 = _co.accessInfo; var currVal_11 = _co.ratingInfo; var currVal_12 = _co.leavingPage; _ck(_v, 3, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12]); }, null); }
function View_AddonModForumDiscussionPage_10(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 5, "ion-item-divider", [["class", "item item-divider"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_31" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_53" /* ɵqud */](335544320, 4, { contentLabel: 0 }), core["_53" /* ɵqud */](603979776, 5, { _buttons: 1 }), core["_53" /* ɵqud */](603979776, 6, { _icons: 1 }), core["_31" /* ɵdid */](5, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null)], null, null); }
function View_AddonModForumDiscussionPage_9(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_AddonModForumDiscussionPage_10)), core["_31" /* ɵdid */](3, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_32" /* ɵeld */](5, 0, null, null, 1, "addon-mod-forum-post", [], null, [[null, "onPostChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onPostChange" === en)) {
        var pd_0 = (_co.postListChanged() !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_AddonModForumPostComponent_0, RenderType_AddonModForumPostComponent)), core["_31" /* ɵdid */](6, 770048, null, 0, post["a" /* AddonModForumPostComponent */], [fileuploader["b" /* CoreFileUploaderProvider */], src_providers_sync["a" /* CoreSyncProvider */], dom["b" /* CoreDomUtilsProvider */], utils_text["b" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], forum["a" /* AddonModForumProvider */], helper["a" /* AddonModForumHelperProvider */], providers_offline["a" /* AddonModForumOfflineProvider */], forum_providers_sync["a" /* AddonModForumSyncProvider */], tag["a" /* CoreTagProvider */], [2, content["a" /* Content */]], popover_controller["a" /* PopoverController */], modal_controller["a" /* ModalController */], events["b" /* CoreEventsProvider */], sites["b" /* CoreSitesProvider */]], { post: [0, "post"], courseId: [1, "courseId"], discussionId: [2, "discussionId"], component: [3, "component"], componentId: [4, "componentId"], replyData: [5, "replyData"], originalData: [6, "originalData"], trackPosts: [7, "trackPosts"], forum: [8, "forum"], accessInfo: [9, "accessInfo"], parentSubject: [10, "parentSubject"], ratingInfo: [11, "ratingInfo"], leavingPage: [12, "leavingPage"] }, { onPostChange: "onPostChange" }), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_v.context.first; _ck(_v, 3, 0, currVal_0); var currVal_1 = _v.context.$implicit; var currVal_2 = _co.courseId; var currVal_3 = _co.discussionId; var currVal_4 = _co.component; var currVal_5 = _co.cmId; var currVal_6 = _co.replyData; var currVal_7 = _co.originalData; var currVal_8 = _co.trackPosts; var currVal_9 = _co.forum; var currVal_10 = _co.accessInfo; var currVal_11 = _co.postSubjects[_v.context.$implicit.parentid]; var currVal_12 = _co.ratingInfo; var currVal_13 = _co.leavingPage; _ck(_v, 6, 1, [currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13]); }, null); }
function View_AddonModForumDiscussionPage_8(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 5, "ion-card", [], null, null, null, null, null)), core["_31" /* ɵdid */](1, 16384, null, 0, card["a" /* Card */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_AddonModForumDiscussionPage_9)), core["_31" /* ɵdid */](4, 802816, null, 0, common["j" /* NgForOf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.posts; _ck(_v, 4, 0, currVal_0); }, null); }
function View_AddonModForumDiscussionPage_13(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_AddonModForumDiscussionPage_12(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 2, null, View_AddonModForumDiscussionPage_13)), core["_31" /* ɵdid */](3, 540672, null, 0, common["r" /* NgTemplateOutlet */], [core["_12" /* ViewContainerRef */]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), core["_49" /* ɵpod */](4, { post: 0 }), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var currVal_0 = _ck(_v, 4, 0, _v.context.$implicit); var currVal_1 = core["_45" /* ɵnov */](_v.parent.parent, 104); _ck(_v, 3, 0, currVal_0, currVal_1); }, null); }
function View_AddonModForumDiscussionPage_11(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_AddonModForumDiscussionPage_12)), core["_31" /* ɵdid */](3, 802816, null, 0, common["j" /* NgForOf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.posts; _ck(_v, 3, 0, currVal_0); }, null); }
function View_AddonModForumDiscussionPage_17(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_AddonModForumDiscussionPage_16(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 2, null, View_AddonModForumDiscussionPage_17)), core["_31" /* ɵdid */](3, 540672, null, 0, common["r" /* NgTemplateOutlet */], [core["_12" /* ViewContainerRef */]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), core["_49" /* ɵpod */](4, { post: 0 }), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "]))], function (_ck, _v) { var currVal_0 = _ck(_v, 4, 0, _v.context.$implicit); var currVal_1 = core["_45" /* ɵnov */](_v.parent.parent.parent, 104); _ck(_v, 3, 0, currVal_0, currVal_1); }, null); }
function View_AddonModForumDiscussionPage_15(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 4, "div", [["padding-left", ""]], null, null, null, null, null)), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_AddonModForumDiscussionPage_16)), core["_31" /* ɵdid */](3, 802816, null, 0, common["j" /* NgForOf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var currVal_0 = _v.parent.context.post.children; _ck(_v, 3, 0, currVal_0); }, null); }
function View_AddonModForumDiscussionPage_14(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_32" /* ɵeld */](1, 0, null, null, 5, "ion-card", [], null, null, null, null, null)), core["_31" /* ɵdid */](2, 16384, null, 0, card["a" /* Card */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_32" /* ɵeld */](4, 0, null, null, 1, "addon-mod-forum-post", [], null, [[null, "onPostChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onPostChange" === en)) {
        var pd_0 = (_co.postListChanged() !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_AddonModForumPostComponent_0, RenderType_AddonModForumPostComponent)), core["_31" /* ɵdid */](5, 770048, null, 0, post["a" /* AddonModForumPostComponent */], [fileuploader["b" /* CoreFileUploaderProvider */], src_providers_sync["a" /* CoreSyncProvider */], dom["b" /* CoreDomUtilsProvider */], utils_text["b" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], forum["a" /* AddonModForumProvider */], helper["a" /* AddonModForumHelperProvider */], providers_offline["a" /* AddonModForumOfflineProvider */], forum_providers_sync["a" /* AddonModForumSyncProvider */], tag["a" /* CoreTagProvider */], [2, content["a" /* Content */]], popover_controller["a" /* PopoverController */], modal_controller["a" /* ModalController */], events["b" /* CoreEventsProvider */], sites["b" /* CoreSitesProvider */]], { post: [0, "post"], courseId: [1, "courseId"], discussionId: [2, "discussionId"], component: [3, "component"], componentId: [4, "componentId"], replyData: [5, "replyData"], originalData: [6, "originalData"], trackPosts: [7, "trackPosts"], forum: [8, "forum"], accessInfo: [9, "accessInfo"], parentSubject: [10, "parentSubject"], ratingInfo: [11, "ratingInfo"], leavingPage: [12, "leavingPage"] }, { onPostChange: "onPostChange" }), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_27" /* ɵand */](16777216, null, null, 1, null, View_AddonModForumDiscussionPage_15)), core["_31" /* ɵdid */](9, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.post; var currVal_1 = _co.courseId; var currVal_2 = _co.discussionId; var currVal_3 = _co.component; var currVal_4 = _co.cmId; var currVal_5 = _co.replyData; var currVal_6 = _co.originalData; var currVal_7 = _co.trackPosts; var currVal_8 = _co.forum; var currVal_9 = _co.accessInfo; var currVal_10 = _co.postSubjects[_v.context.post.parentid]; var currVal_11 = _co.ratingInfo; var currVal_12 = _co.leavingPage; _ck(_v, 5, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12]); var currVal_13 = (_v.context.post.children.length && _v.context.post.children[0].subject); _ck(_v, 9, 0, currVal_13); }, null); }
function View_AddonModForumDiscussionPage_0(_l) { return core["_58" /* ɵvid */](0, [core["_53" /* ɵqud */](402653184, 1, { content: 0 }), (_l()(), core["_32" /* ɵeld */](1, 0, null, null, 16, "ion-header", [], null, null, null, null, null)), core["_31" /* ɵdid */](2, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_56" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_32" /* ɵeld */](4, 0, null, null, 12, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_31" /* ɵdid */](5, 49152, null, 0, navbar["a" /* Navbar */], [app_app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */]], null, null), core["_31" /* ɵdid */](6, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], translate_service["a" /* TranslateService */], events["b" /* CoreEventsProvider */]], null, null), (_l()(), core["_56" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_27" /* ɵand */](16777216, null, 3, 1, null, View_AddonModForumDiscussionPage_1)), core["_31" /* ɵdid */](9, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_32" /* ɵeld */](11, 0, null, 2, 4, "ion-buttons", [["end", ""]], null, null, null, null, null)), core["_31" /* ɵdid */](12, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["t" /* ElementRef */], core["W" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_53" /* ɵqud */](603979776, 2, { _buttons: 1 }), (_l()(), core["_56" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_56" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_32" /* ɵeld */](19, 0, null, null, 49, "core-navbar-buttons", [["end", ""]], null, null, null, navbar_buttons_ngfactory["b" /* View_CoreNavBarButtonsComponent_0 */], navbar_buttons_ngfactory["a" /* RenderType_CoreNavBarButtonsComponent */])), core["_31" /* ɵdid */](20, 245760, null, 1, navbar_buttons["a" /* CoreNavBarButtonsComponent */], [core["t" /* ElementRef */], logger["b" /* CoreLoggerProvider */], dom["b" /* CoreDomUtilsProvider */]], null, null), core["_53" /* ɵqud */](603979776, 3, { buttons: 1 }), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_32" /* ɵeld */](23, 0, null, 0, 44, "core-context-menu", [], null, null, null, context_menu_ngfactory["b" /* View_CoreContextMenuComponent_0 */], context_menu_ngfactory["a" /* RenderType_CoreContextMenuComponent */])), core["_31" /* ɵdid */](24, 245760, null, 0, context_menu["a" /* CoreContextMenuComponent */], [translate_service["a" /* TranslateService */], popover_controller["a" /* PopoverController */], core["t" /* ElementRef */], dom["b" /* CoreDomUtilsProvider */], [2, tab["a" /* CoreTabComponent */]], utils_utils["b" /* CoreUtilsProvider */]], null, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_27" /* ɵand */](16777216, null, 0, 1, null, View_AddonModForumDiscussionPage_2)), core["_31" /* ɵdid */](27, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_27" /* ɵand */](16777216, null, 0, 1, null, View_AddonModForumDiscussionPage_3)), core["_31" /* ɵdid */](30, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_32" /* ɵeld */](32, 0, null, 0, 2, "core-context-menu-item", [["iconAction", "arrow-round-down"]], null, [[null, "action"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("action" === en)) {
        var pd_0 = (_co.changeSort("flat-oldest") !== false);
        ad = (pd_0 && ad);
    } return ad; }, context_menu_item_ngfactory["b" /* View_CoreContextMenuItemComponent_0 */], context_menu_item_ngfactory["a" /* RenderType_CoreContextMenuItemComponent */])), core["_31" /* ɵdid */](33, 770048, null, 0, context_menu_item["a" /* CoreContextMenuItemComponent */], [context_menu["a" /* CoreContextMenuComponent */]], { content: [0, "content"], iconAction: [1, "iconAction"], priority: [2, "priority"], hidden: [3, "hidden"] }, { action: "action" }), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_32" /* ɵeld */](36, 0, null, 0, 2, "core-context-menu-item", [["iconAction", "arrow-round-up"]], null, [[null, "action"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("action" === en)) {
        var pd_0 = (_co.changeSort("flat-newest") !== false);
        ad = (pd_0 && ad);
    } return ad; }, context_menu_item_ngfactory["b" /* View_CoreContextMenuItemComponent_0 */], context_menu_item_ngfactory["a" /* RenderType_CoreContextMenuItemComponent */])), core["_31" /* ɵdid */](37, 770048, null, 0, context_menu_item["a" /* CoreContextMenuItemComponent */], [context_menu["a" /* CoreContextMenuComponent */]], { content: [0, "content"], iconAction: [1, "iconAction"], priority: [2, "priority"], hidden: [3, "hidden"] }, { action: "action" }), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_32" /* ɵeld */](40, 0, null, 0, 2, "core-context-menu-item", [["iconAction", "swap"]], null, [[null, "action"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("action" === en)) {
        var pd_0 = (_co.changeSort("nested") !== false);
        ad = (pd_0 && ad);
    } return ad; }, context_menu_item_ngfactory["b" /* View_CoreContextMenuItemComponent_0 */], context_menu_item_ngfactory["a" /* RenderType_CoreContextMenuItemComponent */])), core["_31" /* ɵdid */](41, 770048, null, 0, context_menu_item["a" /* CoreContextMenuItemComponent */], [context_menu["a" /* CoreContextMenuComponent */]], { content: [0, "content"], iconAction: [1, "iconAction"], priority: [2, "priority"], hidden: [3, "hidden"] }, { action: "action" }), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_32" /* ɵeld */](44, 0, null, 0, 2, "core-context-menu-item", [["iconAction", "fa-lock"]], null, [[null, "action"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("action" === en)) {
        var pd_0 = (_co.setLockState(true) !== false);
        ad = (pd_0 && ad);
    } return ad; }, context_menu_item_ngfactory["b" /* View_CoreContextMenuItemComponent_0 */], context_menu_item_ngfactory["a" /* RenderType_CoreContextMenuItemComponent */])), core["_31" /* ɵdid */](45, 770048, null, 0, context_menu_item["a" /* CoreContextMenuItemComponent */], [context_menu["a" /* CoreContextMenuComponent */]], { content: [0, "content"], iconAction: [1, "iconAction"], priority: [2, "priority"], hidden: [3, "hidden"] }, { action: "action" }), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_32" /* ɵeld */](48, 0, null, 0, 2, "core-context-menu-item", [["iconAction", "fa-unlock"]], null, [[null, "action"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("action" === en)) {
        var pd_0 = (_co.setLockState(false) !== false);
        ad = (pd_0 && ad);
    } return ad; }, context_menu_item_ngfactory["b" /* View_CoreContextMenuItemComponent_0 */], context_menu_item_ngfactory["a" /* RenderType_CoreContextMenuItemComponent */])), core["_31" /* ɵdid */](49, 770048, null, 0, context_menu_item["a" /* CoreContextMenuItemComponent */], [context_menu["a" /* CoreContextMenuComponent */]], { content: [0, "content"], iconAction: [1, "iconAction"], priority: [2, "priority"], hidden: [3, "hidden"] }, { action: "action" }), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_32" /* ɵeld */](52, 0, null, 0, 2, "core-context-menu-item", [["iconAction", "fa-map-pin"]], null, [[null, "action"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("action" === en)) {
        var pd_0 = (_co.setPinState(true) !== false);
        ad = (pd_0 && ad);
    } return ad; }, context_menu_item_ngfactory["b" /* View_CoreContextMenuItemComponent_0 */], context_menu_item_ngfactory["a" /* RenderType_CoreContextMenuItemComponent */])), core["_31" /* ɵdid */](53, 770048, null, 0, context_menu_item["a" /* CoreContextMenuItemComponent */], [context_menu["a" /* CoreContextMenuComponent */]], { content: [0, "content"], iconAction: [1, "iconAction"], priority: [2, "priority"], hidden: [3, "hidden"] }, { action: "action" }), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_32" /* ɵeld */](56, 0, null, 0, 2, "core-context-menu-item", [["iconAction", "fa-map-pin"]], null, [[null, "action"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("action" === en)) {
        var pd_0 = (_co.setPinState(false) !== false);
        ad = (pd_0 && ad);
    } return ad; }, context_menu_item_ngfactory["b" /* View_CoreContextMenuItemComponent_0 */], context_menu_item_ngfactory["a" /* RenderType_CoreContextMenuItemComponent */])), core["_31" /* ɵdid */](57, 770048, null, 0, context_menu_item["a" /* CoreContextMenuItemComponent */], [context_menu["a" /* CoreContextMenuComponent */]], { content: [0, "content"], iconAction: [1, "iconAction"], iconSlash: [2, "iconSlash"], priority: [3, "priority"], hidden: [4, "hidden"] }, { action: "action" }), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_32" /* ɵeld */](60, 0, null, 0, 2, "core-context-menu-item", [["iconAction", "fa-star"]], null, [[null, "action"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("action" === en)) {
        var pd_0 = (_co.toggleFavouriteState(true) !== false);
        ad = (pd_0 && ad);
    } return ad; }, context_menu_item_ngfactory["b" /* View_CoreContextMenuItemComponent_0 */], context_menu_item_ngfactory["a" /* RenderType_CoreContextMenuItemComponent */])), core["_31" /* ɵdid */](61, 770048, null, 0, context_menu_item["a" /* CoreContextMenuItemComponent */], [context_menu["a" /* CoreContextMenuComponent */]], { content: [0, "content"], iconAction: [1, "iconAction"], priority: [2, "priority"], hidden: [3, "hidden"] }, { action: "action" }), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_32" /* ɵeld */](64, 0, null, 0, 2, "core-context-menu-item", [["iconAction", "fa-star"]], null, [[null, "action"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("action" === en)) {
        var pd_0 = (_co.toggleFavouriteState(false) !== false);
        ad = (pd_0 && ad);
    } return ad; }, context_menu_item_ngfactory["b" /* View_CoreContextMenuItemComponent_0 */], context_menu_item_ngfactory["a" /* RenderType_CoreContextMenuItemComponent */])), core["_31" /* ɵdid */](65, 770048, null, 0, context_menu_item["a" /* CoreContextMenuItemComponent */], [context_menu["a" /* CoreContextMenuComponent */]], { content: [0, "content"], iconAction: [1, "iconAction"], iconSlash: [2, "iconSlash"], priority: [3, "priority"], hidden: [4, "hidden"] }, { action: "action" }), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n"])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_32" /* ɵeld */](70, 0, null, null, 36, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_31" /* ɵdid */](71, 4374528, [[1, 4]], 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["W" /* Renderer */], app_app["a" /* App */], keyboard["a" /* Keyboard */], core["N" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_56" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_32" /* ɵeld */](73, 0, null, 2, 6, "ion-refresher", [], [[2, "refresher-active", null], [4, "top", null]], [[null, "ionRefresh"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ionRefresh" === en)) {
        var pd_0 = (_co.doRefresh($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), core["_31" /* ɵdid */](74, 212992, null, 0, refresher["a" /* Refresher */], [platform["a" /* Platform */], content["a" /* Content */], core["N" /* NgZone */], gesture_controller["l" /* GestureController */]], { enabled: [0, "enabled"] }, { ionRefresh: "ionRefresh" }), (_l()(), core["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_32" /* ɵeld */](76, 0, null, null, 2, "ion-refresher-content", [], [[1, "state", 0]], null, null, refresher_content_ngfactory["b" /* View_RefresherContent_0 */], refresher_content_ngfactory["a" /* RenderType_RefresherContent */])), core["_31" /* ɵdid */](77, 114688, null, 0, refresher_content["a" /* RefresherContent */], [refresher["a" /* Refresher */], config["a" /* Config */]], { pullingText: [0, "pullingText"] }, null), core["_48" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_56" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_56" /* ɵted */](-1, 1, ["\n\n    "])), (_l()(), core["_32" /* ɵeld */](81, 0, null, 1, 24, "core-loading", [], null, null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_31" /* ɵdid */](82, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["t" /* ElementRef */], events["b" /* CoreEventsProvider */], utils_utils["b" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_27" /* ɵand */](16777216, null, 0, 1, null, View_AddonModForumDiscussionPage_4)), core["_31" /* ɵdid */](86, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n\n        "])), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_27" /* ɵand */](16777216, null, 0, 1, null, View_AddonModForumDiscussionPage_5)), core["_31" /* ɵdid */](90, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n\n        "])), (_l()(), core["_27" /* ɵand */](16777216, null, 0, 1, null, View_AddonModForumDiscussionPage_6)), core["_31" /* ɵdid */](93, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n\n        "])), (_l()(), core["_27" /* ɵand */](16777216, null, 0, 1, null, View_AddonModForumDiscussionPage_7)), core["_31" /* ɵdid */](96, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n\n        "])), (_l()(), core["_27" /* ɵand */](16777216, null, 0, 1, null, View_AddonModForumDiscussionPage_8)), core["_31" /* ɵdid */](99, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n\n        "])), (_l()(), core["_27" /* ɵand */](16777216, null, 0, 1, null, View_AddonModForumDiscussionPage_11)), core["_31" /* ɵdid */](102, 16384, null, 0, common["k" /* NgIf */], [core["_12" /* ViewContainerRef */], core["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n\n        "])), (_l()(), core["_27" /* ɵand */](0, [["nestedPosts", 2]], 0, 0, null, View_AddonModForumDiscussionPage_14)), (_l()(), core["_56" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_56" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_56" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 6, 0); var currVal_2 = _co.startingPost; _ck(_v, 9, 0, currVal_2); _ck(_v, 20, 0); _ck(_v, 24, 0); var currVal_3 = ((_co.discussionLoaded && !_co.postHasOffline) && _co.isOnline); _ck(_v, 27, 0, currVal_3); var currVal_4 = (((_co.discussionLoaded && !_co.isSplitViewOn) && _co.postHasOffline) && _co.isOnline); _ck(_v, 30, 0, currVal_4); var currVal_5 = core["_57" /* ɵunv */](_v, 33, 0, core["_45" /* ɵnov */](_v, 34).transform("addon.mod_forum.modeflatoldestfirst")); var currVal_6 = "arrow-round-down"; var currVal_7 = 500; var currVal_8 = (_co.sort == "flat-oldest"); _ck(_v, 33, 0, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_9 = core["_57" /* ɵunv */](_v, 37, 0, core["_45" /* ɵnov */](_v, 38).transform("addon.mod_forum.modeflatnewestfirst")); var currVal_10 = "arrow-round-up"; var currVal_11 = 450; var currVal_12 = (_co.sort == "flat-newest"); _ck(_v, 37, 0, currVal_9, currVal_10, currVal_11, currVal_12); var currVal_13 = core["_57" /* ɵunv */](_v, 41, 0, core["_45" /* ɵnov */](_v, 42).transform("addon.mod_forum.modenested")); var currVal_14 = "swap"; var currVal_15 = 400; var currVal_16 = (_co.sort == "nested"); _ck(_v, 41, 0, currVal_13, currVal_14, currVal_15, currVal_16); var currVal_17 = core["_57" /* ɵunv */](_v, 45, 0, core["_45" /* ɵnov */](_v, 46).transform("addon.mod_forum.lockdiscussion")); var currVal_18 = "fa-lock"; var currVal_19 = 300; var currVal_20 = ((!_co.discussion || !_co.discussion.canlock) || _co.discussion.locked); _ck(_v, 45, 0, currVal_17, currVal_18, currVal_19, currVal_20); var currVal_21 = core["_57" /* ɵunv */](_v, 49, 0, core["_45" /* ɵnov */](_v, 50).transform("addon.mod_forum.unlockdiscussion")); var currVal_22 = "fa-unlock"; var currVal_23 = 300; var currVal_24 = ((!_co.discussion || !_co.discussion.canlock) || !_co.discussion.locked); _ck(_v, 49, 0, currVal_21, currVal_22, currVal_23, currVal_24); var currVal_25 = core["_57" /* ɵunv */](_v, 53, 0, core["_45" /* ɵnov */](_v, 54).transform("addon.mod_forum.pindiscussion")); var currVal_26 = "fa-map-pin"; var currVal_27 = 250; var currVal_28 = ((!_co.discussion || !_co.canPin) || _co.discussion.pinned); _ck(_v, 53, 0, currVal_25, currVal_26, currVal_27, currVal_28); var currVal_29 = core["_57" /* ɵunv */](_v, 57, 0, core["_45" /* ɵnov */](_v, 58).transform("addon.mod_forum.unpindiscussion")); var currVal_30 = "fa-map-pin"; var currVal_31 = true; var currVal_32 = 250; var currVal_33 = ((!_co.discussion || !_co.canPin) || !_co.discussion.pinned); _ck(_v, 57, 0, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33); var currVal_34 = core["_57" /* ɵunv */](_v, 61, 0, core["_45" /* ɵnov */](_v, 62).transform("addon.mod_forum.addtofavourites")); var currVal_35 = "fa-star"; var currVal_36 = 200; var currVal_37 = ((!_co.discussion || !_co.discussion.canfavourite) || _co.discussion.starred); _ck(_v, 61, 0, currVal_34, currVal_35, currVal_36, currVal_37); var currVal_38 = core["_57" /* ɵunv */](_v, 65, 0, core["_45" /* ɵnov */](_v, 66).transform("addon.mod_forum.removefromfavourites")); var currVal_39 = "fa-star"; var currVal_40 = true; var currVal_41 = 200; var currVal_42 = ((!_co.discussion || !_co.discussion.canfavourite) || !_co.discussion.starred); _ck(_v, 65, 0, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42); var currVal_47 = _co.discussionLoaded; _ck(_v, 74, 0, currVal_47); var currVal_49 = core["_35" /* ɵinlineInterpolate */](1, "", core["_57" /* ɵunv */](_v, 77, 0, core["_45" /* ɵnov */](_v, 78).transform("core.pulltorefresh")), ""); _ck(_v, 77, 0, currVal_49); var currVal_50 = _co.discussionLoaded; _ck(_v, 82, 0, currVal_50); var currVal_51 = (_co.postHasOffline || _co.hasOfflineRatings); _ck(_v, 86, 0, currVal_51); var currVal_52 = _co.availabilityMessage; _ck(_v, 90, 0, currVal_52); var currVal_53 = (_co.discussion && _co.discussion.locked); _ck(_v, 93, 0, currVal_53); var currVal_54 = _co.startingPost; _ck(_v, 96, 0, currVal_54); var currVal_55 = (_co.sort != "nested"); _ck(_v, 99, 0, currVal_55); var currVal_56 = (_co.sort == "nested"); _ck(_v, 102, 0, currVal_56); }, function (_ck, _v) { var currVal_0 = core["_45" /* ɵnov */](_v, 5)._hidden; var currVal_1 = core["_45" /* ɵnov */](_v, 5)._sbPadding; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_43 = core["_45" /* ɵnov */](_v, 71).statusbarPadding; var currVal_44 = core["_45" /* ɵnov */](_v, 71)._hasRefresher; _ck(_v, 70, 0, currVal_43, currVal_44); var currVal_45 = (core["_45" /* ɵnov */](_v, 74).state !== "inactive"); var currVal_46 = core["_45" /* ɵnov */](_v, 74)._top; _ck(_v, 73, 0, currVal_45, currVal_46); var currVal_48 = core["_45" /* ɵnov */](_v, 77).r.state; _ck(_v, 76, 0, currVal_48); }); }
function View_AddonModForumDiscussionPage_Host_0(_l) { return core["_58" /* ɵvid */](0, [(_l()(), core["_32" /* ɵeld */](0, 0, null, null, 1, "page-addon-mod-forum-discussion", [], null, null, null, View_AddonModForumDiscussionPage_0, RenderType_AddonModForumDiscussionPage)), core["_31" /* ɵdid */](1, 180224, null, 0, discussion_AddonModForumDiscussionPage, [nav_params["a" /* NavParams */], _ionic_native_network["a" /* Network */], core["N" /* NgZone */], app["b" /* CoreAppProvider */], events["b" /* CoreEventsProvider */], sites["b" /* CoreSitesProvider */], dom["b" /* CoreDomUtilsProvider */], utils_utils["b" /* CoreUtilsProvider */], translate_service["a" /* TranslateService */], fileuploader["b" /* CoreFileUploaderProvider */], forum["a" /* AddonModForumProvider */], providers_offline["a" /* AddonModForumOfflineProvider */], helper["a" /* AddonModForumHelperProvider */], forum_providers_sync["a" /* AddonModForumSyncProvider */], offline["a" /* CoreRatingOfflineProvider */], user["b" /* CoreUserProvider */], [2, split_view["a" /* CoreSplitViewComponent */]], nav_controller["a" /* NavController */]], null, null)], null, null); }
var AddonModForumDiscussionPageNgFactory = core["_28" /* ɵccf */]("page-addon-mod-forum-discussion", discussion_AddonModForumDiscussionPage, View_AddonModForumDiscussionPage_Host_0, {}, {}, []);

//# sourceMappingURL=discussion.ngfactory.js.map
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

// EXTERNAL MODULE: ./src/core/block/components/components.module.ts
var block_components_components_module = __webpack_require__(278);

// EXTERNAL MODULE: ./src/core/course/components/components.module.ts
var course_components_components_module = __webpack_require__(74);

// EXTERNAL MODULE: ./src/core/rating/components/components.module.ts
var rating_components_components_module = __webpack_require__(749);

// EXTERNAL MODULE: ./src/core/tag/components/components.module.ts
var tag_components_components_module = __webpack_require__(282);

// EXTERNAL MODULE: ./src/core/editor/components/components.module.ts
var editor_components_components_module = __webpack_require__(202);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(277);

// CONCATENATED MODULE: ./src/addon/mod/forum/pages/discussion/discussion.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModForumDiscussionPageModuleNgFactory", function() { return AddonModForumDiscussionPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 















































var AddonModForumDiscussionPageModuleNgFactory = core["_29" /* ɵcmf */](discussion_module_AddonModForumDiscussionPageModule, [], function (_l) { return core["_41" /* ɵmod */]([core["_42" /* ɵmpd */](512, core["o" /* ComponentFactoryResolver */], core["_22" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], bs_tooltip_ngfactory["a" /* CoreBSTooltipComponentNgFactory */], only_title_block_ngfactory["a" /* CoreBlockOnlyTitleComponentNgFactory */], pre_rendered_block_ngfactory["a" /* CoreBlockPreRenderedComponentNgFactory */], course_blocks_ngfactory["a" /* CoreBlockCourseBlocksComponentNgFactory */], unsupported_module_ngfactory["a" /* CoreCourseUnsupportedModuleComponentNgFactory */], tag_area_ngfactory["a" /* CoreCourseTagAreaComponentNgFactory */], feed_ngfactory["a" /* CoreTagFeedComponentNgFactory */], rich_text_editor_ngfactory["a" /* CoreEditorRichTextEditorComponentNgFactory */], index_ngfactory["a" /* AddonModForumIndexComponentNgFactory */], discussion_options_menu_ngfactory["a" /* AddonForumDiscussionOptionsMenuComponentNgFactory */], post_options_menu_ngfactory["a" /* AddonForumPostOptionsMenuComponentNgFactory */], AddonModForumDiscussionPageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["L" /* NgModuleRef */]]), core["_42" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ɵa */]]]), core["_42" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_42" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_42" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_42" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_42" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_42" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_42" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_42" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_42" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_42" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_42" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_42" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_42" /* ɵmpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_42" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_42" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_42" /* ɵmpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_42" /* ɵmpd */](512, block_components_components_module["a" /* CoreBlockComponentsModule */], block_components_components_module["a" /* CoreBlockComponentsModule */], []), core["_42" /* ɵmpd */](512, course_components_components_module["a" /* CoreCourseComponentsModule */], course_components_components_module["a" /* CoreCourseComponentsModule */], []), core["_42" /* ɵmpd */](512, rating_components_components_module["a" /* CoreRatingComponentsModule */], rating_components_components_module["a" /* CoreRatingComponentsModule */], []), core["_42" /* ɵmpd */](512, tag_components_components_module["a" /* CoreTagComponentsModule */], tag_components_components_module["a" /* CoreTagComponentsModule */], []), core["_42" /* ɵmpd */](512, editor_components_components_module["a" /* CoreEditorComponentsModule */], editor_components_components_module["a" /* CoreEditorComponentsModule */], []), core["_42" /* ɵmpd */](512, components_components_module["a" /* AddonModForumComponentsModule */], components_components_module["a" /* AddonModForumComponentsModule */], []), core["_42" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_42" /* ɵmpd */](512, discussion_module_AddonModForumDiscussionPageModule, discussion_module_AddonModForumDiscussionPageModule, []), core["_42" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_42" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_42" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], discussion_AddonModForumDiscussionPage, [])]); });

//# sourceMappingURL=discussion.module.ngfactory.js.map

/***/ }),

/***/ 2166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_CoreRatingRateComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_CoreRatingRateComponent_0;
/* unused harmony export View_CoreRatingRateComponent_Host_0 */
/* unused harmony export CoreRatingRateComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_option_option__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_ionic_angular_components_item_item_ngfactory__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_item_item__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_util_form__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_config_config__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_item_item_reorder__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_item_item_content__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_label_label__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core_src_translate_pipe__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core_src_translate_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__node_modules_ionic_angular_components_select_select_ngfactory__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular_components_select_select__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_angular_components_app_app__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic_angular_navigation_deep_linker__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__rate__ = __webpack_require__(1576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_utils_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_events__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_rating__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_offline__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_sites__ = __webpack_require__(1);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 























var styles_CoreRatingRateComponent = [];
var RenderType_CoreRatingRateComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreRatingRateComponent, data: {} });

function View_CoreRatingRateComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_58" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵeld */](0, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵdid */](1, 16384, [[4, 4]], 0, __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_option_option__["a" /* Option */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_56" /* ɵted */](2, null, ["", ""]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.value; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.name; _ck(_v, 2, 0, currVal_1); }); }
function View_CoreRatingRateComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_58" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵeld */](0, 0, null, null, 23, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, __WEBPACK_IMPORTED_MODULE_2__node_modules_ionic_angular_components_item_item_ngfactory__["b" /* View_Item_0 */], __WEBPACK_IMPORTED_MODULE_2__node_modules_ionic_angular_components_item_item_ngfactory__["a" /* RenderType_Item */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵdid */](1, 1097728, null, 3, __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_item_item__["a" /* Item */], [__WEBPACK_IMPORTED_MODULE_4_ionic_angular_util_form__["a" /* Form */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_item_item_reorder__["a" /* ItemReorder */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_53" /* ɵqud */](335544320, 1, { contentLabel: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_53" /* ɵqud */](603979776, 2, { _buttons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_53" /* ɵqud */](603979776, 3, { _icons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵdid */](5, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_item_item_content__["a" /* ItemContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_56" /* ɵted */](-1, 2, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵeld */](7, 0, null, 1, 3, "ion-label", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵdid */](8, 16384, [[1, 4]], 0, __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_label_label__["a" /* Label */], [__WEBPACK_IMPORTED_MODULE_5_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_56" /* ɵted */](9, null, ["", ""])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_48" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core_src_translate_pipe__["a" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_10__ngx_translate_core_src_translate_service__["a" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]]), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_56" /* ɵted */](-1, 2, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵeld */](12, 0, null, 3, 10, "ion-select", [["interface", "action-sheet"], ["text-start", ""]], [[2, "select-disabled", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "click"], [null, "keyup.space"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵnov */](_v, 13)._click($event) !== false);
        ad = (pd_0 && ad);
    } if (("keyup.space" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵnov */](_v, 13)._keyup() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.rating = $event) !== false);
        ad = (pd_2 && ad);
    } if (("ngModelChange" === en)) {
        var pd_3 = (_co.userRatingChanged() !== false);
        ad = (pd_3 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_11__node_modules_ionic_angular_components_select_select_ngfactory__["b" /* View_Select_0 */], __WEBPACK_IMPORTED_MODULE_11__node_modules_ionic_angular_components_select_select_ngfactory__["a" /* RenderType_Select */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵdid */](13, 1228800, null, 1, __WEBPACK_IMPORTED_MODULE_12_ionic_angular_components_select_select__["a" /* Select */], [__WEBPACK_IMPORTED_MODULE_13_ionic_angular_components_app_app__["a" /* App */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_util_form__["a" /* Form */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_item_item__["a" /* Item */]], __WEBPACK_IMPORTED_MODULE_14_ionic_angular_navigation_deep_linker__["a" /* DeepLinker */]], { disabled: [0, "disabled"], interface: [1, "interface"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_53" /* ɵqud */](603979776, 4, { options: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_51" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_15__angular_forms__["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_12_ionic_angular_components_select_select__["a" /* Select */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵdid */](16, 671744, null, 0, __WEBPACK_IMPORTED_MODULE_15__angular_forms__["q" /* NgModel */], [[8, null], [8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_15__angular_forms__["l" /* NG_VALUE_ACCESSOR */]]], { isDisabled: [0, "isDisabled"], model: [1, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_51" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_15__angular_forms__["m" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_15__angular_forms__["q" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵdid */](18, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_15__angular_forms__["n" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_15__angular_forms__["m" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_56" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵand */](16777216, null, null, 1, null, View_CoreRatingRateComponent_2)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵdid */](21, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_16__angular_common__["j" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_56" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_56" /* ɵted */](-1, 2, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_9 = !_co.item.canrate; var currVal_10 = "action-sheet"; _ck(_v, 13, 0, currVal_9, currVal_10); var currVal_11 = !_co.item.canrate; var currVal_12 = _co.rating; _ck(_v, 16, 0, currVal_11, currVal_12); var currVal_13 = _co.scale.items; _ck(_v, 21, 0, currVal_13); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_57" /* ɵunv */](_v, 9, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵnov */](_v, 10).transform("core.rating.rating")); _ck(_v, 9, 0, currVal_0); var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵnov */](_v, 13)._disabled; var currVal_2 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵnov */](_v, 18).ngClassUntouched; var currVal_3 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵnov */](_v, 18).ngClassTouched; var currVal_4 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵnov */](_v, 18).ngClassPristine; var currVal_5 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵnov */](_v, 18).ngClassDirty; var currVal_6 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵnov */](_v, 18).ngClassValid; var currVal_7 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵnov */](_v, 18).ngClassInvalid; var currVal_8 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵnov */](_v, 18).ngClassPending; _ck(_v, 12, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); }); }
function View_CoreRatingRateComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_58" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵand */](16777216, null, null, 1, null, View_CoreRatingRateComponent_1)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵdid */](1, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_16__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_56" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.item && (_co.item.canrate || (_co.item.rating != null))) && !_co.disabled); _ck(_v, 1, 0, currVal_0); }, null); }
function View_CoreRatingRateComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_58" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵeld */](0, 0, null, null, 1, "core-rating-rate", [], null, null, null, View_CoreRatingRateComponent_0, RenderType_CoreRatingRateComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵdid */](1, 704512, null, 0, __WEBPACK_IMPORTED_MODULE_17__rate__["a" /* CoreRatingRateComponent */], [__WEBPACK_IMPORTED_MODULE_18__providers_utils_dom__["b" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core_src_translate_service__["a" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_19__providers_events__["b" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_20__providers_rating__["a" /* CoreRatingProvider */], __WEBPACK_IMPORTED_MODULE_21__providers_offline__["a" /* CoreRatingOfflineProvider */], __WEBPACK_IMPORTED_MODULE_22__providers_sites__["b" /* CoreSitesProvider */]], null, null)], null, null); }
var CoreRatingRateComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* ɵccf */]("core-rating-rate", __WEBPACK_IMPORTED_MODULE_17__rate__["a" /* CoreRatingRateComponent */], View_CoreRatingRateComponent_Host_0, { ratingInfo: "ratingInfo", contextLevel: "contextLevel", instanceId: "instanceId", itemId: "itemId", itemSetId: "itemSetId", courseId: "courseId", aggregateMethod: "aggregateMethod", scaleId: "scaleId", userId: "userId" }, { onLoading: "onLoading", onUpdate: "onUpdate" }, []);

//# sourceMappingURL=rate.ngfactory.js.map

/***/ }),

/***/ 2167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_CoreRatingAggregateComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_CoreRatingAggregateComponent_0;
/* unused harmony export View_CoreRatingAggregateComponent_Host_0 */
/* unused harmony export CoreRatingAggregateComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_ionic_angular_components_item_item_ngfactory__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_item_item__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_form__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_item_item_reorder__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_item_item_content__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core_src_translate_pipe__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core_src_translate_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__aggregate__ = __webpack_require__(1575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_events__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular_components_modal_modal_controller__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_rating__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_sites__ = __webpack_require__(1);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 















var styles_CoreRatingAggregateComponent = [];
var RenderType_CoreRatingAggregateComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreRatingAggregateComponent, data: {} });

function View_CoreRatingAggregateComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_58" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵeld */](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_56" /* ɵted */](1, null, ["(", ")"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.item.count; _ck(_v, 1, 0, currVal_0); }); }
function View_CoreRatingAggregateComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_58" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵeld */](0, 0, null, null, 11, "a", [["class", "item item-block"], ["ion-item", ""], ["text-wrap", ""]], [[1, "detail-none", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openRatings() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_1__node_modules_ionic_angular_components_item_item_ngfactory__["b" /* View_Item_0 */], __WEBPACK_IMPORTED_MODULE_1__node_modules_ionic_angular_components_item_item_ngfactory__["a" /* RenderType_Item */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵdid */](1, 1097728, null, 3, __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_item_item__["a" /* Item */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_form__["a" /* Form */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_item_item_reorder__["a" /* ItemReorder */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_53" /* ɵqud */](335544320, 1, { contentLabel: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_53" /* ɵqud */](603979776, 2, { _buttons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_53" /* ɵqud */](603979776, 3, { _icons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵdid */](5, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_item_item_content__["a" /* ItemContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_56" /* ɵted */](6, 2, ["\n    ", "", " ", "\n    "])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_48" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core_src_translate_pipe__["a" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_8__ngx_translate_core_src_translate_service__["a" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_48" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core_src_translate_pipe__["a" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_8__ngx_translate_core_src_translate_service__["a" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]]), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵand */](16777216, null, 2, 1, null, View_CoreRatingAggregateComponent_2)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵdid */](10, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_56" /* ɵted */](-1, 2, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_4 = (_co.showCount && (_co.item.count > 0)); _ck(_v, 10, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.ratingInfo.canviewall && _co.item.count) ? null : true); _ck(_v, 0, 0, currVal_0); var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_57" /* ɵunv */](_v, 6, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵnov */](_v, 7).transform(_co.labelKey)); var currVal_2 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_57" /* ɵunv */](_v, 6, 1, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵnov */](_v, 8).transform("core.labelsep")); var currVal_3 = (_co.item.aggregatestr || "-"); _ck(_v, 6, 0, currVal_1, currVal_2, currVal_3); }); }
function View_CoreRatingAggregateComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_58" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵand */](16777216, null, null, 1, null, View_CoreRatingAggregateComponent_1)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵdid */](1, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_9__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_56" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (((_co.item && _co.item.canviewaggregate) && _co.labelKey) && !_co.disabled); _ck(_v, 1, 0, currVal_0); }, null); }
function View_CoreRatingAggregateComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_58" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵeld */](0, 0, null, null, 1, "core-rating-aggregate", [], null, null, null, View_CoreRatingAggregateComponent_0, RenderType_CoreRatingAggregateComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵdid */](1, 704512, null, 0, __WEBPACK_IMPORTED_MODULE_10__aggregate__["a" /* CoreRatingAggregateComponent */], [__WEBPACK_IMPORTED_MODULE_11__providers_events__["b" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_12_ionic_angular_components_modal_modal_controller__["a" /* ModalController */], __WEBPACK_IMPORTED_MODULE_13__providers_rating__["a" /* CoreRatingProvider */], __WEBPACK_IMPORTED_MODULE_14__providers_sites__["b" /* CoreSitesProvider */]], null, null)], null, null); }
var CoreRatingAggregateComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* ɵccf */]("core-rating-aggregate", __WEBPACK_IMPORTED_MODULE_10__aggregate__["a" /* CoreRatingAggregateComponent */], View_CoreRatingAggregateComponent_Host_0, { ratingInfo: "ratingInfo", contextLevel: "contextLevel", instanceId: "instanceId", itemId: "itemId", aggregateMethod: "aggregateMethod", scaleId: "scaleId", courseId: "courseId" }, {}, []);

//# sourceMappingURL=aggregate.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=13.js.map