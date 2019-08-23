import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

class TabBar extends Component {
  render() {
    return (
      <div className="d-flex">
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
      </div>
    );
  }
}

export default TabBar;
