import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/home/home.page";
import AboutPage from "../../pages/about/about.page";
import ResearchPage from "../../pages/research/research.page";
import ShopPage from "../../pages/shop/shop.page";
import SignUpPage from "../../pages/sign-up/sign-up.page";
const UnauthorizedRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/research" element={<ResearchPage />}></Route>
        <Route path="/shop" element={<ShopPage />}></Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
      </Routes>
    </>
  );
};

export default UnauthorizedRoutes;
