import React, { useEffect } from "react";
import Card from "../reusables/Card";
import axios from "axios";

const ViewAddedProducts = () => {
 
  const getProducts = async () => {
    await axios
      .get("http://apitextile.eyeterp.com/product/viewproduct")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {getProducts()}, []);
  return (
    <div>
        <h1 className="text-2xl m-2 font-semibold">All Products</h1>
 <div className="flex flex-wrap">
        
        <Card productName="prod1" id="1" description="121" price="2233" />
        <Card productName="prod1" id="2" description="121" price="2233" />
        <Card productName="prod1" id="3" description="121" price="2233" />
        <Card productName="prod1" id="4" description="121" price="2233" />
        <Card productName="prod1" id="5" description="121" price="2233" />
      </div>
    </div>
   
  );
};

export default ViewAddedProducts;
