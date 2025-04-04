import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { reserving } from '../redux/actions';


const Reservation=()=>{
    const dispatch= useDispatch()
    const [newCustomerName,setNewCustomerName]=useState("")
    const [newChekIn,setNewChekIn]=useState("")
    const [newCekOut,setNewChekOn]=useState("")
    const [statue,setStatue]=useState("")
    function reserve (e){
        e.preventDefault()
        const newReservation={
            customerName:newCustomerName,
            chekIn:newChekIn,
            chekOut:newCekOut,
            status:statue
        }
        dispatch(reserving(newReservation))

    }
   
    return(<>

<Form>
      <fieldset disabled>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Cutomer Name</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Disabled input" value={newCustomerName} onChange={(e)=>setNewCustomerName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Cutomer Name</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Disabled input" value={newChekIn} onChange={(e)=>setNewChekIn(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Cutomer Name</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Disabled input" value={newCekOut} onChange={(e)=>setNewChekOn(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Cutomer Name</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Disabled input" value={statue} onChange={(e)=>setStatue(e.target.value)} />
        </Form.Group>
     
        <Button onClick={reserve}type="submit">Submit</Button>
      </fieldset>
    </Form>
    
    </>

    )
}

export default Reservation