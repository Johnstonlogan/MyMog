import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
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

            <Link className="links disable" to="/profile">
              <Menu.Item className="navlinks disable">Community</Menu.Item>
            </Link>

            <Link className="links disable" to="/browse">
              <Menu.Item className="navlinks ">Tournaments</Menu.Item>
            </Link>
          </Menu>
        </Container>
      </div>
    );
  }
}
