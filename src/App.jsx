import React from "react";
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import CardsNft from "./components/CardsNft";

const App = () => {
  return (
    <>
      <main className="bg-[white] md:pt-[102px] md:pb-[80px] py-[30px] px-[20px] md:px-[80px] lg:px-[140px] min-h-[100vh]">
        <Header/>
        <HeroSection/>
        <CardsNft/>
      </main>
    </>
  );
};

export default App;
