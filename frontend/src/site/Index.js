import React, { useEffect, useRef } from "react";
import HeroSlider from "../components/HeroSlider";
import { Filter_size_form } from "../components/Filter_size_form";
import Category_cards from "../components/Category_cards";
import Product_cards from "../components/Product_cards";
import Packing_quality from "../components/Packing_quality";
import Swiper_banner_slider from "../ui/sliders/Swiper_banner_slider";
import Categorie_slider from "../ui/sliders/Categorie_slider";
import Banner from "../components/Banner";
// import Faq from "../components/Faq";

const Index = () => {
  const type_1 = "";
  const type_2 = "Recently Viewed";
  const type_3 = "Packaging Material";
  const type_4 = "";
  const type_5 = "Personal Care";
  const type_6 = "Pet Care";

  const Packaging =
    "https://img.freepik.com/premium-photo/close-up-shot-various-packaging-materials-like-boxes-tape-bubble-wrap_933496-15257.jpg?w=826";
  const Personal =
    "https://as1.ftcdn.net/v2/jpg/03/27/64/26/1000_F_327642682_YobmH8NDkMbyyJBTCfR7MzH1wZ9G2IdQ.jpg";

  const pet =
    "https://i1.wp.com/pet-care.co.za/wp-content/uploads/2018/07/Pet-Care-Banner.jpg?ssl=1";
  return (
    <>
      <Swiper_banner_slider />
      <Categorie_slider title={type_1} />
      {/* <HeroSlider /> */}
      <Filter_size_form />

      <Categorie_slider title={type_2} />
      <Banner title={type_3} img={Packaging} />
      {/* <Categorie_slider title={type_4} /> */}
      <Product_cards />
      <Banner title={type_5} img={Personal} />
      <Categorie_slider title={type_4} />
      <Banner title={type_6} img={pet} />
      {/* <Category_cards/>
      <Product_cards/>
      <Packing_quality/> */}
      {/* <div>
        <Faq/>
      </div> */}
    </>
  );
};

export default Index;
