import React from 'react'
import { useUser } from '../Context/auth'; 

export default function Profile() {
 const { user } = useUser();

  if (!user) {
    return <p>Please log in or register.</p>;
  }

  return <h1>Hello, {user.id}!</h1>;
}
