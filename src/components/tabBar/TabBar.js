import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

class TabBar extends Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink href="/">Upcoming events</NavLink>
          </NavItem>

          <NavItem>
            <NavLink disabled href="/">
              Friends
            </NavLink>
          </NavItem>
        </Nav>
        <hr color="black" />
      </div>
    );
  }
}

export default TabBar;
