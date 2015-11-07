var LoginForm = React.createClass({
	render: function () {
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
});

var ChatRoom = React.createClass({
	render: function () {
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
});

var Main = React.createClass({
	render: function () {
		return React.createElement(
			"div",
			{ className: "container-fluid" },
			React.createElement(LoginForm, null),
			React.createElement(ChatRoom, null)
		);
	}
});

ReactDOM.render(React.createElement(Main, null), document.getElementById('main'));