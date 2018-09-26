global.webpackJsonp([5],{

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(74);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_template_compiler_index_id_data_v_0ce52447_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(77);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(75)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0ce52447"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_template_compiler_index_id_data_v_0ce52447_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0ce52447", Component.options)
  } else {
    hotAPI.reload("data-v-0ce52447", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 75:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_mainTitle__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_indexCard__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_searchBox__ = __webpack_require__(5);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      thisPage: "index",
      prePage: undefined,
      leftNone: false,
      dataList: [],
      listShow: true,
      listHide: false,
      hideSearch: false,
      searchNew: 0,
      animation: true
    };
  },

  components: {
    mainTitle: __WEBPACK_IMPORTED_MODULE_1__components_mainTitle__["a" /* default */],
    indexCard: __WEBPACK_IMPORTED_MODULE_2__components_indexCard__["a" /* default */],
    searchBox: __WEBPACK_IMPORTED_MODULE_3__components_searchBox__["a" /* default */]
  },
  methods: {
    hideSearchBox: function hideSearchBox() {
      console.log(123);
      wx.setStorageSync("search_page", false);

      this.hideSearch = false;
      this.listHide = false;
      this.listShow = true;
    },
    showIndex: function showIndex() {
      var data = wx.getStorageSync("index");
      console.log(data);
      if (!data) {
        return;
      }
      this.dataList = data.data.data;
      if (this.prePage == "none") {
        this.animation = false;
      }
      wx.setStorageSync("pre_page", "none");
      wx.setNavigationBarTitle({
        title: "大疆飞手百科" //页面标题为路由参数
      });
      this.getList();
    },
    get_user: function get_user() {
      wx.setStorageSync("data_box", [{ pre_page: "begin" }]);
      wx.setStorageSync("pre_page", "begin");
      var _this = this;
      wx.login({
        success: function success(res) {
          if (res.code) {
            console.log(res);
            var Fly = __webpack_require__(2);
            var fly = new Fly();
            fly.post("https://dj.majiangyun.com/wechatLogin", {
              code: res.code
            }).then(function (d) {
              //输出请求数据
              console.log("req", d.data);
              wx.setStorageSync("YX-SESSIONID", d.data.data.sessionId);

              _this.start_index();
            }).catch(function (err) {
              console.log(err.status, err.message);
            });
          } else {
            console.log("登录失败！" + res.errMsg);
          }
        }
      });
    },
    start_index: function start_index() {
      var _this2 = this;

      var Fly = __webpack_require__(2);
      var fly = new Fly();
      var header = wx.getStorageSync("YX-SESSIONID");
      fly.interceptors.request.use(function (request) {
        request.headers["YX-SESSIONID"] = header;
        return request;
      });
      fly.get("https://dj.majiangyun.com/", {}).then(function (d) {
        //输出请求数据
        console.log("req", d.data);
        wx.setStorageSync("index", {
          pre_page: _this2.thisPage,
          data: d.data,
          page: "index"
        });
        // wx.setStorageSync("pre_page", this.thisPage);
        _this2.showIndex();
      }).catch(function (err) {
        console.log(err.status, err.message);
      });
    },
    toSearch: function toSearch() {
      var _this3 = this;

      this.hideSearch = true;
      this.listHide = true;
      setTimeout(function () {
        _this3.listShow = false;
        _this3.searchNew = +new Date();
      }, 500);
    },
    toDetail: function toDetail(x) {
      var _this4 = this;

      var Fly = __webpack_require__(2);
      var fly = new Fly();
      var header = wx.getStorageSync("YX-SESSIONID");
      fly.interceptors.request.use(function (request) {
        request.headers["YX-SESSIONID"] = header;
        return request;
      });
      fly.get("https://dj.majiangyun.com/type/" + x.id, {}).then(function (d) {
        //输出请求数据
        console.log("req", d.data);
        wx.setStorage({
          key: "goods",
          data: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(x)
        });
        // var arr = wx.getStorageSync("data_box");
        // arr.push({
        //   pre_page: this.thisPage,
        //   pre_data: d.data,
        //   page: "childIndex"
        // });
        // wx.setStorageSync("data_box", arr);
        wx.setStorageSync("pre_page", _this4.thisPage);

        var url;
        if (d.data.data.type == "series") {
          wx.setStorageSync("childIndex", {
            title: x.title,
            data: d.data
          });

          url = "../childIndex/main";
        } else {
          wx.setStorageSync("explain", {
            title: x.title,
            data: d.data
          });

          url = "../explain/main";
        }
        wx.navigateTo({ url: url });
      }).catch(function (err) {
        console.log(err.status, err.message);
      });
    },
    getList: function getList() {
      var _this5 = this;

      this.leftNone = false;
      setTimeout(function () {
        _this5.leftNone = true;
      }, 200);
    },
    exit: function exit() {
      var SP = wx.getStorageSync("search_page");
      console.log(SP);
      if (SP) {
        wx.setStorageSync("search_page", false);
        return;
      }
      this.leftNone = false;
      this.listShow = true;
      this.listHide = false;
      this.dataList = [];
      this.hideSearch = false;
      this.animation = true;
    }
  },
  onShow: function onShow() {
    wx.setStorageSync("search_page", "none");
    this.prePage = wx.getStorageSync("pre_page");
    if (this.prePage == "none") {
      this.animation = false;
    }

    if (this.prePage == "none") {
      console.log("back");
      this.showIndex();
    } else {
      console.log("start");
      this.get_user();
    }
  },
  onLoad: function onLoad() {},
  onHide: function onHide() {
    this.exit();
  },
  onUnload: function onUnload() {
    this.exit();
  }
});

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroll-view', {
    staticClass: "max_width"
  }, [_c('main-title', {
    attrs: {
      "thisPage": _vm.thisPage,
      "hideSearch": _vm.hideSearch,
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "hideSearchBox": _vm.hideSearchBox,
      "toSearch": _vm.toSearch
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "contentBox"
  }, [(_vm.listShow) ? _c('div', {
    staticClass: "listBox",
    class: {
      listHide: _vm.listHide
    }
  }, _vm._l((_vm.dataList), function(x, key) {
    return _c('div', {
      key: key
    }, [_c('index-card', {
      attrs: {
        "animation": _vm.animation,
        "goods": x,
        "index": key,
        "leftNone": _vm.leftNone,
        "eventid": '1-' + key,
        "mpcomid": '1-' + key
      },
      on: {
        "toDetail": _vm.toDetail
      }
    })], 1)
  })) : _vm._e(), _vm._v(" "), (_vm.listHide) ? _c('div', {
    staticClass: "searchBox"
  }, [_c('search-box', {
    attrs: {
      "searchPage": _vm.thisPage,
      "searchNew": _vm.searchNew,
      "mpcomid": '2'
    }
  })], 1) : _vm._e()])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0ce52447", esExports)
  }
}

/***/ })

},[73]);
//# sourceMappingURL=main.js.map