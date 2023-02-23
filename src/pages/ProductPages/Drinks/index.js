import React from "react";
import { ProductCard } from "../../../components/ProductsCard";
import products from "../../../data/products";

export const Drinks = () => {
  const product = products.drinks;

  return (
    <div className="productCard py-3">
      <h1>Drinks</h1>
      <ProductCard product={product} />
    </div>
  );
};
