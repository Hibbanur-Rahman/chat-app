import {createSlice} from '@reduxjs/toolkit';

const chatSlice=createSlice({
    name:'chat',
    initialState:{
        roomId:null,
        chats:[],
        username:null,
    },
    reducers:{
        setRoomId:(state,action)=>{
            state.roomId=action.payload;
        },
        setUsername:(state,action)=>{
            state.username=action.payload;
        },
        setChats:(state,action)=>{
            state.chats=action.payload;
        }
    },
});

export const {setRoomId,setChats,setUsername}=chatSlice.actions;
export default chatSlice.reducer;