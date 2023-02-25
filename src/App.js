import React from "react";
import { Route, Routes } from "react-router-dom";
import { BasketPage } from "./pages/BasketPage";
import { HomePage } from "./pages/HomePage";
import { AllProducts } from "./pages/ProductPages/AllProducts";
import { Drinks } from "./pages/ProductPages/Drinks";
import { Salads } from "./pages/ProductPages/Salads";
import { Soups } from "./pages/ProductPages/Soups";
import { UserPage } from "./pages/UserPage";
import { AdminPage } from "./pages/AdminPage";
import { AddPage } from "./pages/AdminPages/AddPage";
import { ApplicationsPage } from "./pages/AdminPages/ApplicationsPage";
import { UsersPage } from "./pages/AdminPages/UsersPage";
import { DeliveredPage } from "./pages/AdminPages/DeliveredPage";
import { StatisticsPage } from './pages/AdminPages/StatisticsPage';

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
    </Routes>
  );
}

export default App;
