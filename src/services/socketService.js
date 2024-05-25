import {io} from 'socket.io-client';
import VARIABLES from '../../environmentVariables';

let socket;

export const initialSocketConnection=(token)=>{
    socket= io(VARIABLES.API_URL_REMOTE,{
        query:{token},
        transports:['websocket']
    });

    console.log('Connection socket...');

    socket.on('connect',()=>{
        console.log('Socket connected');
    });

    socket.on('disconnect',()=>{
        console.log('Socket disconnected');
    });
};

export const disconnectSocket=()=>{
    console.log('Disconnecting socket...');
    if(socket)
        socket.disconnect();
}

export const subscribeToChat=(cb)=>{
    if(!socket) return;
    socket.on('chat-message',(msg)=>{
        console.log('WebSocket event received!');
        return cb(null,msg)
    })
};

export const sendMessage=(roomId,message)=>{
    if(socket)
        socket.emit('chat-message',{roomId,message});
};

export const joinRoom=(roomId)=>{
    if(socket){
        socket.emit('join-room',roomId);
    }
}