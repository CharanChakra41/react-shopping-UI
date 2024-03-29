import React, { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Collections from "../components/Collections";
import Footer from "../components/Footer";
import Women from "../components/Women";

import { Gents, Ladies } from "../data";

const Main = () => {
  const [gentsFashion, setGentsFashion] = useState(Gents);
  const [womenFashion, setWomenFashion] = useState(Ladies);
  console.log(Gents);
  console.log(Ladies);

  return (
    <div>
      <Header />
      <Banner />
      <Collections gentsFashion={gentsFashion} />
      <Women womenFashion={womenFashion} />
      <Footer />
    </div>
  );
};

export default Main;
