import React from "react";
import { Link } from "react-router-dom";

const Card = ({ productName, description, price, id }) => {
  return (
    <div className="card border border-blue-950 rounded-md  w-52  m-2">
      <div className="m-2">
        <h2>ProductName: {productName}</h2>
        <p>Descirption: {description}</p>
        <p>Price: {price}</p>
        <Link to={"/viewproduct/" + id}>
          <button className="bg-green-700 text-white rounded-md">
            <span className="m-2">View Product</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
