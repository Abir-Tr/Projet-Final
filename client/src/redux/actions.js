import axios from "axios";
import { ADDING, ADDING_ROOM, AFFICH_ROOMS, AUTHORIZED, LOG_OUT, LOGGING, RESERVING, SET_IMAGE } from "./actionTypes";

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
           dispatch({type:AFFICH_ROOMS, payload:res.data.rooms})
        
    } catch (error) {
      console.error(error);
    }
}

export const adding_room=(newRoom)=>async(dispatch)=>{
  
  try {
  
    const res= await axios.post(`/rooms/addRoom` , newRoom)
    dispatch({type:ADDING_ROOM, payload:res.data})
    console.log(res.data)
  } catch (error) {
    console.error(error);
  }
}

export const authorized =()=> async(dispatch)=>{
  try {
    const config={
      headers: {autorisation:localStorage.getItem("token")}
    }
   
    const res= await axios.get(`/users/isAuth`,config)
    console.log(res.data)
    dispatch({type:AUTHORIZED,payload: res.data})
  } catch (error) {
    
  }
}

export const uploadImage = (formData)=> async(dispatch)=> {
  try {
    const res = await axios.post('rooms/upload', formData, {headers:{'Content-Type': 'multipart/form-data',}});
    dispatch({type: SET_IMAGE, payload:res.data})
    return res.data;

  } catch (error) {
    console.error("error in uploading image", error)
  }
}