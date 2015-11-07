import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './components/LoginForm';
import ChatRoom from './components/ChatRoom';

class Main extends React.Component {
    render() {
        return (
			<div className="container-fluid">
			  	<LoginForm />
			  	<ChatRoom />
			</div>
        );
    }
};

ReactDOM.render(
  <Main />,
  document.getElementById('main')
);
