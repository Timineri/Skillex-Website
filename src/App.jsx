// import React from "react";

import RecipeReviewCard from "./components/Cards";
import HeaderSection from "./components/HeaderSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./index.css";

export default function App() {
  return (
    <div className="body">
      <Navbar />
      <HeaderSection />
      <RecipeReviewCard />
      <Footer />
    </div>
  );
}
