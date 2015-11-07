var LoginForm  = React.createClass({
	render: function() {
		return (
			<div className="row block--login">
			     <div className="col-xs-4 col-xs-offset-4">
			        <h2>進入聊天室</h2>
			        <div className="form-group">
			          	<label>暱稱 *</label>
			          	<input className="form-control" name="name" type="text" />
			        </div>
			        
			        <div className="form-group">
			          	<label>身高</label>
			          	<select className="form-control" name="height"></select>
			        </div>
			        
			        <div className="form-group">
			          	<label>體重</label>
			          	<select className="form-control" name="weight"></select>
			        </div>
			        
			        <div className="form-group">
			          	<label>年齡</label>
			          	<select className="form-control" name="age"></select>
			        </div>
			        
			        <div className="form-group">
			          	<label>地區 *</label>
			          	<select className="form-control" name="location"></select>
			        </div>
			        
			        <button className="btn btn-primary btn-block btn--login">進入</button>
			    </div>
			</div>
		);
	}
});

var ChatRoom = React.createClass({
	render: function() {
		return (
		    <div className="row block--chat" style={{ display: 'none' }}>
		      
		      <div className="col-xs-6">
		        <form className="form-group form--message">
		          <label className="block--target">告訴所有人</label>
		          <button type="button" className="btn btn--clear-target">清除對象</button>
		          <input type="text" className="form-control" name="message" placeholder="說說話吧" />
		          <button type="submit" className="btn">送出</button>
		        </form>

		        <div className="block--messages"></div>
		      </div>

		      <div className="col-xs-3">
		        <h2>頻道</h2>
		        <div className="block--channels"></div>
		      </div>

		      <div className="col-xs-3">
		        <button className="btn btn-block btn--logout">離開聊天</button>
		        <h2>聊天成員</h2>
		        <div className="block--users"></div>
		      </div>

		    </div>
		);
	}
});


var Main = React.createClass({
    render: function() {
        return (
			 <div className="container-fluid">
			  	<LoginForm />
			  	<ChatRoom />
			 </div>
        );
    }
});

ReactDOM.render(
  <Main />,
  document.getElementById('main')
);