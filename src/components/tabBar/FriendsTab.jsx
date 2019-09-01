import React from "react";
import {
  Card,
  CardDeck,
  CardBody,
  CardImg,
  CardTitle,
  CardText
} from "reactstrap";

const FriendsTab = () => {
  return (
    <div className="ListCard d-inline-block">
      <CardDeck className="p-2">
        <Card className="w-50 flex-fill d-flex flex-column p-3">
          <img
            width="25%"
            src="https://images.freeimages.com/images/thumbs/877/evisterias-troschelli-1-1512159.jpg"
            alt="star"
          />
          <CardBody className="flex-fill d-flex flex-column">
            <CardTitle>Firstname Lastname</CardTitle>
            <CardText>Number events</CardText>
            <CardText>Number friends</CardText>
          </CardBody>
        </Card>
        <Card className="flex-fill d-flex flex-column p-3">
          <img
            width="35%"
            src="https://images.freeimages.com/images/thumbs/877/evisterias-troschelli-1-1512159.jpg"
            alt="cat"
          />
          <CardBody className="text-right">
            <CardTitle>Firstname Lastname</CardTitle>
            <CardText>Number events Number friends</CardText>
          </CardBody>
        </Card>
        <Card className="flex-fill d-flex flex-column p-3">
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
};

export default FriendsTab;
