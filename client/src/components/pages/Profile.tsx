import React from 'react';
import { useUser } from '../Context/auth';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const { user } = useUser();
  const navigate = useNavigate();

  if (!user) {
    return <p>Please log in or register.</p>;
  }

  const handleAddOrderClick = () => {
    navigate('../items/newOrder'); 
  };

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">{user.username}'s Profile</CardTitle>
        <CardSubtitle className="mb-2 text-muted">User Info</CardSubtitle>
        <CardText>Welcome to your profile page!</CardText>
        
        <Button onClick={handleAddOrderClick}>Add Order</Button>
      </CardBody>
    </Card>
  );
}
