(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_schir_Documents_DomesticsProjects_js_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),C_Users_schir_Documents_DomesticsProjects_js_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),C_Users_schir_Documents_DomesticsProjects_js_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9),C_Users_schir_Documents_DomesticsProjects_js_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_Screen_Screen__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8),_Keypad_Keypad__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(7),Calculator=function(_React$Component){Object(C_Users_schir_Documents_DomesticsProjects_js_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(Calculator,_React$Component);var _super=Object(C_Users_schir_Documents_DomesticsProjects_js_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator);function Calculator(){var _this;Object(C_Users_schir_Documents_DomesticsProjects_js_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),_this.state={equation:"",result:0},_this.onButtonPress=function(event){var equation=_this.state.equation,pressedButton=event.target.innerHTML;if("C"===pressedButton)return _this.clear();if(pressedButton>="0"&&pressedButton<="9"||"."===pressedButton)equation+=pressedButton;else if(-1!==["+","-","*","/","%"].indexOf(pressedButton))equation+=" "+pressedButton+" ";else if("="===pressedButton)try{var evalResult=eval(equation),result=Number.isInteger(evalResult)?evalResult:evalResult.toFixed(2);_this.setState({result:result})}catch(error){alert("Invalid Mathematical Equation")}else equation=equation.trim(),equation=equation.substr(0,equation.length-1);_this.setState({equation:equation})},_this}return Object(C_Users_schir_Documents_DomesticsProjects_js_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"clear",value:function(){this.setState({equation:"",result:0})}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("main",{className:"calculator"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Screen_Screen__WEBPACK_IMPORTED_MODULE_5__.a,{equation:this.state.equation,result:this.state.result}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Keypad_Keypad__WEBPACK_IMPORTED_MODULE_6__.a,{onButtonPress:this.onButtonPress}))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);__webpack_exports__.a=Calculator},,,,function(e,t,_){"use strict";var r=_(0),s=_.n(r),n=function(e){return s.a.createElement("div",{className:"keypad__row"},e.children)},a=function(e){var t=["btn"];return"undefined"!==typeof e&&"undefined"!==typeof e.type&&t.push("btn--"+e.type),s.a.createElement("button",{className:t.join(" "),onClick:e.onButtonPress},e.children)},o=function(e){return s.a.createElement(a,Object.assign({type:"large"},e))};t.a=function(e){return s.a.createElement("section",{className:"keypad"},s.a.createElement(n,null,s.a.createElement(a,{type:"primary",onButtonPress:e.onButtonPress},"C"),s.a.createElement(a,{type:"primary",onButtonPress:e.onButtonPress},"\u2190"),s.a.createElement(a,{type:"operator",onButtonPress:e.onButtonPress},"%"),s.a.createElement(a,{type:"operator",onButtonPress:e.onButtonPress},"/")),s.a.createElement(n,null,s.a.createElement(a,{onButtonPress:e.onButtonPress},"7"),s.a.createElement(a,{onButtonPress:e.onButtonPress},"8"),s.a.createElement(a,{onButtonPress:e.onButtonPress},"9"),s.a.createElement(a,{type:"operator",onButtonPress:e.onButtonPress},"*")),s.a.createElement(n,null,s.a.createElement(a,{onButtonPress:e.onButtonPress},"4"),s.a.createElement(a,{onButtonPress:e.onButtonPress},"5"),s.a.createElement(a,{onButtonPress:e.onButtonPress},"6"),s.a.createElement(a,{type:"operator",onButtonPress:e.onButtonPress},"-")),s.a.createElement(n,null,s.a.createElement(a,{onButtonPress:e.onButtonPress},"1"),s.a.createElement(a,{onButtonPress:e.onButtonPress},"2"),s.a.createElement(a,{onButtonPress:e.onButtonPress},"3"),s.a.createElement(a,{type:"operator",onButtonPress:e.onButtonPress},"+")),s.a.createElement(n,null,s.a.createElement(a,{onButtonPress:e.onButtonPress},"0"),s.a.createElement(a,{onButtonPress:e.onButtonPress},"."),s.a.createElement(o,{onButtonPress:e.onButtonPress},"=")))}},function(e,t,_){"use strict";var r=_(0),s=_.n(r),n=function(e){return s.a.createElement("div",{className:"result-screen"},e.children)},a=function(e){return s.a.createElement("div",{className:"computation-screen"},e.children)};t.a=function(e){return s.a.createElement("section",{className:"screen"},s.a.createElement(n,null,e.result),s.a.createElement(a,null,e.equation))}},,function(e,t,_){e.exports=_(16)},,,,,function(e,t,_){},function(e,t,_){"use strict";_.r(t);var r=_(0),s=_.n(r),n=_(2),a=_.n(n),o=(_(15),_(3)),u=function(){return s.a.createElement("div",{className:"app"},s.a.createElement(o.a,null))};a.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(u,null)),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.1d270107.chunk.js.map