import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import logo from "../../../../Assets/logo.png"
import "./Header.css"
const Header = () => {
    return (
        <div>
            <Navbar className="nav__bar">
                <Container>
                    <Navbar.Brand>
                        <img src={logo} width="150px"  alt="logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text style={{color:"#fff"}}>
                            Signed in as: <a href="#login" style={{color:"#fff"}}>Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header
