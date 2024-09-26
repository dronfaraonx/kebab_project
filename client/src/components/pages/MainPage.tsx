import React, { useEffect, useState } from "react";
import CardList from "../ui/CardList";
import { useUser } from "../Context/auth";

export default function MainPage() {
  const { user } = useUser();

  return (
    <>
      {!user ? (<h1>No User</h1>) : <h1>Hello, {user.username}, {user.role}</h1>}
       <CardList />
    </>
  );
}
