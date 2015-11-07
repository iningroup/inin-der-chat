(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _LoginForm = require('./components/LoginForm');

var _LoginForm2 = _interopRequireDefault(_LoginForm);

var _ChatRoom = require('./components/ChatRoom');

var _ChatRoom2 = _interopRequireDefault(_ChatRoom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = (function (_React$Component) {
    _inherits(Main, _React$Component);

    function Main() {
        _classCallCheck(this, Main);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Main).apply(this, arguments));
    }

    _createClass(Main, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'container-fluid' },
                _react2.default.createElement(_LoginForm2.default, null),
                _react2.default.createElement(_ChatRoom2.default, null)
            );
        }
    }]);

    return Main;
})(_react2.default.Component);

;

_reactDom2.default.render(_react2.default.createElement(Main, null), document.getElementById('main'));

},{"./components/ChatRoom":2,"./components/LoginForm":3,"react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatRoom = (function (_React$Component) {
	_inherits(ChatRoom, _React$Component);

	function ChatRoom() {
		_classCallCheck(this, ChatRoom);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ChatRoom).apply(this, arguments));
	}

	_createClass(ChatRoom, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "row block--chat", style: { display: 'none' } },
				React.createElement(
					"div",
					{ className: "col-xs-6" },
					React.createElement(
						"form",
						{ className: "form-group form--message" },
						React.createElement(
							"label",
							{ className: "block--target" },
							"告訴所有人"
						),
						React.createElement(
							"button",
							{ type: "button", className: "btn btn--clear-target" },
							"清除對象"
						),
						React.createElement("input", { type: "text", className: "form-control", name: "message", placeholder: "說說話吧" }),
						React.createElement(
							"button",
							{ type: "submit", className: "btn" },
							"送出"
						)
					),
					React.createElement("div", { className: "block--messages" })
				),
				React.createElement(
					"div",
					{ className: "col-xs-3" },
					React.createElement(
						"h2",
						null,
						"頻道"
					),
					React.createElement("div", { className: "block--channels" })
				),
				React.createElement(
					"div",
					{ className: "col-xs-3" },
					React.createElement(
						"button",
						{ className: "btn btn-block btn--logout" },
						"離開聊天"
					),
					React.createElement(
						"h2",
						null,
						"聊天成員"
					),
					React.createElement("div", { className: "block--users" })
				)
			);
		}
	}]);

	return ChatRoom;
})(React.Component);

exports.default = ChatRoom;
;

},{}],3:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginForm = (function (_React$Component) {
	_inherits(LoginForm, _React$Component);

	function LoginForm() {
		_classCallCheck(this, LoginForm);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(LoginForm).apply(this, arguments));
	}

	_createClass(LoginForm, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "row block--login" },
				React.createElement(
					"div",
					{ className: "col-xs-4 col-xs-offset-4" },
					React.createElement(
						"h2",
						null,
						"進入聊天室"
					),
					React.createElement(
						"div",
						{ className: "form-group" },
						React.createElement(
							"label",
							null,
							"暱稱 *"
						),
						React.createElement("input", { className: "form-control", name: "name", type: "text" })
					),
					React.createElement(
						"div",
						{ className: "form-group" },
						React.createElement(
							"label",
							null,
							"身高"
						),
						React.createElement("select", { className: "form-control", name: "height" })
					),
					React.createElement(
						"div",
						{ className: "form-group" },
						React.createElement(
							"label",
							null,
							"體重"
						),
						React.createElement("select", { className: "form-control", name: "weight" })
					),
					React.createElement(
						"div",
						{ className: "form-group" },
						React.createElement(
							"label",
							null,
							"年齡"
						),
						React.createElement("select", { className: "form-control", name: "age" })
					),
					React.createElement(
						"div",
						{ className: "form-group" },
						React.createElement(
							"label",
							null,
							"地區 *"
						),
						React.createElement("select", { className: "form-control", name: "location" })
					),
					React.createElement(
						"button",
						{ className: "btn btn-primary btn-block btn--login" },
						"進入"
					)
				)
			);
		}
	}]);

	return LoginForm;
})(React.Component);

exports.default = LoginForm;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvanMvYXBwLmpzIiwiYXNzZXRzL2pzL2NvbXBvbmVudHMvQ2hhdFJvb20uanMiLCJhc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDS00sSUFBSTtjQUFKLElBQUk7O2FBQUosSUFBSTs4QkFBSixJQUFJOztzRUFBSixJQUFJOzs7aUJBQUosSUFBSTs7aUNBQ0c7QUFDTCxtQkFDTDs7a0JBQUssU0FBUyxFQUFDLGlCQUFpQjtnQkFDN0Isd0RBQWE7Z0JBQ2IsdURBQVk7YUFDVCxDQUNDO1NBQ0w7OztXQVJDLElBQUk7R0FBUyxnQkFBTSxTQUFTOztBQVNqQyxDQUFDOztBQUVGLG1CQUFTLE1BQU0sQ0FDYiw4QkFBQyxJQUFJLE9BQUcsRUFDUixRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUNoQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztJQ25CbUIsUUFBUTtXQUFSLFFBQVE7O1VBQVIsUUFBUTt3QkFBUixRQUFROztnRUFBUixRQUFROzs7Y0FBUixRQUFROzsyQkFDbkI7QUFDUixVQUNJOztNQUFLLFNBQVMsRUFBQyxpQkFBaUIsRUFBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEFBQUM7SUFFMUQ7O09BQUssU0FBUyxFQUFDLFVBQVU7S0FDdkI7O1FBQU0sU0FBUyxFQUFDLDBCQUEwQjtNQUN4Qzs7U0FBTyxTQUFTLEVBQUMsZUFBZTs7T0FBYztNQUM5Qzs7U0FBUSxJQUFJLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyx1QkFBdUI7O09BQWM7TUFDckUsK0JBQU8sSUFBSSxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsY0FBYyxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsV0FBVyxFQUFDLE1BQU0sR0FBRztNQUNoRjs7U0FBUSxJQUFJLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxLQUFLOztPQUFZO01BQzVDO0tBRVAsNkJBQUssU0FBUyxFQUFDLGlCQUFpQixHQUFPO0tBQ25DO0lBRU47O09BQUssU0FBUyxFQUFDLFVBQVU7S0FDdkI7Ozs7TUFBVztLQUNYLDZCQUFLLFNBQVMsRUFBQyxpQkFBaUIsR0FBTztLQUNuQztJQUVOOztPQUFLLFNBQVMsRUFBQyxVQUFVO0tBQ3ZCOztRQUFRLFNBQVMsRUFBQywyQkFBMkI7O01BQWM7S0FDM0Q7Ozs7TUFBYTtLQUNiLDZCQUFLLFNBQVMsRUFBQyxjQUFjLEdBQU87S0FDaEM7SUFFRixDQUNSO0dBQ0Y7OztRQTdCbUIsUUFBUTtHQUFTLEtBQUssQ0FBQyxTQUFTOztrQkFBaEMsUUFBUTtBQThCNUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUM5Qm1CLFNBQVM7V0FBVCxTQUFTOztVQUFULFNBQVM7d0JBQVQsU0FBUzs7Z0VBQVQsU0FBUzs7O2NBQVQsU0FBUzs7MkJBQ3BCO0FBQ1IsVUFDQzs7TUFBSyxTQUFTLEVBQUMsa0JBQWtCO0lBQzVCOztPQUFLLFNBQVMsRUFBQywwQkFBMEI7S0FDdEM7Ozs7TUFBYztLQUNkOztRQUFLLFNBQVMsRUFBQyxZQUFZO01BQ3hCOzs7O09BQW1CO01BQ25CLCtCQUFPLFNBQVMsRUFBQyxjQUFjLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsTUFBTSxHQUFHO01BQ3ZEO0tBRU47O1FBQUssU0FBUyxFQUFDLFlBQVk7TUFDeEI7Ozs7T0FBaUI7TUFDakIsZ0NBQVEsU0FBUyxFQUFDLGNBQWMsRUFBQyxJQUFJLEVBQUMsUUFBUSxHQUFVO01BQ3JEO0tBRU47O1FBQUssU0FBUyxFQUFDLFlBQVk7TUFDeEI7Ozs7T0FBaUI7TUFDakIsZ0NBQVEsU0FBUyxFQUFDLGNBQWMsRUFBQyxJQUFJLEVBQUMsUUFBUSxHQUFVO01BQ3JEO0tBRU47O1FBQUssU0FBUyxFQUFDLFlBQVk7TUFDeEI7Ozs7T0FBaUI7TUFDakIsZ0NBQVEsU0FBUyxFQUFDLGNBQWMsRUFBQyxJQUFJLEVBQUMsS0FBSyxHQUFVO01BQ2xEO0tBRU47O1FBQUssU0FBUyxFQUFDLFlBQVk7TUFDeEI7Ozs7T0FBbUI7TUFDbkIsZ0NBQVEsU0FBUyxFQUFDLGNBQWMsRUFBQyxJQUFJLEVBQUMsVUFBVSxHQUFVO01BQ3ZEO0tBRU47O1FBQVEsU0FBUyxFQUFDLHNDQUFzQzs7TUFBWTtLQUNsRTtJQUNKLENBQ0w7R0FDRjs7O1FBbkNtQixTQUFTO0dBQVMsS0FBSyxDQUFDLFNBQVM7O2tCQUFqQyxTQUFTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi9jb21wb25lbnRzL0xvZ2luRm9ybSc7XG5pbXBvcnQgQ2hhdFJvb20gZnJvbSAnLi9jb21wb25lbnRzL0NoYXRSb29tJztcblxuY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cblx0XHRcdCAgXHQ8TG9naW5Gb3JtIC8+XG5cdFx0XHQgIFx0PENoYXRSb29tIC8+XG5cdFx0XHQ8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxNYWluIC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpXG4pO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhdFJvb20gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYmxvY2stLWNoYXRcIiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0+XG5cdFx0ICAgICAgXG5cdFx0ICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNlwiPlxuXHRcdCAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBmb3JtLS1tZXNzYWdlXCI+XG5cdFx0ICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jay0tdGFyZ2V0XCI+5ZGK6Ki05omA5pyJ5Lq6PC9sYWJlbD5cblx0XHQgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi0tY2xlYXItdGFyZ2V0XCI+5riF6Zmk5bCN6LGhPC9idXR0b24+XG5cdFx0ICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJtZXNzYWdlXCIgcGxhY2Vob2xkZXI9XCLoqqroqqroqbHlkKdcIiAvPlxuXHRcdCAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG5cIj7pgIHlh7o8L2J1dHRvbj5cblx0XHQgICAgICAgIDwvZm9ybT5cblxuXHRcdCAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay0tbWVzc2FnZXNcIj48L2Rpdj5cblx0XHQgICAgICA8L2Rpdj5cblxuXHRcdCAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTNcIj5cblx0XHQgICAgICAgIDxoMj7poLvpgZM8L2gyPlxuXHRcdCAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay0tY2hhbm5lbHNcIj48L2Rpdj5cblx0XHQgICAgICA8L2Rpdj5cblxuXHRcdCAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTNcIj5cblx0XHQgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibG9jayBidG4tLWxvZ291dFwiPumboumWi+iBiuWkqTwvYnV0dG9uPlxuXHRcdCAgICAgICAgPGgyPuiBiuWkqeaIkOWToTwvaDI+XG5cdFx0ICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLS11c2Vyc1wiPjwvZGl2PlxuXHRcdCAgICAgIDwvZGl2PlxuXG5cdFx0ICAgIDwvZGl2PlxuXHRcdCk7XG5cdH1cbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5Gb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBibG9jay0tbG9naW5cIj5cblx0XHRcdCAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNCBjb2wteHMtb2Zmc2V0LTRcIj5cblx0XHRcdCAgICAgICAgPGgyPumAsuWFpeiBiuWkqeWupDwvaDI+XG5cdFx0XHQgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0ICAgICAgICAgIFx0PGxhYmVsPuaaseeosSAqPC9sYWJlbD5cblx0XHRcdCAgICAgICAgICBcdDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgLz5cblx0XHRcdCAgICAgICAgPC9kaXY+XG5cdFx0XHQgICAgICAgIFxuXHRcdFx0ICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdCAgICAgICAgICBcdDxsYWJlbD7ouqvpq5g8L2xhYmVsPlxuXHRcdFx0ICAgICAgICAgIFx0PHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiaGVpZ2h0XCI+PC9zZWxlY3Q+XG5cdFx0XHQgICAgICAgIDwvZGl2PlxuXHRcdFx0ICAgICAgICBcblx0XHRcdCAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHQgICAgICAgICAgXHQ8bGFiZWw+6auU6YeNPC9sYWJlbD5cblx0XHRcdCAgICAgICAgICBcdDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIndlaWdodFwiPjwvc2VsZWN0PlxuXHRcdFx0ICAgICAgICA8L2Rpdj5cblx0XHRcdCAgICAgICAgXG5cdFx0XHQgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0ICAgICAgICAgIFx0PGxhYmVsPuW5tOm9oTwvbGFiZWw+XG5cdFx0XHQgICAgICAgICAgXHQ8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJhZ2VcIj48L3NlbGVjdD5cblx0XHRcdCAgICAgICAgPC9kaXY+XG5cdFx0XHQgICAgICAgIFxuXHRcdFx0ICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdCAgICAgICAgICBcdDxsYWJlbD7lnLDljYAgKjwvbGFiZWw+XG5cdFx0XHQgICAgICAgICAgXHQ8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJsb2NhdGlvblwiPjwvc2VsZWN0PlxuXHRcdFx0ICAgICAgICA8L2Rpdj5cblx0XHRcdCAgICAgICAgXG5cdFx0XHQgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBidG4tLWxvZ2luXCI+6YCy5YWlPC9idXR0b24+XG5cdFx0XHQgICAgPC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59Il19
