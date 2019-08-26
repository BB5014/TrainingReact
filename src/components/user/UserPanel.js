import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default class UserPanel extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardImg
            width="100%"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_2dBqDn5Q-7h7E-TaJmcUVl5CNY8wqfbnDKNWjSrcbQD_ytOW"
            alt="Mickey"
          />
          <CardBody>
            <CardTitle>CardTitle</CardTitle>
            <CardSubtitle>CardSubtitle</CardSubtitle>
            <CardText>CardText</CardText>
          </CardBody>
        </Card>
        <hr color="black" />
        <Nav justified>
          <NavItem>
            <NavLink href="/">102 events</NavLink>
          </NavItem>

          <NavItem>
            <NavLink disabled href="/">
              83 friends
            </NavLink>
          </NavItem>
        </Nav>
        <hr color="black" />
      </div>
    );
  }
}
