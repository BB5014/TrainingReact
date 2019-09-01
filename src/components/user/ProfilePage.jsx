import React from "react";
import UserPanel from "./UserPanel";
import UpcomingEventsTab from "../tabBar/UpcomingEventsTab";
import FriendsTab from "../tabBar/FriendsTab";
import TabBar from "../tabBar/TabBar";
import { Nav, NavItem } from "reactstrap";

const ProfilePage = () => {
  return (
    <>
      <div
        className="container-fluid d-inline-block "
        style={{
          width: "25%",
          marginLeft: "4vh",
          marginTop: "1vh",
          marginRight: "1vh",
          marginBottom: "1vh"
        }}
      >
        <UserPanel />
      </div>
      {/* <div */}
      <Nav
        className="Tabbar container-fluid d-inline-block position-absolute mt-5"
        style={{ width: "70%" }}
      >
        <TabBar />
      </Nav>
      {/* </div>
        <div */}
      <NavItem
        className="Upcoming container-fluid d-inline-block position-absolute 
        "
        style={{ width: "70%", marginTop: "15vh" }}
      >
        <UpcomingEventsTab />
        {/* </div>
        <div */}
      </NavItem>
      <NavItem
        className="Friends container-fluid d-inline-block position-absolute
        "
        style={{ width: "70%", marginTop: "100vh" }}
      >
        <FriendsTab />
        {/* </div> */}
      </NavItem>
    </>
  );
};

export default ProfilePage;
