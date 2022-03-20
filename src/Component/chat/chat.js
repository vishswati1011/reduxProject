
import React, { Component, Fragment } from 'react';
import { socket } from '../../services/socket';
import $ from 'jquery';
import './chatui.css'
import socketClient  from "socket.io-client";
const SERVER = "http://localhost:8082";

export default class extends Component {
    constructor(props) {
		super(props);
		this.state = {
			messageList: [],
			message: '',
            profiledata:localStorage.getItem('fName'),
            data:{
                room: 1,
                email: localStorage.getItem("email"),
                name: localStorage.getItem('fName'),
            }
		};
		var socket = socketClient (SERVER);
		// var socket = socketClient('http://localhost:8082', { transports : ['websocket'] });

         // profiledata:{this.props.Header.profiledata}
			// 						users={this.props.Header.users}
			// 						data={{
			// 							room: this.props.match.params.subid,
			// 							email: this.props.Header.profiledata.email,
			// 							name: this.props.Header.profiledata.username,
			// 						}}
			socket.on('connection', () => {
				console.log(`I'm connected with the back-end`);
		});
		
	}

    handleChange = (event) => {
		this.setState({ message: [event.target.value] });
	};
	handleNewUserMessage = () => {
		console.log("click")
		$('#msg').val('');

		let data = {
			email:  localStorage.getItem("email"),
			text: this.state.message,
		};
		socket.emit('createMessage', data, (err) => {
			console.log("createMessage");
			if (err) {
				console.error(err);
			}
		});
		this.setState({ message: '' });
	};
	componentDidUpdate(prevProps, prevState) {
		if (this.props !== prevProps) {
			var div = document.getElementById('msg_history');
			div.scrollTop = div.scrollHeight - div.clientHeight;
		}
	}
	componentDidMount() {
		 var data={
			room: 1,
			email: localStorage.getItem("email"),
			name: localStorage.getItem('fName'),
		}
		socket.emit('join',data);
		socket.on('oldMessages', (data) => {
			console.log("oldMessages",data)
			if (data) {
				this.setState({ messageList: data.messages });
			}
		});
		socket.on('newMessage', (data) => {
			console.log("newMessage",data)

			var messages = this.state.messageList;
			this.state.messageList.push(data.message);
			this.setState({ messageList: messages });
		});
	}
    render(){
        const messageList = this.state.messageList;
		console.log("messageList",messageList);
    return (
        <div className="main-chat-div">
				<div id="chat-frame">
					<div className="chat-content">
						<div className="contact-profile">
							<p>Chat</p>
						</div>
					</div>
				<div className='chat-messages'>
					<div>  
						<div				
							id='msg_history'>
							{messageList.map((item, id) => {
								if ( localStorage.getItem("fName") == item.name) {
									return (
										<li
										className="replies"
											key={id}>
											<div
												style={{ fontWeight: 'bold', letterSpacing: '0.8px' }}>
												{item.name}
											</div>
											<br/>
											<p>{item.message}</p>
										</li>
									);
								} else if (item.name == 'server') {
									return (
										<div align='center' className='text-muted' key={id}>
											{item.message}
										</div>
									);
								} else {
									return (
										<li className='incoming_msg sent'>
											<div className=''>
												<div className=''>
													<div>{item.name}</div>
													
													<p>{item.message}</p>
												</div>
											</div>
										</li>
									);
								}
							})}
						</div>
						</div>
						</div>
					
				</div>
				<div className='chat-message-input'
						style={{marginTop:'20px'}}>
						<div class="wrap">
						<input type="text" 
						id='msg'
						onChange={(e) => this.handleChange(e)}
						placeholder="Write your message..." />
							<button
							className="send-button"
								type='button'
								disabled={this.state.message.length === 0}
								onClick={this.handleNewUserMessage}>
								{/* <i className="fa fa-paper-plane" aria-hidden="true"></i> */}
								send
							</button>
						</div>
					</div>
			</div>
    )
}
}