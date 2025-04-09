
import { ADDING, ADDING_ROOM, AFFICH_ROOMS,  AUTHORIZED,  LOG_OUT, LOGGING, RESERVING } from "./actionTypes";



const initialState = {
    users: [],
    reservations:[],
    rooms: [],       // Liste des chambres
    
    token: localStorage.getItem("token"),
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {

    case ADDING:
        // localStorage.setItem("token", action.payload.token);
        return {...state , users: action.payload.newUser};
        case RESERVING:
       
          return{...state, reservation:action.payload.newReservation}
          case LOGGING :
            localStorage.setItem("token", action.payload.token);
            return {...state, users:action.payload.user , token: action.payload.token }
            case LOG_OUT :
              localStorage.removeItem("token")
              return{...state, users:null , token : null}

              case AFFICH_ROOMS:
            return {...state,rooms: action.payload };// Mettez à jour la liste des chambres 
       
             case ADDING_ROOM:
             return {...state, rooms: action.payload.newRoom}
             case AUTHORIZED:
              return {...state, users: action.payload.user}

             
        default:
      return state;
    }} ;

    export default reducer