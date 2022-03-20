
import React, { useState, useEffect, useRef } from 'react';
import { socket } from '../../services/socket';
import $ from 'jquery';
import './chatui.css'
import io from "socket.io-client";
import axios from 'axios';
import { useParams } from 'react-router';
const SERVER = "http://localhost:8082";

export default function Chat() {


	const { userid } = useParams();
	const [message, setMessage] = useState("");
	const [messageList, setMessageList] = useState([]);
	const [arrivalMessage, setArrivalMessage] = useState("");
	const scrollRef = useRef();
	var socket = io(SERVER);

	const handleChange = (event) => {
		setMessage(event.target.value)
	};
	useEffect(() => {
		if (localStorage.getItem("currentUser_id")) {
			socket.emit("add-user", localStorage.getItem("currentUser_id"))
		}
	}, [])
	const handleNewUserMessage = async () => {
		await axios.post("http://localhost:8082/message/addMessage", {
			from: localStorage.getItem("currentUser_id"),
			to: userid,
			message: message
		})

		socket.emit("send-msg", {
			from: localStorage.getItem("currentUser_id"),
			to: userid,
			message: message
		})

		const msgs = [...messageList];
		msgs.push({ fromSelf: true, message: message });
		setMessageList(msgs);
		console.log("msgs", msgs, message)
		setMessage("");

	};
	useEffect(() => {
		if (socket) {
			socket.on("msg-recieve", (msg) => {
				console.log("receive msg", msg)
				setArrivalMessage({ fromSelf: false, message: msg });
			});
		}
	}, [socket])

	useEffect(() => {
		arrivalMessage && setMessageList((prev) => [...prev, arrivalMessage]);
		console.log("arrivalMessage")

	}, [arrivalMessage])

	useEffect(()=>{
		window.HTMLElement.prototype.scrollIntoView =messageList;

	},[messageList])



	useEffect(() => {
		getData();
	}, [userid]);
	const getData = async () => {
		const response = await axios.post('http://localhost:8082/message/getAllMessage', {
			from: localStorage.getItem("currentUser_id"),
			to: userid
		});
		console.log("response", response)
		setMessageList(response.data.result)
	};
	console.log("messageList", messageList)

	console.log("userid", userid);
	return (
		<div className='col-lg-12'>


			<div className="main-chat-div col-lg-9">
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
									if (item.fromSelf===true) {
										return (
											<li
												className="replies"
												key={id}>
												<div
													style={{ fontWeight: 'bold', letterSpacing: '0.8px' }}>
													{item.name}
												</div>
												<br />
												<p>{item.message}</p>
											</li>
										);
									} else if (item.name==="server") {
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
					style={{ marginTop: '20px' }}>
					<div class="wrap">
						<input type="text"
							id='msg'
							onChange={handleChange}
							value={message}
							placeholder="Write your message..." />
						<button
							className="send-button"
							type='button'
							// disabled={this.state.message.length === 0}
							onClick={handleNewUserMessage}>
							{/* <i className="fa fa-paper-plane" aria-hidden="true"></i> */}
							send
						</button>
					</div>
				</div>
			</div>
		</div>
	)

}