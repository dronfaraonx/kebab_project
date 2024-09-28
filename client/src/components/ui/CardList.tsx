import React, { useEffect, useState } from "react";
import { useUser } from "../Context/auth";
import { Card, CardGroup } from "reactstrap";
import CardOne from "../ui/Card";
import SortBtn from "./btns/SortBtn";

export default function CardList() {
  const {user} = useUser()
  const [items, setItems] = useState([]);
  useEffect(() => {
    const allAddedItems = async () => {
      try {
        const response = await fetch("http://localhost:8000/");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log("Error adding items:", error);
      }
    };

    allAddedItems(); 
  }, []);

  const availableItems = items.filter(item => !item.buyer_id);

  return (
 <>
    {user?.role === 'seller' ? (
      <p>Cannot buy as a seller</p>
     
    ) : (
     <>
        <SortBtn />
        <CardGroup>
          <div className="row">
            {availableItems.map((item, i) => (
              <div className="col-md-4 mb-3">
              <CardOne key={i} item={item} />
              </div>
            ))}
          </div>
        </CardGroup>
      </>)}
  </>
  );
}
