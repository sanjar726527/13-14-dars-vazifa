import React from "react";
import { ProductCard } from "../../../components/ProductsCard";
import products from "../../../data/products";

export const Soups = () => {
  const product = products.soups;
  return (
    <div className="productCard py-3">
      <h1>Soups</h1>
      <ProductCard product={product} />
    </div>
  );
};
