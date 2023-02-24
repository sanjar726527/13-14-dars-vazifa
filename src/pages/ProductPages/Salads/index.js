import React from "react";
import products from "./../../../data/products";
import { ProductCard } from "../../../components/User/ProductsCard";

export const Salads = () => {
  const product = products.salads;

  return (
    <div className="productCard py-3">
      <h1>Salads</h1>
      <ProductCard product={product} />
    </div>
  );
};
