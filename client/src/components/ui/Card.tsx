import React, { useState, useEffect } from "react";
import { useUser } from "../Context/auth";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
  Alert
} from "reactstrap";
import OrderButton from "./btns/OrderBtn";



export default function CardOne({ item }) {
  
  const { user } = useUser()
  const [image, setImage] = useState('')

  useEffect( () => {
    const randomImage = `https://picsum.photos/318/180?random=${Math.floor(Math.random() * 1000)}`
    setImage(randomImage)
  }, [])

  return (
    <Card className="row-md-3 mb-3" key={item.id}>
      <CardImg alt="Card image cap" src={image} top width="100%" />
      <CardBody>
        <CardTitle tag="h5">{item.name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {item.location}
        </CardSubtitle>
        <CardText className="mb-2 text-muted" tag="h6">
          <span style={{ textDecoration: "line-through" }}>{item.original_price} Baht</span> 
            <div>
            {item.original_price - (item.discount * item.original_price)} Baht
            </div>
        </CardText>
        {user ? 
        ( <OrderButton itemId={item.id}/>)
        :  
         <Alert color="primary">
          Login before order!
        </Alert>}
       
      </CardBody>
    </Card>
  );
}
