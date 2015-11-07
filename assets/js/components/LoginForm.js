export default class LoginForm extends React.Component {
	render() {
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
}