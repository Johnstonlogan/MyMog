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
            <Link className="links" to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item className="navlinks">
            <Link className="links" to="/profile">Profile</Link>
        </Menu.Item>
        <Menu.Item className="navlinks">
            <Link className="links" to="/browse">Tournaments</Link>
        </Menu.Item>
 


            </Menu>
        
       
        </Container>
    
         </div>)
}
}
