import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Container, Menu} from 'semantic-ui-react'
import "../styling/TopNav.scss"




export class TopNav extends Component{
render(){
    return (<div className="navbar">
        <Container>
            <Menu className="navmenu">
        <Menu.Item className="navlinks">
            <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item className="navlinks">
            <Link to="/profile">Profile</Link>
        </Menu.Item>
        <Menu.Item className="navlinks">
            <Link to="/browse">Browse</Link>
        </Menu.Item>



            </Menu>
        
       
        </Container>
    
         </div>)
}
}

{/* <nav className="topnav" >
            <ul className="nav-links">
               
                <Link className="links" to = "/home">Home</Link> 
                
                <Link className="links" to="/profile">  Profile</Link>
                  
              <div className="topnav-right">
                <Link className="signup" to="/login">Sign in/Sign up</Link> 
                </div>
            </ul>
        </nav> */}