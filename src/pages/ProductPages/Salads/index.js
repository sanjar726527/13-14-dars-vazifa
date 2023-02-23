import React from "react";
import { ProductCard } from "../../../components/ProductsCard";
import products from "./../../../data/products";


export const Salads = () => {
  const product = products.salads;

  return (
    <div className="productCard py-3">
      <h1>Salads</h1>
      <ProductCard product={product} />
    </div>
  );
};
