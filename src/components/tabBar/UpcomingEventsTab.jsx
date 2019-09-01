import React from "react";
import {
  Card,
  CardDeck,
  CardBody,
  CardSubtitle,
  CardTitle,
  CardText
} from "reactstrap";

const UpcomingEventsTab = () => {
  return (
    <div className="ListCard  d-inline-block ">
      <h4>Upcoming</h4>
      <CardDeck className="p-2">
        <Card>
          <CardBody>
            <CardSubtitle>In 3 months</CardSubtitle>
            <CardTitle>SQUASH</CardTitle>
            <CardText>Thuesday 29 January at 20:09 11 participants</CardText>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </CardText>
          </CardBody>
        </Card>
      </CardDeck>
      <CardDeck className="p-2">
        <Card>
          <CardBody>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </CardText>
          </CardBody>
        </Card>
      </CardDeck>
      <CardDeck className="p-2">
        <Card>
          <CardBody>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
          </CardBody>
        </Card>
      </CardDeck>
    </div>
  );
};

export default UpcomingEventsTab;
