webpackHotUpdate("home",{

/***/ "./packages/frontity-chakra-theme/src/components/header/About.js":
/*!***********************************************************************!*\
  !*** ./packages/frontity-chakra-theme/src/components/header/About.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _archive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../archive */ \"./packages/frontity-chakra-theme/src/components/archive/index.js\");\n/* harmony import */ var _hooks_useScrollProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useScrollProgress */ \"./packages/frontity-chakra-theme/src/components/hooks/useScrollProgress.js\");\n/* harmony import */ var _styles_pattern_box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/pattern-box */ \"./packages/frontity-chakra-theme/src/components/styles/pattern-box.js\");\n/* harmony import */ var _styles_c_section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/c_section */ \"./packages/frontity-chakra-theme/src/components/styles/c_section.js\");\n/* harmony import */ var _post_author_bio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../post/author-bio */ \"./packages/frontity-chakra-theme/src/components/post/author-bio.js\");\n/* harmony import */ var _post_featured_media__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../post/featured-media */ \"./packages/frontity-chakra-theme/src/components/post/featured-media.js\");\n/* harmony import */ var _post_post_header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../post/post-header */ \"./packages/frontity-chakra-theme/src/components/post/post-header.js\");\n/* harmony import */ var _post_post_progressbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../post/post-progressbar */ \"./packages/frontity-chakra-theme/src/components/post/post-progressbar.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../helpers */ \"./packages/frontity-chakra-theme/src/components/helpers.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const About=({state,actions,libraries})=>{const postData=Object(_helpers__WEBPACK_IMPORTED_MODULE_13__[\"getPostData\"])(state);const post=Object(_helpers__WEBPACK_IMPORTED_MODULE_13__[\"formatPostData\"])(state,postData);// Get the html2react component.\nconst Html2React=libraries.html2react.Component;// Once the post has loaded in the DOM, prefetch both the\n// home posts and the list component so if the user visits\n// the home page, everything is ready and it loads instantly.\nObject(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(()=>{actions.source.fetch(\"/\");_archive__WEBPACK_IMPORTED_MODULE_5__[\"default\"].preload();},[]);const[ref,scroll]=Object(_hooks_useScrollProgress__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();// Load the post, but only if the data is ready.\nif(!postData.isReady)return null;return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__[\"jsxs\"])(\"div\",{class:\"tai\",children:[!postData.isPage&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__[\"jsx\"])(_post_post_progressbar__WEBPACK_IMPORTED_MODULE_12__[\"default\"],{value:scroll}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__[\"jsxs\"])(_styles_c_section__WEBPACK_IMPORTED_MODULE_8__[\"default\"],{bg:\"white\",pb:\"80px\",size:\"lg\",class:\"bhoom\",children:[post.featured_media!=null&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__[\"jsx\"])(_post_featured_media__WEBPACK_IMPORTED_MODULE_10__[\"default\"],{id:post===null||post===void 0?void 0:post.featured_media.id}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__[\"jsx\"])(Content,{as:_styles_c_section__WEBPACK_IMPORTED_MODULE_8__[\"default\"],px:{base:\"32px\",md:\"0\"},size:\"lg\",pt:\"0px\",children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__[\"jsx\"])(Html2React,{html:post===null||post===void 0?void 0:post.content})})]})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(About));// This component is the parent of the `content.rendered` HTML. We can use nested\n// selectors to style that HTML.\nconst Content=Object(frontity__WEBPACK_IMPORTED_MODULE_3__[\"styled\"])(\"div\", false?undefined:{target:\"eaj4evt0\",label:\"Content\"})( false?undefined:{name:\"3pjhze\",styles:\"color:rgba(12, 17, 43, 0.8);word-break:break-word;width:100%!important;max-width:none!important;*{max-width:100%;}ul{padding:1rem;}img{width:100%;object-fit:cover;object-position:center;}figure{margin:24px auto;width:100%!important;}iframe{display:block;margin:auto;}input[type=\\\"text\\\"],input[type=\\\"email\\\"],input[type=\\\"url\\\"],input[type=\\\"tel\\\"],input[type=\\\"number\\\"],input[type=\\\"date\\\"],textarea,select{display:block;padding:6px 12px;font-size:16px;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:4px;outline-color:transparent;transition:outline-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;margin:8px 0 4px 0;&:focus{outline-color:#1f38c5;}}input[type=\\\"submit\\\"]{display:inline-block;margin-bottom:0;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid #1f38c5;padding:12px 36px;font-size:14px;line-height:1.42857143;border-radius:4px;color:#fff;background-color:#1f38c5;}@media (min-width: 420px){img.aligncenter,img.alignleft,img.alignright{width:auto;}.aligncenter{display:block;margin-left:auto;margin-right:auto;}.alignright{float:right;margin-left:24px;}.alignleft{float:left;margin-right:24px;}}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxQcm9qZWN0c1xcYmlsbGFob21lLWZyb250aXR5XFxwYWNrYWdlc1xcZnJvbnRpdHktY2hha3JhLXRoZW1lXFxzcmNcXGNvbXBvbmVudHNcXGhlYWRlclxcQWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEUwQiIsImZpbGUiOiJFOlxcUHJvamVjdHNcXGJpbGxhaG9tZS1mcm9udGl0eVxccGFja2FnZXNcXGZyb250aXR5LWNoYWtyYS10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxoZWFkZXJcXEFib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxyXG5pbXBvcnQge0hlYWRpbmcsIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5cclxuXHJcbmltcG9ydCB7IEJveCwgRGl2aWRlciB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCIuLi9hcmNoaXZlXCI7XHJcbmltcG9ydCB1c2VTY3JvbGxQcm9ncmVzcyBmcm9tIFwiLi4vaG9va3MvdXNlU2Nyb2xsUHJvZ3Jlc3NcIjtcclxuaW1wb3J0IHsgTGlnaHRQYXR0ZXJuQm94IH0gZnJvbSBcIi4uL3N0eWxlcy9wYXR0ZXJuLWJveFwiO1xyXG5pbXBvcnQgQ3NlY3Rpb24gZnJvbSBcIi4uL3N0eWxlcy9jX3NlY3Rpb25cIjtcclxuaW1wb3J0IEF1dGhvckJpbyBmcm9tIFwiLi4vcG9zdC9hdXRob3ItYmlvXCI7XHJcbmltcG9ydCBGZWF0dXJlZE1lZGlhIGZyb20gXCIuLi9wb3N0L2ZlYXR1cmVkLW1lZGlhXCI7XHJcbmltcG9ydCBQb3N0SGVhZGVyIGZyb20gXCIuLi9wb3N0L3Bvc3QtaGVhZGVyXCI7XHJcbmltcG9ydCBQb3N0UHJvZ3Jlc3NCYXIgZnJvbSBcIi4uL3Bvc3QvcG9zdC1wcm9ncmVzc2JhclwiO1xyXG5pbXBvcnQgeyBnZXRQb3N0RGF0YSwgZm9ybWF0UG9zdERhdGEgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5cclxuY29uc3QgQWJvdXQgPSAoeyBzdGF0ZSwgYWN0aW9ucywgbGlicmFyaWVzIH0pID0+IHtcclxuICBjb25zdCBwb3N0RGF0YSA9IGdldFBvc3REYXRhKHN0YXRlKTtcclxuICBjb25zdCBwb3N0ID0gZm9ybWF0UG9zdERhdGEoc3RhdGUsIHBvc3REYXRhKTtcclxuXHJcbiAgLy8gR2V0IHRoZSBodG1sMnJlYWN0IGNvbXBvbmVudC5cclxuICBjb25zdCBIdG1sMlJlYWN0ID0gbGlicmFyaWVzLmh0bWwycmVhY3QuQ29tcG9uZW50O1xyXG5cclxuICAvLyBPbmNlIHRoZSBwb3N0IGhhcyBsb2FkZWQgaW4gdGhlIERPTSwgcHJlZmV0Y2ggYm90aCB0aGVcclxuICAvLyBob21lIHBvc3RzIGFuZCB0aGUgbGlzdCBjb21wb25lbnQgc28gaWYgdGhlIHVzZXIgdmlzaXRzXHJcbiAgLy8gdGhlIGhvbWUgcGFnZSwgZXZlcnl0aGluZyBpcyByZWFkeSBhbmQgaXQgbG9hZHMgaW5zdGFudGx5LlxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhY3Rpb25zLnNvdXJjZS5mZXRjaChcIi9cIik7XHJcbiAgICBMaXN0LnByZWxvYWQoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IFtyZWYsIHNjcm9sbF0gPSB1c2VTY3JvbGxQcm9ncmVzcygpO1xyXG5cclxuICAvLyBMb2FkIHRoZSBwb3N0LCBidXQgb25seSBpZiB0aGUgZGF0YSBpcyByZWFkeS5cclxuICBpZiAoIXBvc3REYXRhLmlzUmVhZHkpIHJldHVybiBudWxsO1xyXG5cclxuICByZXR1cm4gKFxyXG48ZGl2IGNsYXNzPVwidGFpXCI+XHJcbiAgICAgIFxyXG4gey8qPGRpdiBjbGFzc05hbWU9XCJhYm91dEltZ2JhY2tncm91bmQtb3ZlcmxheVwiPiBcclxuICAgICAgICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbmhlYWRlclwiPlxyXG4gICAgPEltYWdlIGNsYXNzTmFtZT1cImFib3V0SW1nXCIgIHNyYz1cImh0dHBzOi8vZGVtbzEzLmhvdXplei5jby93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wMy8yMDUuanBnXCIgYWx0PVwiU2VndW4gQWRlYmF5b1wiIC8+XHJcbiAgPC9kaXY+XHJcbiAgICAgPC9kaXY+Ki99XHJcbiAgICAgIHshcG9zdERhdGEuaXNQYWdlICYmIDxQb3N0UHJvZ3Jlc3NCYXIgdmFsdWU9e3Njcm9sbH0gLz59XHJcbiAgICAgIHsvKiBMb29rIGF0IHRoZSBzZXR0aW5ncyB0byBzZWUgaWYgd2Ugc2hvdWxkIGluY2x1ZGUgdGhlIGZlYXR1cmVkIGltYWdlICovfVxyXG4gICAgICA8Q3NlY3Rpb24gYmc9XCJ3aGl0ZVwiIHBiPVwiODBweFwiIHNpemU9XCJsZ1wiIGNsYXNzPVwiYmhvb21cIj5cclxuICAgICAgICB7cG9zdC5mZWF0dXJlZF9tZWRpYSAhPSBudWxsICYmIChcclxuICAgICAgICAgIDxGZWF0dXJlZE1lZGlhIGlkPXtwb3N0Py5mZWF0dXJlZF9tZWRpYS5pZH0gLz5cclxuICAgICAgICApfVxyXG4gICAgICBcclxuICAgICAgICB7LyogUmVuZGVyIHRoZSBjb250ZW50IHVzaW5nIHRoZSBIdG1sMlJlYWN0IGNvbXBvbmVudCBzbyB0aGUgSFRNTCBpcyBwcm9jZXNzZWRcclxuICAgICAgIGJ5IHRoZSBwcm9jZXNzb3JzIHdlIGluY2x1ZGVkIGluIHRoZSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5wcm9jZXNzb3JzIGFycmF5LiAqL31cclxuICAgICAgICA8Q29udGVudFxyXG4gICAgICAgICAgYXM9e0NzZWN0aW9ufVxyXG4gICAgICAgICAgcHg9e3sgYmFzZTogXCIzMnB4XCIsIG1kOiBcIjBcIiB9fVxyXG4gICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgIHB0PVwiMHB4XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtwb3N0Py5jb250ZW50fSAvPlxyXG4gICAgICAgIDwvQ29udGVudD5cclxuICAgICAgICBcclxuICAgICAgPC9Dc2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoQWJvdXQpO1xyXG5cclxuLy8gVGhpcyBjb21wb25lbnQgaXMgdGhlIHBhcmVudCBvZiB0aGUgYGNvbnRlbnQucmVuZGVyZWRgIEhUTUwuIFdlIGNhbiB1c2UgbmVzdGVkXHJcbi8vIHNlbGVjdG9ycyB0byBzdHlsZSB0aGF0IEhUTUwuXHJcbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiByZ2JhKDEyLCAxNywgNDMsIDAuOCk7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbiAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XHJcblxyXG4gICoge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgdWwge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBmaWd1cmUge1xyXG4gICAgbWFyZ2luOiAyNHB4IGF1dG87XHJcbiAgICAvKiBuZXh0IGxpbmUgb3ZlcnJpZGVzIGFuIGlubGluZSBzdHlsZSBvZiB0aGUgZmlndXJlIGVsZW1lbnQuICovXHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaWZyYW1lIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qIElucHV0IGZpZWxkcyBzdHlsZXMgKi9cclxuXHJcbiAgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiAgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4gIGlucHV0W3R5cGU9XCJ1cmxcIl0sXHJcbiAgaW5wdXRbdHlwZT1cInRlbFwiXSxcclxuICBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxyXG4gIGlucHV0W3R5cGU9XCJkYXRlXCJdLFxyXG4gIHRleHRhcmVhLFxyXG4gIHNlbGVjdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG91dGxpbmUtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNpdGlvbjogb3V0bGluZS1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcclxuICAgIG1hcmdpbjogOHB4IDAgNHB4IDA7XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmUtY29sb3I6ICMxZjM4YzU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAtbXMtdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbiAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMWYzOGM1O1xyXG4gICAgcGFkZGluZzogMTJweCAzNnB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjM4YzU7XHJcbiAgfVxyXG5cclxuICAvKiBXb3JkUHJlc3MgQ29yZSBBbGlnbiBDbGFzc2VzICovXHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0MjBweCkge1xyXG4gICAgaW1nLmFsaWduY2VudGVyLFxyXG4gICAgaW1nLmFsaWdubGVmdCxcclxuICAgIGltZy5hbGlnbnJpZ2h0IHtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmFsaWduY2VudGVyIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmFsaWducmlnaHQge1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hbGlnbmxlZnQge1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9mcm9udGl0eS1jaGFrcmEtdGhlbWUvc3JjL2NvbXBvbmVudHMvaGVhZGVyL0Fib3V0LmpzPzhhOWUiXSwibmFtZXMiOlsiQWJvdXQiLCJzdGF0ZSIsImFjdGlvbnMiLCJsaWJyYXJpZXMiLCJwb3N0RGF0YSIsImdldFBvc3REYXRhIiwicG9zdCIsImZvcm1hdFBvc3REYXRhIiwiSHRtbDJSZWFjdCIsImh0bWwycmVhY3QiLCJDb21wb25lbnQiLCJ1c2VFZmZlY3QiLCJzb3VyY2UiLCJmZXRjaCIsIkxpc3QiLCJwcmVsb2FkIiwicmVmIiwic2Nyb2xsIiwidXNlU2Nyb2xsUHJvZ3Jlc3MiLCJpc1JlYWR5IiwiaXNQYWdlIiwiZmVhdHVyZWRfbWVkaWEiLCJpZCIsIkNzZWN0aW9uIiwiYmFzZSIsIm1kIiwiY29udGVudCIsImNvbm5lY3QiLCJDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxUkFrQkEsS0FBTUEsTUFBSyxDQUFHLENBQUMsQ0FBRUMsS0FBRixDQUFTQyxPQUFULENBQWtCQyxTQUFsQixDQUFELEdBQW1DLENBQy9DLEtBQU1DLFNBQVEsQ0FBR0MsNkRBQVcsQ0FBQ0osS0FBRCxDQUE1QixDQUNBLEtBQU1LLEtBQUksQ0FBR0MsZ0VBQWMsQ0FBQ04sS0FBRCxDQUFRRyxRQUFSLENBQTNCLENBRUE7QUFDQSxLQUFNSSxXQUFVLENBQUdMLFNBQVMsQ0FBQ00sVUFBVixDQUFxQkMsU0FBeEMsQ0FFQTtBQUNBO0FBQ0E7QUFDQUMsdURBQVMsQ0FBQyxJQUFNLENBQ2RULE9BQU8sQ0FBQ1UsTUFBUixDQUFlQyxLQUFmLENBQXFCLEdBQXJCLEVBQ0FDLGdEQUFJLENBQUNDLE9BQUwsR0FDRCxDQUhRLENBR04sRUFITSxDQUFULENBS0EsS0FBTSxDQUFDQyxHQUFELENBQU1DLE1BQU4sRUFBZ0JDLHdFQUFpQixFQUF2QyxDQUVBO0FBQ0EsR0FBSSxDQUFDZCxRQUFRLENBQUNlLE9BQWQsQ0FBdUIsTUFBTyxLQUFQLENBRXZCLE1BQ0YsaUZBQUssS0FBSyxDQUFDLEtBQVgsV0FRTyxDQUFDZixRQUFRLENBQUNnQixNQUFWLEVBQW9CLHdFQUFDLCtEQUFELEVBQWlCLEtBQUssQ0FBRUgsTUFBeEIsRUFSM0IsQ0FVTSx5RUFBQyx5REFBRCxFQUFVLEVBQUUsQ0FBQyxPQUFiLENBQXFCLEVBQUUsQ0FBQyxNQUF4QixDQUErQixJQUFJLENBQUMsSUFBcEMsQ0FBeUMsS0FBSyxDQUFDLE9BQS9DLFdBQ0dYLElBQUksQ0FBQ2UsY0FBTCxFQUF1QixJQUF2QixFQUNDLHdFQUFDLDZEQUFELEVBQWUsRUFBRSxDQUFFZixJQUFGLFNBQUVBLElBQUYsaUJBQUVBLElBQUksQ0FBRWUsY0FBTixDQUFxQkMsRUFBeEMsRUFGSixDQU9FLHdFQUFDLE9BQUQsRUFDRSxFQUFFLENBQUVDLHlEQUROLENBRUUsRUFBRSxDQUFFLENBQUVDLElBQUksQ0FBRSxNQUFSLENBQWdCQyxFQUFFLENBQUUsR0FBcEIsQ0FGTixDQUdFLElBQUksQ0FBQyxJQUhQLENBSUUsRUFBRSxDQUFDLEtBSkwsVUFNRSx3RUFBQyxVQUFELEVBQVksSUFBSSxDQUFFbkIsSUFBRixTQUFFQSxJQUFGLGlCQUFFQSxJQUFJLENBQUVvQixPQUF4QixFQU5GLEVBUEYsR0FWTixHQURFLENBOEJELENBbERELENBb0RlQyx1SEFBTyxDQUFDM0IsS0FBRCxDQUF0QixFQUVBO0FBQ0E7QUFDQSxLQUFNNEIsUUFBTywwaVJBQWIiLCJmaWxlIjoiLi9wYWNrYWdlcy9mcm9udGl0eS1jaGFrcmEtdGhlbWUvc3JjL2NvbXBvbmVudHMvaGVhZGVyL0Fib3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxyXG5pbXBvcnQge0hlYWRpbmcsIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5cclxuXHJcbmltcG9ydCB7IEJveCwgRGl2aWRlciB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCIuLi9hcmNoaXZlXCI7XHJcbmltcG9ydCB1c2VTY3JvbGxQcm9ncmVzcyBmcm9tIFwiLi4vaG9va3MvdXNlU2Nyb2xsUHJvZ3Jlc3NcIjtcclxuaW1wb3J0IHsgTGlnaHRQYXR0ZXJuQm94IH0gZnJvbSBcIi4uL3N0eWxlcy9wYXR0ZXJuLWJveFwiO1xyXG5pbXBvcnQgQ3NlY3Rpb24gZnJvbSBcIi4uL3N0eWxlcy9jX3NlY3Rpb25cIjtcclxuaW1wb3J0IEF1dGhvckJpbyBmcm9tIFwiLi4vcG9zdC9hdXRob3ItYmlvXCI7XHJcbmltcG9ydCBGZWF0dXJlZE1lZGlhIGZyb20gXCIuLi9wb3N0L2ZlYXR1cmVkLW1lZGlhXCI7XHJcbmltcG9ydCBQb3N0SGVhZGVyIGZyb20gXCIuLi9wb3N0L3Bvc3QtaGVhZGVyXCI7XHJcbmltcG9ydCBQb3N0UHJvZ3Jlc3NCYXIgZnJvbSBcIi4uL3Bvc3QvcG9zdC1wcm9ncmVzc2JhclwiO1xyXG5pbXBvcnQgeyBnZXRQb3N0RGF0YSwgZm9ybWF0UG9zdERhdGEgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5cclxuY29uc3QgQWJvdXQgPSAoeyBzdGF0ZSwgYWN0aW9ucywgbGlicmFyaWVzIH0pID0+IHtcclxuICBjb25zdCBwb3N0RGF0YSA9IGdldFBvc3REYXRhKHN0YXRlKTtcclxuICBjb25zdCBwb3N0ID0gZm9ybWF0UG9zdERhdGEoc3RhdGUsIHBvc3REYXRhKTtcclxuXHJcbiAgLy8gR2V0IHRoZSBodG1sMnJlYWN0IGNvbXBvbmVudC5cclxuICBjb25zdCBIdG1sMlJlYWN0ID0gbGlicmFyaWVzLmh0bWwycmVhY3QuQ29tcG9uZW50O1xyXG5cclxuICAvLyBPbmNlIHRoZSBwb3N0IGhhcyBsb2FkZWQgaW4gdGhlIERPTSwgcHJlZmV0Y2ggYm90aCB0aGVcclxuICAvLyBob21lIHBvc3RzIGFuZCB0aGUgbGlzdCBjb21wb25lbnQgc28gaWYgdGhlIHVzZXIgdmlzaXRzXHJcbiAgLy8gdGhlIGhvbWUgcGFnZSwgZXZlcnl0aGluZyBpcyByZWFkeSBhbmQgaXQgbG9hZHMgaW5zdGFudGx5LlxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhY3Rpb25zLnNvdXJjZS5mZXRjaChcIi9cIik7XHJcbiAgICBMaXN0LnByZWxvYWQoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IFtyZWYsIHNjcm9sbF0gPSB1c2VTY3JvbGxQcm9ncmVzcygpO1xyXG5cclxuICAvLyBMb2FkIHRoZSBwb3N0LCBidXQgb25seSBpZiB0aGUgZGF0YSBpcyByZWFkeS5cclxuICBpZiAoIXBvc3REYXRhLmlzUmVhZHkpIHJldHVybiBudWxsO1xyXG5cclxuICByZXR1cm4gKFxyXG48ZGl2IGNsYXNzPVwidGFpXCI+XHJcbiAgICAgIFxyXG4gey8qPGRpdiBjbGFzc05hbWU9XCJhYm91dEltZ2JhY2tncm91bmQtb3ZlcmxheVwiPiBcclxuICAgICAgICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbmhlYWRlclwiPlxyXG4gICAgPEltYWdlIGNsYXNzTmFtZT1cImFib3V0SW1nXCIgIHNyYz1cImh0dHBzOi8vZGVtbzEzLmhvdXplei5jby93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wMy8yMDUuanBnXCIgYWx0PVwiU2VndW4gQWRlYmF5b1wiIC8+XHJcbiAgPC9kaXY+XHJcbiAgICAgPC9kaXY+Ki99XHJcbiAgICAgIHshcG9zdERhdGEuaXNQYWdlICYmIDxQb3N0UHJvZ3Jlc3NCYXIgdmFsdWU9e3Njcm9sbH0gLz59XHJcbiAgICAgIHsvKiBMb29rIGF0IHRoZSBzZXR0aW5ncyB0byBzZWUgaWYgd2Ugc2hvdWxkIGluY2x1ZGUgdGhlIGZlYXR1cmVkIGltYWdlICovfVxyXG4gICAgICA8Q3NlY3Rpb24gYmc9XCJ3aGl0ZVwiIHBiPVwiODBweFwiIHNpemU9XCJsZ1wiIGNsYXNzPVwiYmhvb21cIj5cclxuICAgICAgICB7cG9zdC5mZWF0dXJlZF9tZWRpYSAhPSBudWxsICYmIChcclxuICAgICAgICAgIDxGZWF0dXJlZE1lZGlhIGlkPXtwb3N0Py5mZWF0dXJlZF9tZWRpYS5pZH0gLz5cclxuICAgICAgICApfVxyXG4gICAgICBcclxuICAgICAgICB7LyogUmVuZGVyIHRoZSBjb250ZW50IHVzaW5nIHRoZSBIdG1sMlJlYWN0IGNvbXBvbmVudCBzbyB0aGUgSFRNTCBpcyBwcm9jZXNzZWRcclxuICAgICAgIGJ5IHRoZSBwcm9jZXNzb3JzIHdlIGluY2x1ZGVkIGluIHRoZSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5wcm9jZXNzb3JzIGFycmF5LiAqL31cclxuICAgICAgICA8Q29udGVudFxyXG4gICAgICAgICAgYXM9e0NzZWN0aW9ufVxyXG4gICAgICAgICAgcHg9e3sgYmFzZTogXCIzMnB4XCIsIG1kOiBcIjBcIiB9fVxyXG4gICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgIHB0PVwiMHB4XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SHRtbDJSZWFjdCBodG1sPXtwb3N0Py5jb250ZW50fSAvPlxyXG4gICAgICAgIDwvQ29udGVudD5cclxuICAgICAgICBcclxuICAgICAgPC9Dc2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoQWJvdXQpO1xyXG5cclxuLy8gVGhpcyBjb21wb25lbnQgaXMgdGhlIHBhcmVudCBvZiB0aGUgYGNvbnRlbnQucmVuZGVyZWRgIEhUTUwuIFdlIGNhbiB1c2UgbmVzdGVkXHJcbi8vIHNlbGVjdG9ycyB0byBzdHlsZSB0aGF0IEhUTUwuXHJcbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiByZ2JhKDEyLCAxNywgNDMsIDAuOCk7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbiAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XHJcblxyXG4gICoge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgdWwge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBmaWd1cmUge1xyXG4gICAgbWFyZ2luOiAyNHB4IGF1dG87XHJcbiAgICAvKiBuZXh0IGxpbmUgb3ZlcnJpZGVzIGFuIGlubGluZSBzdHlsZSBvZiB0aGUgZmlndXJlIGVsZW1lbnQuICovXHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaWZyYW1lIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qIElucHV0IGZpZWxkcyBzdHlsZXMgKi9cclxuXHJcbiAgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiAgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4gIGlucHV0W3R5cGU9XCJ1cmxcIl0sXHJcbiAgaW5wdXRbdHlwZT1cInRlbFwiXSxcclxuICBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxyXG4gIGlucHV0W3R5cGU9XCJkYXRlXCJdLFxyXG4gIHRleHRhcmVhLFxyXG4gIHNlbGVjdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG91dGxpbmUtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNpdGlvbjogb3V0bGluZS1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcclxuICAgIG1hcmdpbjogOHB4IDAgNHB4IDA7XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmUtY29sb3I6ICMxZjM4YzU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAtbXMtdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbiAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMWYzOGM1O1xyXG4gICAgcGFkZGluZzogMTJweCAzNnB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjM4YzU7XHJcbiAgfVxyXG5cclxuICAvKiBXb3JkUHJlc3MgQ29yZSBBbGlnbiBDbGFzc2VzICovXHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0MjBweCkge1xyXG4gICAgaW1nLmFsaWduY2VudGVyLFxyXG4gICAgaW1nLmFsaWdubGVmdCxcclxuICAgIGltZy5hbGlnbnJpZ2h0IHtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmFsaWduY2VudGVyIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmFsaWducmlnaHQge1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hbGlnbmxlZnQge1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/frontity-chakra-theme/src/components/header/About.js\n");

/***/ })

})