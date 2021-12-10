import Header from "../components/Header";
import Main from "../components/Main";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import ImageComponent from "../components/ImageComponent";
import Quote from "../components/Quote";
import Synopsis from "../components/Synopsis";
import MainHeader from "../components/MainHeader";
import IconWrapper from "../components/IconWrapper";
import dataDec from "./api/december.json";
import Wrapper from "../components/Wrapper";

export default function Home({ theme }) {
  const d = new Date();
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const stringDay = String(day)
  const stringMonth = String(month)
  const dayID;

  // if(day < 10){
  //   dayID = `0${stringDay}${stringMonth}`
  // }
  // if(day < 10 && month < 10){
  //   dayID = `0${stringDay}0${stringMonth}`
  // }
  // if(day > 10 && month < 10){
  //   dayID = `${stringDay}0${stringMonth}`
  // }
  // else {
    dayID = `${stringDay}${stringMonth}`
  // }
  console.log(dataDec);
  
  const pageInfo = {
    page: {
      img: {
        url: [
          require("../assets/img/marcus-aurelius.jpg"),
          require("../assets/img/Screen-Shot-2020-03-02-at-1.05.47-PM.webp"),
          require("../assets/img/220px-Epicteti_Enchiridion_Latinis_versibus_adumbratum_(Oxford_1715)_frontispiece.jpg"),
        ],
      },
    },
  };
  const randomnumbergenerator = Math.floor(
    Math.random() * (pageInfo.page.img.url.length - 1)
  );

  const pageTitle = dataDec[`'${dayID}'`].title;
  const pageDay = `${dataDec[`'${dayID}'`].date.day} ${
    dataDec[`'${dayID}'`].date.month
  }`;
  const pagePhiloPic = pageInfo.page.img.url[randomnumbergenerator];
  const pagePhiloSrc = dataDec[`'${dayID}'`].img.src;
  const pageFilosof = dataDec[`'${dayID}'`].filosof;
  const pageQuote = dataDec[`'${dayID}'`].quote;
  const pageRef = dataDec[`'${dayID}'`].reference;
  const pageSynopsis = dataDec[`'${dayID}'`].synopsis;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      let theme;
      if (localStorage) {
        theme = localStorage.getItem("theme");
        root.classList.add(localStorage.theme);
      }
    }
  }, [theme]);
  return (
    <Wrapper>
      <Header />
      <Main>
        <MainHeader title={pageTitle} date={pageDay} />
        <ImageComponent
          source={pagePhiloPic}
          alt={pagePhiloSrc}
          filosof={pageFilosof}
        />
        <Quote quote={pageQuote} refer={pageRef} />
        <Synopsis para={pageSynopsis} />
        <IconWrapper />
      </Main>
      <Footer />
    </Wrapper>
  );
}
