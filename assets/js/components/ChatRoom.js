export default class ChatRoom extends React.Component {
	render() {
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
};