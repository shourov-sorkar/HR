import React from 'react'
import "./Login.css"
import logo from "../../Assets/logo.png"
const Login = () => {
    return (
        <div>
            <div className="main__container">
                <div className="color"></div>
                <div className="color"></div>
                <div className="color"></div>
                <div className="box">
                    <div className="square"></div>
                    <div className="square" ></div>
                    <div className="square" ></div>
                    <div className="square" ></div>
                    <div className="square" ></div>
                    <div className="img"><img src={logo} alt="logo"  /></div>
                    <div className="inner__container">
                        <div className="form">
                            <h2>Login</h2>
                            <form>
                                <div className="inputBox">
                                    <input type="text" placeholder="Username" />
                                </div>
                                <div className="inputBox">
                                    <input type="password" placeholder="Password" />
                                </div>
                                <div className="inputBox">
                                    <input type="submit" value="Login" />
                                </div>
                                <p className="forget"> Forget Password? <a href="#!">Click Here</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
