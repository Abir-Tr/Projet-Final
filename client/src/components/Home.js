import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from "react-router";
import Modal from 'react-modal';
import { useDispatch } from "react-redux";
import { adding_user } from "../redux/actions";
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  Modal.setAppElement('#root');
const Home=()=>{
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [currentUserName, setCurrentUserName]=useState("")
    const [currentEmail, setCurrentEmail]=useState("")
    const [currentPassword, setCurrentPassword]=useState("")
    const [currentNumCin, setCurrentNumCin]=useState(0)
    const [currentNumTel, setCurrentNumTel]=useState(0)

    const dispatch =useDispatch()

    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
  
    }
    function adding(e){
        e.preventDefault()
      
       const newUser={userName:currentUserName,
            email:currentEmail,
            password:currentPassword,
           
            NumCin:currentNumCin,
            NumTel: currentNumTel   }
        
        dispatch( adding_user(newUser)

        )
        closeModal()


      }
    
    return(
        <>
       
    {/* <Navbar>    </Navbar> */}

   
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand >Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={`/`} >Home</Link>
            <button onClick={openModal}>Sign in</button>
            <Link to={`/Reservation`}>Reservation</Link>
          </Nav>
        </Container>
        
      </Navbar>
      <Outlet/>
      <div>
     
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal" >


        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
      
        <div>I am a modal</div>
        <form>
          <input  type="text" placeholder="name" value={currentUserName}  onChange={(e)=> setCurrentUserName(e.target.value)}/> <br/>
          <input type="email" placeholder="email" value={currentEmail}  onChange={(e)=> setCurrentEmail(e.target.value)}/> <br/>
          <input type="number" placeholder="cin" value={currentNumCin}  onChange={(e)=> setCurrentNumCin(e.target.value)}/><br/>
          <input type="number" placeholder="telephone" value={currentNumTel}  onChange={(e)=> setCurrentNumTel(e.target.value)}/><br/>
          <input type="password" placeholder="password" value={currentPassword}  onChange={(e)=> setCurrentPassword(e.target.value)}/><br/>
          <button onClick={closeModal}>cancel</button>
          <button onClick={adding}>valider</button>
         
        </form>
      </Modal>
    </div>
    
        </>
    )
};

export default Home; 