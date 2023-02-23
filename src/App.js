import React from "react";
import { Route, Routes } from "react-router-dom";
import { BasketPage } from "./pages/BasketPage";
import { HomePage } from "./pages/HomePage";
import { AllProducts } from "./pages/ProductPages/AllProducts";
import { Drinks } from "./pages/ProductPages/Drinks";
import { Salads } from "./pages/ProductPages/Salads";
import { Soups } from "./pages/ProductPages/Soups";
import { UserPage } from "./pages/UserPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user" element={<UserPage />}>
        <Route path="" element={<AllProducts />} />
        <Route path="salads/*" element={<Salads />} />
        <Route path="soups/*" element={<Soups />} />
        <Route path="drinks/*" element={<Drinks />} />
      </Route>
      <Route path="/basket" element={<BasketPage />} />
    </Routes>
  );
}

export default App;
