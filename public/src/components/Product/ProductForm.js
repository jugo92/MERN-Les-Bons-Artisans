import React from "react";
import axios from "axios";
import { useState } from "react";
const ProductForm = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [warranty_years, setWarrantyYears] = useState("");
  const [available, setAvailable] = useState("");

  const handleProduct = e => {
    e.preventDefault();

    axios({
      method: "post",
      url: "http://localhost:4000/api/products/create",
      data: {
        name,
        type,
        price,
        rating,
        warranty_years,
        available,
      },
    })
      .then(res => {
        if (res.data.errors) {
        } else {
          window.location("/");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <form action="" onSubmit={handleProduct}>
      <label htmlFor="name">Name</label>
      <br />
      <input
        type="text"
        name="name"
        id="name"
        onChange={e => setName(e.target.value)}
        value={name}
      />
      <div className="name error"></div>
      <br />
      <label htmlFor="type">Type</label>
      <br />
      <input
        type="text"
        name="type"
        id="type"
        onChange={e => setType(e.target.value)}
        value={type}
      />
      <div className="type error"></div>
      <br />
      <label htmlFor="price">Price</label>
      <br />
      <input
        type="text"
        name="price"
        id="price"
        onChange={e => setPrice(e.target.value)}
        value={price}
      />
      <div className="price error"></div>
      <br />

      <label htmlFor="rating">Rating</label>
      <br />
      <input
        type="text"
        name="rating"
        id="rating"
        onChange={e => setRating(e.target.value)}
        value={rating}
      />
      <div className="rating error"></div>
      <br />
      <label htmlFor="warranty_years">Warranty Years</label>
      <br />
      <input
        type="text"
        name="warranty_years"
        id="warranty_years"
        onChange={e => setWarrantyYears(e.target.value)}
        value={warranty_years}
      />
      <div className="warranty_years error"></div>
      <br />
      <label htmlFor="available">Available</label>
      <br />

      <input
        type="text"
        name="available"
        id="available"
        onChange={e => setAvailable(e.target.value)}
        value={available}
      />
      <div className="available error"></div>
      <br />

      <input type="submit" value="Créer" />
    </form>
  );
};

export default ProductForm;
