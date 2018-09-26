global.webpackJsonp([2],{

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(84);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
    config: {
        "usingComponents": {
            "txv-video": 'plugin://myPlugin/video'
        }
    }

});

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_template_compiler_index_id_data_v_2e73f5bc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(91);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(85)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2e73f5bc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_template_compiler_index_id_data_v_2e73f5bc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\player\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e73f5bc", Component.options)
  } else {
    hotAPI.reload("data-v-2e73f5bc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 85:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_mainTitle__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_videoCard__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_textCard__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_searchBox__ = __webpack_require__(5);

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
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      thisPage: "player",
      prePage: undefined,
      leftNone: true,
      fixed: false,
      scrollHeight: "500px",
      dataList: [],
      // src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
      // src: "http://static.video.qq.com/TPout.swf?vid=w0766f4ngw3&auto=1",
      src: "",
      listShow: true,
      listHide: false,
      hideSearch: false,
      searchNew: 0,
      videoContext: {},
      vid: "w0766f4ngw3",
      playerObj: {},
      autoplay: false
    };
  },


  components: {
    mainTitle: __WEBPACK_IMPORTED_MODULE_1__components_mainTitle__["a" /* default */],
    videoCard: __WEBPACK_IMPORTED_MODULE_2__components_videoCard__["a" /* default */],
    textCard: __WEBPACK_IMPORTED_MODULE_3__components_textCard__["a" /* default */],
    searchBox: __WEBPACK_IMPORTED_MODULE_4__components_searchBox__["a" /* default */]
  },
  computed: {
    src_fix: function src_fix() {
      if (this.playerObj.class == 2) {
        return "https://bj-crm-wechat-mini-program-test.s3.cn-north-1.amazonaws.com.cn/" + this.playerObj.video_url;
      } else {
        return "";
      }
    }
  },

  methods: {
    toSearch: function toSearch() {
      var _this = this;

      this.hideSearch = true;
      this.listHide = true;
      setTimeout(function () {
        _this.searchNew = +new Date();

        _this.listShow = false;
      }, 500);
    },
    getList: function getList() {
      var rule = 750 / wx.getSystemInfoSync().windowWidth;
      var height = wx.getSystemInfoSync().windowHeight;
      // console.log(height, rule);
      this.scrollHeight = height * rule - (103 + 423) + "rpx";
      // console.log(this.scrollHeight);

      var that = this;
      wx.getNetworkType({
        success: function success(res) {
          if (res.networkType == "wifi") {
            if (that.playerObj.class == 1) {
              var TxvContext = requirePlugin("myPlugin");
              var txvContext = TxvContext.getTxvContext("showVideoBox1");
              txvContext.play();
              that.autoplay = true;
            } else if (that.playerObj.class == 2) {
              that.videoContext = wx.createVideoContext("showVideoBox2");
              that.videoContext.play();
            } else {
              that.videoContext = wx.createVideoContext("showVideoBox3");
              that.videoContext.play();
            }
          }
        }
      });
    },
    toVideo: function toVideo(x) {
      wx.setStorage({
        key: "video",
        data: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(x)
      });
      // var arr = wx.getStorageSync("data_box");
      // arr.push({
      //   pre_page: this.thisPage,
      //   pre_data: this.dataList,
      //   video: x,
      //   page: "player"
      // });
      // wx.setStorageSync("data_box", arr);
      wx.setStorageSync("pre_page", this.thisPage);
      wx.setStorageSync("player", {
        data: this.dataList,
        video: x
      });
      var url = "../player/main";
      wx.navigateTo({
        url: url
      });
    },
    exit: function exit() {
      this.leftNone = false;
      this.listShow = true;
      this.listHide = false;
      this.dataList = [];
      this.hideSearch = false;
    }
  },

  created: function created() {},
  onShow: function onShow() {
    this.prePage = wx.getStorageSync("pre_page");
    // var arr = wx.getStorageSync("data_box");

    // if (this.prePage == "none") {
    //   this.animation = false;
    //   var kelement = arr.pop();
    //   wx.setStorageSync("data_box", arr);
    //   var obj = arr[arr.length - 1];
    //   var page = obj.page;
    //   console.log(page);
    //   if (page != "player") {
    //     arr.push(kelement);
    //     wx.setStorageSync("data_box", arr);
    //     // this.exit();
    //     // wx.setStorageSync("pre_page", "begin");
    //     // const url = "../loading/main";
    //     // wx.redirectTo({ url });
    //   }
    //   obj = arr[arr.length - 1];
    //   page = obj.page;
    //   this.prePage = obj.pre_page;
    //   this.dataList = obj.pre_data;
    //   this.playerObj = obj.video;
    // } else {
    //   var obj = arr[arr.length - 1];
    //   this.prePage = obj.pre_page;
    //   this.dataList = obj.pre_data;
    //   this.playerObj = obj.video;
    // }
    // console.log(this.playerObj);

    var data = wx.getStorageSync("player");

    this.dataList = data.data;
    this.playerObj = data.video;
    if (this.prePage == "none") {
      this.animation = false;
    }
    wx.setStorageSync("pre_page", "none");

    wx.setNavigationBarTitle({
      title: "系列产品说明" //页面标题为路由参数
    });

    var Fly = __webpack_require__(2);
    var fly = new Fly();
    var header = wx.getStorageSync("YX-SESSIONID");
    fly.interceptors.request.use(function (request) {
      request.headers["YX-SESSIONID"] = header;
      return request;
    });
    fly.post("https://dj.majiangyun.com/uploadProductStatic", {
      productId: this.playerObj.id
    }).then(function (d) {
      //输出请求数据
      console.log("req", d.data);
    }).catch(function (err) {
      console.log(err.status, err.message);
    });
    this.getList();
  },
  onHide: function onHide() {
    this.exit();
  },
  onUnload: function onUnload() {
    this.exit();
  }
});

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_script_index_0_textCard_vue__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_template_compiler_index_id_data_v_e348639a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_template_index_0_textCard_vue__ = __webpack_require__(90);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(88)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e348639a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_script_index_0_textCard_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_template_compiler_index_id_data_v_e348639a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_template_index_0_textCard_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\textCard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] textCard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e348639a", Component.options)
  } else {
    hotAPI.reload("data-v-e348639a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 88:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	props: ['video']
});

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card"
  }, [_c('h3', [_vm._v(_vm._s(_vm.video.title))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.video.description))])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-e348639a", esExports)
  }
}

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "grid-box max_width"
  }, [_c('main-title', {
    attrs: {
      "thisPage": _vm.thisPage,
      "hideSearch": _vm.hideSearch,
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "toSearch": _vm.toSearch
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "contentBox"
  }, [(_vm.listShow) ? _c('div', {
    staticClass: "listBoxTotal",
    class: {
      listHide: _vm.listHide
    }
  }, [_c('view', {
    staticClass: "videoBox"
  }, [(_vm.playerObj.class == 2) ? _c('video', {
    class: {
      fixedVideo: _vm.fixed
    },
    attrs: {
      "id": "showVideoBox2",
      "objectFit": "fill",
      "src": _vm.src_fix,
      "controls": "",
      "fixed": "true"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.playerObj.class == 3) ? _c('video', {
    class: {
      fixedVideo: _vm.fixed
    },
    attrs: {
      "id": "showVideoBox3",
      "objectFit": "fill",
      "src": _vm.playerObj.video_url,
      "controls": "",
      "fixed": "true",
      "autoplay": _vm.autoplay
    }
  }) : _vm._e(), _vm._v(" "), (_vm.playerObj.class == 1) ? _c('txv-video', {
    attrs: {
      "vid": _vm.playerObj.video_id,
      "playerid": "showVideoBox1",
      "objectFit": "fill",
      "mpcomid": '1'
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "listBox grid-var",
    style: ({
      height: _vm.scrollHeight
    })
  }, [_c('scroll-view', {
    staticClass: "content",
    attrs: {
      "scroll-y": "true"
    }
  }, [_c('text-card', {
    attrs: {
      "video": _vm.playerObj,
      "mpcomid": '2'
    }
  }), _vm._v(" "), _vm._l((_vm.dataList), function(x, key) {
    return _c('div', {
      key: key
    }, [(_vm.playerObj.id != x.id) ? _c('video-card', {
      attrs: {
        "videos": x,
        "index": -1,
        "leftNone": _vm.leftNone,
        "eventid": '1-' + key,
        "mpcomid": '3-' + key
      },
      on: {
        "toVideo": _vm.toVideo
      }
    }) : _vm._e()], 1)
  })], 2)], 1)]) : _vm._e(), _vm._v(" "), (_vm.listHide) ? _c('div', {
    staticClass: "searchBox"
  }, [_c('search-box', {
    attrs: {
      "searchNew": _vm.searchNew,
      "mpcomid": '4'
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
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2e73f5bc", esExports)
  }
}

/***/ })

},[83]);
//# sourceMappingURL=main.js.map