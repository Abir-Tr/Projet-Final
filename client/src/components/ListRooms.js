
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { adding_room, affich_Rooms, authorized, uploadImage } from "../redux/actions";
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
          const image= useSelector((state)=>state.image)
        
        
    
 const reservation=()=>{
    navigate (`/Reservation`); }

        
          const [type, setType] = useState('');
          const [description, setDescription] = useState('');
          const [price, setPrice] = useState(0)
          const [available, setAvailable] = useState(true)

          const add_img = async(e) => {
            const file = e.target.files[0];
            const formData = new FormData();
            formData.append("image", file);
            await dispatch(uploadImage(formData));
          };
          
          const newRoom = {
            type,
           description,
            price, 
            // available: roomAvailable,
            image
          };

          const AddRoom = (e) => {
            e.preventDefault();
           
           
            // Créer une nouvelle chambre
            
            dispatch(adding_room(newRoom))
            console.log("hhhk",newRoom)
    // Réinitialiser les champs du formulaire
    setType('');
    setDescription('');
    setPrice('');
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
        
        <Form.Select value={type}
              onChange={(e) => setType(e.target.value)}>
          <option type="text" value="Chambre simple">Chambre simple</option> 
          <option type="text" value="Chambre double ">Chambre double </option>
          <option type="text" value="Chambre de luxe ">Chambre de luxe </option>
          <option type="text" value="Suite junior ">Suite junior </option>
          
          
              
        </Form.Select>
      </Form.Group>
          <div>
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description de la chambre"
              required
            />
          </div>
         <label>image</label>
          <input type= "file" onChange={add_img}/>
          <div>
            <label>Price</label>
            <input type="Number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
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
                            <img src={room.image} alt="photo_de chmabre a coucher"/>
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