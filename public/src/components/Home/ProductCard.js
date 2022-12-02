import React from "react";
import "../../styles/style.css";
import axios from "axios";
import { useState } from "react";
const ProductCard = product => {
  const [updateCard, setUpdateCard] = useState(false);
  const [values, setValues] = useState({
    name: product.prod.name,
    type: product.prod.type,
    price: product.prod.price,
    rating: product.prod.rating,
    warranty_years: product.prod.warranty_years,
    available: product.prod.available,
  });

  const handleNameInputChange = e => {
    setValues({ ...values, name: e.target.value });
  };

  const handleTypeInputChange = e => {
    setValues({ ...values, type: e.target.value });
  };

  const handlePriceInputChange = e => {
    setValues({ ...values, price: e.target.value });
  };

  const handleRatingInputChange = e => {
    setValues({ ...values, rating: e.target.value });
  };

  const handleWarrantyYearsInputChange = e => {
    setValues({ ...values, warranty_years: e.target.value });
  };

  const handleAvailableInputChange = e => {
    setValues({ ...values, available: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const submit = document.getElementById("submitForm");
    const name = values.name;
    const type = values.type;
    const price = values.price;
    const rating = values.rating;
    const warranty_years = values.warranty_years;
    const available = values.available;
    const error = document.querySelector(".err");

    axios({
      method: "put",
      url: `http://localhost:4000/api/products/${submit.accessKey}`,
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
      .catch(_ => {
        error.innerHTML = "Une erreur s'est produite";
      });
  };
  const update = e => {
    setUpdateCard(true);
  };
  const deleteProduct = e => {
    axios({
      method: "delete",
      url: `http://localhost:4000/api/products/${e.currentTarget.accessKey}`,
    })
      .then(_ => {
        window.location = "/";
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="productContainer">
      {!updateCard ? (
        <React.Fragment>
          <p className="p white">Nom : {product.prod.name}</p>
          <p className="p white">Type : {product.prod.type}</p>
          <p className="p white">Prix : {product.prod.price}euro</p>
          <p className="p white">Note : {product.prod.rating}★</p>
          <p className="p white">Garantie : {product.prod.warranty_years}ans</p>
          {product.prod.available ? (
            <p className="p green">Dispoible</p>
          ) : (
            <p className="p red">Indisponible</p>
          )}
          <div>
            <button
              className="button update"
              accessKey={product.prod._id}
              onClick={update}
            >
              Modifier
            </button>
            <button
              className="button delete"
              accessKey={product.prod._id}
              onClick={deleteProduct}
            >
              Supprimer
            </button>
          </div>
        </React.Fragment>
      ) : (
        <form action="" onSubmit={handleSubmit} className="formUpdate">
          <span>Modifier votre produit</span>
          <label>Nom</label>
          <input
            value={values.name}
            onChange={handleNameInputChange}
            placeholder="Nom"
            required
          />
          <label>Type</label>
          <input
            value={values.type}
            onChange={handleTypeInputChange}
            placeholder="Type"
            required
          />
          <label>Prix</label>
          <input
            value={values.price}
            onChange={handlePriceInputChange}
            placeholder="Prix"
            required
          />
          <label>Note</label>
          <input
            value={values.rating}
            onChange={handleRatingInputChange}
            placeholder="Note"
            required
          />
          <label>Garantie</label>
          <input
            value={values.warranty_years}
            onChange={handleWarrantyYearsInputChange}
            placeholder="Garantie"
            required
          />
          <label>Disponibilité</label>
          <input
            value={values.available}
            onChange={handleAvailableInputChange}
            placeholder="Disponibilité Boolean"
            required
          />
          <div className="err"></div>
          <input
            id="submitForm"
            accessKey={product.prod._id}
            type="submit"
            value="Modifier"
          />
        </form>
      )}
    </div>
  );
};

export default ProductCard;
