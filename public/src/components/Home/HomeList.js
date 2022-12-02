import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ProductCard from "./ProductCard";
import NavBar from "../NavBar";
const HomeList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:4000/api/products",
    })
      .then(res => {
        setProducts(res.data.products);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const renderProduct = () => {
    return (
      <div>
        <NavBar />
        <div className="container-product">
          {products.map(prod => (
            <ProductCard key={prod._id} prod={prod} />
          ))}
        </div>
      </div>
    );
  };
  return <div>{renderProduct()}</div>;
};

export default HomeList;
