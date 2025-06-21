import React from "react";
import MainCarousel from "../components/MainCarousel/HomeCarousel";
import HomeSectionCarousel from "../components/HomeSectionCarousel/HomeSectionCarousel";
import { mensKurta } from "../../Data/mensKurta";

const HomePage = () => {
  return (
    <>
      <div className="mb-8">
        <MainCarousel />
      </div>
      <div className="flex flex-col px-5 lg:px-10 space-y-10">
        <HomeSectionCarousel data={mensKurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarousel data={mensKurta} sectionName={"Men's Shoes"} />
        <HomeSectionCarousel data={mensKurta} sectionName={"Men's Jewelery"} />
        <HomeSectionCarousel data={mensKurta} sectionName={"Men's Stuff"} />
      </div>
    </>
  );
};

export default HomePage;
