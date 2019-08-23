import React, { Component } from "react";
import {
  Card,
  CardDeck,
  CardBody,
  CardImg,
  CardTitle,
  CardText
} from "reactstrap";

class FriendsTab extends Component {
  render() {
    return (
      <div className="ListCard w-50 mx-auto d-inline-block">
        <CardDeck className="p-2">
          <Card className="h-15 d-inline-block">
            <img
              width="15%"
              src="https://images.freeimages.com/images/thumbs/877/evisterias-troschelli-1-1512159.jpg"
              alt="cat"
            />
            <CardBody className="w-35 text-right">
              <CardTitle>Firstname Lastname</CardTitle>
              <CardText>Number events</CardText>
              <CardText>Number friends</CardText>
            </CardBody>
          </Card>
          <Card>
            <img
              width="35%"
              src="https://images.freeimages.com/images/thumbs/877/evisterias-troschelli-1-1512159.jpg"
              alt="cat"
            />
            <CardBody>
              <CardTitle>Firstname Lastname</CardTitle>
              <CardText>Number events Number friends</CardText>
            </CardBody>
          </Card>
          <Card>
            <img
              width="35%"
              src="https://images.freeimages.com/images/thumbs/877/evisterias-troschelli-1-1512159.jpg"
              alt="cat"
            />
            <CardBody>
              <CardTitle>Firstname Lastname</CardTitle>
              <CardText>Number events Number friends</CardText>
            </CardBody>
          </Card>
        </CardDeck>
        <CardDeck className="p-2">
          <Card>
            <CardImg
              width="25%"
              src="https://images.freeimages.com/images/thumbs/877/evisterias-troschelli-1-1512159.jpg"
              alt="cat"
            />
            <CardBody>
              <CardTitle>Firstname Lastname</CardTitle>
              <CardText>Number events Number friends</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              width="25%"
              src="https://images.freeimages.com/images/thumbs/877/evisterias-troschelli-1-1512159.jpg"
              alt="cat"
            />
            <CardBody>
              <CardTitle>Firstname Lastname</CardTitle>
              <CardText>Number events Number friends</CardText>
            </CardBody>
          </Card>

          <Card>
            <CardImg
              width="25%"
              src="https://images.freeimages.com/images/thumbs/877/evisterias-troschelli-1-1512159.jpg"
              alt="cat"
            />
            <CardBody>
              <CardTitle>Firstname Lastname</CardTitle>
              <CardText>Number events Number friends</CardText>
            </CardBody>
          </Card>
        </CardDeck>
        <CardDeck className="p-2">
          <Card>
            <CardImg
              width="25%"
              src="https://images.freeimages.com/images/thumbs/877/evisterias-troschelli-1-1512159.jpg"
              alt="cat"
            />
            <CardBody>
              <CardTitle>Firstname Lastname</CardTitle>
              <CardText>Number events Number friends</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              width="25%"
              src="https://images.freeimages.com/images/thumbs/877/evisterias-troschelli-1-1512159.jpg"
              alt="cat"
            />
            <CardBody>
              <CardTitle>Firstname Lastname</CardTitle>
              <CardText>Number events Number friends</CardText>
            </CardBody>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default FriendsTab;
