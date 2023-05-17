import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold m-3  ">Add New Product</h1>
      <Link to="/addProduct">
        {" "}
        <button className="bg-green-800 text-white m-3 rounded-2xl">
          <span className="m-2">Add Product</span>
        </button>
      </Link>
    </div>
  );
};

export default MainPage;
