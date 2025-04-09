import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { reserving } from '../redux/actions';
import { useNavigate } from 'react-router';


const Reservation=()=>{
    const dispatch= useDispatch()
    const rooms = useSelector((state) => state.rooms);
    const [newCustomerName,setNewCustomerName]=useState("")
    const [newChekIn,setNewChekIn]=useState("")
    const [newChekOut,setNewChekOn]=useState("")
    const [statue,setStatue]=useState("")
    const navigate = useNavigate();
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
      if (selectedRoom && newChekIn && newChekOut) {
          const numberOfNights = (new Date(newChekOut) - new Date(newChekIn)) / (1000 * 3600 * 24);
          setTotalPrice(selectedRoom.price * numberOfNights);
      }
  }, [selectedRoom, newChekIn, newChekOut]);


    
    function reserve (e){
        e.preventDefault()
        const newReservation={
            customerName:newCustomerName,
            chekIn:newChekIn,
            chekOut:newChekOut,
            status:statue,
            price: selectedRoom.price,
        }
        dispatch(reserving(newReservation))
        navigate('/Facture');
    }
   
    return(<>

<Form>
      
        <Form.Group className="mb-3">
          <Form.Label >Cutomer Name</Form.Label>
          <Form.Control  placeholder="Disabled input" value={newCustomerName} onChange={(e)=>setNewCustomerName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
                    <Form.Label>Chambre</Form.Label>
                    <Form.Select
                        value={selectedRoom ? selectedRoom.id : ''}
                        onChange={(e) => setSelectedRoom(rooms.find((room) => room.id === e.target.value))}
                    >
                        <option value="">Sélectionnez une chambre</option>
                        {rooms.map((room) => (
                            <option key={room.id} value={room.id}>
                                {room.type} - {room.price} TND
                            </option>  ))}
                            </Form.Select>
                            </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label h>Cutomer Name</Form.Label>
          <Form.Control  placeholder="Disabled input" value={newChekIn} onChange={(e)=>setNewChekIn(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label >Cutomer Name</Form.Label>
          <Form.Control  placeholder="Disabled input" value={newChekOut} onChange={(e)=>setNewChekOn(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label >Cutomer Name</Form.Label>
          <Form.Control  placeholder="Disabled input" value={statue} onChange={(e)=>setStatue(e.target.value)} />
        </Form.Group>
        
     
        <Button onClick={reserve}type="submit">Submit</Button>
        <div>
                    <strong>Total à payer : {totalPrice} TND</strong>
                </div>
      
    </Form>
    
    </>

    )
}

export default Reservation