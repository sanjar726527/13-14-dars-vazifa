import React from "react";
import { Route, Routes } from "react-router-dom";
import { BasketPage } from "./pages/UserPages/BasketPage";
import { HomePage } from "./pages/HomePage";
import { AllProducts } from "./pages/UserPages/ProductPages/AllProducts";
import { Drinks } from "./pages/UserPages/ProductPages/Drinks";
import { Salads } from "./pages/UserPages/ProductPages/Salads";
import { Soups } from "./pages/UserPages/ProductPages/Soups";
import { UserPage } from "./pages/UserPage";
import { AdminPage } from "./pages/AdminPage";
import { AddPage } from "./pages/AdminPages/AddPage";
import { ApplicationsPage } from "./pages/AdminPages/ApplicationsPage";
import { UsersPage } from "./pages/AdminPages/UsersPage";
import { DeliveredPage } from "./pages/AdminPages/DeliveredPage";
import { DeliveredPage2 } from "./pages/DelivererPages/DeliveredPage2";
import { StatisticsPage } from "./pages/AdminPages/StatisticsPage";
import { DelivererPage } from "./pages/DelivererPage";
import { ApplicationsPage2 } from "./pages/DelivererPages/ApplicationsPage2";

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
      <Route path="/admin" element={<AdminPage />}>
        <Route path="" element={<ApplicationsPage />} />
        <Route path="delivered" element={<DeliveredPage />} />
        <Route path="statistics" element={<StatisticsPage />} />
        <Route path="add" element={<AddPage />} />
        <Route path="users" element={<UsersPage />} />
      </Route>
      <Route path="/deliverer" element={<DelivererPage />}>
        <Route path="" element={<ApplicationsPage2 />} />
        <Route path="delivered" element={<DeliveredPage2 />} />
      </Route>
    </Routes>
  );
}

export default App;
