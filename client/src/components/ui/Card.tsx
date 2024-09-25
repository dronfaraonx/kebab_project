import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  CardImg,
} from "reactstrap";

export default function CardOne({ item }) {
  return (
    <Card key={item.id}>
      <CardImg alt="Card image cap" src={item.image} top width="100%" />
      <CardBody>
        <CardTitle tag="h5">{item.name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {item.location}
        </CardSubtitle>
        <CardText className="mb-2 text-muted" tag="h6">
          <span style={{ textDecoration: "line-through" }}>{item.original_price} Baht</span> 
            <div>
            {item.discount * item.original_price} Baht
            </div>
        </CardText>
        <Button>Order</Button>
      </CardBody>
    </Card>
  );
}
