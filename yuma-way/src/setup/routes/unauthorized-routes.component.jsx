import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/home/home.page";
import AboutPage from "../../pages/meet-our-team/meet-our-team.page";
import ResearchPage from "../../pages/science-and-safety/science-and-safety.page";
import OurServicesPage from "../../pages/our-services/our-services.page";
import LoginPage from "../../pages/login/login.page";
import GetStartedPage from "../../pages/get-started/get-started.page";
import FrequentlyAskedQuestionsPage from "../../pages/faq/faq.page";
import NewCandidatePage from "../../pages/new-candidate/new-candidate.page";
import ScrollToTop from "../../components/scroll-to-top/scroll-to-top.component";
const UnauthorizedRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/our-services" element={<OurServicesPage />}></Route>
        <Route path="/meet-our-team" element={<AboutPage />}></Route>
        <Route path="/science-and-safety" element={<ResearchPage />}></Route>
        <Route path="/new-candidate" element={<NewCandidatePage />}></Route>
        <Route path="/faq" element={<FrequentlyAskedQuestionsPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/get-started" element={<GetStartedPage />}></Route>
      </Routes>
    </>
  );
};

export default UnauthorizedRoutes;
