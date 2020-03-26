function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ngfactory.js":
  /*!********************************************!*\
    !*** ./src/app/app.component.ngfactory.js ***!
    \********************************************/

  /*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */

  /***/
  function srcAppAppComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function () {
      return RenderType_AppComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function () {
      return View_AppComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function () {
      return View_AppComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function () {
      return AppComponentNgFactory;
    });
    /* harmony import */


    var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app.component.scss.shim.ngstyle */
    "./src/app/app.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _components_sidebar_sidebar_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/sidebar/sidebar.component.ngfactory */
    "./src/app/components/sidebar/sidebar.component.ngfactory.js");
    /* harmony import */


    var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/sidebar/sidebar.component */
    "./src/app/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _services_rss_feeds_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/rss-feeds.service */
    "./src/app/services/rss-feeds.service.ts");
    /* harmony import */


    var _components_main_main_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/main/main.component.ngfactory */
    "./src/app/components/main/main.component.ngfactory.js");
    /* harmony import */


    var _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/main/main.component */
    "./src/app/components/main/main.component.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_AppComponent,
      data: {}
    });

    function View_AppComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ap-sidebar", [], null, null, null, _components_sidebar_sidebar_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_SidebarComponent_0"], _components_sidebar_sidebar_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_SidebarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], [_services_rss_feeds_service__WEBPACK_IMPORTED_MODULE_4__["RssFeedsService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "ap-main", [], null, null, null, _components_main_main_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MainComponent_0"], _components_main_main_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MainComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 245760, null, 0, _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"], [_services_rss_feeds_service__WEBPACK_IMPORTED_MODULE_4__["RssFeedsService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);

        _ck(_v, 3, 0);
      }, null);
    }

    function View_AppComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ap-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], [], null, null)], null, null);
    }

    var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ap-root", _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/app.component.scss.shim.ngstyle.js":
  /*!****************************************************!*\
    !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
    \****************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppAppComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  height: 100%;\n}\n[_nghost-%COMP%]   ap-main[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxzYXBpclxcT25lRHJpdmVcXERlc2t0b3BcXG5nVGVzdFxcbmdUZXN0XFxuZ1Rlc3Qvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNDRjtBRENFO0VBQ0UsT0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICBhcC1tYWluIHsgXHJcbiAgICBmbGV4OiAxO1xyXG4gICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCBhcC1tYWluIHtcbiAgZmxleDogMTtcbn0iXX0= */"];
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'appdomeTest';
    };
    /***/

  },

  /***/
  "./src/app/app.module.ngfactory.js":
  /*!*****************************************!*\
    !*** ./src/app/app.module.ngfactory.js ***!
    \*****************************************/

  /*! exports provided: AppModuleNgFactory */

  /***/
  function srcAppAppModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function () {
      return AppModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../node_modules/@angular/material/tooltip/typings/index.ngfactory */
    "./node_modules/@angular/material/tooltip/typings/index.ngfactory.js");
    /* harmony import */


    var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component.ngfactory */
    "./src/app/app.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/animations/browser */
    "./node_modules/@angular/animations/fesm2015/browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/esm2015/observers.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/esm2015/text-field.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["TooltipComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_ba"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HAMMER_GESTURE_CONFIG"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["GestureConfig"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_HAMMER_OPTIONS"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) {
        return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_11__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HTTP_INTERCEPTORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0) {
        return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0)];
      }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_18__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_18__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MATERIAL_SANITY_CHECKS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_23__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_23__["A11yModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_24__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_24__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", [])]);
    });
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };
    /***/

  },

  /***/
  "./src/app/components/main/main.component.ngfactory.js":
  /*!*************************************************************!*\
    !*** ./src/app/components/main/main.component.ngfactory.js ***!
    \*************************************************************/

  /*! exports provided: RenderType_MainComponent, View_MainComponent_0, View_MainComponent_Host_0, MainComponentNgFactory */

  /***/
  function srcAppComponentsMainMainComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_MainComponent", function () {
      return RenderType_MainComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MainComponent_0", function () {
      return View_MainComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MainComponent_Host_0", function () {
      return View_MainComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponentNgFactory", function () {
      return MainComponentNgFactory;
    });
    /* harmony import */


    var _main_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./main.component.scss.shim.ngstyle */
    "./src/app/components/main/main.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_angular_material_progress_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/progress-bar/typings/index.ngfactory */
    "./node_modules/@angular/material/progress-bar/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/card/typings/index.ngfactory */
    "./node_modules/@angular/material/card/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/form-field/typings/index.ngfactory */
    "./node_modules/@angular/material/form-field/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/esm2015/text-field.js");
    /* harmony import */


    var _main_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./main.component */
    "./src/app/components/main/main.component.ts");
    /* harmony import */


    var _services_rss_feeds_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../services/rss-feeds.service */
    "./src/app/services/rss-feeds.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_MainComponent = [_main_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_MainComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_MainComponent,
      data: {}
    });

    function View_MainComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "mat-progress-bar", [["aria-valuemax", "100"], ["aria-valuemin", "0"], ["class", "mat-progress-bar"], ["mode", "indeterminate"], ["role", "progressbar"]], [[1, "aria-valuenow", 0], [1, "mode", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_progress_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatProgressBar_0"], _node_modules_angular_material_progress_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatProgressBar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4374528, null, 0, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]], [2, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MAT_PROGRESS_BAR_LOCATION"]]], {
        color: [0, "color"],
        mode: [1, "mode"]
      }, null)], function (_ck, _v) {
        var currVal_3 = "primary";
        var currVal_4 = "indeterminate";

        _ck(_v, 1, 0, currVal_3, currVal_4);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mode === "indeterminate" || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mode === "query" ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).value;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mode;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._isNoopAnimation;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);
      });
    }

    function View_MainComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", " Items"]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.filteredItems == null ? null : _co.filteredItems.length;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_MainComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "img", [["class", "mat-card-md-image"], ["mat-card-md-image", ""]], [[8, "src", 4]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardMdImage"], [], null, null)], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.parent.context.$implicit.thumbnail, "");

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_MainComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, "mat-card", [["class", "result mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_MainComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 9, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "mat-card-title", [["class", "mat-card-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 3, "mat-card-subtitle", [["class", "mat-card-subtitle"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](11, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "mat-card-content", [["class", "mat-card-content"]], [[8, "innerHTML", 1]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], [], null, null)], function (_ck, _v) {
        var currVal_1 = _v.context.$implicit.thumbnail;

        _ck(_v, 3, 0, currVal_1);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations";

        _ck(_v, 0, 0, currVal_0);

        var currVal_2 = _v.context.$implicit.title;

        _ck(_v, 7, 0, currVal_2);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 10, 0, _ck(_v, 11, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.pubDate, "dd/MM/yyyy HH:mm"));

        _ck(_v, 10, 0, currVal_3);

        var currVal_4 = _v.context.$implicit.content;

        _ck(_v, 12, 0, currVal_4);
      });
    }

    function View_MainComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MainComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 20, "mat-form-field", [["class", "search-bar mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatFormField_0"], _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        _controlNonStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, {
        _controlStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
        _labelChildNonStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 4, {
        _labelChildStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
        _placeholderChild: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
        _errorChildren: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
        _hintChildren: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
        _prefixChildren: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
        _suffixChildren: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 1, 7, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["placeholder", "Search..."]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "ngModelChange"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("blur" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._focusChanged(false) !== false;
          ad = pd_4 && ad;
        }

        if ("focus" === en) {
          var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._focusChanged(true) !== false;
          ad = pd_5 && ad;
        }

        if ("input" === en) {
          var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._onInput() !== false;
          ad = pd_6 && ad;
        }

        if ("input" === en) {
          var pd_7 = _co.search() !== false;
          ad = pd_7 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_8 = (_co.searchTerm = $event) !== false;
          ad = pd_8 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_15__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        placeholder: [0, "placeholder"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[1, 4], [2, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_MainComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 2, "div", [["class", "results"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MainComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.isLoading;

        _ck(_v, 2, 0, currVal_0);

        var currVal_39 = _co.searchTerm;

        _ck(_v, 17, 0, currVal_39);

        var currVal_40 = "Search...";

        _ck(_v, 19, 0, currVal_40);

        var currVal_41 = (_co.filteredItems == null ? null : _co.filteredItems.length) > 0;

        _ck(_v, 23, 0, currVal_41);

        var currVal_42 = _co.filteredItems;

        _ck(_v, 26, 0, currVal_42);
      }, function (_ck, _v) {
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).appearance == "standard";
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).appearance == "fill";
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).appearance == "outline";
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).appearance == "legacy";

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._control.errorState;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._canLabelFloat;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._shouldLabelFloat();

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._hasFloatingLabel();

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._hideControlPlaceholder();

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._control.disabled;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._control.autofilled;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._control.focused;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).color == "accent";
        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).color == "warn";

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._shouldForward("untouched");

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._shouldForward("touched");

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._shouldForward("pristine");

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._shouldForward("dirty");

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._shouldForward("valid");

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._shouldForward("invalid");

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._shouldForward("pending");

        var currVal_22 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._animationsEnabled;

        _ck(_v, 3, 1, [currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22]);

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._isServer;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).id;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).placeholder;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).disabled;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).required;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._isNativeSelect || null;
        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._ariaDescribedby || null;

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).errorState;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).required.toString();

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassUntouched;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassTouched;

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassPristine;

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassDirty;

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassValid;

        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassInvalid;

        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassPending;

        _ck(_v, 14, 1, [currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38]);
      });
    }

    function View_MainComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ap-main", [], null, null, null, View_MainComponent_0, RenderType_MainComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _main_component__WEBPACK_IMPORTED_MODULE_16__["MainComponent"], [_services_rss_feeds_service__WEBPACK_IMPORTED_MODULE_17__["RssFeedsService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var MainComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ap-main", _main_component__WEBPACK_IMPORTED_MODULE_16__["MainComponent"], View_MainComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/components/main/main.component.scss.shim.ngstyle.js":
  /*!*********************************************************************!*\
    !*** ./src/app/components/main/main.component.scss.shim.ngstyle.js ***!
    \*********************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppComponentsMainMainComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["[_nghost-%COMP%] {\n  padding: 10px 40px 0;\n  overflow-y: hidden;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .search-bar[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .results[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  overflow-y: auto;\n  padding-bottom: 10px;\n}\n[_nghost-%COMP%]   .results[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 25px;\n}\n[_nghost-%COMP%]   .results[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL0M6XFxVc2Vyc1xcc2FwaXJcXE9uZURyaXZlXFxEZXNrdG9wXFxuZ1Rlc3RcXG5nVGVzdFxcbmdUZXN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxtYWluXFxtYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtBQ0NKO0FERUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0FKO0FERUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNBTjtBREVNO0VBQ0Usa0JBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHBhZGRpbmc6IDEwcHggNDBweCAwO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIC5zZWFyY2gtYmFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnJlc3VsdHMge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG5cclxuICAgIC5yZXN1bHQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBwYWRkaW5nOiAxMHB4IDQwcHggMDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuOmhvc3QgLnNlYXJjaC1iYXIge1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IC5yZXN1bHRzIHtcbiAgZmxleC1ncm93OiAxO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbjpob3N0IC5yZXN1bHRzIC5yZXN1bHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuOmhvc3QgLnJlc3VsdHMgLnJlc3VsdCBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59Il19 */"];
    /***/
  },

  /***/
  "./src/app/components/main/main.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/main/main.component.ts ***!
    \***************************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppComponentsMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var MainComponent =
    /*#__PURE__*/
    function () {
      function MainComponent(rssFeedsService) {
        var _this = this;

        _classCallCheck(this, MainComponent);

        this.rssFeedsService = rssFeedsService;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.handleData();
        rssFeedsService.isLoading$.subscribe(function (isLoading) {
          return _this.isLoading = isLoading;
        });
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "handleData",
        value: function handleData() {
          var _this2 = this;

          // Subscribe to feed content
          this.rssFeedsService.contentList$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe)).subscribe(function (list) {
            _this2.searchTerm = null;

            if (list && list.length > 0) {
              var _ref;

              var mapped = (_ref = []).concat.apply(_ref, _toConsumableArray(list.map(function (i) {
                return i.items;
              })));

              if (mapped.length > 0) {
                // Sort by date descending
                _this2.items = mapped.sort(function (a, b) {
                  return new Date(b.pubDate) - new Date(a.pubDate);
                });
                _this2.filteredItems = _this2.items;
              }
            } else {
              _this2.items = [];
              _this2.filteredItems = [];
            }
          });
        }
      }, {
        key: "search",
        value: function search() {
          var _this3 = this;

          if (this.searchTerm.length > 1) {
            this.filteredItems = this.items.filter(function (i) {
              return i.content.indexOf(_this3.searchTerm) > -1 || i.title.indexOf(_this3.searchTerm) > -1;
            });
          } else {
            this.filteredItems = this.items;
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe.next();
          this.unsubscribe.complete();
        }
      }]);

      return MainComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/sidebar/sidebar.component.ngfactory.js":
  /*!*******************************************************************!*\
    !*** ./src/app/components/sidebar/sidebar.component.ngfactory.js ***!
    \*******************************************************************/

  /*! exports provided: RenderType_SidebarComponent, View_SidebarComponent_0, View_SidebarComponent_Host_0, SidebarComponentNgFactory */

  /***/
  function srcAppComponentsSidebarSidebarComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_SidebarComponent", function () {
      return RenderType_SidebarComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_SidebarComponent_0", function () {
      return View_SidebarComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_SidebarComponent_Host_0", function () {
      return View_SidebarComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponentNgFactory", function () {
      return SidebarComponentNgFactory;
    });
    /* harmony import */


    var _sidebar_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./sidebar.component.scss.shim.ngstyle */
    "./src/app/components/sidebar/sidebar.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/card/typings/index.ngfactory */
    "./node_modules/@angular/material/card/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/form-field/typings/index.ngfactory */
    "./node_modules/@angular/material/form-field/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/esm2015/text-field.js");
    /* harmony import */


    var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */
    "./node_modules/@angular/material/button/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _sidebar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./sidebar.component */
    "./src/app/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _services_rss_feeds_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ../../services/rss-feeds.service */
    "./src/app/services/rss-feeds.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_SidebarComponent = [_sidebar_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_SidebarComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_SidebarComponent,
      data: {}
    });

    function View_SidebarComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 9, "mat-card", [["class", "feed mat-card"]], [[2, "_mat-animation-noopable", null]], [[null, "click"], [null, "longpress"], [null, "keydown"], [null, "touchend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("longpress" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).show() !== false;
          ad = pd_0 && ad;
        }

        if ("keydown" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._handleKeydown($event) !== false;
          ad = pd_1 && ad;
        }

        if ("touchend" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._handleTouchend() !== false;
          ad = pd_2 && ad;
        }

        if ("click" === en) {
          var pd_3 = _co.toggleSelect(_v.context.$implicit) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassImpl"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, {
        "selected": 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 212992, null, 0, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["AriaDescriber"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MAT_TOOLTIP_SCROLL_STRATEGY"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"]], [2, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MAT_TOOLTIP_DEFAULT_OPTIONS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["HAMMER_LOADER"]]], {
        message: [0, "message"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 1, "span", [["class", "name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 1, "a", [], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.delete(_v.context.$implicit.url) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "i", [["class", "fa fa-trash-alt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
        var currVal_1 = "feed";

        var currVal_2 = _ck(_v, 3, 0, _v.context.$implicit.selected);

        _ck(_v, 2, 0, currVal_1, currVal_2);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.name, "");

        _ck(_v, 5, 0, currVal_3);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._animationMode === "NoopAnimations";

        _ck(_v, 0, 0, currVal_0);

        var currVal_4 = _v.context.$implicit.name;

        _ck(_v, 7, 0, currVal_4);
      });
    }

    function View_SidebarComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 45, "form", [["class", "new-feed-container"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onReset() !== false;
          ad = pd_1 && ad;
        }

        if ("ngSubmit" === en) {
          var pd_2 = _co.submit() !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgForm"], [[8, null], [8, null]], null, {
        ngSubmit: "ngSubmit"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 18, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_MatFormField_0"], _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        _controlNonStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, {
        _controlStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
        _labelChildNonStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 4, {
        _labelChildStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
        _placeholderChild: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
        _errorChildren: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
        _hintChildren: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
        _prefixChildren: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
        _suffixChildren: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 1, 7, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["name", "name"], ["placeholder", "RSS Feed Name..."]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("blur" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._focusChanged(false) !== false;
          ad = pd_4 && ad;
        }

        if ("focus" === en) {
          var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._focusChanged(true) !== false;
          ad = pd_5 && ad;
        }

        if ("input" === en) {
          var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._onInput() !== false;
          ad = pd_6 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_7 = (_co.name = $event) !== false;
          ad = pd_7 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALUE_ACCESSOR"]]], {
        name: [0, "name"],
        model: [1, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_18__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        placeholder: [0, "placeholder"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[1, 4], [2, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 18, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_MatFormField_0"], _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
        _controlNonStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 11, {
        _controlStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
        _labelChildNonStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 13, {
        _labelChildStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, {
        _placeholderChild: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, {
        _errorChildren: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, {
        _hintChildren: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, {
        _prefixChildren: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, {
        _suffixChildren: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, 1, 7, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["name", "url"], ["placeholder", "RSS Feed Url..."]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("blur" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._focusChanged(false) !== false;
          ad = pd_4 && ad;
        }

        if ("focus" === en) {
          var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._focusChanged(true) !== false;
          ad = pd_5 && ad;
        }

        if ("input" === en) {
          var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._onInput() !== false;
          ad = pd_6 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_7 = (_co.url = $event) !== false;
          ad = pd_7 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALUE_ACCESSOR"]]], {
        name: [0, "name"],
        model: [1, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_18__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        placeholder: [0, "placeholder"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[10, 4], [11, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 2, "button", [["color", "primary"], ["mat-stroked-button", ""], ["type", "submit"]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]], {
        color: [0, "color"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["+ Add"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 2, "section", [["class", "rss-feeds"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SidebarComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_45 = "name";
        var currVal_46 = _co.name;

        _ck(_v, 19, 0, currVal_45, currVal_46);

        var currVal_47 = "RSS Feed Name...";

        _ck(_v, 21, 0, currVal_47);

        var currVal_86 = "url";
        var currVal_87 = _co.url;

        _ck(_v, 38, 0, currVal_86, currVal_87);

        var currVal_88 = "RSS Feed Url...";

        _ck(_v, 40, 0, currVal_88);

        var currVal_91 = "primary";

        _ck(_v, 44, 0, currVal_91);

        var currVal_92 = _co.feedList;

        _ck(_v, 48, 0, currVal_92);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassUntouched;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassTouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassPristine;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassDirty;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassValid;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassInvalid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassPending;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).appearance == "standard";
        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).appearance == "fill";
        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).appearance == "outline";
        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).appearance == "legacy";

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._control.errorState;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._canLabelFloat;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._shouldLabelFloat();

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._hasFloatingLabel();

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._hideControlPlaceholder();

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._control.disabled;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._control.autofilled;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._control.focused;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).color == "accent";
        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).color == "warn";

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._shouldForward("untouched");

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._shouldForward("touched");

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._shouldForward("pristine");

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._shouldForward("dirty");

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._shouldForward("valid");

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._shouldForward("invalid");

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._shouldForward("pending");

        var currVal_28 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._animationsEnabled;

        _ck(_v, 5, 1, [currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28]);

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._isServer;

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).id;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).placeholder;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).disabled;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).required;

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._isNativeSelect || null;
        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._ariaDescribedby || null;

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).errorState;

        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).required.toString();

        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassUntouched;

        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassTouched;

        var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassPristine;

        var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassDirty;

        var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassValid;

        var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassInvalid;

        var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassPending;

        _ck(_v, 16, 1, [currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44]);

        var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).appearance == "standard";
        var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).appearance == "fill";
        var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).appearance == "outline";
        var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).appearance == "legacy";

        var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._control.errorState;

        var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._canLabelFloat;

        var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._shouldLabelFloat();

        var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._hasFloatingLabel();

        var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._hideControlPlaceholder();

        var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._control.disabled;

        var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._control.autofilled;

        var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._control.focused;

        var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).color == "accent";
        var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).color == "warn";

        var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._shouldForward("untouched");

        var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._shouldForward("touched");

        var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._shouldForward("pristine");

        var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._shouldForward("dirty");

        var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._shouldForward("valid");

        var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._shouldForward("invalid");

        var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._shouldForward("pending");

        var currVal_69 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._animationsEnabled;

        _ck(_v, 24, 1, [currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69]);

        var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._isServer;

        var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).id;

        var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).placeholder;

        var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).disabled;

        var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).required;

        var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._isNativeSelect || null;
        var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._ariaDescribedby || null;

        var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).errorState;

        var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).required.toString();

        var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassUntouched;

        var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassTouched;

        var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassPristine;

        var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassDirty;

        var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassValid;

        var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassInvalid;

        var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassPending;

        _ck(_v, 35, 1, [currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81, currVal_82, currVal_83, currVal_84, currVal_85]);

        var currVal_89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).disabled || null;
        var currVal_90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44)._animationMode === "NoopAnimations";

        _ck(_v, 43, 0, currVal_89, currVal_90);
      });
    }

    function View_SidebarComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ap-sidebar", [], null, null, null, View_SidebarComponent_0, RenderType_SidebarComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _sidebar_component__WEBPACK_IMPORTED_MODULE_21__["SidebarComponent"], [_services_rss_feeds_service__WEBPACK_IMPORTED_MODULE_22__["RssFeedsService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var SidebarComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ap-sidebar", _sidebar_component__WEBPACK_IMPORTED_MODULE_21__["SidebarComponent"], View_SidebarComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/components/sidebar/sidebar.component.scss.shim.ngstyle.js":
  /*!***************************************************************************!*\
    !*** ./src/app/components/sidebar/sidebar.component.scss.shim.ngstyle.js ***!
    \***************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppComponentsSidebarSidebarComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["[_nghost-%COMP%] {\n  width: 350px;\n  border-right: 1px solid black;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n[_nghost-%COMP%]   .new-feed-container[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 10px 30px;\n}\n[_nghost-%COMP%]   .new-feed-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .new-feed-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n[_nghost-%COMP%]   .rss-feeds[_ngcontent-%COMP%] {\n  padding: 10px 30px;\n  width: 100%;\n  overflow-y: auto;\n  flex-grow: 1;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .rss-feeds[_ngcontent-%COMP%]   .feed[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .rss-feeds[_ngcontent-%COMP%]   .feed[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  max-width: 92%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n[_nghost-%COMP%]   .rss-feeds[_ngcontent-%COMP%]   .feed.selected[_ngcontent-%COMP%] {\n  border: 2px solid #3f51b5;\n}\n[_nghost-%COMP%]   .rss-feeds[_ngcontent-%COMP%]   .feed[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #f44336;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL0M6XFxVc2Vyc1xcc2FwaXJcXE9uZURyaXZlXFxEZXNrdG9wXFxuZ1Rlc3RcXG5nVGVzdFxcbmdUZXN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURBSTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ0VSO0FERFE7RUFDSSxXQUFBO0FDR1o7QUREUTtFQUNJLG9CQUFBO0FDR1o7QURBSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDRVI7QUREUTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQ0daO0FERlk7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSWhCO0FERlk7RUFDSSx5QkFBQTtBQ0loQjtBREZZO0VBQ0ksY0FBQTtBQ0loQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAubmV3LWZlZWQtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgICAgICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucnNzLWZlZWRzIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAuZmVlZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDkyJTtcclxuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjM2Y1MWI1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGk6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmNDQzMzY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCI6aG9zdCB7XG4gIHdpZHRoOiAzNTBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdCAubmV3LWZlZWQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG59XG46aG9zdCAubmV3LWZlZWQtY29udGFpbmVyIG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCAubmV3LWZlZWQtY29udGFpbmVyIGJ1dHRvbiB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuOmhvc3QgLnJzcy1mZWVkcyB7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGZsZXgtZ3JvdzogMTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbjpob3N0IC5yc3MtZmVlZHMgLmZlZWQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbjpob3N0IC5yc3MtZmVlZHMgLmZlZWQgLm5hbWUge1xuICBtYXgtd2lkdGg6IDkyJTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG46aG9zdCAucnNzLWZlZWRzIC5mZWVkLnNlbGVjdGVkIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzNmNTFiNTtcbn1cbjpob3N0IC5yc3MtZmVlZHMgLmZlZWQgaTpob3ZlciB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufSJdfQ== */"];
    /***/
  },

  /***/
  "./src/app/components/sidebar/sidebar.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/sidebar/sidebar.component.ts ***!
    \*********************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var SidebarComponent =
    /*#__PURE__*/
    function () {
      function SidebarComponent(rssFeedsService) {
        _classCallCheck(this, SidebarComponent);

        this.rssFeedsService = rssFeedsService;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.handleData();
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "handleData",
        value: function handleData() {
          var _this4 = this;

          this.rssFeedsService.feedList$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe)).subscribe(function (list) {
            _this4.feedList = list;
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          this.rssFeedsService.addFeed(this.url, this.name);
          this.url = null;
          this.name = null;
        }
      }, {
        key: "delete",
        value: function _delete(url) {
          this.rssFeedsService.removeFeed(url);
        }
      }, {
        key: "toggleSelect",
        value: function toggleSelect(feed) {
          if (feed.selected === true) {
            this.rssFeedsService.unSelectFeed(feed.url);
          } else {
            this.rssFeedsService.selectFeed(feed.url);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe.next();
          this.unsubscribe.complete();
        }
      }]);

      return SidebarComponent;
    }();
    /***/

  },

  /***/
  "./src/app/models/feed.ts":
  /*!********************************!*\
    !*** ./src/app/models/feed.ts ***!
    \********************************/

  /*! exports provided: Feed */

  /***/
  function srcAppModelsFeedTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Feed", function () {
      return Feed;
    });

    var Feed = function Feed(name, url) {
      _classCallCheck(this, Feed);

      this.selected = false;
      this.name = name;
      this.url = url;
    };
    /***/

  },

  /***/
  "./src/app/services/local-storage.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/local-storage.service.ts ***!
    \***************************************************/

  /*! exports provided: LocalStorageService */

  /***/
  function srcAppServicesLocalStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalStorageService", function () {
      return LocalStorageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LocalStorageService =
    /*#__PURE__*/
    function () {
      function LocalStorageService() {
        _classCallCheck(this, LocalStorageService);
      }

      _createClass(LocalStorageService, [{
        key: "setFeedList",
        value: function setFeedList(list) {
          localStorage.setItem('feedList', JSON.stringify(list));
        }
      }, {
        key: "getFeedList",
        value: function getFeedList() {
          var listJson = localStorage.getItem('feedList');

          if (listJson) {
            return JSON.parse(listJson);
          } else {
            return [];
          }
        }
      }]);

      return LocalStorageService;
    }();

    LocalStorageService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      factory: function LocalStorageService_Factory() {
        return new LocalStorageService();
      },
      token: LocalStorageService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/services/rss-feeds.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/rss-feeds.service.ts ***!
    \***********************************************/

  /*! exports provided: RssFeedsService */

  /***/
  function srcAppServicesRssFeedsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RssFeedsService", function () {
      return RssFeedsService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _models_feed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/feed */
    "./src/app/models/feed.ts");
    /* harmony import */


    var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./local-storage.service */
    "./src/app/services/local-storage.service.ts");

    var RssFeedsService =
    /*#__PURE__*/
    function () {
      function RssFeedsService(http, localStorageService) {
        _classCallCheck(this, RssFeedsService);

        this.http = http;
        this.localStorageService = localStorageService;
        this.feedList = [];
        this.feedList$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.contentList = [];
        this.contentList$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.isLoading = false;
        this.isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.rssToJsonBaseUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].rssToJsonBaseUrl;
        this.init();
      }

      _createClass(RssFeedsService, [{
        key: "init",
        value: function init() {
          var _this5 = this;

          this.feedList = this.localStorageService.getFeedList();

          if (this.feedList.length > 0) {
            this.feedList$.next(this.feedList);
            this.feedList.filter(function (feed) {
              return feed.selected === true;
            }).forEach(function (feed) {
              return _this5.getFeedContent(feed);
            });
          }
        }
      }, {
        key: "addFeed",
        value: function addFeed(url, name) {
          // Keep name unique
          if (this.feedList.filter(function (i) {
            return i.name === name;
          }).length === 0) {
            var feed = new _models_feed__WEBPACK_IMPORTED_MODULE_1__["Feed"](name, url);

            this._addItem(feed);
          }
        }
      }, {
        key: "removeFeed",
        value: function removeFeed(url) {
          this._deleteItem(url);

          this._deleteContent(url);
        }
      }, {
        key: "selectFeed",
        value: function selectFeed(url) {
          var feed = this.feedList.find(function (i) {
            return i.url === url;
          });

          if (!feed.selected) {
            this._setSelected(feed, true);

            this.getFeedContent(feed);
          }
        }
      }, {
        key: "unSelectFeed",
        value: function unSelectFeed(url) {
          var feed = this.feedList.find(function (i) {
            return i.url === url;
          });

          this._setSelected(feed, false);

          this._deleteContent(url);
        }
      }, {
        key: "getFeedContent",
        value: function getFeedContent(feed) {
          var _this6 = this;

          this.isLoading$.next(true);
          this.http.get(this.rssToJsonBaseUrl + feed.url).subscribe(function (res) {
            if (res && res.status === 'ok') {
              _this6._addContent(res);
            }

            _this6.isLoading$.next(false);
          }, function (error) {
            _this6.isLoading$.next(false);
          });
        } // Private:

      }, {
        key: "_addItem",
        value: function _addItem(item) {
          this.feedList = [].concat(_toConsumableArray(this.feedList), [item]);
          this.feedList$.next(this.feedList);
          this.localStorageService.setFeedList(this.feedList);
        }
      }, {
        key: "_deleteItem",
        value: function _deleteItem(url) {
          this.feedList = this.feedList.filter(function (i) {
            return i.url !== url;
          });
          this.feedList$.next(this.feedList);
          this.localStorageService.setFeedList(this.feedList);
        }
      }, {
        key: "_setSelected",
        value: function _setSelected(item, isSelected) {
          item.selected = isSelected;

          this._modifyItem(item);

          this.localStorageService.setFeedList(this.feedList);
        }
      }, {
        key: "_modifyItem",
        value: function _modifyItem(item) {
          var ind = this.feedList.findIndex(function (i) {
            return i.name === item.name;
          });
          this.feedList[ind] = item;
          this.feedList$.next(this.feedList);
        }
      }, {
        key: "_addContent",
        value: function _addContent(content) {
          this.contentList = [].concat(_toConsumableArray(this.contentList), [content]);
          this.contentList$.next(this.contentList);
        }
      }, {
        key: "_deleteContent",
        value: function _deleteContent(url) {
          this.contentList = this.contentList.filter(function (i) {
            return i.feed.url !== url;
          });
          this.contentList$.next(this.contentList);
        }
      }, {
        key: "_setLoading",
        value: function _setLoading(isLoading) {
          this.isLoading = isLoading;
          this.isLoading$.next(isLoading);
        }
      }]);

      return RssFeedsService;
    }();

    RssFeedsService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      factory: function RssFeedsService_Factory() {
        return new RssFeedsService(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]));
      },
      token: RssFeedsService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/environments/environment.prod.ts":
  /*!**********************************************!*\
    !*** ./src/environments/environment.prod.ts ***!
    \**********************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentProdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var environment = {
      production: true,
      rssToJsonBaseUrl: 'https://api.rss2json.com/v1/api.json?rss_url='
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      rssToJsonBaseUrl: 'https://api.rss2json.com/v1/api.json?rss_url='
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module.ngfactory */
    "./src/app/app.module.ngfactory.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\sapir\OneDrive\Desktop\ngTest\ngTest\ngTest\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map