import React, { useEffect, useState } from "react";
import { Card ,CardGroup } from 'reactstrap'
import CardOne from "../ui/Card"
import SortBtn from "../ui/SortBtn"


export default function CardList() {
    const [items, setItems] = useState([])
  useEffect(() => {
    fetch('http://localhost:8000/')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch(console.log);
  }, [])
  return (
    <div>
    <SortBtn/>
    <CardGroup>
      {items.map((item, i) => (
        <CardOne key={i} item ={item}/>
      ))}
  
</CardGroup>
    </div>
  )
}
