
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { adding_room, affich_Rooms, authorized } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Form from 'react-bootstrap/Form';


const ListRooms =()=>{
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const rooms =useSelector(state=>state.rooms)
    useEffect(()=>{
        dispatch(affich_Rooms())},[])


         const currentUser = useSelector((state) => state.users);
        
    
          useEffect(() => {
            dispatch(authorized());
          }, [dispatch]);
          const [showLogin,setShowLogin]=useState(false);
          useEffect(()=>{
            if (currentUser&& currentUser.role ==='admin'){
              setShowLogin(true)
        
            } else{
              setShowLogin(false);
            }
          },[currentUser])
        
    
 const reservation=()=>{
    navigate (`/Reservation`); }

        
          const [roomType, setRoomType] = useState('');
          const [roomDescription, setRoomDescription] = useState('');
          const [roomPrice, setRoomPrice] = useState(0)
          const [roomAvailable, setRoomAvailable] = useState(true)

          const AddRoom = (e) => {
            e.preventDefault();
        
            // Créer une nouvelle chambre
            const newRoom = {
              type: roomType,
              description: roomDescription,
              price: roomPrice, 
              available: roomAvailable
            };
            dispatch(adding_room(newRoom))
            
    // Réinitialiser les champs du formulaire
    setRoomType('');
    setRoomDescription('');
    setRoomPrice('');
   }





    return(
        <>
        
 
        {showLogin&& <div>
         
      <h1>Liste des Chambres</h1>

      {/* Formulaire pour ajouter une chambre */}
      <div>
        <h2>Ajouter une Chambre</h2>
        <form>
         
          <Form.Group className="mb-3">
        
        <Form.Select value={roomType}
              onChange={(e) => setRoomType(e.target.value)}>
          <option type="text" value="Chambre simple">Chambre simple</option> 
          <option type="text" value="Chambre double ">Chambre double </option>
          <option type="text" value="Chambre de luxe ">Chambre de luxe </option>
          <option type="text" value="Suite junior ">Suite junior </option>
          
          
              
        </Form.Select>
      </Form.Group>
          <div>
            <label>Description</label>
            <textarea
              value={roomDescription}
              onChange={(e) => setRoomDescription(e.target.value)}
              placeholder="Description de la chambre"
              required
            />
          </div>
          <div>
            <label>Price</label>
            <textarea type="Number"
              value={roomPrice}
              onChange={(e) => setRoomPrice(e.target.value)}
              placeholder="prix de la chambre"
              required
            />
          </div>
          <div>
            {/* <label>available</label>
            <input
            type="boolean"
              value={roomAvailable}
              onChange={(e) => setRoomAvailable(e.target.value)}
             
            /> */}
          </div>
          <button type="submit" onClick={AddRoom}>Add</button>
          <button>Delete</button>
          <button>Update</button>
        </form>
      </div>
      </div>
}


       <div className="room-list-container">
            <h2>Nos Chambres Disponibles</h2>

            <div className="room-list">
                {rooms.length === 0 ? (
                    <p>Aucune chambre disponible pour le moment.</p>
                ) : (
                  Array.isArray(rooms)&& rooms.map((room) => (
                        <div className="room-card" key={room.id}>
                            <h3>{room.type}</h3>
                            <p>{room.description}</p>
                            <p><strong>Prix: {room.price}TND</strong></p>
                            <button onClick={reservation} className="reserve-button">Réserver</button>
                        </div>
                    ))
                )}
            </div>
        </div>
        </>
    )
};

export default ListRooms;