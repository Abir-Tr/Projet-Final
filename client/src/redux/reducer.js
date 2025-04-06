
import { ADDING, FETCH_ROOMS, FETCH_ROOMS_ERROR, LOG_OUT, LOGGING, RESERVING } from "./actionTypes";



const initialState = {
  
    users: [],
    reservations:[],
    rooms: [],       // Liste des chambres
    error: null,
    token: localStorage.getItem("token"),
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {

    case ADDING:
        localStorage.setItem("token", action.payload.token);
        return {...state , users: action.payload.newUser , token: action.payload.token };
        case RESERVING:
       
          return{...state, reservation:action.payload.newReservation}
          case LOGGING :
            localStorage.setItem("token", action.payload.token);
            return {...state, users:action.payload.user , token: action.payload.token }
            case LOG_OUT :
              localStorage.removeItem("token")
              return{...state, users:null , token : null}

              case FETCH_ROOMS:
            return {
                ...state,
                rooms: action.payload, // Mettez à jour la liste des chambres
            };
        case FETCH_ROOMS_ERROR:
            return {
                ...state,
                error: action.payload, // Mettez à jour l'erreur (si nécessaire)
            };
        default:
      return state;
    }} ;

    export default reducer