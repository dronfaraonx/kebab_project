import React from 'react';
import { useUser } from "../../Context/auth";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

function OrderButton({ itemId, setItems }) {
  const { user } = useUser(); 
  const navigate = useNavigate();


  const handleClick = async () => {
    try {
      const response = await fetch(`http://localhost:8000/items/${itemId}/order`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ buyer_id: user.id }),
      });

      if (response.ok) {
        setItems((prevState) => ( prevState.filter((item) => item.id !== itemId )
        ))
        console.log('Item is ordered');
      } else {
        console.error("ERROR WHILE ORDERING THE FOOD");
      }
    } catch (error) {
      console.error('ERROR', error);
    }
  };

  return (
    <Button
      className='text-decoration-none btn btn-lg btn-success'
      onClick={handleClick} 
    >
      Order
    </Button>
  );
}

export default OrderButton;
