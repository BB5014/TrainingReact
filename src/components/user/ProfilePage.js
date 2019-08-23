import React, { Component } from "react";
import UserPanel from "../user/UserPanel";
import UpcomingEventsTab from "../tabBar/UpcomingEventsTab";
import FriendsTab from "../tabBar/FriendsTab";
import TabBar from "../tabBar/TabBar";

class ProfilePage extends Component {
  render() {
    return (
      <>
        <div
          className="container-fluid d-inline-block"
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
        <div
          className="Tabbar container-fluid d-inline-block"
          style={{ width: "70%" }}
        >
          <TabBar />
        </div>
        <div
          className="Upcoming container-fluid d-inline-block
        "
          style={{ width: "70%", marginLeft: "50vh" }}
        >
          <UpcomingEventsTab />
        </div>
        <div
          className="Friends container-fluid d-inline-block
        "
          style={{ width: "70%", marginLeft: "50vh" }}
        >
          <FriendsTab />
        </div>
      </>
    );
  }
}
export default ProfilePage;
