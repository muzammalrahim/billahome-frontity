webpackHotUpdate("home",{

/***/ "./packages/frontity-chakra-theme/src/components/archive/AllPropertiesArchive.js":
/*!***************************************************************************************!*\
  !*** ./packages/frontity-chakra-theme/src/components/archive/AllPropertiesArchive.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _archive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./archive */ \"./packages/frontity-chakra-theme/src/components/archive/archive.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _property_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./property-view */ \"./packages/frontity-chakra-theme/src/components/archive/property-view.js\");\n/* harmony import */ var _featured_post_featured_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../featured-post/featured-post */ \"./packages/frontity-chakra-theme/src/components/featured-post/featured-post.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers */ \"./packages/frontity-chakra-theme/src/components/helpers.js\");\n/* harmony import */ var _allProperties__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./allProperties */ \"./packages/frontity-chakra-theme/src/components/archive/allProperties.js\");\n/* harmony import */ var _header_SearchBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../header/SearchBar */ \"./packages/frontity-chakra-theme/src/components/header/SearchBar.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/esm/index.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nconst AllPropertiesArchive=({state,actions,libraries})=>{const data=state.source.get(state.router.link);const[firstThreePosts,othersPosts]=Object(_helpers__WEBPACK_IMPORTED_MODULE_9__[\"splitPosts\"])(state,data.items);const[currentlyAddedItemsFromState,setcurrentlyAddedItemsFromState]=Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]);const[NavigateToPageNo,setNavigateToPageNo]=Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(1);let allProperties='';Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(async()=>{await actions.source.fetch(`/properties/${NavigateToPageNo}`);allProperties=state.source.get(`/properties/${NavigateToPageNo}`).items;setcurrentlyAddedItemsFromState(allProperties);},[]);const PrevPage=async()=>{setNavigateToPageNo(NavigateToPageNo-1);await actions.source.fetch(`/properties/${NavigateToPageNo}`);allProperties=state.source.get(`/properties/${NavigateToPageNo}`).items;setcurrentlyAddedItemsFromState(allProperties);};const NextPage=async()=>{setNavigateToPageNo(NavigateToPageNo+1);await actions.source.fetch(`/properties/${NavigateToPageNo}`);allProperties=state.source.get(`/properties/${NavigateToPageNo}`).items;setcurrentlyAddedItemsFromState(allProperties);};console.log(\"all properties\",currentlyAddedItemsFromState);return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__[\"jsxs\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Box\"],{bg:\"accent.50\",as:\"section\",children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__[\"jsx\"])(_header_SearchBar__WEBPACK_IMPORTED_MODULE_11__[\"default\"],{}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__[\"jsxs\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Box\"],{py:{base:\"64px\",md:\"80px\"},px:{base:\"24px\",md:\"40px\"},width:{base:\"auto\",lg:\"80%\"},maxWidth:\"1200px\",mx:\"auto\",children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__[\"jsx\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"SimpleGrid\"],{mt:{base:\"64px\",md:\"80px\"},columns:{base:1,md:3},spacing:\"20px\",children:currentlyAddedItemsFromState===null||currentlyAddedItemsFromState===void 0?void 0:currentlyAddedItemsFromState.map(({title,link,excerpt,featured_media,_embedded,property_meta})=>{return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__[\"jsx\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__[\"Fragment\"],{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__[\"jsx\"])(_allProperties__WEBPACK_IMPORTED_MODULE_10__[\"default\"],{title:title,link:link,excerpt:excerpt,featured_media:featured_media,extra_data:_embedded,meta:property_meta})});})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__[\"jsxs\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Center\"],{m:\"40px\",children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__[\"jsxs\"])(\"div\",{className:\"buyPropertyNavigation\",onClick:()=>PrevPage(),children:[\"  \",Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__[\"jsx\"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_12__[\"ChevronLeftIcon\"],{m:2,w:10,h:10,color:\"#fab93e\"}),\"  \"]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__[\"jsxs\"])(\"div\",{className:\"buyPropertyNavigation\",onClick:()=>NextPage(),children:[\"  \",Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__[\"jsx\"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_12__[\"ChevronRightIcon\"],{m:2,w:10,h:10,color:\"#fab93e\"}),\"  \"]})]})]})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_6__[\"connect\"])(AllPropertiesArchive));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9mcm9udGl0eS1jaGFrcmEtdGhlbWUvc3JjL2NvbXBvbmVudHMvYXJjaGl2ZS9BbGxQcm9wZXJ0aWVzQXJjaGl2ZS5qcz8yYjJlIl0sIm5hbWVzIjpbIkFsbFByb3BlcnRpZXNBcmNoaXZlIiwic3RhdGUiLCJhY3Rpb25zIiwibGlicmFyaWVzIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJmaXJzdFRocmVlUG9zdHMiLCJvdGhlcnNQb3N0cyIsInNwbGl0UG9zdHMiLCJpdGVtcyIsImN1cnJlbnRseUFkZGVkSXRlbXNGcm9tU3RhdGUiLCJzZXRjdXJyZW50bHlBZGRlZEl0ZW1zRnJvbVN0YXRlIiwidXNlU3RhdGUiLCJOYXZpZ2F0ZVRvUGFnZU5vIiwic2V0TmF2aWdhdGVUb1BhZ2VObyIsImFsbFByb3BlcnRpZXMiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsIlByZXZQYWdlIiwiTmV4dFBhZ2UiLCJjb25zb2xlIiwibG9nIiwiYmFzZSIsIm1kIiwibGciLCJtYXAiLCJ0aXRsZSIsImV4Y2VycHQiLCJmZWF0dXJlZF9tZWRpYSIsIl9lbWJlZGRlZCIsInByb3BlcnR5X21ldGEiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFBLEtBQU1BLHFCQUFvQixDQUFHLENBQUMsQ0FBRUMsS0FBRixDQUFTQyxPQUFULENBQWtCQyxTQUFsQixDQUFELEdBQWlDLENBRTdELEtBQU1DLEtBQUksQ0FBR0gsS0FBSyxDQUFDSSxNQUFOLENBQWFDLEdBQWIsQ0FBaUJMLEtBQUssQ0FBQ00sTUFBTixDQUFhQyxJQUE5QixDQUFiLENBRUMsS0FBTSxDQUFDQyxlQUFELENBQWtCQyxXQUFsQixFQUFpQ0MsMkRBQVUsQ0FBQ1YsS0FBRCxDQUFRRyxJQUFJLENBQUNRLEtBQWIsQ0FBakQsQ0FFQSxLQUFNLENBQUNDLDRCQUFELENBQStCQywrQkFBL0IsRUFBa0VDLHNEQUFRLENBQUMs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QXVDLE9BQU8sQ0FBRSxJQUFJWixRQUFRLEVBQTVELGdCQUFrRSx3RUFBQyxpRUFBRCxFQUFpQixDQUFDLENBQUUsQ0FBcEIsQ0FBdUIsQ0FBQyxDQUFFLEVBQTFCLENBQThCLENBQUMsQ0FBRSxFQUFqQyxDQUFxQyxLQUFLLENBQUMsU0FBM0MsRUFBbEUsUUFERixDQUVFLGdGQUFLLFNBQVMsQ0FBQyx1QkFBZixDQUF1QyxPQUFPLENBQUUsSUFBSUMsUUFBUSxFQUE1RCxnQkFBa0Usd0VBQUMsa0VBQUQsRUFBa0IsQ0FBQyxDQUFFLENBQXJCLENBQXdCLENBQUMsQ0FBRSxFQUEzQixDQUErQixDQUFDLENBQUUsRUFBbEMsQ0FBc0MsS0FBSyxDQUFDLFNBQTVDLEVBQWxFLFFBRkYsR0EvQkUsR0FGSixHQURGLENBMENDLENBM0VELENBNkVlWSx1SEFBTyxDQUFDbEMsb0JBQUQsQ0FBdEIiLCJmaWxlIjoiLi9wYWNrYWdlcy9mcm9udGl0eS1jaGFrcmEtdGhlbWUvc3JjL2NvbXBvbmVudHMvYXJjaGl2ZS9BbGxQcm9wZXJ0aWVzQXJjaGl2ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCb3gsIEhlYWRpbmcsIEJ1dHRvbiAsIENlbnRlciwgQnV0dG9uR3JvdXAsIFNpbXBsZUdyaWQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tICcuL2FyY2hpdmUnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwiZnJvbnRpdHlcIjtcclxuaW1wb3J0IFByb3BlcnR5dmlldyBmcm9tICcuL3Byb3BlcnR5LXZpZXcnXHJcbmltcG9ydCB7IEZlYXR1cmVkUG9zdFNlY3Rpb24gfSBmcm9tIFwiLi4vZmVhdHVyZWQtcG9zdC9mZWF0dXJlZC1wb3N0XCI7XHJcbmltcG9ydCB7IGZvcm1hdFBvc3REYXRhLCBzcGxpdFBvc3RzIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuaW1wb3J0IEFsbFByb3BlcnR5IGZyb20gXCIuL2FsbFByb3BlcnRpZXNcIjtcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiLi4vaGVhZGVyL1NlYXJjaEJhclwiXHJcblxyXG5pbXBvcnQge0NoZXZyb25MZWZ0SWNvbn0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHtDaGV2cm9uUmlnaHRJY29ufSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xyXG5cclxuY29uc3QgQWxsUHJvcGVydGllc0FyY2hpdmUgPSAoeyBzdGF0ZSwgYWN0aW9ucywgbGlicmFyaWVzIH0pPT57XHJcblxyXG4gY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xyXG5cclxuICBjb25zdCBbZmlyc3RUaHJlZVBvc3RzLCBvdGhlcnNQb3N0c10gPSBzcGxpdFBvc3RzKHN0YXRlLCBkYXRhLml0ZW1zKTtcclxuXHJcbiAgY29uc3QgW2N1cnJlbnRseUFkZGVkSXRlbXNGcm9tU3RhdGUsIHNldGN1cnJlbnRseUFkZGVkSXRlbXNGcm9tU3RhdGVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtOYXZpZ2F0ZVRvUGFnZU5vLCBzZXROYXZpZ2F0ZVRvUGFnZU5vXSA9IHVzZVN0YXRlKDEpO1xyXG4gIFxyXG5cclxuICBsZXQgYWxsUHJvcGVydGllcyA9ICcnO1xyXG5cclxuICB1c2VFZmZlY3QoIGFzeW5jKCkgPT4ge1xyXG4gICAgYXdhaXQgYWN0aW9ucy5zb3VyY2UuZmV0Y2goYC9wcm9wZXJ0aWVzLyR7TmF2aWdhdGVUb1BhZ2VOb31gKTtcclxuICAgIGFsbFByb3BlcnRpZXMgPSBzdGF0ZS5zb3VyY2UuZ2V0KGAvcHJvcGVydGllcy8ke05hdmlnYXRlVG9QYWdlTm99YCkuaXRlbXM7XHJcbiAgICBzZXRjdXJyZW50bHlBZGRlZEl0ZW1zRnJvbVN0YXRlKGFsbFByb3BlcnRpZXMpXHJcbiAgfSwgW10pXHJcblxyXG5cclxuICBjb25zdCBQcmV2UGFnZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldE5hdmlnYXRlVG9QYWdlTm8oTmF2aWdhdGVUb1BhZ2VObyAtMSlcclxuICAgIGF3YWl0IGFjdGlvbnMuc291cmNlLmZldGNoKGAvcHJvcGVydGllcy8ke05hdmlnYXRlVG9QYWdlTm99YCk7XHJcbiAgICBhbGxQcm9wZXJ0aWVzID0gc3RhdGUuc291cmNlLmdldChgL3Byb3BlcnRpZXMvJHtOYXZpZ2F0ZVRvUGFnZU5vfWApLml0ZW1zO1xyXG4gICAgc2V0Y3VycmVudGx5QWRkZWRJdGVtc0Zyb21TdGF0ZShhbGxQcm9wZXJ0aWVzKVxyXG4gIH1cclxuICBjb25zdCBOZXh0UGFnZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldE5hdmlnYXRlVG9QYWdlTm8oTmF2aWdhdGVUb1BhZ2VObyArMSlcclxuICAgIGF3YWl0IGFjdGlvbnMuc291cmNlLmZldGNoKGAvcHJvcGVydGllcy8ke05hdmlnYXRlVG9QYWdlTm99YCk7XHJcbiAgICBhbGxQcm9wZXJ0aWVzID0gc3RhdGUuc291cmNlLmdldChgL3Byb3BlcnRpZXMvJHtOYXZpZ2F0ZVRvUGFnZU5vfWApLml0ZW1zO1xyXG4gICAgc2V0Y3VycmVudGx5QWRkZWRJdGVtc0Zyb21TdGF0ZShhbGxQcm9wZXJ0aWVzKVxyXG4gIH1cclxuXHJcbmNvbnNvbGUubG9nKFwiYWxsIHByb3BlcnRpZXNcIixjdXJyZW50bHlBZGRlZEl0ZW1zRnJvbVN0YXRlKVxyXG5yZXR1cm4gKFxyXG4gIDxCb3ggYmc9XCJhY2NlbnQuNTBcIiBhcz1cInNlY3Rpb25cIj5cclxuICAgPFNlYXJjaEJhci8+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBweT17eyBiYXNlOiBcIjY0cHhcIiwgbWQ6IFwiODBweFwiIH19XHJcbiAgICAgICAgcHg9e3sgYmFzZTogXCIyNHB4XCIsIG1kOiBcIjQwcHhcIiB9fVxyXG4gICAgICAgIHdpZHRoPXt7IGJhc2U6IFwiYXV0b1wiLCBsZzogXCI4MCVcIiB9fVxyXG4gICAgICAgIG1heFdpZHRoPVwiMTIwMHB4XCJcclxuICAgICAgICBteD1cImF1dG9cIlxyXG4gICAgICA+XHJcbiAgPFNpbXBsZUdyaWRcclxuICBtdD17eyBiYXNlOiBcIjY0cHhcIiwgbWQ6IFwiODBweFwiIH19XHJcbiAgY29sdW1ucz17eyBiYXNlOiAxLCBtZDogMyB9fVxyXG4gIHNwYWNpbmc9XCIyMHB4XCJcclxuPlxyXG5cclxuICB7Y3VycmVudGx5QWRkZWRJdGVtc0Zyb21TdGF0ZT8ubWFwKFxyXG4gICAgKHsgdGl0bGUsIGxpbmssIGV4Y2VycHQsIGZlYXR1cmVkX21lZGlhLCBfZW1iZWRkZWQsIHByb3BlcnR5X21ldGEgfSkgPT4ge1xyXG4gICAgICByZXR1cm4gKDw+XHJcbiAgICAgICAgPEFsbFByb3BlcnR5XHJcbiAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICBsaW5rPXtsaW5rfVxyXG4gICAgICAgICAgZXhjZXJwdD17ZXhjZXJwdH1cclxuICAgICAgICAgIGZlYXR1cmVkX21lZGlhPXtmZWF0dXJlZF9tZWRpYX1cclxuICAgICAgICAgIGV4dHJhX2RhdGE9e19lbWJlZGRlZH1cclxuICAgICAgICAgIG1ldGE9IHtwcm9wZXJ0eV9tZXRhfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuXHJcbiAgICB9XHJcbiAgKX1cclxuPC9TaW1wbGVHcmlkPlxyXG4gICAgPENlbnRlciBtPVwiNDBweFwiPiAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXlQcm9wZXJ0eU5hdmlnYXRpb25cIiBvbkNsaWNrPXsoKT0+UHJldlBhZ2UoKX0+ICA8Q2hldnJvbkxlZnRJY29uIG09ezJ9IHc9ezEwfSBoPXsxMH0gY29sb3I9XCIjZmFiOTNlXCIvPiAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV5UHJvcGVydHlOYXZpZ2F0aW9uXCIgb25DbGljaz17KCk9Pk5leHRQYWdlKCl9PiAgPENoZXZyb25SaWdodEljb24gbT17Mn0gdz17MTB9IGg9ezEwfSBjb2xvcj1cIiNmYWI5M2VcIi8+ICA8L2Rpdj5cclxuICAgIDwvQ2VudGVyPlxyXG48L0JveD5cclxuPC9Cb3g+XHJcbilcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoQWxsUHJvcGVydGllc0FyY2hpdmUpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/frontity-chakra-theme/src/components/archive/AllPropertiesArchive.js\n");

/***/ })

})