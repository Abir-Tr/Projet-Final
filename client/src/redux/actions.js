import axios from "axios";
import { ADDING, ADDING_ROOM, AFFICH_ROOMS, LOG_OUT, LOGGING, RESERVING } from "./actionTypes";

export const adding_user = (newUser) => async (dispatch) => {
  try {
    const res = await axios.post(`/users/addUser`, newUser);

    dispatch({ type: ADDING, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

export const reserving = (newReservation) => async (dispatch) => {
  try {
    const res = await axios.post(`/reservation/reserve`, newReservation);

    dispatch({ type: RESERVING, payload: res.data });
  } catch (error) {
    console.error(error);
  }
  }
    export const logging =(user)=> async(dispatch)=>{
      try {
        const res= await axios.post(`/users/login`,user)
        dispatch({type:LOGGING, payload:res.data})
        
      } catch (error) {
        console.error(error);
        
      }
    }

    export const log_out =()=> (dispatch)=> {

      dispatch({type : LOG_OUT})
   
    
  }
  export const affich_Rooms = () => async (dispatch) => {
    try {
        const res = await axios.get(`/rooms/afficherRooms`); 
           dispatch({type:AFFICH_ROOMS, payload:res.data})
        
    } catch (error) {
      console.error(error);
    }
}

export const adding_room=(newRoom)=>async(dispatch)=>{
  try {
    const res= await axios.post(`/rooms/addRoom`)
    dispatch({type:ADDING_ROOM, payload:res.data, newRoom})
  } catch (error) {
    console.error(error);
  }
}