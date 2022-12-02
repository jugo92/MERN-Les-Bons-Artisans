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
    const error = document.querySelector(".err");
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
      .then(_ => {
        window.location = "/";
      })
      .catch(err => {
        error.innerHTML = err.response.data.err._message;
      });
  };
  return (
    <div className="productForm">
      <form action="" onSubmit={handleProduct}>
        <label htmlFor="name">Nom</label>
        <br />
        <input
          type="text"
          name="name"
          placeholder="Nom"
          id="name"
          onChange={e => setName(e.target.value)}
          value={name}
          required
        />
        <div className="name error"></div>
        <br />
        <label htmlFor="type">Type</label>
        <br />
        <input
          type="text"
          name="type"
          placeholder="Type"
          id="type"
          onChange={e => setType(e.target.value)}
          value={type}
          required
        />
        <br />
        <br />

        <label htmlFor="price">Prix</label>
        <br />
        <input
          type="text"
          name="price"
          id="price"
          onChange={e => setPrice(e.target.value)}
          value={price}
          placeholder="Prix (0-5)"
          required
        />
        <br />
        <br />

        <label htmlFor="rating">Note</label>
        <br />
        <input
          type="text"
          name="rating"
          id="rating"
          onChange={e => setRating(e.target.value)}
          value={rating}
          placeholder="Note"
          required
        />
        <br />
        <br />
        <label htmlFor="warranty_years">Garantie</label>
        <br />
        <input
          type="text"
          name="warranty_years"
          id="warranty_years"
          onChange={e => setWarrantyYears(e.target.value)}
          value={warranty_years}
          placeholder="Garantie"
          required
        />
        <br />
        <br />
        <label htmlFor="available">Disponibilité</label>
        <br />

        <input
          type="text"
          name="available"
          id="available"
          onChange={e => setAvailable(e.target.value)}
          value={available}
          placeholder="Disponibilité (boolean)"
          required
        />
        <br />
        <br />
        <div className="err"></div>

        <input type="submit" value="Créer" />
      </form>
    </div>
  );
};

export default ProductForm;
