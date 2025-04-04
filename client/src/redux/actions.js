import axios from "axios";
import { ADDING, RESERVING } from "./actionTypes";



 export const adding_user=(newUser)=> async(dispatch)=>{
    try {
        
        const res=await axios.post(`/users/addUser`,newUser)
        
         dispatch({type:ADDING ,payload: res.data })
    } catch (error) {
        console.error(error);
    }

 }

 export const  reserving=(newReservation)=>async(dispatch)=>{
    try {
        const res= await axios.post(`/reservation/reserve`, newReservation)
        dispatch({type:RESERVING, payload:res.data})
    } catch (error) {
        console.error(error);
        
    }
 }