
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchRooms } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";


const ListRooms =()=>{
    const dispatch = useDispatch()
    const {rooms, error}=useSelector(state=>state.rooms)
    useEffect(()=>{
        dispatch(fetchRooms())
    })
    if (!Array.isArray(rooms)) {
        return <p>Aucune chambre disponible.</p>;
    }

    
    return(
        <>
       



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
                            <p><strong>Prix: {room.price}€</strong></p>
                            <button className="reserve-button">Réserver</button>
                        </div>
                    ))
                )}
            </div>
        </div>
        </>
    )
}

export default ListRooms