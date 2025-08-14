import React from "react";
import Header from "../../components/Header/Header";
import FooterScreen from "../../components/Footer/Footer";
import BestSellerScreen from "../../components/Main/Main";
import MiddleSection from "../../components/MiddleSection/MiddleSection";

const HomePage = () =>{
  return(
    <div>
      <Header/>
      <BestSellerScreen/>
      <MiddleSection/>
      <FooterScreen/>
      
    </div>
  )
}

export default HomePage;