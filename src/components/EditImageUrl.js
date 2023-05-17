import axios from "axios";
import React, { useState } from "react";

const EditImage = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "productName") {
      setProductName(value);
    } else if (name === "description") {
      setDescription(value);
    } else if (name === "price") {
      setPrice(value);
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    for (let i = 0; i < file.length; i++) {
      formData.append("file", file[i]);
    }
    formData.append("productName", productName);
    formData.append("description", description);
    formData.append("price", price);

    axios
      .post("http://apitextile.eyeterp.com/product/addproduct", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Edit Image</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="productName" className="block font-bold mb-2">
            Delete Url:
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={productName}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="productName" className="block font-bold mb-2">
            Add Image Url:
          </label>
          <input
            type="file"
            id="productName"
            name="productName"
            value={productName}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="productName" className="block font-bold mb-2">
           Id:
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={productName}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded"
            required
          />
        </div>
     
      
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Change Image
        </button>
      </form>
    </div>
  );
};

export default EditImage;
