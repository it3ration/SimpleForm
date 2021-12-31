import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Info from '../pages/Info'
import Home from '../pages/Home';




function myNavbar() {
    return (
        <div>
     
            <Navbar bg="dark" variant="dark" className="">
            <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                {/* <Routes> */}
                    {/* <Route path='/info' element={<Info/>}/> */}
            <Nav.Link href='/info'>Info</Nav.Link>
            <Nav.Link href="/form">Form</Nav.Link>
            <Nav.Link href="/update">Update</Nav.Link>
            {/* </Routes> */}
            </Nav>
            </Container>
        </Navbar>
        

 
      </div>
    )
}

export default myNavbar
