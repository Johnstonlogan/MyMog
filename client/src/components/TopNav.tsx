import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import { ScrollTo } from "react-scroll-to"
import "../styling/TopNav.scss";

export class TopNav extends Component {
  render() {
    return (
      <div className="navbar">
        <Container>
          <Menu className="navmenu">
            <Link className="links" to="/home">
              <Menu.Item className="navlinks">Home</Menu.Item>
            </Link>

            <Link className="links disable" to="/transmogs">
              <Menu.Item className="navlinks ">Transmogs</Menu.Item>
            </Link>

            <Link className="links disable" to="/browse">
              <Menu.Item className="navlinks ">Tournament</Menu.Item>
            </Link>
            {window.innerWidth < 1025 ? 
            <div>
            <ScrollTo>
              {({scroll}) => (<Menu.Item className="navlinks" onClick={() =>{
                scroll({ y: 1180, smooth: true})
              }}  >Guides</Menu.Item>)}
              
              </ScrollTo>
              </div>
             : null }
            
          </Menu>
          
        </Container>
        <div className="feedback"><Link to="/feedback"><div aria-label="Feedback" className="feedback-icon"><i className="envelope icon large"></i></div>
        </Link> </div>
            
      </div>
    );
  }
}
