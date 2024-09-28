import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Context/auth";

export default function AddOrderPage() {
  const {user} = useUser()
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState("");
  const [original_price, setOriginal_price] = useState("");
  const [discount, setDiscount] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (event) => {

    event.preventDefault();
    console.log("Button clicked");

    const formData = { 
        name, 
        image, 
        original_price: parseFloat(original_price),
        discount: parseFloat(discount) || 0, 
        location,
        seller_id: user.id};

    try {
      const response = await fetch("http://localhost:8000/items/newOrder", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        // setUser(data.user);
        setName("");
        setImage("");
        setOriginal_price("");
        setDiscount("");
        setLocation("");
        navigate("/profile");
      } else {
        throw new Error("Adding new order failed");
      }

      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      // }

      // const data = await response.json();
      // console.log({ data });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group mb-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="form-control"
          id="name"
          placeholder="Enter name"
          required
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={(event) => setImage(event.target.value)}
          className="form-control"
          id="image"
          placeholder="Add image"
          required
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="original_price">Original price</label>
        <input
          type="text"
          name="original_price"
          value={original_price}
          onChange={(event) => setOriginal_price(event.target.value)}
          className="form-control"
          id="original_price"
          placeholder="Original price"
          required
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="discount">Discount</label>
        <input
          type="text"
          name="discount"
          value={discount}
          onChange={(event) => setDiscount(event.target.value)}
          className="form-control"
          id="discount"
          placeholder="Discount price"
          required
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          className="form-control"
          id="location"
          placeholder="Location"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary btn-block mt-2">
        Add Order
      </button>
    </form>
  );
}
