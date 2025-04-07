
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { adding_room, affich_Rooms } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";


const ListRooms =()=>{
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const {rooms}=useSelector(state=>state.rooms)
    useEffect(()=>{
        dispatch(affich_Rooms())})
    
 const reservation=()=>{
    navigate (`/Reservation`); }

        
          const [roomName, setRoomName] = useState('');
          const [roomDescription, setRoomDescription] = useState('');
          const [roomPrice, setRoomPrice] = useState(Number)
          const [roomAvailable, setRoomAvailable] = useState("")

          const AddRoom = (e) => {
            e.preventDefault();
        
            // Créer une nouvelle chambre
            const newRoom = {
              name: roomName,
              description: roomDescription,
              price: roomPrice, 
              available: roomAvailable
            };
            dispatch(adding_room(newRoom))
            
    // Réinitialiser les champs du formulaire
    setRoomName('');
    setRoomDescription(''); }




 if (!Array.isArray(rooms)) {
   return <p>Aucune chambre disponible.</p>;}
    return(
        <>
        <div>
      <h1>Liste des Chambres</h1>

      {/* Formulaire pour ajouter une chambre */}
      <div>
        <h2>Ajouter une Chambre</h2>
        <form>
          <div>
            <label>Nom de la chambre</label>
            <input
              type="text"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              placeholder="Nom de la chambre"
              required
            />
          </div>
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
            <textarea
              value={roomPrice}
              onChange={(e) => setRoomPrice(e.target.value)}
              placeholder="prix de la chambre"
              required
            />
          </div>
          <div>
            <label>available</label>
            <input
            type="boolean"
              value={roomAvailable}
              onChange={(e) => setRoomAvailable(e.target.value)}
              
              required
            />
          </div>
          <button type="submit" onClick={AddRoom}>Add</button>
          <button>Delete</button>
          <button>Update</button>
        </form>
      </div>
      </div>



       <div className="room-list-container">
            <h2>Nos Chambres Disponibles</h2>

            <div className="room-list">
                {rooms.length === 0 ? (
                    <p>Aucune chambre disponible pour le moment.</p>
                ) : (
                    rooms.map((room) => (
                        <div className="room-card" key={room._id}>
                            <h3>{room.name}</h3>
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