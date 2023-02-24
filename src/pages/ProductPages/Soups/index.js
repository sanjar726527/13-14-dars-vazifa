import React from "react";
import products from "../../../data/products";
import {ProductCard } from "../../../components/User/ProductsCard"

export const Soups = () => {
  const product = products.soups;
  return (
    <div className="productCard py-3">
      <h1>Soups</h1>
      <ProductCard product={product} />
    </div>
  );
};
