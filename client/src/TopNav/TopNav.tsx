import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import "./TopNav.scss"



export class TopNav extends Component{
render(){
    return (<div className="navbar">
        <nav className="topnav" >
            <ul className="nav-links">
                <li className="nav-links" >
                   <Link to = "/home">Home</Link> 
                </li>
                <li className="nav-links" >
                    Profile
                </li>
                <li className="sign-up">
                    <Link to="/sign-up">Sign up</Link>
                </li>
            </ul>
        </nav>
    
         </div>)
}
}