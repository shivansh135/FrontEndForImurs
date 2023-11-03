import React, { useEffect, useState } from "react";
import "./home.css";

import { InfiniteMarquee } from "../marquee/marquee";
import { FlipbookContainer } from "../flipBookShow/flipBookShow";
import { VideoBackground } from "../displayVideo/video";
import { PartnerInvite } from "../partnerInvite/partnerInvite";

import { DecorCard } from "../product/cards/decorCard/decorCard";
import { ProcessContainer } from "../product/cards/processCard/processCard";
import ProductGrid from "../product/product-grid/product-grid";
import { MainHeading } from "../headings/heading";
import Carousel from "../feedback/courosal/courosal/courosal";
import Courosal from "../feedback/courosal/courosal/courosal";
import { PopUpTest } from "../popup/test";

export const Home = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch("https://apis.iamyourstory.in/api/product")
      .then((response) => response.json())
      .then((data) => {
        // Store the fetched data in the 'info' state variable

        setInfo(data.product);
        console.log(data.product);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div
      className="body"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "0px",
      }}
    >
      <VideoBackground />
      <FlipbookContainer source={"Print_DikshaUtkarsh.pdf"} />
      <InfiniteMarquee />
      <div className="cardsspacing">
        {" "}
        <MainHeading name="Imurs' Greatest Hits" />
        <ProductGrid info={info} />
      </div>

      <ProcessContainer />

      <div className="cardsspacing">
        {" "}
        <MainHeading name="Renovating Homes" />
        <DecorCard />
      </div>

      <Courosal />


      <PartnerInvite />
    </div>
  );
};
