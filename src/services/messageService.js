import axios from "axios";
import VARIABLES from "../../environmentVariables";


export const fetchMessages=async(roomId)=>{
    try{

        const response=await axios.get(`${VARIABLES.API_URL_REMOTE}/messages/${roomId}`);
        return response.data;
    }catch(error){
        console.error("Error fetching messages:",error);
        
    }
}