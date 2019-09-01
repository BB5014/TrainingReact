import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const TabBar = () => {
  return (
    <div>
      <Nav>
        <NavItem className="TabUp">
          <NavLink href="/UpComing">Upcoming events</NavLink>
        </NavItem>

        <NavItem className="TabFriends">
          <NavLink href="/Friends">Friends</NavLink>
        </NavItem>
      </Nav>
      <hr color="black" />
    </div>
  );
};

export default TabBar;
