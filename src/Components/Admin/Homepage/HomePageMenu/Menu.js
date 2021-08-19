import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Menu.css"
const Menu = () => {
    return (
        <Router>
            <div className="container col-md-5  d-flex flex-column justify-content-center text-center mx-auto mt-5 p-2 homepage__menu">
                <Link to="/" style={{textDecoration:"none"}}><p>View All Employee</p></Link>
                <Link to="/" style={{textDecoration:"none"}}><p>Add New Employee</p></Link>
                <Link to="/" style={{textDecoration:"none"}}><p>Add Holiday</p></Link>
                <Link to="/" style={{textDecoration:"none"}}><p>Leave Application</p></Link>
            </div>
        </Router>

    )
}

export default Menu
