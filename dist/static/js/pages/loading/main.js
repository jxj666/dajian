global.webpackJsonp([3],{

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(75);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_template_compiler_index_id_data_v_90d4dc9e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(78);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(76)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-90d4dc9e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_template_compiler_index_id_data_v_90d4dc9e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\loading\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-90d4dc9e", Component.options)
  } else {
    hotAPI.reload("data-v-90d4dc9e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 76:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
      text: "加载中",
      thisPage: "start"
    };
  },
  onShow: function onShow() {
    this.text = "加载中";
    this.prePage = wx.getStorageSync("pre_page");
    if (this.prePage == "none") {
      wx.setStorageSync("pre_page", "start");
      this.text = "返回退出";
    } else {
      this.get_user();
    }
  },

  methods: {
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
        wx.setStorageSync("index_box", d.data);
        var arr = wx.getStorageSync("data_box");
        arr.push({
          pre_page: _this2.thisPage,
          pre_data: d.data,
          page: "index"
        });
        wx.setStorageSync("data_box", arr);
        wx.setStorageSync("pre_page", _this2.thisPage);
        var url = "../index/main";
        wx.navigateTo({ url: url });
      }).catch(function (err) {
        console.log(err.status, err.message);
      });
    }
  }
});

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box"
  }, [_c('image', {
    attrs: {
      "src": "../../static/img/gif.gif"
    }
  }), _vm._v(" "), _c('h3', [_vm._v(_vm._s(_vm.text))])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-90d4dc9e", esExports)
  }
}

/***/ })

},[74]);
//# sourceMappingURL=main.js.map