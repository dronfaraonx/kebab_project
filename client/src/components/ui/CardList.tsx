import React, { useEffect, useState } from "react";
import { useUser } from "../Context/auth";
import { Card, CardGroup } from "reactstrap";
import CardOne from "../ui/Card";
import SortBtn from "./btns/SortBtn";

export default function CardList() {
  const {user} = useUser()
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch(console.log);
  }, []);
  return (
 <>
    {user?.role === 'seller' ? (
      <p>Cannot buy as a seller</p>
     
    ) : (
     <>
        <SortBtn />
        <CardGroup>
          <div className="row">
            {items.map((item, i) => (
              <CardOne key={i} item={item} />
            ))}
          </div>
        </CardGroup>
      </>)}
  </>
  );
}
