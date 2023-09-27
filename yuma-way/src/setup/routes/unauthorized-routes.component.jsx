import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/home/home.page";
import AboutPage from "../../pages/about/about.page";
import ResearchPage from "../../pages/research/research.page";
import ShopPage from "../../pages/shop/shop.page";
import SignUpPage from "../../pages/sign-up/sign-up.page";
import BlogPage from "../../pages/blog/blog.page";
import ResourcesPage from "../../pages/resources/resources.page";
import LoginPage from "../../pages/login/login.page";
import GetStartedPage from "../../pages/get-started/get-started.page";
const UnauthorizedRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/research" element={<ResearchPage />}></Route>
        <Route path="/shop" element={<ShopPage />}></Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
        <Route path="/blog" element={<BlogPage />}></Route>
        <Route path="/resources" element={<ResourcesPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/get-started" element={<GetStartedPage />}></Route>
      </Routes>
    </>
  );
};

export default UnauthorizedRoutes;
