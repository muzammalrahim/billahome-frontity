webpackHotUpdate("home",{

/***/ "./packages/frontity-chakra-theme/src/utils/handlers.js":
/*!**************************************************************!*\
  !*** ./packages/frontity-chakra-theme/src/utils/handlers.js ***!
  \**************************************************************/
/*! exports provided: menuHandler, homecontentHandler, getAllpropertiesHandler, propertiesHandler, mediaHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menuHandler\", function() { return menuHandler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"homecontentHandler\", function() { return homecontentHandler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllpropertiesHandler\", function() { return getAllpropertiesHandler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"propertiesHandler\", function() { return propertiesHandler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mediaHandler\", function() { return mediaHandler; });\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);\n// added by taimoor\nconst menuHandler={name:\"menus\",priority:10,pattern:\"/menu/:slug\",func:async({link,route,params,state,libraries})=>{const{api}=libraries.source;const{slug}=params;// 1. fetch the data you want from the endpoint page\n// const menuList = await libraries.source.api.get({\n// endpoint: \"menu-items\",\n// params: {\n// menus: params.id,\n// per_page: 100, // To make sure we get all elements\n// },\n// });\nconst response=await libraries.source.api.get({endpoint:`/menus/v1/menus/${slug}`});// \n// const items = await libraries.source.populate({\n// response: menuList,\n// state\n// });\n// Parse the JSON to get the object\nconst menuData=await response.json();// Add the menu items to source.data\nconst menu=state.source.data[link];Object.assign(menu,{items:menuData.items,isMenu:true});// 2. get an array with each item in json format\n// const items = await response.json();\n// 3. add data to source\n// const currentPageData = state.source.data[route];\n// Object.assign(currentPageData, {\n// id,\n// items: items,\n// isMenu: true,\n// });\n}};const homecontentHandler={name:\"myplugin\",priority:10,pattern:\"/home-content\",func:async({link,route,params,state,libraries})=>{const{api}=libraries.source;const{slug}=params;// 1. fetch the data you want from the endpoint page\n// const menuList = await libraries.source.api.get({\n// endpoint: \"menu-items\",\n// params: {\n// menus: params.id,\n// per_page: 100, // To make sure we get all elements\n// },\n// });\nconst response=await libraries.source.api.get({endpoint:`sliderwidget`});//\n// const items = await libraries.source.populate({\n// response: menuList,\n// state\n// });\n// Parse the JSON to get the object\nconst menuData=await response.json();// Add the menu items to source.data\nconst menu=state.source.data[link];Object.assign(menu,{items:menuData.items,isMenu:true});// 2. get an array with each item in json format\n// const items = await response.json();\n// 3. add data to source\n// const currentPageData = state.source.data[route];\n// Object.assign(currentPageData, {\n// id,\n// items: items,\n// isMenu: true,\n// });\n}};// added by taimoor\nconst getAllpropertiesHandler={name:\"properties\",priority:18,pattern:\"/properties\",func:async({route,params,state,libraries})=>{const{api}=libraries.source;const{id}=params;// 1. fetch the data you want from the endpoint page\nconst response=await api.get({endpoint:\"properties\",params:{per_page:100,// To make sure we get all elements\npage:params.page,_embed:true}});// 2. get an array with each item in json format\nconst items=await response.json();const total=libraries.source.getTotal(response);const totalPages=libraries.source.getTotalPages(response);// 3. add data to source\nconst currentPageData=state.source.data[route];Object.assign(currentPageData,{id,items,totalPages,total});}};const propertiesHandler={name:\"property\",priority:18,pattern:\"/latest-properties/:page\",func:async({route,params,state,libraries})=>{const{api}=libraries.source;const{id}=params;// 1. fetch the data you want from the endpoint page\nconst response=await api.get({endpoint:\"properties\",params:{per_page:6,// To make sure we get all elements\npage:params.page,_embed:true}});// 2. get an array with each item in json format\nconst items=await response.json();const total=libraries.source.getTotal(response);const totalPages=libraries.source.getTotalPages(response);// 3. add data to source\nconst currentPageData=state.source.data[route];Object.assign(currentPageData,{id,items,totalPages,total});}};const mediaHandler={name:\"site-media\",priority:18,pattern:\"/all-media/:ids\",func:async({route,params,state,libraries})=>{const{api}=libraries.source;const{id}=params;// 1. fetch the data you want from the endpoint page\nconst response=await api.get({endpoint:\"media\",params:{include:params.ids,// To make sure we get all elements\nper_page:100,// To make sure we get all elements\n_embed:true}});// 2. get an array with each item in json format\nconst items=await response.json();const total=libraries.source.getTotal(response);const totalPages=libraries.source.getTotalPages(response);// 3. add data to source\nconst currentPageData=state.source.data[route];Object.assign(currentPageData,{id,items,totalPages,total});}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9mcm9udGl0eS1jaGFrcmEtdGhlbWUvc3JjL3V0aWxzL2hhbmRsZXJzLmpzPzQyZjEiXSwibmFtZXMiOlsibWVudUhhbmRsZXIiLCJuYW1lIiwicHJpb3JpdHkiLCJwYXR0ZXJuIiwiZnVuYyIsImxpbmsiLCJyb3V0ZSIsInBhcmFtcyIsInN0YXRlIiwibGlicmFyaWVzIiwiYXBpIiwic291cmNlIiwic2x1ZyIsInJlc3BvbnNlIiwiZ2V0IiwiZW5kcG9pbnQiLCJtZW51RGF0YSIsImpzb24iLCJtZW51IiwiZGF0YSIsIk9iamVjdCIsImFzc2lnbiIsIml0ZW1zIiwiaXNNZW51IiwiaG9tZWNvbnRlbnRIYW5kbGVyIiwiZ2V0QWxscHJvcGVydGllc0hhbmRsZXIiLCJpZCIsInBlcl9wYWdlIiwicGFnZSIsIl9lbWJlZCIsInRvdGFsIiwiZ2V0VG90YWwiLCJ0b3RhbFBhZ2VzIiwiZ2V0VG90YWxQYWdlcyIsImN1cnJlbnRQYWdlRGF0YSIsInByb3BlcnRpZXNIYW5kbGVyIiwibWVkaWFIYW5kbGVyIiwiaW5jbHVkZSIsImlkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQ08sS0FBTUEsWUFBVyxDQUFHLENBQ3pCQyxJQUFJLENBQUUsT0FEbUIsQ0FFekJDLFFBQVEsQ0FBRSxFQUZlLENBR3pCQyxPQUFPLENBQUUsYUFIZ0IsQ0FJekJDLElBQUksQ0FBRSxNQUFPLENBQUVDLElBQUYsQ0FBT0MsS0FBUCxDQUFjQyxNQUFkLENBQXNCQyxLQUF0QixDQUE2QkMsU0FBN0IsQ0FBUCxHQUFvRCxDQUN4RCxLQUFNLENBQUVDLEdBQUYsRUFBVUQsU0FBUyxDQUFDRSxNQUExQixDQUNBLEtBQU0sQ0FBRUMsSUFBRixFQUFXTCxNQUFqQixDQUVBO0FBQ0E7QUFDRTtBQUNBO0FBQ0U7QUFDQTtBQUNGO0FBQ0Y7QUFFQSxLQUFNTSxTQUFRLENBQUcsS0FBTUosVUFBUyxDQUFDRSxNQUFWLENBQWlCRCxHQUFqQixDQUFx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SjZCLENBQS9CLEVBTUQsQ0FqQ3lCLENBQXJCIiwiZmlsZSI6Ii4vcGFja2FnZXMvZnJvbnRpdHktY2hha3JhLXRoZW1lL3NyYy91dGlscy9oYW5kbGVycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBhZGRlZCBieSB0YWltb29yXHJcbmV4cG9ydCBjb25zdCBtZW51SGFuZGxlciA9IHtcclxuICBuYW1lOiBcIm1lbnVzXCIsXHJcbiAgcHJpb3JpdHk6IDEwLFxyXG4gIHBhdHRlcm46IFwiL21lbnUvOnNsdWdcIixcclxuICBmdW5jOiBhc3luYyAoeyBsaW5rLHJvdXRlLCBwYXJhbXMsIHN0YXRlLCBsaWJyYXJpZXMgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBhcGkgfSA9IGxpYnJhcmllcy5zb3VyY2U7XHJcbiAgICBjb25zdCB7IHNsdWcgfSA9IHBhcmFtcztcclxuXHJcbiAgICAvLyAxLiBmZXRjaCB0aGUgZGF0YSB5b3Ugd2FudCBmcm9tIHRoZSBlbmRwb2ludCBwYWdlXHJcbiAgICAvLyBjb25zdCBtZW51TGlzdCA9IGF3YWl0IGxpYnJhcmllcy5zb3VyY2UuYXBpLmdldCh7XHJcbiAgICAgIC8vIGVuZHBvaW50OiBcIm1lbnUtaXRlbXNcIixcclxuICAgICAgLy8gcGFyYW1zOiB7XHJcbiAgICAgICAgLy8gbWVudXM6IHBhcmFtcy5pZCxcclxuICAgICAgICAvLyBwZXJfcGFnZTogMTAwLCAvLyBUbyBtYWtlIHN1cmUgd2UgZ2V0IGFsbCBlbGVtZW50c1xyXG4gICAgICAvLyB9LFxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBsaWJyYXJpZXMuc291cmNlLmFwaS5nZXQoe1xyXG4gICAgICBlbmRwb2ludDogYC9tZW51cy92MS9tZW51cy8ke3NsdWd9YCxcclxuICAgIH0pO1xyXG5cclxuLy8gXHJcbiAgICAvLyBjb25zdCBpdGVtcyA9IGF3YWl0IGxpYnJhcmllcy5zb3VyY2UucG9wdWxhdGUoe1xyXG4gICAgICAvLyByZXNwb25zZTogbWVudUxpc3QsXHJcbiAgICAgIC8vIHN0YXRlXHJcbiAgICAvLyB9KTtcclxuXHJcbiAgIC8vIFBhcnNlIHRoZSBKU09OIHRvIGdldCB0aGUgb2JqZWN0XHJcbiAgIGNvbnN0IG1lbnVEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIFxyXG4gICAgLy8gQWRkIHRoZSBtZW51IGl0ZW1zIHRvIHNvdXJjZS5kYXRhXHJcbiAgICBjb25zdCBtZW51ID0gc3RhdGUuc291cmNlLmRhdGFbbGlua107XHJcbiAgICBPYmplY3QuYXNzaWduKG1lbnUsIHtcclxuICAgICAgaXRlbXM6IG1lbnVEYXRhLml0ZW1zLFxyXG4gICAgICBpc01lbnU6IHRydWUsXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy8gMi4gZ2V0IGFuIGFycmF5IHdpdGggZWFjaCBpdGVtIGluIGpzb24gZm9ybWF0XHJcbiAgICAvLyBjb25zdCBpdGVtcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAvLyAzLiBhZGQgZGF0YSB0byBzb3VyY2VcclxuICAgIC8vIGNvbnN0IGN1cnJlbnRQYWdlRGF0YSA9IHN0YXRlLnNvdXJjZS5kYXRhW3JvdXRlXTtcclxuXHJcbiAgICAvLyBPYmplY3QuYXNzaWduKGN1cnJlbnRQYWdlRGF0YSwge1xyXG4gICAgICAvLyBpZCxcclxuICAgICAgLy8gaXRlbXM6IGl0ZW1zLFxyXG4gICAgICAvLyBpc01lbnU6IHRydWUsXHJcbiAgICAvLyB9KTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhvbWVjb250ZW50SGFuZGxlciA9IHtcclxuICBuYW1lOiBcIm15cGx1Z2luXCIsXHJcbiAgcHJpb3JpdHk6IDEwLFxyXG4gIHBhdHRlcm46IFwiL2hvbWUtY29udGVudFwiLFxyXG4gIGZ1bmM6IGFzeW5jICh7IGxpbmssIHJvdXRlLCBwYXJhbXMsIHN0YXRlLCBsaWJyYXJpZXMgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBhcGkgfSA9IGxpYnJhcmllcy5zb3VyY2U7XHJcbiAgICBjb25zdCB7IHNsdWcgfSA9IHBhcmFtcztcclxuXHJcbiAgICAvLyAxLiBmZXRjaCB0aGUgZGF0YSB5b3Ugd2FudCBmcm9tIHRoZSBlbmRwb2ludCBwYWdlXHJcbiAgICAvLyBjb25zdCBtZW51TGlzdCA9IGF3YWl0IGxpYnJhcmllcy5zb3VyY2UuYXBpLmdldCh7XHJcbiAgICAvLyBlbmRwb2ludDogXCJtZW51LWl0ZW1zXCIsXHJcbiAgICAvLyBwYXJhbXM6IHtcclxuICAgIC8vIG1lbnVzOiBwYXJhbXMuaWQsXHJcbiAgICAvLyBwZXJfcGFnZTogMTAwLCAvLyBUbyBtYWtlIHN1cmUgd2UgZ2V0IGFsbCBlbGVtZW50c1xyXG4gICAgLy8gfSxcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbGlicmFyaWVzLnNvdXJjZS5hcGkuZ2V0KHtcclxuICAgICAgZW5kcG9pbnQ6IGBzbGlkZXJ3aWRnZXRgLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9cclxuICAgIC8vIGNvbnN0IGl0ZW1zID0gYXdhaXQgbGlicmFyaWVzLnNvdXJjZS5wb3B1bGF0ZSh7XHJcbiAgICAvLyByZXNwb25zZTogbWVudUxpc3QsXHJcbiAgICAvLyBzdGF0ZVxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLy8gUGFyc2UgdGhlIEpTT04gdG8gZ2V0IHRoZSBvYmplY3RcclxuICAgIGNvbnN0IG1lbnVEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIC8vIEFkZCB0aGUgbWVudSBpdGVtcyB0byBzb3VyY2UuZGF0YVxyXG4gICAgY29uc3QgbWVudSA9IHN0YXRlLnNvdXJjZS5kYXRhW2xpbmtdO1xyXG4gICAgT2JqZWN0LmFzc2lnbihtZW51LCB7XHJcbiAgICAgIGl0ZW1zOiBtZW51RGF0YS5pdGVtcyxcclxuICAgICAgaXNNZW51OiB0cnVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gMi4gZ2V0IGFuIGFycmF5IHdpdGggZWFjaCBpdGVtIGluIGpzb24gZm9ybWF0XHJcbiAgICAvLyBjb25zdCBpdGVtcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAvLyAzLiBhZGQgZGF0YSB0byBzb3VyY2VcclxuICAgIC8vIGNvbnN0IGN1cnJlbnRQYWdlRGF0YSA9IHN0YXRlLnNvdXJjZS5kYXRhW3JvdXRlXTtcclxuXHJcbiAgICAvLyBPYmplY3QuYXNzaWduKGN1cnJlbnRQYWdlRGF0YSwge1xyXG4gICAgLy8gaWQsXHJcbiAgICAvLyBpdGVtczogaXRlbXMsXHJcbiAgICAvLyBpc01lbnU6IHRydWUsXHJcbiAgICAvLyB9KTtcclxuICB9LFxyXG59O1xyXG5cclxuLy8gYWRkZWQgYnkgdGFpbW9vclxyXG5leHBvcnQgY29uc3QgZ2V0QWxscHJvcGVydGllc0hhbmRsZXIgPSB7XHJcbiAgbmFtZTogXCJwcm9wZXJ0aWVzXCIsXHJcbiAgcHJpb3JpdHk6IDE4LFxyXG4gIHBhdHRlcm46IFwiL3Byb3BlcnRpZXNcIixcclxuICBmdW5jOiBhc3luYyAoeyByb3V0ZSwgcGFyYW1zLCBzdGF0ZSwgbGlicmFyaWVzIH0pID0+IHtcclxuICAgIGNvbnN0IHsgYXBpIH0gPSBsaWJyYXJpZXMuc291cmNlO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcGFyYW1zO1xyXG5cclxuICAgIC8vIDEuIGZldGNoIHRoZSBkYXRhIHlvdSB3YW50IGZyb20gdGhlIGVuZHBvaW50IHBhZ2VcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldCh7XHJcbiAgICAgIGVuZHBvaW50OiBcInByb3BlcnRpZXNcIixcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgcGVyX3BhZ2U6IDEwMCwgLy8gVG8gbWFrZSBzdXJlIHdlIGdldCBhbGwgZWxlbWVudHNcclxuICAgICAgICBwYWdlOiBwYXJhbXMucGFnZSxcclxuICAgICAgICBfZW1iZWQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAyLiBnZXQgYW4gYXJyYXkgd2l0aCBlYWNoIGl0ZW0gaW4ganNvbiBmb3JtYXRcclxuICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGNvbnN0IHRvdGFsID0gbGlicmFyaWVzLnNvdXJjZS5nZXRUb3RhbChyZXNwb25zZSk7XHJcbiAgICBjb25zdCB0b3RhbFBhZ2VzID0gbGlicmFyaWVzLnNvdXJjZS5nZXRUb3RhbFBhZ2VzKHJlc3BvbnNlKTtcclxuXHJcbiAgICAvLyAzLiBhZGQgZGF0YSB0byBzb3VyY2VcclxuICAgIGNvbnN0IGN1cnJlbnRQYWdlRGF0YSA9IHN0YXRlLnNvdXJjZS5kYXRhW3JvdXRlXTtcclxuICAgIE9iamVjdC5hc3NpZ24oY3VycmVudFBhZ2VEYXRhLCB7XHJcbiAgICAgIGlkLFxyXG4gICAgICBpdGVtcyxcclxuICAgICAgdG90YWxQYWdlcyxcclxuICAgICAgdG90YWwsXHJcbiAgICB9KTtcclxuICB9LFxyXG59O1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcHJvcGVydGllc0hhbmRsZXIgPSB7XHJcbiAgbmFtZTogXCJwcm9wZXJ0eVwiLFxyXG4gIHByaW9yaXR5OiAxOCxcclxuICBwYXR0ZXJuOiBcIi9sYXRlc3QtcHJvcGVydGllcy86cGFnZVwiLFxyXG4gIGZ1bmM6IGFzeW5jICh7IHJvdXRlLCBwYXJhbXMsIHN0YXRlLCBsaWJyYXJpZXMgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBhcGkgfSA9IGxpYnJhcmllcy5zb3VyY2U7XHJcbiAgICBjb25zdCB7IGlkIH0gPSBwYXJhbXM7XHJcblxyXG4gICAgLy8gMS4gZmV0Y2ggdGhlIGRhdGEgeW91IHdhbnQgZnJvbSB0aGUgZW5kcG9pbnQgcGFnZVxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHtcclxuICAgICAgZW5kcG9pbnQ6IFwicHJvcGVydGllc1wiLFxyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBwZXJfcGFnZTogNiwgLy8gVG8gbWFrZSBzdXJlIHdlIGdldCBhbGwgZWxlbWVudHNcclxuICAgICAgICBwYWdlOiBwYXJhbXMucGFnZSxcclxuICAgICAgICBfZW1iZWQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAyLiBnZXQgYW4gYXJyYXkgd2l0aCBlYWNoIGl0ZW0gaW4ganNvbiBmb3JtYXRcclxuICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGNvbnN0IHRvdGFsID0gbGlicmFyaWVzLnNvdXJjZS5nZXRUb3RhbChyZXNwb25zZSk7XHJcbiAgICBjb25zdCB0b3RhbFBhZ2VzID0gbGlicmFyaWVzLnNvdXJjZS5nZXRUb3RhbFBhZ2VzKHJlc3BvbnNlKTtcclxuXHJcbiAgICAvLyAzLiBhZGQgZGF0YSB0byBzb3VyY2VcclxuICAgIGNvbnN0IGN1cnJlbnRQYWdlRGF0YSA9IHN0YXRlLnNvdXJjZS5kYXRhW3JvdXRlXTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKGN1cnJlbnRQYWdlRGF0YSwge1xyXG4gICAgICBpZCxcclxuICAgICAgaXRlbXMsXHJcbiAgICAgIHRvdGFsUGFnZXMsXHJcbiAgICAgIHRvdGFsLFxyXG4gICAgfSk7XHJcbiAgfSxcclxufTtcclxuZXhwb3J0IGNvbnN0IG1lZGlhSGFuZGxlciA9IHtcclxuICBuYW1lOiBcInNpdGUtbWVkaWFcIixcclxuICBwcmlvcml0eTogMTgsXHJcbiAgcGF0dGVybjogXCIvYWxsLW1lZGlhLzppZHNcIixcclxuICBmdW5jOiBhc3luYyAoeyByb3V0ZSwgcGFyYW1zLCBzdGF0ZSwgbGlicmFyaWVzIH0pID0+IHtcclxuICAgIGNvbnN0IHsgYXBpIH0gPSBsaWJyYXJpZXMuc291cmNlO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcGFyYW1zO1xyXG5cclxuICAgIC8vIDEuIGZldGNoIHRoZSBkYXRhIHlvdSB3YW50IGZyb20gdGhlIGVuZHBvaW50IHBhZ2VcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldCh7XHJcbiAgICAgIGVuZHBvaW50OiBcIm1lZGlhXCIsXHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIGluY2x1ZGU6IHBhcmFtcy5pZHMsIC8vIFRvIG1ha2Ugc3VyZSB3ZSBnZXQgYWxsIGVsZW1lbnRzXHJcbiAgICAgICAgcGVyX3BhZ2U6IDEwMCwgLy8gVG8gbWFrZSBzdXJlIHdlIGdldCBhbGwgZWxlbWVudHNcclxuICAgICAgICBfZW1iZWQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAyLiBnZXQgYW4gYXJyYXkgd2l0aCBlYWNoIGl0ZW0gaW4ganNvbiBmb3JtYXRcclxuICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGNvbnN0IHRvdGFsID0gbGlicmFyaWVzLnNvdXJjZS5nZXRUb3RhbChyZXNwb25zZSk7XHJcbiAgICBjb25zdCB0b3RhbFBhZ2VzID0gbGlicmFyaWVzLnNvdXJjZS5nZXRUb3RhbFBhZ2VzKHJlc3BvbnNlKTtcclxuXHJcbiAgICAvLyAzLiBhZGQgZGF0YSB0byBzb3VyY2VcclxuICAgIGNvbnN0IGN1cnJlbnRQYWdlRGF0YSA9IHN0YXRlLnNvdXJjZS5kYXRhW3JvdXRlXTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKGN1cnJlbnRQYWdlRGF0YSwge1xyXG4gICAgICBpZCxcclxuICAgICAgaXRlbXMsXHJcbiAgICAgIHRvdGFsUGFnZXMsXHJcbiAgICAgIHRvdGFsLFxyXG4gICAgfSk7XHJcbiAgfSxcclxufTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/frontity-chakra-theme/src/utils/handlers.js\n");

/***/ })

})