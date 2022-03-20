/* eslint-disable */
import socketIOClient from 'socket.io-client';
export const socket = socketIOClient("http://localhost:8082", {
	transportOptions: { polling: { extraHeaders: { Accept: '*/*' } } },
});
