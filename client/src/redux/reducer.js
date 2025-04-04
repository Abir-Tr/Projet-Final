
import { ADDING } from "./actionTypes";



const initialState = {
    users: [],
    reservations[],
    token: localStorage.getItem("token"),
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {

    case ADDING:
        localStorage.setItem("token", action.payload.token);
        console.log("refka")
        return {...state , users: action.payload.newUser , token: action.payload.token }

        default:
      return state;
    }} ;

    export default reducer