import React, { useEffect, useState } from "react";

import CardList from "../ui/CardList"

export default function MainPage() {
const check = true;
  return (
    <>
   {check &&  <h1>Yes</h1> } 
   <h1>Hello!</h1>
    <CardList />
        {/* <button type="button" className="btn btn-primary btn-block mt-2">
        Test
      </button> */}
    </>
  );
}
