import React from 'react'
import Header from "../Layout/Header/Header"
import Footer from '../Layout/Footer/Footer'
import Menu from './HomePageMenu/Menu'
import "./Homepage.css"
const Homepage = () => {
    return (
        <div>
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

export default Homepage
