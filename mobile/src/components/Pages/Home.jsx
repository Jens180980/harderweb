import React from "react";
import { Header } from "../Partials/Header/Header";
import Footer from "../Partials/Footer/Footer";
import { AccordionBig } from "../Partials/AccordionBig/AccordionBig";

const Home = () => {
  return (
    <div>
      <Header pageTitle="Front Page" />
      <AccordionBig />
      <Footer />
    </div>
  );
};

export default Home;
