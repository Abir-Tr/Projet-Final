import axios from "axios";
import { ADDING, FETCH_ROOMS, FETCH_ROOMS_ERROR, LOG_OUT, LOGGING, RESERVING } from "./actionTypes";

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
  export const fetchRooms = () => async (dispatch) => {
    try {
        const response = await axios.get(`/rooms/afficherRooms`); // Assurez-vous que l'URL correspond à ton backend
        dispatch({
            type: FETCH_ROOMS,
            payload: response.data,  // Données des chambres
        });
    } catch (error) {
        dispatch({
            type: FETCH_ROOMS_ERROR,
            payload: error.message,  // Message d'erreur si l'appel échoue
        });
    }
};